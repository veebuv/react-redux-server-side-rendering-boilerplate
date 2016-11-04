const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: [
    './src/index.js',
  ],
  output: {
    path: __dirname + "/lib",
    publicPath: '/',
    filename: 'bundle.js',
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("styles.css"),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        presets: ['es2015', 'stage-0', 'react'],
        loaders: ['babel'], exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'),
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file?name=[name].[ext]', exclude: /node_modules/ },
    ],
  },
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: [
    './server.js',
  ],
  output: {
    path: __dirname + '/built',
    filename: 'server.js',
    publicPath: 'built/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        presets: ['es2015', 'stage-0', 'react'],
        loaders: ['babel'], exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
      },
    ],
  },

};

module.exports = [config, serverConfig];
