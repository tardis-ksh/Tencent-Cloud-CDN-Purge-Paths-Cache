import child_process from 'child_process';

// 环境默认不含有 pnpm
child_process.execSync('corepack enable', { stdio: 'inherit', cwd: __dirname });
child_process.execSync('pnpm install', { stdio: 'inherit', cwd: __dirname });

import('./index.mjs');
