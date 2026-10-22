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
- **Aanvallen**: lopen (binnen MP) naar een punt naast een vijand en dan vechten — samen één actie. Staat de vijand al naast je, dan vecht je meteen.
- **MP**: nooit meer dan 3, ook met bonussen (`effMP`). De **allereerste zet van het potje** heeft MP − 1 (minimaal 1).
- **Kaart**: één per beurt. Kaarten met "Beurt voorbij" kosten je actie.
Standaard eindigt de beurt automatisch na je actie (`autoEndTurn`).

## Gevecht
Beide figuren draaien hun schijf (96 vakken). Vergelijking (`resolve`):
| Aanvaller ↓ / Verdediger → | Wit/Goud | Paars | Blauw | Rood (Miss) |
|---|---|---|---|---|
| **Wit/Goud** | hoogste waarde wint, gelijk = niets | goud wint; paars wint van wit (effect) | wit: ontweken; goud wint | wit/goud wint |
| **Paars** | paars wint (effect) van wit; goud wint van paars | meeste sterren wint, gelijk = niets | ontweken | paars wint (effect) |
| **Blauw** | ontwijkt wit; verliest van goud | ontwijkt | niets | niets |
| **Rood** | verliest | verliest (effect) | niets | niets |
- Winnende wit/goud: tegenstander **KO** (naar P.C.), tenzij het vak "terug naar zijlijn" (+ evt. Wacht) is. Een aanval van 0 schade zonder effect tegen Miss doet niets.
- Winnende paars: effect zoals KO, terug naar zijlijn, of een status.
- Wint een figuur, dan mag hij **evolueren** (als die evolutie eronder hangt; +10 wit/goud, +1 ster) of anders **level up** (max level 4; per level worden 8 Miss-vakken de sterkste aanval). "Winnen" betekent hier: de ander is KO (of trekt terug door Onverwoestbaar). Iemand naar de zijlijn sturen telt **niet** als winst.
- Wint de aanvaller, dan schuift hij op naar het punt van de verdediger (alleen bij KO van de verdediger) — staat dat op het vijandelijke doel, dan wint hij.

## KO, P.C. en zijlijn
- KO → P.C. (alle statussen weg); aan het begin van je volgende beurt komen **alle** P.C.-figuren terug op de zijlijn. Het P.C. duurt dus precies één beurt.
- Ability Bergvast slaat het P.C. over: direct terug naar de zijlijn, met Wacht.
- **Omsingeld**: als **alle** buurpunten van een figuur door de **vijand** bezet zijn → KO.

## Statussen
- **Gif / zwaar gif**: −20 / −40 schade; KO aan het begin van je eigen beurt als hij op het veld staat. Die KO gebeurt vóór je iets kunt doen, dus een vergiftigde figuur op het veld is in de praktijk altijd verloren (zie vraag 1).
- **Brand**: −10; aanvallen ≤ 10 worden Miss.
- **Verlamming**: kleinste aanval (minste vakken) wordt Miss. MP blijft gelijk.
- **Verwarring**: wijzer schuift naar het volgende vak.
- **Slaap**: kan niet bewegen of aanvallen; geneest als een bondgenoot ernaast staat aan het eind van een beurt. Wordt hij aangevallen, dan vecht hij met zijn gewone schijf.
- **Bevroren**: kan wel bewegen, niet aanvallen; wordt hij aangevallen, dan draait hij Miss. Gaat eraf na een gevecht.
- **Wacht**: één beurt niet inzetbaar/bewegen.
Slechts één "speciale" status tegelijk.

## Kaarten (21)
Genezing, Herrijzenis, Wachtbreuk, Tweede Kans, Verblinding, Scherpschutter, Krachtstoot, Schildwacht, Voorrang, Vervloeking, Laatste Adem, Terugroepen, Stellingwissel, Sprong, Sluiermantel, Verworp, Doelwacht, Wisselplaats, Hergebruik, Zomerstroom, Tegenaanval. Kosten en teksten: `PLATES` in `src/engine.js`.

## Abilities
19 abilities in de engine (`ABILITIES`), waarvan 18 in de dex gebruikt worden: `raise` (Zielenoproep) heeft geen enkele figuur. 105 figuren hebben geen ability. Meest gebruikt: fly (8), stalk (5), enchant (5), blessing (4), undying (4). Beschrijvingen: `abilityDesc()`.

## Vragen aan Koen (#7)
Wat de code nu doet, met de vraag of dat de bedoeling is:
1. **Gif = KO.** Een vergiftigde figuur op het veld gaat aan het begin van de beurt van zijn eigenaar KO, nog voordat die iets kan doen (dus ook Genezing of Zomerstroom komen te laat). Elk gifvak is daardoor in feite een KO-vak met vertraging. Zo bedoeld, of alleen −20 schade?
2. **P.C. duurt één beurt**: alle KO-figuren staan de volgende beurt alweer op de zijlijn. Klopt dat, of moeten ze langer wachten?
3. **Slaap**: een slapende figuur die wordt aangevallen vecht met zijn gewone schijf. Zo bedoeld, of moet hij dan (bijna) kansloos zijn?
4. **Lockout ook na je eigen actie**: kun je na je zet zelf niets meer, dan verlies je meteen, ook als de tegenstander je daarna weer ruimte zou geven. Klopt dat?
5. **Naar de zijlijn sturen** telt niet als een gewonnen gevecht: geen level-up en geen evolutie. Klopt dat?
6. **MP max 3** en **eerste zet van het potje MP − 1**: klopt dat?
