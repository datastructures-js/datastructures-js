module.exports = (grunt) => {
  grunt.initConfig({
    eslint: {
      src: ['./*.js']
    }
  });

  grunt.loadNpmTasks('grunt-eslint');

  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['lint']);
};
