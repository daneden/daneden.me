module.exports = function(grunt) {
	pkg: grunt.file.readJSON('package.json'),
	grunt.initConfig({
		// Sass
		compass: {
		  dist: {
		  	options: {
		  		sassDir: 'assets/scss',
		  		cssDir: 'assets/css',
		  		config: 'compass_config.rb'
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
	      src: 'assets/css/style.css',
	    },
	  },
	  csso: {
      dist: {
        files: {
        	// Output compressed CSS to style.min.css
          'assets/css/style.min.css': ['assets/css/style.css']
        }
      }
    },
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
        files: ['assets/**', '!**/node_modules/**', '!**/_site/**', '!**/assets/**/*.css'],
        // Run Sass, autoprefixer, and CSSO
        tasks: ['compass', 'autoprefixer', 'csso'],
      },
      site: {
      	files: ['**/*', '!**/node_modules/**', '!**/_site/**', '.htaccess'],
      	tasks: ['jekyll'],
      }
    }
	});

	// Register our tasks
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-csso');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-jekyll');
	grunt.registerTask('default', ['watch']);
};