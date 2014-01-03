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
          cwd: 'static/images/_src', // Src matches are relative to this path.
          src: ['**/*.svg'], // Actual pattern(s) to match.
          dest: 'static/images/', // Destination path prefix.
          ext: '.min.svg' // Dest filepaths will have this extension.
        }],
      },
    },

    // Make PNG copies of our SVGs
    svg2png: {
      all: {
        files: [
            { src: ['static/images/_src/**/*.svg'], dest: 'static/images/' },
        ],
      },
    },

    // Sass
    sass: {
      dist: {
        options: {
          compass: true
        },
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

    // Add rem px fallbacks
    remfallback: {
      options: {
        log: true,
        replace: false,
      },
      your_target: {
        files: {
          '_assets/css/style.css': ['_assets/css/style.css']
        },
      },
    },

    csso: {
      dist: {
        options: {
          report: 'gzip',
        },
        files: {
          '_assets/css/style.min.css': ['_assets/css/style.css'],
        },
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
          '_assets/scss/**/*'
        ],
        // Run Sass, autoprefixer, and CSSO
        tasks: ['sass', 'autoprefixer', 'remfallback', 'csso'],
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
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-csso');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-remfallback');
  grunt.loadNpmTasks('grunt-svg2png');
  grunt.loadNpmTasks('grunt-svgmin');

  // Register tasks
  grunt.registerTask('default', ['svgmin', 'svg2png', 'sass', 'autoprefixer', 'remfallback', 'csso', 'jekyll', 'watch']);
  grunt.registerTask('styles', ['sass','autoprefixer', 'remfallback', 'csso', 'jekyll'])
  grunt.registerTask('prod', ['sass','autoprefixer', 'remfallback', 'csso', 'jekyll']);
};