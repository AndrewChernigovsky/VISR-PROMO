import fs from "fs";
import del from "del";

async function clean() {
	fs.access('./build', (err) => {
		if (err) throw err;
		return del(['./build/**', '!./build/img/**', '!./build/fonts/**', '!./build/js/**', '!./build/css/**'], { force: true });
	});
}

export default clean;
