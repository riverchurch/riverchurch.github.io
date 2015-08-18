/** @flow */
require('isomorphic-fetch');

try {
  Object.assign(process.env, require('./.config'));
}
catch (e) {}

var projectName = require('../package.json').name;

var debug = require('debug')('app startup');

import path from 'path';
import Hapi from 'hapi';
import React from 'react';
import {renderToString} from 'react-dom/server';
import Router from 'react-router';
import Location from 'react-router/lib/Location';
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
  host: 'localhost',
  port: process.env.PORT,
});

if (!module.parent) {
  server.register({register: api}, {
    routes: {prefix: '/api'}
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
  handler: {
    file: function (request) {
      return path.join('public', 'favicon.ico');
    }
  }
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
  }
});

// TODO: handle 500s correctly
server.route({
  method: 'GET',
  path: '/{location*}',
  handler: function(request, reply) {
    // return reply(tmpl({html: '', data: undefined}));

    var location = new Location(request.path, request.query);
    function onError(err) {
      debug('Router Error', err);
      console.log(err.stack);
      reply(tmpl({html: '<h1>500 error</h1>', data: {}}));
    }

    function onAbort(redirect) {
      debug('onAbort', redirect);
      reply.redirect(redirect.to);
    }

    Router.run(routes, location, (error, initialState, transition) => {
      if (error) {
        console.error('error', error);
        console.log(error);
        res.status(500).send(error);
      }

      Resolver
        .resolve(() => <Router routes={routes} {...initialState} onAbort={onAbort} onError={onError} />)
         .then(({ Resolved, data }) => {
            reply(tmpl({html: renderToString(<Resolved />), data}));
         })
         .catch(onError);
    });
  },
});

debug('app server starting on ' + process.env.PORT);
server.start();

export default server;


