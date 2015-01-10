var RCSS = require('rcss');
var fs = require('fs');

var normalize = fs.readFileSync('./styles/normalize.css');
var base = fs.readFileSync('./styles/base.css');

require('./styles/all');
var app = RCSS.getStylesString()
fs.writeFileSync('public/css/all.css', [normalize,base,app].join('\n'));


