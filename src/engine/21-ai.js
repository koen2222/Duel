const AI = 'p2';

// Moeilijkheidsgraad (sessie 24). 'jitter' = hoeveel toeval er op elke score zit,
// 'slip' = kans dat de AI niet z'n beste maar z'n op-één-na-beste zet kiest,
// 'horizon' = hoeveel beurten vooruit een rush als dreiging telt.
// 'advance' schaalt hoe hard de AI naar JOUW doel toewerkt. Zonder die knop
// maakte 'makkelijk' het spel juist korter i.p.v. makkelijker: minder verdedigen
// betekende alleen dat hij ongehinderd doorrende. Een winnende zet pakt hij
// altijd (goal-bereik blijft 1000) — hij zoekt er alleen minder actief naar.
const AI_LEVELS = {
  makkelijk: { jitter: 45, slip: 0.35, horizon: 1, keeper: 0.5, abilityWeight: 0.3, advance: 0.35, think: 500 },
  normaal:   { jitter: 5,  slip: 0.08, horizon: 3, keeper: 1.0, abilityWeight: 1.0, advance: 1.0,  think: 800 },
  moeilijk:  { jitter: 2,  slip: 0,    horizon: 4, keeper: 1.3, abilityWeight: 1.4, advance: 1.3,  think: 650 },
};
function aiCfg() { return AI_LEVELS[S('difficulty')] || AI_LEVELS.normaal; }

function distTo(start, goalKey) {
  if (start === goalKey) return 0;
  const q = [[start, 0]], seen = new Set([start]);
  while (q.length) { const [n, d] = q.shift(); for (const nx of ADJ[n]) { if (seen.has(nx)) continue; if (nx === goalKey) return d + 1; seen.add(nx); q.push([nx, d + 1]); } }
  return 99;
}

// Wat een unit RÉÉL per beurt aflegt, inclusief ability-aura's — de oude
// dreigingsmeting keek alleen naar de basis-MP en onderschatte dus Roedel/
// Aanvoerder-units (open punt 12).
function aiEffMP(u) {
  if (!u.node) return Math.min(3, UNIT_DEFS[u.defKey].mp);
  return Math.min(3, UNIT_DEFS[u.defKey].mp + abilityMPBonus(u));
}

function combatEV(att, def) {
  const aS = applyStatus(att.slots, att.status, att), dS = applyStatus(def.slots, def.status, def);
  const aFroz = att.status.includes('frozen'), dFroz = def.status.includes('frozen');
  const w = aiCfg().abilityWeight;
  // Ability-correcties op de ruwe kansen (open punt 12):
  // Onverwoestbaar overleeft z'n eerste KO, Bergvast komt na een KO meteen terug,
  // en contact-abilities delen sowieso status uit aan wie ermee vecht.
  const attUndying = abilityOf(att) === 'undying' && !att.undyingUsed;
  const defUndying = abilityOf(def) === 'undying' && !def.undyingUsed;
  const attCheapKO = abilityOf(att) === 'mountain' ? 0.55 : 1;   // KO doet minder pijn
  const defCheapKO = abilityOf(def) === 'mountain' ? 0.55 : 1;
  let ev = 0;
  for (let i = 0; i < 16; i++) for (let j = 0; j < 16; j++) {
    const r = resolve(aFroz ? {k:'red'} : aS[i], dFroz ? {k:'red'} : dS[j]);
    if (r.defKO) ev += defUndying ? 0.15 * w : defCheapKO;
    if (r.attKO) ev -= attUndying ? 0.15 * w : attCheapKO;
    if (r.statusOnDef) ev += 0.25; if (r.statusOnAtt) ev -= 0.25;
  }
  ev /= 256;
  // Wie een contact-ability heeft, wint elk treffen een beetje extra
  if (contactStatusOf(abilityOf(att))) ev += 0.10 * w;
  if (contactStatusOf(abilityOf(def))) ev -= 0.12 * w;
  return ev;
}

// Positionele ability-waarde: hoeveel is het waard dat DEZE unit op DIT punt staat?
function abilityPosBonus(u, node) {
  const ab = abilityOf(u); if (!ab) return 0;
  const w = aiCfg().abilityWeight;
  let s = 0;
  const allies = [...ADJ[node]].filter(n => { const o = unitAt(n); return o && o.owner === u.owner && o.uid !== u.uid; });
  const enemies = [...ADJ[node]].filter(n => { const o = unitAt(n); return o && o.owner !== u.owner; });
  // MP-aura's willen naast bondgenoten staan
  if (ab === 'pack' && allies.length) s += 30;
  if (ab === 'command') s += allies.length * 25;
  // Contact-abilities zijn uitstekende blokkers: laat de vijand maar komen
  if (contactStatusOf(ab)) s += enemies.length * 20 + (GOAL_ZONE.includes(node) ? 35 : 0);
  // Onverwoestbaar/Bergvast mogen risico nemen — vooraan is prima
  if ((ab === 'undying' && !u.undyingUsed) || ab === 'mountain') s += enemies.length * 22;
  // Zegenende Aura wil naast bondgenoten mét status staan
  if (ab === 'blessing') s += allies.filter(n => { const o = unitAt(n); return o && o.status.some(x => !['wait','bulwark'].includes(x)); }).length * 45;
  return s * w;
}

// De AI kiest zijn kaart naar de situatie. Duel-plates richten zich op je EIGEN
// figuren, dus de logica draait om: wie gaat er zo vechten, en wie is gewond?
function aiUsePlate() {
  if (state.plateUsed || !state.plates[AI].length) return;
  const mine = state.plates[AI];
  const has = k => mine.indexOf(k);

  // Staat er een eigen figuur naast een vijand? Dan is er zo een gevecht: geef
  // hem een gevechtskaart mee.
  const fighter = Object.values(state.units).find(u => u.owner === AI && u.node &&
    [...ADJ[u.node]].some(n => { const o = unitAt(n); return o && o.owner !== AI; }));
  if (fighter) {
    for (const k of ['xattack', 'xspeed', 'respin', 'dazzle', 'focus', 'xdefend', 'trueaim', 'xhex']) {
      const i = has(k); if (i >= 0) { usePlate(AI, i, fighter.uid); return; }
    }
  }
  // Gewonde figuur oplappen
  const hurt = Object.values(state.units).find(u => u.owner === AI && u.node && u.status.some(s => s !== 'wait'));
  if (hurt) { const i = has('fullheal'); if (i >= 0) { usePlate(AI, i, hurt.uid); return; } }
  // Weinig volk op het bord? Haal er een terug uit het P.C.
  const onBoard = Object.values(state.units).filter(u => u.owner === AI && u.node).length;
  if (onBoard <= 2 && state.hc[AI].length) { const i = has('revive'); if (i >= 0) { usePlate(AI, i); return; } }
}

function rushThreat() {
  // Snelste speler-unit richting G2, in beurten. Houdt sinds sessie 24 rekening
  // met ability-MP (Roedel/Aanvoerder) en met phasers, die niet te blokkeren zijn.
  let best = null;
  for (const u of Object.values(state.units)) {
    if (u.owner !== 'p1' || !u.node || u.status.includes('sleep')) continue;
    const mp = aiEffMP(u);
    const d = distTo(u.node, 'G2');
    let turns = Math.ceil(d / mp);
    if (canPhase(u)) turns -= 0.5;   // loopt door blokkades heen: gevaarlijker dan de afstand suggereert
    if (!best || turns < best.turns || (turns === best.turns && d < best.d)) best = { uid: u.uid, turns, d, phasing: canPhase(u) };
  }
  return best;
}

const G2_ADJ = ['T2','T3'];
const GOAL_ZONE = ['G2','T2','T3'];
// De startpunten van de SPELER. Ze bezetten is in Duel een echte tactiek: door
// een bezet entry-punt kan de tegenstander niets meer inzetten. Bovendien liggen
// ze diep in vijandelijk gebied, dus het is meteen terreinwinst.
const ENEMY_ENTRIES = ['E1_BL', 'E1_BR'];
// De EIGEN startpunten van de AI liggen op de buitenroute naar zijn doel. Ze
// vrijgeven opent een laan waar de speler zo doorheen loopt — precies wat Koen
// zag gebeuren. Ze tellen daarom mee als verdedigingspunt.
const OWN_ENTRIES = ['E2_TL', 'E2_TR'];

function aiTurn() {
  if (state.over || state.turn !== AI || state.mode !== 'solo' || state.locked) return; state.aiThinking = true; renderAll();
  const cfg = aiCfg();
  setTimeout(() => {
    state.aiThinking = false; if (state.over) return;
    aiUsePlate();
    const threat = rushThreat();
    const danger = threat && threat.turns <= cfg.horizon;
    const zoneUnits = Object.values(state.units).filter(u => u.owner === AI && u.node && GOAL_ZONE.includes(u.node));
    const lastDefender = zoneUnits.length === 1 ? zoneUnits[0].uid : null;
    const zoneEmpty = zoneUnits.length === 0;
    const onBoard = Object.values(state.units).filter(u => u.owner === AI && u.node).length;
    const actions = [];

    const g2Empty = !unitAt('G2');
    // Een EIGEN startpunt verdedigen heeft alleen zin als de dreiging er ook
    // echt langs moet. Zonder die voorwaarde parkeerde de AI zijn eerste twee
    // figuren op E2_TL en E2_TR en bleef daar staan, terwijl de speler dwars
    // door het midden naar het doel liep. Gemeten: 10/10 verloren in gemiddeld
    // 3 beurten tegen een rusher.
    const dreiger = threat ? state.units[threat.uid] : null;
    const opDreigroute = (n) => {
      if (!dreiger || !dreiger.node) return false;
      return distTo(dreiger.node, n) + distTo(n, 'G2') === distTo(dreiger.node, 'G2');
    };
    const posScore = (t, dNow, u) => {
      let s = (dNow - distTo(t, 'G1')) * 25 * cfg.advance;
      if (NODES[t].type === 'goal' && NODES[t].owner === 'p1') s = 1000;   // winnende zet: altijd pakken
      // Verdedigingsgradiënt: bij dreiging telt ELKE stap dichter bij het eigen
      // doel. Zonder dit kreeg de AI pas een defensieve prikkel als hij al op
      // T2/T3/G2 stond — en bij zijn EERSTE inzet (onBoard 0) helemaal niet,
      // precies wanneer een rusher moet worden opgevangen.
      // SPAWN-BLOKKADE: op een startpunt van de speler gaan staan legt zijn
      // aanvoer stil én is diep terreinwinst. Dit is de zet die de AI eerder
      // volledig links liet liggen.
      if (ENEMY_ENTRIES.includes(t)) s += 300 * cfg.advance;

      // Verdedigen is voor een BEPERKT aantal figuren, en pas als het echt
      // dringend is. Anders bleef de AI bij z'n eigen doel hangen in plaats van
      // uit te zwermen — dit is een race, geen belegering.
      const urgent = danger && threat.turns <= 2;
      const needDefenders = urgent && zoneUnits.length < 2;
      if (needDefenders) s += Math.max(0, 300 - distTo(t, 'G2') * 90) * cfg.keeper;
      // Een eigen startpunt bezet houden sluit de buitenroute af
      if (danger && OWN_ENTRIES.includes(t) && !unitAt(t) && opDreigroute(t)) s += 170 * cfg.keeper;
      if (GOAL_ZONE.includes(t)) {
        if (needDefenders) s += 300 * cfg.keeper;
        if (t === 'G2') {
          s += 60;
          // In de zone staan blokkeert niets — alleen een keeper OP het doel blokkeert.
          // Bij dreiging moet G2 zelf bezetten daarom (bijna) alles overtroeven.
          if (danger && g2Empty) s += (threat.turns <= 2 ? 700 : 300) * cfg.keeper;
        }
      }
      if (u) s += abilityPosBonus(u, t);
      // Phasers zijn onze béste aanvallers: die mogen juist wél oprukken
      if (u && canPhase(u) && !GOAL_ZONE.includes(t)) s += (dNow - distTo(t, 'G1')) * 15 * cfg.abilityWeight * cfg.advance;
      return s;
    };

    for (const uid of state.bench[AI]) {
      const u = state.units[uid]; if (u.status.includes('wait')) continue;
      // Zielenoproep wil op het veld als er nog units staan te wachten
      const raiseBonus = abilityOf(u) === 'raise'
        ? state.bench[AI].filter(x => state.units[x].status.includes('wait')).length * 40 * cfg.abilityWeight : 0;
      for (const t of deployTargets(u)) {
        // Zoveel mogelijk figuren zo snel mogelijk het veld op: met een leeg
        // bord is inzetten veruit de beste zet. De bonus zakt naarmate er meer
        // staan, zodat hij daarna weer gaat spelen i.p.v. blijven storten.
        let s = 25 + Math.max(0, 5 - onBoard) * 60 + posScore(t, distTo(t, 'G1') + 2, u) * 0.6 + raiseBonus;
        if (danger && onBoard < 3) s += (140 - onBoard * 35) * cfg.keeper;   // versterking aanvoeren
        actions.push({ type:'deploy', uid, target:t, score: s + Math.random() * cfg.jitter });
      }
    }
    for (const u of Object.values(state.units)) {
      if (u.owner !== AI || !u.node || u.status.includes('sleep')) continue;
      const dNow = distTo(u.node, 'G1');
      const inZone = GOAL_ZONE.includes(u.node);
      for (const t of legalMoves(u)) {
        const occ = unitAt(t);
        if (occ && occ.owner !== AI) {
          let s = combatEV(u, occ) * 120 + 10;
          if (threat && occ.uid === threat.uid && threat.turns <= 2) s += 120;
          // Een phasende rusher is niet te blokkeren — die moet je aanvállen
          if (threat && occ.uid === threat.uid && threat.phasing) s += 90 * cfg.abilityWeight;
          if (u.uid === lastDefender && !(threat && occ.uid === threat.uid)) s -= 300; // laatste verdediger jaagt niet
          actions.push({ type:'attack', uid:u.uid, target:t, defenderUid:occ.uid, score: s + Math.random() * cfg.jitter });
        } else {
          let s = posScore(t, dNow, u);
          // Een keeper die ÓP het doel staat mag daar bij dreiging niet vanaf
          // lopen. Zonder deze regel wisselde hij elke beurt tussen G2 en T2 —
          // hij moet immers iets doen — en liep de rusher door het gat.
          if (u.node === 'G2' && danger) s -= 700 * cfg.keeper;
          // ...en ook een bezet eigen startpunt geef je bij dreiging niet zomaar op
          if (danger && OWN_ENTRIES.includes(u.node) && !OWN_ENTRIES.includes(t) && opDreigroute(u.node)) s -= 220 * cfg.keeper;
          if (u.uid === lastDefender && !GOAL_ZONE.includes(t)) s -= 500;       // laatste verdediger blijft ALTIJD
          else if (inZone && danger && !GOAL_ZONE.includes(t)) s -= 150;        // bij dreiging blijft iedereen liever
          actions.push({ type:'move', uid:u.uid, target:t, score: s + Math.random() * cfg.jitter });
        }
      }
    }
    if (actions.length === 0) { renderAll(); setTimeout(endTurn, 300); return; }
    actions.sort((a, b) => b.score - a.score);
    // Op 'Licht' kiest de AI soms bewust niet z'n beste zet (menselijker, minder frustrerend)
    let pick = 0;
    if (cfg.slip && actions.length > 1 && Math.random() < cfg.slip) pick = 1 + Math.floor(Math.random() * Math.min(2, actions.length - 1));
    const best = actions[pick];
    if (best.type === 'deploy') { state.locked = true; doDeploy(state.units[best.uid], best.target).then(() => { state.actionsLeft--; state.locked = false; afterAction(); }); }
    else if (best.type === 'move') { state.locked = true; moveUnit(state.units[best.uid], best.target).then(()=>{ const g = NODES[best.target]; if (g.type==='goal' && g.owner !== AI) { endMatch(AI, 'goal'); return; } state.actionsLeft--; state.locked = false; afterAction(); }); }
    else if (best.type === 'attack') { 
        state.locked = true; const u = state.units[best.uid]; const standNode = standplaatsVoor(u, best.target);
        if (standNode) {
            if (standNode !== u.node) { moveUnit(u, standNode).then(() => { state.actionsLeft--; runCombat(u, state.units[best.defenderUid]); }); }
            else { state.actionsLeft--; runCombat(u, state.units[best.defenderUid]); }
        } else { state.locked = false; setTimeout(endTurn, 300); }
    }
  }, Math.max(120, cfg.think * (animScale() || 0.35)));
}

