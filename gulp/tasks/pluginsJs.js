var gulp        = require('gulp');
var config      = require('../config').pluginsJs;
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var concat      = require('gulp-concat');
var size        = require('gulp-filesize');
var stripDebug  = require('gulp-strip-debug');

gulp.task('pluginsJs', function() {
  gulp.src(config.src)
    .pipe(concat('plugins.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(rename(config.settings.rename))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});