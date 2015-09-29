var changed       = require('gulp-changed');
var gulp          = require('gulp');
var imagemin      = require('gulp-imagemin');
var copy          = require('gulp-copy');
var config        = require('../config').images;
var configProd    = require('../config').production.images;
var browserSync   = require('browser-sync');

// optimize images
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(imagemin(config.settings)) // Optimize
    .pipe(gulp.dest(config.dest))
    .pipe(copy(config.prod))
    .pipe(browserSync.stream());
});

// production ready images
gulp.task('imagesCopy', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(configProd.dest));
});
