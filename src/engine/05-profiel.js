// ==========================================
// INSTELLINGEN (sessie 24) — leven in het profiel zodat ze meegaan met
// localStorage. Elke waarde wordt bij het laden gevalideerd, zodat een oud of
// beschadigd profiel nooit het spel kan breken (defaults winnen).
// ==========================================
// SETTINGS-START (marker voor headless tests — niet verwijderen)
const SETTING_DEFS = {
  sfx:         { def: true,     type:'bool' },
  sfxVolume:   { def: 0.7,      type:'num',    min: 0, max: 1 },
  music:       { def: true,     type:'bool' },
  musicVolume: { def: 0.58,     type:'num',    min: 0, max: 1 },
  bgmDuel:     { def: true,     type:'bool' },
  haptics:     { def: true,     type:'bool' },
  animSpeed:   { def: 'normaal',type:'enum',   opts: ['normaal','snel','uit'] },
  arena:       { def: 'stadion',type:'enum',   opts: ['stadion','vuur','kristal','woud','grot','ijs','vulkaan','nacht'] },
  clockMinutes:{ def: 5,        type:'enum',   opts: [3, 5, 10, 0] },   // 0 = geen klok
  difficulty:  { def: 'normaal',type:'enum',   opts: ['makkelijk','normaal','moeilijk'] },
  confirmExit: { def: true,     type:'bool' },
  showHints:   { def: true,     type:'bool' },
  autoEndTurn: { def: true,     type:'bool' },
  lang:        { def: 'nl',     type:'enum',   opts: ['nl','en'] },
};
function freshSettings() {
  const s = {};
  for (const [k, d] of Object.entries(SETTING_DEFS)) s[k] = d.def;
  s.lang = detectLang();
  return s;
}
// Valideert elke sleutel apart: onbekende/ongeldige waarden vallen terug op de default.
function normalizeSettings(raw) {
  const out = freshSettings();
  if (!raw || typeof raw !== 'object') {
    out.lang = detectLang();
    return out;
  }
  for (const [k, d] of Object.entries(SETTING_DEFS)) {
    const v = raw[k];
    if (v === undefined || v === null) continue;
    if (d.type === 'bool' && typeof v === 'boolean') out[k] = v;
    else if (d.type === 'num' && typeof v === 'number' && isFinite(v)) out[k] = Math.min(d.max, Math.max(d.min, v));
    else if (d.type === 'enum' && d.opts.includes(v)) out[k] = v;
  }
  if (raw.lang === undefined || raw.lang === null) out.lang = detectLang();
  return out;
}
// SETTINGS-END (marker voor headless tests — niet verwijderen)

let profile;
// Eigen opslagsleutel. Rondel staat op hetzelfde domein (koen2222.github.io) en
// gebruikt 'rondel_profile'; die nemen we alleen éénmalig over als er nog geen
// Schijfduel-profiel is (migrateOwned vertaalt de oude sleutels) en laten we
// daarna met rust, zodat Rondel zijn eigen voortgang houdt.
const PROFILE_KEY = 'schijfduel_profile';
const RONDEL_PROFILE_KEY = 'rondel_profile';
const DECK_SLOTS = 3;
function freshProfile() { return { credits: 400, owned: { p001:1, p004:1, p007:1, p025:1, p092:1, p147:1 }, stats: { wins:0, losses:0 }, settings: freshSettings(), decks: Array(DECK_SLOTS).fill(null) }; }
// Opgeslagen teams valideren: units die je niet (meer) bezit vallen weg, en een
// slot dat daardoor incompleet wordt gaat leeg — zo kan een oud slot nooit een
// ongeldig potje starten.
function normalizeDecks(raw, owned) {
  const out = Array(DECK_SLOTS).fill(null);
  if (!Array.isArray(raw)) return out;
  for (let i = 0; i < DECK_SLOTS; i++) {
    const d = raw[i];
    if (!d || !Array.isArray(d.units) || !Array.isArray(d.plates)) continue;
    // Alleen basisvormen mogen in het team staan; een geëvolueerde vorm hang je
    // eronder. Oude teams met een evolutie erin verliezen die unit.
    const units = d.units.filter(k => UNIT_DEFS[k] && owned[k] && isBasisvorm(k));
    const plates = d.plates.filter(k => PLATES[k]);
    // Aangehangen evoluties: alleen geldig als het écht de evolutie van dat
    // figuur is én je hem bezit. De keten loopt door: hang je Rankhorn onder
    // Spruiton, dan mag Loofra daar weer onder. Loofra zonder Rankhorn mag niet.
    const evos = {};
    if (d.evos && typeof d.evos === 'object') {
      for (const start of units) {
        let k = start;
        while (true) {
          const e = d.evos[k];
          if (!e || !evoMatch(k, e) || !owned[e]) break;
          evos[k] = e; k = e;
        }
      }
    }
    if (units.length === 6 && plates.length > 0 && plateCost(plates) <= PLATE_BUDGET) out[i] = { units, plates, evos, name: typeof d.name === 'string' ? d.name.slice(0, 16) : '' };
  }
  return out;
}
function migrateOwned(owned) {
  const out = {};
  if (!owned || typeof owned !== 'object') return out;
  for (const [k, v] of Object.entries(owned)) out[OLD_KEY_MAP[k] || k] = v;
  return out;
}
function loadProfile() {
  let upgraded = false, overgenomen = false;
  try {
    let rawStr = localStorage.getItem(PROFILE_KEY);
    if (rawStr === null) { rawStr = localStorage.getItem(RONDEL_PROFILE_KEY); overgenomen = rawStr !== null; }
    const raw = rawStr ? JSON.parse(rawStr) : null;
    profile = raw || freshProfile();
    if (raw && raw.settings && raw.settings.bgmDuel === undefined) upgraded = true;
  }
  catch(e) { profile = freshProfile(); }
  if (!profile || typeof profile.credits !== 'number' || !profile.owned) profile = freshProfile();
  profile.owned = migrateOwned(profile.owned);
  if (!profile.stats) profile.stats = { wins:0, losses:0 };
  profile.settings = normalizeSettings(profile.settings);
  profile.decks = normalizeDecks(profile.decks, profile.owned);
  applyLang();
  if (upgraded) {
    profile.settings.music = true;
    profile.settings.bgmDuel = true;
  }
  if (upgraded || overgenomen) saveProfile();
}
function saveProfile() { try { localStorage.setItem(PROFILE_KEY, JSON.stringify(profile)); } catch(e) {} }
// Korte accessor; valt terug op de default als het profiel nog niet geladen is.
function S(key) {
  const s = profile && profile.settings ? profile.settings : null;
  const v = s ? s[key] : undefined;
  // Let op: nooit terugvallen op SETTING_DEFS[key] zelf — dat is de definitie
  // ({def,type,...}), niet de waarde. Voor het profiel geladen is moet .def eruit.
  return v === undefined ? SETTING_DEFS[key].def : v;
}

