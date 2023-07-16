import gulp from 'gulp';
import squoosh from 'gulp-libsquoosh';

function createWebp() {
	return gulp
		.src(['source/img/**/*.{png,jpg}',  'source/images/**/*.{png,jpg}'])
		.pipe(
			squoosh({
				webp: {},
			})
		)
		.pipe(gulp.dest('build/img'));
}

export default createWebp;