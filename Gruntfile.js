module.exports = function(grunt) {

    // project configuration
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            files: ['./src/**/*.js', './test/**/*.spec.js']
        },

        mochaTest: {
            files: ['./test/**/*.spec.js']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    grunt.registerTask('build', ['jshint']);
    grunt.registerTask('test', ['mochaTest']);
    grunt.registerTask('default', ['build', 'test']);
}