var gulp        = require('gulp');
var refresh     = require('gulp-livereload');

// Watch
module.exports = function () {
  return gulp.src('public/src/*.html')
    .pipe(gulp.dest('public/dist'))
    .pipe(refresh(global.lrserver));
};
