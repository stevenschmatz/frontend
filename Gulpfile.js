// Adapted from http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html
var gulp = require('gulp');

gulp.task('assets', function() {
	gulp.src('css/**/*').pipe(gulp.dest('public/css'));
	gulp.src('fonts/**/*').pipe(gulp.dest('public/fonts'));
	gulp.src('img/**/*').pipe(gulp.dest('public/img'));
	gulp.src('js/**/*').pipe(gulp.dest('public/js'));
	gulp.src('*.html').pipe(gulp.dest('public'));
});

gulp.task('build', ['assets']);
