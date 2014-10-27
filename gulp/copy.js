var gulp        = require('gulp');
var newer       = require('gulp-newer');
var refresh     = require('gulp-livereload');

module.exports = function(){
 	gulp.src('public/src/fonts/**')
    	.pipe(gulp.dest('public/dist/fonts'));

	gulp.src(['public/libs/angular/angular.js', 'public/libs/angular-route/angular-route.js'])
    	.pipe(gulp.dest('public/dist/js'));

    gulp.src('public/src/views/**')
    	.pipe(gulp.dest('public/dist/views'))
    	.pipe(refresh(global.lrserver));

    gulp.src('public/src/rest/**/*')
    	.pipe(gulp.dest('public/dist/rest'))
    	.pipe(refresh(global.lrserver));
};
