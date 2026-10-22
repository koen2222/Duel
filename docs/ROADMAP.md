# Roadmap Schijfduel

Bijgewerkt: 2026-10-10. Issues op GitHub hebben labels `bron`, `bug`, `online`, `regels`, `bordspel`.

## Fase 0 — Bewerkbare bron (label `bron`)
- [x] Engine, schermen en dex uit de build gehaald → `src/` (zie `src/README.md`). Goed nieuws: de build bevatte de engine met originele commentaren.
- [ ] Koen: kijk of de Grok app builder (pokemonduel2.grok.me) een project-export heeft; zo ja, vergelijken met `src/`.
- [x] Vite-project opzetten (#2): `src/main.js` laadt dex, schermen, CSS en engine; `npm run build` → `dist/`; GitHub Action deployt naar Pages. React/TanStack-schil en Grok-scripts zijn dan niet meer nodig.
- [ ] Engine opsplitsen in modules: `board`, `rules` (puur), `combat`, `ai`, `ui`, `audio`, `i18n`, `profile`.

## Fase 1 — Bugs en afwerking (label `bug`)
- [ ] Ontbrekende `sw.js` (service worker 404) oplossen of registratie weghalen.
- [ ] OG/X-meta naar `koen2222.github.io/Duel` laten wijzen; Grok-extensiescript verwijderen.
- [ ] Cache-busting zodat spelers na een update niet vastzitten op een oude versie (Ctrl+Shift+R-probleem).
- [ ] Rooktest (headless) voor een volledig potje incl. gevecht, zodat fouten zoals de ontbrekende `spin()` niet terugkomen.
- [ ] Opruimen: `rondel-dex.js` in root, oude lege mappen.

## Fase 2 — Regels en inhoud (label `regels`)
- [ ] `docs/REGELS.md` laten bevestigen door Koen; afwijkingen van Duel en huisregels vastleggen.
- [ ] Balans van de 151 figuren en 21 kaarten nalopen. Analyse klaar: `docs/BALANS.md` (#8); wachten op keuzes van Koen.
- [ ] Uitleg/tutorial in het spel bijwerken.

## Fase 3 — Onlinemodus (label `online`)
Zie `docs/ONLINE.md`.
- [ ] Regels scheiden van UI: `applyAction(state, action)` puur en serialiseerbaar.
- [ ] Toeval via host/server (geen `Math.random()` bij de client die aanvalt).
- [x] Prototype P2P met kamercode (#10): lockstep met gedeeld startgetal, zie `docs/ONLINE.md`.
- [ ] Herverbinden, en later matchmaking/ranglijst.

## Fase 4 — Bordspel (label `bordspel`)
- [ ] Printbestanden: bord (28 punten), schijven met 96 vakken → tabletop-vriendelijke versie (bijv. 24 vakken of d% tabel), figuurkaarten, kaarten.
- [ ] Spelregelboekje uit `docs/REGELS.md`.
- [ ] Proefdruk en speltest.
