# AGENTS.md — briefing voor AI-medewerkers (Schijfduel-bot, Claude, …)

**Taal: Nederlands** in docs, issues, commits en spelteksten (Engels alleen als tweede taal in `I18N`).

## Project
Schijfduel ("Draai de schijf. Verover het doel.") is een tactisch figurenspel met draaiende schijven, geïnspireerd op Pokémon Duel: 28-punts stadion, 151 figuren, rood/blauw, solo tegen AI en hotseat. Opvolger van Rondel. Doel: digitaal spel afmaken, onlinemodus, en een printbaar bordspel. Eigenaar: Koen (GitHub `koen2222`). Palet: navy / cream / goud / rood-blauw (`docs/palet.md`).
Live: https://koen2222.github.io/Duel/ (GitHub Pages vanaf `main`, root).

## Waar staat wat
- `src/` — **de bron**: `engine/` (het spel, in delen per onderdeel; zie `src/engine/README.md`), `screens.html` (schermen), `dex.json` (151 figuren), `styles.css`, en het Vite-startpunt `index.html` + `main.js` (zie `src/README.md`). `npm run build` → `dist/`.
- `.github/workflows/pages.yml` — bouwt en test elke PR; publiceert `dist/` op Pages na elke merge in `main`.
- `public/` — statische bestanden die ongewijzigd mee gaan naar de site: `art/` (figuurplaatjes, de dex verwijst naar `art/pNNN.png`), `favicon.svg`, `og.jpg`, `x-banner.jpg`, `sw.js`, `manifest.webmanifest`, `icon-180.png`. Verwijs ernaar met een `/` vooraan (`/favicon.svg`); Vite zet daar zelf `/Duel/` voor.
- `docs/ARCHITECTUUR.md` — hoe de code werkt. `docs/REGELS.md` — regels uit de code. `docs/ROADMAP.md` — fases. `docs/ONLINE.md` — onlineontwerp. `docs/LOG.md` — samenwerkingslog.
- `print/` — bordspel-printbestanden.
- **Online** (`src/online.js` + `src/engine/08-online.js`, zie `docs/ONLINE.md`): beide spelers draaien de engine en moeten precies hetzelfde doen. Toeval in de spelregels dus nooit los met `Math.random()` maar via de schijf (`spin()`, gedeelde toevalsbron); voor animaties en geluid mag `Math.random()` wel.

## Werkwijze
1. Pak een issue (of maak er een). Zet in een comment dat je ermee bezig bent.
2. Eén branch per taak: `<agent>/<issue>-korte-naam`, bijv. `claude/12-vite-setup`.
3. PR naar `main` met beschrijving: wat, waarom, hoe getest, `Closes #nr`.
4. **Breek de live versie nooit**: `main` = wat spelers zien. Wijzig de bron in `src/`, niet de gebouwde bestanden. Test lokaal vóór merge:
   `npm install` en dan `npm run dev` → open http://localhost:5173/Duel/ en speel een potje inclusief een gevecht (let op de console). Of de echte build: `npm run build && npm run preview`.
   **Rooktest (verplicht vóór merge):** `npm run build`, dan `cd test && npm install && node smoke.mjs` — speelt headless een heel solo-potje via echte klikken (serveert `dist/` onder `/Duel/`) en faalt bij JS-fouten of als er geen gevecht was. Een andere map testen: `node smoke.mjs <map>`. Live testen: `BASE_URL=https://koen2222.github.io/Duel/ node smoke.mjs`. Chrome-pad via `CHROME=...`.
   **Online-test:** `cd test && node online.mjs` — twee browsers spelen via een kamercode (eigen PeerServer, geen internet nodig) en het bord wordt na elke zet aan beide kanten vergeleken. Raak je de engine aan, draai deze dan ook: online werkt alleen als beide kanten precies hetzelfde doen.
   GitHub draait de build, de rooktest en de online-test bij elke PR ("Bouwen en publiceren"). Alleen mergen als die groen is. Vite geeft de bestanden zelf een hash in hun naam, dus cache-busting gaat vanzelf.
5. Werk `docs/LOG.md` bij (datum, wie, wat, open punten) en de relevante docs.
6. Kleine commits, Nederlandse commitberichten.

## Overdragen
- Overdracht gaat via **issue-comments**: stand van zaken, wat nog moet, waar je twijfelt. Tag het andere label/agent in de tekst ("@Claude:" of "@Schijfduel-bot:").
- Ontwerpbeslissingen die Koen moet nemen: als vraag in het issue zetten en in `docs/LOG.md` onder "Open vragen".
- Niets zeker? Markeer met **(?)** in de docs i.p.v. te gokken.
