var gulp = require('gulp');
var concat = require('gulp-concat');
var join = require('path').join;
var OUTPUT = 'dist';
var dest = function(path) {
  var p = path ? join(OUTPUT, path) : OUTPUT;
  return gulp.dest(p);
}

var paths = {
  css: 'app/css/main.styl',
  js: 'app/js/main.js',
  jade: 'app/*.jade',
};

gulp.task('css', function() {
  var rework = require('gulp-rework');
  var whitespace = require('gulp-css-whitespace');
  var normalize = './node_modules/normalize.css/normalize.css';
  var es = require('event-stream');

  var vendorStream = gulp.src([normalize]);

  var cssStream = gulp.src(paths.css)
    .pipe(whitespace())
    .pipe(rework())
    .pipe(concat('main.css'))

  return es.concat(vendorStream, cssStream)
    .pipe(concat('main.css'))
    .pipe(dest('css/'));
});

gulp.task('js', function() {
  var traceur = require('gulp-traceur');
  var concat = require('gulp-concat');
  var es = require('event-stream');

  var vendorStream = gulp.src([ traceur.RUNTIME_PATH ]);

  var jsStream = gulp.src('app/js/main.js')
    .pipe(traceur({sourceMap: false}))

  return es.concat(vendorStream, jsStream)
    .pipe(concat('main.js'))
    .pipe(dest('js/'));
});

gulp.task('jade', function() {
  var jade = require('gulp-jade');
  var LOCALS = {};

  return gulp.src(paths.jade)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(dest());
});

gulp.task('open', function() {
  var open = require('gulp-open');
  gulp.src('./dist/index.html')
    .pipe(open());
});

gulp.task('watch', function() {
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['css', 'js', 'jade', 'watch']);

