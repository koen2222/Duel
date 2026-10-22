#!/usr/bin/env node
// Balansanalyse (#8): rekent voor elke figuur uit hoe vaak hij een gevecht wint
// tegen elke andere figuur, puur op basis van de schijven. De regels
// (resolve() en verwante functies) worden rechtstreeks uit src/engine.js
// gelezen, zodat dit script nooit van het spel afwijkt.
//
// Gebruik:  node tools/balans.mjs          → markdown (zie docs/BALANS.md)
//           node tools/balans.mjs --csv    → alle figuren als CSV
//
// Model: level 1, geen status, geen abilities, elk vak even waarschijnlijk
// (n/96), tegenstander = elke figuur even vaak. "Winst" = tegenstander van het
// veld (verslagen of naar de zijlijn), "verlies" = zelf van het veld.
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const engine = fs.readFileSync(path.join(ROOT, 'src/engine.js'), 'utf8');
const dex = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/dex.json'), 'utf8'));

// --- Regels uit de engine halen ---------------------------------------------
function bron(naam) {
  const i = engine.indexOf(`function ${naam}(`);
  if (i < 0) throw new Error(`${naam}() niet gevonden in src/engine.js`);
  let j = engine.indexOf('{', i);
  for (let diepte = 0; j < engine.length; j++) {
    if (engine[j] === '{') diepte++;
    else if (engine[j] === '}' && --diepte === 0) break;
  }
  return engine.slice(i, j + 1);
}
const NAMEN = ['buildSlotsFromDex', 'arrangeSlots', 'nextAttackIndex', 'purpleOutcome', 'whiteWinEffect', 'resolve', 'applyPlateFx'];
const hulp = engine.match(/^const [WGBRP]=.*$/gm).join('\n');
const regels = new Function(`${hulp}\n${NAMEN.map(bron).join('\n')}\nreturn { ${NAMEN.join(', ')} };`)();
const plateBron = bron('plateCost'); // alleen ter controle dat de kaarten er nog zijn
void plateBron;

// --- Schijven ----------------------------------------------------------------
// Zelfde opbouw als applyDex() in de engine.
function schijf(e) {
  let slots = regels.buildSlotsFromDex(e);
  if (!(e.segments && e.segments.length) && e.layout) {
    const a = regels.arrangeSlots(slots, e.layout);
    if (a) slots = a;
  }
  if (slots.length === 16) slots = slots.flatMap((s) => Array.from({ length: 6 }, () => ({ ...s })));
  return slots;
}

// Kansverdeling van het vak waarop de wijzer uitkomt, met de effecten die
// runCombat() vóór resolve() toepast: Scherpschutter, Vuurwervel en kaarten.
function verdeling(slots, fx = {}) {
  const n = slots.length;
  const uit = new Map();
  const voegToe = (s, p) => {
    const k = JSON.stringify(s);
    const o = uit.get(k);
    if (o) o.p += p; else uit.set(k, { s, p });
  };
  for (let i = 0; i < n; i++) {
    let idx = i;
    if (fx.xaccuracy && slots[idx].k === 'red') idx = regels.nextAttackIndex(slots, idx);
    const s = slots[idx];
    if (s.effect === 'multiply') {
      // Blijft draaien zolang hij op dezelfde aanval landt (max. 6 extra keer).
      const q = slots.filter((x) => x.k === s.k && x.name === s.name).length / n;
      for (let t = 1; t <= 7; t++) {
        const pt = t < 7 ? q ** (t - 1) * (1 - q) : q ** 6;
        voegToe(regels.applyPlateFx({ fx }, { ...s, v: (s.v || 0) * t }), pt / n);
      }
    } else voegToe(regels.applyPlateFx({ fx }, s), 1 / n);
  }
  return [...uit.values()];
}

// Uitkomst van X tegen Y (resolve() is symmetrisch, rollen doen er niet toe).
function duel(dx, dy, fxX = {}) {
  let winst = 0, verlies = 0, statusGegeven = 0, statusGekregen = 0;
  for (const a of dx) for (const d of dy) {
    const p = a.p * d.p;
    const r = regels.resolve(a.s, d.s);
    // Schildwacht / Laatste Adem van X (zie runCombat).
    if (r.attKO && (fxX.focus || (fxX.xdefend && (d.s.v || 0) >= 10 && (d.s.v || 0) <= 100))) r.attKO = false;
    if (r.defKO || r.defBench) winst += p;
    if (r.attKO || r.attBench) verlies += p;
    if (r.statusOnDef) statusGegeven += p;
    if (r.statusOnAtt) statusGekregen += p;
  }
  return { winst, verlies, statusGegeven, statusGekregen };
}

// --- Per figuur ----------------------------------------------------------------
const evoVan = Object.fromEntries(dex.filter((e) => e.evo).map((e) => [e.evo, e.id]));
const figuren = dex.map((e) => {
  const slots = schijf(e);
  const tel = (k) => slots.filter((s) => s.k === k).length;
  const aanval = slots.filter((s) => s.k === 'white' || s.k === 'gold');
  return {
    e, slots, d: verdeling(slots),
    miss: tel('red') / slots.length, blauw: tel('blue') / slots.length, paars: tel('purple') / slots.length,
    maxSchade: Math.max(0, ...aanval.map((s) => s.v || 0)),
    gemSchade: aanval.length ? aanval.reduce((a, s) => a + (s.v || 0), 0) / aanval.length : 0,
    ko: slots.some((s) => s.effect === 'knockout'),
    stadium: evoVan[e.id] ? (evoVan[evoVan[e.id]] ? 3 : 2) : 1,
  };
});
for (const f of figuren) {
  let w = 0, v = 0, sg = 0, sk = 0;
  for (const g of figuren) { const r = duel(f.d, g.d); w += r.winst; v += r.verlies; sg += r.statusGegeven; sk += r.statusGekregen; }
  const N = figuren.length;
  Object.assign(f, { winst: w / N, verlies: v / N, netto: (w - v) / N, statusGegeven: sg / N, statusGekregen: sk / N });
}

// --- Kaarten (alleen die het gevecht beïnvloeden) -----------------------------
const KAARTEN = [
  ['xattack', 'Krachtstoot', 1, { xattack: true }],
  ['xspeed', 'Voorrang', 1, { xspeed: true }],
  ['xhex', 'Vervloeking', 1, { xspatk: true }],
  ['trueaim', 'Scherpschutter', 1, { xaccuracy: true }],
  ['xdefend', 'Schildwacht', 1, { xdefend: true }],
  ['focus', 'Laatste Adem', 2, { focus: true }],
];
const kaarten = KAARTEN.map(([key, naam, kosten, fx]) => {
  let delta = 0;
  for (const f of figuren) {
    const d = verdeling(f.slots, fx);
    for (const g of figuren) {
      const met = duel(d, g.d, fx), zonder = duel(f.d, g.d);
      delta += (met.winst - met.verlies) - (zonder.winst - zonder.verlies);
    }
  }
  return { key, naam, kosten, delta: delta / figuren.length ** 2 };
});

// --- Uitvoer -------------------------------------------------------------------
const pct = (x) => (100 * x).toFixed(1) + '%';
const pp = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1);
const gem = (xs) => xs.reduce((a, b) => a + b, 0) / (xs.length || 1);
const mediaan = (xs) => { const s = [...xs].sort((a, b) => a - b); return s.length ? (s[(s.length - 1) >> 1] + s[s.length >> 1]) / 2 : 0; };
const naam = (f) => `#${f.e.num} ${f.e.name}`;
const rij = (f) => `| ${naam(f)} | ${f.e.rar} | ${f.e.mp} | ${f.stadium}${f.e.legend ? ' (legende)' : ''} | ${pp(f.netto)} | ${pct(f.winst)} | ${pct(f.verlies)} | ${pct(f.miss)} | ${f.maxSchade} |`;
const kop = '| Figuur | Zeldz. | MP | Stadium | Netto | Wint | Verliest | Miss | Max. schade |\n|---|---|---|---|---|---|---|---|---|';

if (process.argv.includes('--csv')) {
  console.log('num,naam,zeldzaamheid,mp,stadium,legende,netto,winst,verlies,status_gegeven,status_gekregen,miss,blauw,paars,max_schade,gem_schade,ko_effect,ability');
  for (const f of figuren) console.log([f.e.num, f.e.name, f.e.rar, f.e.mp, f.stadium, !!f.e.legend, f.netto, f.winst, f.verlies, f.statusGegeven, f.statusGekregen, f.miss, f.blauw, f.paars, f.maxSchade, f.gemSchade.toFixed(1), f.ko, f.e.ability || ''].join(','));
  process.exit(0);
}

const out = [];
out.push(`Gegenereerd met \`node tools/balans.mjs\` uit \`src/dex.json\` en \`src/engine.js\` (${figuren.length} figuren).`, '');
out.push('### Gemiddelde netto per zeldzaamheid en MP', '');
out.push('Netto = kans dat de tegenstander van het veld gaat min kans dat je zelf van het veld gaat, gemiddeld over alle 151 tegenstanders. Tussen haakjes: aantal figuren.', '');
out.push('| Zeldz. | MP 0 | MP 1 | MP 2 | MP 3 | Alle |', '|---|---|---|---|---|---|');
for (const r of ['C', 'U', 'R']) {
  const cel = (mp) => { const xs = figuren.filter((f) => f.e.rar === r && (mp == null || f.e.mp === mp)); return xs.length ? `${pp(gem(xs.map((f) => f.netto)))} (${xs.length})` : '–'; };
  out.push(`| ${r} | ${cel(0)} | ${cel(1)} | ${cel(2)} | ${cel(3)} | ${cel(null)} |`);
}
out.push('');
// Figuren met precies dezelfde schijf (vakken en waarden, namen genegeerd).
const sjablonen = new Map();
for (const f of figuren) {
  const sig = JSON.stringify(f.slots.map((x) => [x.k, x.v, x.stars, x.effect]).sort());
  if (!sjablonen.has(sig)) sjablonen.set(sig, []);
  sjablonen.get(sig).push(f);
}
const gedeeld = [...sjablonen.values()].filter((g) => g.length >= 3).sort((a, b) => b.length - a.length);
out.push(`### Dezelfde schijf bij meerdere figuren (${gedeeld.reduce((a, g) => a + g.length, 0)} figuren, ${gedeeld.length} schijven)`, '');
out.push('| Figuren | Netto | Schijf |', '|---|---|---|');
const beschrijf = (slots) => { const t = new Map(); for (const x of slots) { const k = x.k === 'white' || x.k === 'gold' ? `${x.k[0].toUpperCase()}${x.v}` : x.k === 'purple' ? `P${x.stars || 1}★ ${x.effect}` : x.k === 'blue' ? 'Blauw' : 'Miss'; t.set(k, (t.get(k) || 0) + 1); } return [...t].map(([k, n]) => `${k}×${n}`).join(', '); };
for (const g of gedeeld) out.push(`| ${g.map((f) => `#${f.e.num} ${f.e.name} (${f.e.rar})`).join(', ')} | ${pp(g[0].netto)} | ${beschrijf(g[0].slots)} |`);
out.push('');
const gesorteerd = [...figuren].sort((a, b) => b.netto - a.netto);
out.push('### Sterkste 12', '', kop, ...gesorteerd.slice(0, 12).map(rij), '');
out.push('### Zwakste 12', '', kop, ...gesorteerd.slice(-12).reverse().map(rij), '');

const medR = mediaan(figuren.filter((f) => f.e.rar === 'R').map((f) => f.netto));
const medC = mediaan(figuren.filter((f) => f.e.rar === 'C').map((f) => f.netto));
out.push(`### Common sterker dan de mediane Rare (${pp(medR)})`, '', kop, ...gesorteerd.filter((f) => f.e.rar === 'C' && f.netto > medR).map(rij), '');
out.push(`### Rare zwakker dan de mediane Common (${pp(medC)})`, '', kop, ...gesorteerd.filter((f) => f.e.rar === 'R' && f.netto < medC).map(rij), '');

const perId = Object.fromEntries(figuren.map((f) => [f.e.id, f]));
const evoZwakker = figuren.filter((f) => f.e.evo && perId[f.e.evo] && perId[f.e.evo].netto < f.netto);
out.push('### Evolutie zwakker dan de vorm ervoor', '', 'Zonder de evolutiebonus (+10 op wit/goud, +1 ★ op paars) die je in een potje krijgt.', '');
out.push('| Van | Netto | Naar | Netto |', '|---|---|---|---|', ...evoZwakker.map((f) => `| ${naam(f)} (${f.e.rar}) | ${pp(f.netto)} | ${naam(perId[f.e.evo])} (${perId[f.e.evo].e.rar}) | ${pp(perId[f.e.evo].netto)} |`), '');

const veelMiss = figuren.filter((f) => f.miss >= 0.4).sort((a, b) => b.miss - a.miss);
out.push('### Veel Miss (40% of meer van de schijf)', '', kop, ...veelMiss.map(rij), '');

out.push('### Kaarten die het gevecht beïnvloeden', '', 'Gemiddelde verbetering van de netto als je de kaart in een gevecht gebruikt (procentpunten), over alle 151×151 duels.', '');
out.push('| Kaart | Kosten | Netto erbij | Per kostenpunt |', '|---|---|---|---|');
for (const k of kaarten) out.push(`| ${k.naam} (\`${k.key}\`) | ${k.kosten} | ${pp(k.delta)} | ${pp(k.delta / k.kosten)} |`);
out.push('| Tweede Kans (`respin`) | 1 | +0.0 | +0.0 |', '| Verblinding (`dazzle`) | 1 | +0.0 | +0.0 |', '');
console.log(out.join('\n'));
