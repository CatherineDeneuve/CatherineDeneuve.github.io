var gulp = require('gulp'),
    clean = require('gulp-clean'),
    prefixer = require('gulp-autoprefixer'),
    rigger = require('gulp-rigger'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant');

gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'

    },
    src: { //Пути откуда брать исходники
        html: 'src/*.html', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        js: 'src/js/main.js',//В стилях и скриптах нам понадобятся только main файлы
        style: 'src/css/main.scss',
        img: 'src/img/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: 'src/**/*.html',
    js: 'src/js/partials/*.js',
    style: ['src/css/partials/*.scss', 'src/css/main.scss'],
    img: 'src/img/*.*',
    fonts: 'src/fonts/**/*.*'
    }

};

gulp.task('html', function () {
    gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
});

gulp.task('style', function () {
  return  gulp.src(path.src.style) //Выберем наш main.scss
        .pipe(rigger())
        .pipe(sass()) //Скомпилируем
        .pipe(prefixer()) //Добавим вендорные префиксы
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)); //И в build
});

gulp.task('image', function () {
  return  gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)); //И бросим в build

});

gulp.task('js', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        // .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js)); //Выплюнем готовый файл в build

});

gulp.task('fonts', function() {
  return  gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts));
});

gulp.task('build', [
    'html',
    'style',
    'image',
    'js',
    'fonts'
]);

gulp.watch([path.watch.html], ['html']);
gulp.watch([path.watch.style], ['style']);
gulp.watch([path.watch.img], ['image']);
gulp.watch([path.watch.js], ['js']);
gulp.watch([path.watch.fonts], ['fonts']);



gulp.task('default', ['build']);
