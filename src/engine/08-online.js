function unitVisual(defKey, owner, h) {
  const art = UNIT_ART[defKey];
  if (art) return `<img src="${art}" style="height:${h||46}px;width:auto;display:block;margin:0 auto;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.7));">`;
  return unitSilhouette(defKey, owner);
}

function unitSilhouette(defKey, owner) {
  const PAL = {
    Gras: ['#86efac', '#4ade80'], Elektro: ['#fde047', '#67e8f9'], Water: ['#7dd3fc', '#38bdf8'],
    Geest: ['#c4b5fd', '#a78bfa'], Draak: ['#a5f3fc', '#fde68a'], Vuur: ['#fb923c', '#ef4444'],
    Normaal: ['#e2e8f0', '#cbd5e1'], Giftig: ['#d8b4fe', '#a855f7'], Vlieg: ['#bae6fd', '#38bdf8'],
    Bodem: ['#d6b48a', '#b45309'], Steen: ['#d6d3d1', '#78716c'], Insect: ['#bef264', '#65a30d'],
    IJs: ['#a5f3fc', '#67e8f9'], Vecht: ['#fdba74', '#ea580c'], Psychisch: ['#f0abfc', '#e879f9']
  };
  const [f, a] = PAL[(UNIT_DEFS[defKey] || {}).fac] || ['#cbd5e1', '#ffffff'];
  const body = `<ellipse cx="12" cy="14" rx="7" ry="6" fill="${f}"/><circle cx="12" cy="6.2" r="3.2" fill="${a}"/>`;
  return `<svg viewBox="0 0 24 22" width="100%" height="100%">${body}</svg>`;
}

let state;
let currentMode = 'solo';

// ==========================================
// ONLINE (#10) — twee spelers, elk met deze engine in de eigen browser.
// Iedereen ziet zichzelf als p1 (onderaan) en de tegenstander als p2. Over de
// lijn gaan alleen de zetten — gespiegeld, want het bord is 180° symmetrisch —
// plus één startgetal waaruit beide kanten dezelfde schijfuitkomsten trekken.
// Zo spelen beide engines precies hetzelfde potje. Het verbinden zelf
// (kamercode, PeerJS) zit in src/online.js (window.SchijfduelNet).
// ==========================================
const Online = {
  eigenTeam: null,     // ons team zoals naar de tegenstander gestuurd
  tegen: null,         // team van de tegenstander: { units, plates, evos, levels }
  ikBegin: true,
  rng: null,           // gedeelde toevalsbron voor spin()
  wachtrij: [],        // zetten van de tegenstander die nog moeten worden afgespeeld
  evoAntwoorden: [],   // evolutiekeuzes van de tegenstander die al binnen zijn
  evoWachter: null,    // vraagEvolutie() voor een figuur van de tegenstander wacht hierop
  afspelen: false,     // true terwijl we een zet van de tegenstander uitvoeren
  pompTimer: null,
};
function isOnline() { return !!state && state.mode === 'online'; }
// Solo en online bekijk je allebei vanuit p1; hotseat vanuit wie er aan zet is.
function kijkVanuitP1() { return !!state && (state.mode === 'solo' || state.mode === 'online'); }
// Mag de speler achter dit scherm nu iets doen? Online alleen in de eigen beurt.
function magHandelen() { return !isOnline() || Online.afspelen || state.turn === 'p1'; }

// Mulberry32: klein, snel en op elke browser gelijk.
function maakRng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6D2B79F5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Spiegelen tussen de twee kanten: punt (kolom, rij) ↔ (6 − kolom, 4 − rij);
// figuur u1–u6 (het eigen team, eerst aangemaakt) ↔ u7–u12.
const SPIEGEL = {};
for (const [k, n] of Object.entries(NODES)) {
  const m = Object.entries(NODES).find(([, o]) => o.x === 2 * BOARD_CX - n.x && o.y === BOARD_ROW_Y[0] + BOARD_ROW_Y[4] - n.y);
  SPIEGEL[k] = m ? m[0] : k;
}
function spiegelUid(uid) { if (!uid) return uid; const n = +uid.slice(1); return 'u' + (n <= 6 ? n + 6 : n - 6); }
function spiegel(b) {
  const out = { ...b };
  for (const k of ['uid', 'eerste']) if (out[k]) out[k] = spiegelUid(out[k]);
  if (out.punt) out.punt = SPIEGEL[out.punt];
  return out;
}

function onlineZend(bericht) { if (isOnline() && window.SchijfduelNet) window.SchijfduelNet.zend(spiegel(bericht)); }
// Een eigen zet doorgeven — niet als we juist een zet van de tegenstander afspelen.
function meldZet(bericht) { if (isOnline() && !Online.afspelen && state.turn === 'p1') onlineZend(bericht); }

// src/online.js: beide teams zijn bekend, het potje kan beginnen.
function onlineStart({ seed, ikBegin, tegen }) {
  const geldig = tegen && Array.isArray(tegen.units) && tegen.units.length === 6 && tegen.units.every(k => UNIT_DEFS[k])
    && Array.isArray(tegen.plates) && tegen.plates.every(k => PLATES[k]);
  if (!geldig) { toast(tr('Het team van de tegenstander klopt niet', 'The opponent’s team is invalid')); goHome(); return; }
  Object.assign(Online, { tegen, ikBegin, rng: maakRng(seed), wachtrij: [], evoAntwoorden: [], evoWachter: null, afspelen: false });
  currentMode = 'online';
  startGame();
}

// src/online.js: er komt een bericht van de tegenstander binnen.
function onlineOntvang(b) {
  if (!isOnline() || state.over) return;
  if (b.t === 'evo') {
    if (Online.evoWachter) { const w = Online.evoWachter; Online.evoWachter = null; w(!!b.ja); }
    else Online.evoAntwoorden.push(!!b.ja);
    return;
  }
  if (b.t === 'opgeven') { endMatch('p1', 'opgeven'); return; }
  Online.wachtrij.push(b);
  onlinePomp();
}

// Speelt de zetten van de tegenstander één voor één af, telkens pas als het
// bord stilstaat (geen gevecht, animatie of pauze meer bij ons).
function onlinePomp() {
  clearTimeout(Online.pompTimer);
  if (!isOnline() || state.over || !Online.wachtrij.length) return;
  const bezig = state.locked || state.animating || document.querySelector('#vs-overlay.active, #combat-overlay.active, #evo-overlay.active');
  if (bezig || state.turn !== 'p2') { Online.pompTimer = setTimeout(onlinePomp, 120); return; }
  const b = Online.wachtrij.shift();
  Online.afspelen = true;
  try { speelZetAf(b); } finally { Online.afspelen = false; }
  if (Online.wachtrij.length) Online.pompTimer = setTimeout(onlinePomp, 120);
}

function speelZetAf(b) {
  const nietGelijk = () => { console.error('Online: zet past niet bij ons bord', b); toast(tr('Online loopt niet meer gelijk — begin een nieuw potje', 'Online is out of sync — start a new match')); };
  if (b.t === 'einde') { endTurn(); return; }
  if (b.t === 'kaart') {
    const key = state.plates.p2[b.idx];
    if (!key) { nietGelijk(); return; }
    state.pendingPlate = b.eerste ? { idx: b.idx, key, stage: 2, uid: b.eerste } : null;
    usePlate('p2', b.idx, b.uid || undefined, b.punt || undefined);
    return;
  }
  const u = state.units[b.uid];
  if (!u || u.owner !== 'p2') { nietGelijk(); return; }
  if (b.t === 'inzet') { state.selected = null; state.pendingDeploy = u.uid; state.legalTargets = deployTargets(u); }
  else if (b.t === 'zet') { state.pendingDeploy = null; state.selected = u.uid; state.legalTargets = legalMoves(u); }
  else return;
  if (!state.legalTargets.has(b.punt)) { state.selected = null; state.pendingDeploy = null; state.legalTargets = new Set(); nietGelijk(); return; }
  onNodeTap(b.punt);
}

// src/online.js: de verbinding is weg.
function onlineVerbroken() {
  if (isOnline() && !state.over) endMatch('p1', 'verbinding');
}

