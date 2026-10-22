function initialState() {
  // 0 = klok uit. Online nog zonder klok: elke browser zou zijn eigen tijd bijhouden.
  const ms = currentMode === 'online' ? 0 : S('clockMinutes') * 60000;
  return { turn:'p1', turnN:0, actionsLeft:1, units:{}, bench:{p1:[],p2:[]}, hc:{p1:[],p2:[]}, selected:null, legalTargets:new Set(), pendingDeploy:null, over:false, mode: currentMode, aiThinking: false, locked: false, plates:{p1:[],p2:[]}, usedPlates:{p1:[],p2:[]}, counterAttack:{p1:false,p2:false}, plateUsed:false, pendingPlate:null, mpBonus:{}, warcry:{p1:false,p2:false}, firstMoveDone:false, animating:null, pendingFX:[], craters:[], portals:[], clock: ms ? { p1:ms, p2:ms } : null };
}

// ===== Schaakklok (Duel-regel: 5 min per speler; tijd op = verlies) =====
// De klok tikt alleen tijdens je eigen beurt en pauzeert tijdens
// animaties/gevechten (state.locked).
let clockTimer = null, clockLast = 0;
function fmtClock(ms) { const s = Math.max(0, Math.ceil(ms / 1000)); return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`; }
function startClock() { stopClock(); if (!state || !state.clock) return; clockLast = performance.now(); clockTimer = setInterval(tickClock, 250); }
function stopClock() { if (clockTimer) { clearInterval(clockTimer); clockTimer = null; } }
function tickClock() {
  const now = performance.now(); const dt = now - clockLast; clockLast = now;
  if (!state || state.over || state.locked || !state.clock) return;
  const gameActive = document.getElementById('screen-game').classList.contains('active');
  if (!gameActive) return;
  const before = state.clock[state.turn];
  state.clock[state.turn] -= dt;
  paintClocks();
  // Laatste 5 seconden: één tik per seconde, alleen in je eigen beurt
  if (state.clock[state.turn] < 5000 && Math.ceil(before / 1000) !== Math.ceil(state.clock[state.turn] / 1000)) sfx('tick');
  if (state.clock[state.turn] <= 0) { state.clock[state.turn] = 0; endMatch(state.turn === 'p1' ? 'p2' : 'p1', 'time'); }
}

function paintClocks() {
  const clocks = state && state.clock;
  for (const p of ['p1', 'p2']) {
    const e = document.getElementById('hud-' + p + '-clock');
    if (!e) continue;
    if (!clocks) { e.textContent = '—'; e.style.color = ''; e.classList.remove('klok-krap', 'klok-paniek'); continue; }
    const rest = clocks[p];
    e.textContent = fmtClock(rest);
    const active = state.turn === p;
    e.style.color = (active && rest < 30000) ? '#f87171' : '';
    e.classList.toggle('klok-krap', active && rest < 30000 && rest > 0 && !animOff());
    e.classList.toggle('klok-paniek', active && rest < 10000 && rest > 0 && !animOff());
  }
  const cEl = document.getElementById('turn-clock');
  if (cEl) cEl.textContent = clocks ? fmtClock(clocks[state.turn]) : '—';
  const bEl = document.getElementById('turn-banner');
  const rest = clocks ? clocks[state.turn] : 0;
  if (bEl) bEl.classList.toggle('tijdnood', !!clocks && rest < 10000 && rest > 0 && !animOff());
}

// Duel-regel: KO → P.C. (herstelcentrum). Aan het begin van je volgende beurt
// gaan alle figuren uit het P.C. terug naar de zijlijn, inzetbaar die beurt.
// Statussen genezen in het P.C.; level blijft behouden.
// Duel-regel: maar ÉÉN special condition tegelijk — een nieuwe vervangt de
// oude. 'wait' en 'bulwark' zijn geen conditions en blijven staan.
function immuneTo(u, st) {
  const ab = abilityOf(u);
  if (st === 'sleep' && (ab === 'insomnia' || ab === 'icewall')) return true;
  if ((st === 'burn' || st === 'frozen') && ab === 'icewall') return true;
  if (st === 'paralysis' && ab === 'grounding') return true;
  return false;
}

function applyCondition(u, st) {
  const SPECIAL = ['poison','badlypoison','burn','paralysis','confusion','sleep','frozen','curse'];
  if (st === 'wait') { markWait(u); return; }
  if (immuneTo(u, st)) return;
  if (!SPECIAL.includes(st)) { if (!u.status.includes(st)) u.status.push(st); return; }
  u.status = u.status.filter(s => !SPECIAL.includes(s));
  u.status.push(st);
}

function markWait(u) {
  if (!u.status.includes('wait')) u.status.push('wait');
  u.waitTurn = (state && state.turnN) || 0;
}

function koUnit(u) {
  u.node = null; u.status = [];
  // Bergvast: sla het P.C. over, direct terug naar de bank met Wacht
  if (abilityOf(u) === 'mountain') { markWait(u); state.bench[u.owner].push(u.uid); return; }
  state.hc[u.owner].push(u.uid);
}

let deckSel = { units: [], plates: [], evos: {} };
let deckStage = 'p1';      // hotseat: eerst P1, dan P2
let deckP1 = null;          // P1-keuze geparkeerd tijdens P2-stage
// Vult een willekeurige kaartenhand tot precies binnen het budget van 8.
function randomPlates() {
  const keys = Object.keys(PLATES);
  const out = [];
  let guard = 40;
  while (guard-- > 0) {
    const room = PLATE_BUDGET - plateCost(out);
    const fits = keys.filter(k => !out.includes(k) && PLATES[k].cost <= room);
    if (!fits.length) break;
    out.push(fits[Math.floor(Math.random() * fits.length)]);
  }
  return out;
}

function randomPick(arr, n) { const a = [...arr]; const out = []; while (out.length < n && a.length) out.push(a.splice(Math.floor(Math.random()*a.length), 1)[0]); return out; }

