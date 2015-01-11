var RCSS = require('rcss');
var fs = require('fs');
var path = require('path');
var ROOT = path.join(__dirname, '..', 'styles');

var normalize = fs.readFileSync(path.join(ROOT, 'normalize.css'));
var base = fs.readFileSync(path.join(ROOT, 'base.css'));

require('mkdirp')(path.join(__dirname, '..', 'public', 'css'));
fs.watch(ROOT, {}, buildStyles);

// fill up RCSS's registry
function buildStyles() {
  Object.keys(require.cache).forEach(function(key) {
    delete require.cache[key];
  });

  require('./../styles/all');
  var app = RCSS.getStylesString()
  console.log('Writing public/css/all.css');
  fs.writeFileSync('public/css/all.css', [normalize,base,app].join('\n'));
}

buildStyles();
