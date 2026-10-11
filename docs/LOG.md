# Samenwerkingslog

Nieuwste bovenaan. Formaat: datum — wie — wat.

## 2026-10-10 (middag) — Claude — save-sleutel
- #17: profiel staat nu onder `schijfduel_profile`; `rondel_profile` (gedeeld met Rondel op hetzelfde domein) wordt alleen éénmalig overgenomen en daarna niet meer aangeraakt. Werkt live pas via de Vite-build (#2).
- Rooktest: het vooraf ingestelde profiel was onvolledig en werd door `loadProfile` weggegooid; nu volledig, dus animaties echt uit (potje ~50 s i.p.v. ~2 min).

## 2026-10-10 (middag) — Claude
- #2: Vite-setup. Bron in `src/` (nieuw: `index.html`, `main.js`, `styles.css`), `npm run build` → `dist/`, GitHub Action `pages.yml` bouwt, draait de rooktest en publiceert. `test/smoke.mjs` accepteert nu een map (`node smoke.mjs ../dist`).
- Getest: rooktest op `dist/` en op de oude build geslaagd; collectie- en uitlegscherm pixel-identiek aan de oude build, geen 404's of consolefouten.
- Open voor Koen: na het mergen Settings → Pages → Source op "GitHub Actions" zetten (zie de PR).
- Daarna opruimen (apart issue): oude build in de root (`index.html`, `assets/`, `tools/rehash.py`), statische bestanden naar `public/`.

## 2026-10-10 (middag) — Schijfduel-bot
- #4: `sw.js` toegevoegd (minimaal, geen cache, wist oude caches); OG/X-afbeeldingen en `og:url` naar koen2222.github.io/Duel; Grok-extensiescript en grok-meta verwijderd; ongebruikte `rondel-dex.js` verwijderd (dex staat in `src/dex.json` en in de build).
- #5: cache-busting via `tools/rehash.py` (versiehash in namen van index/routes/styles); oude namen blijven als kopie zodat een verouderde index.html toch de nieuwe code laadt.
- #6: rooktest `test/smoke.mjs` (Playwright, echte klikken, heel potje). Lokaal: 28 beurten, 24 gevechten, geen JS-fouten.
- Engine niet aangepast; `src/` is dus nog gelijk aan de build.
- Restpunt: GitHub Pages cachet `index.html` zelf tot ~10 min (`max-age=600`), dat valt niet uit te zetten.

## 2026-10-10 — Schijfduel-bot
- Gebouwde versie van pokemonduel2.grok.me in de repo gezet, GitHub Pages aangezet (https://koen2222.github.io/Duel/).
- Fix 1445765: ontbrekende `spin()` in `runCombat` (aanvallen liep vast).
- Bron teruggewonnen uit de build → `src/engine.js`, `src/screens.html`, `src/dex.json`.
- Docs toegevoegd: ARCHITECTUUR, REGELS, ROADMAP, ONLINE; AGENTS.md/CLAUDE.md; issues per roadmaptaak.

### Open vragen voor Koen
- Kun je het project exporteren uit de Grok app builder? (ter controle van `src/`)
- Onlinemodus: eigen collectie of vaste teams? Cloudflare-account of eerst P2P?
- Kloppen de regels in `docs/REGELS.md` met wat je wilt?
