/*!
 * datastructures-js
 * Gruntfile
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(grunt) {

    // project configuration
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: '.jshintrc'
            },
            files: ['./lib/**/*.js', './test/**/*.spec.js', './*.js']
        },

        mochaTest: {
            files: ['./test/**/*.spec.js']
        },

        mocha_istanbul: {
            coverage: {
                src: 'test',
                options: {
                    mask: '**/*.spec.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-mocha-istanbul');

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('test-coverage', ['mocha_istanbul']);
    grunt.registerTask('default', ['build', 'test', 'test-coverage']);
};