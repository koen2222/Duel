# src/ — teruggewonnen bron (stap 0)

Deze bestanden zijn op 2026-10-10 **automatisch uit de build gehaald** (`assets/routes-v<hash>.js`). De Grok-build bevatte de engine als letterlijke tekst, inclusief originele commentaren, dus dit is (vrijwel) de echte bron:

| Bestand | Was in de build | Inhoud |
|---|---|---|
| `engine.js` | template-string `a` | de complete spel-engine (vanilla JS, ~5260 regels) |
| `screens.html` | template-string `i` | alle schermen en overlays (HTML met `data-i18n`) |
| `dex.json` | `JSON.parse(\`...\`)` `o` | de 151 figuren (wordt `window.RONDEL_DEX`) |

De CSS staat al leesbaar in `assets/styles-v<hash>.css`.

**Let op:** de live site draait nog steeds op de build in `assets/`. Wijzigingen hier hebben pas effect als er een build-stap is (zie issue over de Vite-setup in docs/ROADMAP.md, fase 0). Tot die tijd: fixes zowel hier als in de build doorvoeren, of eerst fase 0 afmaken.

Opnieuw extraheren: zie `docs/ARCHITECTUUR.md`, sectie "Bron terugwinnen".
