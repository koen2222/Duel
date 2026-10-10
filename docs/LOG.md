# Samenwerkingslog

Nieuwste bovenaan. Formaat: datum — wie — wat.

## 2026-10-10 (middag) — Claude — online
- #10: online spelen met een kamercode, zonder server (Koens keuze: optie A, eigen collectie). Lockstep: beide engines spelen hetzelfde potje; alleen zetten (gespiegeld) en één startgetal voor de schijven gaan over de lijn. Nieuw: `src/online.js`, sectie ONLINE in `src/engine.js`, knop Online in het menu, `test/online.mjs` (ook in de GitHub Action).
- Getest: telkens een heel potje tussen twee browsers (tot 150 zetten, met aanvallen, kaarten en evoluties); de borden waren na elke zet aan beide kanten exact gelijk. Opgeven en wegvallende verbinding getest.
- Nog niet: klok, herverbinden, bescherming tegen valsspelen (dat komt met #9 en een server, optie C).

## 2026-10-10 (middag) — Claude
- #2: Vite-setup. Bron in `src/` (nieuw: `index.html`, `main.js`, `styles.css`), `npm run build` → `dist/`, GitHub Action `pages.yml` bouwt, draait de rooktest en publiceert. `test/smoke.mjs` accepteert nu een map (`node smoke.mjs ../dist`).
- Getest: rooktest op `dist/` en op de oude build geslaagd; collectie- en uitlegscherm pixel-identiek aan de oude build, geen 404's of consolefouten.
- Open voor Koen: na het mergen Settings → Pages → Source op "GitHub Actions" zetten (zie de PR).
- Daarna opruimen (apart issue): oude build in de root (`index.html`, `assets/`, `tools/rehash.py`), statische bestanden naar `public/`.

## 2026-10-10 (middag) — Claude — vliegende aanval
- #22: vliegende/sluipende figuren konden bij een aanval verder lopen dan hun MP (omweg via `bfs` zonder over figuren te gaan). Nieuw: `standplaatsVoor(u, doel)`; `legalMoves` biedt alleen nog aanvallen aan vanaf een punt waar je kunt staan; speler en AI gebruiken dezelfde standplaats. Werkt live via de Vite-build (#2).

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
