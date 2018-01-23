import { minify } from "../../AppData/Local/Microsoft/TypeScript/2.6/node_modules/@types/uglify-js";

/// <binding Clean='clean' />
"use strict";

var gulp = require("gulp"),
  rimraf = require("rimraf"),
  concat = require("gulp-concat"),
  uglify = require("gulp-uglify");

var paths = {
  webroot: "./wwwroot/"
};

var minifyjs = require('glup-js-minify');

gulp.task("minify-js", function () {
    gulp.src('./out/lib.js')
      .pipe(minifyjs())
      .pipe(gulp.dest('./out'));
  });