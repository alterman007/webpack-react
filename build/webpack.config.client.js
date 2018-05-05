const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const isDev = process.env.NODE_ENV === 'development';

const config = webpackMerge(baseConfig, {
  entry: {
    app: path.join(__dirname, '../client/index.js'),
  },
  output: {
    filename: '[name].[hash:5].js',
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../client/index.html'),
    }),
  ],
});

if (isDev) {
  config.entry = {
    app: [
      'react-hot-loader/patch',
      path.join(__dirname, '../client/index.js'),
    ],
  };
  config.devServer = {
    host: '0.0.0.0',
    port: 8888,
    contentBase: path.join(__dirname, '../dist'),
    publicPath: '/public',
    historyApiFallback: {
      index: '/public/index.html',
    },
    hot: true,
    overlay: {
      errors: true,
    },
  };
  config.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = config;
