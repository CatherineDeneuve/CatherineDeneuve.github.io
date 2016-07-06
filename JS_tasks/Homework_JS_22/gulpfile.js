var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');
    pngquant = require('imagemin-pngquant');
    babel = require('gulp-babel');


    var path = {
        build: { //Тут мы укажем куда складывать готовые после сборки файлы
            html: 'build/',
            js: 'build/js/',
            css: 'build/css/',
            img: 'build/img/'

        },
        src: { //Пути откуда брать исходники
            html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
            js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
            style: 'src/css/main.css',
            img: 'src/img/*.*',
        }


    };



gulp.task('html:build', function () {
  gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(gulp.dest(path.build.html)); //Выплюнем их в папку build;
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build

});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)); //И в build

});

gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)); //И бросим в build

});

gulp.task('build', ['babel'], function() {
  [ 'html:build',
    'js:build',
    'style:build',
    'image:build']
});

gulp.task('babel', function (callback) {
  return gulp.src("src/js/partials/script.js")
    .pipe(babel())
    .pipe(gulp.dest("src/js/scriptES5"));
    callback();
});

gulp.task('default', ['babel', 'build']);
