# src/engine/ — de spel-engine in delen

De engine is één klassiek script met globale functies. Hij staat hier in delen per
onderdeel, zodat je niet steeds een bestand van 5000+ regels hoeft te openen.
`src/main.js` plakt de delen **op volgorde van bestandsnaam** aan elkaar en voert
het geheel uit als één `<script>`. Voor Node-scripts doet `tools/engine.mjs`
(`leesEngine()`) precies hetzelfde.

Bij het opsplitsen (#3) is niets aan de code veranderd: de delen samen zijn teken
voor teken gelijk aan het oude `src/engine.js`.

| Deel | Inhoud |
|---|---|
| `00-begin.js` | opent het script: draait de engine al, dan alleen `__rondelBoot()`; anders begint hier het blok dat `22-einde.js` sluit |
| `01-bord.js` | het bord: 28 punten (`NODES`), lijnen (`ROUTES`), buren (`ADJ`) |
| `02-figuren.js` | schijfvakken (`W`, `G`, `B`, `R`, `P`), figuren uit de dex (`applyDex`, `UNIT_DEFS`), abilities |
| `03-kaarten.js` | de kaarten (`PLATES`), het budget van 8 punten, kaarticonen |
| `04-evolutie-winkel.js` | evoluties (`EVOLUTIE`, ketens, bonus), prijzen, boosterkist (`rollBooster`) |
| `05-profiel.js` | instellingen en profiel: laden en opslaan (`schijfduel_profile`), `S(key)` |
| `06-taal.js` | taal: `t()`, `tr()`, `tf()`, de `I18N`-tabel, namen van figuren en kaarten; animatievoorkeuren |
| `07-audio.js` | alle geluid, in code gemaakt: `Audio_`, `SFX`, `sfx()` |
| `08-online.js` | figuurplaatjes in HTML (`unitVisual`), de globale `state`, en de sectie ONLINE: spiegelen, zetten afspelen, gedeelde toevalsbron (zie `docs/ONLINE.md`) |
| `09-staat.js` | `initialState()`, schaakklok, statussen en KO, variabelen voor het team kiezen |
| `10-schermen.js` | schermen en het verloop van een potje: menu, team kiezen, arena, AI-teams, `startGame()`, intro, `endMatch()` |
| `11-collectie-winkel.js` | collectie, figuurdetail en upgraden, winkel, boosterkist, instellingenscherm |
| `12-uitleg.js` | het uitlegscherm (`HELP_NL`, `HELP_EN`) |
| `13-tekenen.js` | het bord tekenen (SVG): figuren (`unitGroup`), statusbadges, `renderBoard()`, zijlijn, kaarten van de tegenstander |
| `14-effecten.js` | aanvalsanimaties en de klap tussen twee figuren |
| `15-tafel.js` | kaarten op tafel, zijlijn en P.C. tekenen, beurtbalk, kaart kiezen (`onPlateTap`) |
| `16-kaartanimatie.js` | een kaart spelen (`usePlate`), inslagen en kraters op het bord |
| `17-inzet-invoer.js` | inzetpoort en effecten, `renderAll()`, tikken op het bord en op figuren, lopen (`moveUnit`) |
| `18-zetten-beurt.js` | figuurinfo, MP (`effMP`), inzetten, `legalMoves()`, `standplaatsVoor()`, omsingelen, `endTurn()` |
| `19-gevecht.js` | de schijven tekenen, `spin()`, statuseffecten, `runCombat()`, `resolve()`, level up |
| `20-evolutie-knoppen.js` | evolueren tijdens een potje, `toast()`, knoppen koppelen, pauzemenu |
| `21-ai.js` | de computertegenstander: niveaus (`AI_LEVELS`), inschatting van gevechten, `aiTurn()` |
| `22-einde.js` | start het spel (`loadProfile()`, `newGame()`), de testhaak `window.__rondelQA`, de service worker; sluit het blok uit `00-begin.js` |

## Werken in de delen
- De delen zijn **geen losse modules**: alles wat in het ene deel staat, is in de andere te gebruiken. Een deel is op zich dus ook geen geldige JS (`00-begin.js` opent een blok dat `22-einde.js` sluit).
- Zet nieuwe code in het deel waar hij bij hoort. Een **functie** mag in elk deel staan, want alle functies bestaan al voordat er code draait. Een **`const`/`let`** of code die meteen draait (bijv. `applyDex(...)`, `addEventListener(...)`) moet ná alles staan wat hij gebruikt.
- Een nieuw deel? Kies een naam die op de goede plek sorteert, bijv. `13a-....js` komt na `13-tekenen.js`. Geen andere bestanden met `.js` in deze map zetten: die worden meegeplakt.
- De volgorde en de tekst van de delen bepalen samen de versie-hash voor online spelen: beide spelers moeten exact dezelfde engine draaien.
- Echte modules met pure regels (los van het scherm) komen met #9.
