const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
// var Jimp = require('jimp');
const jimp = require('gulp-jimp');


gulp.task('css', function () {
    return gulp.src('assets/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('assets/dist'))
        .pipe(clean())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/dist'));
});

gulp.task('img-res', function () {
    return gulp.src('assets/images/portfolio/*').pipe(jimp({
        '-sm': {
            resize: { width: 1300, height: jimp.Auto }
        }
    })).pipe(gulp.dest('assets/dist/images/sm'));
});

gulp.task('img-min', function(){
    return gulp.src('assets/images/portfolio/*')
            .pipe(imagemin())
            .pipe(gulp.dest('assets/dist/images'));
});

gulp.task('watch', function () {
    gulp.watch('assets/sass/*.scss', gulp.series('css'));
});
