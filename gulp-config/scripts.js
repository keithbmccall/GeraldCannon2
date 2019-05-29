/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    babel = require('gulp-babel');
const {jsPath} = require('./config');

/* ==========================================================================
   Gulp tasks
   ========================================================================== */

const scripts = () =>
    gulp.src(jsPath + "/index.js")
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
        .pipe(gulp.dest(jsPath));

const _watchScripts = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', jsPath, '\x1b[0m');
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    gulp.watch(jsPath + "/index.js", scripts);
};
const watchScripts = gulp.series(_watchScripts);
/* ==========================================================================
   Exports
   ========================================================================== */
module.exports = {scripts, watchScripts};