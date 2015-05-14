var gulp       = require('gulp');
var connect    = require('gulp-connect');
var open       = require('gulp-open');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var port       = process.env.port || 3031;

//transform and build js
gulp.task('browserify', function() {
  gulp.src('./src/js/app.js')
      .pipe(browserify({transform: 'reactify'}))
      .pipe(gulp.dest('./build/js'))
});

//transform and build css
gulp.task('compile-sass', function() {
  gulp.src('./src/css/app.scss')
      .pipe(sass({sourceComments: 'map'}))
      .pipe(gulp.dest('./build/css'))
});

//start server
gulp.task('open', function() {
  var opts = { url: 'http://localhost:' + port };
  gulp.src('./index.html').pipe(open('', opts));
});

//live reload app
gulp.task('connect', function() {
  connect.server({
    root: '',
    port: port,
    livereload: true
  });
});

  //live reload js
  gulp.task('js', function() {
    gulp.src('./build/js/*.js')
        .pipe(connect.reload());
  });

  //live reload css
  gulp.task('css', function() {
    gulp.src('./build/css/*.css')
        .pipe(connect.reload());
  });

  //live reload html
  gulp.task('html', function() {
    gulp.src('./index.html')
        .pipe(connect.reload());
  });

  //watch for live reload
  gulp.task('watch', function() {
    gulp.watch('build/js/*.js', ['js'])
    gulp.watch('build/css/*.css', ['css'])
    gulp.watch('index.html', ['html'])
    gulp.watch('src/css/**/*.scss', ['compile-sass'])
    gulp.watch('src/js/**/*.js', ['browserify'])
  });

//combine tasks
gulp.task('default', ['browserify', 'sass']);

gulp.task('serve', ['browserify', 'compile-sass', 'connect', 'open', 'watch']);
