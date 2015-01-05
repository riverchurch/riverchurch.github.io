var path = require('path');
// build css
require('./rcss');

module.exports = {
  entry: './views/client.jsx',
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
  }
};
