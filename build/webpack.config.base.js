const path = require('path');

module.exports = {
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/public/',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: [
          /node_modules/,
        ],
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/,
        ],
      },
    ],
  },
};
