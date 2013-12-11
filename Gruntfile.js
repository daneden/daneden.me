module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    // Sass
    sass: {
      dist: {
        options: {
          sourcemap: true,
          compass: true
        },
        files: {
          'assets/css/style.css' : 'assets/scss/style.scss'
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
        src: 'assets/css/style.css'
      },
    },

    // Minify CSS
    csso: {
      dist: {
        options: {
          banner: '/*# sourceMappingURL=style.css.map */'
        },
        files: {
          // Output compressed CSS to style.min.css
          'assets/css/style.min.css': ['assets/css/style.css']
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: '_uploads/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'uploads/'                  // Destination path prefix
        }],
      },
    },

    // Jekyll with drafts
    jekyll: {
      dist: {
        options: {
          drafts: true
        }
      }
    },

    // Watch files for changes
    watch: {
      css: {
        files: [
          'assets/scss/**/*',
          'assets/images/**/*',
          '!**/_site/**'
        ],
        // Run Sass, autoprefixer, and CSSO
        tasks: ['sass', 'autoprefixer', 'csso'],
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
      images: {
        files: [
          '_uploads/**/*',
        ],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      },
    }

  });

  // Register our tasks
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.registerTask('default', ['sass','autoprefixer','csso','jekyll','watch']);
  grunt.registerTask('production', ['sass','autoprefixer','csso','imagemin','jekyll']);
};