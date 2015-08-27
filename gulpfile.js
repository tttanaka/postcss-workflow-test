var dest  = "./build";
var src   = './src';

var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    csswring      = require('csswring'),
    cssnext       = require('cssnext'), //minify css
    autoprefixer  = require('autoprefixer-core'),
    rucksack      = require('rucksack-css'),
    sourcemaps    = require('gulp-sourcemaps'),
    lost          = require('lost'),
    atImport      = require('postcss-import'),
    //url = require('postcss-url');
    browserSync   = require('browser-sync');
    

var handleErrors = require('./handleErrors');

gulp.task('styles', function() {
  var processors = [
    atImport(),
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
    lost()
  ];

  return gulp.src('./src/css/app.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .on('error', handleErrors)
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest + '/css'))
    .pipe(browserSync.stream());
});

gulp.task('markup', function() {
  return gulp.src(src + '/htdocs/**/*.html')
    .pipe(gulp.dest(dest))
    .pipe(browserSync.stream());
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      // Serve up our build folder
      baseDir: dest
    }
  });
});


gulp.task('watch', ['browserSync'], function() {
  gulp.watch(src + '/css/app.css', ['styles']);
  //gulp.watch(src + '/images/**', ['images']);
  gulp.watch(src + '/htdocs/**/*.html', ['markup']);
});