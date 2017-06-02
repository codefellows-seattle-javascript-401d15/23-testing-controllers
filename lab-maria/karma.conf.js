// Karma configuration
// Generated on Mon May 29 2017 18:56:36 GMT-0700 (PDT)

const webpack = require('./webpack.config.js');
delete webpack.entry;

module.exports = function(config) {
  config.set({
    webpack,
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
      'app/entry.js',
      'test/**/*-test.js',
    ],
    exclude: [
    ],
    preprocessors: {
      'app/entry.js': ['webpack'],
      'test/**/*-test.js': ['webpack'],
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
};
