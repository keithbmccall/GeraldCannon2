/* ==========================================================================
   Imports
   ========================================================================== */
const gulp = require('gulp');
const {styles, stylesMin, watchStyles} = require('./gulp-config/styles');
const {scripts, watchScripts} = require('./gulp-config/scripts');

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
exports.watch = gulp.parallel(watchStyles, watchScripts, stylesMin);



