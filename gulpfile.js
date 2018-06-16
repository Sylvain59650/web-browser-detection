const uglify = require("gulp-uglify");
const gulp = require("gulp");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/demo/"
};


gulp.task("web-browser-detection.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(uglify())
    .pipe(gulp.dest(chemins.distrib))
    .pipe(gulp.dest(chemins.demo + "modules/web-browser-detection/distrib/"))
});


gulp.task("default", ["web-browser-detection.min.js"]);