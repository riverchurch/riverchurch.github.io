'use strict';

var Hapi = require('hapi');
var path = require('path');
var PORT = 8000;
var readdir = require('fs').readdirSync;

var server = new Hapi.Server();
server.connection({port: PORT});

// load plugins

server.register(
  readdir('plugins').map(function(p) { return require('./plugins/' + p); }),
  startServer
);

// set view engine

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

// load routes

require('./routes')(server);

function startServer() {
  server.start(function () {
    server.log('info', 'Server running at: ' + server.info.uri);
  });
}
