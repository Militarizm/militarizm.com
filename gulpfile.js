var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    size = require('gulp-size'),
    replace = require('gulp-replace'),

    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    reactify = require('reactify');

paths = {
     bower: 'vendor/bower_components/'
    };

gulp.task('watch', function () {
 gulp.watch('resources/assets/scss/**/*.scss', ['styles']);
 gulp.watch('resources/assets/react/**/*.js',  ['react']);
});


gulp.task("styles", function(){
   gulp.src('resources/assets/scss/main.scss')
    .pipe(sass())
       //.on("error", notify.onError("<%= error.message %>"))
    .pipe(gulp.dest("./public/css"));

});

gulp.task('react', function () {
    var bundleStream = browserify('./resources/assets/react/app.js')
        .transform(reactify)
        .bundle();

    bundleStream
        .pipe(source('app.js'))
        .pipe(gulp.dest('public/js'));
});