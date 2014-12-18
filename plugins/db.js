'use strict';

var Level = require('hapi-level');

var options = {
  path: './data',
  config: {
    valueEncoding: 'json' // utf8 by default as with LevelUP
  }
};

var plugin = {
  register: Level,
  options: options,
};

module.exports = plugin;
