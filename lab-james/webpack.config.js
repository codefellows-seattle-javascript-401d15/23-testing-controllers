'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: `${__dirname}/app/entry.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractTextPlugin({filename: 'bundle.css'}),
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            use: [
              { loader: 'css-loader',  options: { sourceMap: true } },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                  includePaths: [`${__dirname}/app/scss/`],
                },
              },
            ],
          }
        ),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
      },
      {
        test: /\.(eot|woff|ttf|svg).*/,
        loader: 'url?limit=10000&name=fonts/[hash].[ext]',
      },
    ],
  },
};
