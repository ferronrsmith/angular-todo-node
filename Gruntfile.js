/*global module */
module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta : {
            bin : {
                lintFiles : [
                    'Gruntfile.js',
                    'testacular.conf.js',
                    'js/controllers/*.js',
                    'js/directives/*.js',
                    'js/services/*.js',
                    'js/app.js',
                    'test/unit/*.js'
                ]
            }
        },
        jslint: {
            all : {
                src: '<%= meta.bin.lintFiles %>',
                options: { }
            }
        },
        karma: {
            options: {
                singleRun: true,
                browsers: ['PhantomJS']
            },
            unit: {
                configFile: 'testacular.conf.js'
            }
        },
        watch: {
            files: '<%= meta.bin.lintFiles %>',
            tasks: ['jslint', 'karma:unit']
        },
        coveralls: {
            options: {
                coverage_dir: 'coverage'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-karma-coveralls');
//    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('test', ['jslint', 'karma:unit']);
    grunt.registerTask('default', ['jslint', 'karma:unit', 'coveralls']);

};