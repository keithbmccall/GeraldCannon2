/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    babel = require('gulp-babel');
const {srcPath} = require('./config');

/* ==========================================================================
   Gulp tasks
   ========================================================================== */

const scripts = () =>
    gulp.src(srcPath + 'js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource: true,
            output: {
                max_line_len: 300
            }
        }))
        .pipe(gulp.dest(srcPath + 'js/min'));
const _watchScripts = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', themeObj.area + '/' + themeObj.vendor + '/' + themeObj.name, '\x1b[0m');
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    // gulp.watch(`${path}css/less/**/*.less`, styles);
    gulp.watch(`${srcPath}js/*.js`, scripts);
};
const watchScripts = gulp.series(_watchScripts);
/* ==========================================================================
   Exports
   ========================================================================== */
module.exports = {scripts, watchScripts};