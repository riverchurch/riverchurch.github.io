/** @flow */
require('isomorphic-fetch');

const projectName = require('../package.json').name;

const debug = require('debug')('app startup');

import Hapi from 'hapi';
import React from 'react';
import Inert from 'inert';
import Vision from 'vision';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router'
import {createLocation} from 'history';
import {Resolver} from 'react-resolver';
import routes from '../routes';
import {resources} from './webpack';

import {readFileSync as read} from 'fs';
import {join} from 'path';

import {
  api,
  contact,
  mailer,
  staticAssets,
} from '../plugins';

var tmpl = o => read('./index.html', 'utf8')
  .replace('†react†', o.html)
  .replace('†__resolver__†', JSON.stringify(o.data))
  .replace('†head†', resources());

var server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: +process.env.PORT,
});

if (!module.parent) {
  server.register(Inert, () => {});
  server.register(Vision, () => {});

  server.register({register: api}, {
    routes: {prefix: '/api'},
  }, function(err) {
    if (err) debug('OH NO THE API BLEW UP');
  });

  server.register({register: staticAssets}, {}, function(err) {
    if (err) debug('OH NO THE STATIC FILE SERVER BLEW UP');
  });

  server.register(mailer, {}, function(err) {
    if (err) debug('OH NO THE MAILMAN HAS GONEO DOWN!');
  });
}

server.route({
  method: 'GET',
  path: '/favicon.ico',
  handler(request, reply) {
    return reply.file(join('public', 'favicon.ico'));
  },
});

server.route({
  method: 'POST',
  path: '/contact',
  config: contact.config,
  handler: contact.handler,
});

// for iTunes integration
server.route({
  method: 'GET',
  path: '/feed/podcast',
  handler: function(request, reply) {
    return reply.redirect('http://feeds.soundcloud.com/users/soundcloud:users:118020810/sounds.rss').code(301);
  },
});

// TODO: handle 500s correctly
server.route({
  method: 'GET',
  path: '/{location*}',
  handler: function(request, reply) {
    // return reply(tmpl({html: '', data: undefined}));

    var location = createLocation(request.path + '?' + request.query);
    function onError(err) {
      debug('Router Error', err);
      console.log(err.stack);
      reply(tmpl({html: '<h1>500 error</h1>', data: {}}));
    }

    function onAbort(redirect) {
      debug('onAbort', redirect);
      reply.redirect(redirect.to);
    }

    match({routes, location}, (error, redirectLocation, renderProps) => {
      if (error) {
        console.error('error', error);
        console.log(error);
        reply.status(500).send(error);
      }
      else if (redirectLocation) {
        reply.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }
      else if (renderProps) {
        Resolver
          .resolve(() => <RouterContext {...renderProps} />)
          .then(({ Resolved, data }) => {
            reply(tmpl({html: renderToString(<Resolved />), data}));
          })
         .catch(onError);
      }
      else {
        reply.send(404, 'Not found');
      }
    });
  },
});

debug('app server starting on ' + process.env.PORT);
server.start(function() {
  debug('app server listening on ' + process.env.PORT);
});

export default server;

