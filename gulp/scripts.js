var gulp        = require('gulp');
var browserify  = require('browserify');
var reactify    = require('reactify');
var source      = require('vinyl-source-stream');
var refresh     = require('gulp-livereload');
var notify      = require('gulp-notify');
var plumber     = require('gulp-plumber');
var tap         = require('gulp-tap');
var rename      = require('gulp-rename');
var transform   = require('vinyl-transform');

function bundler(file) {
  var b = browserify(file, {
    debug: true,
    insertGlobalVars: true
  });

  b.transform(reactify);

  return b.bundle();
}

module.exports = function() {
  gulp.src('public/src/js/**/*')
        .pipe(gulp.dest('public/dist/js'))
        .pipe(refresh(global.lrserver));
};
