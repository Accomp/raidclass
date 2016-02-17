/**
 * Task: Server
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp        = require('gulp');
var watch       = require('gulp-watch');
var browserSync = require('browser-sync');
var path        = require('path');
var url         = require('url');
var fs          = require('fs');
var shell       = require('gulp-shell')

gulp.task('runKeystone', shell.task('node keystone.js'));

// Task
gulp.task('server', function() {

  // Watch for file changes
  gulp.watch('source/data/**/*', [ 'data' ]);
  gulp.watch('source/fonts/**/*', [ 'fonts' ]);
  gulp.watch('source/images/**/*', [ 'images' ]);
  gulp.watch('source/media/**/*', [ 'media' ]);
  gulp.watch('source/misc/**/*', [ 'misc' ]);
  gulp.watch('source/scripts/**/*', [ 'scripts' ]);
  gulp.watch('source/styles/**/*', [ 'styles' ]);
  gulp.watch('source/vendors/**/*', [ 'vendors' ]);
  gulp.watch('source/views/**/*', [ 'views' ]);
  
  gulp.start('runKeystone');
});
