var gulp = require('gulp');

function defaultTask(cb) {

  return gulp.src("index.html");
  cb();
}

exports.default = defaultTask
