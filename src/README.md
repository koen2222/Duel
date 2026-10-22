# src/ — de bron van Schijfduel

| Bestand | Inhoud |
|---|---|
| `engine/` | de spel-engine (vanilla JS, ~5450 regels) in 23 delen per onderdeel; samen één klassiek script met globale functies (zie `engine/README.md`) |
| `screens.html` | alle schermen en overlays (HTML met `data-i18n`) |
| `dex.json` | de 151 figuren (wordt `window.RONDEL_DEX`) |
| `styles.css` | alle stijlen (Tailwind-basis + spelstijlen) |
| `index.html` | de pagina: meta-tags, fonts; Vite zet `screens.html` op de plek van `<!-- SCHERMEN -->` |
| `main.js` | startpunt: laadt CSS en dex, plakt de delen uit `engine/` aan elkaar en voert ze uit als gewone scripttekst |

Bouwen: `npm run build` → `dist/` (instellingen in `vite.config.js` in de root). Ontwikkelen: `npm run dev` → http://localhost:5173/Duel/. Statische bestanden (`art/`, `sw.js`, het manifest, …) staan in `public/` in de repo-root en gaan ongewijzigd mee naar `dist/`.

De engine wordt bewust niet als ES-module geladen: de engine en de rooktest gebruiken globale functies (`legalMoves`, `unitAt`, …). Sinds #3 staat hij in delen in `engine/`; echte modules met pure regels komen met #9.

## Herkomst
De engine (toen nog `engine.js`, sinds #3 opgesplitst in `engine/`), `screens.html` en `dex.json` zijn op 2026-10-10 automatisch uit de Grok-build gehaald (`assets/routes-*.js`; die oude build staat sinds #24 alleen nog in de git-geschiedenis, zie `docs/ARCHITECTUUR.md`, "Bron terugwinnen"). De Grok-build bevatte de engine als letterlijke tekst, inclusief originele commentaren. `styles.css` is de CSS uit die build, leesbaar opgemaakt.
