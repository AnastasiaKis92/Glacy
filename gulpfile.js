import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import plumber from 'gulp-plumber';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import svgstore from 'gulp-svgstore';

// Styles

export const styles = () => gulp.src('source/sass/styles.sass', { sourcemaps: true })
  .pipe(plumber())
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(postcss([
    autoprefixer()
  ]))
  .pipe(gulp.dest('source/css', { sourcemaps: '.' }))
  .pipe(browser.stream());

// SVG Sprite

const sprite = () => gulp.src('source/img/icons-sprite/*.svg')
  .pipe(svgstore({
    inlineSvg: true}))
  .pipe(rename('sprite.svg'))
  .pipe(gulp.dest('source/img'));

// Server

const server = (done) => {
  browser.init({
    server: {
      baseDir: 'source'
    },
    cors: true,
    notify: false,
    ui: false,
    online: true
  });
  done();
};

// Watcher

const watcher = () => {
  gulp.watch('source/sass/**/*.sass', gulp.series(styles));
  gulp.watch('source/*.html').on('change', browser.reload);
};

export default gulp.series(
  styles, sprite, server, watcher
);
