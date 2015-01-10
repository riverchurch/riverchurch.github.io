'use strict';

var Joi = require('joi');
var path = require('path');

module.exports = function(server) {

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
    handler: function (request, reply) {
      reply.view('index', {})
        .header('Content-Type', 'text/html;charset=UTF-8');
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
        }
      }
    },
    handler: function(request, reply) {
      var payload = request.payload;

      var data = {
        from: payload.email,
        to: process.env.MAILER_TO,
        subject: 'RiverChurch.com Contact Form',
        html: {
          path: 'contact-email.jsx'
        },
        context: payload,
      };

      var Mailer = request.server.plugins.mailer;
      if (Mailer && false) {
        Mailer.sendMail(data, function(err, info) {
          if (err) server.log('error', err);
          else server.log('info', 'Mail sent.', info);
        });
      }

      switch (request.headers.accept) {
      case 'application/json':
        reply({message: 'Thank you.'}).code(200);
        break;
      default:
        reply('Thank you.');
      }
    }
  });
};
