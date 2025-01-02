const child_process = require('child_process');
child_process.execSync('pnpm install', { stdio: 'inherit', cwd: __dirname });

require('./index.js');
