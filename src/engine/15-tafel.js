// ===== Plates als KAARTEN op tafel (Duel-look) =====
// In Duel liggen je support-kaarten rechtsonder naast het veld. Hier tekenen we
// ze in de bord-SVG zelf, licht gewaaierd, met het icoon en de naam erop.
function renderPlateCards() {
  const svg = document.getElementById('board');
  const player = kijkVanuitP1() ? 'p1' : state.turn;
  const foe = player === 'p1' ? 'p2' : 'p1';
  renderFoeCards(svg, (state.plates[foe] || []).length);
  const plates = state.plates[player] || [];
  const g = el('g', { class:'plate-cards' }, svg);
  const n = plates.length;
  const CW = 40, CH = 56, BY = 796;
  // De waaier schaalt mee met het aantal kaarten (je mag er nu tot acht hebben)
  // en blijft altijd binnen de rechterhelft van het bord.
  const step = n <= 1 ? 0 : Math.min(30, 108 / (n - 1));
  const BX = 452 - ((n - 1) * step) / 2;
  plates.forEach((key, i) => {
    const p = PLATES[key];
    const sel = state.pendingPlate && state.pendingPlate.idx === i;
    // Waaier: van -11° links naar +11° rechts, midden iets omhoog
    const rot = n <= 1 ? 0 : -11 + (22 * i) / (n - 1);
    const dx = i * step, dy = -Math.abs((n - 1) / 2 - i) * 3;
    const card = el('g', {
      class: 'plate-card' + (sel ? ' sel' : '') + (state.plateUsed ? ' spent' : ''),
      transform: `translate(${BX + dx},${BY + dy}) rotate(${rot})`,
      style: 'cursor:pointer;'
    }, g);
    el('rect', { x:-CW/2+2, y:-CH/2+4, width:CW, height:CH, rx:7, fill:'rgba(0,0,0,0.45)' }, card);
    el('rect', { x:-CW/2, y:-CH/2, width:CW, height:CH, rx:7, fill:'url(#gCardFace)', stroke: sel ? '#fde047' : 'rgba(255,220,170,0.85)', 'stroke-width': sel ? 3 : 1.8 }, card);
    el('rect', { x:-CW/2+3.5, y:-CH/2+3.5, width:CW-7, height:CH-7, rx:5, fill:'none', stroke:'rgba(255,255,255,0.22)', 'stroke-width':1 }, card);
    // Icoon van de plate, midden op de kaart
    const ico = document.createElementNS(SVG_NS, 'g');
    const isz = n <= 4 ? 20 : 24;
    ico.setAttribute('transform', `translate(${-isz/2},${n <= 4 ? -22 : -isz/2 - 2})`);
    ico.innerHTML = plateIcon(key, isz);
    card.appendChild(ico);
    // Bij een volle hand overlappen de kaarten te veel voor een leesbare naam;
    // dan alleen het icoon. De namen staan toch in de strip onder het bord.
    if (n <= 4) {
      const t = el('text', { x:0, y:18, 'font-size':6.6, 'text-anchor':'middle', fill:'#3b2a12', 'font-family':"'Fredoka', sans-serif", 'font-weight':'700' }, card);
      t.textContent = plateName(key).length > 10 ? plateName(key).slice(0, 9) + '.' : plateName(key);
    }
    card.addEventListener('click', (e) => { e.stopPropagation(); onPlateTap(i); });
  });
}

function renderBench() {
  const svg = document.getElementById('board');
  for (const player of ['p1','p2']) {
    const gRow = el('g', { class:`bench-row bench-${player}` }, svg);
    const dim = state.turn !== player && !state.over;
    const uids = [...state.bench[player]];
    for (let i = uids.length; i < BENCH_PER_ROW * 2; i++) {
      const s = benchSlot(player, i);
      el('ellipse', { cx:s.x, cy:s.y, rx:20*s.scale, ry:9.5*s.scale, fill:'none', stroke:'rgba(255,255,255,0.30)', 'stroke-width':2 }, gRow);
    }
    uids.forEach((uid, i) => {
      const u = state.units[uid];
      const s = benchSlot(player, i);
      const x = s.x, y = s.y, scale = s.scale;
      const waiting = u.status.includes('wait');
      const g = unitGroup(u);
      g.setAttribute('class', 'unit-fig bench-fig' + (state.pendingDeploy === uid ? ' selected' : ''));
      g.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
      if (waiting) { g.setAttribute('opacity', '0.35'); g.setAttribute('filter', 'grayscale(1)'); }
      else if (dim) g.setAttribute('opacity', '0.6');
      el('circle', { cx:-15, cy:-44, r:8, fill:'#fbbf24', stroke:'#fff', 'stroke-width':1.5 }, g);
      const t = el('text', { x:-15, y:-40.5, 'font-size':10.5, 'text-anchor':'middle', fill:'#000', 'font-weight':'900', 'font-family':'sans-serif' }, g); t.textContent = UNIT_DEFS[u.defKey].mp;
      bindUnitGestures(g, uid, () => onBenchTap(uid));
      gRow.appendChild(g);
    });
  }
}

function pcSlot(player, i, n) {
  const isP1 = player === 'p1';
  const cx = isP1 ? 72 : 470, cy = isP1 ? 790 : 70;
  const scale = (isP1 ? 0.78 : 0.66) * (n > 2 ? 0.9 : 1);
  if (n <= 1) return { x: cx, y: cy - 10, scale };
  const spread = Math.min(22, 56 / Math.max(1, n - 1));
  return { x: cx + (i - (n - 1) / 2) * spread, y: cy - 10 + Math.abs(i - (n - 1) / 2) * 3, scale };
}

function renderPC() {
  const svg = document.getElementById('board');
  if (!svg || !state) return;
  for (const player of ['p1', 'p2']) {
    const uids = state.hc[player] || [];
    if (!uids.length) continue;
    const gRow = el('g', { class: `pc-row pc-${player}` }, svg);
    const origin = player === 'p1' ? { x: 72, y: 796 } : { x: 470, y: 76 };
    const lab = el('text', {
      x: origin.x, y: origin.y + (player === 'p1' ? 28 : -22),
      'font-size': 9, 'text-anchor': 'middle', fill: 'rgba(251,207,232,0.9)',
      'font-family': "'Fredoka', sans-serif", 'font-weight': '700', 'letter-spacing': '0.12em'
    }, gRow);
    lab.textContent = t('pc.label');
    uids.forEach((uid, i) => {
      const u = state.units[uid]; if (!u) return;
      const s = pcSlot(player, i, uids.length);
      const g = unitGroup(u);
      g.setAttribute('class', 'unit-fig pc-fig');
      g.setAttribute('transform', `translate(${s.x},${s.y}) scale(${s.scale})`);
      g.setAttribute('opacity', '0.78');
      el('circle', { cx: 14, cy: -42, r: 7.5, fill: '#f472b6', stroke: '#fff', 'stroke-width': 1.4 }, g);
      const plus = el('text', { x: 14, y: -38.5, 'font-size': 11, 'text-anchor': 'middle', fill: '#fff', 'font-weight': '900', 'font-family': 'sans-serif' }, g);
      plus.textContent = '+';
      g.addEventListener('click', e => {
        e.stopPropagation();
        toast(tr(`${unitName(u.defKey)} herstelt in het P.C.`, `${unitName(u.defKey)} is recovering in the P.C.`));
      });
      gRow.appendChild(g);
    });
  }
}

function renderTurnBanner() {
  document.getElementById('turn-banner').className = `turn-banner ${state.turn}`;
  const solo = state.mode === 'solo';
  const p1n = document.getElementById('hud-p1-name');
  const p2n = document.getElementById('hud-p2-name');
  if (p1n) p1n.textContent = t('hud.you');
  if (p2n) p2n.textContent = solo ? 'AI' : isOnline() ? t('hud.red') : t('hud.p2');   // 'Tegenstander' past hier niet
  let name = state.turn === 'p1' ? t('hud.yourTurn') : (solo ? t('hud.ai') : isOnline() ? t('combat.foe') : t('hud.p2'));
  if (state.aiThinking) name = t('hud.aiCalc');
  document.getElementById('turn-name').textContent = name;
  document.getElementById('turn-actions').textContent = `${state.actionsLeft} ${isEn() ? (state.actionsLeft===1?'ACTION':'ACTIONS') : ('ACTIE' + (state.actionsLeft===1?'':'S'))}`;
  const endBtn = document.getElementById('btn-end-turn');
  const bar = document.querySelector('.action-bar');
  if (bar) bar.classList.toggle('auto-end', !!S('autoEndTurn'));
  if (endBtn) endBtn.style.display = S('autoEndTurn') || !magHandelen() ? 'none' : '';
  paintClocks();
}

function renderPlates() {
  const div = document.getElementById('plate-strip'); div.innerHTML = '';
  const player = kijkVanuitP1() ? 'p1' : state.turn;
  const plates = state.plates[player] || [];
  // De strip blijft ALTIJD even hoog, ook zonder kaarten. Anders klapt hij bij
  // elke beurtwissel open en dicht en herschaalt het hele bord mee — dat was
  // het 'hij kalibreert steeds'-effect.
  div.style.display = 'flex';
  if (!plates.length) return;
  const mine = player === state.turn && !state.over;
  plates.forEach((key, idx) => {
    const c = document.createElement('div');
    c.className = 'plate-chip' + (state.pendingPlate && state.pendingPlate.idx === idx && mine ? ' selected' : '') + ((!mine || state.plateUsed) ? ' disabled' : '');
    c.innerHTML = `<div style="display:flex;align-items:center;gap:6px;">${plateIcon(key, 20)}<b>${plateName(key)}</b></div><span>${plateDesc(key)}</span>`;
    c.addEventListener('click', () => { if (mine) onPlateTap(idx); });
    div.appendChild(c);
  });
}

function ownGoalKey(player) {
  return Object.keys(NODES).find(k => NODES[k].type === 'goal' && NODES[k].owner === player);
}
function longThrowTargets(player) {
  const out = new Set();
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== player) continue;
    for (const adj of ADJ[k]) {
      if (!unitAt(adj)) out.add(adj);
    }
  }
  return out;
}

function onPlateTap(idx) {
  if (state.over || state.locked || !magHandelen()) return;
  const player = state.turn;
  if (state.plateUsed) { toast(tr('Al een plate gebruikt deze beurt', 'Already used a plate this turn')); return; }
  if (state.pendingPlate && state.pendingPlate.idx === idx) { state.pendingPlate = null; state.legalTargets = new Set(); renderAll(); return; }
  const key = state.plates[player][idx]; const pl = PLATES[key];
  if (pl.target === 'none') {
    if (key === 'revive' && !state.hc[player].length) { sfx('denied'); toast(tr('Je P.C. is leeg', 'Your P.C. is empty')); return; }
    if (key === 'recycle' && !(state.usedPlates[player] || []).length) { sfx('denied'); toast(tr('Je hebt nog geen kaarten gebruikt', 'You have not used any plates yet')); return; }
    usePlate(player, idx); return;
  }
  if (pl.target === 'bench-then-node') {
    const ready = state.bench[player].filter(uid => !state.units[uid].status.includes('wait'));
    if (!ready.length) { sfx('denied'); toast(tr('Geen figuur op de zijlijn klaar', 'No figure ready on the bench')); return; }
    if (!longThrowTargets(player).size) { sfx('denied'); toast(tr('Geen vrije plek naast je entry', 'No free point next to your entry')); return; }
    state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
    state.legalTargets = new Set();
    toast(tr(`${plateName(key)}: kies een figuur op je zijlijn`, `${plateName(key)}: pick a figure on your bench`));
    renderAll(); return;
  }
  if (pl.target === 'wait') {
    const waiters = Object.values(state.units).filter(u => u.owner === player && u.status.includes('wait') && !state.hc[player].includes(u.uid));
    if (!waiters.length) { sfx('denied'); toast(tr('Niemand heeft Wacht', 'Nobody has Wait')); return; }
    state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
    state.legalTargets = new Set(waiters.filter(u => u.node).map(u => u.node));
    toast(tr(`${plateName(key)}: kies een figuur met Wacht`, `${plateName(key)}: pick a figure with Wait`));
    renderAll(); return;
  }
  if (pl.target === 'ally-then-bench') {
    const field = Object.values(state.units).filter(u => u.owner === player && u.node);
    if (!field.length) { sfx('denied'); toast(tr('Geen figuur op het veld', 'No figure on the field')); return; }
    if (!state.bench[player].length) { sfx('denied'); toast(tr('Je zijlijn is leeg', 'Your bench is empty')); return; }
  }
  if (key === 'goalblock') {
    const g = ownGoalKey(player);
    if (!g || unitAt(g)) { sfx('denied'); toast(tr('Je doel is bezet', 'Your goal is occupied')); return; }
  }
  state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
  state.legalTargets = new Set();
  for (const u of Object.values(state.units)) {
    if (!u.node) continue;
    if ((pl.target === 'enemy' && u.owner !== player) || ((pl.target === 'ally' || pl.target === 'ally-then-node' || pl.target === 'ally-then-ally' || pl.target === 'ally-then-bench' || pl.target === 'wait') && u.owner === player)) state.legalTargets.add(u.node);
  }
  if (state.legalTargets.size === 0 && pl.target !== 'wait') { state.pendingPlate = null; toast(tr('Geen geldig doelwit', 'No valid target')); renderAll(); return; }
  toast(tr(`${plateName(key)}: kies doelwit`, `${plateName(key)}: pick a target`)); renderAll();
}

