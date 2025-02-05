import child_process from 'child_process';
import fs from 'fs/promises'
import path from 'path'

const depsFile = 'package.json';
const baseConfig = {
	stdio: 'inherit', cwd: process.cwd()
};

child_process.execSync('npm i pnpm -g', baseConfig);

try {
	await fs.readFile(path.resolve(depsFile))
} catch (error) {
	console.error('no deps file found', error)
	console.log('create package.json ...');
	child_process.execSync('pnpm init', baseConfig);
}

child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S', baseConfig);
child_process.execSync('la -la', baseConfig);

await import('./index.mjs');
