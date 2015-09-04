var gulp         = require('gulp');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
var rename       = require('gulp-rename');
var browserSync  = require('browser-sync').create();

var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var minifyCss    = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var jpegoptim    = require('imagemin-jpegoptim');
var pngquant     = require('imagemin-pngquant');
var optipng      = require('imagemin-optipng');
var svgo         = require('imagemin-svgo');

var ghPages      = require('gulp-gh-pages');

/* ========================================================================== */
/* CONFIG HELPER                                                              */
/* ========================================================================== */

var path = {
    src: {
        dir: 'src/',
        styles: 'styles/**.*',
        scripts: 'scripts/**.*',
        images: 'images/**/*.{png,jpg,jpeg,gif,svg}',
        files: ['*']
    },
    build: {
        dir: 'build/',
        styles: 'styles/',
        scripts: 'scripts/',
        images: 'images/'
    }
};

var onError = function(err) {
    notify.onError({
        title:    'Gulp',
        subtitle: 'Failure!',
        message:  'Error: <%= error.message %>',
        // sound:    'Beep'
    })(err);

    this.emit('end');
};

/* ========================================================================== */
/* DEFAULT TASK                                                               */
/* ========================================================================== */

// Static Server + watching scss/js/html files
gulp.task('default', ['serve']);

gulp.task('serve', ['styles', 'scripts', 'files', 'images'], function() {
    browserSync.init({
        proxy: 'nantesjs'
    });

    gulp.start('watchers');
});

/* ========================================================================== */
/* GENERAL TASKS                                                              */
/* ========================================================================== */

// Compile sass into CSS & auto-inject into browsers
gulp.task('styles', function() {
    return gulp.src(path.src.dir + path.src.styles)
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(minifyCss())
        .pipe(rename({ extname: '.min.css'}))
        .pipe(gulp.dest(path.build.dir + path.build.styles))
        .pipe(browserSync.stream());
});

gulp.task('scripts', function() {
    return gulp.src(path.src.dir + path.src.scripts)
        .pipe(plumber({errorHandler: onError}))
        .pipe(uglify({
            mangle: true,
            preserveComments: false
        }))
        .pipe(rename({ extname: '.min.js'}))
        .pipe(gulp.dest(path.build.dir + path.build.scripts));
});

gulp.task('files', function() {
    return gulp.src(path.src.dir + path.src.files)
        .pipe(plumber({errorHandler: onError}))
        .pipe(gulp.dest(path.build.dir));
});

gulp.task('images', function() {
    return gulp.src(path.src.dir + path.src.images)
        .pipe(plumber({errorHandler: onError}))
        .pipe(pngquant({
            quality: '65-80',
            speed: 4
        })())
        .pipe(optipng({optimizationLevel: 3})())
        .pipe(jpegoptim({
            max: 70
        })())
        .pipe(svgo()())
        .pipe(gulp.dest(path.build.dir + path.build.images));
});

/* ========================================================================== */
/* DEPLOY TASK                                                                */
/* ========================================================================== */

gulp.task('deploy', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

/* ========================================================================== */
/* WATCHER TASK                                                               */
/* ========================================================================== */

gulp.task('watchers', function() {
  var watcherStyles = gulp.watch('src/styles/partials/**.scss', ['styles']);
  watcherStyles.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });

  var watcherScripts = gulp.watch('src/scripts/**.*', ['scripts-watch']);
  watcherScripts.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });

  var watcherImages = gulp.watch('src/images/**.*', ['images']);
  watcherImages.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });

  var watcherFiles = gulp.watch('src/*.html', ['files']);
  watcherFiles.on('change', function (event) {
    console.log('Event type: ' + event.type);
    console.log('Event path: ' + event.path);
  });

  gulp.watch('build/*.html').on('change', browserSync.reload);
});

// create a task that ensures the `scripts` task is complete before reloading browsers
gulp.task('scripts-watch', ['scripts'], browserSync.reload);
