var Gulp = require('gulp'),
    Nodemon = require('gulp-nodemon'),
    Browserify = require('browserify'),
    Babelify = require('babelify'),
    Source = require('vinyl-source-stream');

Gulp.task('compile', function() {
  return Browserify({
    debug: true
  })
  .transform(Babelify)
  .require('./src/main.jsx', {entry: true})
  .bundle()
  .pipe(Source('./bundle.js'))
  .pipe(Gulp.dest('public/dist'));
});

Gulp.task('watch', function() {
  Gulp.watch(['./src/**/*'], ['compile']);
});

Gulp.task('development', ['compile', 'watch'], function() {
  return Nodemon({
    script: './server.js',
    env: {
      NODE_ENV: 'development'
    }
  });
});

Gulp.task('default', ['development']);