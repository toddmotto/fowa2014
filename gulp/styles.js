var gulp        = require('gulp');
var sass        = require('gulp-ruby-sass');
var plumber     = require('gulp-plumber');
var prefix      = require('gulp-autoprefixer');
var notify      = require('gulp-notify');
var refresh     = require('gulp-livereload');

module.exports = function(){

  return gulp.src('public/src/scss/main.scss')
    .pipe(plumber())
    .pipe(sass({unixNewlines: true}))
    .pipe(prefix('last 1 version', '> 1%', 'ie 8', 'ie 7'))
    .on('error', notify.onError())
    .pipe(gulp.dest('public/dist/css'))
    .pipe(refresh(global.lrserver));

};
