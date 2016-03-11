var gulp         = require('gulp');
var util         = require('util');
var postcss      = require('gulp-postcss');
var cssnext      = require('postcss-cssnext');
var nano         = require('gulp-cssnano');
var shell        = require('gulp-shell');
var autoprefixer = require('gulp-autoprefixer');
var atImport     = require('postcss-import');
var cp           = require('child_process');
var browserSync  = require('browser-sync').create();
var htmlmin      = require('gulp-html-minifier');

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

gulp.task('buildSite', shell.task('bundle exec jekyll build --incremental'));

gulp.task('minify', ['buildSite'], function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhiteSpace: true,
      removeTagWhitespace: true,
      lint: true,
      minifyJS: true
      }))
    .pipe(gulp.dest('_site'));
});

gulp.task('jekyll-build', shell.task(['bundle exec jekyll build --incremental --watch']));
gulp.task('jekyll-build-once', ['buildSite', 'minify']);

gulp.task('jekyll-serve', function() {
  browserSync.init({ server: { baseDir: '_site/' } });
  gulp.watch('./_assets/src/*.css', ['styles']);
  gulp.watch('_site/**/*.*').on('change', browserSync.reload);
  gulp.watch('_assets/css/index.css').on('change', browserSync.reload);
});

gulp.task('default', ['jekyll-build', 'jekyll-serve', 'styles']);
gulp.task('build', ['styles', 'jekyll-build-once']);
