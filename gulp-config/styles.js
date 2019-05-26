/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    cssmin = require('gulp-csso'),
    autoprefixer = require('gulp-autoprefixer'),
    livereload = require('gulp-livereload'),
    rename = require('gulp-rename');
const {srcPath, path} = require('./config');

/* ==========================================================================
   Gulp tasks
   ========================================================================== */
const sassFiles = [
    `${srcPath}/index.scss`
]
const styles = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(`Running \x1b[36msass\x1b[0m compilation for \x1b[36m${sassFiles.length}' files:\x1b[0m`);
    console.log(path);
    return gulp.src(sassFiles)
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
        .pipe(gulp.dest(`${path}`))
        .pipe(gulp.dest(`${srcPath}`))
        .pipe(livereload());
};

const stylesMin = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log('Running \x1b[36msass\x1b[0m compilation for \x1b[36m' + sassFiles.length + ' files:\x1b[0m');
    console.log(srcPath);
    return gulp.src(sassFiles)
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
        // .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(`${srcPath}`));
};
const _watchStyles = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', srcPath, '\x1b[0m');
    console.log(' LiveReload:\x1b[32m', ' enabled', '\x1b[0m');
    livereload.listen();
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    gulp.watch(`${path}sass/**/*.sass`, styles);
    // gulp.watch(`${srcPath}js/*.js`, scripts);
};
const watchStyles = gulp.series(_watchStyles);

/* ==========================================================================
   Exports
   ========================================================================== */
module.exports = {styles, stylesMin, watchStyles};