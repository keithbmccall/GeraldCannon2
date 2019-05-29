/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-csso');
const autoprefixer = require('gulp-autoprefixer');
const livereload = require('gulp-livereload');
const rename = require('gulp-rename');
const {srcPath, destPath} = require('./config')


/* ==========================================================================
   Gulp tasks
   ========================================================================== */
const sassFiles = [
    `${srcPath}/index.scss`
]
const styles = () =>
    gulp.src(sassFiles)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', err => {
            console.log(err);
        }))
        .pipe(autoprefixer({
            browsers: [
                "last 3 versions",
                "> 1%",
                "maintained node versions",
                "not dead",
            ],
            cascade: false
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(destPath))
        .pipe(livereload());


const stylesMin = () =>
    gulp.src(sassFiles)
        .pipe(sass().on('error', err => {
            console.log(err);
        }))
        .pipe(autoprefixer({
            browsers: [
                "last 3 versions",
                "> 1%",
                "maintained node versions",
                "not dead",
            ],
            cascade: false
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(destPath));


const _watchStyles = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', srcPath, '\x1b[0m');
    console.log(' LiveReload:\x1b[32m', ' enabled', '\x1b[0m');
    livereload.listen();
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    gulp.watch(`${srcPath}/**/*.scss`, styles);
};
const watchStyles = gulp.series(_watchStyles);

/* ==========================================================================
   Exports
   ========================================================================== */
module.exports = {styles, stylesMin, watchStyles};