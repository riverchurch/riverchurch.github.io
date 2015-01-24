'use strict';

var Joi = require('joi');
var path = require('path');
var service = require('./model/service');
var validateHuman = require('./lib/validateHuman');
var CONTENT = require('./model/content');
var extend = require('./lib/extend');

module.exports = function(server) {
  server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: {
      file: function (request) {
        return path.join('public', 'favicon.ico');
      }
    }
  });

  // static file server
  ['css', 'js', 'images'].forEach(function(a) {
    server.route({
      method: 'GET',
      path: '/public/' + a + '/{filename}', // param* for other syntax
      handler: {
        file: function (request) {
          return path.join('public', a, request.params.filename);
        }
        /* why is this syntax not working?
        directory: {
          path: __dirname + '/public'
        }
        */
      }
    });
  });

  server.route({
    method: 'GET',
    path:'/',
    handler: function(request, reply) {
      // TODO: contextify each response: https://github.com/brianmcd/contextify
      service.get().then(function(sunday) {
        reply.view('home', extend({}, CONTENT, {sunday: sunday}))
          .header('Content-Type', 'text/html;charset=UTF-8');
      });
    }
  });

  server.route({
    method: 'GET',
    path:'/connect', 
    handler: function (request, reply) {
      reply.view('connect', {})
        .header('Content-Type', 'text/html;charset=UTF-8');
    }
  });

  server.route({
    method: 'GET',
    path: '/feed/podcast',
    handler: function(request, reply) {
      return reply.redirect('http://feeds.soundcloud.com/users/soundcloud:users:118020810/sounds.rss').code(301);
    }
  });

  server.route({
    method: 'POST',
    path: '/contact',
    config: {
      validate: {
        options: {abortEarly: false},
        payload: {
          'full-name': Joi.string().min(3).max(30).label('Full Name'),
          email: Joi.string().email().label('Email'),
          phone: Joi.string().min(7).max(12).label('Phone'),
          prayer: Joi.string().optional().allow('').label('Prayer'),
          'whatcha-need': Joi.string().optional().allow('').label('How can we best serve you?'),
          'g-recaptcha-response': Joi.string().allow(''),
        }
      }
    },
    handler: function(request, reply) {
      var payload = request.payload;

      validateHuman(request).then(function(isHuman) {
        var data = {
          from: payload.email,
          to: process.env.MAILER_TO,
          subject: 'RiverCharlotte.com Contact Form',
          html: {
            path: 'contact-email.jsx'
          },
          context: payload,
        };

        var Mailer = request.server.plugins.mailer;
        if (Mailer) {
          server.log('info', 'Sending mail', data);
          Mailer.sendMail(data, function(err, info) {
            if (err) server.log('error', err);
            else server.log('info', 'Mail sent.', info);
          });
        }

        switch (request.headers.accept) {
        case 'application/json':
          reply({message: 'We have received your message and are thankful you have contacted us.'}).code(200);
          break;
        default:
          // TODO: handle js free thank you view
          service.get().then(function(sunday) {
            reply.view('home', {sunday: sunday, message: 'Thank you.'})
              .header('Content-Type', 'text/html;charset=UTF-8');
          });
        }
      });
    }
  });

  server.route({
    method: 'GET',
    path: '/api/last-sunday',
    handler: function(request, reply) {
      service.get().then(function(data) {
        reply({sunday: sunday});
      });
    }
  });
};
