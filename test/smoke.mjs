// Rooktest Schijfduel: speelt een solo-potje via echte klikken in een headless browser.
// Gebruik: node smoke.mjs            (serveert ../dist onder /Duel/; eerst `npm run build` in de root)
//          node smoke.mjs <map>      (serveert die map onder /Duel/)
//          BASE_URL=https://koen2222.github.io/Duel/ node smoke.mjs   (live testen)
// Chrome-pad via CHROME=/pad/naar/chrome (standaard /usr/bin/google-chrome).
import { chromium } from 'playwright-core';
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(process.argv[2] || path.join(path.dirname(fileURLToPath(import.meta.url)), '../dist'));
const MAX_TURNS = Number(process.env.MAX_TURNS || 80);
const TYPES = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.webmanifest':'application/manifest+json' };

function serve() {
  return new Promise(res => {
    const srv = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (!p.startsWith('/Duel/')) { rsp.writeHead(404); return rsp.end(); }
      p = path.join(ROOT, p.slice(6)); if (p.endsWith('/') || p === ROOT) p = path.join(p, 'index.html');
      fs.readFile(p, (e, d) => { if (e) { rsp.writeHead(404); return rsp.end(); } rsp.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' }); rsp.end(d); });
    }).listen(0, '127.0.0.1', () => res(srv));
  });
}

const fail = (m) => { console.error('FAIL:', m); process.exitCode = 1; };
let srv, base = process.env.BASE_URL;
if (!base) { srv = await serve(); base = `http://127.0.0.1:${srv.address().port}/Duel/`; }
const browser = await chromium.launch({ executablePath: process.env.CHROME || '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const page = await browser.newPage({ viewport: { width: 430, height: 900 } });
const errors = [];
page.on('pageerror', e => errors.push(String(e)));
page.on('console', m => { if (m.type() === 'error' && !/favicon|fonts\.g|ERR_|404/.test(m.text())) errors.push(m.text()); });

// Snelle instellingen: animaties uit, geen klok.
await page.addInitScript(() => {
  // Een volledig profiel, anders gooit loadProfile() het weg. Onder beide sleutels:
  // 'schijfduel_profile' (nieuw, #17) en 'rondel_profile' (oude build).
  const p = JSON.stringify({ credits: 400, owned: { p001: 1, p004: 1, p007: 1, p025: 1, p092: 1, p147: 1 }, settings: { animSpeed: 'uit', clockMinutes: 0, lang: 'nl' } });
  for (const k of ['schijfduel_profile', 'rondel_profile']) if (!localStorage.getItem(k)) localStorage.setItem(k, p);
});
await page.goto(base + '?smoke=' + Date.now(), { waitUntil: 'load' });
await page.waitForFunction(() => window.__rondelQA && document.querySelector('#tile-solo'), null, { timeout: 15000 });
console.log('Geladen:', base);

const click = async (sel) => {
  const h = await page.$(sel); if (!h) return false;
  try { await h.click({ timeout: 1500 }); }
  catch { await h.evaluate(e => { for (const t of ['pointerdown','pointerup','click']) e.dispatchEvent(new (t==='click'?MouseEvent:PointerEvent)(t, { bubbles: true })); }); }
  return true;
};
const visible = (sel) => page.$eval(sel, e => !!(e.offsetParent || e.classList.contains('active')) && getComputedStyle(e).display !== 'none').catch(() => false);

await click('#tile-solo');
await page.waitForSelector('#deck-overlay.active', { timeout: 5000 });
await click('#btn-deck-random');
await page.waitForFunction(() => !document.querySelector('#btn-deck-start').disabled, null, { timeout: 5000 });
await click('#btn-deck-start');
await page.waitForFunction(() => { const s = window.__rondelQA.state; return s && !s.over && s.turn === 'p1' && !document.querySelector('#vs-overlay.active'); }, null, { timeout: 15000 });
console.log('Potje gestart');

let combats = 0, turns = 0, result = null;
const st = () => page.evaluate(() => { const s = window.__rondelQA.state; return { over: s.over, turn: s.turn, locked: s.locked, left: s.actionsLeft, n: s.turnN }; });

while (turns < MAX_TURNS) {
  if (await visible('#btn-combat-continue')) { combats++; await click('#btn-combat-continue'); await page.waitForTimeout(150); continue; }
  if (await page.$('#evo-overlay.active')) { await click('#btn-evo-nee'); continue; }
  if (await page.$('#result-overlay.active')) { result = await page.$eval('#result-overlay', e => e.innerText.trim().split('\n')[0]); break; }
  const s = await st();
  turns = Math.floor(s.n / 2);
  if (s.over) { await page.waitForTimeout(300); if (!(await page.$('#result-overlay.active'))) { result = 'potje voorbij'; break; } continue; }
  if (s.turn !== 'p1' || s.locked || s.left <= 0) { await page.waitForTimeout(150); continue; }
  // Kies een zet met de engine-helpers, voer hem uit met klikken.
  const plan = await page.evaluate(() => {
    const s = window.__rondelQA.state;
    const mine = Object.values(s.units).filter(u => u.owner === 'p1');
    for (const u of mine.filter(u => u.node)) { for (const t of legalMoves(u)) { const o = unitAt(t); if (o && o.owner === 'p2') return { uid: u.uid, node: t, kind: 'attack' }; } }
    for (const u of mine.filter(u => u.node)) { const ms = [...legalMoves(u)].filter(t => !unitAt(t)); if (ms.length) { ms.sort((a, b) => distTo(a, 'G2') - distTo(b, 'G2')); if (distTo(ms[0], 'G2') < distTo(u.node, 'G2') || Math.random() < 0.5) return { uid: u.uid, node: ms[0], kind: 'move' }; } }
    for (const uid of s.bench.p1) { const u = s.units[uid]; if (u.status.includes('wait')) continue; const ts = [...deployTargets(u)]; if (ts.length) { ts.sort((a, b) => distTo(a, 'G2') - distTo(b, 'G2')); return { uid, node: ts[0], kind: 'deploy', bench: s.bench.p1.indexOf(uid) }; } }
    for (const u of mine.filter(u => u.node)) { const ms = [...legalMoves(u)]; if (ms.length) return { uid: u.uid, node: ms[0], kind: 'move' }; }
    return null;
  });
  if (process.env.DEBUG) console.log(JSON.stringify(s), JSON.stringify(plan));
  if (!plan) { await click('#btn-end-turn'); await page.waitForTimeout(300); continue; }
  if (plan.kind === 'deploy') await click(`#board .bench-p1 .bench-fig:nth-of-type(${plan.bench + 1})`);
  else await click(`#board [data-uid="${plan.uid}"]`);
  await page.waitForTimeout(120);
  if (process.env.DEBUG) console.log('  na klik figuur:', await page.evaluate(() => { const s = window.__rondelQA.state; return JSON.stringify({ sel: s.selected, pd: s.pendingDeploy, lt: [...(s.legalTargets || [])] }); }), await page.$$eval('[data-uid]', es => es.length));
  await click(`#board [data-node="${plan.node}"]`);
  await page.waitForTimeout(250);
  const s2 = await st();
  if (s2.n === s.n && s2.left === s.left && !s2.locked && !(await visible('#btn-combat-continue'))) {
    // klik kwam niet aan: beurt beëindigen om vastlopen te voorkomen
    await click('#btn-end-turn'); await page.waitForTimeout(300);
  }
}

console.log(`Beurten: ${turns}, gevechten: ${combats}, resultaat: ${result || 'geen (max beurten)'}`);
if (errors.length) fail('JS-fouten:\n  ' + errors.join('\n  '));
if (combats < 1) fail('geen enkel gevecht gespeeld');
if (!process.exitCode) console.log('OK: rooktest geslaagd');
await browser.close(); if (srv) srv.close();
