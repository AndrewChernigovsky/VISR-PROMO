import fs from 'fs';

async function clean() {
	return fs.rmSync('build', { recursive: true, force: true });
}

clean();

export default clean;
