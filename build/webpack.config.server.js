const path = require('path');

const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');
module.exports = webpackMerge(baseConfig, {
  target: 'node',
  entry: {
    app: path.join(__dirname, '../client/index.server.js'),
  },
  output: {
    filename: 'index.server.js',
    libraryTarget: 'commonjs2',
  },
});
