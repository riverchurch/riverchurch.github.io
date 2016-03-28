/** @flow */

import path from 'path';

export function register(server: mixed, options: mixed, next: Function): void {
  server.route({
    method: 'GET',
    path: `/cdn/{filename}`, // param* for other syntax
    handler(request, reply) {
      return reply.file(path.join('dist', request.params.filename));
    },
  });

  // static file server
  ['css', 'js', 'images'].forEach(a => {
    server.route({
      method: 'GET',
      path: `/public/${a}/{filename}`, // param* for other syntax
      handler(request, reply) {
        return reply.file(path.join('public', a, request.params.filename));
      },
    });
  });

  next();
};

register.attributes = {
  name: 'staticAssets',
};

