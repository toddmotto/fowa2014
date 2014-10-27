var gulp        = require('gulp');
var newer       = require('gulp-newer');

module.exports = function(){
  return gulp.src('public/src/img/**')
    .pipe(newer('public/dist/img'))
    .pipe(gulp.dest('public/dist/img'));
};
