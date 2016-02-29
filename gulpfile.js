var gulp = require('gulp');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var config = require('./gulpfile.config')();
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var usemin = require("gulp-usemin");
var uglify = require("gulp-uglify");
var tsify = require('tsify');
var rimraf = require("rimraf");
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var jsonServer = require('gulp-json-srv');
var concat = require('gulp-concat');
var superstatic = require('superstatic');
var browsersync = require('browser-sync');
var walkSync = require('walk-sync');

gulp.task('ts-lint', function(){
  return gulp.src(config.allTs)
    .pipe(tslint())
    .pipe(tslint.report('prose', {
      emitError : false
    }));
});

gulp.task('clean', function(cb){
  rimraf('./build', cb);
});

gulp.task('compile-ts', ['clean'], function(){
  var sourceTsFiles = [
    config.allTs,
    config.typings
  ];

  var bundler = browserify({
    basedir : "src",
    debug : true})
    .add("app.ts")
  //.add("typings/tsd.d.ts")
  .plugin(tsify);

  return bundler.bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("build"))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write({includeContent: false, sourceRoot: 'src'}));

});

gulp.task('watch', function(){
      gulp.watch([config.allTs], ['ts-lint', 'compile-ts']);
})
gulp.task('serve', ['ts-lint', 'compile-ts', 'bower'], function() {


    browsersync({
        port: 8085,
        files: ['**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        browser: "google-chrome",
        server: {
            baseDir: 'build',
            middleware: superstatic({ debug: false})
        }
    });

    jsonServer.start({
		data: 'apiMockService/db.json',
		port: 8086 });

});


gulp.task("bower", function () {
  //Bower no longer needed
	gulp.src("src/index.html")
	//	.pipe(wiredep())
		.pipe(gulp.dest("build"));
});


gulp.task('default', ['serve']);
