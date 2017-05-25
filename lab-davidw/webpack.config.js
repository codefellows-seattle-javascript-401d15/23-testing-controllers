'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/app/index.js`,
  },
  plugins: [
    new HTMLPlugin({template: `{__dirname}/app/index.html`}),
    new ExtractPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js#/,
        exclude: /node-modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]',
      },
    ],
  },
};
