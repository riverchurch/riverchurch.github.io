var Hapi = require('hapi');
var Good = require('good');
var path = require('path');
var PORT = 8000;

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({port: PORT});

// static file server
['css', 'js', 'images'].forEach(function(a) {
  server.route({
    method: 'GET',
    path: '/' + a + '/{param*}',
    handler: {
      directory: {
        path: 'dist/' + a
      }
    }
  });
});

// Add the route
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
    var props = require('./content');
    reply.view('index', props)
      .header('Content-Type', 'text/html;charset=UTF-8');
  }
});

server.views({
  engines: {
    jsx: require('hapi-react-views')
  },
  compileOptions: {
    renderMethod: 'renderToString',
    'node-jsx': {harmony: true},
  },
  path: 'views'
});

server.register({
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      args:[{ log: '*', response: '*' }]
    }]
  }
}, function (err) {
  if (err) {
    throw err; // something bad happened loading the plugin
  }

  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
});

