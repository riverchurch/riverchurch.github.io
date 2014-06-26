var gulp = require('gulp');
var shell = require('gulp-shell');
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
  img: 'app/images/*'
};

gulp.task('css', function() {
  var rework = require('gulp-rework');
  var whitespace = require('gulp-css-whitespace');
  var normalize = './node_modules/normalize.css/normalize.css';
  var es = require('event-stream');
  var autoprefixer = require('gulp-autoprefixer');

  var vendorStream = gulp.src([normalize]);

  var cssStream = gulp.src(paths.css)
    .pipe(whitespace())
    .pipe(rework())
    .pipe(autoprefixer('last 1 version', '> 5%', 'ie 8'))
    .pipe(concat('main.css'))

  return es.concat(vendorStream, cssStream)
    .pipe(concat('main.css'))
    .pipe(dest('css/'));
});

gulp.task('js', function() {
  var traceur = require('gulp-traceur');
  var concat = require('gulp-concat');
  var es = require('event-stream');

  var vendorStream = gulp.src([
    traceur.RUNTIME_PATH,
    'app/js/polyfill.js',
    'app/bower_components/smoothscroll/dist/smoothscroll.js',
  ]);

  var jsStream = gulp.src('app/js/main.js')
    .pipe(traceur({sourceMap: false}))

  return es.concat(vendorStream, jsStream)
    .pipe(concat('main.js'))
    .pipe(dest('js/'));
});

gulp.task('jade', function() {
  var jade = require('gulp-jade');
  var LOCALS = require('./content');

  return gulp.src(paths.jade)
    .pipe(jade({
      locals: LOCALS
    }))
    .pipe(dest());
});

gulp.task('img', function() {
  //var imagemin = require('gulp-imagemin');
  //var pngcrush = require('imagemin-pngcrush');

  return gulp.src(paths.img)
    /*
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    */
    .pipe(dest('images/'));
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
  gulp.watch(paths.img, ['img']);
});

gulp.task('gh-pages', ['build'], shell.task([
  'git checkout -b tmp-gh-pages',
  'git add ./dist -f',
  'git commit -m "Build" --no-verify',
  'git push origin :gh-pages &> /dev/null',
  'git subtree push --squash --prefix=dist origin gh-pages',
  'git checkout master',
  'git branch -D tmp-gh-pages',
]));

gulp.task('build', ['css', 'js', 'jade', 'img']);

gulp.task('default', ['build', 'watch']);

