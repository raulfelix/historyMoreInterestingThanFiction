module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // sassy settings
    sass: {
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/styles.css': 'assets/scss/master.scss'
        }
      }
    },

    // listen for changes
    watch: {
      js: {
        files: [
          'assets/js/**/*.js'
        ]
      },

      src: {
        files: [
          'assets/scss/**/*.scss'
        ],
        tasks: ['sass'],
        options: {
          interrupt: true,
          reload: true
        }
      }
    },

    concat: {},

    clean: {
      // clean compiled dirs
      dev: [
        'assets/css'
      ]
    }

  });


  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('do', ['watch']);
};
