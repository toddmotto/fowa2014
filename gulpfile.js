var gulp    = require('gulp');

var server  = require('./gulp/server');
var scripts = require('./gulp/scripts');
var images  = require('./gulp/images');
var styles  = require('./gulp/styles');
var watch   = require('./gulp/watch');
var copy    = require('./gulp/copy');
var markup  = require('./gulp/markup');

gulp.task('server', server);
gulp.task('scripts', scripts);
gulp.task('images', images);
gulp.task('styles', styles);
gulp.task('watch', watch);
gulp.task('copy', copy);
gulp.task('markup', markup);

/**
 *  Tasks
 */
gulp.task('default', [
  'server',
  'scripts',
  'styles',
  'copy',
  'images',
  'markup',
  'watch'
]);
