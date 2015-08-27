var gulp          = require('gulp'),
    postcss       = require('gulp-postcss'),
    //autoprefixer  = require('autoprefixer-core'),
    rucksack      = require('rucksack-css'),
    precss        = require('precss'),
    sourcemaps    = require('gulp-sourcemaps'),
    cssnext       = require('cssnext');

gulp.task('css', function() {
  return gulp.src('./src/css/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([
            //autoprefixer({ browsers: ['last 2 versions'] }),
            rucksack(),
            cssnext(config), // uses autoprefixer-core
          ]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./build/css'));
});
