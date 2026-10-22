# Samenwerkingslog

Nieuwste bovenaan. Formaat: datum — wie — wat.

## 2026-10-22 — Claude — engine in delen (#3)
- #24 (PR #29) samengevoegd en live gecontroleerd: nieuwe paden werken, geen 404's, rooktest op de live site geslaagd. Online spelen live getest via de openbare PeerJS-server: 3 van de 3 kamers verbonden.
- #3: `src/engine.js` opgesplitst in 23 delen in `src/engine/`: bord, figuren, kaarten, profiel, taal, audio, online, staat, schermen, tekenen, effecten, zetten en beurt, gevecht, AI, enz. `src/main.js` plakt ze op volgorde van bestandsnaam aan elkaar; `tools/engine.mjs` doet hetzelfde voor Node (`tools/balans.mjs`, `test/online.mjs`). Overzicht en werkafspraken staan in `src/engine/README.md`.
- Geen gedragsverandering. De delen samen zijn teken voor teken gelijk aan het oude `engine.js`; dat is ook in de browser gecontroleerd, in de build en met `npm run dev`. Rooktest en online-test zijn geslaagd, en `tools/balans.mjs` geeft dezelfde tabellen.
- @Schijfduel-bot: werk voortaan in het deel waar de code hoort (tabel in `src/engine/README.md`).
- Afspraak met Koen (22-10): Claude voegt eigen PR's zelf samen zodra de build, de rooktest en de online-test groen zijn, en controleert daarna de live site.

## 2026-10-22 — Claude — samenvoegen en opruimen
- Op verzoek van Koen #18, #23, #25, #19, #20 en #21 samengevoegd, in die volgorde. Na elke stap het conflict in dit log opgelost en gewacht tot de build, de rooktest en de online-test groen waren. Nu live: juiste plaatjes, aanval van vliegende figuren binnen hun MP, online spelen met een kamercode en een eigen save-sleutel.
- #24: oude Grok-build weg (`index.html` en `assets/` in de root, `tools/rehash.py`, `.nojekyll`). Statische bestanden staan nu in `public/`: `art/`, `favicon.svg`, `og.jpg`, `x-banner.jpg`, `sw.js`, en uit `__grok/` het `manifest.webmanifest` en `icon-180.png`. `vite.config.js` gebruikt `publicDir` in plaats van de kopieer-plugin. De rooktest en de online-test testen zonder map `dist/`.
- @Schijfduel-bot (#26, #28): plaatjes staan nu in `public/art/`, het app-icoon in `public/icon-180.png`, het manifest in `public/manifest.webmanifest`.
- Getest: build, rooktest, online-test; `vite preview` en `npm run dev` zonder 404's (menu-achtergrond, plaatjes, manifest, icoon, `sw.js`).

## 2026-10-10 (middag) — Claude — regels
- #7: `docs/REGELS.md` naast de code gelegd en aangevuld (MP-maximum, eerste zet, aanvallen na lopen, wat "winnen" is, statussen, P.C., abilities). Zes vragen voor Koen onderaan `docs/REGELS.md`.

## 2026-10-10 (middag) — Claude — balans
- #8: analyse in `docs/BALANS.md`, gemaakt met het nieuwe `tools/balans.mjs` (rekent met de echte regels uit de engine). Belangrijkste: 50 figuren hebben een van 4 sjabloonschijven; uitschieters Buidelstoot, Kiezelkop, Neveling; Tweede Kans en Verblinding leveren gemiddeld niets op.
- Open vragen voor Koen: zie `docs/BALANS.md`, "Vragen aan Koen".

## 2026-10-10 (middag) — Claude — save-sleutel
- #17: profiel staat nu onder `schijfduel_profile`; `rondel_profile` (gedeeld met Rondel op hetzelfde domein) wordt alleen éénmalig overgenomen en daarna niet meer aangeraakt. Werkt live pas via de Vite-build (#2).
- Rooktest: het vooraf ingestelde profiel was onvolledig en werd door `loadProfile` weggegooid; nu volledig, dus animaties echt uit (potje ~50 s i.p.v. ~2 min).

## 2026-10-10 (middag) — Claude — online
- #10: online spelen met een kamercode, zonder server (Koens keuze: optie A, eigen collectie). Lockstep: beide engines spelen hetzelfde potje; alleen zetten (gespiegeld) en één startgetal voor de schijven gaan over de lijn. Nieuw: `src/online.js`, sectie ONLINE in `src/engine.js`, knop Online in het menu, `test/online.mjs` (ook in de GitHub Action).
- Getest: telkens een heel potje tussen twee browsers (tot 150 zetten, met aanvallen, kaarten en evoluties); de borden waren na elke zet aan beide kanten exact gelijk. Opgeven en wegvallende verbinding getest.
- Nog niet: klok, herverbinden, bescherming tegen valsspelen (dat komt met #9 en een server, optie C).
- De online-test vond een vastloper die ook solo bestaat (#22, sluipende figuur zet het bord op slot); de fix uit #23 zit daarom ook in deze branch.

## 2026-10-10 (middag) — Claude — vliegende aanval
- #22: vliegende/sluipende figuren konden bij een aanval verder lopen dan hun MP (omweg via `bfs` zonder over figuren te gaan). Nieuw: `standplaatsVoor(u, doel)`; `legalMoves` biedt alleen nog aanvallen aan vanaf een punt waar je kunt staan; speler en AI gebruiken dezelfde standplaats. Werkt live via de Vite-build (#2).

## 2026-10-10 (middag) — Claude — plaatjes
- #15: plaatjes van #11–#18 en #70/#74 op de juiste figuur gezet (alleen bestanden hernoemd, dex ongewijzigd).
- #15: snippers van buurfiguren uit 36 plaatjes gehaald met het nieuwe `tools/snippers.py`; `skeleton.png` en `p109.png` bewust overgeslagen (losse vlammetjes/belletjes horen bij de figuur).
- Open: #16 nieuw plaatje voor #74 Kiezelkop (lijkt nu op #75), #17 save-sleutel gedeeld met Rondel (vraag aan Koen).

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
