var Hapi = require('hapi');
var Good = require('good');
var PORT = 8000;

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({port: PORT});

// Add the route
server.route({
  method: 'GET',
  path:'/', 
  handler: function (request, reply) {
    reply('hello world');
  }
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

