const W=(n,v,name,effect)=>Array.from({length:n},()=>({k:'white',v,name,effect}));
const G=(n,v,name,effect)=>Array.from({length:n},()=>({k:'gold',v,name,effect}));
const B=(n,name)=>Array.from({length:n},()=>({k:'blue',name}));
const R=n=>Array.from({length:n},()=>({k:'red'}));
const P=(n,effect,stars,name)=>Array.from({length:n},()=>({k:'purple',stars,effect,name}));
let UNIT_DEFS = {};
let DISK_LAYOUT = {};
let UNIT_ART = {};
let UNIT_ABILITY = {};
let RARITY = {};
let EVOLUTIE = {};
const DEX_COUNT = 151;
const OLD_KEY_MAP = {
  squire:'p001', cleric:'p002', commander:'p003',
  imp:'p004', hellhound:'p005', pitlord:'p006',
  apprentice:'p007', runesmith:'p008', warden:'p009',
  scout:'p025', archer:'p026', weaver:'p125',
  skeleton:'p092', ghoul:'p093', necromancer:'p094',
  boar:'p147', lupine:'p148', wyrmling:'p149'
};

function buildSlotsFromDex(e) {
  if (e.segments && e.segments.length) {
    const out = [];
    for (const s of e.segments) {
      const n = s.n | 0;
      if (s.k === 'white') out.push(...W(n, s.v, s.name, s.effect));
      else if (s.k === 'gold') out.push(...G(n, s.v, s.name, s.effect));
      else if (s.k === 'purple') out.push(...P(n, s.effect, s.stars, s.name));
      else if (s.k === 'blue') out.push(...B(n, s.name));
      else if (s.k === 'red') out.push(...R(n));
    }
    return out;
  }
  const out = [];
  for (const w of (e.w || [])) out.push(...W(w.n, w.v, w.name, w.effect));
  for (const g of (e.g || [])) out.push(...G(g.n, g.v, g.name, g.effect));
  for (const p of (e.p || [])) out.push(...P(p.n, p.effect, p.stars, p.name));
  if (e.b) out.push(...B(e.b));
  if (e.r) out.push(...R(e.r));
  return out;
}

// Zet de platte slot-lijst in de vaste schijf-volgorde uit de dex (bv. "G3 W3 R2 W2 P3 R1 B2").
function arrangeSlots(slots, layout) {
  if (!layout || !slots || !slots.length) return null;
  const pool = { white: [], gold: [], purple: [], blue: [], red: [] };
  for (const s of slots) { if (pool[s.k]) pool[s.k].push(s); }
  const map = { W: 'white', G: 'gold', P: 'purple', B: 'blue', R: 'red' };
  const out = [];
  for (const part of String(layout).trim().split(/\s+/)) {
    const kind = map[part[0]];
    const n = parseInt(part.slice(1), 10);
    if (!kind || !n) continue;
    out.push(...pool[kind].splice(0, n));
  }
  for (const k of ['gold', 'white', 'red', 'purple', 'blue']) out.push(...pool[k]);
  return out.length === slots.length ? out : null;
}

function applyDex(dex) {
  UNIT_DEFS = {}; DISK_LAYOUT = {}; UNIT_ART = {}; UNIT_ABILITY = {}; RARITY = {}; EVOLUTIE = {};
  if (!Array.isArray(dex) || dex.length < 18) return false;
  for (const e of dex) {
    const id = e.id;
    UNIT_DEFS[id] = { name:e.name, nameEn:e.nameEn || e.name, fac:e.fac, mp:e.mp, num:e.num, legend:!!e.legend, slots: buildSlotsFromDex(e), fromSegments: !!(e.segments && e.segments.length) };
    RARITY[id] = e.rar || 'C';
    if (e.evo) EVOLUTIE[id] = e.evo;
    if (e.art) UNIT_ART[id] = e.art;
    if (e.ability) UNIT_ABILITY[id] = e.ability;
    if (e.layout) DISK_LAYOUT[id] = e.layout;
  }
  for (const [k, def] of Object.entries(UNIT_DEFS)) {
    if (!def.fromSegments) {
      const a = DISK_LAYOUT[k] && arrangeSlots(def.slots, DISK_LAYOUT[k]);
      if (a) def.slots = a;
    }
    if (def.slots.length === 16) {
      const exp = [];
      for (const s of def.slots) for (let i = 0; i < 6; i++) exp.push({ ...s });
      def.slots = exp;
    }
    if (def.slots.length !== 96) console.warn('Rondel: schijf van', k, 'heeft', def.slots.length, 'vakken');
  }
  for (const [k, ab] of Object.entries(UNIT_ABILITY)) UNIT_DEFS[k].ability = ab;
  return true;
}

// DISK-ARRANGE-APPLY (marker voor headless tests — niet verwijderen)
if (!applyDex(window.RONDEL_DEX)) {
  console.warn('Rondel: dex ontbreekt — laad rondel-dex.js vóór de engine');
}

const ABILITIES = {
  blessing:  { name:'Zegenende Aura', nameEn:'Blessing Aura', desc:'Wis bij inzet de status van aangrenzende bondgenoten', descEn:'On entry, clear status from adjacent allies' },
  command:   { name:'Aanvoerder',     nameEn:'Commander', desc:'Aangrenzende bondgenoten krijgen +1 MP', descEn:'Adjacent allies gain +1 MP' },
  infernal:  { name:'Hellevaart',     nameEn:'Infernal', desc:'Wie met dit figuur vecht, raakt verbrand', descEn:'Fighters that clash with this figure are burned' },
  undying:   { name:'Onsterfelijk',   nameEn:'Undying', desc:'Eén keer per potje overleeft dit figuur een nederlaag en trekt terug', descEn:'Once per match, this figure survives a KO and retreats' },
  emberrune: { name:'Vuurrune',       nameEn:'Ember Rune', desc:'Wie met dit figuur vecht, raakt verbrand', descEn:'Fighters that clash with this figure are burned' },
  mountain:  { name:'Bergvast',       nameEn:'Mountain Stance', desc:'Standvastig: zwaarder te verdringen wanneer omringd', descEn:'Harder to push when surrounded' },
  stalk:     { name:'Sluipen',        nameEn:'Stalk', desc:'Loopt dwars door andere figuren heen', descEn:'Walks through other figures' },
  fly:       { name:'Vleugelslag',    nameEn:'Wings', desc:'Vliegt over andere figuren heen', descEn:'Flies over other figures' },
  rot:       { name:'Rot',            nameEn:'Rot', desc:'Wie met dit figuur vecht, raakt vergiftigd', descEn:'Fighters that clash with this figure are poisoned' },
  pack:      { name:'Roedel',         nameEn:'Pack', desc:'+1 MP zolang dit figuur naast een bondgenoot staat', descEn:'+1 MP while adjacent to an ally' },
  enchant:   { name:'Betovering',     nameEn:'Enchant', desc:'Wie met dit figuur vecht, raakt in de war', descEn:'Fighters that clash with this figure become confused' },
  raise:     { name:'Zielenoproep',   nameEn:'Soul Call', desc:'Wis bij inzet de Wacht-status van je zijlijn, zodat ze meteen weer inzetbaar zijn', descEn:'On entry, clear Wait from your bench' },
  guts:      { name:'Durf',           nameEn:'Guts', desc:'+50 schade zolang dit figuur een status heeft', descEn:'+50 damage while this figure has a status' },
  insomnia:  { name:'Slapeloos',      nameEn:'Sleepless', desc:'Kan niet in slaap worden gebracht', descEn:'Cannot be put to sleep' },
  icewall:   { name:'IJswal',         nameEn:'Ice Wall', desc:'Kan niet verbranden of bevriezen', descEn:'Cannot be burned or frozen' },
  grounding: { name:'Aarding',        nameEn:'Grounding', desc:'Kan niet verlamd raken', descEn:'Cannot be paralyzed' },
  shed:      { name:'Afschudden',     nameEn:'Shed', desc:'Wist aan het begin van jouw beurt alle statussen', descEn:'Clears all status at the start of your turn' },
  sturdy:    { name:'Stevig',         nameEn:'Sturdy', desc:'Wordt niet verslagen zolang het geen status heeft', descEn:'Cannot be KO’d while it has no status' },
  swiftswim: { name:'Stroomversnelling', nameEn:'Swift Current', desc:'+1 MP naast een Water-bondgenoot', descEn:'+1 MP next to a Water ally' },
};
function abilityName(ab) {
  if (!(ab && ABILITIES[ab])) return '';
  return isEn() ? (ABILITIES[ab].nameEn || ABILITIES[ab].name) : ABILITIES[ab].name;
}
function abilityDesc(ab) {
  if (!(ab && ABILITIES[ab])) return '';
  return isEn() ? (ABILITIES[ab].descEn || ABILITIES[ab].desc) : ABILITIES[ab].desc;
}

function abilityOf(u) { return u && UNIT_DEFS[u.defKey] ? UNIT_DEFS[u.defKey].ability : null; }
// Contact-status: welke status krijgt de tegenstander die ermee vecht?
function contactStatusOf(ability) { return { enchant:'confusion', emberrune:'burn', rot:'poison', infernal:'burn' }[ability] || null; }
function canPhase(u) { const a = abilityOf(u); return a === 'stalk' || a === 'fly' || !!(u && u.fx && u.fx.phase); }

// Move-labels (sessie 23): namen zitten sinds de twee-aanvallen-herontwerp
// ín de slots zelf (zie UNIT_DEFS). Blauw en Miss blijven naamloos.
function moveLabel(slot) {
  const n = slotName(slot);
  if (slot.k === 'white') return `${n || t('atk')} ${slot.v}`;
  if (slot.k === 'gold')  return `${n || t('gold')} ${slot.v}`;
  if (slot.k === 'purple') return `${n || t('curse')} ${'★'.repeat(slot.stars || 1)}`;
  if (slot.k === 'blue')  return n || t('dodge');
  return t('miss');
}
// ABILITIES-END (marker voor headless tests — niet verwijderen)

// Echte character-art (base64). Elke nieuwe PNG van Koen = één regel erbij.

