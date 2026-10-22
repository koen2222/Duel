// ==========================================
// INZETPOORT (sessie 38)
// Koen wilde een duistere put "waar die monsters uit gekropen komen" en een
// hemelpoort. Die stonden als decor aan de zijkant, maar een figuur verscheen
// gewoon uit het niets op z'n startpunt. Nu scheurt de poort daar open: bij
// jou een lichtzuil met vonken, bij de tegenstander een zwart gat met walm en
// klauwsporen. Het figuur klimt er zichtbaar uit.
// Poorten leven in state.portals en worden bij elke render opnieuw getekend,
// zodat ze het herbouwen van de SVG overleven — net als de kraters.
// ==========================================
function addPortal(node, owner) {
  if (animOff() || !NODES[node]) return;
  state.portals = state.portals || [];
  state.portals.push({ x: NODES[node].x, y: NODES[node].y, owner, born: performance.now() });
  if (state.portals.length > 4) state.portals.shift();
}
const PORTAL_DUUR = 1300;
function drawPortals(svg) {
  const lijst = state.portals || [];
  if (!lijst.length) return;
  const nu = performance.now();
  state.portals = lijst.filter(p => nu - p.born < PORTAL_DUUR);
  for (const p of state.portals) {
    // De poort loopt op CSS-animaties, niet op een teken-lus: de SVG wordt bij
    // elke zet herbouwd en dan zou hij stilstaan. Met een NEGATIEVE vertraging
    // ter grootte van z'n leeftijd pikt hij de animatie op waar hij was.
    const oud = nu - p.born;
    const g = el('g', { class: 'portal portal-' + p.owner, transform: `translate(${p.x},${p.y + 7})` }, svg);
    const anim = (e, naam, duur, delay) => { e.style.animation = `${naam} ${duur}ms ease-out ${(delay || 0) - oud}ms forwards`; return e; };
    const ring = p.owner === 'p1' ? 'rgba(191,219,254,0.95)' : 'rgba(217,70,70,0.9)';
    anim(el('ellipse', { cx:0, cy:0, rx:34, ry:14, fill:'none', stroke:ring, 'stroke-width':4 }, g), 'portalGolf', 900);
    anim(el('ellipse', { cx:0, cy:0, rx:52, ry:21, fill: p.owner === 'p1' ? 'rgba(147,197,253,0.45)' : 'rgba(88,28,135,0.6)' }, g), 'portalPlas', PORTAL_DUUR);
    anim(el('ellipse', { cx:0, cy:0, rx:36, ry:15, fill: p.owner === 'p1' ? 'rgba(219,234,254,0.9)' : '#08040a' }, g), 'portalPlas', PORTAL_DUUR);
    if (p.owner === 'p1') {
      anim(el('path', { d:'M -38 0 L -22 -96 L 22 -96 L 38 0 Z', fill:'url(#gPortalLicht)' }, g), 'portalZuil', PORTAL_DUUR);
      for (let i = 0; i < 10; i++) {
        const a = (i * 36) * Math.PI / 180;
        anim(el('circle', { cx:Math.cos(a) * 30, cy:0, r:3, fill:'#fff' }, g), 'portalVonk', 900, i * 72);
      }
    } else {
      anim(el('ellipse', { cx:0, cy:1, rx:18, ry:7, fill:'#ef4444' }, g), 'portalGloed', PORTAL_DUUR);
      for (let i = 0; i < 6; i++) {
        const a = (i * 61 + 15) * Math.PI / 180;
        anim(el('circle', { cx:Math.cos(a) * 22, cy:0, r:9, fill:'rgba(52,26,66,0.75)' }, g), 'portalWalm', 1100, i * 110);
      }
      for (const dx of [-1, 1]) {
        anim(el('path', { d:`M ${dx * 19} -4 l ${dx * 10} -13`, stroke:'#be3c3c', 'stroke-width':2.6, 'stroke-linecap':'round' }, g), 'portalKlauw', 700, 90);
      }
    }
  }
}

// Het figuur klimt uit de poort omhoog in plaats van er te verschijnen.
function riseUnit(u) {
  return new Promise(res => {
    if (animOff() || !u.node) { res(); return; }
    state.animating = u.uid;
    renderAll();                       // poort tekenen, statisch figuur verbergen
    const svg = document.getElementById('board');
    const n = NODES[u.node];
    const ghost = unitGroup(u, false); ghost.style.transition = 'none'; svg.appendChild(ghost);
    const dur = 480 * (animScale() || 1), t0 = performance.now();
    const ds = depthScale(n.y);
    const frame = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const lift = (1 - e) * 30;
      ghost.setAttribute('transform', `translate(${n.x},${n.y + lift}) scale(${ds.toFixed(3)},${(ds * (0.3 + 0.7 * e)).toFixed(3)})`);
      ghost.setAttribute('opacity', Math.min(1, e * 1.8).toFixed(2));
      if (t < 1) requestAnimationFrame(frame);
      // De SVG kan tussendoor herbouwd zijn (klok, AI); dan is de ghost al weg
      else { if (ghost.parentNode) ghost.parentNode.removeChild(ghost); state.animating = null; renderAll(); res(); }
    };
    requestAnimationFrame(frame);
  });
}

function queueFX(x, y, kind, extra) { (state.pendingFX = state.pendingFX || []).push({ x, y, kind, extra }); }
function flushFX() { const list = state.pendingFX || []; state.pendingFX = []; for (const f of list) spawnFX(f.x, f.y, f.kind, f.extra); }

// Een verslagen figuur verdween met een knal en stond ineens aan de zijlijn.
// Nu zie je z'n ziel in een boog naar het P.C. zweven, zodat je
// begrijpt WAAR hij heen is en dat hij terugkomt.
function zielNaarHC(u, vanNode) {
  if (animOff() || !NODES[vanNode]) return;
  const i = Math.max(0, (state.hc[u.owner] || []).indexOf(u.uid));
  const s = pcSlot(u.owner, i, Math.max(1, (state.hc[u.owner] || []).length));
  queueFX(NODES[vanNode].x, NODES[vanNode].y, 'ziel', { tx: s.x, ty: s.y, owner: u.owner });
}

function spawnZiel(svg, x, y, opt) {
  if (!opt) return;
  const kleur = opt.owner === 'p1' ? '#93c5fd' : '#fca5a5';
  const g = el('g', { class:'zielfx' }, svg);
  // Boogje: halverwege een stuk boven de rechte lijn langs
  const mx = (x + opt.tx) / 2, my = Math.min(y, opt.ty) - 70;
  for (const [k, v] of [['--x0', x], ['--y0', y - 18], ['--xm', mx], ['--ym', my], ['--x1', opt.tx], ['--y1', opt.ty - 10]])
    g.style.setProperty(k, v.toFixed(1) + 'px');
  el('circle', { cx:0, cy:0, r:16, fill:kleur, opacity:0.22 }, g);
  el('circle', { cx:0, cy:0, r:8, fill:kleur, opacity:0.55 }, g);
  el('circle', { cx:0, cy:0, r:4, fill:'#fff' }, g);
  // Sliertjes die achterblijven
  for (let i = 0; i < 3; i++) {
    const s = el('circle', { cx:0, cy:0, r:3.4 - i * 0.8, fill:kleur, opacity:0.5 }, g);
    s.style.animation = `zielSliert 1.05s ease-in-out ${i * 70}ms forwards`;
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1300);
}
// Een figuur dat opklimt verdient meer dan een regeltje tekst: gouden ringen
// die opstijgen, sterren die wegspatten en het nieuwe levelcijfer dat opbloeit.
function spawnLevelUp(svg, x, y, lvl) {
  const g = el('g', { class:'lvlfx', transform:`translate(${x},${y})` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = `${naam} ${duur}ms ease-out ${delay || 0}ms forwards`; return e; };
  zet(el('ellipse', { cx:0, cy:8, rx:40, ry:17, fill:'rgba(253,224,71,0.28)' }, g), 'lvlPlas', 700);
  for (let i = 0; i < 4; i++) {
    zet(el('ellipse', { cx:0, cy:8, rx:36, ry:15, fill:'none', stroke:'#fde047', 'stroke-width':4 }, g), 'lvlRing', 950, i * 150);
  }
  for (let i = 0; i < 10; i++) {
    const a = (i * 36) * Math.PI / 180;
    zet(el('path', { d:'M 0 -11 L 3 -3 L 11 0 L 3 3 L 0 11 L -3 3 L -11 0 L -3 -3 Z', fill:'#fff7d6' }, g), 'lvlSter', 850, i * 40);
    g.lastChild.style.setProperty('--a', (i * 36) + 'deg');
  }
  const t = el('text', { x:0, y:-52, 'font-size':28, 'text-anchor':'middle', fill:'#fde047',
    'font-family':"'Fredoka', sans-serif", 'font-weight':'900', stroke:'#3b2a12', 'stroke-width':1.6,
    'paint-order':'stroke' }, g);
  t.textContent = 'LV ' + lvl;
  zet(t, 'lvlTekst', 1300, 120);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1500);
}

// Het doel bereiken is HET moment van het potje. Dat mag je zien: het doel
// barst open met stralen, ringen en een regen van vonken.
function spawnGoal(svg, x, y, winner) {
  const g = el('g', { class:'goalfx', transform:`translate(${x},${y})` }, svg);
  const kleur = winner === 'p1' ? '#93c5fd' : '#fca5a5';
  const zet = (e, naam, duur, delay) => { e.style.animation = `${naam} ${duur}ms ease-out ${delay || 0}ms forwards`; return e; };
  zet(el('circle', { cx:0, cy:0, r:30, fill:'#fff' }, g), 'goalFlits', 700);
  for (let i = 0; i < 14; i++) {
    const a = i * (360 / 14);
    // De draaiing zit in een wrapper-<g>; de straal zelf schaalt alleen uit
    // z'n voet omhoog. Zo hoeft de CSS geen transform-origin in bord-
    // coördinaten te raden (die verwijst bij SVG naar de viewBox, niet naar
    // het punt waar de groep staat).
    const wrap = el('g', { transform:`rotate(${a})` }, g);
    zet(el('path', { class:'goal-straal', d:'M -5 0 L 0 -120 L 5 0 Z', fill:kleur, opacity:0.85 }, wrap), 'goalStraal', 1100, i * 22);
  }
  for (let i = 0; i < 4; i++) {
    zet(el('circle', { cx:0, cy:0, r:26, fill:'none', stroke:'#fde047', 'stroke-width':5 }, g), 'goalRing', 1200, i * 170);
  }
  for (let i = 0; i < 16; i++) {
    const a = i * 22.5;
    const v = el('circle', { cx:0, cy:0, r:4, fill: i % 2 ? '#fde047' : '#fff' }, g);
    v.style.setProperty('--a', a + 'deg');
    zet(v, 'goalVonk', 1000, 120 + i * 25);
  }
  const t = el('text', { x:0, y:-58, 'font-size':34, 'text-anchor':'middle', fill:'#fde047',
    'font-family':"'Fredoka', sans-serif", 'font-weight':'900', stroke:'#2a1a06', 'stroke-width':2,
    'paint-order':'stroke' }, g);
  t.textContent = tr('DOEL!', 'GOAL!');
  zet(t, 'goalTekst', 1600, 200);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1900);
}

// Omsingeld: geen vrij buurpunt meer én een vijand ernaast, dus direct KO —
// zonder gevecht, zonder draaischijf. Dat is de meest eigenzinnige regel van
// Duel en die verdient z'n eigen beeld: acht punten die van alle kanten naar
// binnen schieten en dichtklappen, met een ring die meekrimpt.
function spawnOmsingeld(svg, x, y) {
  // Iets omhoog: het figuur staat mét z'n voeten op het punt, dus het
  // midden van z'n lijf ligt hoger dan de knoop zelf.
  const g = el('g', { class:'omfx', transform:`translate(${x},${y - 22})` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = `${naam} ${duur}ms cubic-bezier(.55,0,.35,1) ${delay || 0}ms forwards`; return e; };
  // Ring die dichtklapt
  zet(el('circle', { cx:0, cy:0, r:42, fill:'none', stroke:'#fca5a5', 'stroke-width':4, 'stroke-dasharray':'7 6' }, g), 'omRing', 520);
  // Punten die van alle kanten naar binnen schieten
  for (let i = 0; i < 8; i++) {
    const a = i * 45;
    const wrap = el('g', { transform:`rotate(${a})` }, g);
    const p = el('path', { class:'om-punt', d:'M 0 -54 L 5.5 -72 L -5.5 -72 Z', fill:'#ef4444' }, wrap);
    zet(p, 'omPunt', 460, i * 18);
  }
  // Klap op het moment dat alles samenkomt
  zet(el('circle', { cx:0, cy:0, r:9, fill:'#fff' }, g), 'omKlap', 420, 430);
  zet(el('circle', { cx:0, cy:0, r:16, fill:'none', stroke:'#fecaca', 'stroke-width':5 }, g), 'omGolf', 500, 470);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1100);
}

// Evolueren is de grootste verandering die een figuur kan doormaken, dus dat
// mag je zien: een kolom licht die uit de grond omhoog schiet, ringen die
// meestijgen en sterren die eruit spatten.
function spawnEvolutie(svg, x, y, owner) {
  const kleur = owner === 'p1' ? '#93c5fd' : '#fca5a5';
  const g = el('g', { class:'evofx', transform:`translate(${x},${y})` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = `${naam} ${duur}ms ease-out ${delay || 0}ms forwards`; return e; };
  zet(el('ellipse', { cx:0, cy:7, rx:34, ry:14, fill:kleur, opacity:0.5 }, g), 'evoPlas', 900);
  // lichtkolom
  zet(el('path', { class:'evo-kolom', d:'M -22 8 L -13 -96 L 13 -96 L 22 8 Z', fill:'url(#gEvoLicht)' }, g), 'evoKolom', 1000);
  for (let i = 0; i < 3; i++) {
    zet(el('ellipse', { cx:0, cy:7, rx:30, ry:12, fill:'none', stroke:kleur, 'stroke-width':3.5 }, g), 'evoRing', 950, i * 190);
  }
  for (let i = 0; i < 10; i++) {
    const a = i * 36;
    const s = el('path', { d:'M 0 -9 L 2.6 -2.6 L 9 0 L 2.6 2.6 L 0 9 L -2.6 2.6 L -9 0 L -2.6 -2.6 Z', fill:'#fff7d6' }, g);
    s.style.setProperty('--a', a + 'deg');
    zet(s, 'evoSter', 900, 120 + i * 32);
  }
  zet(el('circle', { cx:0, cy:-18, r:14, fill:'#ffffff' }, g), 'evoFlits', 620, 380);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1500);
}

// Een ability die afgaat: een gekleurde golf die van het punt af rolt. Kort en
// klein, want dit gebeurt vaak — het mag opvallen zonder in de weg te zitten.
function spawnAura(svg, x, y, soort) {
  const kleur = soort === 'raise' ? '#a78bfa' : '#7dd3fc';
  const g = el('g', { class:'aurafx', transform:`translate(${x},${y})` }, svg);
  for (let i = 0; i < 3; i++) {
    const r = el('ellipse', { cx:0, cy:6, rx:20, ry:8, fill:'none', stroke:kleur, 'stroke-width':3 }, g);
    r.style.animation = `auraGolf 780ms ease-out ${i * 150}ms forwards`;
    r.style.transformBox = 'fill-box'; r.style.transformOrigin = 'center';
  }
  const ster = el('path', { d:'M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z', fill:kleur }, g);
  ster.style.transformBox = 'fill-box'; ster.style.transformOrigin = 'center';
  ster.setAttribute('transform', 'translate(0,-34)');
  ster.style.animation = 'auraSter 900ms ease-out forwards';
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1200);
}

function spawnFX(x, y, kind, extra) {
  if (animOff()) return;
  const svg = document.getElementById('board');
  if (kind === 'omsingeld') { spawnOmsingeld(svg, x, y); return; }
  if (kind.startsWith('evolutie:')) { spawnEvolutie(svg, x, y, kind.slice(9)); return; }
  if (kind.startsWith('aura:')) { spawnAura(svg, x, y, kind.slice(5)); return; }
  if (kind.startsWith('inslag:')) { spawnImpact(svg, x, y, kind.slice(7)); return; }
  if (kind.startsWith('level:')) { spawnLevelUp(svg, x, y, kind.slice(6)); return; }
  if (kind.startsWith('goal:')) { spawnGoal(svg, x, y, kind.slice(5)); return; }
  if (kind === 'ziel') { spawnZiel(svg, x, y, extra); return; }
  const g = el('g', {}, svg);
  const n = kind === 'poof' ? 4 : 7;
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const col = kind === 'poof' ? 'rgba(210,210,225,0.85)' : (i % 2 ? '#fde047' : '#f87171');
    const c = el('circle', { cx: x + Math.cos(a) * 6, cy: y + Math.sin(a) * 4, r: kind === 'poof' ? 2.2 : 3, fill: col }, g);
    c.style.transformBox = 'fill-box'; c.style.transformOrigin = 'center';
    c.style.animation = (kind === 'poof' ? 'fxPoof .4s' : 'fxBurst .55s') + ' ease-out forwards';
    c.style.animationDelay = (i * 0.02) + 's';
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 800);
}

function renderAll() { renderBoard(); renderBench(); renderPC(); renderPlateCards(); renderTurnBanner(); renderPlates(); flushFX(); }

// Tik = actie, vasthouden (450 ms) = figuur-info. Werkt met muis én aanraking;
// bewegen tijdens het vasthouden annuleert, zodat scrollen niet per ongeluk de
// info-kaart opent.
function bindUnitGestures(g, uid, onTap) {
  let timer = null, longFired = false, sx = 0, sy = 0;
  const start = (e) => {
    longFired = false;
    const p = e.touches ? e.touches[0] : e;
    sx = p.clientX; sy = p.clientY;
    timer = setTimeout(() => { longFired = true; Audio_.buzz(20); showUnitInfo(uid); }, 450);
  };
  const move = (e) => {
    if (!timer) return;
    const p = e.touches ? e.touches[0] : e;
    if (Math.abs(p.clientX - sx) > 12 || Math.abs(p.clientY - sy) > 12) { clearTimeout(timer); timer = null; }
  };
  const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
  g.addEventListener('pointerdown', start);
  g.addEventListener('pointermove', move);
  g.addEventListener('pointerup', cancel);
  g.addEventListener('pointercancel', cancel);
  g.addEventListener('pointerleave', cancel);
  g.addEventListener('click', e => {
    e.stopPropagation(); cancel();
    if (longFired) { longFired = false; return; }   // lang indrukken telt niet als tik
    (onTap || (() => onUnitTap(uid)))();
  });
}

function onBenchTap(uid) {
  if (state.over || state.locked || !magHandelen()) return; const u = state.units[uid];
  if (state.pendingPlate && state.pendingPlate.stage === 1 && state.pendingPlate.key === 'longthrow') {
    if (u.owner !== state.turn) { sfx('denied'); return; }
    if (u.status.includes('wait')) { sfx('denied'); toast(tr('Die heeft nog Wacht', 'That one still has Wait')); return; }
    if (!state.bench[state.turn].includes(uid)) { sfx('denied'); return; }
    state.pendingPlate.uid = uid; state.pendingPlate.stage = 2;
    state.legalTargets = longThrowTargets(state.turn);
    toast(tr('Verworp: kies een vak naast je entry', 'Long Toss: pick a point next to your entry'));
    renderAll(); return;
  }
  if (state.pendingPlate && state.pendingPlate.stage === 1 && state.pendingPlate.key === 'clearwait') {
    if (u.owner === state.turn && u.status.includes('wait')) { usePlate(state.turn, state.pendingPlate.idx, uid); return; }
  }
  if (state.pendingPlate && state.pendingPlate.stage === 2 && state.pendingPlate.key === 'pokeswitch') {
    if (u.owner === state.turn && state.bench[state.turn].includes(uid) && !u.status.includes('wait')) {
      usePlate(state.turn, state.pendingPlate.idx, uid); return;
    }
  }
  if (u.owner !== state.turn) { sfx('denied'); hint('Dit is niet jouw figuur'); return; }
  if (u.status.includes('wait')) { sfx('denied'); toast(tr(`${unitName(u.defKey)} herstelt nog — vanaf je volgende beurt inzetbaar`, `${unitName(u.defKey)} is still recovering — ready from your next turn`)); return; }
  if (state.actionsLeft <= 0) { sfx('denied'); hint(tr('Je hebt je zet al gedaan — tik op Einde beurt', 'You already moved — tap End turn')); return; }

  if (state.pendingDeploy === uid) { state.pendingDeploy = null; state.legalTargets = new Set(); }
  else {
    state.selected = null; state.pendingDeploy = uid; state.legalTargets = deployTargets(u);
    if (state.legalTargets.size === 0) { state.pendingDeploy = null; sfx('denied'); toast(tr('Je entry-punten zijn geblokkeerd — maak er eerst één vrij', 'Your entry points are blocked — free one first')); }
    else { sfx('select'); hint(`Inzetten kost 1 MP; met de rest mag ${unitName(u.defKey)} meteen doorlopen`); }
  }
  renderAll();
}

function onNodeTap(nodeKey) {
  if (state.over || state.locked || !state.legalTargets.has(nodeKey) || !magHandelen()) return;
  if (state.pendingPlate && state.pendingPlate.stage === 2) { usePlate(state.turn, state.pendingPlate.idx, state.pendingPlate.uid, nodeKey); return; }
  if (state.pendingPlate) return;
  if (state.pendingDeploy) {
    state.locked = true; const uid = state.pendingDeploy; const u = state.units[uid];
    meldZet({ t: 'inzet', uid, punt: nodeKey });
    state.pendingDeploy = null; state.legalTargets = new Set();
    doDeploy(u, nodeKey).then(() => { state.actionsLeft--; state.locked = false; afterAction(); });
    return;
  }
  if (state.selected) {
    state.locked = true; 
    const u = state.units[state.selected];
    meldZet({ t: 'zet', uid: u.uid, punt: nodeKey });
    const targetUnit = unitAt(nodeKey);

    if (targetUnit && targetUnit.owner !== u.owner) {
      const standNode = standplaatsVoor(u, nodeKey);
      if (!standNode) { state.locked = false; return; }
      if (standNode !== u.node) { moveUnit(u, standNode).then(() => { state.actionsLeft--; runCombat(u, targetUnit); }); }
      else { state.actionsLeft--; runCombat(u, targetUnit); }
      return;
    }

    moveUnit(u, nodeKey).then(() => { 
      const goal = NODES[nodeKey]; if (goal.type==='goal' && goal.owner !== u.owner) { endMatch(u.owner, 'goal'); return; } 
      state.selected = null; state.legalTargets = new Set(); state.actionsLeft--; state.locked = false; afterAction(); 
    });
  }
}

function moveUnit(u, end) {
  return new Promise(res => {
    const path = bfs(u.node, end, canPhase(u));
    if (!path || path.length < 2) { u.node = end; renderAll(); res(); return; }
    if (animOff()) { u.node = path[path.length - 1]; renderAll(); res(); return; }
    state.animating = u.uid;
    renderAll(); // één keer: statische figuur verbergen, daarna alleen de ghost bewegen
    const svg = document.getElementById('board');
    const shadow = el('ellipse', { cx:0, cy:0, rx:21, ry:7.5, fill:'rgba(0,0,0,0.45)' }, svg);
    const ghost = unitGroup(u, false); ghost.style.transition = 'none'; svg.appendChild(ghost);
    let seg = 0;
    const hopOne = () => {
      const A = NODES[path[seg]], B = NODES[path[seg + 1]];
      const dur = 250 * (animScale() || 1);
      sfx('hop');
      let t = 0, last = performance.now();
      const frame = (now) => {
        // Tijdstap klemmen: bij haperende frames vertraagt de sprong i.p.v. overslaan
        t = Math.min(1, t + Math.min((now - last) / dur, 0.16));
        last = now;
        const gx = A.x + (B.x - A.x) * t, gy = A.y + (B.y - A.y) * t;   // grondpositie
        const lift = Math.sin(Math.PI * t) * 24;                          // boogje
        const ds = depthScale(gy);                                        // dieper op het bord = kleiner
        let sy = 1, sx = 1;
        if (t > 0.88) { const k = (t - 0.88) / 0.12; sy = 1 - 0.14 * k; sx = 1 + 0.09 * k; } // landing-squash
        ghost.setAttribute('transform', `translate(${gx},${gy - lift}) scale(${(sx*ds).toFixed(3)},${(sy*ds).toFixed(3)})`);
        const sh = (1 - (lift / 24) * 0.45) * ds;                          // schaduw krimpt op het hoogste punt
        shadow.setAttribute('cx', gx); shadow.setAttribute('cy', gy + 11 * ds);
        shadow.setAttribute('rx', 21 * sh); shadow.setAttribute('ry', 7.5 * sh);
        shadow.setAttribute('fill', `rgba(0,0,0,${0.45 * (0.55 + 0.45 * sh)})`);
        if (t < 1) requestAnimationFrame(frame);
        else {
          spawnFX(B.x, B.y + 9, 'poof');
          u.node = path[seg + 1]; seg++;
          if (seg < path.length - 1) hopOne();
          else {
            // Ook hier kan de SVG tussendoor herbouwd zijn
            if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
            if (shadow.parentNode) shadow.parentNode.removeChild(shadow);
            state.animating = null; renderAll(); res();
          }
        }
      };
      requestAnimationFrame(frame);
    };
    hopOne();
  });
}

function bfs(start, end, phase) {
  const q = [[start]], seen = new Set([start]);
  while (q.length) { const p = q.shift(); const last = p[p.length-1]; if (last === end) return p; for (const n of ADJ[last]) { if (seen.has(n)) continue; if (n !== end && unitAt(n) && !phase) continue; seen.add(n); q.push([...p, n]); } } return null;
}

function onUnitTap(uid) {
  if (state.over || state.locked) return; const u = state.units[uid];
  if (!magHandelen()) { if (u.node) showUnitInfo(uid); return; }   // online: de tegenstander is aan zet
  if (state.pendingPlate && state.pendingPlate.stage === 1) {
    if (u.node && state.legalTargets.has(u.node)) {
      const pp = state.pendingPlate;
      if (pp.key === 'hurdle') {
        // Sprong: over een AANGRENZENDE figuur heen naar het punt erachter
        pp.uid = uid; pp.stage = 2;
        const over = new Set();
        for (const n of ADJ[u.node]) {
          if (!unitAt(n)) continue;                      // je springt alleen over iemand heen
          for (const beyond of ADJ[n]) {
            if (beyond === u.node || unitAt(beyond)) continue;
            // moet in dezelfde richting liggen, dus niet terug naar je startpunt
            over.add(beyond);
          }
        }
        state.legalTargets = over;
        if (!over.size) { state.pendingPlate = null; state.legalTargets = new Set(); toast(tr('Er staat niemand om overheen te springen', 'Nobody to jump over')); }
        else toast(tr('Sprong: kies waar hij landt', 'Leap: pick where it lands'));
        renderAll(); return;
      }
      if (pp.key === 'swapspot') {
        // Stellingwissel: kies de tweede eigen figuur
        pp.uid = uid; pp.stage = 2;
        state.legalTargets = new Set(Object.values(state.units)
          .filter(o => o.owner === state.turn && o.node && o.uid !== uid).map(o => o.node));
        if (!state.legalTargets.size) { state.pendingPlate = null; state.legalTargets = new Set(); toast(tr('Je hebt maar één figuur op het veld', 'You only have one figure on the field')); }
        else toast(tr('Stellingwissel: kies de tweede figuur', 'Swap Spots: pick the second figure'));
        renderAll(); return;
      }
      if (pp.key === 'pokeswitch') {
        pp.uid = uid; pp.stage = 2;
        state.legalTargets = new Set();
        toast(tr('Wisselplaats: kies een figuur op je zijlijn', 'Bench Swap: pick a figure on your bench'));
        renderAll(); return;
      }
      if (pp.key === 'clearwait') {
        if (!u.status.includes('wait')) { toast(tr('Dit figuur heeft geen Wacht', 'This figure does not have Wait')); return; }
        usePlate(state.turn, pp.idx, uid); return;
      }
      usePlate(state.turn, pp.idx, uid); return;
    }
    toast(tr('Ongeldig doelwit', 'Invalid target')); return;
  }
  // Tweede stap van Stellingwissel: de andere eigen figuur aantikken
  if (state.pendingPlate && state.pendingPlate.stage === 2 && state.pendingPlate.key === 'swapspot') {
    if (u.node && state.legalTargets.has(u.node)) { usePlate(state.turn, state.pendingPlate.idx, uid); return; }
    toast(tr('Kies een van je eigen figuren', 'Pick one of your own figures')); return;
  }
  if (u.owner === state.turn && u.node) {
    if (state.actionsLeft<=0) { hint(tr('Je hebt je zet al gedaan — tik op Einde beurt', 'You already moved — tap End turn')); sfx('denied'); return; }
    if (u.status.includes('wait')) { hint(`${unitName(u.defKey)} heeft Wacht — overgeslagen tot na deze beurt`); sfx('denied'); return; }
    if (u.status.includes('sleep')) { hint(`${unitName(u.defKey)} slaapt — zet een bondgenoot ernaast om hem te wekken`); sfx('denied'); return; }
    state.pendingDeploy = null; state.selected = (state.selected===uid) ? null : uid;
    state.legalTargets = state.selected ? legalMoves(u) : new Set();
    if (state.selected) {
      sfx('select');
      if (state.legalTargets.size === 0) hint(`${unitName(u.defKey)} kan nergens heen — alle buurpunten zijn bezet`);
      else if (S('showHints')) hint(unitHint(u));
    }
    renderAll(); return;
  }
  if (u.owner !== state.turn && u.node) {
    if (state.selected && state.legalTargets.has(u.node)) { onNodeTap(u.node); return; }
    // Niets geselecteerd? Dan wil je die vijand waarschijnlijk bekíjken (Duel-gewoonte)
    if (!state.selected) { showUnitInfo(uid); return; }
    sfx('denied');
    hint('Te ver weg — deze vijand ligt buiten het bereik van je figuur');
  }
}

// Hint-regel (respecteert de instelling "Hints tonen"); waarschuwingen die je
// écht moet zien lopen gewoon via toast().
function hint(msg) { if (S('showHints') && msg) toast(msg); }

