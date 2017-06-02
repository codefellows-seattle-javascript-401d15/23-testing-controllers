'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/app/build`,
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\/.(eot|woff|ttf|svg).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]',
      },
    ],
  },
};
