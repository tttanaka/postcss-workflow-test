var dest = "./build";
var src = './src';

var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    csswring = require('csswring'),
    cssnext = require('cssnext'), //minify css
    autoprefixer = require('autoprefixer-core'),
    rucksack = require('rucksack-css'),
    sourcemaps = require('gulp-sourcemaps'),
    atImport = require('postcss-import'),
    url = require('postcss-url');


var handleErrors = require('./handleErrors');

gulp.task('styles', function() {
  var processors = [
    csswring(),
    autoprefixer({
      browsers:['last 2 version']
    }),
    cssnext({
      customProperties: true,
      colorFunction: true,
      customSelectors: true
    }),
    rucksack(),
  ];

  return gulp.src('./src/css/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest + '/css'));
});

gulp.task('markup', function() {
  return gulp.src(src + '/htdocs/**/*.html')
    .pipe(gulp.dest(dest));
});


gulp.task('watch', function() {
  gulp.watch(src + '/css/**/*.css', ['styles']);
  gulp.watch(src + '/htdocs/**/*.html', ['markup']);
});
