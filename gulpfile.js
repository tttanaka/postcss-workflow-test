'use strict';

var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    autoprefixer  = require('autoprefixer-core'),
    rucksack      = require('rucksack-css'),
    precss        = require('precss'),
    sourcemaps    = require('gulp-sourcemaps'),
    cssnext       = '';

gulp.task('css', function () {
  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
            autoprefixer({ browsers: ['last 3 versions'] }),
            rucksack()
          ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'));
});