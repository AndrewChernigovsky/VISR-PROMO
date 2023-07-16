import gulp from 'gulp';

function copyImages1() {
	return gulp.src('source/img/**/*.{png,jpg}').pipe(gulp.dest('build/img'));
}

function copyJimp() {
	return gulp.src('source/images/**/*.{png,jpg}').pipe(gulp.dest('build/img'));
}

function copyImages() {
	return (
		copyJimp(),
		copyImages1()
	)
}

export default copyImages;
