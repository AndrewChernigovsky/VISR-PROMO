import sass2css from './tasks/sass2css.js';
import pug2html from './tasks/pug2html.js';
import scripts from './tasks/scriptjs.js';
import optimizeImages from './tasks/optimizeImages.js';
import copyImages from './tasks/copyimages.js';
import createWebp from './tasks/createWebp.js';
import vendors from './vendors.js';
import copy from './tasks/copy.js';
import clean from './tasks/clean.js';
import cleanImages from './tasks/cleanImages.js';
import server from './tasks/server.js';
import watcher from './tasks/watcher.js';
import svg from './tasks/svg.js';
import sprite from './tasks/sprite.js';
import fonts from './tasks/fonts.js';
import jimp from './tasks/jimp.js';
import gulp from 'gulp';

export const build = gulp.series(
	clean,
	jimp,
	copy,
	copyImages,
	optimizeImages,
	fonts,
	gulp.parallel(sass2css, vendors, pug2html, scripts, svg, sprite, createWebp)
);

export const images = gulp.series(
	cleanImages,
	jimp,
	copyImages
)

export default gulp.series(
	clean,
	copy,
	copyImages,
	fonts,
	gulp.parallel(sass2css, vendors, pug2html, scripts, svg, sprite, createWebp),
	gulp.series(server, watcher)
);

