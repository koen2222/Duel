// ==========================================
// KAARTANIMATIE (sessie 37)
// Koen: "alles moet een soort animatie hebben, dat geldt dus ook voor de
// kaarten." Een kaart verdwijnt dus niet stilletjes uit je hand: hij vliegt
// naar voren, licht op met z'n eigen kleur, en spat uiteen op het doelwit.
// ==========================================
// Waar ligt de kaart nu? Bij jezelf is dat de waaier rechtsonder, bij de
// tegenstander het stapeltje met de rug omhoog linksboven.
function kaartBronRect(player, idx) {
  const kijker = kijkVanuitP1() ? 'p1' : state.turn;
  if (player === kijker) {
    const lijst = document.querySelectorAll('#board g.plate-card');
    const e = lijst[idx] || lijst[lijst.length - 1];
    return e ? e.getBoundingClientRect() : null;
  }
  const g = document.querySelector('#board g.foe-cards');
  return g ? g.getBoundingClientRect() : null;
}
// Waar landt hij? Op het punt waar de kaart z'n werk doet: het vak waar het
// figuur naartoe gaat, anders het vak waar het nu staat, anders het bord.
function kaartDoelRect(u, node) {
  const plek = node || (u && u.node);
  if (plek) {
    const e = document.querySelector(`#board [data-node="${plek}"]`);
    if (e) return e.getBoundingClientRect();
  }
  const b = document.getElementById('board');
  return b ? b.getBoundingClientRect() : null;
}

function kaartInslag(laag, x, y, kleur) {
  const g = document.createElement('div');
  g.className = 'kaart-inslag';
  g.style.left = x + 'px'; g.style.top = y + 'px';
  g.style.setProperty('--kk', kleur);
  g.innerHTML = '<i class="ki-ring"></i>' + Array.from({ length: 10 },
    (_, i) => `<i class="ki-vonk" style="--a:${i * 36}deg; animation-delay:${i * 12}ms"></i>`).join('');
  laag.appendChild(g);
  setTimeout(() => g.remove(), 1000);
}

function speelKaartFx(key, van, naar) {
  if (animOff()) return;
  const laag = document.getElementById('kaart-fx'); const p = PLATES[key];
  if (!laag || !p) return;
  const kleur = (PLATE_ICONS[key] || ['#f59e0b'])[0];
  const R = laag.getBoundingClientRect();
  const mx = R.width / 2, my = R.height * 0.4;
  const pt = (r, val) => r ? { x: r.left - R.left + r.width / 2, y: r.top - R.top + r.height / 2 } : val;
  const start = pt(van, { x: mx, y: R.height * 0.86 });
  const eind  = pt(naar, { x: mx, y: my });
  const krimp = van ? Math.max(0.14, Math.min(0.5, van.width / 132)) : 0.24;

  const kaart = document.createElement('div');
  kaart.className = 'kaart-vlucht';
  kaart.style.setProperty('--kk', kleur);
  kaart.innerHTML = `<div class="kv-glans"></div><div class="kv-ico">${plateIcon(key, 48)}</div>` +
    `<div class="kv-naam">${plateName(key)}</div>`;
  laag.appendChild(kaart);

  const T = animScale() || 1, duur = 1020 * T;
  const zet = (x, y, s, r) => `translate(${x.toFixed(0)}px, ${y.toFixed(0)}px) translate(-50%, -50%) scale(${s}) rotate(${r}deg)`;
  const anim = kaart.animate([
    { transform: zet(start.x, start.y, krimp, -22), opacity: 0.25, offset: 0 },
    { transform: zet(mx, my, 1.08, 3), opacity: 1, offset: 0.3 },
    { transform: zet(mx, my, 1, 0), opacity: 1, offset: 0.66 },
    { transform: zet(eind.x, eind.y, 0.14, 16), opacity: 0, offset: 1 },
  ], { duration: duur, easing: 'cubic-bezier(.3,.05,.3,1)', fill: 'forwards' });
  anim.onfinish = () => kaart.remove();
  setTimeout(() => { if (kaart.isConnected) kaart.remove(); }, duur + 400);
  setTimeout(() => kaartInslag(laag, eind.x, eind.y, kleur), duur * 0.94);
}

function usePlate(player, idx, targetUid, targetNode) {
  meldZet({ t: 'kaart', idx, uid: targetUid || null, punt: targetNode || null, eerste: (state.pendingPlate && state.pendingPlate.uid) || null });
  const key = state.plates[player][idx]; const pl = PLATES[key];
  const u = targetUid ? state.units[targetUid] : null;
  // Meten vóór we het bord opnieuw tekenen — daarna is de kaart weg
  const kaartVan = kaartBronRect(player, idx);
  const kaartNaar = kaartDoelRect(u, targetNode);
  if (key === 'fullheal') { u.status = u.status.filter(s => s === 'wait'); }
  else if (key === 'revive') {
    const back = state.hc[player].shift();
    if (back) { state.units[back].status = []; state.bench[player].push(back); }
  }
  else if (key === 'scoopup') { u.node = null; u.status = u.status.filter(s => s !== 'wait'); state.bench[player].push(u.uid); }
  else if (key === 'swapspot') { const other = state.units[state.pendingPlate.uid]; const a = other.node; other.node = u.node; u.node = a; }
  else if (key === 'hurdle') { state.units[state.pendingPlate.uid].node = targetNode; }
  else if (key === 'longthrow') {
    u.node = targetNode;
    state.bench[player] = state.bench[player].filter(id => id !== u.uid);
  }
  else if (key === 'goalblock') {
    const g = ownGoalKey(player);
    if (g && !unitAt(g)) u.node = g;
  }
  else if (key === 'clearwait') { u.status = u.status.filter(s => s !== 'wait'); }
  else if (key === 'pokeswitch') {
    const field = state.units[state.pendingPlate.uid];
    const spot = field.node;
    field.node = null; state.bench[player].push(field.uid);
    u.node = spot;
    state.bench[player] = state.bench[player].filter(id => id !== u.uid);
  }
  else if (key === 'tropic') {
    for (const fig of Object.values(state.units)) {
      if (fig.owner !== player) continue;
      const fac = UNIT_DEFS[fig.defKey] && UNIT_DEFS[fig.defKey].fac;
      if (fac === 'Gras' || fac === 'Vlieg' || fac === 'Insect') {
        fig.status = fig.status.filter(s => s === 'wait');
      }
    }
  }
  else if (key === 'counter') { state.counterAttack[player] = true; }
  else if (key === 'recycle') { state.usedPlates[player] = (state.usedPlates[player] || []); state.plates[player].push(...state.usedPlates[player]); state.usedPlates[player] = []; }
  else if (pl.fx) { u.fx = u.fx || {}; u.fx[pl.fx] = true; }
  // Kaart is op — bewaren zodat Hergebruik hem kan terughalen
  const [used] = state.plates[player].splice(idx, 1);
  if (key !== 'recycle') { state.usedPlates[player] = state.usedPlates[player] || []; state.usedPlates[player].push(used); }
  state.plateUsed = true; state.pendingPlate = null; state.legalTargets = new Set();
  sfx('plate');
  // Speelt de kaart z'n eigen animatie? Dan is die groot genoeg als melding.
  if (animOff()) toast(tr(`${plateName(key)} gebruikt`, `${plateName(key)} used`));
  renderAll();
  speelKaartFx(key, kaartVan, kaartNaar);
  if (pl.endsTurn) {
    state.actionsLeft = 0;
    afterAction();
  }
}

// Plate-effecten die pas in het GEVECHT gelden. Ze worden hier toegepast op de
// gedraaide vakjes; 'focus' en 'xdefend' grijpen later in op de uitkomst.
function applyPlateFx(u, slot) {
  const fx = u.fx || {};
  let s = { ...slot };
  if (fx.xaccuracy && s.k === 'red') s = { ...s, __shift: true };   // afgehandeld bij het draaien
  if (fx.xspeed && s.k === 'white') s = { ...s, k: 'gold', name: (s.name || 'Aanval') + ' +' };
  if (fx.xattack && (s.k === 'white' || s.k === 'gold')) s = { ...s, v: (s.v || 0) + 30 };
  if (fx.xspatk && s.k === 'purple') s = { ...s, stars: (s.stars || 1) + 2 };
  return s;
}
function clearPlateFx(u) { if (u) u.fx = {}; }

// De inslag zelf, getekend in de bord-SVG op het punt waar de klap valt.
function spawnImpact(svg, x, y, soort) {
  const g = el('g', {}, svg);
  const zet = (n, attrs, anim, delay) => {
    const e = el(n, attrs, g);
    e.style.transformBox = 'fill-box'; e.style.transformOrigin = 'center';
    e.style.animation = anim; if (delay) e.style.animationDelay = delay;
    return e;
  };
  const K = { vuur:'#fb923c', bliksem:'#fde047', gif:'#4ade80', kou:'#7dd3fc',
              klauw:'#f87171', snede:'#f8fafc', hamer:'#cbd5e1', pijl:'#e5e7eb',
              schild:'#60a5fa', magie:'#c084fc' }[soort] || '#fff';

  if (soort === 'bliksem') {
    // Donderschicht die van bovenaf het bord in slaat
    const pad = `M ${x-6} ${y-260} L ${x-16} ${y-120} L ${x+2} ${y-124} L ${x-10} ${y-8} L ${x+18} ${y-140} L ${x-1} ${y-136} L ${x+12} ${y-260}`;
    zet('path', { d:pad, fill:'none', stroke:K, 'stroke-width':7, 'stroke-linejoin':'round',
      filter:'drop-shadow(0 0 8px '+K+')' }, 'fxBolt .5s steps(4) forwards');
    zet('path', { d:pad, fill:'none', stroke:'#fff', 'stroke-width':2.5, 'stroke-linejoin':'round' }, 'fxBolt .5s steps(4) forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'#fff' }, 'fxShock .55s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .7s ease-out forwards', '.06s');
  } else if (soort === 'vuur') {
    // Meteoor die schuin inkomt en inslaat
    zet('path', { d:`M ${x-150} ${y-190} L ${x-18} ${y-14} L ${x-38} ${y-38} Z`, fill:'rgba(251,146,60,0.55)' },
        'fxMeteorTrail .34s ease-in forwards');
    zet('circle', { cx:x, cy:y, r:11, fill:'url(#gMeteor)' }, 'fxMeteor .34s ease-in forwards');
    for (let i = 0; i < 10; i++) {
      const a = (Math.PI * 2 * i) / 10;
      zet('circle', { cx:x + Math.cos(a)*7, cy:y + Math.sin(a)*4, r:3.4, fill: i%2 ? '#fde047' : K },
          'fxBurst .6s ease-out forwards', (0.3 + i*0.015) + 's');
    }
    zet('ellipse', { cx:x, cy:y+5, rx:10, ry:4.5, fill:'none', stroke:K, 'stroke-width':4 }, 'fxShock .8s ease-out forwards', '.3s');
  } else if (soort === 'gif') {
    for (let i = 0; i < 9; i++) {
      const a = (Math.PI * 2 * i) / 9;
      zet('ellipse', { cx:x + Math.cos(a)*6, cy:y + Math.sin(a)*4, rx:4.5, ry:6, fill:K, opacity:0.9 },
          'fxSplat .8s ease-out forwards', (i*0.03) + 's');
    }
    zet('ellipse', { cx:x, cy:y+5, rx:16, ry:7, fill:'rgba(74,222,128,0.35)' }, 'fxPlas 1.6s ease-out forwards');
  } else if (soort === 'kou') {
    for (let i = 0; i < 7; i++) {
      const a = (Math.PI * 2 * i) / 7;
      zet('path', { d:`M ${x} ${y-3} l ${Math.cos(a)*7} ${Math.sin(a)*4-9} l ${Math.cos(a)*5} ${Math.sin(a)*3+9} Z`, fill:K, opacity:0.9 },
          'fxScherfUit .7s ease-out forwards', (i*0.03) + 's');
    }
  } else if (soort === 'klauw' || soort === 'snede') {
    for (let i = 0; i < 3; i++) {
      zet('path', { d:`M ${x-26+i*9} ${y-22} L ${x+16+i*9} ${y+16}`, stroke:K, 'stroke-width':4.5,
        'stroke-linecap':'round', fill:'none' }, 'fxKrasUit .45s ease-out forwards', (i*0.06) + 's');
    }
  } else if (soort === 'pijl') {
    zet('path', { d:`M ${x-120} ${y-46} L ${x-4} ${y-2}`, stroke:K, 'stroke-width':3.5, 'stroke-linecap':'round', fill:'none' },
        'fxPijlIn .3s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+3, rx:7, ry:3, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .5s ease-out forwards', '.25s');
  } else if (soort === 'hamer' || soort === 'schild') {
    zet('ellipse', { cx:x, cy:y+4, rx:9, ry:4, fill:'none', stroke:K, 'stroke-width':5 }, 'fxShock .6s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:9, ry:4, fill:'none', stroke:'#fff', 'stroke-width':2 }, 'fxShock .8s ease-out forwards', '.1s');
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI * 2 * i) / 6;
      zet('rect', { x:x + Math.cos(a)*8, y:y + Math.sin(a)*5, width:5, height:5, fill:'#8a7f6d' },
          'fxBurst .55s ease-out forwards', (i*0.02) + 's');
    }
  } else {
    // magie en de rest: een oplichtende ring met runenstipjes
    zet('circle', { cx:x, cy:y, r:10, fill:'none', stroke:K, 'stroke-width':3, 'stroke-dasharray':'6 5' },
        'fxRuneUit .8s linear forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .7s ease-out forwards');
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1800);
}

// ===== Inslagen OP HET BORD =====
// Naast de animatie bij de draaischijven slaat de aanval ook echt in op het
// bord, op het punt waar de klap valt: een bliksem die neerkomt, een meteoor
// die inslaat, een gifplas. Zware inslagen laten een krater achter die pas na
// een tijdje vervaagt.
const FX_KRATER = { vuur: true, hamer: true, bliksem: true };
function boardImpact(node, soort) {
  if (!node || !soort || animOff() || !NODES[node]) return;
  const n = NODES[node];
  queueFX(n.x, n.y, 'inslag:' + soort);
  if (FX_KRATER[soort]) {
    state.craters = state.craters || [];
    state.craters.push({ x: n.x, y: n.y, soort, born: performance.now() });
    if (state.craters.length > 8) state.craters.shift();
  }
}

// Kraters worden bij elke render opnieuw getekend en vervagen met de tijd.
function drawCraters(svg) {
  const lijst = state.craters || [];
  if (!lijst.length) return;
  const nu = performance.now();
  state.craters = lijst.filter(c => nu - c.born < 14000);
  for (const c of state.craters) {
    const leeftijd = (nu - c.born) / 14000;
    const op = Math.max(0, 0.75 * (1 - leeftijd));
    const g = el('g', { opacity: op.toFixed(2) }, svg);
    // opgeworpen rand, dan de donkere kom
    el('ellipse', { cx:c.x, cy:c.y + 8, rx:34, ry:15, fill:'rgba(120,72,40,0.55)' }, g);
    el('ellipse', { cx:c.x, cy:c.y + 8, rx:29, ry:12.5, fill:'rgba(16,7,3,0.92)' }, g);
    el('ellipse', { cx:c.x, cy:c.y + 6.5, rx:20, ry:8, fill:'rgba(48,20,8,0.95)' }, g);
    if (c.soort === 'vuur') {
      el('ellipse', { cx:c.x, cy:c.y + 7, rx:11, ry:4.4, fill:`rgba(251,146,60,${(0.7*(1-leeftijd)).toFixed(2)})` }, g);
      el('ellipse', { cx:c.x, cy:c.y + 7, rx:5, ry:2, fill:`rgba(254,215,170,${(0.8*(1-leeftijd)).toFixed(2)})` }, g);
    }
    // barsten die uit de krater het bord in lopen
    for (const a of [8, 62, 118, 176, 232, 298]) {
      const r = (a * Math.PI) / 180;
      el('path', { d:`M ${c.x + Math.cos(r)*20} ${c.y + 8 + Math.sin(r)*9} L ${c.x + Math.cos(r)*40} ${c.y + 8 + Math.sin(r)*18}`,
        stroke:'rgba(14,6,3,0.85)', 'stroke-width':2.6, 'stroke-linecap':'round' }, g);
    }
  }
}

// Het hart van het binnenvierkant was leeg. Daar ligt nu het teken waar het
// spel naar heet: een rondel — concentrische ringen met spaken en een kern.
// Ingebrand in de arenavloer, dus heel licht: het mag de figuren niet
// wegdrukken. Een handvol elementen, dus het kost niets per render.
function drawRondel(svg) {
  const cx = 270, cy = 445;
  const g = el('g', { class:'rondel-teken', opacity:0.22 }, svg);
  for (const [r, w] of [[112, 3], [86, 1.6], [58, 2.4], [26, 1.4]])
    el('circle', { cx, cy, r, fill:'none', stroke:'#ffe9c2', 'stroke-width':w }, g);
  for (let i = 0; i < 8; i++) {
    const a = (i * 45 - 90) * Math.PI / 180;
    el('line', { x1:cx + Math.cos(a) * 60, y1:cy + Math.sin(a) * 60,
      x2:cx + Math.cos(a) * 110, y2:cy + Math.sin(a) * 110,
      stroke:'#ffe9c2', 'stroke-width': i % 2 ? 1.4 : 2.6, 'stroke-linecap':'round' }, g);
  }
  // Vier ruitjes op de assen, als de merktekens op een echte rondel
  for (let i = 0; i < 4; i++) {
    const a = (i * 90 - 90) * Math.PI / 180;
    const x = cx + Math.cos(a) * 86, y = cy + Math.sin(a) * 86;
    el('path', { d:`M ${x} ${y-9} L ${x+7} ${y} L ${x} ${y+9} L ${x-7} ${y} Z`, fill:'#ffe9c2' }, g);
  }
  el('circle', { cx, cy, r:11, fill:'#ffe9c2', opacity:0.55 }, g);
}

