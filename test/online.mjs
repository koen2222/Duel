// Online-test (#10): twee spelers in aparte browsers verbinden via een kamercode
// (met een eigen PeerServer, dus zonder internet) en spelen een heel potje.
// Na elke zet wordt gecontroleerd dat beide engines, gespiegeld, exact
// hetzelfde bord hebben.
// Gebruik: npm run build (in de root), dan in test/: node online.mjs ../dist
// Chrome-pad via CHROME=/pad/naar/chrome (standaard /usr/bin/google-chrome).
import { chromium } from 'playwright-core';
import { PeerServer } from 'peer';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const HIER = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(process.argv[2] || path.join(HIER, '../dist'));
const MAX_ZETTEN = Number(process.env.MAX_ZETTEN || 80);
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
const fail = (m) => { console.error('FAIL:', m); process.exitCode = 1; };

// Spiegeling van het bord, berekend uit de echte bordcode in de engine.
const engine = fs.readFileSync(path.join(HIER, '../src/engine.js'), 'utf8');
const bordCode = engine.slice(engine.indexOf('const BOARD_CX'), engine.indexOf('const ADJ = {}'));
const NODES = new Function(`${bordCode}; return NODES;`)();
const SPIEGEL = {};
for (const [k, n] of Object.entries(NODES)) SPIEGEL[k] = Object.keys(NODES).find((m) => NODES[m].x === 540 - n.x && NODES[m].y === 890 - n.y);
const spUid = (u) => 'u' + (+u.slice(1) <= 6 ? +u.slice(1) + 6 : +u.slice(1) - 6);
const spP = (p) => (p === 'p1' ? 'p2' : 'p1');

function serve() {
  return new Promise((res) => {
    const srv = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (!p.startsWith('/Duel/')) { rsp.writeHead(404); return rsp.end(); }
      p = path.join(ROOT, p.slice(6));
      if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
      fs.readFile(p, (e, d) => { if (e) { rsp.writeHead(404); return rsp.end(); } rsp.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' }); rsp.end(d); });
    }).listen(0, '127.0.0.1', () => res(srv));
  });
}

const peerHttp = await new Promise((r) => PeerServer({ host: '127.0.0.1', port: 0, path: '/' }, r));
const peerPoort = peerHttp.address().port;
const srv = await serve();
const base = `http://127.0.0.1:${srv.address().port}/Duel/?peerserver=127.0.0.1:${peerPoort}&stilte=8`;
const browser = await chromium.launch({
  executablePath: process.env.CHROME || '/usr/bin/google-chrome',
  args: ['--no-sandbox', '--disable-features=WebRtcHideLocalIpsWithMdns'],
});

const fouten = [];
const onlineLog = [];
async function speler(naam) {
  const ctx = await browser.newContext({ viewport: { width: 430, height: 900 }, locale: 'nl-NL' });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => fouten.push(`${naam}: ${e}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|favicon|ERR_|404|stun|turn|ICE/i.test(m.text())) fouten.push(`${naam}: ${m.text()}`); });
  page.on('console', (m) => { if (/Online|PeerJS|peer/i.test(m.text())) onlineLog.push(`${naam}: ${m.text().slice(0, 160)}`); });
  await page.addInitScript(() => {
    const p = JSON.stringify({ credits: 400, owned: { p001: 2, p002: 1, p004: 1, p005: 1, p007: 1, p025: 1, p092: 1, p147: 1, p010: 1, p011: 1, p012: 1 }, settings: { animSpeed: 'uit', lang: 'nl', autoEndTurn: true } });
    for (const k of ['schijfduel_profile', 'rondel_profile']) if (!localStorage.getItem(k)) localStorage.setItem(k, p);
  });
  return page;
}

const host = await speler('host');
const gast = await speler('gast');

// 1. Kamer maken en meedoen via de uitnodigingslink
await host.goto(base, { waitUntil: 'load' });
await host.waitForFunction(() => window.SchijfduelNet && window.__rondelQA);
await host.click('#tile-online');
await host.click('#btn-online-maak');
await host.waitForFunction(() => /Wachten/.test(document.querySelector('#online-status').textContent), null, { timeout: 15000 });
const code = await host.$eval('#online-kamercode', (e) => e.textContent);
console.log('Kamer:', code);
await gast.goto(`${base}#kamer=${code}`, { waitUntil: 'load' });

// 2. Allebei een team kiezen
for (const p of [host, gast]) {
  await p.waitForSelector('#deck-overlay.active', { timeout: 20000 });
  await p.click('#btn-deck-random');
  await p.click('#btn-deck-start');
}
for (const p of [host, gast]) await p.waitForFunction(() => { const s = window.__rondelQA.state; return s && s.mode === 'online' && Object.keys(s.units).length === 12; }, null, { timeout: 15000 });
console.log('Potje gestart');

// Toestand van één kant, in de vorm die we kunnen vergelijken
const toestand = (p) => p.evaluate(() => {
  const s = window.__rondelQA.state;
  return {
    turn: s.turn, turnN: s.turnN, over: s.over, firstMoveDone: s.firstMoveDone,
    units: Object.values(s.units).map((u) => ({ uid: u.uid, defKey: u.defKey, owner: u.owner, node: u.node, level: u.level, status: [...u.status].sort() })),
    bench: s.bench, hc: s.hc, plates: s.plates, usedPlates: s.usedPlates,
  };
});
function spiegelToestand(t) {
  return {
    turn: spP(t.turn), turnN: t.turnN, over: t.over, firstMoveDone: t.firstMoveDone,
    units: t.units.map((u) => ({ ...u, uid: spUid(u.uid), owner: spP(u.owner), node: u.node && SPIEGEL[u.node] })).sort((a, b) => +a.uid.slice(1) - +b.uid.slice(1)),
    bench: { p1: t.bench.p2.map(spUid), p2: t.bench.p1.map(spUid) },
    hc: { p1: t.hc.p2.map(spUid), p2: t.hc.p1.map(spUid) },
    plates: { p1: t.plates.p2, p2: t.plates.p1 },
    usedPlates: { p1: t.usedPlates.p2, p2: t.usedPlates.p1 },
  };
}
const sorteer = (t) => ({ ...t, units: [...t.units].sort((a, b) => +a.uid.slice(1) - +b.uid.slice(1)) });

const rust = (p) => p.evaluate(() => {
  const s = window.__rondelQA.state;
  return !s.locked && !s.animating && !document.querySelector('#vs-overlay.active, #combat-overlay.active, #evo-overlay.active');
});
// Gevechten wegklikken en evoluties accepteren, op beide schermen
let evoluties = 0;
async function overlays(p) {
  if (await p.$eval('#btn-combat-continue', (e) => e.offsetParent !== null && getComputedStyle(e).display !== 'none').catch(() => false)) await p.click('#btn-combat-continue').catch(() => {});
  if (await p.$('#evo-overlay.active')) { await p.click('#btn-evo-ja').catch(() => {}); evoluties++; }
  if (await p.$('#info-overlay.active')) await p.click('#btn-info-close').catch(() => {});
}

// Eén zet van de speler die aan de beurt is (via dezelfde functies als een tik)
const zet = (p, metKaart) => p.evaluate((metKaart) => {
  const s = window.__rondelQA.state;
  if (metKaart && !s.plateUsed && s.plates.p1.length) {
    onPlateTap(Math.floor(Math.random() * s.plates.p1.length));
    for (let i = 0; i < 3 && s.pendingPlate; i++) {
      const pp = s.pendingPlate;
      if ((pp.key === 'longthrow' && pp.stage === 1) || (pp.key === 'pokeswitch' && pp.stage === 2)) {
        const uid = s.bench.p1.find((id) => !s.units[id].status.includes('wait'));
        if (uid) onBenchTap(uid); else break;
        continue;
      }
      const doel = [...s.legalTargets][0];
      if (!doel) break;
      const o = unitAt(doel);
      if (o && pp.stage === 1) onUnitTap(o.uid); else if (o && pp.key === 'swapspot') onUnitTap(o.uid); else onNodeTap(doel);
    }
    if (s.pendingPlate) onPlateTap(s.pendingPlate.idx);   // lukte niet: kaart weer neerleggen
    if (s.locked || s.actionsLeft <= 0 || s.over) return 'kaart';
  }
  const mine = Object.values(s.units).filter((u) => u.owner === 'p1');
  for (const u of mine.filter((u) => u.node && !u.status.includes('wait') && !u.status.includes('sleep'))) for (const t of legalMoves(u)) { const o = unitAt(t); if (o && o.owner === 'p2') { onUnitTap(u.uid); onNodeTap(t); return 'aanval'; } }
  for (const uid of s.bench.p1) { const u = s.units[uid]; if (u.status.includes('wait')) continue; const ts = [...deployTargets(u)]; if (ts.length) { ts.sort((a, b) => distTo(a, 'G2') - distTo(b, 'G2')); onBenchTap(uid); onNodeTap(ts[0]); return 'inzet'; } }
  for (const u of mine.filter((u) => u.node && !u.status.includes('wait') && !u.status.includes('sleep'))) { const ms = [...legalMoves(u)].filter((t) => !unitAt(t)); if (ms.length) { ms.sort((a, b) => distTo(a, 'G2') - distTo(b, 'G2')); onUnitTap(u.uid); onNodeTap(ms[0]); return 'zet'; } }
  endTurn(); return 'einde';
}, metKaart);

const details = (p) => p.evaluate(() => { const s = window.__rondelQA.state, o = window.__rondelQA.online; return { turn: s.turn, turnN: s.turnN, acties: s.actionsLeft, locked: s.locked, animating: s.animating, plateUsed: s.plateUsed, pendingPlate: s.pendingPlate, pendingDeploy: s.pendingDeploy, selected: s.selected, doelen: [...s.legalTargets], wachtrij: o.wachtrij, evoWacht: !!o.evoWachter, evoAntw: o.evoAntwoorden, overlays: [...document.querySelectorAll('.overlay.active')].map((e) => e.id), toast: document.querySelector('#toast').textContent }; });
let zetten = 0, vergeleken = 0, laatsteN = -1, laatsteVoortgang = Date.now(), laatsteStand = '';
const soorten = {};
const start = Date.now();
while (zetten < MAX_ZETTEN && Date.now() - start < 300000) {
  await overlays(host); await overlays(gast);
  const [th, tg] = [await toestand(host), await toestand(gast)];
  if (th.over || tg.over) break;
  const stand = `${th.turnN}/${tg.turnN}/${zetten}`;
  if (stand !== laatsteStand) { laatsteStand = stand; laatsteVoortgang = Date.now(); }
  else if (Date.now() - laatsteVoortgang > 20000) { fail(`20 s geen voortgang\n  host: ${JSON.stringify(await details(host))}\n  gast: ${JSON.stringify(await details(gast))}`); break; }
  const [rh, rg] = [await rust(host), await rust(gast)];
  // Beide kanten rustig en in dezelfde beurt: dan moeten ze exact gelijk zijn
  if (rh && rg && th.turnN === tg.turnN && th.turn === spP(tg.turn)) {
    const a = JSON.stringify(sorteer(th)), b = JSON.stringify(spiegelToestand(tg));
    if (a !== b) {
      // De gast kan nog een zet in de wachtrij hebben; even wachten en opnieuw
      await host.waitForTimeout(400);
      const a2 = JSON.stringify(sorteer(await toestand(host))), b2 = JSON.stringify(spiegelToestand(await toestand(gast)));
      if (a2 !== b2) { fail(`borden lopen uiteen na ${zetten} zetten\nhost: ${a2}\ngast: ${b2}`); break; }
    }
    vergeleken++;
    const aanZet = th.turn === 'p1' ? host : gast;
    const n = th.turn === 'p1' ? th.turnN : tg.turnN;
    if (n !== laatsteN || (await aanZet.evaluate(() => window.__rondelQA.state.actionsLeft > 0))) {
      const soort = await zet(aanZet, Math.random() < 0.3);
      soorten[soort] = (soorten[soort] || 0) + 1;
      zetten++; laatsteN = n;
    }
  }
  await host.waitForTimeout(100);
}

// 3. Nog geen winnaar? Dan geeft de host op (test meteen het opgeven).
let opgegeven = false;
if (!process.exitCode && !(await toestand(host)).over && !(await toestand(gast)).over) {
  await overlays(host); await overlays(gast);
  await host.waitForFunction(() => !document.querySelector('#combat-overlay.active, #evo-overlay.active'), null, { timeout: 10000 }).catch(() => {});
  await host.click('#btn-menu'); await host.click('#btn-pause-quit');
  opgegeven = true;
}

// 4. Afloop: beide schermen tonen een uitslag, en die is tegengesteld
const titel = (p) => p.waitForSelector('#result-overlay.active', { timeout: 15000 }).then(() => p.$eval('#result-title', (e) => e.textContent)).catch(() => null);
const [uh, ug] = opgegeven ? ['VERSLAGEN', await titel(gast)] : [await titel(host), await titel(gast)];
const reden = await gast.$eval('#result-reason', (e) => e.textContent).catch(() => '');
console.log(`Zetten: ${zetten} (${JSON.stringify(soorten)}), evoluties: ${evoluties}, borden ${vergeleken}× gelijk bevonden, uitslag host: ${uh}, gast: ${ug}${opgegeven ? ` (host gaf op; gast ziet: "${reden}")` : ''}`);
if (opgegeven && !/gaf op/.test(reden)) fail('gast kreeg geen melding dat de host opgaf');
const diagnose = (p) => p.evaluate(() => ({ scherm: document.querySelector('.screen.active')?.id, mode: window.__rondelQA.state.mode, over: window.__rondelQA.state.over, units: Object.keys(window.__rondelQA.state.units).length, reden: document.querySelector('#result-reason')?.textContent, toast: document.querySelector('#toast')?.textContent, overlays: [...document.querySelectorAll('.overlay.active')].map((e) => e.id) }));
if (!uh || !ug) fail('geen uitslag op beide schermen' + (zetten >= MAX_ZETTEN ? ' (max. zetten bereikt)' : '') + `\n  host: ${JSON.stringify(await diagnose(host))}\n  gast: ${JSON.stringify(await diagnose(gast))}`);
else if (!((uh === 'OVERWINNING' && ug === 'VERSLAGEN') || (uh === 'VERSLAGEN' && ug === 'OVERWINNING'))) fail(`uitslag klopt niet: ${uh} / ${ug}`);
if (!soorten.aanval) fail('geen enkele aanval gespeeld');
if (fouten.length) fail('JS-fouten:\n  ' + fouten.join('\n  '));

// 5. Verbinding valt weg tijdens een potje: de ander krijgt dat netjes te zien.
if (!process.exitCode) {
  for (const p of [host, gast]) {
    if (await p.$('#result-overlay.active')) await p.click('#btn-result-menu');
    await p.waitForSelector('#screen-home.active', { timeout: 10000 }).catch(async () => fail('niet terug op het beginscherm: ' + JSON.stringify(await p.evaluate(() => ({ scherm: document.querySelector('.screen.active')?.id, overlays: [...document.querySelectorAll('.overlay.active')].map((e) => e.id) })))));
  }
  await host.click('#tile-online'); await host.click('#btn-online-maak');
  await host.waitForFunction(() => /Wachten/.test(document.querySelector('#online-status').textContent), null, { timeout: 15000 });
  const code2 = await host.$eval('#online-kamercode', (e) => e.textContent);
  await gast.click('#tile-online'); await gast.fill('#online-code', code2.toLowerCase()); await gast.click('#btn-online-mee');
  for (const p of [host, gast]) {
    const ok = await p.waitForSelector('#deck-overlay.active', { timeout: 30000 }).then(() => true).catch(() => false);
    if (!ok) {
      const info = async (q) => JSON.stringify(await q.evaluate(() => ({ status: document.querySelector('#online-status').textContent, overlays: [...document.querySelectorAll('.overlay.active')].map((e) => e.id), scherm: document.querySelector('.screen.active')?.id })));
      fail(`tweede kamer: geen teamkeuze\n  host: ${await info(host)}\n  gast: ${await info(gast)}\n  log: ${onlineLog.slice(-12).join(' | ')}`);
      break;
    }
    await p.click('#btn-deck-random'); await p.click('#btn-deck-start');
  }
  if (!process.exitCode) await host.waitForFunction(() => Object.keys(window.__rondelQA.state.units).length === 12, null, { timeout: 15000 });
  if (!process.exitCode) {
    await gast.close({ runBeforeUnload: true });
    const t2 = await titel(host);
    const r2 = await host.$eval('#result-reason', (e) => e.textContent).catch(() => '');
    console.log(`Verbinding verbroken: host ziet "${t2}" — "${r2}"`);
    if (t2 !== 'OVERWINNING' || !/verbinding/i.test(r2)) fail('host kreeg het wegvallen van de verbinding niet goed te zien');
  }
}
if (!process.exitCode) console.log('OK: online-test geslaagd');
await browser.close(); srv.close(); peerHttp.close();
process.exit(process.exitCode || 0);
