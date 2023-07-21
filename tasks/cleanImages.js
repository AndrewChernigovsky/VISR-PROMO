import del from "del";

async function cleanImages() {
	return del(["./build/img/**", "source/images"], { force: true });
}

export default cleanImages;
