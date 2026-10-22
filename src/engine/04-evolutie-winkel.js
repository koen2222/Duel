// ==========================================
// STORE & COLLECTIE — kaartjes kopen/upgraden met credits
// ==========================================
// ==========================================
// EVOLUTIE (sessie 39) — 1-op-1 overgenomen uit Pokémon Duel
// Regels zoals Duel ze heeft (bron: Duel-gidsen, zie docs):
//  1. Je moet ALLEBEI de figuren bezitten: de basisvorm én z'n evolutie.
//  2. De basisvorm zet je in je team; de evolutie hang je eronder. Een figuur
//     dat klaar is om te evolueren krijgt een blauw stipje.
//  3. Tijdens een potje evolueert hij als hij een gevecht WINT — dus als hij
//     de tegenstander verslaat of van z'n plek verdringt.
//  4. Je MAG weigeren. Soms wil je je huidige schijf houden.
//  5. Wie mid-potje evolueert krijgt een bonus die je niet krijgt als je met
//     de evolutie begint: +10 op elk wit en goud vak, +1 ster op elk paars.
// Onze zes facties vormen elk precies zo'n keten van drie: common -> uncommon
// -> rare. Dat was geen ontwerpkeuze achteraf maar viel exact samen.
// EVO-START (marker voor headless tests — niet verwijderen)
// Waar evolueert deze sleutel naartoe? (of null als het al de eindvorm is)
function evolutieOpties(key) {
  const v = EVOLUTIE[key];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}
function evolutieVan(key) { const o = evolutieOpties(key); return o[0] || null; }
function evoMatch(from, to) { return evolutieOpties(from).includes(to); }
function voorloperVan(key) {
  return Object.keys(EVOLUTIE).find(k => evoMatch(k, key)) || null;
}
// Alleen BASISVORMEN mag je opstellen. Een geëvolueerde vorm verdien je door te
// evolueren, niet door hem te kopen en neer te zetten. Koen: "je moet alleen
// ongevolueerde figurines in kunnen zetten en ze alleen kunnen evolven als je
// de kaart ook hebt gekocht." Dit WIJKT BEWUST AF van Duel, waar je een
// geëvolueerde vorm gewoon in je deck mag zetten (de evolutiebonus is daar het
// enige verschil). Zie het statusdocument.
function isBasisvorm(key) { return !voorloperVan(key); }
// De hele keten waar deze sleutel in zit, van begin tot eind.
function evolutieKeten(key) {
  return ketenLagen(key).flat();
}
// Lagen voor weergave: lineaire ketens zijn [[a],[b],[c]]; een vork (Pluimstaart)
// is [[basis],[tak1, tak2, tak3]].
function ketenLagen(key) {
  let start = key;
  for (let i = 0; i < 6; i++) {
    const vorige = Object.keys(EVOLUTIE).find(k => evoMatch(k, start));
    if (!vorige) break;
    start = vorige;
  }
  const lagen = [[start]];
  let cur = start;
  const seen = new Set([start]);
  while (true) {
    const opts = evolutieOpties(cur).filter(k => !seen.has(k));
    if (!opts.length) break;
    if (opts.length === 1) {
      lagen.push([opts[0]]);
      seen.add(opts[0]);
      cur = opts[0];
      continue;
    }
    if (opts.includes(key)) {
      lagen.push([key]);
      seen.add(key);
      cur = key;
      continue;
    }
    lagen.push(opts);
    opts.forEach(k => seen.add(k));
    break;
  }
  return lagen;
}
// De bonus van mid-potje evolueren: +10 schade op wit/goud, +1 ster op paars.
// Precies zoals Duel: daarom loont het om KLEIN te beginnen en door te groeien
// in plaats van meteen de eindvorm op te stellen.
function evolutieBonus(slots) {
  return slots.map(s => {
    if (s.k === 'white' || s.k === 'gold') return { ...s, v: (s.v || 0) + 10 };
    if (s.k === 'purple') return { ...s, stars: (s.stars || 1) + 1 };
    return { ...s };
  });
}
// EVO-END (marker voor headless tests — niet verwijderen)

const PRICE = { C:100, U:200, R:400 };
const UPGRADE_COST = { 1:150, 2:250, 3:400 }; // kosten van huidig level naar volgend (max 4)
const WIN_CREDITS = 100, LOSS_CREDITS = 25;

// ==========================================
// BOOSTERKIST (sessie 24) — in Duel kwam je aan figuren via boosters, niet via
// een vaste winkel. De winkel blijft ongewijzigd (gericht kopen, duurder); de
// kist is de goedkope gok. Dubbel? Dan krijg je credits terug, zodat een kist
// nooit weggegooid geld is.
// ==========================================
// BOOSTER-START (marker voor headless tests — niet verwijderen)
const BOOSTER_COST = 150;
const BOOSTER_ODDS = [['C', 0.65], ['U', 0.27], ['R', 0.08]];
const BOOSTER_REFUND = { C: 60, U: 120, R: 240 };
// Puur: rand01 = getal in [0,1) voor de rarity, pick01 = idem voor de unitkeuze.
function rollBooster(rand01, pick01, owned, rarityMap) {
  let acc = 0, rar = 'C';
  for (const [r, p] of BOOSTER_ODDS) { acc += p; if (rand01 < acc) { rar = r; break; } }
  let pool = Object.keys(rarityMap).filter(k => rarityMap[k] === rar);
  // Alles van deze zeldzaamheid al in bezit? Dan liever iets nieuws uit een
  // andere lade dan gegarandeerd een duplicaat.
  const fresh = pool.filter(k => !owned[k]);
  const anyFresh = Object.keys(rarityMap).filter(k => !owned[k]);
  if (!fresh.length && anyFresh.length) pool = anyFresh;
  else if (fresh.length) pool = fresh;
  const key = pool[Math.min(pool.length - 1, Math.floor(pick01 * pool.length))];
  const duplicate = !!owned[key];
  return { key, rarity: rarityMap[key], duplicate, refund: duplicate ? BOOSTER_REFUND[rarityMap[key]] : 0 };
}
// BOOSTER-END (marker voor headless tests — niet verwijderen)

