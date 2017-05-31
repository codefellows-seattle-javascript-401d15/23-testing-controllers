'use strict';

const HTMLPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  // devtool: 'eval',
  entry: `${__dirname}/app/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/build`,
    // 2. path: `${__dirname}/build`,
  },
  plugins: [
    new HTMLPlugin({template: `${__dirname}/app/index.html`}),
    new ExtractTextPlugin('bundle.css'),
    // 1. new ExtractTextPlugin({filename: 'bundle.css'})
    // 2. new ExtractPlugin('bundle-[hash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        // loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
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
          }),
      },
    ],
    // loaders: [
    //   {
    //     test: /\.scss$/,
    //     use: ['style-loader', 'css-loader', 'sass-loader'],
    //   },
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     loader: ['babel-loader'],
    //   },
    //   {
    //     test: /\.(eot|woff|ttf|svg).*/,
    //     loader: 'url?limit=10000&name=fonts/[hash].[ext]',
    //   },
    // ],
  },
};

// 2. module: {
//   rules: [
//     {
//       test: /\.js$/,
//       exclude: /node_modules/,
//       loader: 'babel-loader',
//     },
//     {
//       test: /\.scss$/,
//       loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
//     },
//   ],
// }

// 1. use: ExtractTextPlugin.extract(
//   {
//     use: [
//       { loader: 'css-loader',  options: { sourceMap: true } },
//       {
//         loader: 'sass-loader',
//         options: {
//           sourceMap: true,
//           includePaths: [`${__dirname}/app/scss/`],
//         },
//       },
//     ],
//   }
// );
