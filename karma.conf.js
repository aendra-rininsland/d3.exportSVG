// Karma configuration file
//
// For all available config options and default values, see:
// https://github.com/karma-runner/karma/blob/stable/lib/config.js#L54

module.exports = function (config) {
  'use strict';

  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    frameworks: [
      'mocha',
      'fixture'
    ],
    
    client: {
      captureConsole: true,
      mocha: {
        bail: true
      }
    },
    
    preprocessors: {
      '**/*.html'   : ['html2js'],
      '**/*.json'   : ['json_fixtures']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/js-fixtures/fixtures.js',
      'node_modules/chai/chai.js',
      'node_modules/d3/d3.js',
      'node_modules/jquery/dist/jquery.js',
      'd3.exportSVG.js',
      {pattern: 'test/fixtures/**/*'},
      'test/**/*.js'
    ],

    // use dots reporter, as travis terminal does not support escaping sequences
    // possible values: 'dots', 'progress', 'junit', 'teamcity'
    // CLI --reporters progress
    reporters: ['dots', 'spec'],

    // enable / disable watching file and executing tests whenever any file changes
    // CLI --auto-watch --no-auto-watch
    autoWatch: true,

    // start these browsers
    // CLI --browsers Chrome,Firefox,Safari
    browsers: [
      // 'Chrome',
      // 'Firefox',
      'Safari'
    ],

    // if browser does not capture in given timeout [ms], kill it
    // CLI --capture-timeout 5000
    captureTimeout: 20000,

    // auto run tests on start (when browsers are captured) and exit
    // CLI --single-run --no-single-run
    singleRun: false,

    plugins: [
      'karma-mocha',
      'karma-spec-reporter',
      'karma-requirejs',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-ie-launcher',
      'karma-safari-launcher',
      'karma-html2js-preprocessor',
      'karma-json-fixtures-preprocessor',
      'karma-fixture'
    ]
  });
};
