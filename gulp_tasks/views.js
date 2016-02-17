/**
 * Task: Views
 * --------------------------------------------------
 */

'use strict';

// Dependencies
var gulp     = require('gulp');
var minimist = require('minimist')
var htmlhint = require('gulp-htmlhint');

// Build options
var options = minimist(process.argv.slice(2), {
  string: [ 'env' ],
  default: {
    env: 'dev'
  }
});

// Task
gulp.task('views', function() {

  return gulp.src('./source/views/**/*')

    /*
    // Lint HTML
    .pipe(htmlhint({
      htmlhintrc: './gulp_tasks/_html-lint.json'
    }))
    .pipe(htmlhint.reporter())
    */

    // Save optimized HTML
    .pipe(gulp.dest('./public/'));

});
