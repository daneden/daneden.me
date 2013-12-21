module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    // Make our SVGs smaller
    svgmin: {
      options: { // Configuration that will be passed directly to SVGO
        plugins: [{
            removeViewBox: false
        }],
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images/src', // Src matches are relative to this path.
          src: ['**/*.svg'], // Actual pattern(s) to match.
          dest: 'assets/images/', // Destination path prefix.
          ext: '.min.svg' // Dest filepaths will have this extension.
        }],
      },
    },

    // Make PNG copies of our SVGs
    svg2png: {
      all: {
        files: [
            { src: ['assets/images/src/**/*.svg'], dest: 'assets/images/' },
        ],
      },
    },

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
          banner: '/*# sourceMappingURL=style.css.map */',
          report: 'gzip'
        },
        files: {
          // Output compressed CSS to style.min.css
          'assets/css/style.min.css': ['assets/css/style.css']
        }
      }
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
          'assets/scss/**/*'
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
          'assets/images/**/*'
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
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svg2png');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-jekyll');

  // Register tasks
  grunt.registerTask('default', ['svgmin', 'svg2png', 'sass','autoprefixer','csso','jekyll','watch']);
  grunt.registerTask('styles', ['sass','autoprefixer','csso','jekyll'])
  grunt.registerTask('production', ['sass','autoprefixer','csso','jekyll']);
};