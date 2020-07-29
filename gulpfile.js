const gulp = require('gulp'),
  gp = require('gulp-load-plugins')(),
  browserSync = require('browser-sync').create(),
  gulp_clean_css = require('gulp-clean-css'),
  uglify = require('gulp-uglify'),
  autoprefixer = require('gulp-autoprefixer');

// serve START

gulp.task('serve-landing', function () {
  browserSync.init({
    server: "",
    startPath: "index.html",
    directory: true
  });
});

// serve END

// css START

gulp.task('scss-landing', function () {
  return gulp.src('assets/scss/landing/style.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass())
    .pipe(autoprefixer())
    .on("error", gp.notify.onError({
      title: 'style'
    }))
    .pipe(gp.rename({suffix: '-landing.min'}))
    .pipe(gulp_clean_css())
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('assets/css/'))
});
// css END

// scripts START

gulp.task('scripts:libs-landing', function () {
  return gulp.src(['assets/js/landing/libs/*.js'])
    .pipe(gp.concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('assets/js/landing/'))
});

gulp.task('scripts-landing', function () {
  return gulp.src(['assets/js/landing/components/*.js'])
    .pipe(gp.concat('main.min.js'))
    .pipe(gulp.dest('assets/js/landing/'))
});

// scripts END


gulp.task('watch', function () {
  gulp.watch(['assets/scss/landing/**/*.scss','assets/scss/landing/sections/**/*.scss'], 
  gulp.series('scss-landing'));
  gulp.watch('assets/js/landing/components/*.js', 
  gulp.series('scripts-landing'));
});

// gulp write tasks START

// gulp.task('default', gulp.series(
//   gulp.parallel('scss', 'scripts:libs', 'scripts'),
//   // 'watch'
//   gulp.parallel('watch', 'serve')
// ));

gulp.task('landing', gulp.series(
  gulp.parallel('scss-landing', 'scripts:libs-landing', 'scripts-landing'),
  // 'watch'
  gulp.parallel('watch', 'serve-landing')
));

// tasks END