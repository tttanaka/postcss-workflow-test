var gulp        = require('gulp');
var config      = require('../config').production.uglifyJs;
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var size        = require('gulp-filesize');
var stripDebug  = require('gulp-strip-debug');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.src)
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename(config.settings.rename))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
