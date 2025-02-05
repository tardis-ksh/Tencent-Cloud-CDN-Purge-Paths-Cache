import child_process from 'child_process';
import fs from 'fs/promises'
import path from 'path'

const depsFile = 'package.json';
const baseConfig = {
	stdio: 'inherit', cwd: process.cwd()
};

child_process.execSync('npm i pnpm -g', baseConfig);

if (!(await fs.readFile(path.resolve(depsFile)))) {
	child_process.execSync('pnpm init', baseConfig);
}

child_process.execSync('pnpm i @tardis-ksh/tencent @actions/core -S', baseConfig);

import('./index.mjs');
