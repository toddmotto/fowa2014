var gulp        = require('gulp');
var refresh     = require('gulp-livereload');

// Watch
module.exports = function () {
  gulp.watch('public/src/*.html', ['markup']);
  gulp.watch('public/src/scss/**/*.scss', ['styles']);
  gulp.watch('public/src/**/*', ['scripts']);
  gulp.watch('public/src/img/*', ['images']);
  gulp.watch(['public/src/views/*', 'public/src/rest/**/*'], ['copy']);
};
