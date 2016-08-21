const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: [
    './server.js',
  ],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'server.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'], exclude: /node_modules/,
      },
    ],
  },
};
