var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

let cleanCSS = require('gulp-clean-css');

var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
 

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

 
gulp.task('compress', function () {
  return pipeline(
        gulp.src('assets/js/*.js'),
        uglify(),
        gulp.dest('assets/dist')
  );
});
  