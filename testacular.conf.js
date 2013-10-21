/*global module */
// Karma configuration
// Generated on Sat Jun 01 2013 03:31:03 GMT-0400 (AST)

module.exports = function (config) {
    "use strict";
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'js/libs/**/jquery-*.js',
            'js/libs/**/angular.js',
            'js/libs/**/angular-resource.js',
            'js/libs/**/angular-route.js',
            'js/libs/**/matchers.js',
            'js/app.js',
            'js/services/*.js',
            'js/directives/*.js',
            'js/controllers/*.js',
            'test/vendor/angular-mocks.js',
            'test/unit/*.js'
        ],
        autoWatch: true,
        browsers: ['PhantomJS'],
        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },
        reporters: ['progress', 'coverage'],
        coverageReporter : {
            type : 'lcov',
            dir : 'coverage/'
        },
        preprocessors : {
            '**/js/controllers/*.js' : 'coverage',
            '**/js/directives/*.js' : 'coverage',
            '**/js/services/*.js' : 'coverage',
            '**/app/scripts/app.js' : 'coverage'
        }
    });
};