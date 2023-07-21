import Jimp from "jimp";
import fs from "fs";
import del from "del";

let sourceimgContent = "source/img/content/";
let sourceimgDecors = "source/img/decors/";
let buildimgContent = "source/images/content/";
let buildimgDecors = "source/images/decors/";

let arrImagesContent = fs.readdirSync("source/img/content");
let arrImagesDecors = fs.readdirSync("source/img/decors");
let regexp = /\.[^/.]+$/;

async function jimp() {

	function jimpTo(pathToFiles, pathtoSourceFiles, pathtoBuildFiles){
		pathToFiles.forEach((files) => {
			let file = files.replace(regexp, "");
			let file1 = files.match(regexp);

			let path = pathtoSourceFiles + file + file1;

			Jimp.read(path, (err, image) => {
				if (err) throw err;
				image
					.resize(4096, Jimp.AUTO)
					.write(`${pathtoBuildFiles}${file + "-large@2x"}${file1}`);
			});
			Jimp.read(path, (err, image) => {
				if (err) throw err;
				image
					.resize(2048, Jimp.AUTO)
					.write(`${pathtoBuildFiles}${file + "-large"}${file1}`)
					.write(`${pathtoBuildFiles}${file + "-medium@2x"}${file1}`);
			});
			Jimp.read(path, (err, image) => {
				if (err) throw err;
				image
					.resize(1024, Jimp.AUTO)
					.write(`${pathtoBuildFiles}${file + "-medium"}${file1}`)
					.write(`${pathtoBuildFiles}${file + "-small@2x"}${file1}`);
			});
			Jimp.read(path, (err, image) => {
				if (err) throw err;
				image
					.resize(512, Jimp.AUTO)
					.write(`${pathtoBuildFiles}${file + "-small"}${file1}`);
			});
			Jimp.read(path, (err, image) => {
				if (err) throw err;
				image
					.resize(256, Jimp.AUTO)
					.write(`${pathtoBuildFiles}${file}${file1}`);
			});
		});
	}

	jimpTo(arrImagesContent, sourceimgContent, buildimgContent);
	jimpTo(arrImagesDecors, sourceimgDecors, buildimgDecors);

}

export default jimp;
