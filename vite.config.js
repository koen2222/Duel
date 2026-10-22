// Vite-instellingen voor Schijfduel.
// De bron staat in src/, `npm run build` zet het spel in dist/ en GitHub Actions
// publiceert dist/ op GitHub Pages (https://koen2222.github.io/Duel/).
import { defineConfig } from 'vite';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = import.meta.dirname;
const SRC = path.join(ROOT, 'src');

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

export default defineConfig({
  root: SRC,
  base: '/Duel/',
  // public/ gaat ongewijzigd mee naar de site (plaatjes uit de dex zoals
  // `art/p010.png`, `sw.js`, het manifest en de iconen).
  publicDir: path.join(ROOT, 'public'),
  build: { outDir: path.join(ROOT, 'dist'), emptyOutDir: true },
  plugins: [schermen()],
});
