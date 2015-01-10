var RCSS = require('rcss');
var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..', 'styles');

var normalize = fs.readFileSync(path.join(ROOT, 'normalize.css'));
var base = fs.readFileSync(path.join(ROOT, 'base.css'));

// fill up RCSS's registry
require('./../styles/all');
var app = RCSS.getStylesString()
fs.writeFileSync('public/css/all.css', [normalize,base,app].join('\n'));
