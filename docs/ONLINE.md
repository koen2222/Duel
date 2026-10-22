# Onlinemodus

## Wat er nu is: kamercode zonder server (#10, 2026-10-10)
Koen koos voor **optie A** (WebRTC via PeerJS, geen eigen server) met **ieders eigen collectie**.

**Spelen:** tik op **Online** → **Kamer maken** → geef de code van 4 tekens (of de link `…/Duel/#kamer=K7QX`) aan je tegenstander → die tikt **Online**, vult de code in en kiest **Meedoen**. Daarna kiezen jullie allebei een team; zodra beide klaar zijn begint het potje. Wie begint wordt geloot. Geen schaakklok (nog), geen credits.

**Hoe het werkt (lockstep):**
- Beide spelers draaien de volledige engine. Iedereen ziet zichzelf als p1 (onderaan, blauw); de tegenstander is p2. Het bord is 180° symmetrisch, dus een zet wordt bij versturen gespiegeld: punt (kolom, rij) ↔ (6 − kolom, 4 − rij), figuur u1–u6 ↔ u7–u12.
- Over de lijn gaan alleen de **zetten**: `inzet`, `zet` (lopen of aanvallen), `kaart` (index + doelwit), `einde` (beurt klaar), `evo` (wel/niet evolueren), `opgeven`. De andere kant voert ze uit met dezelfde functies als een tik (`onNodeTap`, `usePlate`, `endTurn`).
- Het enige toeval tijdens een potje is waar de schijf stopt. De host kiest bij de start één **startgetal**; beide engines trekken daaruit (Mulberry32) dezelfde schijfuitkomsten in dezelfde volgorde.
- Vooraf: `hallo` (met een hash van engine + dex: verschillende versies kunnen niet tegen elkaar), `team` (units, kaarten, evoluties en levels uit je collectie), `start` (startgetal, wie begint). `hallo` wordt elke seconde herhaald tot die van de ander binnen is: een bericht dat precies bij het openen van het kanaal wordt verstuurd, kwam in de test 1 op de 10 keer niet aan.
- Elke 4 s een `ping`; 45 s niets gehoord, of de pagina gaat dicht → de ander wint met "verbinding verbroken".
- Code: `src/online.js` (verbinden, kamerscherm) en de sectie **ONLINE** in `src/engine.js` (spiegelen, afspelen, toevalsbron). Test: `test/online.mjs` speelt een heel potje tussen twee browsers met een eigen PeerServer en controleert na elke zet dat beide borden (gespiegeld) exact gelijk zijn.

**Beperkingen van deze versie:**
- Verbinden gaat via de gratis PeerJS-server (0.peerjs.com) en de openbare STUN/TURN-servers van PeerJS. Op strenge netwerken (school, werk) kan verbinden mislukken.
- Geen bescherming tegen valsspelen: elke speler draait de regels zelf. Prima voor potjes met vrienden.
- Geen herverbinden: verbinding weg = potje voorbij.
- Geen klok (beide browsers zouden hun eigen tijd bijhouden).

De rest van dit document is het plan voor later (optie C: een server die de regels controleert).

---

# Ontwerpvoorstel (vervolg)

Status: voorstel (2026-10-10), ter bespreking met Koen en Claude. Randvoorwaarde: de client blijft een statische site op GitHub Pages.

## Opties
| Optie | Hoe | Plus | Min |
|---|---|---|---|
| **A. WebRTC P2P (PeerJS)** | host maakt kamer, gast verbindt via kamercode; gratis PeerJS-signaling | geen eigen server, gratis, lage latency | NAT/firewalls (soms TURN nodig), host kan valsspelen, geen herverbinding als host wegvalt, matchmaking lastig |
| **B. Firebase / Supabase Realtime** | kamer = document/kanaal, beide clients schrijven acties | snel gebouwd, auth en database erbij | toeval/validatie zit in clients → valsspelen tenzij Cloud Functions/Edge Functions; vendor lock-in; quota |
| **C. Kleine server: Cloudflare Workers + Durable Objects (of PartyKit)** | één Durable Object per kamer, WebSocket; server valideert acties en draait de schijven | autoritatief (anti-cheat), herverbinden en matchmaking natuurlijk, gratis tier ruim genoeg, regels-code in JS te delen | iets meer werk, Cloudflare-account nodig |

## Advies
**C (Cloudflare Durable Objects; PartyKit is hetzelfde met minder boilerplate).** Een beurtgebaseerd spel met toeval heeft een scheidsrechter nodig; de hoeveelheid verkeer is klein, dus dit blijft gratis. Optioneel als eerste stap **A** voor vrienden-potjes, met dezelfde berichten, zodat de stap naar C alleen een transportwissel is.

## Voorwerk in de engine
1. Pure regelmodule: `createMatch(decks, seed)`, `legalActions(state, player)`, `applyAction(state, action, rng) → {state, events}`. Geen DOM, geen `Set` in de staat (arrays), geen timers.
2. UI speelt `events` af (bewegen, schijf naar vak X draaien, KO-animatie) i.p.v. zelf te rekenen.
3. `spin()` krijgt het vak-index als **input** en animeert alleen naar dat vak.
4. Hotseat en solo-AI gebruiken dezelfde `applyAction` → één codepad.

## Toeval en anti-cheat
- Server (of bij P2P de host) is enige bron van toeval: per gevecht `idx = rng(96)` voor beide schijven, incl. herkansingen en Vuurwervel.
- Server stuurt alleen de uitkomst; clients kunnen niet "opnieuw proberen".
- Optioneel bij P2P: commit-reveal (beide spelers sturen `hash(geheim)`, daarna het geheim; seed = hash(beide)) zodat ook de host niet kan sjoemelen.
- Server valideert elke actie met `legalActions`; ongeldige acties → `error`.
- Kaarthanden zijn verborgen informatie: server stuurt elke speler alleen zijn eigen hand, plus het aantal kaarten van de ander.

## Berichtprotocol (JSON over WebSocket)
Client → server:
- `{"t":"hello","name","clientId","version"}`
- `{"t":"create"}` / `{"t":"join","room":"K7QX"}`
- `{"t":"deck","units":[6 ids],"plates":[...],"evos":{}}` (server checkt budget 8 en eigendom: in v1 vertrouwen we de collectie, later server-side profiel)
- `{"t":"action","seq":12,"a":{"type":"deploy|move|attack|plate|evolve|endTurn",...}}`
- `{"t":"resign"}`, `{"t":"ping"}`
Server → client:
- `{"t":"room","room","you":"p1|p2","players":[...]}`
- `{"t":"start","seed?","state"}` (gefilterd per speler)
- `{"t":"events","seq":13,"events":[{"e":"move",...},{"e":"spin","att":42,"def":7},{"e":"ko",...}],"state"}`
- `{"t":"clock","p1":ms,"p2":ms}` — klok draait op de server
- `{"t":"end","winner","kind":"goal|time|lockout|resign|disconnect"}`
- `{"t":"error","code","msg"}`
`seq` loopt op; een client die een gat ziet vraagt `{"t":"sync"}` en krijgt de volledige staat.

## Lobby en kamercodes
- 4 tekens uit `ABCDEFGHJKMNPQRSTUVWXYZ23456789` (geen 0/O/1/I), link `koen2222.github.io/Duel/#room=K7QX`.
- Kamer verloopt na 10 min zonder spelers.

## Herverbinden
- `clientId` + `token` in `localStorage` (nieuwe sleutel `schijfduel_online`). Bij terugkeer `join` met token → server stuurt volledige staat.
- Klok loopt door; na 60 s afwezig → verlies (`disconnect`) (instelbaar).

## Later: matchmaking
- Wachtrij in één Durable Object; koppelen op volgorde, later op rating (Elo) en moeilijkheid.
- Accounts optioneel (anoniem + naam), collectie server-side om oneerlijke teams te voorkomen.

## Open vragen voor Koen
- Online met eigen collectie of met vaste/gelijke teams?
- Credits verdienen online?
- Cloudflare-account aanmaken (gratis) of eerst P2P?
