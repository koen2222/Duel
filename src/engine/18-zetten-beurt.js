// ===== Figuur-info tijdens het duel =====
// In Duel houd je een figuur vast om z'n data te zien. Hier: lang indrukken op
// een figuur op het bord, of een vijand aantikken zonder eigen selectie.
// Cruciaal is dat de schijf HIER de status meerekent — je ziet dus precies wat
// brand of verlamming van je wiel heeft overgelaten.
const STATUS_NL = { poison:'Vergiftigd', badlypoison:'Zwaar vergiftigd', burn:'Brandend', paralysis:'Verlamd', confusion:'Verward', sleep:'Slaapt', frozen:'Bevroren', curse:'Vervloekt', bulwark:'Bolwerk actief', wait:'Wacht' };
const STATUS_EN = { poison:'Poisoned', badlypoison:'Badly poisoned', burn:'Burned', paralysis:'Paralyzed', confusion:'Confused', sleep:'Asleep', frozen:'Frozen', curse:'Cursed', bulwark:'Bulwark active', wait:'Wait' };
function statusLabel(s) { return (isEn() ? STATUS_EN : STATUS_NL)[s] || s; }
function showUnitInfo(uid) {
  const u = state.units[uid]; if (!u) return;
  const def = UNIT_DEFS[u.defKey];
  document.getElementById('info-art').innerHTML = unitVisual(u.defKey, u.owner, 64);
  document.getElementById('info-name').textContent = unitName(u.defKey);
  const side = u.owner === 'p1' ? t('combat.you') : (kijkVanuitP1() ? t('combat.foe') : t('hud.p2'));
  const mp = u.node ? effMP(u) : def.mp;
  const st = u.status.map(statusLabel);
  document.getElementById('info-sub').textContent =
    `${side} · ${facName(def.fac)} · Level ${u.level} · ${mp} MP${st.length ? ' · ' + st.join(', ') : ''}`;
  const shown = applyStatus(u.slots, u.status, u);   // schijf zoals hij NÚ draait
  renderDisk('info-disk', shown, u.defKey);
  const sum = {};
  for (const s of shown) {
    const k = s.k === 'white' || s.k === 'gold' ? `${s.k}-${s.v}` : (s.k === 'purple' ? `purple-${s.effect}` : s.k);
    sum[k] = (sum[k] || 0) + 1;
  }
  const NL = { red: t('miss'), blue: t('block') };
  let pills = Object.entries(sum).map(([k, n]) => {
    const [kind, val] = k.split('-');
    const label = kind === 'white' ? `${val} dmg` : kind === 'gold' ? `★ ${val} dmg` : kind === 'purple' ? val : NL[kind];
    return `<span class="slot-pill" style="color:${TXT[kind]};background:${COLORS[kind]}">${n}× ${label}</span>`;
  }).join('');
  const ab = def.ability;
  pills += ab ? `<div class="ability-line"><span class="ability-tag">✦ ${abilityName(ab)}</span> ${abilityDesc(ab)}</div>` : '';
  if (u.status.some(s => !['wait','bulwark'].includes(s))) pills += `<div class="ability-line" style="color:#fca5a5">${t('disk.status')}</div>`;
  document.getElementById('info-slots').innerHTML = pills;
  document.getElementById('info-overlay').classList.add('active');
  sfx('select');
}

// Korte uitleg bij het selecteren van een figuur: wat kan hij nu?
function unitHint(u) {
  const mp = effMP(u), name = unitName(u.defKey);
  const bits = [`${name}: ${mp} MP`];
  if (!state.firstMoveDone) bits.push(tr('(eerste zet kost 1 MP extra)', '(first move costs 1 extra MP)'));
  const ab = abilityOf(u);
  if (ab && abilityMPBonus(u) > 0) bits.push(`· ${abilityName(ab)} ${tr('actief', 'active')}`);
  else if (ab === 'command' || ab === 'pack') bits.push(`· ${abilityName(ab)} ${tr('werkt naast een bondgenoot', 'works next to an ally')}`);
  const st = u.status.filter(s => !['wait','bulwark'].includes(s));
  if (st.length) bits.push(`· ${statusLabel(st[0])}`);
  return bits.join(' ');
}

// Ability-MP: +1 als deze unit 'pack' heeft en naast een bondgenoot staat,
// of naast een bondgenoot met 'command' (Aanvoerder) staat.
// Zijn ALLE startpunten van deze speler door de tegenstander bezet? Dan kan hij
// niets meer inzetten — in Duel een erkende (en met kaarten gecounterde) situatie.
function entriesBlockedBy(player) {
  const mine = Object.entries(NODES).filter(([, n]) => n.type === 'entry' && n.owner === player);
  if (!mine.length) return false;
  return mine.every(([k]) => { const o = unitAt(k); return o && o.owner !== player; });
}

function abilityMPBonus(u) {
  if (!u.node) return 0;
  const neighbours = [...ADJ[u.node]].map(unitAt).filter(o => o && o.owner === u.owner);
  let bonus = 0;
  if (abilityOf(u) === 'pack' && neighbours.length) bonus += 1;
  if (abilityOf(u) === 'swiftswim' && neighbours.some(o => UNIT_DEFS[o.defKey] && UNIT_DEFS[o.defKey].fac === 'Water')) bonus += 1;
  if (neighbours.some(o => abilityOf(o) === 'command')) bonus += 1;
  return bonus;
}

function effMP(u) {
  // Tegenaanval: extra bewegingsruimte zolang je aanvoer geblokkeerd is
  const counter = (state.counterAttack && state.counterAttack[u.owner] && entriesBlockedBy(u.owner)) ? 1 : 0;
  let mp = Math.min(3, UNIT_DEFS[u.defKey].mp + (state.mpBonus[u.uid] || 0) + (state.warcry[u.owner] ? 1 : 0) + abilityMPBonus(u) + counter);
  if (!state.firstMoveDone) mp = Math.max(1, mp - 1); // Duel: allereerste zet van het potje MP-1
  return mp;
}

// Duel: deployen via entry kost 1 MP; resterende MP mag direct doorbewegen (alleen naar lege punten)
function deployTargets(u) {
  const budget = effMP(u) - 1;
  const out = new Set();
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== u.owner || unitAt(k)) continue;
    out.add(k);
    const seen = new Map([[k, 0]]), q = [[k, 0]];
    while (q.length) { const [nd, d] = q.shift(); if (d >= budget) continue; for (const nx of ADJ[nd]) { if (unitAt(nx)) continue; if (seen.has(nx) && seen.get(nx) <= d + 1) continue; seen.set(nx, d + 1); out.add(nx); q.push([nx, d + 1]); } }
  }
  return out;
}

function doDeploy(u, target) {
  let entry = null, best = Infinity;
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== u.owner || unitAt(k)) continue;
    if (k === target) { entry = k; best = 0; break; }
    const p = bfs(k, target); if (p && p.length - 1 < best) { best = p.length - 1; entry = k; }
  }
  u.node = entry;
  state.bench[u.owner] = state.bench[u.owner].filter(x => x !== u.uid);
  sfx('deploy');
  // De poort scheurt open op het startpunt en het figuur klimt eruit
  addPortal(entry, u.owner);
  const verder = () => {
    if (target === entry || !entry) { onDeployComplete(u); renderAll(); return Promise.resolve(); }
    return moveUnit(u, target).then(() => onDeployComplete(u));
  };
  return riseUnit(u).then(verder);
}

// Inzet-abilities (triggeren zodra de unit op het veld staat)
function onDeployComplete(u) {
  const ab = abilityOf(u);
  if (ab === 'blessing' && u.node) {
    // Zegenende Aura: wis status van aangrenzende bondgenoten. Je zag alleen een
    // regeltje tekst; nu golft er een ring van de bron naar elke bondgenoot die
    // er iets aan heeft, zodat je ZIET wie er geraakt wordt.
    queueFX(NODES[u.node].x, NODES[u.node].y, 'aura:blessing');
    for (const n of ADJ[u.node]) {
      const o = unitAt(n);
      if (o && o.owner === u.owner) {
        const had = o.status.some(s => s !== 'wait' && s !== 'bulwark');
        o.status = o.status.filter(s => s === 'wait' || s === 'bulwark');
        if (had) queueFX(NODES[n].x, NODES[n].y, 'aura:blessing');
      }
    }
    toast(`${unitName(u.defKey)}: ${abilityName('blessing')}`);
  } else if (ab === 'raise') {
    // Zielenoproep: wis Wacht-status van je eigen bank (sneller herinzetten)
    let geraakt = 0;
    for (const uid of state.bench[u.owner]) {
      const o = state.units[uid];
      if (o.status.includes('wait')) geraakt++;
      o.status = o.status.filter(s => s !== 'wait');
    }
    if (u.node) queueFX(NODES[u.node].x, NODES[u.node].y, 'aura:raise');
    toast(`${unitName(u.defKey)}: ${abilityName('raise')}${geraakt ? tr(` — ${geraakt} figuur${geraakt === 1 ? '' : 'en'} weer inzetbaar`, ` — ${geraakt} figure${geraakt === 1 ? '' : 's'} ready again`) : ''}`);
  }
}

function legalMoves(u) {
  if (u.status.includes('wait') || u.status.includes('sleep')) return new Set();
  const frozen = u.status.includes('frozen');
  const phase = canPhase(u);   // Sluipen/Vleugelslag: dwars door bezette punten
  const mp = effMP(u);
  const out = new Set(), seen = new Map([[u.node, 0]]), q = [[u.node, 0]];
  while (q.length) {
    const [n, d] = q.shift(); if (d >= mp) continue;
    for (const nx of ADJ[n]) {
      const occ = unitAt(nx);
      if (occ && occ.owner !== u.owner) {
        // aanvallen op de vijand — alleen vanaf een punt waar je kunt staan; wie
        // over een figuur heen vliegt/sluipt, kan niet vanaf diens plek vechten
        if (!frozen && (n === u.node || !unitAt(n))) out.add(nx);
        if (phase && (!seen.has(nx) || seen.get(nx) > d+1)) { seen.set(nx, d+1); q.push([nx, d+1]); } // eroverheen
        continue;
      }
      if (occ) {                                              // eigen unit: nooit landen
        if (phase && (!seen.has(nx) || seen.get(nx) > d+1)) { seen.set(nx, d+1); q.push([nx, d+1]); }
        continue;
      }
      if (seen.has(nx) && seen.get(nx) <= d+1) continue;
      seen.set(nx, d+1); out.add(nx); q.push([nx, d+1]);
    }
  }
  return out;
}

// Het dichtstbijzijnde punt (binnen MP, met dezelfde loopregels als
// legalMoves) naast `doel` waar u kan staan om aan te vallen; null als dat niet kan.
function standplaatsVoor(u, doel) {
  const phase = canPhase(u), mp = effMP(u);
  const seen = new Set([u.node]), q = [[u.node, 0]];
  while (q.length) {
    const [n, d] = q.shift();
    if (ADJ[n].has(doel) && (n === u.node || !unitAt(n))) return n;
    if (d >= mp - 1) continue;
    for (const nx of ADJ[n]) {
      if (seen.has(nx)) continue;
      const occ = unitAt(nx);
      if (occ && !phase) continue;
      seen.add(nx); q.push([nx, d + 1]);
    }
  }
  return null;
}

function unitAt(k) { return Object.values(state.units).find(u => u.node === k); }

function occupantAfterMove(node, mover, dest) {
  if (node === dest) return mover;
  if (mover && mover.node && node === mover.node) return null;
  return unitAt(node);
}

function wouldSurround(mover, dest) {
  if (!mover || !dest || !state) return [];
  const victims = [];
  for (const u of Object.values(state.units)) {
    if (!u.node || u.owner === mover.owner || u.uid === mover.uid) continue;
    if (u.node === dest) continue;
    const adj = ADJ[u.node] || [];
    if (!adj.length) continue;
    let allEnemy = true;
    for (const n of adj) {
      const occ = occupantAfterMove(n, mover, dest);
      if (!(occ && occ.owner === mover.owner)) { allEnemy = false; break; }
    }
    if (allEnemy) victims.push(u);
  }
  return victims;
}

function checkSurround() {
  // Duel-regel, letterlijk: "A Pokémon will be knocked out if the OPPONENT'S
  // Pokémon are occupying all the points a Pokémon could possibly move to" —
  // en "this requires ALL adjacent spaces to be filled with your Pokémon".
  // Wij keken alleen of er géén vrij buurpunt was plus mínstens één vijand
  // ernaast. Daardoor kon je je eigen figuur doodmaken door hem met je eigen
  // poppetjes in te sluiten. Nu moet ELK buurpunt door de VIJAND bezet zijn.
  // (Ingesloten raken door je eigen figuren mag dus wel — dan kun je alleen
  // niet meer bewegen, en dat is een tactisch probleem, geen KO.)
  for (const u of Object.values(state.units)) {
    if (!u.node) continue;
    const adj = [...ADJ[u.node]];
    if (!adj.every(n => { const o = unitAt(n); return o && o.owner !== u.owner; })) continue;
    const vanaf = u.node;
    queueFX(NODES[vanaf].x, NODES[vanaf].y, 'omsingeld');
    koUnit(u);
    zielNaarHC(u, vanaf);
    toast(tr(`${unitName(u.defKey)} omsingeld — KO!`, `${unitName(u.defKey)} surrounded — KO!`));
  }
}

function afterAction() {
  state.firstMoveDone = true;
  checkSurround();
  maybeAutoEndTurn();
  if (state.actionsLeft<=0 && !hasAnyAction(state.turn)) { endMatch(state.turn==='p1'?'p2':'p1', 'lockout'); return; }
  renderAll(); if (state.mode === 'solo' && state.turn === 'p2' && state.actionsLeft <= 0 && !state.over) { setTimeout(endTurn, 600); }
}

// In Duel is er geen End Turn-knop: zodra je je zet hebt gedaan, gaat de beurt
// door. Je kaart speel je dus VOOR je zet. Uit te zetten bij Instellingen.
function maybeAutoEndTurn() {
  if (!S('autoEndTurn')) return;
  if (state.over || state.actionsLeft > 0 || state.pendingPlate) return;
  if ((state.mode === 'solo' || isOnline()) && state.turn !== 'p1') return;   // AI / tegenstander regelt z'n eigen beurt
  setTimeout(() => {
    if (state.over || state.locked || state.actionsLeft > 0 || state.pendingPlate) return;
    endTurn();
  }, Math.max(300, 900 * (animScale() || 0.4)));
}

function hasAnyAction(player) {
  const deployable = state.bench[player].some(uid => !state.units[uid].status.includes('wait'));
  if (deployable) { for (const [k,n] of Object.entries(NODES)) if (n.type==='entry' && n.owner===player && !unitAt(k)) return true; }
  for (const u of Object.values(state.units)) {
    if (u.owner !== player || !u.node) continue;
    if (u.status.includes('sleep') || u.status.includes('wait')) continue;
    if (legalMoves(u).size > 0) return true;
  }
  return false;
}

function endTurn() {
  if (state.over || state.locked) return;
  if (isOnline() && !Online.afspelen) {
    if (state.turn !== 'p1') return;   // de beurt van de tegenstander eindigt alleen via diens bericht
    onlineZend({ t: 'einde' });
  }
  // Sleep geneest via een aangrenzende bondgenoot; frozen geneest sinds sessie 22 ná een gevecht (Duel-regel)
  for (const u of Object.values(state.units)) { if (!u.node) continue; if (u.status.includes('sleep')) { const hasAdj = [...ADJ[u.node]].some(n => { const o = unitAt(n); return o && o.owner === u.owner; }); if (hasAdj) u.status = u.status.filter(s => s!=='sleep'); } }
  // Wacht gaat eraf ná de beurt die het figuur moest overslaan (niet meteen bij toekennen).
  const ending = state.turn;
  const turnN = state.turnN || 0;
  for (const u of Object.values(state.units)) {
    if (u.owner === ending && u.status.includes('wait') && (u.waitTurn ?? -1) < turnN) {
      u.status = u.status.filter(s => s !== 'wait');
    }
  }
  state.turn = ending==='p1'?'p2':'p1';
  state.turnN = turnN + 1;
  state.actionsLeft = 1; state.selected = null; state.pendingDeploy = null; state.legalTargets = new Set();
  state.plateUsed = false; state.pendingPlate = null; state.mpBonus = {}; state.warcry = { p1:false, p2:false };
  for (const u of Object.values(state.units)) u.fx = {};   // plate-effecten gelden 'deze beurt'
  // Shed Skin: wis special conditions aan het begin van jouw beurt
  for (const u of Object.values(state.units)) {
    if (u.owner === state.turn && abilityOf(u) === 'shed') {
      u.status = u.status.filter(s => s === 'wait' || s === 'bulwark');
    }
  }
  // P.C. → zijlijn aan het begin van je beurt (Duel 1:1) — EERST, zodat
  // wie dit beurt door gif KO gaat niet meteen weer op de zijlijn staat.
  while (state.hc[state.turn].length) {
    const uid = state.hc[state.turn].shift();
    state.bench[state.turn].push(uid);
  }
  // Duel: vergiftigd/zwaar vergiftigd op het veld is KO aan het begin van jouw beurt
  for (const u of Object.values(state.units)) {
    if (u.owner !== state.turn || !u.node) continue;
    if (u.status.includes('poison') || u.status.includes('badlypoison')) {
      const vanaf = u.node;
      toast(tr(`${unitName(u.defKey)} bezwijkt aan gif`, `${unitName(u.defKey)} succumbs to poison`));
      koUnit(u);
      zielNaarHC(u, vanaf);
      queueFX(NODES[vanaf].x, NODES[vanaf].y, 'burst');
    }
  }
  sfx('turn');
  renderAll();
  beweegKlasse(document.getElementById('turn-banner'), 'wissel', 700);
  showTurnSplash();
  if (!hasAnyAction(state.turn)) { endMatch(state.turn==='p1'?'p2':'p1', 'lockout'); return; }
  // Waarschuwing zodra je aanvoer is afgesneden: dan kun je niets meer inzetten
  // en moet je elke beurt met wat er staat blijven schuiven. In Duel is dit een
  // erkende situatie (er bestaan kaarten die er speciaal tegen zijn).
  if ((!kijkVanuitP1() || state.turn === 'p1') && entriesBlockedBy(state.turn)) {
    const own = Object.values(state.units).filter(u => u.owner === state.turn && u.node).length;
    toast(own <= 1
      ? tr('Al je startpunten zijn bezet én je hebt nog één figuur — je moet wel bewegen!', 'All your entries are occupied and you have one figure left — you have to move!')
      : tr('Al je startpunten zijn bezet: je kunt niemand inzetten. Maak er eerst één vrij.', 'All your entries are occupied: you cannot send anyone in. Free one first.'));
  }
  if (state.mode === 'solo' && state.turn === 'p2') { setTimeout(aiTurn, Math.max(150, 400 * (animScale() || 0.4))); }
}

