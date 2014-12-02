gulp = require 'gulp'
uglify = require 'gulp-uglify'
streamify = require 'gulp-streamify'
rename = require 'gulp-rename'
rimraf = require 'rimraf'
coffee = require 'gulp-coffee'
pkg = require './package.json'

gulp.task 'coffee', ->
  gulp.src('./src/**/*')
    .pipe(coffee())
    .pipe(rename(basename: 'main'))
    .pipe(gulp.dest("./dist"))
    .pipe(streamify(uglify()))
    .pipe(rename(extname: '.min.js'))
    .pipe(gulp.dest("./dist"))

# gulp.task 'copy-latest', ['coffee-compile', 'remove-latest'], ->
#   gulp.src("dist/#{pkg.version}/**/*")
#     .pipe(gulp.dest("./dist/latest"))

# gulp.task 'build', ['copy-latest']

# gulp.task 'remove-latest', (done) -> rimraf './dist/latest', done
# gulp.task 'remove-current', (done) -> rimraf "./dist/#{pkg.version}", done

gulp.task 'watch', ->
	gulp.watch ['./src/**/*.coffee'], ['coffee']

gulp.task 'default', ['watch']