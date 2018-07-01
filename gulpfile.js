const gulp      = require('gulp'),
  $             = require('gulp-load-plugins')(),
  rimraf        = require('rimraf'),
  fs            = require('fs')

gulp.task('clean', () => rimraf.sync('dist/*'))

gulp.task('scss', () =>
  gulp.src('./src/simple-blur.scss')
  .pipe($.plumber())
  .pipe($.sass())
  .pipe($.autoprefixer())
  .pipe(gulp.dest('./dist'))
)

gulp.task('default', ['clean','scss'], () => {})

gulp.task('watch', ['default'], () => {
  gulp.watch('./src/*',['scss'])
})
