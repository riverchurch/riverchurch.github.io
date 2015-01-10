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
    method: 'POST',
    path: '/contact',
    config: {
      validate: {
        options: {abortEarly: false},
        payload: {
          name: Joi.string().min(3).max(10).label('Name'),
          email: Joi.string().email().label('Email'),
          phone: Joi.string().min(7).max(12).label('Phone'),
          'life-status': Joi.string().valid(['Single', 'Married']).label('Life Status'),
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
      if (Mailer) {
        Mailer.sendMail(data, function (err, info) {
          if (err) server.log('error', err);
          else server.log('info', 'Mail sent.', info);
        });
      }

      reply('Thank you.');
    }
  });
};
