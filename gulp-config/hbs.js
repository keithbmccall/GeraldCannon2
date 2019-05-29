const gulp = require('gulp');
const livereload = require('gulp-livereload');
const {viewFiles} = require('./config')

const hbs = () =>
    gulp.src(viewFiles)
        .pipe(livereload());

const _watchHbs = () => {
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    console.log(' Watching:\x1b[32m', viewFiles, '\x1b[0m');
    console.log(' LiveReload:\x1b[32m', ' enabled', '\x1b[0m');
    livereload.listen();
    console.log('\x1b[32m', '====================================', '\x1b[0m');
    gulp.watch(viewFiles, hbs);
};

const watchHbs = gulp.series(_watchHbs);
/* ==========================================================================
   Exports
   ========================================================================== */
module.exports = {watchHbs};