# Architectuur van Schijfduel (afgeleid uit de build)

> Status: afgeleid op 2026-10-10 door de Schijfduel-bot uit de gebouwde bestanden. Waar iets onzeker is staat **(?)**. Regelnummers verwijzen naar `src/engine.js`.

## 1. Opbouw van de build

### Vite-build (vanaf #2)
- Bron in `src/`: `index.html` (pagina), `main.js` (startpunt), `engine.js`, `screens.html`, `dex.json`, `styles.css`. Instellingen in `vite.config.js`.
- `npm run build` → `dist/`. De plugin `schijfduel-schermen` zet `screens.html` in de HTML (`<!-- SCHERMEN -->`). Alles in `public/` gaat ongewijzigd mee naar `dist/` en wordt tijdens `npm run dev` geserveerd:
  - `art/` — figuurplaatjes (pad per figuur in de dex, veld `art`) en `home-lobby.jpg` (achtergrond van het menu, vanuit `styles.css`).
  - `sw.js` — minimale service worker zonder cache (wist oude caches, neemt direct over).
  - `manifest.webmanifest` en `icon-180.png` — app-manifest en -icoon (het icoon is nog het Grok-placeholder, zie #28).
  - `favicon.svg`, `og.jpg`, `x-banner.jpg`.
  Verwijs in `src/` naar deze bestanden met een `/` vooraan (`/favicon.svg`, `url(/art/home-lobby.jpg)`); Vite zet daar bij het bouwen `/Duel/` voor. De engine en de dex gebruiken relatieve paden (`art/p010.png`, `sw.js`); die werken omdat de pagina zelf op `/Duel/` staat.
- `main.js` doet wat de React-schil deed: CSS laden, `window.RONDEL_DEX = dex`, en `engine.js` (als `?raw`-tekst) uitvoeren in een `<script id="rondel-engine-script">`. Geen React, TanStack of Grok-scripts meer.
- JS en CSS krijgen een hash in hun naam; bestanden uit `public/` niet (een gewijzigd plaatje kan tot ~10 min in de cache van GitHub Pages blijven).
- `.github/workflows/pages.yml` bouwt en draait `test/smoke.mjs` en `test/online.mjs` op `dist/` bij elke PR en elke push naar `main`, en publiceert `dist/` op Pages vanaf `main`.

### Oude Grok-build (verwijderd in #24)
Tot de overstap naar GitHub Actions stond in de root de build uit Grok app builder: `index.html` (TanStack Start, React, SSR) met `assets/index-*.js` (React-runtime), `assets/routes-*.js` en `assets/styles-*.css`, plus `tools/rehash.py` voor de versiehashes. De route-component in `routes-*.js` bevatte drie grote literals: de HTML van alle schermen (nu `src/screens.html`), de volledige engine als tekst (nu `src/engine.js`) en de dex (nu `src/dex.json`). In een `useLayoutEffect` zette hij `window.RONDEL_DEX`, vulde `#rondel-root` en voegde een `<script id="rondel-engine-script">` met de engine toe; `src/main.js` doet nu hetzelfde. React was dus alleen een schil: **het spel zelf is één vanilla-JS-script** dat de DOM en een SVG-bord direct aanstuurt. Versiemarker: `schijfduel-bgm-1` (`__RONDEL_ENGINE_VER`). De oude bestanden staan nog in de git-geschiedenis.

### Bron terugwinnen
`src/` is gemaakt met een klein Node-script (acorn): parse `routes-*.js`, pak de template-literals `i` en `a` en het argument van `JSON.parse` (`o`). Zie de commit van 2026-10-10.

## 2. Schermen en overlays (`src/screens.html`)
Schermen (`showScreen(name)`): `screen-home`, `screen-game`, `screen-collection`, `screen-store`, `screen-settings`, `screen-help`.
Overlays: `deck-overlay` (team kiezen), `vs-overlay` (intro), `combat-overlay` (schijven draaien), `evo-overlay` (evolutie-keuze), `result-overlay`, `pause-overlay`, `info-overlay`, `detail-overlay` (figuurdetail), `booster-overlay`.
Home-tegels: `tile-solo` (DUEL tegen AI), `tile-hotseat` (2 spelers op één toestel), collectie, winkel, instellingen, uitleg.

## 3. Spelstaat
`initialState()` (r. ~1210) geeft één object `state`:
`turn` ('p1'/'p2'), `turnN`, `actionsLeft` (1 per beurt), `units` (uid → unit), `bench` (zijlijn per speler), `hc` (P.C./ziekenboeg per speler), `plates` en `usedPlates` (kaarten), `mode` ('solo' | 'hotseat'), `clock`, `locked`/`animating` (tijdens animaties), `over`, plus beurtvelden (`plateUsed`, `pendingPlate`, `mpBonus`, `warcry`, `counterAttack`).
Unit (`startGame` → `mk`): `{uid, defKey, owner, node, status[], fx{}, level, evoMap, evoKey, evolved, slots[]}`.
Debug: `window.__rondelQA.state`.

## 4. Bord (28 punten)
`NODES` (r. ~30): 7×5-raster `BOARD_COL_X`/`BOARD_ROW_Y`. Buitenring 20 punten (incl. startpunten `E1_BL`, `E1_BR` (p1), `E2_TL`, `E2_TR` (p2) en doelen `G1` (p1, onder) en `G2` (p2, boven)) + binnenring van 8 (`IT1..IB3`, midden leeg) = 28. `ROUTES` = verbindingen, incl. 4 hoek-diagonalen en 2 doel-diagonalen (`T2–IT2`, `B3–IB2`). `ADJ` = buurlijst.

## 5. Figuren-data
`applyDex(dex)` bouwt `UNIT_DEFS`, `RARITY`, `EVOLUTIE`, `UNIT_ART`, `UNIT_ABILITY`. Dex-velden: `id` (p001–p151), `name`/`nameEn`, `fac` (15 types: Gras, Vuur, Water, …), `mp` (bewegingspunten), `rar` (C/U/R), `segments` (schijfvakken), `ability`, `evo`, `art`, `legend`.
Schijf: `SLOT_COUNT = 96` vakken (3,75°). Vaksoorten: `white` (aanval, waarde `v`), `gold` (gouden aanval), `purple` (effect + sterren), `blue` (ontwijken), `red` (Miss).
Kaarten (`PLATES`, 21 stuks, budget `PLATE_BUDGET = 8`): herstel, draai, gevecht, beweging, bijzonder — Nederlandse namen met Duel-equivalent.

## 6. Beurtverloop
Tikken: `onBenchTap` → `deployTargets` / `doDeploy` (inzetten via eigen startpunt), `onUnitTap` → `legalMoves` (BFS met `effMP`) → `onNodeTap` → `moveUnit` of `runCombat`. Na elke actie `afterAction()` → `checkSurround()` → `maybeAutoEndTurn()` → `endTurn()`.
`endTurn()`: slaap/wacht afhandelen, beurt wisselen, P.C. → zijlijn, gif-KO's, lockout-check, en in solo `aiTurn()`.

## 7. Gevecht (`runCombat(att, def)`, r. ~4540)
1. Beide schijven tegelijk `spin()` (r. ~4410) — **`Math.random()` in de client** bepaalt het vak.
2. Herkansingen (Tweede Kans/Verblinding), Verwarring (`nextAttackIndex`), Scherpschutter, Vuurwervel (meerdere spins).
3. `applyStatus` past schijf aan op status (verlamming, brand, gif).
4. `resolve(a, d)` bepaalt uitkomst (zie docs/REGELS.md); `purpleOutcome`, `whiteWinEffect`.
5. Beschermingen (Schildwacht, Laatste Adem, ability `undying`), contact-abilities, KO → `koUnit` (naar P.C.), terug naar zijlijn, evolutie (`vraagEvolutie`/`doeEvolutie`) of `levelUp` (max level 4).
Commit 1445765 herstelde de ontbrekende `spin()`-aanroep (in build én dus in `src/engine.js`).

## 8. AI (solo)
`aiTurn()` (r. ~5135), speler `AI = 'p2'`. Niveaus `AI_LEVELS` (makkelijk/normaal/moeilijk: jitter, slip, horizon, …). Heuristieken: `rushThreat`, `combatEV`, `distTo`, `abilityPosBonus`, `aiUsePlate`, verdediging van `GOAL_ZONE = ['G2','T2','T3']`. Teams: `aiDeck()` / `AI_DECKS` op basis van zeldzaamheid.

## 9. Opslag (localStorage)
Eén sleutel `rondel_profile` (`loadProfile`/`saveProfile`): `credits` (start 400), `owned` (figuur → level), `stats` (wins/losses), `settings`, `decks` (3 opgeslagen teams). Instellingen: `SETTING_DEFS` (volume, animatiesnelheid, arena, klok 3/5/10/uit, moeilijkheid, taal, autoEndTurn, …).
Economie: winst +100 / verlies +25 credits (alleen solo), booster 150 (kansen C 65%, U 27%, R 8%), dubbelen geven credits terug.

## 10. i18n
`I18N`-tabel (r. ~670), `t(key)`, `tf(key, vars)`, inline `tr(nl, en)`; `applyLang()` vult elementen met `data-i18n`. Talen: `nl` (standaard) en `en` (`detectLang`). Uitleg: `HELP_NL` / `HELP_EN`.

## 11. Audio en effecten
Eigen synth-audio (`Audio_`, `SFX`, `sfx()`), BPM-gebaseerde muziek; uitgebreide SVG/CSS-effecten (`spawnFX`, `speelAanvalFx`, …). Respecteert `prefers-reduced-motion`.

## 12. Gevolgen voor de onlinemodus
- Alle logica zit in globale functies die direct de DOM aanraken → regels en weergave moeten eerst gescheiden worden (pure `applyAction(state, action)`).
- Toeval komt uit `Math.random()` in `spin()` → moet een geseede/door host bepaalde uitkomst worden.
- `state` bevat `Set`s en DOM-afhankelijke velden → serialisatie nodig.
- Er is al een `hotseat`-modus: een goed vertrekpunt voor online (twee menselijke spelers).
