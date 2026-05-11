import { execSync } from 'child_process';
import { mkdirSync, cpSync, writeFileSync, copyFileSync, rmSync } from 'fs';
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

// 3. Bundle server + ALL npm deps into self-contained ESM files (.mjs)
//    All output files get .mjs extension → Node always treats them as ESM
//    noExternal: true → bundle everything except node: builtins
console.log('→ bundling server (full bundle, all .mjs)...');
await build({
  root,
  configFile: false,
  ssr: {
    noExternal: true,
    target: 'node',
  },
  build: {
    ssr: path.join(root, 'dist/server/server.js'),
    outDir: funcDir,
    emptyOutDir: false,
    rollupOptions: {
      external: (id) =>
        id.startsWith('node:') || [
          'fs', 'path', 'os', 'crypto', 'stream', 'http', 'https', 'url',
          'util', 'events', 'buffer', 'process', 'child_process', 'net',
          'tls', 'dns', 'readline', 'worker_threads', 'perf_hooks',
          'async_hooks', 'vm', 'string_decoder', 'querystring', 'assert',
          'zlib', 'dgram', 'cluster', 'module', 'inspector', 'v8',
          'repl', 'domain',
        ].includes(id),
      output: {
        format: 'esm',
        // Force ALL output files to use .mjs extension
        // → Node.js always loads them as ESM, no package.json needed
        entryFileNames: '[name].mjs',
        chunkFileNames: 'assets/[name]-[hash].mjs',
      },
    },
    minify: false,
    target: 'node22',
  },
});

// 4. Copy the handler
console.log('→ copying handler...');
copyFileSync(
  path.join(root, 'scripts/vercel-handler.mjs'),
  path.join(funcDir, 'vercel-handler.mjs')
);

// 5. Copy client assets to static
cpSync(path.join(root, 'dist/client'), staticDir, { recursive: true });

// 6. Vercel function config
writeFileSync(path.join(funcDir, '.vc-config.json'), JSON.stringify({
  runtime: 'nodejs22.x',
  handler: 'vercel-handler.mjs',
  maxDuration: 10,
}, null, 2));

// 7. Vercel output config (routes)
writeFileSync(path.join(root, '.vercel/output/config.json'), JSON.stringify({
  version: 3,
  routes: [
    { handle: 'filesystem' },
    { src: '/(.*)', dest: '/index' },
  ],
}, null, 2));

console.log('✓ vercel output ready');
