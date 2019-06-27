var gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

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