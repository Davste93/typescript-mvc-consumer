var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var config = require('./gulpfile.config')();
var sourcemaps = require('gulp-sourcemaps');
var browsersync = require('browser-sync');
var superstatic = require('superstatic');
var usemin = require("gulp-usemin");
var uglify = require("gulp-uglify");
var reload      = browsersync.reload;
var wiredep = require("wiredep").stream;
var concat = require('gulp-concat');
gulp.task('ts-lint', function(){
  return gulp.src(config.allTs)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError : false
    }));
});

gulp.task('compile-ts', function(){
  var sourceTsFiles = [
    config.allTs,
    config.typings
  ];

  var tsResult = gulp
    .src(sourceTsFiles)
    .pipe(sourcemaps.init())
    .pipe(tsc({
  		module: "amd",
  		target: "ES5",
  		declarationFiles: false,
  		emitError: false,
  		emitDecoratorMetadata: true,
      outDir : config.tsOutputPath
	}));

  return tsResult.js
    .pipe(concat('jsApp.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.tsOutputPath))
    .pipe(reload({stream:true}));
});

gulp.task('serve', ['ts-lint', 'compile-ts', 'bower'], function() {
    gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);

    browsersync({
        port: 3000,
        files: ['**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: 'build',
            middleware: superstatic({ debug: false})
        }
    });
});



gulp.task("bower", function () {
	gulp.src("index.html")
		.pipe(wiredep())
		.pipe(gulp.dest("build"));
});

// gulp.task("minify", function () {
// 	return gulp.src("build/index.html")
// 		.pipe(usemin({
// 		    assetsDir: config.tsOutputPath,
// 		    js: [uglify(), "concat"]
// 	}))
//   .pipe(gulp.dest(config.tsOutputPath));
// });

gulp.task('default', ['serve']);
