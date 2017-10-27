module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {                              // Task 
        dist: {                            // Target 
          options: {                       // Target options 
            style: 'expanded'
          },
          files: {                         // Dictionary of files 
            'css/style.css': 'css/style.scss'     // 'destination': 'source' 
         }   
        }
  },
    jshint: {
    all: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js']
    },
    watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass'],
          options: {
            livereload: true,
          },
        },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'jshint', 'watch']);

};