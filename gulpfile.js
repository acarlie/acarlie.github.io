var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

let cleanCSS = require('gulp-clean-css');
 

gulp.task('message', async function() {
    console.log("Good News Everyone!");
});
 
gulp.task('prefix', () =>
    gulp.src('assets/css/main.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('assets/dist'))
);

gulp.task('minify-css', () => {
    return gulp.src('assets/dist/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('assets/dist/min'));
  });
  