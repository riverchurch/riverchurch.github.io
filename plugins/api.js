/** @flow */

import {service, elvanto, elvantoPeople} from './api/index.js';
import _debug from 'debug';
const debug = _debug('api');

export function register(server: mixed, options: mixed, next: Function): void {
  server.route({
    method: 'GET',
    path: '/',
    handler(request: mixed, reply: mixed): void {
      reply('Greetings from the API!');
    },
  });

  server.route({
    method: 'GET',
    path: '/sunday-morning',
    handler(request: mixed, reply: mixed): void {
      service.get().then(reply);
    },
  });

  server.route({
    method: 'GET',
    path: '/calendar',
    handler(request: mixed, reply: mixed): void {
      elvanto().then(reply);
    },
  });

  /*
  server.route({
    method: 'GET',
    path: '/people',
    handler(request: mixed, reply: mixed): void {
      // TODO: ensure this is private
      elvantoPeople().then(reply);
    },
  });
  */

  next();
};

register.attributes = {
  name: 'api',
};

