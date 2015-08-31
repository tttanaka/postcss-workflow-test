var config        = require('../config').css;
var handleErrors  = require('../util/handleErrors');

var gulp          = require('gulp'),
    browserSync = require('browser-sync'),
    postcss       = require('gulp-postcss'),
    cssnext       = require('cssnext'), // future css today
    autoprefixer  = require('autoprefixer-core'), // autoprefix css
    rucksack      = require('rucksack-css'), // helpers
    sourcemaps    = require('gulp-sourcemaps'), // css sourcemaps
    lost          = require('lost'), // grid system
    atImport      = require('postcss-import'), // css imports
    //url           = require('postcss-url');
    //nestedProps = require('postcss-nested-props'), //nest common props
    nested        = require('postcss-nested'); // sass-style nesting 1.0.0
    //nesting     = require('postcss-nesting'); // w3c extra {} nesting 0.1.0

gulp.task('css', function() {

  var processors = [
    atImport(),
    cssnext(config.settings.cssnext),
    rucksack(),
    lost(),
    nested(),
    autoprefixer(config.settings.autoprefixer),
  ];

  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.stream());
});