const child_process = require('child_process');
child_process.execSync('node -v', { stdio: 'inherit', cwd: __dirname });
child_process.execSync('yarn -v', { stdio: 'inherit', cwd: __dirname });
child_process.execSync('pnpm install', { stdio: 'inherit', cwd: __dirname });

require('./index.js');
