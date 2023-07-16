import gulp from 'gulp';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import rename from 'gulp-rename';

function sprite() {
	return gulp
		.src('source/img/icons/*.svg')
		.pipe(svgo())
		.pipe(
			svgstore({
				inlineSvg: true,
			})
		)
		.pipe(rename('sprite.svg'))
		.pipe(gulp.dest('build/img'));
}

export default sprite;
