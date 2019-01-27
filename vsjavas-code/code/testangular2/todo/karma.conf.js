/***
 * Excerpted from "Test-Driving JavaScript Applications",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/vsjavas for more book information.
***/
// Karma configuration
// Generated on Wed Jan 06 2016 07:51:31 GMT-0700 (MST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter

    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],

    // list of files / patterns to load in the browser

    files: [
      "./public/javascripts/zone.js/dist/zone.js",
      "./public/javascripts/reflect-metadata/Reflect.js",
      "./public/javascripts/rxjs/bundles/Rx.umd.js",
      "./public/javascripts/@angular/core/bundles/core.umd.js",
      "./public/javascripts/@angular/common/bundles/common.umd.js",
      "./public/javascripts/@angular/compiler/bundles/compiler.umd.js",      
      "./public/javascripts/@angular/" +
        "platform-browser/bundles/platform-browser.umd.js",
      "./public/javascripts/@angular/" +
        "platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
      "./public/javascripts/@angular/http/bundles/http.umd.js",

      './test/client/**/*.js',
      './public/src/app/tasks/tasks-sort.pipe.js',
      './public/src/app/tasks/tasks.service.js',
      './public/src/app/tasks/tasks.component.js',
      './public/src/main.js',
      './public/javascripts/common/validate-task.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      './public/src/**/*.js': 'coverage'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};