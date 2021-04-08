const gulp = require('gulp');
const eslint = require('gulp-eslint');

/**
 * Run the plugin through ESLint
 * @param {function} cb callback function
 */
function style(cb) {
  gulp.src(['**/*.js', '!node_modules/**'])
      .pipe(eslint())
      .pipe(eslint.format())
      .pipe(eslint.failAfterError());
  cb();
}

exports.style = style;
exports.default = style;
