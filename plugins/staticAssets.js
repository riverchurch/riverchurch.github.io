/** @flow */

import path from 'path';

function register(server: mixed, options: mixed, next: Function): void {
  server.route({
    method: 'GET',
    path: `/cdn/{filename}`, // param* for other syntax
    handler: {
      file(request: mixed): string {
        return path.join('dist', request.params.filename);
      }
    }
  });

  // static file server
  ['css', 'js', 'images'].forEach(a => {
    server.route({
      method: 'GET',
      path: `/public/${a}/{filename}`, // param* for other syntax
      handler: {
        file(request: mixed): string {
          return path.join('public', a, request.params.filename);
        }
        // why is this syntax not working?
        // directory: {path: __dirname + '/public'}
      }
    });
  });

  next();
};

register.attributes = {
  name: 'staticAssets',
};

export default {register};
