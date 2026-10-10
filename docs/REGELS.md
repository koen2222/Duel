# Spelregels Schijfduel

> **Uit de code gehaald** (`src/engine.js`, stand 2026-10-10). Dit beschrijft wat het digitale spel nu doet, niet per se de definitieve regels. Onzeker: **(?)**.

## Doel
Zet een eigen figuur op het **doel van de tegenstander** (p1 valt `G2` boven aan, p2 valt `G1` onder aan). Dat kan door erheen te lopen of door een gevecht op dat punt te winnen.
Andere manieren om te winnen:
- **Tijd**: de schaakklok (standaard 5 min per speler, instelbaar 3/5/10/uit) van de tegenstander loopt af.
- **Lockout**: de tegenstander kan aan het begin van zijn beurt (of na zijn actie) niets meer doen.

## Opstelling
- Team: precies **6 figuren** + kaarten tot **8 punten** (`PLATE_BUDGET`). Evoluties kun je onder een figuur "hangen".
- Alle figuren beginnen op de **zijlijn** (bank). Het bord heeft 28 punten met per speler 2 startpunten en 1 doel.
- p1 begint.

## Beurt
Per beurt **één actie** (`actionsLeft = 1`), en daarvóór eventueel **één kaart**:
- **Inzetten**: een figuur van de zijlijn op een vrij eigen startpunt zetten; hij mag direct doorlopen met MP − 1 stappen over vrije punten.
- **Bewegen**: maximaal MP stappen langs lijnen, niet over/op figuren (behalve abilities als Sluipen/Vleugelslag).
- **Aanvallen**: een aangrenzende (binnen bereik) vijand aanvallen → gevecht.
Standaard eindigt de beurt automatisch na je actie (`autoEndTurn`).

## Gevecht
Beide figuren draaien hun schijf (96 vakken). Vergelijking (`resolve`):
| Aanvaller ↓ / Verdediger → | Wit/Goud | Paars | Blauw | Rood (Miss) |
|---|---|---|---|---|
| **Wit/Goud** | hoogste waarde wint, gelijk = niets | goud wint; paars wint van wit (effect) | wit: ontweken; goud wint | wit/goud wint |
| **Paars** | paars wint (effect) van wit; goud wint van paars | meeste sterren wint, gelijk = niets | ontweken | paars wint (effect) |
| **Blauw** | ontwijkt wit; verliest van goud | ontwijkt | niets | niets |
| **Rood** | verliest | verliest (effect) | niets | niets |
- Winnende wit/goud: tegenstander **KO** (naar P.C.), tenzij het vak "terug naar zijlijn" (+ evt. Wacht) is.
- Winnende paars: effect zoals KO, terug naar zijlijn, of een status.
- Wint een figuur, dan mag hij **evolueren** (als die evolutie eronder hangt; +10 wit/goud, +1 ster) of anders **level up** (max 4: Miss-vakken worden beste aanval).
- Wint de aanvaller, dan schuift hij op naar het punt van de verdediger (alleen bij KO van de verdediger) — staat dat op het vijandelijke doel, dan wint hij.

## KO, P.C. en zijlijn
- KO → P.C.; aan het begin van je volgende beurt komen P.C.-figuren terug op de zijlijn.
- **Omsingeld**: als **alle** buurpunten van een figuur door de **vijand** bezet zijn → KO.

## Statussen
- **Gif / zwaar gif**: −20 / −40 schade; KO aan het begin van je eigen beurt als hij op het veld staat.
- **Brand**: −10; aanvallen ≤ 10 worden Miss.
- **Verlamming**: kleinste aanval wordt Miss.
- **Verwarring**: wijzer schuift naar het volgende vak.
- **Slaap**: kan niet bewegen; geneest als een bondgenoot ernaast staat aan het eind van de beurt.
- **Bevroren**: kan niet aanvallen; gaat eraf na een gevecht.
- **Wacht**: één beurt niet inzetbaar/bewegen.
Slechts één "speciale" status tegelijk.

## Kaarten (21)
Genezing, Herrijzenis, Wachtbreuk, Tweede Kans, Verblinding, Scherpschutter, Krachtstoot, Schildwacht, Voorrang, Vervloeking, Laatste Adem, Terugroepen, Stellingwissel, Sprong, Sluiermantel, Verworp, Doelwacht, Wisselplaats, Hergebruik, Zomerstroom, Tegenaanval. Kosten en teksten: `PLATES` in `src/engine.js`.

## Abilities
18 abilities in de dex (o.a. blessing, raise, stalk, fly, insomnia, icewall, grounding, guts, shed, mountain, undying). Beschrijvingen: `abilityDesc()`.
