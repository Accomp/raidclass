/**
 * Task: Styles
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp         = require('gulp');
var runSequence  = require('run-sequence');
var rename       = require('gulp-rename');
var header       = require('gulp-header');
var moment       = require('moment');
var scsslint     = require('gulp-scss-lint');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csscomb      = require('gulp-csscomb');
var combineMq    = require('gulp-combine-mq');
var cssNano      = require('gulp-cssnano');
var pkg          = require('../package.json');
var banner       = '/*! <%= pkg.title %> | <%= moment().format("MMMM Do YYYY, h:mm:ss A") %> */\n';

// Task
gulp.task('styles', ['styles-build']);

// Lint Sass
gulp.task('styles-lint', function() {

  return gulp.src('./source/styles/**/*.scss')

    // Lint Sass
    .pipe(scsslint({
      config: './gulp_tasks/_sass-lint.yml'
    }));

});

// Build styles
gulp.task('styles-build', function() {

  return gulp.src('./source/styles/*.scss')

    // Compile Sass
    .pipe(sass({
      outputStyle: 'expanded'
    }))

    // Add vendor prefixes
    .pipe(autoprefixer({
      browsers: [ '> 3%', 'last 2 versions' ],
      cascade: false,
      remove: true,
      map: false
    }))

    // Comb CSS
    .pipe(csscomb({
      configPath: './gulp_tasks/_css-comb.json'
    }))

    // Add banner
    .pipe(header(banner, {
      pkg: pkg,
      moment: moment
    }))

    // Save expanded CSS
    .pipe(gulp.dest('./public/styles/'))

    // Combine Media Queries
    .pipe(combineMq())

    // Minify CSS
    //.pipe(cssnano())

    // Add `.min` suffix
    .pipe(rename({
      suffix: '.min'
    }))

    // Save compressed CSS
    .pipe(gulp.dest('./public/styles/'));

});
