var Hapi = require('hapi');
var Good = require('good');
var Joi = require('joi');
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
        'life-status': Joi.any().allow(['Single', 'Married']).label('Life Status'),
        prayer: Joi.string().optional().label('Prayer'),
        'whatcha-need': Joi.string().optional().label('How can we best serve you?'),
      }
    }
  },
  handler: function(request, reply) {
    reply('Thank you.');
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

