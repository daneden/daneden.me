module.exports = function(grunt) {
  require('time-grunt')(grunt);

  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    responsive_images: {
      dist: {
        options: {
          quality: 75,
          engine: 'gm',
          sizes: [{
            name: 'small',
            width: 320,
          }, {
            name: 'small@2x',
            width: 640,
          }, {
            name: 'medium',
            width: 660,
          }, {
            name: 'medium@2x',
            width: 1320,
          }, {
            name: 'large',
            width: 960,
          }, {
            name: 'large@2x',
            width: 1920,
          }],
        },
        files: [{
          expand: true,
          src: ['**/*.{jpg,jpeg,gif,png}'],
          cwd: './_uploads/',
          dest: 'uploads/'
        }],
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'uploads',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'uploads/',
        }],
      },
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-responsive-images');

  // Register tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['responsive_images', 'imagemin']);
};
