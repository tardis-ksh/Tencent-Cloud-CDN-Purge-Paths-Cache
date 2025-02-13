import child_process from 'child_process';
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url';

// actions 执行环境中 process.cwd 一般指向的是对应 action 的目录不是插件的
const __dirname = fileURLToPath(new URL('.', import.meta.url));
// console.log(__dirname, '__dirname', process.cwd());

const depsFile = 'package.json';
const baseConfig = {
	stdio: 'inherit', cwd: __dirname
};

child_process.execSync('npm i pnpm -g', baseConfig);

try {
	await fs.readFile(path.join(__dirname, depsFile))
} catch (error) {
	console.error('no deps file found', error)
	console.log('create package.json ...');
	child_process.execSync('pnpm init', baseConfig);
}

child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S', baseConfig);
child_process.execSync('ls -la', baseConfig);

await import('./index.mjs');
