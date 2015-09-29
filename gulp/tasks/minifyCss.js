var gulp      = require('gulp');
var config    = require('../config').production.minifyCss;
var handleErrors  = require('../util/handleErrors');
var browserSync = require('browser-sync');
// var postcss       = require('gulp-postcss');
// var csswring      = require('csswring');
var nano   = require('gulp-cssnano');
var rename    = require('gulp-rename');
var size      = require('gulp-filesize');

gulp.task('minifyCss', ['css'], function() {
  return gulp.src(config.src)
    // .pipe(postcss(processors))
    // .on('error', handleErrors)
    .pipe(nano())
    .on('error', handleErrors)
    .pipe(rename(config.settings.rename))
    .pipe(gulp.dest(config.dest))
    .pipe(size())
    .pipe(browserSync.stream());
});
