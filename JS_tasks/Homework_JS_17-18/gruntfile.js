module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: 'js/src/*.js',
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      build: {
        src: 'js/dist/script.min.js',
        dest: 'js/dist/script.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify']);

};
