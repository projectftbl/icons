// var gulp = require('gulp');

var gulp = require('gulp')
  , babel = require('gulp-babel')
  , mocha = require('gulp-mocha');

require('@ftbl/gulp')(gulp);
require('babel-core/register');

gulp.task('test', function() {
  return gulp.src('test/**/*.js', { read: false, presets: [ 'es2015' ] })
  .pipe(babel())
  .pipe(mocha());
});

gulp.task('default', [ 'test' ]);
