var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var minifyCSS = require('gulp-minify-css');


var src = {
  scripts: '../assets/js/*',
  images: '../assets/img/*',
  css: '../assets/css/*'
};

var out = {
  scripts: '../public/js',
  images: '../public/img',
  css: '../public/css'
};


gulp.task('scripts', function() {
  /* Minify and concat */
  return gulp.src(src.scripts)
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest(out.scripts));
});

gulp.task('images', function() {
 return gulp.src(src.images)
    /* Optimize */
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest(out.images));
});

gulp.task('css', function() {
  return gulp.src(src.css)
    .pipe(minifyCSS(opts))
    .pipe(concat('all.min.css'))
    .pipe(gulp.dest(out.css))
});

/* Rerun the task when a file changes */
gulp.task('watch', function () {
  gulp.watch(src.scripts, ['scripts']);
  gulp.watch(src.images, ['images']);
});

/* The default task (called when you run `gulp` from cli) */
gulp.task('default', ['scripts', 'images', 'css', 'watch']);
