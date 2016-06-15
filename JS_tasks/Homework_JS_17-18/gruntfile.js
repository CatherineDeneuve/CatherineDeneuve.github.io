module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        stripBanners: {
                      block : false,
                      line : true
                  },
              separator: ';\n\r',
              banner: '/*\nConcatinated CSS file \n' +
                          'Author: Kate \n' +
                          'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                          '\n */ \n'

      },
      dist: {
        src: 'js/src/*.js',
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      dist: {
        src: 'js/dist/script.min.js',
        dest: 'js/dist/script.min.js'
      }
    },
    cssmin: {
        options: {
            shorthandCompacting: false,
            roundingPrecision: -1
        },
        target: {
          files: {
            'css/dist/style.min.css': ['css/src/*.css']
          }
        }
    },
    imagemin: {
      options: {
        cache: false
      },

      dist: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['src/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');


  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'imagemin']);

};
