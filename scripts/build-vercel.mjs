import { execSync } from 'child_process';
import { mkdirSync, cpSync, writeFileSync, copyFileSync } from 'fs';

// 1. Build the app
console.log('→ building...');
execSync('npx vite build', { stdio: 'inherit' });

// 2. Prepare Vercel output structure
console.log('→ preparing vercel output...');
mkdirSync('.vercel/output/functions/index.func', { recursive: true });
mkdirSync('.vercel/output/static', { recursive: true });

// 3. Copy server bundle into the function
cpSync('dist/server', '.vercel/output/functions/index.func', { recursive: true });

// 4. Copy the handler adapter
copyFileSync('scripts/vercel-handler.mjs', '.vercel/output/functions/index.func/vercel-handler.mjs');

// 5. Copy client assets to static
cpSync('dist/client', '.vercel/output/static', { recursive: true });

// 6. package.json con type:module para que Node.js cargue los ESM
writeFileSync('.vercel/output/functions/index.func/package.json', JSON.stringify({
  type: 'module',
}, null, 2));

// 7. Vercel function config
writeFileSync('.vercel/output/functions/index.func/.vc-config.json', JSON.stringify({
  runtime: 'nodejs22.x',
  handler: 'vercel-handler.mjs',
  maxDuration: 10,
}, null, 2));

// 7. Vercel output config
writeFileSync('.vercel/output/config.json', JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index' },
  ],
}, null, 2));

console.log('✓ vercel output ready');
