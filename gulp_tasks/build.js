/**
 * Task: Build
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var del         = require('del');
var runSequence = require('run-sequence');
// Task
gulp.task('build', function (cb) {
    runSequence('remove-build', 'build-up', cb);
});

gulp.task('build-up', ['assets', 'scripts', 'styles', 'views']);

// Remove build
gulp.task('remove-build', function() {
  return del(['./public/**']);
});
