/**
 * Task: Assets
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var minimist    = require('minimist')
var copy        = require('gulp-copy');
var imagemin    = require('gulp-imagemin');
var runSequence = require('run-sequence');

// Build options
var options = minimist(process.argv.slice(2), {
  string: [ 'env' ],
  default: {
    env: 'dev'
  }
});

// Task
gulp.task('assets', ['data', 'fonts', 'images', 'media', 'vendors']);

// Data
gulp.task('data', function() {

  return gulp.src('./source/data/**/*')

    // Copy data
    .pipe(copy('./public/', {
      prefix: 1
    }));

});

// Fonts
gulp.task('fonts', function() {

  return gulp.src('./source/fonts/**/*')

    // Copy fonts
    .pipe(copy('./public/', {
      prefix: 1
    }));

});

// Images
gulp.task('images', function () {

  return gulp.src('./source/images/**/*')

    // Optimize images
    .pipe(imagemin({
      optimizationLevel: 3,
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }]
    }))

    // Save optimized images
    .pipe(gulp.dest('./public/images/'));

});

// Media
gulp.task('media', function() {

  return gulp.src('./source/media/**/*')

    // Copy media
    .pipe(copy('./public/', {
      prefix: 1
    }));

});

// Vendors
gulp.task('vendors', function() {

  return gulp.src('./source/vendors/**/*')

  // Copy vendors
    .pipe(copy('./public/', {
      prefix: 1
    }));

});
