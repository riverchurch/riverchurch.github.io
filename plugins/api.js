/** @flow */
var debug = require('debug')('api');

import {service, elvanto} from './api/index.js';

function register(server: mixed, options: mixed, next: Function): void {
  server.route({
    method: 'GET',
    path: '/',
    handler(request: mixed, reply: mixed): void {
      reply('Greetings from the API!');
    }
  });

  server.route({
    method: 'GET',
    path: '/sunday-morning',
    handler(request: mixed, reply: mixed): void {
      service.get().then(reply);
    }
  });

  server.route({
    method: 'GET',
    path: '/calendar',
    handler(request: mixed, reply: mixed): void {
      elvanto().then(reply);
    }
  });

  next();
};

register.attributes = {
  name: 'api',
};

export default {
  register,
};

