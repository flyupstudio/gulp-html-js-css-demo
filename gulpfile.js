var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('gulp-browserify');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
var del = require('del');
var connect = require('gulp-connect');
var cleanCSS = require('gulp-clean-css');

gulp.task('connect', function() {
    return connect.server({
        livereload: true
    });
});


gulp.task('minify-css', function() {
    return gulp.src('./development/styles/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/styles/'));
});

gulp.task('minify-img', function() {
    return gulp.src('./development/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
});


gulp.task('minify-img1', function() {
    return gulp.src('./development/styles/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/styles/images'))
});

gulp.task('copy-html', function() {
    gulp.src('./development/*.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js', function () {
    gulp.src('development/scripts/*.js')
        .pipe(jsmin())
        .pipe(browserify({
            insertGlobals : true
        }))
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('watch', function(){
    gulp.watch(['./development/scripts/*.js'], ['js']);
    gulp.watch(['./development/styles/*.css'], ['minify-css']);
    gulp.watch(['./development/images/*.*'], ['minify-img']);
    gulp.watch(['./development/styles/images/*.*'], ['minify-img1']);
    gulp.watch(['./development/*.html'], ['copy-html']);
});

gulp.task('default', ['connect', 'watch', 'js', 'minify-css','minify-img','minify-img1', 'copy-html']);
