// ==========================================
// EVOLUEREN TIJDENS EEN POTJE (sessie 39)
// Duel-regel: wint een figuur een gevecht en hangt z'n evolutie eronder, dan
// MAG hij evolueren. Hij krijgt dan de schijf van z'n evolutie PLUS de bonus
// (+10 wit/goud, +1 ster paars) — daarom loont het om klein te beginnen.
// ==========================================
function kanEvolueren(u) {
  return !!(u && u.evoKey && UNIT_DEFS[u.evoKey]);
}

function doeEvolutie(u) {
  const naar = u.evoKey; if (!UNIT_DEFS[naar]) return;
  const van = unitName(u.defKey);
  // De schijf van de evolutie plus de bonus. Voor jouw figuren geldt het level
  // dat je van die evolutie in je collectie hebt; de AI heeft geen collectie,
  // dus die houdt het level van z'n eigen deck aan.
  const uitCollectie = !(state.mode === 'solo' && u.owner === 'p2');
  const lvl = isOnline() && u.owner === 'p2' ? ((Online.tegen.levels && Online.tegen.levels[naar]) || 1)
    : uitCollectie ? ((profile && profile.owned && profile.owned[naar]) || 1) : (u.level || 1);
  const tmp = { slots: JSON.parse(JSON.stringify(UNIT_DEFS[naar].slots)) };
  for (let i = 1; i < lvl; i++) levelSlotBoost(tmp);
  u.defKey = naar;
  u.level = lvl;
  // NIET opnieuw arrangeSlots(): de schijven in UNIT_DEFS zijn bij het laden al
  // in hun vaste volgorde gezet, en evolutieBonus laat die volgorde intact.
  u.slots = evolutieBonus(tmp.slots);
  // Een keten van drie: hangt de volgende stap er ook onder, dan kan hij in
  // hetzelfde potje nóg een keer evolueren (na een volgend gewonnen gevecht).
  u.evoKey = (u.evoMap && u.evoMap[naar]) || null;
  u.evolved = !u.evoKey;
  u.undyingUsed = false;
  sfx('evolve');
  if (u.node && NODES[u.node]) queueFX(NODES[u.node].x, NODES[u.node].y, 'evolutie:' + u.owner);
  toast(tr(`${van} evolueert tot ${unitName(naar)}!`, `${van} evolves into ${unitName(naar)}!`));
}

// Het keuzemoment. De speler krijgt een scherm, de AI beslist zelf.
function vraagEvolutie(u) {
  return new Promise(res => {
    if (!kanEvolueren(u)) { res(false); return; }
    // De AI evolueert altijd: een grotere schijf mét bonus is nooit slechter
    // dan dezelfde schijf zonder.
    if (state.mode === 'solo' && u.owner === 'p2') { doeEvolutie(u); res(true); return; }
    // Online kiest de tegenstander zelf; zijn antwoord komt als bericht binnen.
    if (isOnline() && u.owner === 'p2') {
      const klaarTegen = (ja) => { if (ja) doeEvolutie(u); res(ja); };
      if (Online.evoAntwoorden.length) { klaarTegen(Online.evoAntwoorden.shift()); return; }
      toast(tr('De tegenstander kiest of hij evolueert…', 'The opponent is choosing whether to evolve…'));
      Online.evoWachter = klaarTegen;
      return;
    }
    const ov = document.getElementById('evo-overlay');
    const naar = u.evoKey;
    document.getElementById('evo-van-art').innerHTML = unitVisual(u.defKey, u.owner, 92);
    document.getElementById('evo-naar-art').innerHTML = unitVisual(naar, u.owner, 92);
    document.getElementById('evo-van-naam').textContent = unitName(u.defKey);
    document.getElementById('evo-naar-naam').textContent = unitName(naar);
    document.getElementById('evo-naar-sub').textContent = `${facName(UNIT_DEFS[naar].fac)} · ${UNIT_DEFS[naar].mp} MP`;
    ov.classList.add('active');
    const ja = document.getElementById('btn-evo-ja'), nee = document.getElementById('btn-evo-nee');
    const klaar = (evolueren) => {
      ja.onclick = null; nee.onclick = null;
      if (isOnline()) onlineZend({ t: 'evo', ja: evolueren });
      ov.classList.remove('active');
      if (evolueren) doeEvolutie(u);
      res(evolueren);
    };
    ja.onclick = () => klaar(true);
    nee.onclick = () => klaar(false);
  });
}

let toastT; function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2000); }

document.getElementById('btn-end-turn').addEventListener('click', () => { if (magHandelen()) endTurn(); });
let pauseWasLocked = false;
function openPause() {
  if (!state || state.over) { goHome(); return; }
  if (!S('confirmExit')) { goHome(); return; }
  pauseWasLocked = !!state.locked;
  state.locked = true;
  const ov = document.getElementById('pause-overlay');
  if (ov) ov.classList.add('active');
  const title = document.getElementById('pause-title');
  if (title) title.textContent = t('pause.title');
  Audio_.setDuck(0.32);
}
function closePause() {
  const ov = document.getElementById('pause-overlay');
  if (ov) ov.classList.remove('active');
  if (state && !state.over) state.locked = pauseWasLocked;
  Audio_.setDuck(1);
}
document.getElementById('btn-menu').addEventListener('click', openPause);
// Random vult je team met basisvormen die je bezit, en hangt daar meteen de
// evoluties onder die je ook al hebt — anders zou 'Random' je evolutieketens
// stilletjes weggooien.
document.getElementById('btn-deck-random').addEventListener('click', () => {
  const basis = Object.keys(profile.owned).filter(isBasisvorm);
  deckSel.units = randomPick(basis, Math.min(6, basis.length));
  deckSel.evos = {};
  for (const k of deckSel.units) {
    let stap = k;
    while (true) {
      const opts = evolutieOpties(stap).filter(e => profile.owned[e]);
      if (!opts.length) break;
      deckSel.evos[stap] = opts[0]; stap = opts[0];
    }
  }
  deckSel.plates = randomPlates();
  renderDeckSelect();
});
document.getElementById('btn-deck-start').addEventListener('click', onDeckConfirm);
document.getElementById('btn-deck-back').addEventListener('click', goHome);
// Home-tegels & subschermen — delegated, so a shell-refresh keeps working.
document.addEventListener('click', (e) => {
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest('#tile-solo')) startMatchFlow('solo');
  else if (t.closest('#tile-hotseat')) startMatchFlow('hotseat');
  else if (t.closest('#tile-online')) { if (window.SchijfduelNet) window.SchijfduelNet.open(); }
  else if (t.closest('#tile-collection')) { renderCollection(); showScreen('collection'); }
  else if (t.closest('#tile-store')) { renderStore(); showScreen('store'); }
  else if (t.closest('#tile-settings')) { renderSettings(); showScreen('settings'); }
  else if (t.closest('#tile-help')) { renderHelp(); showScreen('help'); }
  else if (t.closest('#btn-pause-resume')) closePause();
  else if (t.closest('#btn-pause-quit')) { closePause(); goHome(); }
});

// Audio mag op mobiel pas starten ná een gebruikersgebaar — de eerste tik waar
// dan ook in de app ontgrendelt de AudioContext.
for (const ev of ['pointerdown', 'touchstart', 'keydown']) {
  window.addEventListener(ev, () => Audio_.unlock(), { once: true, passive: true });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;
  if (Audio_.ctx && Audio_.ctx.state === 'suspended' && Audio_.unlocked) Audio_.ctx.resume().catch(() => {});
  if (S('music') && Audio_.unlocked) Audio_.syncTrack();
});
// Elke tik op een knop/tegel geeft feedback; overige klikgeluiden staan bij de actie zelf.
document.addEventListener('click', (e) => {
  if (e.target.closest('.home-tile, .btn-back, .coll-card, .plate-chip, .deck-card')) sfx('click');
}, true);
for (const b of document.querySelectorAll('.btn-back')) b.addEventListener('click', () => { renderHome(); showScreen(b.dataset.back); });
document.getElementById('btn-detail-close').addEventListener('click', () => document.getElementById('detail-overlay').classList.remove('active'));
document.getElementById('btn-detail-upgrade').addEventListener('click', doUpgrade);
document.getElementById('btn-result-menu').addEventListener('click', goHome);
document.getElementById('btn-info-close').addEventListener('click', () => document.getElementById('info-overlay').classList.remove('active'));
document.getElementById('booster-card').addEventListener('click', openBooster);
document.getElementById('btn-booster-close').addEventListener('click', () => document.getElementById('booster-overlay').classList.remove('active'));
document.getElementById('btn-booster-again').addEventListener('click', () => { document.getElementById('booster-overlay').classList.remove('active'); openBooster(); });
document.getElementById('info-overlay').addEventListener('click', (e) => { if (e.target.id === 'info-overlay') e.currentTarget.classList.remove('active'); });

