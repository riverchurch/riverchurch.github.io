var path = require('path');
// build css
require('./scripts/rcss');
var entries = require('fs').readdirSync('./views/client').reduce(function(o, n) {
  o[n.replace('.jsx', '')] = './views/client/' + n;
  return o;
}, {});
console.log(entries);

module.exports = {
  entry: entries,
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join('public', 'js'),
    publicPath: '/js/'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
      { test: require.resolve('react'), loader: 'expose?React' }
    ]
  },
  /*
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('common', filenameTemplate, [selectedChunks], [minChunks])
  ]
  */
};
