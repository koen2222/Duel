const SLOT_COUNT = 96, SLOT_DEG = 3.75;
const COLORS = { white:'#e5e7eb', purple:'#8b5cf6', blue:'#3b82f6', gold:'#fbbf24', red:'#ef4444' };
const TXT = { white:'#000', purple:'#fff', blue:'#fff', gold:'#000', red:'#fff' };

// ===== Disk-iconen (Duel-stijl): elk vaktype z'n eigen glyph =====
function diskEffectGlyph(svg, effect, gx, gy, s) {
  const g = el('g', { transform:`translate(${gx},${gy})` }, svg);
  const P = (d, fill) => el('path', { d, fill: fill||'#fff', stroke:'rgba(0,0,0,0.55)', 'stroke-width':1, 'stroke-linejoin':'round' }, g);
  const L = (d) => el('path', { d, fill:'none', stroke:'#fff', 'stroke-width':2, 'stroke-linecap':'round', 'stroke-linejoin':'round' }, g);
  switch (effect) {
    case 'poison': case 'badlypoison':
      P(`M0 ${-s} C ${s*0.8} ${-s*0.1}, ${s*0.55} ${s}, 0 ${s} C ${-s*0.55} ${s}, ${-s*0.8} ${-s*0.1}, 0 ${-s} Z`, '#bbf7d0');
      el('circle', { cx:s*0.18, cy:s*0.25, r:s*0.28, fill:'rgba(0,0,0,0.28)' }, g);
      if (effect==='badlypoison') { el('path', { d:`M ${-s*0.35} ${-s*0.15} L ${s*0.3} ${-s*0.15} M ${-s*0.05} ${-s*0.45} L ${-s*0.05} ${s*0.15}`, stroke:'#4c1d95', 'stroke-width':1.4, 'stroke-linecap':'round' }, g); }
      break;
    case 'burn':
      P(`M0 ${s} C ${-s} ${s*0.35}, ${-s*0.35} ${-s*0.25}, ${-s*0.05} ${-s} C ${s*0.15} ${-s*0.3}, ${s*0.6} ${-s*0.35}, ${s*0.35} ${s*0.15} C ${s*0.95} ${s*0.1}, ${s*0.55} ${s*0.85}, 0 ${s} Z`, '#fed7aa');
      break;
    case 'paralysis':
      P(`M ${s*0.12} ${-s} L ${-s*0.55} ${s*0.12} L ${-s*0.05} ${s*0.12} L ${-s*0.22} ${s} L ${s*0.58} ${-s*0.2} L ${s*0.02} ${-s*0.2} Z`, '#fef08a');
      break;
    case 'sleep': {
      const t = el('text', { x:0, y:s*0.1, 'font-size':s*2, 'font-family':"'Fredoka',sans-serif", 'font-weight':900, fill:'#fff', stroke:'rgba(0,0,0,0.5)', 'stroke-width':0.8, 'text-anchor':'middle', 'dominant-baseline':'central' }, g); t.textContent='Z'; break;
    }
    case 'confusion':
      L(`M ${-s*0.55} ${s*0.2} Q ${-s*0.15} ${-s*0.8} ${s*0.5} ${-s*0.25} Q ${s*0.1} ${s*0.6} ${-s*0.3} ${s*0.35}`);
      el('circle', { cx:s*0.55, cy:-s*0.35, r:s*0.16, fill:'#fff' }, g);
      break;
    case 'frozen':
      L(`M0 ${-s} L0 ${s} M ${-s*0.87} ${-s*0.5} L ${s*0.87} ${s*0.5} M ${s*0.87} ${-s*0.5} L ${-s*0.87} ${s*0.5}`);
      break;
    case 'wait':
      el('circle', { cx:0, cy:0, r:s*0.85, fill:'none', stroke:'#fff', 'stroke-width':1.8 }, g);
      el('circle', { cx:0, cy:0, r:s*0.12, fill:'#fff' }, g);
      L(`M0 0 L0 ${-s*0.55} M0 0 L ${s*0.4} ${s*0.15}`);
      break;
    default:
      el('circle', { cx:0, cy:0, r:s*0.55, fill:'#fff' }, g);
  }
  return g;
}
function diskShield(svg, gx, gy, s) {
  const g = el('g', { transform:`translate(${gx},${gy})` }, svg);
  el('path', { d:`M0 ${-s} L ${s*0.85} ${-s*0.5} L ${s*0.85} ${s*0.15} Q ${s*0.85} ${s*0.82} 0 ${s} Q ${-s*0.85} ${s*0.82} ${-s*0.85} ${s*0.15} L ${-s*0.85} ${-s*0.5} Z`, fill:'#fff', stroke:'rgba(0,0,0,0.5)', 'stroke-width':1, 'stroke-linejoin':'round' }, g);
  el('path', { d:`M0 ${-s*0.5} L0 ${s*0.55} M ${-s*0.5} ${-s*0.12} L ${s*0.5} ${-s*0.12}`, stroke:'#2563eb', 'stroke-width':1.5, 'stroke-linecap':'round' }, g);
  return g;
}
function diskMiss(svg, gx, gy, s) {
  const g = el('g', { transform:`translate(${gx},${gy})` }, svg);
  el('path', { d:`M ${-s} ${-s} L ${s} ${s} M ${s} ${-s} L ${-s} ${s}`, stroke:'#fff', 'stroke-width':2.6, 'stroke-linecap':'round' }, g);
  return g;
}
function diskStars(svg, n, gx, gy, s) {
  const g = el('g', { transform:`translate(${gx},${gy})` }, svg);
  const w = (n-1)*s*1.5;
  for (let i=0;i<n;i++){ const px=-w/2+i*s*1.5; const t=el('text',{x:px,y:0,'font-size':s*2,fill:'#fde047',stroke:'rgba(0,0,0,0.55)','stroke-width':0.6,'text-anchor':'middle','dominant-baseline':'central'},g); t.textContent='★'; }
  return g;
}

function renderDisk(svgId, slots, defKey) {
  const svg = document.getElementById(svgId); svg.innerHTML = ''; svg.style.transition = 'none'; svg.style.transform = 'rotate(0deg)'; svg.getBoundingClientRect();
  const cx=120, cy=120, R=100, IR=26;
  const uq = svgId.replace(/[^a-zA-Z0-9]/g, '');
  svg.innerHTML = `<defs>
    <radialGradient id="dHub${uq}" cx="38%" cy="30%" r="85%"><stop offset="0%" stop-color="#4a4666"/><stop offset="55%" stop-color="#1a1826"/><stop offset="100%" stop-color="#0a0910"/></radialGradient>
    <linearGradient id="dRim${uq}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="40%" stop-color="#b45309"/><stop offset="65%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#713f12"/></linearGradient>
  </defs>`;
  // Metalen buitenrand met tick-markeringen per slot
  el('circle', { cx, cy, r: R+17, fill:'#0b0912' }, svg);
  el('circle', { cx, cy, r: R+14, fill:'none', stroke:`url(#dRim${uq})`, 'stroke-width':7 }, svg);
  el('circle', { cx, cy, r: R+9.5, fill:'none', stroke:'rgba(255,255,255,0.28)', 'stroke-width':1 }, svg);
  el('circle', { cx, cy, r: R+4, fill:'#12101e' }, svg);
  for (let k = 0; k < SLOT_COUNT; k += 8) {
    const a = (k*SLOT_DEG - 90)*Math.PI/180;
    el('line', { x1:cx+(R+4)*Math.cos(a), y1:cy+(R+4)*Math.sin(a), x2:cx+(R+10)*Math.cos(a), y2:cy+(R+10)*Math.sin(a), stroke:'rgba(255,255,255,0.45)', 'stroke-width':1.6 }, svg);
  }
  // Wedge-helper voor ringsegmenten (buitenradius ro, binnenradius ri)
  const seg = (ro, ri, sA, eA, large) => {
    const x1=cx+ro*Math.cos(sA), y1=cy+ro*Math.sin(sA), x2=cx+ro*Math.cos(eA), y2=cy+ro*Math.sin(eA);
    const ix1=cx+ri*Math.cos(sA), iy1=cy+ri*Math.sin(sA), ix2=cx+ri*Math.cos(eA), iy2=cy+ri*Math.sin(eA);
    return `M ${ix1} ${iy1} L ${x1} ${y1} A ${ro} ${ro} 0 ${large} 1 ${x2} ${y2} L ${ix2} ${iy2} A ${ri} ${ri} 0 ${large} 0 ${ix1} ${iy1} Z`;
  };
  // Gebogen move-naam langs de buitenrand van een wedge (leesbaar: onderin gespiegeld)
  let arcSeq = 0;
  const nameArc = (name, sA, eA, mA, color) => {
    const nr = R - 10.5, pad = 0.10;
    const id = `nm${uq}${arcSeq++}`;
    const flip = Math.sin(mA) > 0;   // onderste helft: pad omkeren zodat de tekst rechtop staat
    const a1 = flip ? eA - pad : sA + pad, a2 = flip ? sA + pad : eA - pad;
    const p = el('path', { id, d:`M ${cx+nr*Math.cos(a1)} ${cy+nr*Math.sin(a1)} A ${nr} ${nr} 0 0 ${flip?0:1} ${cx+nr*Math.cos(a2)} ${cy+nr*Math.sin(a2)}`, fill:'none' }, svg);
    const t = el('text', { 'font-size':9.5, 'font-family':"'Fredoka', sans-serif", 'font-weight':'700', fill:color, 'letter-spacing':'0.04em' }, svg);
    const tp = el('textPath', { href:`#${id}`, startOffset:'50%', 'text-anchor':'middle' }, t);
    tp.textContent = name;
  };
  const merged = []; let i = 0;
  while (i < slots.length) { let j = i; while (j < slots.length && slots[i].k===slots[j].k && slots[i].v===slots[j].v && slots[i].stars===slots[j].stars && slots[i].name===slots[j].name) j++; merged.push({ slot: slots[i], start:i, end:j }); i = j; }
  for (const m of merged) {
    const sA = (m.start*SLOT_DEG - 90)*Math.PI/180, eA = (m.end*SLOT_DEG - 90)*Math.PI/180, mA = (sA+eA)/2;
    const large = (m.end-m.start)*SLOT_DEG > 180 ? 1 : 0;
    // Basiskleur + subtiele diepte: lichte gloss aan de buitenkant, schaduw bij de naaf
    // data-start/data-end: zo weet markeerSlot() welk vak de wijzer aanwijst
    el('path', { d: seg(R, IR, sA, eA, large), fill: COLORS[m.slot.k], stroke:'rgba(0,0,0,0.55)', 'stroke-width':1.6,
      'data-start': m.start, 'data-end': m.end }, svg);
    el('path', { d: seg(R-1.5, R-13, sA, eA, large), fill:'rgba(255,255,255,0.22)', stroke:'none' }, svg);
    el('path', { d: seg(IR+11, IR, sA, eA, large), fill:'rgba(0,0,0,0.22)', stroke:'none' }, svg);
    const wedgeSlots = m.end - m.start;
    const narrow = wedgeSlots < 8;
    const lr = (R+IR)/2 + (narrow ? 10 : 5);   // smalle vakjes: inhoud iets naar buiten
    const lx = cx+lr*Math.cos(mA), ly = cy+lr*Math.sin(mA);
    const k = m.slot.k;
    if (k === 'white' || k === 'gold') {
      const fs = wedgeSlots < 8 ? 13 : wedgeSlots < 16 ? 17 : 22;
      const t = el('text', { x:lx, y:ly, fill:TXT[k], 'font-family':"'Fredoka', sans-serif", 'font-weight':'900', 'font-size':fs, 'text-anchor':'middle', 'dominant-baseline':'middle', 'paint-order':'stroke', stroke:'rgba(255,255,255,0.55)', 'stroke-width':2.5 }, svg);
      t.textContent = String(m.slot.v);
      if (wedgeSlots >= 12 && m.slot.name) nameArc(slotName(m.slot), sA, eA, mA, k === 'gold' ? '#78350f' : '#374151');
      if (k === 'gold') {
        const gr = narrow ? R - 6 : R - 20, gx = cx+gr*Math.cos(mA), gy = cy+gr*Math.sin(mA);
        el('path', { d:`M ${gx} ${gy-3} L ${gx+0.9} ${gy-0.9} L ${gx+3} ${gy} L ${gx+0.9} ${gy+0.9} L ${gx} ${gy+3} L ${gx-0.9} ${gy+0.9} L ${gx-3} ${gy} L ${gx-0.9} ${gy-0.9} Z`, fill:'#fff', opacity:0.95 }, svg);
      }
    } else if (k === 'purple') {
      // Status-icoon + stervakjes (sterren tellen bij Purple-vs-Purple)
      const gs = narrow ? 7.5 : 10;
      diskEffectGlyph(svg, m.slot.effect, lx, ly, gs);
      const sr = lr - (narrow ? 12 : 16), sx = cx+sr*Math.cos(mA), sy = cy+sr*Math.sin(mA);
      diskStars(svg, m.slot.stars || 1, sx, sy, narrow ? 3.4 : 4);
      if (wedgeSlots >= 12 && m.slot.name) nameArc(slotName(m.slot), sA, eA, mA, '#ede9fe');
    } else if (k === 'blue') {
      diskShield(svg, lx, ly, narrow ? 8.5 : 12);
    } else if (k === 'red') {
      diskMiss(svg, lx, ly, narrow ? 7 : 9.5);
    }
  }
  // Glossy naaf
  el('circle', { cx, cy, r: IR, fill:`url(#dHub${uq})`, stroke:'#fbbf24', 'stroke-width':2.5 }, svg);
  el('ellipse', { cx:cx-6, cy:cy-8, rx:10, ry:6, fill:'rgba(255,255,255,0.20)' }, svg);
  el('circle', { cx, cy, r:4, fill:'#fbbf24', opacity:0.85 }, svg);
}

// Welk vak wijst de wijzer aan? Zonder markering moet je zelf uitzoeken waar
// hij stilstaat; nu licht het gedraaide vak op zolang de uitslag in beeld is.
function markeerSlot(svgId, idx) {
  if (animOff()) return;
  const svg = document.getElementById(svgId); if (!svg) return;
  svg.querySelectorAll('.slot-mark').forEach(e => e.remove());
  const wedge = [...svg.querySelectorAll('path[data-start]')]
    .find(p => idx >= +p.dataset.start && idx < +p.dataset.end);
  if (!wedge) return;
  // Twee lagen: een lichte waas over het hele vak zodat je het van een afstand
  // ziet, en een dikke rand eromheen zodat je precies weet welk vak het is.
  const waas = wedge.cloneNode(false);
  waas.setAttribute('class', 'slot-mark-waas');
  waas.setAttribute('fill', 'rgba(255,255,255,0.30)');
  waas.setAttribute('stroke', 'none');
  const mark = wedge.cloneNode(false);
  mark.setAttribute('class', 'slot-mark');
  mark.setAttribute('fill', 'none');
  mark.setAttribute('stroke', '#ffffff');
  mark.setAttribute('stroke-width', '7');
  for (const e of [waas, mark]) { e.removeAttribute('data-start'); e.removeAttribute('data-end'); svg.appendChild(e); }
}

function spin(svgId, ms) {
  return new Promise(res => {
    const svg = document.getElementById(svgId);
    const idx = Math.floor((isOnline() && Online.rng ? Online.rng() : Math.random()) * SLOT_COUNT);
    // Animatie-instelling: 'uit' toont het resultaat meteen, 'snel' halveert.
    if (animOff()) {
      svg.style.transition = 'none';
      svg.style.transform = `rotate(${-((idx+0.5)*SLOT_DEG)}deg)`;
      setTimeout(() => res(idx), 60);
      return;
    }
    const dur = Math.max(400, ms * animScale());
    const fullRots = 5 + Math.floor(Math.random()*2);
    const deg = 360*fullRots - ((idx+0.5)*SLOT_DEG);
    svg.style.transition = `transform ${dur}ms cubic-bezier(0.15, 0.85, 0.1, 1)`;
    svg.getBoundingClientRect(); svg.style.transform = `rotate(${deg}deg)`;
    scheduleSpinTicks(dur, fullRots);
    setTimeout(() => { res(idx); }, dur+100);
  });
}

// Tik-geluid dat meeloopt met de vertragende schijf: we sampelen dezelfde
// easing-curve als de CSS-transitie, zodat elke tik met een slot-grens samenvalt.
// Openstaande tikken opruimen als het gevecht/scherm wegvalt, zodat er nooit
// geluid natikt in een menu.
let spinTickTimers = [];
function clearSpinTicks() { for (const t of spinTickTimers) clearTimeout(t); spinTickTimers = []; }

function scheduleSpinTicks(dur, fullRots) {
  if (!S('sfx')) return;
  // We tikken niet op élk slot: dat zouden ~90 losse oscillators per gevecht
  // zijn (×2 schijven), wat op een telefoon hoorbaar hapert. Eén tik per twee
  // slots klinkt hetzelfde en is de helft van het werk; bovendien harde grens.
  const totalSlots = fullRots * SLOT_COUNT;
  const ease = t => 1 - Math.pow(1 - t, 3);            // benadert cubic-bezier(.15,.85,.1,1)
  const timers = [];
  let last = 0;
  for (let i = 1; i <= 120 && timers.length < 40; i++) {
    const t = i / 120;
    const slotsPassed = Math.floor(ease(t) * totalSlots);
    if (slotsPassed >= last + 2) { last = slotsPassed; timers.push(setTimeout(() => sfx('tick'), t * dur)); }
  }
  spinTickTimers.push(...timers);
}

function applyStatus(slots, st, u) {
  let r = slots.map(s => ({...s}));
  const SPECIAL = ['poison','badlypoison','burn','paralysis','confusion','sleep','frozen','curse'];
  // Verlamming: de KLEINSTE aanval (minste vakken, niet-rood) wordt Miss.
  if (st.includes('paralysis')) {
    const groups = [];
    let i = 0;
    while (i < r.length) {
      const s = r[i];
      if (s.k === 'red') { i++; continue; }
      let j = i + 1;
      while (j < r.length && r[j].k === s.k && r[j].name === s.name && r[j].v === s.v && r[j].effect === s.effect) j++;
      groups.push({ i, n: j - i });
      i = j;
    }
    if (groups.length) {
      const g = groups.reduce((a, b) => b.n < a.n ? b : a);
      for (let k = g.i; k < g.i + g.n; k++) r[k] = { k: 'red' };
    }
  }
  // Brand: witte/gouden aanvallen van 10 of minder worden Miss, en -10 schade
  if (st.includes('burn')) {
    for (let i = 0; i < r.length; i++) {
      if ((r[i].k === 'white' || r[i].k === 'gold') && (r[i].v || 0) <= 10) r[i] = { k: 'red' };
    }
  }
  let mod = 0;
  if (st.includes('poison')) mod -= 20;
  if (st.includes('badlypoison')) mod -= 40;
  if (st.includes('burn')) mod -= 10;
  if (u && abilityOf(u) === 'guts' && st.some(s => SPECIAL.includes(s))) mod += 50;
  if (mod) for (let s of r) if (s.k === 'white' || s.k === 'gold') s.v = Math.max(0, (s.v || 0) + mod);
  return r;
}

function nextAttackIndex(slots, idx) {
  const n = slots.length;
  if (!n) return 0;
  const cur = slots[idx];
  const same = (s) => s && cur && s.k === cur.k && s.name === cur.name && s.v === cur.v && s.effect === cur.effect;
  let i = idx;
  let guard = 0;
  while (same(slots[i % n]) && guard < n) { i++; guard++; }
  return i % n;
}

function noEffectReason(a, d) {
  if (a.k==='red' && d.k==='red') return tr('Beide Miss', 'Both Miss'); if (a.k==='blue' && d.k==='blue') return tr('Beide ontwijken', 'Both dodge');
  if ((a.k==='red' && d.k==='blue') || (a.k==='blue' && d.k==='red')) return tr('Miss vs Ontwijken', 'Miss vs Dodge');
  if (a.k==='blue') return tr('Aanval ontweken', 'Attack dodged'); if (d.k==='blue') return tr('Aanval ontweken', 'Attack dodged');
  if (a.k==='purple' && d.k==='purple') return tr('Krachten heffen op', 'Powers cancel out');
  if ((a.k==='white'||a.k==='gold') && (d.k==='white'||d.k==='gold')) return tr(`Gelijke Strijd (${a.v} = ${d.v})`, `Even clash (${a.v} = ${d.v})`);
  return tr('Geen effect', 'No effect');
}

function showClashStamp(r, aSlot, dSlot) {
  const box = document.getElementById('clash-stamp');
  const txt = document.getElementById('clash-stamp-txt');
  const kick = document.getElementById('clash-stamp-kicker');
  if (!box || !txt || animOff()) return;
  let kind = 'none', title = t('stamp.none'), sub = '';
  if (r.attKO || r.defKO) {
    kind = 'ko';
    title = t('stamp.ko');
    if ((aSlot.k === 'white' || aSlot.k === 'gold') && (dSlot.k === 'white' || dSlot.k === 'gold')) {
      sub = `${aSlot.v || 0}  ·  ${dSlot.v || 0}`;
    } else {
      sub = moveLabel(r.attKO ? dSlot : aSlot);
    }
  } else if (r.attBench || r.defBench) {
    kind = 'wait';
    title = t('stamp.bench');
  } else if (r.statusOnAtt || r.statusOnDef) {
    kind = 'status';
    const st = r.statusOnDef || r.statusOnAtt;
    title = (statusLabel(st) || st).toUpperCase();
  } else if (aSlot.k === 'red' && dSlot.k === 'red') {
    kind = 'miss'; title = t('stamp.miss');
  } else if (aSlot.k === 'blue' || dSlot.k === 'blue') {
    kind = 'block'; title = t('stamp.block');
  } else if (aSlot.k === 'red' || dSlot.k === 'red') {
    kind = 'miss'; title = t('stamp.miss');
  }
  txt.textContent = title;
  if (kick) kick.textContent = sub;
  box.className = 'clash-stamp show ' + kind;
  box.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    box.classList.remove('show');
    box.setAttribute('aria-hidden', 'true');
  }, 1300);
}

async function runCombat(att, def) {
  state.locked = true;
  const defInitialNode = def.node; const attInitialNode = att.node; 
  
  state.selected = null; const ov = document.getElementById('combat-overlay');
  const attDiskId = att.owner === 'p2' ? 'disk-top' : 'disk-bottom', defDiskId = def.owner === 'p2' ? 'disk-top' : 'disk-bottom';
  document.getElementById(att.owner==='p2'?'combat-top-name':'combat-bottom-name').textContent = unitName(att.defKey);
  document.getElementById(def.owner==='p2'?'combat-top-name':'combat-bottom-name').textContent = unitName(def.defKey);

  // De twee kemphanen zelf, naast hun schijf. Zo zie je WIE er vecht en kan de
  // aanval straks van de een naar de ander vliegen.
  const attFig = document.getElementById(att.owner === 'p2' ? 'fighter-top' : 'fighter-bottom');
  const defFig = document.getElementById(def.owner === 'p2' ? 'fighter-top' : 'fighter-bottom');
  attFig.className = 'fighter ' + att.owner; attFig.innerHTML = unitVisual(att.defKey, att.owner, 118);
  defFig.className = 'fighter ' + def.owner; defFig.innerHTML = unitVisual(def.defKey, def.owner, 118);
  const fxLaag = document.getElementById('attack-fx'); if (fxLaag) fxLaag.innerHTML = '';

  const aSlots = applyStatus(att.slots, att.status, att), dSlots = applyStatus(def.slots, def.status, def);
  renderDisk(attDiskId, aSlots, att.defKey); renderDisk(defDiskId, dSlots, def.defKey);
  document.getElementById('combat-result').textContent = ''; document.getElementById('btn-combat-continue').style.display = 'none';
  const clashEl0 = document.getElementById('clash-moves'); if (clashEl0) clashEl0.innerHTML = '';
  const stamp0 = document.getElementById('clash-stamp');
  if (stamp0) { stamp0.className = 'clash-stamp'; stamp0.setAttribute('aria-hidden', 'true'); }
  ov.classList.add('active');
  Audio_.setTrack('combat');

  // Clash: flits + schok zodra beide wielen stilstaan
  sfx('clash');
  if (!animOff()) {
    const row = document.querySelector('#combat-overlay .disks-row');
    const flash = document.getElementById('clash-flash');
    if (row) { row.classList.remove('clash'); void row.offsetWidth; row.classList.add('clash'); }
    if (flash) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
  }

  const [aIdx, dIdx] = await Promise.all([spin(attDiskId, 1600 + Math.random()*300), spin(defDiskId, 1900 + Math.random()*300)]);
  let finalAIdx = aIdx, finalDIdx = dIdx;

  // HERKANSINGEN (Duel: Double Chance / Bright Powder). Tweede Kans laat je
  // eigen figuur opnieuw draaien, Verblinding dwingt de tegenstander ertoe.
  const aFx = att.fx || {}, dFx = def.fx || {};
  const respinAtt = aFx.respinSelf || dFx.respinFoe;
  const respinDef = dFx.respinSelf || aFx.respinFoe;
  if (respinAtt || respinDef) {
    toast(respinAtt && respinDef ? tr('Beide figuren draaien opnieuw!', 'Both figures spin again!') : (respinAtt ? tr('Herkansing voor de aanvaller!', 'Respin for the attacker!') : tr('Herkansing voor de verdediger!', 'Respin for the defender!')));
    const again = await Promise.all([
      respinAtt ? spin(attDiskId, 1600 + Math.random()*300) : Promise.resolve(finalAIdx),
      respinDef ? spin(defDiskId, 1900 + Math.random()*300) : Promise.resolve(finalDIdx),
    ]);
    finalAIdx = again[0]; finalDIdx = again[1];
    sfx('clash');
  }

  if (att.status.includes('confusion')) finalAIdx = nextAttackIndex(aSlots, finalAIdx);
  if (def.status.includes('confusion')) finalDIdx = nextAttackIndex(dSlots, finalDIdx);
  // Scherpschutter (X Accuracy): een Miss schuift door naar het vak ernaast
  if (aFx.xaccuracy && aSlots[finalAIdx].k === 'red') finalAIdx = nextAttackIndex(aSlots, finalAIdx);
  if (dFx.xaccuracy && dSlots[finalDIdx].k === 'red') finalDIdx = nextAttackIndex(dSlots, finalDIdx);

  // Laat zien WELK vak je hebt gedraaid — inclusief het doorgeschoven vak bij
  // Verwarring of Scherpschutter, want dan wijst de wijzer zelf ernaast.
  markeerSlot(attDiskId, finalAIdx); markeerSlot(defDiskId, finalDIdx);

  const attWasFrozen = att.status.includes('frozen'), defWasFrozen = def.status.includes('frozen');
  let aSlot = attWasFrozen ? {k:'red'} : aSlots[finalAIdx];
  let dSlot = defWasFrozen ? {k:'red'} : dSlots[finalDIdx];

  // Vuurwervel / Fire Spin: blijf draaien tot je iets anders raakt; schade × aantal
  const multiplyOnce = async (who, diskId, slots, slot, idx) => {
    if (!slot || slot.effect !== 'multiply') return { slot, idx };
    let times = 1;
    for (let n = 0; n < 6; n++) {
      toast(`${slotName(slot)} ×${times}!`);
      const next = await spin(diskId, 800 + Math.random() * 250);
      const s = slots[next];
      if (s && s.k === slot.k && s.name === slot.name) {
        times++;
        idx = next;
        markeerSlot(diskId, idx);
      } else {
        markeerSlot(diskId, idx);
        return { slot: { ...slot, v: (slot.v || 0) * times, name: `${slot.name} ×${times}` }, idx };
      }
    }
    return { slot: { ...slot, v: (slot.v || 0) * times, name: `${slot.name} ×${times}` }, idx };
  };
  {
    const am = await multiplyOnce(att, attDiskId, aSlots, aSlot, finalAIdx);
    aSlot = am.slot; finalAIdx = am.idx;
    const dm = await multiplyOnce(def, defDiskId, dSlots, dSlot, finalDIdx);
    dSlot = dm.slot; finalDIdx = dm.idx;
  }

  if (att.status.includes('bulwark')) { att.status = att.status.filter(s => s !== 'bulwark'); if (aSlot.k === 'red') aSlot = {k:'blue'}; }
  if (def.status.includes('bulwark')) { def.status = def.status.filter(s => s !== 'bulwark'); if (dSlot.k === 'red') dSlot = {k:'blue'}; }

  // Krachtstoot / Voorrang / Vervloeking passen het gedraaide vak aan
  aSlot = applyPlateFx(att, aSlot);
  dSlot = applyPlateFx(def, dSlot);

  const r = resolve(aSlot, dSlot); let html = "";
  const clashEl = document.getElementById('clash-moves');
  if (clashEl) {
    clashEl.innerHTML = `<span class="mv-att">${moveLabel(aSlot)}</span><span class="vs">VS</span><span class="mv-def">${moveLabel(dSlot)}</span>`;
  }

  // Schildwacht (X Defend): overleeft een klap van 10 t/m 100.
  // Laatste Adem (Focus Band): kan deze beurt helemaal niet verslagen worden.
  const saved = [];
  if (r.attKO && (aFx.focus || (aFx.xdefend && (dSlot.v || 0) >= 10 && (dSlot.v || 0) <= 100))) { r.attKO = false; saved.push(unitName(att.defKey)); }
  if (r.defKO && (dFx.focus || (dFx.xdefend && (aSlot.v || 0) >= 10 && (aSlot.v || 0) <= 100))) { r.defKO = false; saved.push(unitName(def.defKey)); }
  clearPlateFx(att); clearPlateFx(def);

  // Onverwoestbaar (Ruinous Helix): eerste KO wordt geen KO — de unit trekt
  // terug naar de bank en de tegenstander levelt NIET. Eenmalig per potje.
  let attRetreat = false, defRetreat = false;
  if (r.attKO && abilityOf(att) === 'undying' && !att.undyingUsed) { att.undyingUsed = true; r.attKO = false; attRetreat = true; }
  if (r.defKO && abilityOf(def) === 'undying' && !def.undyingUsed) { def.undyingUsed = true; r.defKO = false; defRetreat = true; }
  const hasSpecial = (u) => u.status.some(s => ['poison','badlypoison','burn','paralysis','confusion','sleep','frozen','curse'].includes(s));
  if (r.attKO && abilityOf(att) === 'sturdy' && !hasSpecial(att)) { r.attKO = false; saved.push(unitName(att.defKey)); }
  if (r.defKO && abilityOf(def) === 'sturdy' && !hasSpecial(def)) { r.defKO = false; saved.push(unitName(def.defKey)); }

  let attNextNode = att.node;
  let defNextNode = def.node;
  let attToBench = false;
  let defToBench = false;
  let attBenchOnly = false, defBenchOnly = false;

  if (r.attKO) { html += `<span class="ko">${unitName(att.defKey)} ${tr('is verslagen!', 'is knocked out!')}</span><br>`; attNextNode = null; attToBench = true; }
  if (r.defKO) { html += `<span class="ko">${unitName(def.defKey)} ${tr('is verslagen!', 'is knocked out!')}</span><br>`; defNextNode = null; defToBench = true; }
  if (r.attBench) { html += `<span class="status">${unitName(att.defKey)} ${tr('gaat terug naar de zijlijn!', 'returns to the bench!')}</span><br>`; attNextNode = null; attBenchOnly = true; }
  if (r.defBench) { html += `<span class="status">${unitName(def.defKey)} ${tr('gaat terug naar de zijlijn!', 'returns to the bench!')}</span><br>`; defNextNode = null; defBenchOnly = true; }
  if (attRetreat) { html += `<span class="status">${unitName(att.defKey)} — ${tr('Onverwoestbaar! Trekt terug.', 'Undying! Retreats.')}</span><br>`; attNextNode = null; }
  if (defRetreat) { html += `<span class="status">${unitName(def.defKey)} — ${tr('Onverwoestbaar! Trekt terug.', 'Undying! Retreats.')}</span><br>`; defNextNode = null; }

  if (r.defKO && !r.attKO) { attNextNode = defInitialNode; }

  if (r.statusOnAtt) { applyCondition(att, r.statusOnAtt); html += `<span class="status">-> ${statusLabel(r.statusOnAtt).toUpperCase()}</span><br>`; }
  if (r.statusOnDef) { applyCondition(def, r.statusOnDef); html += `<span class="status">-> ${statusLabel(r.statusOnDef).toUpperCase()}</span><br>`; }

  // Contact-abilities: status op de overlevende tegenstander (en op zichzelf bij Helse Jacht)
  const applyContact = (src, tgt, srcSurvives, tgtSurvives) => {
    const st = contactStatusOf(abilityOf(src)); if (!st) return;
    if (tgtSurvives && !tgt.status.includes(st)) { applyCondition(tgt, st); html += `<span class="status">${unitName(src.defKey)}: ${unitName(tgt.defKey)} -> ${statusLabel(st).toUpperCase()}</span><br>`; }
    if (abilityOf(src) === 'infernal' && srcSurvives && !src.status.includes('burn')) applyCondition(src, 'burn');
  };
  applyContact(att, def, !attToBench, !defToBench);
  applyContact(def, att, !defToBench, !attToBench);

  for (const nm of saved) html += `<span class="status">${nm} ${tr('houdt stand dankzij je kaart!', 'holds on thanks to your plate!')}</span><br>`;
  if (!r.attKO && !r.defKO && !attRetreat && !defRetreat && !r.statusOnAtt && !r.statusOnDef && !r.attBench && !r.defBench && !html) html += `<span style="opacity:0.8;font-style:italic">${noEffectReason(aSlot, dSlot)}</span>`;
  showClashStamp(r, aSlot, dSlot);

  // AANVALSANIMATIE: de klap gaat van het ene poppetje NAAR het andere. Wat je
  // draait bepaalt wat er vliegt — een vonk, een golf, een vlam — en waar
  // het aankomt gebeurt de inslag. Blokkeer je, dan vangt een schild het op;
  // mis je, dan blijft er een 'MIS' boven je hoofd hangen.
  {
    const schaal = animOff() ? 0 : (animScale() || 1);
    const fxA = attackFx(aSlot), fxD = attackFx(dSlot);
    const attNeer = r.attKO || attRetreat, defNeer = r.defKO || defRetreat;
    let wacht = 0;
    if (fxA) wacht = Math.max(wacht, speelTreffer(attFig, defFig, fxA, dSlot.k === 'blue'));
    if (fxD) {
      const start = Math.round((fxA ? 220 : 0) * schaal);
      setTimeout(() => speelTreffer(defFig, attFig, fxD, aSlot.k === 'blue'), start);
      wacht = Math.max(wacht, start + 760 * schaal);
    }
    // Wie zelf niets uithaalt, laat zien wat hij dan wél deed. MAAR: krijgt hij
    // op datzelfde moment een klap te verwerken, dan houden we z'n MIS weg.
    // Anders staat er 'MIS' bovenop een figuur die je net ziet incasseren of
    // omvallen, en lees je twee dingen tegelijk over één poppetje. Wat er
    // gedraaid is staat sowieso onder het scherm ("Miss ⚔ Grafzwaard 40").
    const attRaakt = !!fxD || attNeer;   // de aanvaller krijgt zelf iets te verduren
    const defRaakt = !!fxA || defNeer;
    if (!fxA && aSlot.k === 'red' && !attRaakt) { toonBadge('mis', fxMidden(attFig, fxLaag)); sfx('mis'); }
    if (!fxD && dSlot.k === 'red' && !defRaakt) { toonBadge('mis', fxMidden(defFig, fxLaag)); sfx('mis'); }
    if (!fxA && !fxD && aSlot.k === 'blue' && !attRaakt) toonBadge('schild', fxMidden(attFig, fxLaag));
    if (!fxA && !fxD && dSlot.k === 'blue' && !defRaakt) toonBadge('schild', fxMidden(defFig, fxLaag));
    if (!fxA && !fxD) wacht = Math.max(wacht, 620 * schaal);
    // Wie het niet overleeft gaat neer — ook als de winnende klap niet zichtbaar
    // was (goud dat op een blok stukloopt, bijvoorbeeld).
    if (attNeer || defNeer) {
      const valNa = Math.max(0, wacht - 360 * schaal);
      if (attNeer && attFig) setTimeout(() => attFig.classList.add('valt'), valNa);
      if (defNeer && defFig) setTimeout(() => defFig.classList.add('valt'), valNa);
      wacht = valNa + 820 * schaal;
    }
    if (wacht > 0) await new Promise(res => setTimeout(res, Math.min(wacht, 1800 * schaal)));
  }

  // Uitkomst-geluid. De klap zelf klonk al tijdens de animatie (elke soort z'n
  // eigen klank), dus hier alleen nog wat er ná de inslag gebeurt.
  if (r.attKO || r.defKO) sfx('ko');
  else if (attRetreat || defRetreat) sfx('block');
  else if (r.statusOnAtt || r.statusOnDef) sfx('status');

  document.getElementById('combat-result').innerHTML = html;
  const btn = document.getElementById('btn-combat-continue'); btn.style.display = ''; setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
  await new Promise(res => { btn.onclick = res; }); ov.classList.remove('active');
  Audio_.setTrack('battle');

  // De aanval slaat nu ook echt IN op het bord, op het punt waar hij landt.
  // Dat gebeurt na het sluiten van het gevechtsscherm, zodat je het ziet.
  {
    const fxA = attackFx(aSlot), fxD = attackFx(dSlot);
    if (fxA) boardImpact(defInitialNode, fxA);   // wat de aanvaller doet, landt op de verdediger
    if (fxD) boardImpact(attInitialNode, fxD);   // en andersom
  }

  att.node = attNextNode;
  def.node = defNextNode;
  if (attToBench) { koUnit(att); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'burst'); zielNaarHC(att, attInitialNode); }
  if (defToBench) { koUnit(def); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'burst'); zielNaarHC(def, defInitialNode); }
  if (attBenchOnly) { att.node = null; if (r.statusOnAtt === 'wait') markWait(att); state.bench[att.owner].push(att.uid); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'poof'); }
  if (defBenchOnly) { def.node = null; if (r.statusOnDef === 'wait') markWait(def); state.bench[def.owner].push(def.uid); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'poof'); }
  // Onverwoestbaar-terugtocht: statussen behouden (geen P.C.-genezing), wél 'wait'
  if (attRetreat) { markWait(att); state.bench[att.owner].push(att.uid); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'poof'); }
  if (defRetreat) { markWait(def); state.bench[def.owner].push(def.uid); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'poof'); }

  // Duel-regel (Serebii): Frozen wordt na een gevecht gewist, ongeacht de uitkomst
  if (attWasFrozen) att.status = att.status.filter(s => s !== 'frozen');
  if (defWasFrozen) def.status = def.status.filter(s => s !== 'frozen');

  // EVOLUTIE OF LEVEL-UP (Duel-regel + onze huisregel).
  // Duel: wie een gevecht wint en z'n evolutie eronder heeft hangen, MAG
  // evolueren — hij mag ook weigeren. Wij hadden al de huisregel "winnen = een
  // level erbij". Die twee komen hier samen als een echte keuze: evolueer je,
  // dan krijg je de hele schijf van je evolutie mét de Duel-bonus; weiger je,
  // dan groeit je huidige schijf zoals altijd.
  // "Verslaan óf verdringen" telt allebei als winst — Onverwoestbaar duwt de
  // verdediger van z'n plek zonder KO, en dat is in Duel ook een gewonnen gevecht.
  const attWon = (r.defKO || defRetreat) && !r.attKO && !attRetreat;
  const defWon = (r.attKO || attRetreat) && !r.defKO && !defRetreat;
  if (attWon) { if (!(await vraagEvolutie(att))) levelUp(att); }
  if (defWon) { if (!(await vraagEvolutie(def))) levelUp(def); }

  if (r.defKO && !r.attKO && att.node) {
    if (NODES[att.node].type==='goal' && NODES[att.node].owner !== att.owner) { endMatch(att.owner, 'goal'); return; }
  }
  state.locked = false;
  afterAction();
}

function purpleOutcome(effect, onDef) {
  const o = { attKO:false, defKO:false, statusOnAtt:null, statusOnDef:null, attBench:false, defBench:false };
  const hitKO = () => { if (onDef) o.defKO = true; else o.attKO = true; };
  const hitBench = () => { if (onDef) o.defBench = true; else o.attBench = true; };
  const hitSt = (st) => { if (onDef) o.statusOnDef = st; else o.statusOnAtt = st; };
  if (effect === 'knockout') hitKO();
  else if (effect === 'bench' || effect === 'benchwait') { hitBench(); if (effect === 'benchwait') hitSt('wait'); }
  else hitSt(effect || 'confusion');
  return o;
}

function whiteWinEffect(slot, onDef, o) {
  if (slot.effect === 'bench' || slot.effect === 'benchwait') {
    if (onDef) o.defBench = true; else o.attBench = true;
    if (slot.effect === 'benchwait') { if (onDef) o.statusOnDef = 'wait'; else o.statusOnAtt = 'wait'; }
    return;
  }
  if (onDef) o.defKO = true; else o.attKO = true;
}

function resolve(a, d) {
  const o = { attKO:false, defKO:false, statusOnAtt:null, statusOnDef:null, attBench:false, defBench:false }; const A = a.k, D = d.k;
  if (A==='red' && D==='red') return o; if (A==='blue' && D==='blue') return o; if (A==='red' && D==='blue') return o; if (D==='red' && A==='blue') return o;
  // Splash / 0-schade: vs Miss gebeurt er niets
  if (A==='red' && (D==='white' || D==='gold')) {
    if ((d.v || 0) <= 0 && !d.effect) return o;
    whiteWinEffect(d, false, o); return o;
  }
  if (D==='red' && (A==='white' || A==='gold')) {
    if ((a.v || 0) <= 0 && !a.effect) return o;
    whiteWinEffect(a, true, o); return o;
  }
  if (A==='red' && D==='purple') return purpleOutcome(d.effect, false);
  if (D==='red' && A==='purple') return purpleOutcome(a.effect, true);
  if (A==='blue' && (D==='white' || D==='purple')) return o; if (D==='blue' && (A==='white' || A==='purple')) return o;
  if (A==='blue' && D==='gold') { o.attKO = true; return o; } if (D==='blue' && A==='gold') { o.defKO = true; return o; }
  if (A==='gold' && D==='purple') { o.defKO = true; return o; } if (D==='gold' && A==='purple') { o.attKO = true; return o; }
  if (A==='purple' && D==='white') return purpleOutcome(a.effect, true);
  if (D==='purple' && A==='white') return purpleOutcome(d.effect, false);
  if (A==='purple' && D==='purple') {
    const aS = a.stars||1, dS = d.stars||1;
    if (aS > dS) return purpleOutcome(a.effect, true);
    if (dS > aS) return purpleOutcome(d.effect, false);
    return o;
  }
  if ((A==='white'||A==='gold') && (D==='white'||D==='gold')) {
    const aV = a.v||0, dV = d.v||0;
    if (aV > dV) whiteWinEffect(a, true, o);
    else if (dV > aV) whiteWinEffect(d, false, o);
  }
  return o;
}

function levelSlotBoost(u, n = 8) {
  for (let k = 0; k < n; k++) {
    const ri = u.slots.findIndex(s => s.k === 'red'); if (ri < 0) return;
    let bestIdx = -1, bestV = -1;
    for (let i = 0; i < u.slots.length; i++) { const s = u.slots[i]; if ((s.k==='white' || s.k==='gold') && s.v > bestV) { bestV = s.v; bestIdx = i; } }
    if (bestIdx < 0) return;
    const copy = {...u.slots[bestIdx]};
    u.slots.splice(ri, 1);
    const insertAt = u.slots.findIndex(s => s.k === copy.k && s.v === copy.v && s.name === copy.name);
    u.slots.splice(insertAt >= 0 ? insertAt : 0, 0, copy);
  }
}

function levelUp(u) {
  if (u.level >= 4) return; u.level++;
  levelSlotBoost(u);
  sfx('levelup');
  if (u.node && NODES[u.node]) queueFX(NODES[u.node].x, NODES[u.node].y, 'level:' + u.level);
  toast(`${unitName(u.defKey)} → Level ${u.level}!`);
}

