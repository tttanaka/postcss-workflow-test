var dest  = "./build";
var src   = './src';

var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'), 
    csswring      = require('csswring'), // minify css
    cssnext       = require('cssnext'), // future css today
    autoprefixer  = require('autoprefixer-core'), // autoprefix css
    rucksack      = require('rucksack-css'), // helpers
    sourcemaps    = require('gulp-sourcemaps'), // css sourcemaps
    lost          = require('lost'), // grid system
    atImport      = require('postcss-import'), // css imports
    //url = require('postcss-url');
    //nestedProps = require('postcss-nested-props'), //nest common props
    nested        = require('postcss-nested'), // sass-style nesting 1.0.0
    //nesting = require('postcss-nesting'); // w3c extra {} nesting 0.1.0
    browserSync   = require('browser-sync'); // sync

    // test boilerplate: boy - corysimmons
    

var handleErrors = require('./handleErrors');

gulp.task('styles', function() {
  var processors = [
    atImport(),
    cssnext({
      customProperties: true,
      colorFunction: true,
      customSelectors: true
    }),
    rucksack(),
    lost(),
    nested(),
    autoprefixer({
      browsers:['last 2 version']
    }),
    //csswring(),
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