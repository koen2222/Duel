// Vite-instellingen voor Schijfduel.
// De bron staat in src/, `npm run build` zet het spel in dist/ en GitHub Actions
// publiceert dist/ op GitHub Pages (https://koen2222.github.io/Duel/).
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = import.meta.dirname;
const SRC = path.join(ROOT, 'src');
const BASE = '/Duel/';

// Bestanden in de repo-root die ongewijzigd mee moeten naar de site. De engine
// verwijst er rechtstreeks naar (bijv. `art/p010.png` uit de dex, `sw.js`).
const STATISCH = ['art', '__grok', 'favicon.svg', 'og.jpg', 'x-banner.jpg', 'sw.js'];
const TYPES = { '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.js': 'text/javascript', '.webmanifest': 'application/manifest+json' };

// Zet src/screens.html op de plek van <!-- SCHERMEN --> in src/index.html, zodat
// alle schermen al in de pagina staan voordat de engine start (zoals in de oude build).
function schermen() {
  return {
    name: 'schijfduel-schermen',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => html.replace('<!-- SCHERMEN -->', () => fs.readFileSync(path.join(SRC, 'screens.html'), 'utf8')),
    },
  };
}

// Kopieert STATISCH naar dist/ bij het bouwen, en serveert dezelfde bestanden
// tijdens `npm run dev`.
function statischeBestanden() {
  let outDir;
  const bron = (rel) => STATISCH.some((p) => rel === p || rel.startsWith(p + '/')) && path.join(ROOT, rel);
  return {
    name: 'schijfduel-statisch',
    configResolved(config) { outDir = config.build.outDir; },
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = decodeURIComponent((req.url || '').split('?')[0]);
        const bestand = url.startsWith(BASE) && bron(url.slice(BASE.length));
        if (!bestand || !fs.existsSync(bestand) || !fs.statSync(bestand).isFile()) return next();
        res.setHeader('Content-Type', TYPES[path.extname(bestand)] || 'application/octet-stream');
        fs.createReadStream(bestand).pipe(res);
      });
    },
    writeBundle() {
      for (const p of STATISCH) {
        const van = path.join(ROOT, p);
        if (fs.existsSync(van)) fs.cpSync(van, path.join(outDir, p), { recursive: true });
      }
    },
  };
}

export default defineConfig({
  root: SRC,
  base: BASE,
  publicDir: false,
  build: { outDir: path.join(ROOT, 'dist'), emptyOutDir: true },
  plugins: [schermen(), statischeBestanden()],
});
