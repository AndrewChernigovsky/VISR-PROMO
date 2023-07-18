import fs from "fs";
import del from "del";

async function cleanImages() {
	fs.access("./build/img", (err) => {
		if (err) throw err;
		return del("./build/img/**", { force: true });
	});
}

export default cleanImages;
