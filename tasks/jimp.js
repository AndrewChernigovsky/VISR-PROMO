import Jimp from "jimp";
import fs from "fs";
import del from "del";

let sourceimgContent = "source/img/content/";
let sourceimgDecors = "source/img/decors/";
let buildimgContent = "source/images/content/";
let buildimgDecors = "source/images/decors/";

let arrImagesContent = fs.readdirSync("source/img/content");
let arrImagesDecors = fs.readdirSync("source/img/decors");

function clean() {
	return del(["source/images"], { force: true });
}

clean();
let regexp = /\.[^/.]+$/;

async function jimp() {
	arrImagesContent.forEach((files) => {
		let file = files.replace(regexp, "");
		let file1 = files.match(regexp);

		let path = sourceimgContent + file + file1;

		Jimp.read(path, (err, image) => {
			if (err) throw err;
			image
				.resize(4096, Jimp.AUTO)
				.write(`${buildimgContent}${file + "-large@2x"}${file1}`);
		});
		Jimp.read(path, (err, image) => {
			if (err) throw err;
			image
				.resize(2048, Jimp.AUTO)
				.write(`${buildimgContent}${file + "-large"}${file1}`)
				.write(`${buildimgContent}${file + "-medium@2x"}${file1}`);
		});
		Jimp.read(path, (err, image) => {
			if (err) throw err;
			image
				.resize(1024, Jimp.AUTO)
				.write(`${buildimgContent}${file + "-medium"}${file1}`)
				.write(`${buildimgContent}${file + "-small@2x"}${file1}`);
		});
		Jimp.read(path, (err, image) => {
			if (err) throw err;
			image
				.resize(512, Jimp.AUTO)
				.write(`${buildimgContent}${file + "-small"}${file1}`);
		});
		Jimp.read(path, (err, image) => {
			if (err) throw err;
			image
				.resize(256, Jimp.AUTO)
				.write(`${buildimgContent}${file}${file1}`);
		});
	});
	// arrImagesDecors.forEach((files) => {
	// 	let file = files.replace(regexp, "");
	// 	let file1 = files.match(regexp);

	// 	let path = sourceimgDecors + file + file1;
	// 	Jimp.read(path, (err, image) => {
	// 		if (err) throw err;
	// 		image
	// 			.resize(4096, Jimp.AUTO)
	// 			.write(`${buildimgDecors}${file + "@2x"}${file1}`)
	// 			.resize(2048, Jimp.AUTO)
	// 			.write(`${buildimgDecors}${file + "-large"}${file1}`)
	// 			.resize(1024, Jimp.AUTO)
	// 			.write(`${buildimgDecors}${file + "-medium"}${file1}`)
	// 			.resize(512, Jimp.AUTO)
	// 			.write(`${buildimgDecors}${file + "-small"}${file1}`)
	// 			.resize(256, Jimp.AUTO)
	// 			.write(`${buildimgDecors}${file}${file1}`);
	// 	});
	// });
}

export default jimp;
