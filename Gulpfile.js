// Adapted from http://christianalfoni.github.io/javascript/2014/08/15/react-js-workflow.html

var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var react = require('gulp-react');
var jade = require('gulp-jade');

gulp.task('react', function () {
    return gulp.src('assets/js/**/*')
        .pipe(react())
        .pipe(gulp.dest('public/assets/js')); // in this line need dumanic destination
});
 
gulp.task('jade', function() {
  gulp.src('assets/jade/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('public/'))
});

gulp.task('assets', function() {
  gulp.src('assets/css/**/*')
    .pipe(gulp.dest('public/assets/css'));
  gulp.src('assets/imgs/**/*')
    .pipe(gulp.dest('public/assets/imgs'));
  gulp.src('assets/fonts/**/*')
    .pipe(gulp.dest('public/assets/fonts'));

});

gulp.task('build', ['react','jade', 'assets']);
