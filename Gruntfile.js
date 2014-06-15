module.exports = function(grunt) {
  require('time-grunt')(grunt);

  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    // Sass
    sass: {
      dist: {
        files: {
          '_assets/css/style.css' : '_assets/scss/style.scss'
        }
      }
    },

    // Auto-prefix CSS properties using Can I Use?
    autoprefixer: {
      options: {
        // Last 2 versions of all browsers, plus IE7/8, BB10 (LOL), and Android 3+
        browsers: ['last 2 versions', 'ie 8', 'ie 7', 'bb 10', 'android 3']
      },
      no_dest: {
        // File to output
        src: '_assets/css/style.css'
      },
    },

    csso: {
      dist: {
        options: {
          report: 'min',
        },
        files: {
          '_assets/css/style.min.css': ['_assets/css/style.css'],
        },
      },
    },

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
    },

    // Jekyll with drafts
    jekyll: {
      dist: {

      }
    },

    // Watch files for changes
    watch: {

      css: {
        files: [
          '_assets/scss/**/*'
        ],
        // Run Sass, autoprefixer, and CSSO
        tasks: ['sass', 'autoprefixer', 'csso'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },

      images: {
        files: [
          'static/images/**/*'
        ],
        tasks: ['svgmin', 'svg2png', 'styles'],
        options: {
          interrupt: true,
          spawn: false,
        },
      },

      site: {
        files: [
          '**/*',
          '.htaccess',
          '!**/node_modules/**',
          '!**/_site/**'
        ],
        tasks: ['jekyll'],
        options: {
          spawn: false,
        },
      },

    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-responsive-images');

  // Register tasks
  grunt.registerTask('images', ['responsive_images', 'imagemin']);
  grunt.registerTask('default', ['sass', 'autoprefixer', 'csso', 'jekyll']);
  grunt.registerTask('dev', ['sass', 'autoprefixer', 'csso', 'jekyll', 'watch']);
  grunt.registerTask('build', ['images', 'default']);
};
