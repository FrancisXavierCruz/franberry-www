'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
// const sourcemaps = require('gulp-sourcemaps');

function buildStyles() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'));
};

function minifyStyles() {
  return gulp.src('./assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css/min/'));
};

exports.buildStyles = buildStyles;
exports.minify = minifyStyles;

exports.watch = function () {
  gulp.watch('./assets/scss/**/*.scss', gulp.series('buildStyles','minify'));
};