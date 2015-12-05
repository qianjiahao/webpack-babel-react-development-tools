var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {

  livereload.listen();

  gulp.watch(['dist/**']).on('change', function(file) {
    livereload.reload();
  });
});