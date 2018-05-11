const uglify = require("gulp-uglify");
const gulp = require("gulp");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/"
};


gulp.task("web-browser-detection.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(uglify())
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task("default", ["web-browser-detection.min.js"]);