/**
 * Created by eranda on 9/16/16.
 */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
    return gulp.src('./public/stylesheets/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./public/stylesheets/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./public/stylesheets/', ['sass']);
});