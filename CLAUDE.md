# AGENTS.md — briefing voor AI-medewerkers (Schijfduel-bot, Claude, …)

**Taal: Nederlands** in docs, issues, commits en spelteksten (Engels alleen als tweede taal in `I18N`).

## Project
Schijfduel ("Draai de schijf. Verover het doel.") is een tactisch figurenspel met draaiende schijven, geïnspireerd op Pokémon Duel: 28-punts stadion, 151 figuren, rood/blauw, solo tegen AI en hotseat. Opvolger van Rondel. Doel: digitaal spel afmaken, onlinemodus, en een printbaar bordspel. Eigenaar: Koen (GitHub `koen2222`). Palet: navy / cream / goud / rood-blauw (`docs/palet.md`).
Live: https://koen2222.github.io/Duel/ (GitHub Pages vanaf `main`, root).

## Waar staat wat
- `index.html`, `assets/`, `art/`, `favicon.svg`, `og.jpg` — **live build**, niet zomaar aanpassen.
- `src/engine.js`, `src/screens.html`, `src/dex.json` — teruggewonnen bron (zie `src/README.md`).
- `docs/ARCHITECTUUR.md` — hoe de code werkt. `docs/REGELS.md` — regels uit de code. `docs/ROADMAP.md` — fases. `docs/ONLINE.md` — onlineontwerp. `docs/LOG.md` — samenwerkingslog.
- `print/` — bordspel-printbestanden.

## Werkwijze
1. Pak een issue (of maak er een). Zet in een comment dat je ermee bezig bent.
2. Eén branch per taak: `<agent>/<issue>-korte-naam`, bijv. `claude/12-vite-setup`.
3. PR naar `main` met beschrijving: wat, waarom, hoe getest, `Closes #nr`.
4. **Breek de live versie nooit**: `main` = wat spelers zien. Test lokaal vóór merge:
   `python3 -m http.server 8000` in de repo-root → open http://localhost:8000/ en speel een potje inclusief een gevecht (let op de console). Let op: de build verwacht pad `/Duel/`; lokaal kan een paar asset-paden afwijken — test dan via `mkdir -p /tmp/s && ln -s $PWD /tmp/s/Duel && cd /tmp/s && python3 -m http.server` en open `/Duel/`.
   **Rooktest (verplicht vóór merge):** `cd test && npm install && node smoke.mjs` — speelt headless een heel solo-potje via echte klikken (serveert de repo zelf onder `/Duel/`) en faalt bij JS-fouten of als er geen gevecht was. Live testen: `BASE_URL=https://koen2222.github.io/Duel/ node smoke.mjs`. Chrome-pad via `CHROME=...`.
   **Na elke wijziging in `assets/`:** `python3 tools/rehash.py` (nieuwe versiehash in de bestandsnamen, zodat niemand Ctrl+Shift+R nodig heeft).
5. Werk `docs/LOG.md` bij (datum, wie, wat, open punten) en de relevante docs.
6. Kleine commits, Nederlandse commitberichten.

## Overdragen
- Overdracht gaat via **issue-comments**: stand van zaken, wat nog moet, waar je twijfelt. Tag het andere label/agent in de tekst ("@Claude:" of "@Schijfduel-bot:").
- Ontwerpbeslissingen die Koen moet nemen: als vraag in het issue zetten en in `docs/LOG.md` onder "Open vragen".
- Niets zeker? Markeer met **(?)** in de docs i.p.v. te gokken.
