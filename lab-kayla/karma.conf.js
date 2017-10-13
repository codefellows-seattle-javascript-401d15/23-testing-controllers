// Karma configuration
// Generated on Sat Jun 03 2017 21:42:54 GMT-0700 (PDT)

module.exports = function(config) {
  config.set({

    basePath: '',


    frameworks: ['jasmine'],


    files: [
      'entry.js',
      'test/**/*-test.js'
    ],


    exclude: [
    ],


    preprocessors: {
    },


    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: false,
    browsers: ['Chrome'],


    singleRun: false,

    concurrency: Infinity
  })
}
