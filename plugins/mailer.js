'use strict';

var Mailer = require('hapi-mailer');

var options = {
  transport: {
    service: 'Gmail',
    auth: {
      user: 'example@gmail.com',
      pass: 'password',
    }
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
