// const gulp = require('gulp');
// const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
// // const postcss = require('gulp-postcss');
// // const autoprefixer = require('autoprefixer');
// // const sourcemaps = require('gulp-sourcemaps');
// // const filter = require('gulp-filter'); 
const groupmq = require('gulp-group-css-media-queries');
// const bs = require('browser-sync');
// // const reload = bs.reload; 
// // var styleWatchFiles = './assets/scss/**/*.scss'; // Path to all *.scss files inside css folder and inside them.

// const SASS_SOURCES = [
//   // './*.scss', // This picks up our style.scss file at the root of the theme
//   './assets/scss/*.scss', // All other Sass files in the /css directory
// ];

// /**
//  * Compile Sass files
//  */
// // gulp.task('compile:sass', ['lint:sass'], () =>
// //   gulp.src(SASS_SOURCES, { base: './' })
// //     .pipe(plumber()) // Prevent termination on error
// //     .pipe(sass({
// //       indentType: 'tab',
// //       indentWidth: 1,
// //       outputStyle: 'expanded', // Expanded so that our CSS is readable
// //     })).on('error', sass.logError)
// //     .pipe(postcss([
// //       autoprefixer({
// //         browsers: ['last 2 versions'],
// //         cascade: false,
// //       })
// //     ]))
// //     .pipe(groupmq()) // Group media queries!
// //     .pipe(gulp.dest('.')) // Output compiled files in the same dir as Sass sources
// //     .pipe(bs.stream())); // Stream to browserSync

// /**
//  * Start up browserSync and watch Sass files for changes 
//  */
// gulp.task('styles', function () {
// 	 gulp
// 	.src(SASS_SOURCES)
// 	.pipe(plumber()) // Prevent termination on error
// 	.pipe(sass({
// 		indentType: 'tab',
// 		indentWidth: 1,
// 		outputStyle: 'expanded', // Expanded so that our CSS is readable
// 	})).on('error', sass.logError)
// 	// .pipe(postcss([
// 	// 	autoprefixer({
// 	// 		browsers: ['last 2 versions'],
// 	// 		cascade: false,
// 	// 	})
// 	// ]))
// 	// .pipe(postcss())
// 	.pipe(groupmq()) // Group media queries!
// 	.pipe(gulp.dest('./')) // Output compiled files in the same dir as Sass sources
// 	// .pipe(filter('**/*.css'))
// 	.pipe(bs.stream()) // Stream to browserSync
// 	// .pipe(notify({ message: 'TASK: "styles" Completed! 💯', onLast: true }));

//   // gulp.watch(SASS_SOURCES, ['compile:sass', 'lint:sass']);
// });

// /**
//  * Lint Sass
//  */
// // gulp.task('lint:sass', () =>
// //   gulp.src(SASS_SOURCES)
// //     .pipe(plumber())
// //     .pipe(sassLint())
// //     .pipe(sassLint.format()));

// /**
//  * Default task executed by running `gulp`
//  */

// const reloadBrowser = (cb) => {
// 	bs.reload();
// 	cb();
// };


// gulp.task('watch:sass', gulp.series('styles'), () => {
//   bs.init({
//     proxy: 'https://cooth.local/',
// 		open: true,
// 		injectChanges: true,
//   });

//   gulp.watch(SASS_SOURCES, gulp.series('styles'), reloadBrowser);
// });


// function watchTask(){
//   watch('*.html', browsersyncReload);
//   watch(['app/**/*.scss', 'app/**/*.js'], series(scssTask, jsTask, browsersyncReload));
// }

// gulp.task('default', gulp.series('watch:sass'))

	// watch(SASS_SOURCES, gulp.series('styles'), reload);
	// watch('./_components/**/**/*.scss', { events: 'all' }).on('change', function () {
	// 	// css();
	// 	browserSync.reload();
	// });

// }

// gulp.task('default', ['styles', 'customJS', 'images', 'browser-sync'], function () {
// 	gulp.watch(projectPHPWatchFiles, reload); // Reload on PHP file changes.
// 	gulp.watch(styleWatchFiles, ['styles', reload]); // Reload on SCSS file changes.
// 	gulp.watch(customJSWatchFiles, ['customJS', reload]); // Reload on customJS file changes.
// });



const { src, dest, watch, series } = require('gulp');
// const sass = require('gulp-sass');
// const postcss = require('gulp-postcss');
// const cssnano = require('cssnano');
// const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('./assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    // .pipe(postcss([cssnano()]))
		.pipe(groupmq()) 
    .pipe(dest('.'));
		// .pipe(gulp.dest('.'))
}

// JavaScript Task
// function jsTask(){
//   return src('app/js/script.js', { sourcemaps: true })
//     .pipe(terser())
//     .pipe(dest('dist', { sourcemaps: '.' }));
// }

// Browsersync Tasks
function browsersyncServe(cb){
  browsersync.init({
    proxy: 'https://cooth.local/',
		open: true,
		injectChanges: true,
  });
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask(){
  // watch('*.html', browsersyncReload);
  watch(['./assets/scss/*.scss'], series(scssTask, browsersyncReload));
}

// Default Gulp task
exports.default = series(
  scssTask,
  // jsTask,
  browsersyncServe,
  watchTask
);