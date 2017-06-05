'use strict';

const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/index.js',
      'test/**/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'app/index.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['progress'],
    browserConsoleLogOptions: {
      level: 'log',
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  });
};
