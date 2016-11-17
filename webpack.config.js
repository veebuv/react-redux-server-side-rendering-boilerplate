const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: ['babel-polyfill',
    './src/index.js',
  ],
  output: {
    path: __dirname + '/built',
    filename: 'bundle.js',
    publicPath: 'built/',
  },
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        presets: ['es2015', 'stage-0', 'react'],
        loaders: ['babel'], exclude: /node_modules/,
      },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]!postcss?parser=postcss-scss'),
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file?name=[name].[ext]', exclude: /node_modules/,
      },
    ],
  },

  postcss() {
    return [
      require('autoprefixer')({
        browsers: [
          'last 2 Chrome versions',
          'Explorer >= 10',
          'last 2 Firefox versions',
          'Safari >= 8',
        ],
      }),
    ];
  },
};

const serverConfig = {
  name: 'server',
  target: 'node',
  externals: [nodeExternals()],
  entry: ['babel-polyfill',
    './lib/server.js',
  ],
  output: {
    path: __dirname + '/built',
    filename: './server.js',
    publicPath: 'built/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        presets: ['es2015', 'stage-0', 'react'],
        loaders: ['babel'], exclude: /node_modules/,
      },
      { test: /\.json$/, loader: 'json', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: 'css-loader/locals?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
      },
      { test: /\.(png|jpg|jpeg|gif|svg|woff)$/,
        loader: 'file?name=[name].[ext]', exclude: /node_modules/,
      },
    ],
  },

  postcss() {
    return [
      require('autoprefixer')({
        browsers: [
          'last 2 Chrome versions',
          'Explorer >= 10',
          'last 2 Firefox versions',
          'Safari >= 8',
        ],
      }),
    ];
  },

};

module.exports = [config, serverConfig];
