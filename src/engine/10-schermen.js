// ===== App-router: home / collection / store / game =====
function showScreen(name) {
  for (const s of document.querySelectorAll('.screen')) s.classList.remove('active');
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
  Audio_.syncTrack();
}

function renderHome() {
  applyLang();
  document.getElementById('home-credits').textContent = profile.credits;
  document.getElementById('home-owned').textContent = Object.keys(profile.owned).length;
  document.getElementById('home-wins').textContent = profile.stats.wins;
  document.getElementById('home-losses').textContent = profile.stats.losses;
  const roster = document.getElementById('home-roster');
  if (roster) {
    const starters = ['p001','p004','p007','p025','p092','p147'];
    roster.innerHTML = starters.map(k => {
      const art = UNIT_ART[k];
      if (art) return `<img src="${art}" alt="">`;
      return unitVisual(k, 'p1', 118);
    }).join('');
  }
  buildHomeFx();
}

function goHome() {
  if (isOnline()) {
    if (!state.over) onlineZend({ t: 'opgeven' });
    if (window.SchijfduelNet) window.SchijfduelNet.sluit();
  }
  stopClock(); clearSpinTicks();
  document.getElementById('deck-overlay').classList.remove('active');
  document.getElementById('result-overlay').classList.remove('active');
  const pause = document.getElementById('pause-overlay');
  if (pause) pause.classList.remove('active');
  const vs = document.getElementById('vs-overlay');
  if (vs) vs.classList.remove('active');
  const combat = document.getElementById('combat-overlay');
  if (combat) combat.classList.remove('active');
  Audio_.setDuck(1);
  state = initialState(); state.over = true;
  renderHome(); showScreen('home');
}

// Als er niets te kiezen valt, kies het dan alvast. Sinds alleen basisvormen
// opgesteld mogen worden bezit een beginner er precies zes — even veel als er
// teamplekken zijn. Dan is zes keer tikken geen keuze maar een klusje. Zodra je
// er zeven of meer hebt is het wél weer een keuze en vullen we niets in.
function vulTeamAlsErNietsTeKiezenValt() {
  const basis = Object.keys(profile.owned).filter(isBasisvorm);
  if (deckSel.units.length || basis.length === 0 || basis.length > 6) return;
  deckSel.units = basis.slice(0, 6);
  for (const k of deckSel.units) {
    let stap = k;
    while (true) {
      const opts = evolutieOpties(stap).filter(e => profile.owned[e]);
      if (!opts.length) break;
      deckSel.evos[stap] = opts[0]; stap = opts[0];
    }
  }
}

// Vanuit home: modus kiezen -> deck-selectie openen
function startMatchFlow(mode) {
  currentMode = mode;
  Online.eigenTeam = null;
  deckSel = { units: [], plates: [], evos: {} };
  deckStage = 'p1'; deckP1 = null;
  state = initialState(); state.over = true;
  vulTeamAlsErNietsTeKiezenValt();
  renderDeckSelect();
  document.getElementById('deck-overlay').classList.add('active');
}

// Backwards-compat: her en der wordt newGame() aangeroepen als "match voorbij"
function newGame() { goHome(); }

function onDeckConfirm() {
  if (!(deckSel.units.length === 6 && deckSel.plates.length > 0)) return;
  if (currentMode === 'online') {
    // Online: het team gaat naar de tegenstander; het potje start pas als die
    // ook klaar is (src/online.js roept dan onlineStart() aan).
    if (Online.eigenTeam) return;
    const levels = {};
    for (const k of [...deckSel.units, ...Object.values(deckSel.evos)]) levels[k] = profile.owned[k] || 1;
    Online.eigenTeam = { units: [...deckSel.units], plates: [...deckSel.plates], evos: { ...deckSel.evos }, levels };
    if (window.SchijfduelNet) window.SchijfduelNet.teamGekozen(Online.eigenTeam);
    renderDeckSelect();
    return;
  }
  if (currentMode === 'hotseat' && deckStage === 'p1') {
    deckP1 = { units: [...deckSel.units], plates: [...deckSel.plates], evos: { ...deckSel.evos } };
    deckSel = { units: [], plates: [], evos: {} };
    deckStage = 'p2';
    vulTeamAlsErNietsTeKiezenValt();
    renderDeckSelect();
    toast(tr('Speler 2: stel je leger samen', 'Player 2: build your team'));
    return;
  }
  startGame();
}

// Opgeslagen teams: tik een gevuld slot om het te laden, of het ◇-knopje om je
// huidige keuze erin te bewaren. Scheelt elk potje opnieuw negen kaarten kiezen.
function renderDeckSlots() {
  const row = document.getElementById('deck-slots'); if (!row) return;
  row.innerHTML = '';
  const selectionValid = deckSel.units.length === 6 && deckSel.plates.length > 0 && plateCost(deckSel.plates) <= PLATE_BUDGET;
  for (let i = 0; i < DECK_SLOTS; i++) {
    const d = profile.decks[i];
    const chip = document.createElement('div');
    chip.className = 'slot-chip' + (d ? ' filled' : '');
    chip.dataset.slot = String(i);
    const figs = d ? `<div class="sfigs">${d.units.slice(0, 6).map(k => unitVisual(k, 'p1', 16)).join('')}</div>` : '';
    chip.innerHTML = `<div class="sname">TEAM ${i + 1}</div>${figs}<div class="sbody">${d ? t('deck.tapLoad') : t('deck.empty')}</div>`;
    chip.addEventListener('click', () => {
      if (!d) { toast(selectionValid ? tr('Tik op ◇ om je team hier te bewaren', 'Tap ◇ to save your team here') : tr('Kies eerst 6 units en minstens één kaart', 'Pick 6 figures and at least one plate first')); return; }
      deckSel = { units: [...d.units], plates: [...d.plates], evos: { ...(d.evos || {}) } };
      sfx('select'); toast(tr(`Team ${i + 1} geladen`, `Team ${i + 1} loaded`)); renderDeckSelect();
    });
    const save = document.createElement('div');
    save.className = 'slot-save'; save.textContent = '◇'; save.title = tr('Huidige keuze hier bewaren', 'Save current pick here');
    save.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!selectionValid) { sfx('denied'); toast(tr('Kies eerst 6 units en minstens één kaart', 'Pick 6 figures and at least one plate first')); return; }
      if (d && !confirm(tr(`Team ${i + 1} overschrijven?`, `Overwrite Team ${i + 1}?`))) return;
      profile.decks[i] = { units: [...deckSel.units], plates: [...deckSel.plates], evos: { ...deckSel.evos }, name: '' };
      saveProfile(); sfx('plate'); toast(tr(`Bewaard als Team ${i + 1}`, `Saved as Team ${i + 1}`)); renderDeckSlots();
    });
    chip.appendChild(save);
    row.appendChild(chip);
  }
}

function hangEvoSleuven(card, startKey) {
  const ontkoppel = (vanaf) => {
    let k = vanaf;
    while (k && deckSel.evos[k]) {
      const nxt = deckSel.evos[k];
      delete deckSel.evos[k];
      k = nxt;
    }
    delete deckSel.evos[vanaf];
  };
  const walk = (stap, diep) => {
    const opts = evolutieOpties(stap);
    if (!opts.length) return;
    for (const doel of opts) {
      const heb = !!profile.owned[doel];
      const aan = deckSel.evos[stap] === doel;
      const vorigeAan = diep === 0 || deckSel.evos[voorloperVan(stap)] === stap;
      const sleuf = document.createElement('div');
      sleuf.className = 'evo-sleuf' + (aan ? ' aan' : '') + (heb && vorigeAan ? '' : ' mist');
      if (diep) sleuf.style.marginLeft = (diep * 10) + 'px';
      sleuf.innerHTML = heb
        ? `${unitVisual(doel, 'p1', 22)}<span>${unitName(doel)}</span>`
        : `<span class="evo-slot-leeg">▾</span><span>${tr(`${unitName(doel)} nodig`, `Need ${unitName(doel)}`)}</span>`;
      sleuf.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!heb) { sfx('denied'); toast(tr(`Je hebt ${unitName(doel)} nog niet — koop hem in de Winkel`, `You don’t own ${unitName(doel)} yet — buy it in the Shop`)); return; }
        if (!vorigeAan) { sfx('denied'); toast(tr(`Hang eerst ${unitName(stap)} eronder`, `Attach ${unitName(stap)} underneath first`)); return; }
        if (aan) ontkoppel(stap);
        else { ontkoppel(stap); deckSel.evos[stap] = doel; }
        sfx('select'); renderDeckSelect();
      });
      if (!(heb && vorigeAan) && !aan) sleuf.style.cursor = 'default';
      card.appendChild(sleuf);
    }
    const gekozen = opts.find(o => deckSel.evos[stap] === o);
    if (gekozen) walk(gekozen, diep + 1);
  };
  walk(startKey, 0);
}

const ARENA_META = {
  stadion: 'arena.stadion', vuur: 'arena.vuur', kristal: 'arena.kristal', woud: 'arena.woud',
  grot: 'arena.grot', ijs: 'arena.ijs', vulkaan: 'arena.vulkaan', nacht: 'arena.nacht',
};
const ARENA_LIST = Object.keys(ARENA_META);

function renderArenaPicks() {
  const host = document.getElementById('deck-arenas');
  if (!host) return;
  const cur = S('arena');
  host.innerHTML = ARENA_LIST.map(k =>
    `<button type="button" class="arena-pick${k === cur ? ' on' : ''}" data-arena="${k}">${t(ARENA_META[k])}</button>`
  ).join('');
  host.querySelectorAll('.arena-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      setSetting('arena', btn.getAttribute('data-arena'));
      sfx('select');
      renderArenaPicks();
    });
  });
}

function renderDeckSelect() {
  const title = document.querySelector('#deck-overlay .deck-title');
  if (currentMode === 'hotseat') title.textContent = deckStage === 'p1' ? t('deck.p1') : t('deck.p2hot');
  else title.textContent = t('deck.title');
  document.getElementById('btn-deck-start').textContent = (currentMode === 'hotseat' && deckStage === 'p1') ? t('deck.next') : t('deck.start');
  document.getElementById('deck-credits').textContent = `◈ ${profile.credits} CREDITS`;
  renderArenaPicks();
  renderDeckSlots();
  const ug = document.getElementById('deck-units'); ug.innerHTML = '';
  const ownedKeys = Object.keys(UNIT_DEFS).filter(k => profile.owned[k]);
  for (const key of ownedKeys) {
    const def = UNIT_DEFS[key];
    const lvl = profile.owned[key] || 0; const rar = RARITY[key];
    const c = document.createElement('div');
    if (!isBasisvorm(key)) {
      const voor = voorloperVan(key);
      c.className = 'deck-card evo-only';
      c.innerHTML = `<span class="rar rar-${rar}">${rar}</span>${unitVisual(key, 'p1', 38)}<div class="name">${unitName(key)}</div><div class="fac">${facName(def.fac)} · ${def.mp} MP</div><div class="evo-only-note">${isEn() ? 'evolves from' : 'evolutie van'} ${unitName(voor)}</div>`;
      c.addEventListener('click', () => { sfx('denied'); toast(isEn() ? `${unitName(key)} isn’t played directly — attach it under ${unitName(voor)} and evolve in battle` : `${unitName(key)} zet je niet rechtstreeks in — hang hem onder ${unitName(voor)} en evolueer tijdens het potje`); });
    } else {
      const gekozen = deckSel.units.includes(key);
      const opts = evolutieOpties(key);
      c.className = 'deck-card' + (gekozen ? ' selected' : '') + (gekozen && deckSel.evos[key] ? ' evo-klaar' : '');
      c.innerHTML = `<span class="rar rar-${rar}">${rar}</span>${unitVisual(key, 'p1', 38)}<div class="name">${unitName(key)}</div><div class="fac">${facName(def.fac)} · ${def.mp} MP</div><div class="lvl">L${lvl}</div>`;
      c.addEventListener('click', () => {
        const i = deckSel.units.indexOf(key);
        if (i >= 0) {
          deckSel.units.splice(i, 1);
          for (const k of evolutieKeten(key)) delete deckSel.evos[k];
        }
        else if (deckSel.units.length < 6) deckSel.units.push(key);
        else toast(tr('Max 6 units', 'Max 6 figures'));
        renderDeckSelect();
      });
      if (gekozen && opts.length) hangEvoSleuven(c, key);
    }
    ug.appendChild(c);
  }
  if (!ownedKeys.length) {
    ug.innerHTML = `<div class="empty-hint">${t('empty.shop')}</div>`;
  }
  const pg = document.getElementById('deck-plates'); pg.innerHTML = '';
  for (const [key, p] of Object.entries(PLATES)) {
    const c = document.createElement('div'); c.className = 'deck-card' + (deckSel.plates.includes(key) ? ' selected' : '');
    c.innerHTML = `<span class="rar" style="color:var(--gold)">${p.cost}</span><div style="display:flex;justify-content:center;margin-bottom:2px;">${plateIcon(key, 26)}</div><div class="name">${plateName(key)}</div><div class="fac">${plateDesc(key)}</div>`;
    c.addEventListener('click', () => {
      const i = deckSel.plates.indexOf(key);
      if (i >= 0) { deckSel.plates.splice(i, 1); }
      else if (plateCost(deckSel.plates) + p.cost <= PLATE_BUDGET) { deckSel.plates.push(key); }
      else toast(tr(`Geen ruimte meer — je mag voor ${PLATE_BUDGET} punten aan kaarten meenemen`, `No room left — you may bring plates worth ${PLATE_BUDGET} points`));
      renderDeckSelect();
    });
    pg.appendChild(c);
  }
  document.getElementById('deck-count-units').textContent = `${t('deck.units')}: ${deckSel.units.length} / 6 (${t('chip.collection').toLowerCase()}: ${Object.keys(profile.owned).length}/${DEX_COUNT})`;
  document.getElementById('deck-count-plates').textContent = `${t('deck.plates')}: ${plateCost(deckSel.plates)} / ${PLATE_BUDGET} (${deckSel.plates.length})`;
  document.getElementById('btn-deck-start').disabled = !(deckSel.units.length === 6 && deckSel.plates.length > 0) || !!Online.eigenTeam;
  if (Online.eigenTeam) document.getElementById('btn-deck-start').textContent = tr('Wachten op tegenstander…', 'Waiting for opponent…');
  renderDeckLineup();
}

function renderDeckLineup() {
  const host = document.getElementById('deck-lineup');
  if (!host) return;
  host.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const key = deckSel.units[i];
    const pad = document.createElement('div');
    pad.className = 'lineup-pad' + (key ? ' filled' : '');
    pad.innerHTML = key ? unitVisual(key, currentMode === 'hotseat' && deckStage === 'p2' ? 'p2' : 'p1', 54) : '';
    if (key) {
      pad.title = unitName(key);
      pad.addEventListener('click', () => {
        const ix = deckSel.units.indexOf(key);
        if (ix >= 0) {
          deckSel.units.splice(ix, 1);
          for (const k of evolutieKeten(key)) delete deckSel.evos[k];
          renderDeckSelect();
        }
      });
    }
    host.appendChild(pad);
  }
}

// Tegenstander-decks per moeilijkheidsgraad (sessie 24). Voorheen kreeg de AI
// zes willekeurige units uit de hele roster op level 1 — vaak een onsamenhangend
// team. Nu krijgt hij een écht deck: op 'Licht' vooral commons, op 'Zwaar' een
// factie-samenhangend team met rares op een hoger level.
// Sinds sessie 40 zet ook de AI alleen BASISVORMEN op; z'n zwaardere figuren
// verdient hij door te evolueren, net als jij. 'rares' bepaalt daarom niet meer
// wie er in het team staat maar hoe diep z'n evolutieketens hangen.
const AI_DECKS = {
  makkelijk: { ketens: 0, level: 1 },   // geen evoluties: blijft licht
  normaal:   { ketens: 1, level: 3 },   // één stap: common -> uncommon
  moeilijk:  { ketens: 2, level: 4 },   // hele keten: tot en met de rare
};
function aiDeck() {
  const d = AI_DECKS[S('difficulty')] || AI_DECKS.normaal;
  const diff = S('difficulty');
  const bases = Object.keys(UNIT_DEFS).filter(k => isBasisvorm(k) && !UNIT_DEFS[k].legend);
  const byRar = r => bases.filter(k => RARITY[k] === r);
  let pool = bases;
  if (diff === 'makkelijk') pool = [...byRar('C'), ...byRar('C'), ...byRar('U')];
  else if (diff === 'moeilijk') pool = [...byRar('U'), ...byRar('R'), ...bases];
  const uniq = [...new Set(pool.length ? pool : bases)];
  const units = randomPick(uniq, Math.min(6, uniq.length));
  const supportive = ['fullheal','respin','xdefend','scoopup'];
  const aggressive = ['xattack','xhex','hurdle','cape','trueaim','dazzle'];
  const plates = diff === 'makkelijk'
    ? randomPick(supportive, 3)
    : randomPick([...aggressive, ...supportive], 3);
  // Evoluties aanhangen, zo diep als het niveau toestaat. Op Licht helemaal
  // niet — anders wordt hij halverwege ineens veel sterker en is 'licht' niet
  // meer licht. Op Zwaar hangt de hele keten eronder, tot en met de rare.
  const evos = {};
  for (const k of units) {
    let stap = k;
    for (let i = 0; i < d.ketens; i++) {
      const e = evolutieVan(stap); if (!e) break;
      evos[stap] = e; stap = e;
    }
  }
  return { units, plates, evos, level: d.level };
}

// Sintels één keer aanmaken; ze leven in de HTML-laag en overleven het
// opnieuw opbouwen van de bord-SVG.
// Sintels in het menu, dezelfde laag als in de arena maar wat rustiger.
function buildHomeFx() {
  const box = document.getElementById('home-fx');
  if (!box || box.childElementCount || animOff()) return;
  for (let i = 0; i < 16; i++) {
    const e = document.createElement('i');
    e.style.left = (2 + Math.random() * 96) + '%';
    e.style.bottom = (-6 + Math.random() * 26) + '%';
    e.style.animationDuration = (9 + Math.random() * 9).toFixed(1) + 's';
    e.style.animationDelay = (-Math.random() * 16).toFixed(1) + 's';
    e.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
    const sc = (0.6 + Math.random() * 1.4).toFixed(2);
    e.style.width = e.style.height = (3 * sc).toFixed(1) + 'px';
    box.appendChild(e);
  }
}

function buildArenaFx() {
  const box = document.getElementById('arena-fx');
  if (!box || box.childElementCount || animOff()) return;
  for (let i = 0; i < 14; i++) {
    const e = document.createElement('i');
    e.style.left = (4 + Math.random() * 92) + '%';
    e.style.bottom = (-8 + Math.random() * 40) + '%';
    e.style.animationDuration = (7 + Math.random() * 7).toFixed(1) + 's';
    e.style.animationDelay = (-Math.random() * 12).toFixed(1) + 's';
    e.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    const sc = (0.6 + Math.random() * 1.3).toFixed(2);
    e.style.width = e.style.height = (3 * sc).toFixed(1) + 'px';
    box.appendChild(e);
  }
}

function startGame() {
  state = initialState(); let id = 0;
  // evoKey = de evolutie die je onder dit figuur hebt gehangen. Staat er niets,
  // dan kan hij niet evolueren — precies zoals in Duel.
  const mk = (defKey, owner, lvl, evoMap) => {
    const uid = `u${++id}`;
    // evoMap is de HELE keten die onder dit figuur hangt, niet één stap. Zo kan
    // Spruiton in hetzelfde potje eerst Rankhorn en daarna Loofra worden.
    const map = evoMap || {};
    const u = { uid, defKey, owner, node:null, status:[], fx:{}, level:1,
                evoMap: map, evoKey: map[defKey] || null, evolved:false,
                slots: JSON.parse(JSON.stringify(UNIT_DEFS[defKey].slots)) };
    if (lvl && lvl > 1) { for (let i = 1; i < lvl; i++) levelSlotBoost(u); u.level = lvl; }
    state.units[uid] = u; state.bench[owner].push(uid);
  };
  const p1Deck = (currentMode === 'online' && Online.eigenTeam) || deckP1 || deckSel;   // hotseat: deckP1 geparkeerd, deckSel = P2-keuze
  const p1Evos = p1Deck.evos || {};
  for (const k of p1Deck.units) mk(k, 'p1', profile.owned[k] || 1, p1Evos);
  if (currentMode === 'hotseat' && deckP1) {
    const p2Evos = deckSel.evos || {};
    for (const k of deckSel.units) mk(k, 'p2', profile.owned[k] || 1, p2Evos);
    state.plates.p2 = [...deckSel.plates];
  } else if (currentMode === 'online') {
    // Het team (en de levels uit de collectie) van de tegenstander
    const tg = Online.tegen;
    for (const k of tg.units) mk(k, 'p2', (tg.levels && tg.levels[k]) || 1, tg.evos || {});
    state.plates.p2 = [...tg.plates];
    if (!Online.ikBegin) state.turn = 'p2';
  } else {
    const foe = aiDeck();
    const foeEvos = foe.evos || {};
    for (const k of foe.units) mk(k, 'p2', foe.level, foeEvos);
    state.plates.p2 = foe.plates;
  }
  state.plates.p1 = [...p1Deck.plates];
  playVsIntro();
}

function playVsIntro() {
  const ov = document.getElementById('vs-overlay');
  const p1 = document.getElementById('vs-p1-roster');
  const p2 = document.getElementById('vs-p2-roster');
  const n1 = document.getElementById('vs-p1-name');
  const n2 = document.getElementById('vs-p2-name');
  if (n1) n1.textContent = t('hud.you');
  if (n2) n2.textContent = state.mode === 'solo' ? 'AI' : isOnline() ? t('combat.foe') : t('hud.p2');
  const figs = (owner) => Object.values(state.units)
    .filter(u => u.owner === owner)
    .map(u => unitVisual(u.defKey, owner, 78)).join('');
  if (p1) p1.innerHTML = figs('p1');
  if (p2) p2.innerHTML = figs('p2');
  if (!ov || animOff()) { document.getElementById('deck-overlay').classList.remove('active'); beginMatchView(); return; }
  ov.classList.add('active');
  document.getElementById('deck-overlay').classList.remove('active');
  sfx('turn');
  Audio_.playSting('vs');
  Audio_.setTrack('battle');
  setTimeout(() => { ov.classList.remove('active'); beginMatchView(); }, 1700);
}

function beginMatchView() {
  showScreen('game');
  const cEl = document.getElementById('turn-clock');
  if (cEl) { cEl.textContent = state.clock ? fmtClock(state.clock.p1) : '—'; cEl.style.color = ''; }
  paintClocks();
  startClock();
  buildArenaFx();
  renderAll();
  showTurnSplash();
}

function showTurnSplash() {
  const box = document.getElementById('turn-splash');
  const txt = document.getElementById('turn-splash-txt');
  if (!box || !txt || animOff()) return;
  txt.textContent = state.turn === 'p1' ? t('splash.yours') : (kijkVanuitP1() ? t('splash.foe') : t('splash.p2'));
  box.className = 'turn-splash show ' + state.turn;
  box.setAttribute('aria-hidden', 'false');
  setTimeout(() => { box.classList.remove('show'); box.setAttribute('aria-hidden', 'true'); }, 1200);
}

// Reden-tekst bij het einde van een potje. Vroeger gaf elke aanroepplek z'n
// eigen zin mee, wat rare combinaties opleverde ("VERSLAGEN — DOEL BEREIKT!"
// als de AI JOUW doel innam). Nu geven de aanroepplekken alleen een CODE en
// formuleert deze functie het vanuit de speler die kijkt.
function endReasonText(winner, kind) {
  const solo = kijkVanuitP1();
  const jij = winner === 'p1';
  if (kind === 'opgeven') return jij ? tr('De tegenstander gaf op', 'The opponent forfeited') : tr('Je gaf op', 'You forfeited');
  if (kind === 'verbinding') return tr('De verbinding met je tegenstander is verbroken', 'The connection to your opponent was lost');
  if (kind === 'goal') {
    if (!solo) return tr(`Speler ${jij ? 1 : 2} bereikte het doel van de tegenstander`, `Player ${jij ? 1 : 2} reached the opponent’s goal`);
    return jij ? tr('Je figuur bereikte hun doel!', 'Your figure reached their goal!') : tr('De tegenstander bereikte jouw doel', 'The opponent reached your goal');
  }
  if (kind === 'lockout') {
    if (!solo) return tr(`Speler ${jij ? 2 : 1} kon geen zet meer doen`, `Player ${jij ? 2 : 1} could not make a move`);
    return jij ? tr('De tegenstander kon geen zet meer doen', 'The opponent could not make a move') : tr('Je kon geen zet meer doen', 'You could not make a move');
  }
  if (kind === 'time') {
    if (!solo) return tr(`De bedenktijd van speler ${jij ? 2 : 1} is op`, `Player ${jij ? 2 : 1} ran out of time`);
    return jij ? tr('De bedenktijd van de tegenstander is op', 'The opponent ran out of time') : tr('Je bedenktijd is op', 'You ran out of time');
  }
  return kind;
}

function endMatch(winner, kind) {
  if (state.over) return;   // dubbele triggers (klok + zet) afvangen
  const msg = endReasonText(winner, kind);
  state.over = true; stopClock(); clearSpinTicks();
  let gain = 0;
  if (state.mode === 'solo') {
    gain = winner === 'p1' ? WIN_CREDITS : LOSS_CREDITS;
    profile.credits += gain;
    if (winner === 'p1') profile.stats.wins++; else profile.stats.losses++;
    saveProfile();
  }
  const won = winner === 'p1';
  // Het doel bereiken is HET moment: laat het doel openbarsten voor het
  // eindscherm eroverheen komt.
  if (kind === 'goal') {
    const doel = Object.values(NODES).find(n => n.type === 'goal' && n.owner !== winner);
    if (doel) queueFX(doel.x, doel.y, 'goal:' + winner);
  }
  document.getElementById('result-title').textContent = kijkVanuitP1() ? (won ? t('result.win') : t('result.lose')) : (won ? t('result.p1win') : t('result.p2win'));
  document.getElementById('result-title').className = 'result-title ' + (!kijkVanuitP1() || won ? 'win' : 'lose');
  document.getElementById('result-reason').textContent = msg;
  document.getElementById('result-reward').textContent = state.mode === 'solo' ? `+${gain} credits` : '';
  const roster = document.getElementById('result-roster');
  if (roster) {
    const figs = Object.values(state.units)
      .filter(u => u.owner === winner)
      .slice(0, 6)
      .map(u => unitVisual(u.defKey, winner, 64))
      .join('');
    roster.innerHTML = figs + '<div class="result-pad" aria-hidden="true"></div>';
  }
  renderAll();
  // Het eindscherm komt met een tel vertraging, zodat je de laatste zet nog
  // ziet. Ben je intussen naar het menu gelopen, dan hoort het er niet meer
  // overheen te ploffen.
  setTimeout(() => {
    if (!document.getElementById('screen-game').classList.contains('active')) return;
    sfx(!kijkVanuitP1() || won ? 'win' : 'lose');
    Audio_.playSting(!kijkVanuitP1() || won ? 'win' : 'lose');
    Audio_.stopLoop();
    document.getElementById('result-overlay').classList.add('active');
  }, kind === 'goal' && !animOff() ? 1700 : 900);
}

