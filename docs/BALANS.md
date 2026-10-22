# Balans van figuren en kaarten (#8)

> Stand 2026-10-10, door Claude. **Alleen analyse**: de dex en de kaarten zijn niet gewijzigd. Koen beslist wat er verandert (zie "Vragen aan Koen").

## Hoe gemeten
`node tools/balans.mjs` rekent voor elke figuur uit hoe een gevecht afloopt tegen elk van de 151 figuren. Het script leest de echte regels (`resolve()`, `buildSlotsFromDex()`, `applyPlateFx()` …) uit `src/engine.js`, dus het rekent altijd met de huidige spelregels. `spin()` kiest elk van de 96 vakken even vaak; het script rekent met precies die kansen (exact, geen simulatie).

- **Netto** = kans dat de tegenstander van het veld gaat (verslagen of naar de zijlijn) min de kans dat je zelf van het veld gaat, gemiddeld over alle tegenstanders. 0 = gemiddeld, +20 = duidelijk sterk.
- **Niet meegenomen:** abilities (bijv. `sturdy`, `undying`), statussen, levels en evolutiebonus, posities op het bord en MP-voordeel. Dit meet dus alleen de schijf. Echte AI-tegen-AI-potjes als meetlat kunnen pas goed als de regels los van het scherm draaien (#9).
- `node tools/balans.mjs --csv` geeft alle 151 figuren als tabel.

## Belangrijkste bevindingen
1. **50 figuren (een derde) hebben een sjabloonschijf.** Er zijn maar 4 verschillende schijven voor deze 50 figuren: één voor 14 Commons, twee voor 28 Uncommons en één voor 8 Rares (tabel hieronder). De andere 101 figuren hebben een eigen ontworpen schijf. Dit is het grootste balansprobleem, en het verklaart ook de meeste "evolutie is zwakker dan de vorm ervoor" (bijv. Zandklauw, Horendo, Kopzee, Spierarm, Schildhelm hebben allemaal het U-sjabloon).
2. **Zeldzaamheid en MP werken grofweg goed.** Gemiddeld C −11,9, U −5,7, R +15,3. Binnen elke zeldzaamheid zijn MP 1-figuren sterker in gevecht dan MP 3-figuren, zoals bedoeld (snel = zwakker).
3. **Uitschieters:**
   - **#115 Buidelstoot (R) +67,5**: veruit de sterkste (nummer 2 zit op +48,7), wint 74% van de gevechten, en heeft daarbovenop ability `sturdy`.
   - **#74 Kiezelkop (C) +20,6**: de sterkste Common, sterker dan zijn eigen evolutie #75 Broksteen (−3,2) en dan de helft van de Rares.
   - **#92 Neveling (R) −24,9**: de zwakste Rare. Zijn evolutie #93 Schimwolk is een U, en #94 Nachtvorst weer een R. De zeldzaamheid in die lijn klopt niet.
   - **#15 Wespenix (C, eindvorm)**: 54% Miss, netto −19,7. Ook #59 Leeuwvlam (R) heeft 54% Miss.
   - Waarschijnlijk bedoeld, en dus geen probleem: #129 Kabbelvis (−37, evolueert tot de sterke #130 Zeeslang) en de cocons #11 Cocoonix en #14 Stekelpop (MP 0, Stekelpop kan nooit iemand verslaan).
4. **Kaarten:**
   - **Tweede Kans en Verblinding doen gemiddeld niets.** In `runCombat()` wordt altijd opnieuw gedraaid, ook als de eerste uitkomst al goed was. Opnieuw draaien geeft dezelfde kansen, dus de kaart levert niets op. Voorstel: alleen opnieuw draaien als je anders verliest (Tweede Kans) of als de tegenstander anders wint (Verblinding).
   - **Vervloeking (+2 ★) levert bijna niets op** (+0,3). Paars wint al van wit, en paars tegen paars komt weinig voor.
   - **Schildwacht (kosten 1) is bijna even sterk als Laatste Adem (kosten 2)**: +19,5 tegen +21,9. Een klap van 10 t/m 100 is bijna elke klap.
   - Krachtstoot, Voorrang en Scherpschutter zitten rond +11 tot +15 per kostenpunt. Die zijn onderling in balans.
   - Kaarten voor beweging en herstel zijn zo niet te meten; daarvoor zijn AI-potjes nodig (#9).

## Vragen aan Koen
1. Mogen de 50 sjabloonfiguren een eigen schijf krijgen, per evolutielijn ontworpen naar hun Duel-tegenhanger? Wie doet dat: Grok, Claude of jij? (Voorstel: Claude maakt per lijn een voorstel in een PR, jij keurt goed.)
2. Buidelstoot en Kiezelkop afzwakken, Neveling sterker maken (of U maken)?
3. Tweede Kans en Verblinding aanpassen zoals hierboven?
4. Kaartkosten: Schildwacht naar 2 (of alleen klappen van 10 t/m 50), en Vervloeking iets extra's geven?

## Cijfers

Gegenereerd met `node tools/balans.mjs` uit `src/dex.json` en `src/engine.js` (151 figuren).

### Gemiddelde netto per zeldzaamheid en MP

Netto = kans dat de tegenstander van het veld gaat min kans dat je zelf van het veld gaat, gemiddeld over alle 151 tegenstanders. Tussen haakjes: aantal figuren.

| Zeldz. | MP 0 | MP 1 | MP 2 | MP 3 | Alle |
|---|---|---|---|---|---|
| C | – | -6.6 (4) | -12.3 (28) | -13.5 (8) | -11.9 (40) |
| U | -32.2 (2) | +13.1 (5) | -5.8 (40) | -9.0 (11) | -5.7 (58) |
| R | – | +24.1 (7) | +17.2 (37) | +0.4 (9) | +15.3 (53) |

### Dezelfde schijf bij meerdere figuren (50 figuren, 4 schijven)

| Figuren | Netto | Schijf |
|---|---|---|
| #28 Zandklauw (U), #30 Stekeldo (U), #33 Horendo (U), #36 Parelprinses (U), #44 Stinkbloem (U), #47 Parasolum (U), #49 Motnacht (U), #55 Kopzee (U), #67 Spierarm (U), #70 Rankbeet (U), #87 IJsmaan (U), #89 Slijmreus (U), #91 Schelpkruis (U), #99 Krabhamer (U), #105 Botkrijger (U), #108 Likton (U), #113 Eierdrager (U), #117 Zeedraak (U), #124 IJskus (U), #132 Slijmform (U), #137 Polyvorm (U), #141 Schildhelm (U) | -11.8 | W50×18, Miss×30, W20×12, P1★ sleep×18, Blauw×18 |
| #29 Paarsnaald (C), #35 Parelfee (C), #37 Vosvlam (C), #43 Wortelknop (C), #46 Scheurzwam (C), #48 Mottenoog (C), #83 Snepsnavel (C), #86 IJszegel (C), #88 Slijmhoop (C), #90 Schelpbijt (C), #98 Krabschaar (C), #104 Botbeest (C), #116 Zeenaald (C), #120 Stervorm (C) | -22.3 | W30×24, Miss×36, W10×12, P1★ paralysis×12, Blauw×12 |
| #31 Kroonstoot (R), #34 Titaanhoorn (R), #38 Vosnova (R), #45 Kroonbloem (R), #71 Vliegenval (R), #106 Trapvoet (R), #107 Vuistslag (R), #121 Sterkern (R) | +13.8 | G50×18, W70×18, Miss×18, W40×12, P2★ paralysis×18, Blauw×12 |
| #17 Stormveer (U), #22 Snavelwind (U), #51 Drietunnel (U), #53 Snoetheer (U), #57 Woedevuist (U), #85 Drieloop (U) | -9.4 | W50×24, Miss×30, W20×12, P1★ paralysis×12, Blauw×18 |

### Sterkste 12

| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |
|---|---|---|---|---|---|---|---|---|
| #115 Buidelstoot | R | 2 | 1 | +67.5 | 73.6% | 6.1% | 8.3% | 150 |
| #9 Hydraguard | R | 2 | 3 | +48.7 | 59.7% | 10.9% | 16.7% | 100 |
| #78 Vlamrenner | R | 2 | 2 | +47.6 | 57.4% | 9.8% | 12.5% | 130 |
| #73 Kwalnet | R | 1 | 2 | +43.2 | 55.9% | 12.7% | 16.7% | 80 |
| #65 Mentora | R | 2 | 3 | +38.1 | 41.0% | 2.9% | 0.0% | 110 |
| #68 Viervuist | R | 2 | 3 | +34.7 | 46.7% | 11.9% | 8.3% | 80 |
| #103 Palmkop | U | 1 | 2 | +31.0 | 39.6% | 8.7% | 4.2% | 70 |
| #112 Neusram | U | 1 | 2 | +30.7 | 47.8% | 17.1% | 20.8% | 60 |
| #145 Donderwiek | R | 2 | 1 (legende) | +29.8 | 40.0% | 10.2% | 12.5% | 100 |
| #95 Rotsdraak | R | 2 | 1 | +29.6 | 36.4% | 6.8% | 4.2% | 80 |
| #149 Drakevorst | R | 1 | 3 | +29.3 | 41.9% | 12.5% | 12.5% | 90 |
| #151 Wonderwicht | R | 3 | 1 (legende) | +29.2 | 48.0% | 18.9% | 4.2% | 100 |

### Zwakste 12

| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |
|---|---|---|---|---|---|---|---|---|
| #129 Kabbelvis | C | 2 | 1 | -37.0 | 10.0% | 47.0% | 4.2% | 10 |
| #14 Stekelpop | U | 0 | 2 | -35.8 | 0.0% | 35.8% | 4.2% | 0 |
| #11 Cocoonix | U | 0 | 2 | -28.7 | 19.2% | 47.9% | 4.2% | 10 |
| #92 Neveling | R | 3 | 1 | -24.9 | 18.7% | 43.6% | 20.8% | 20 |
| #16 Donswiek | C | 3 | 1 | -22.5 | 8.9% | 31.4% | 37.5% | 30 |
| #120 Stervorm | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #116 Zeenaald | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #104 Botbeest | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #98 Krabschaar | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #90 Schelpbijt | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #88 Slijmhoop | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |
| #86 IJszegel | C | 2 | 1 | -22.3 | 10.9% | 33.2% | 37.5% | 30 |

### Common sterker dan de mediane Rare (+13.8)

| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |
|---|---|---|---|---|---|---|---|---|
| #74 Kiezelkop | C | 2 | 1 | +20.6 | 44.5% | 23.9% | 8.3% | 40 |

### Rare zwakker dan de mediane Common (-15.7)

| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |
|---|---|---|---|---|---|---|---|---|
| #92 Neveling | R | 3 | 1 | -24.9 | 18.7% | 43.6% | 20.8% | 20 |

### Evolutie zwakker dan de vorm ervoor

Zonder de evolutiebonus (+10 op wit/goud, +1 ★ op paars) die je in een potje krijgt.

| Van | Netto | Naar | Netto |
|---|---|---|---|
| #10 Rupsje (U) | -15.9 | #11 Cocoonix (U) | -28.7 |
| #13 Naaldje (C) | -12.1 | #14 Stekelpop (U) | -35.8 |
| #27 Zandmuis (C) | -4.6 | #28 Zandklauw (U) | -11.8 |
| #32 Horensprong (C) | -2.3 | #33 Horendo (U) | -11.8 |
| #39 Rozeblazer (R) | +4.8 | #40 Zangballon (R) | -0.4 |
| #50 Graveltunnel (U) | -4.0 | #51 Drietunnel (U) | -9.4 |
| #52 Snoetkat (R) | +0.3 | #53 Snoetheer (U) | -9.4 |
| #54 Koptol (U) | +9.6 | #55 Kopzee (U) | -11.8 |
| #56 Woedekop (C) | -0.7 | #57 Woedevuist (U) | -9.4 |
| #58 Vuurhond (R) | -4.1 | #59 Leeuwvlam (R) | -13.6 |
| #66 Vuistling (C) | +2.3 | #67 Spierarm (U) | -11.8 |
| #69 Rankplant (U) | -10.7 | #70 Rankbeet (U) | -11.8 |
| #74 Kiezelkop (C) | +20.6 | #75 Broksteen (C) | -3.2 |
| #79 Traagpoel (R) | +12.7 | #80 Traagwijs (U) | +0.8 |
| #140 Schildkrab (U) | +10.5 | #141 Schildhelm (U) | -11.8 |

### Veel Miss (40% of meer van de schijf)

| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |
|---|---|---|---|---|---|---|---|---|
| #15 Wespenix | C | 3 | 3 | -19.7 | 17.6% | 37.3% | 54.2% | 40 |
| #59 Leeuwvlam | R | 2 | 2 | -13.6 | 15.6% | 29.2% | 54.2% | 80 |
| #58 Vuurhond | R | 3 | 1 | -4.1 | 26.2% | 30.3% | 45.8% | 50 |

### Kaarten die het gevecht beïnvloeden

Gemiddelde verbetering van de netto als je de kaart in een gevecht gebruikt (procentpunten), over alle 151×151 duels.

| Kaart | Kosten | Netto erbij | Per kostenpunt |
|---|---|---|---|
| Krachtstoot (`xattack`) | 1 | +14.7 | +14.7 |
| Voorrang (`xspeed`) | 1 | +15.1 | +15.1 |
| Vervloeking (`xhex`) | 1 | +0.3 | +0.3 |
| Scherpschutter (`trueaim`) | 1 | +10.7 | +10.7 |
| Schildwacht (`xdefend`) | 1 | +19.5 | +19.5 |
| Laatste Adem (`focus`) | 2 | +21.9 | +11.0 |
| Tweede Kans (`respin`) | 1 | +0.0 | +0.0 |
| Verblinding (`dazzle`) | 1 | +0.0 | +0.0 |

