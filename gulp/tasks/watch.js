var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.css.src,   ['css']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.markup.src, ['markup']);
});
