// Online spelen (#10): verbinden met een kamercode van 4 tekens, zonder eigen
// server. PeerJS regelt de WebRTC-verbinding: aanmelden gaat via de gratis
// PeerJS-server, daarna praten de twee browsers rechtstreeks met elkaar.
// Het potje zelf speelt de engine (src/engine.js, zie de sectie ONLINE daar).
// De engine roept window.SchijfduelNet aan; wij roepen zijn globale functies
// startMatchFlow(), onlineStart(), onlineOntvang() en onlineVerbroken() aan.

const LETTERS = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';   // geen 0/O/1/I
const VOORVOEGSEL = 'schijfduel-';
const $ = (id) => document.getElementById(id);
const tekst = (nl, en) => (typeof tr === 'function' ? tr(nl, en) : nl);   // tr() komt uit de engine

let versie = '';
let peer = null, verbinding = null;
let rol = null;            // 'host' (maakte de kamer) of 'gast'
let eigenTeam = null, tegenTeam = null, gestart = false;
// Hartslag: WebRTC merkt niet altijd dat de ander weg is (tabblad dicht, geen
// bereik). Elke 4 s een teken van leven; na STILTE_MS niets gehoord = weg.
// Ruim gekozen, zodat even naar een andere app gaan geen verlies kost.
const STILTE_MS = (Number(new URLSearchParams(location.search).get('stilte')) || 45) * 1000;
let hartslag = null, laatstGehoord = 0;
// Begroeting: een bericht dat precies bij het openen van het kanaal wordt
// verstuurd, komt soms niet aan. Daarom herhalen we 'hallo' elke seconde tot
// die van de ander binnen is (heb = 'ik heb de jouwe al').
let halloOntvangen = false, halloTimer = null;

// PeerJS pas laden als iemand online wil spelen.
const laadPeer = () => import('peerjs').then((m) => m.Peer);

// Testen met een eigen PeerServer: ?peerserver=127.0.0.1:9000
function peerOpties() {
  const p = new URLSearchParams(location.search).get('peerserver');
  if (!p) return { debug: 1 };
  const [host, port] = p.split(':');
  return { host, port: Number(port) || 9000, path: '/', secure: false, debug: 1 };
}

function nieuweCode() {
  return [...crypto.getRandomValues(new Uint32Array(4))].map((x) => LETTERS[x % LETTERS.length]).join('');
}

function zetStatus(t) { $('online-status').textContent = t || ''; }
function toonBlok(naam) {
  $('online-keuze').hidden = naam !== 'keuze';
  $('online-kamer').hidden = naam !== 'kamer';
}
function fout(e) {
  console.error('Online:', e);
  if (typeof e === 'string') { zetStatus(e); return; }
  const soort = e && e.type;
  zetStatus(soort === 'network' || soort === 'server-error' || soort === 'socket-error'
    ? tekst('De verbindingsserver is niet bereikbaar. Probeer het zo nog eens.', 'The connection server is unreachable. Try again shortly.')
    : tekst('Verbinden lukte niet. Probeer het nog eens.', 'Could not connect. Please try again.'));
}

function teksten() {
  $('btn-online-maak').textContent = tekst('Kamer maken', 'Create room');
  $('online-of').textContent = tekst('of doe mee met een code', 'or join with a code');
  $('btn-online-mee').textContent = tekst('Meedoen', 'Join');
  $('online-uitleg').textContent = tekst('Geef deze code aan je tegenstander', 'Give this code to your opponent');
  $('btn-online-deel').textContent = tekst('Link delen', 'Share link');
  $('btn-online-terug').textContent = tekst('‹ Terug', '‹ Back');
}

function open(code) {
  stop();
  teksten(); toonBlok('keuze'); zetStatus('');
  $('online-code').value = code || '';
  $('online-overlay').classList.add('active');
  if (code) meedoen(code);
}
function sluitScherm() { $('online-overlay').classList.remove('active'); }

function stop() {
  clearInterval(hartslag); hartslag = null;
  clearInterval(halloTimer); halloTimer = null;
  const c = verbinding, p = peer;
  verbinding = null; peer = null; rol = null; eigenTeam = null; tegenTeam = null; gestart = false;
  try { if (c) c.close(); } catch { /* al dicht */ }
  try { if (p) p.destroy(); } catch { /* al weg */ }
}

async function kamerMaken(poging = 0) {
  stop(); rol = 'host';
  const code = nieuweCode();
  toonBlok('kamer'); $('online-kamercode').textContent = code;
  zetStatus(tekst('Kamer openen…', 'Opening room…'));
  const Peer = await laadPeer();
  if (rol !== 'host' || peer) return;   // intussen teruggegaan
  const p = peer = new Peer(VOORVOEGSEL + code.toLowerCase(), peerOpties());
  p.on('open', () => zetStatus(tekst('Wachten op je tegenstander…', 'Waiting for your opponent…')));
  p.on('connection', (c) => {
    if (verbinding) { c.on('open', () => c.close()); return; }   // de kamer is al vol
    koppel(c);
  });
  p.on('disconnected', () => { if (peer === p && !verbinding) p.reconnect(); });
  p.on('error', (e) => {
    if (peer !== p) return;
    if (e.type === 'unavailable-id' && poging < 3) { kamerMaken(poging + 1); return; }
    fout(e);
  });
}

async function meedoen(invoer) {
  const code = String(invoer || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  if (code.length !== 4) { zetStatus(tekst('Een kamercode heeft 4 tekens', 'A room code has 4 characters')); return; }
  stop(); rol = 'gast';
  zetStatus(tekst(`Verbinden met kamer ${code}…`, `Connecting to room ${code}…`));
  const Peer = await laadPeer();
  if (rol !== 'gast' || peer) return;
  const p = peer = new Peer(peerOpties());
  p.on('open', () => koppel(p.connect(VOORVOEGSEL + code.toLowerCase(), { reliable: true, serialization: 'json' })));
  p.on('error', (e) => {
    if (peer !== p) return;
    fout(e.type === 'peer-unavailable' ? tekst(`Kamer ${code} bestaat niet (meer)`, `Room ${code} does not exist`) : e);
  });
}

function koppel(c) {
  verbinding = c;
  c.on('open', () => {
    if (verbinding !== c) return;
    zetStatus(tekst('Verbonden!', 'Connected!'));
    halloOntvangen = false;
    const groet = () => { if (verbinding === c && !halloOntvangen) zend({ t: 'hallo', versie, heb: false }); else clearInterval(halloTimer); };
    clearInterval(halloTimer);
    groet();
    halloTimer = setInterval(groet, 1000);
    laatstGehoord = Date.now();
    clearInterval(hartslag);
    hartslag = setInterval(() => {
      if (verbinding !== c) return;
      if (Date.now() - laatstGehoord > STILTE_MS) { try { c.close(); } catch { /* al dicht */ } verbroken(); return; }
      zend({ t: 'ping' });
    }, 4000);
  });
  c.on('data', (b) => { if (verbinding === c) { laatstGehoord = Date.now(); ontvang(b); } });
  c.on('close', () => { if (verbinding === c) verbroken(); });
  c.on('error', (e) => console.error('Online:', e));
}

function zend(b) { if (verbinding && verbinding.open) verbinding.send(b); }

function ontvang(b) {
  if (!b || typeof b.t !== 'string' || b.t === 'ping') return;
  if (b.t === 'hallo') {
    if (b.versie !== versie) {
      stop(); toonBlok('keuze');
      zetStatus(tekst('Jullie hebben een andere versie van het spel. Ververs allebei de pagina.', 'You have different versions of the game. Both refresh the page.'));
      return;
    }
    if (!b.heb) zend({ t: 'hallo', versie, heb: true });   // de ander mist de onze nog
    if (halloOntvangen) return;
    halloOntvangen = true; clearInterval(halloTimer);
    sluitScherm();
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    startMatchFlow('online');
    return;
  }
  if (b.t === 'team') {
    tegenTeam = { units: b.units, plates: b.plates, evos: b.evos || {}, levels: b.levels || {} };
    probeerStart();
    return;
  }
  if (b.t === 'start') { if (rol === 'gast' && !gestart) begin(b.seed, b.beginner === 'gast'); return; }
  onlineOntvang(b);
}

// De engine meldt dat ons team gekozen is.
function teamGekozen(team) {
  eigenTeam = team;
  zend({ t: 'team', ...team });
  probeerStart();
}

// De host start het potje zodra beide teams er zijn: hij kiest het startgetal
// voor de schijven en wie begint, en stuurt dat naar de gast.
function probeerStart() {
  if (rol !== 'host' || gestart || !eigenTeam || !tegenTeam) return;
  const seed = crypto.getRandomValues(new Uint32Array(1))[0];
  const beginner = crypto.getRandomValues(new Uint8Array(1))[0] < 128 ? 'host' : 'gast';
  zend({ t: 'start', seed, beginner });
  begin(seed, beginner === 'host');
}

function begin(seed, ikBegin) {
  gestart = true;
  onlineStart({ seed, ikBegin, tegen: tegenTeam });
}

function verbroken() {
  const wasGestart = gestart;
  clearInterval(hartslag); hartslag = null;
  verbinding = null;
  if (wasGestart) { onlineVerbroken(); return; }
  if ($('online-overlay').classList.contains('active')) { stop(); toonBlok('keuze'); zetStatus(tekst('De verbinding is verbroken', 'The connection was lost')); return; }
  toast(tekst('Je tegenstander is weg', 'Your opponent left'));
  goHome();
}

async function deel() {
  const url = location.origin + location.pathname + '#kamer=' + $('online-kamercode').textContent;
  try {
    if (navigator.share) await navigator.share({ title: 'Schijfduel', text: tekst('Speel een potje Schijfduel tegen me!', 'Play a match of Schijfduel against me!'), url });
    else { await navigator.clipboard.writeText(url); zetStatus(tekst('Link gekopieerd', 'Link copied')); }
  } catch { /* delen geannuleerd */ }
}

// Kleine, stabiele hash: beide spelers moeten precies dezelfde engine draaien.
function hash(tekst) {
  let h = 0x811c9dc5;
  for (let i = 0; i < tekst.length; i++) { h ^= tekst.charCodeAt(i); h = Math.imul(h, 0x01000193); }
  return (h >>> 0).toString(36);
}

export function initOnline(bron) {
  versie = hash(bron);
  window.SchijfduelNet = { open: () => open(), zend, teamGekozen, sluit: stop };
  $('btn-online-maak').addEventListener('click', () => kamerMaken());
  $('btn-online-mee').addEventListener('click', () => meedoen($('online-code').value));
  $('online-code').addEventListener('keydown', (e) => { if (e.key === 'Enter') meedoen($('online-code').value); });
  $('btn-online-deel').addEventListener('click', deel);
  $('btn-online-terug').addEventListener('click', () => { stop(); sluitScherm(); });
  // Pagina dicht of weg: de verbinding netjes sluiten, dan weet de ander het meteen.
  window.addEventListener('pagehide', () => { if (verbinding) stop(); });
  // Uitnodigingslink: https://koen2222.github.io/Duel/#kamer=K7QX
  const m = location.hash.match(/kamer=([A-Za-z0-9]{4})/);
  if (m) open(m[1]);
}
