import { execSync } from 'child_process';
import { mkdirSync, cpSync, writeFileSync, copyFileSync, rmSync, renameSync, existsSync } from 'fs';
import { build } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// 1. Build the app (client + server)
console.log('→ building app...');
execSync('npx vite build', { stdio: 'inherit', cwd: root });

// 2. Prepare Vercel output structure (clean slate)
console.log('→ preparing vercel output...');
const funcDir = path.join(root, '.vercel/output/functions/index.func');
const staticDir = path.join(root, '.vercel/output/static');
rmSync(path.join(root, '.vercel/output'), { recursive: true, force: true });
mkdirSync(funcDir, { recursive: true });
mkdirSync(staticDir, { recursive: true });

// 3. Bundle server + ALL npm deps into a single standalone ESM file
//    (ssr.noExternal: true forces Vite to bundle everything except node: builtins)
console.log('→ bundling server (full bundle with deps)...');
await build({
  root,
  configFile: false,
  ssr: {
    noExternal: true,          // bundle ALL npm packages
    target: 'node',
  },
  build: {
    ssr: path.join(root, 'dist/server/server.js'),
    outDir: path.join(funcDir, '_build'),
    emptyOutDir: true,
    rollupOptions: {
      external: (id) => id.startsWith('node:') || ['fs','path','os','crypto',
        'stream','http','https','url','util','events','buffer',
        'process','child_process','net','tls','dns','readline',
        'worker_threads','perf_hooks','async_hooks','vm',
        'string_decoder','querystring','assert','zlib','dgram',
        'cluster','module','inspector','v8','repl','domain',
      ].includes(id),
      output: { format: 'esm' },
    },
    minify: false,
    target: 'node22',
  },
});

// 4. Rename output to server.mjs (so Node treats it as ESM without package.json)
const buildDir = path.join(funcDir, '_build');
const files = (await import('fs')).readdirSync(buildDir);
const serverFile = files.find(f => f.endsWith('.js') || f.endsWith('.mjs'));
if (!serverFile) throw new Error('No server bundle found in _build: ' + files.join(', '));
renameSync(path.join(buildDir, serverFile), path.join(funcDir, 'server.mjs'));
rmSync(buildDir, { recursive: true, force: true });

// 5. Copy the handler
console.log('→ copying handler...');
copyFileSync(
  path.join(root, 'scripts/vercel-handler.mjs'),
  path.join(funcDir, 'vercel-handler.mjs')
);

// 6. Copy client assets to static
cpSync(path.join(root, 'dist/client'), staticDir, { recursive: true });

// 7. Vercel function config
writeFileSync(path.join(funcDir, '.vc-config.json'), JSON.stringify({
  runtime: 'nodejs22.x',
  handler: 'vercel-handler.mjs',
  maxDuration: 10,
}, null, 2));

// 8. Vercel output config (routes)
writeFileSync(path.join(root, '.vercel/output/config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index' },
  ],
}, null, 2));

console.log('✓ vercel output ready');
