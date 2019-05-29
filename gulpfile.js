/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp');
const gulpPath = './gulp-config'
const {styles, stylesMin, watchStyles} = require(gulpPath + '/styles');
const {scripts, watchScripts} = require(gulpPath + '/scripts');
const {watchHbs} = require(gulpPath + '/hbs');

/* ==========================================================================
   Gulp Commands
   ========================================================================== */
// styles
exports.styles = gulp.series(styles, stylesMin);
exports.stylesMin = stylesMin;
exports.watchStyles = watchStyles;
// scripts
exports.scripts = scripts;
exports.watchScripts = watchScripts;
// combination
exports.watch = gulp.parallel(watchStyles, watchScripts, watchHbs);



