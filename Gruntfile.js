'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      jade: {
        files: ['client/**/*'],
        tasks: ['build']
      }
    },
    jade: {
      build: {
        files: [{
          cwd: 'client',
          src: '**/*.jade',
          dest: 'public',
          ext: '.html',
          expand: true
        }]
      }
    },
    clean: {
      server: 'public'
    },
    copy: {
      css: {
        cwd: 'client',
        src: ['**/*.css'],
        dest: 'public',
        expand: true
      },
      js: {
        cwd: 'client',
        src: ['**/*.js'],
        dest: 'public',
        expand: true
      },
      assets: {
        cwd: 'client/assets',
        src: ['**/*'],
        dest: 'public/assets',
        expand: true
      },
      favicon: {
        cwd: 'client',
        src: ['favicon.ico'],
        dest: 'public',
        expand: true
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['jade', 'copy:css', 'copy:js', 'copy:assets', 'copy:favicon']);
  grunt.registerTask('default', ['build', 'watch']);

}
