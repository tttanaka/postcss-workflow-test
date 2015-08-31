var gulp      = require('gulp');
var config    = require('../config').minifyCss;
var handleErrors  = require('../util/handleErrors');
var browserSync = require('browser-sync');
var postcss       = require('gulp-postcss');
var csswring      = require('csswring');
var rename    = require('gulp-rename');
var size      = require('gulp-filesize');

gulp.task('minifyCss', ['css'], function() {
  var processors = [
    csswring()
  ];

  return gulp.src(config.src)
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(rename(config.settings.rename))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(browserSync.stream());
});