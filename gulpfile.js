var gulp = require('gulp');
var fs = require("fs");
var browserify = require("browserify");

gulp.task('default', function () {
    return browserify('./assets/source/js/app.js')
        .transform("babelify", { presets: ["es2015"] })
        .bundle()
        .pipe(fs.createWriteStream('./assets/build/js/app.js'));
});