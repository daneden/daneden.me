var gulp         = require('gulp');
var postcss      = require('gulp-postcss');
var cssnext      = require('postcss-cssnext');
var nano         = require('gulp-cssnano');
var shell        = require('gulp-shell');
var autoprefixer = require('gulp-autoprefixer');
var atImport     = require('postcss-import');
var cp           = require('child_process');

var processors = [
  atImport,
  cssnext({
    'browsers': ['last 2 version'],
    'features': {
      'customProperties': {
        preserve: true,
        appendVariables: true
      },
      'colorFunction': true,
      'customSelectors': true,
      'sourcemap': true,
      'rem': false
    }
  })
];

gulp.task('styles', function() {
  return gulp.src('./_assets/src/style.css')
  .pipe(postcss(processors))
  .pipe(nano({discardComments: {removeAll: true}}))
  .pipe(gulp.dest('./_assets/css'));
});

gulp.task('jekyll-serve', shell.task(['bundle exec jekyll serve --incremental --watch']));

gulp.task('style-watch', function() {
  gulp.watch('./_assets/src/**/*.css', ['styles']);
});

gulp.task('default', ['style-watch', 'jekyll-serve', 'styles']);
