'use strict';

var Mailer = require('hapi-mailer');

var options = {
  transport: {
   service: 'Mandrill',
   auth: {
     user: process.env.MAILER_USERNAME,
     pass: process.env.MAILER_PASSWORD,
   },
  },
  views: {
    engines: {
      jsx: require('hapi-react-views'),
    },
    compileOptions: {
      'node-jsx': {harmony: true},
    },
    path: 'views/mailer',
  }
};

var plugin = {
  register: Mailer,
  options: options,
};

module.exports = plugin;
