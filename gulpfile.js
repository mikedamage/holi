var gulp        = require('gulp');
var $           = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

var config = {
  babel: {
    modules: 'umd'
  }
};

gulp.task('babel', function() {
  gulp.src('./lib/holi.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel(config.babel))
    .pipe($.size({ title: 'uncompressed' }))
    .pipe(gulp.dest('./build'))
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe($.size({ title: 'minified' }))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./build'));
});
