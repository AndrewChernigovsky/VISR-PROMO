import gulp from 'gulp';
import squoosh from 'gulp-libsquoosh';

async function createWebp() {
	return gulp
		.src('build/img/**/*.{png,jpg}')
		.pipe(
			squoosh({
				webp: {},
			})
		)
		.pipe(gulp.dest('build/img'));
}

export default createWebp;
