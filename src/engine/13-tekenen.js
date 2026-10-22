const SVG_NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs={}, parent=null) { const n = document.createElementNS(SVG_NS, tag); for (const [k,v] of Object.entries(attrs)) n.setAttribute(k, v); if (parent) parent.appendChild(n); return n; }

const STATUS_COLORS = { poison:'#4ade80', badlypoison:'#a855f7', burn:'#fb923c', paralysis:'#fde047', confusion:'#f472b6', sleep:'#93c5fd', frozen:'#7dd3fc', curse:'#7e22ce', bulwark:'#fbbf24', wait:'#9ca3af' };

function drawStatusBadge(g, st, cx, cy) {
  const c = STATUS_COLORS[st] || '#f59e0b';
  el('circle', { cx, cy, r: 8, fill: c, stroke: '#fff', 'stroke-width': 1.4 }, g);
  if (st === 'wait') {
    el('circle', { cx, cy, r: 4.6, fill: 'none', stroke: '#111', 'stroke-width': 1.45 }, g);
    el('path', { d: `M ${cx} ${cy - 3.1} L ${cx} ${cy} L ${cx + 2.5} ${cy + 1.5}`, fill: 'none', stroke: '#111', 'stroke-width': 1.3, 'stroke-linecap': 'round' }, g);
  } else if (st === 'poison' || st === 'badlypoison') {
    el('path', { d: `M ${cx} ${cy - 4.6} C ${cx + 3.4} ${cy - 1}, ${cx + 2.6} ${cy + 4}, ${cx} ${cy + 4.6} C ${cx - 2.6} ${cy + 4}, ${cx - 3.4} ${cy - 1}, ${cx} ${cy - 4.6} Z`, fill: st === 'badlypoison' ? '#3b0764' : '#14532d' }, g);
  } else if (st === 'burn') {
    el('path', { d: `M ${cx} ${cy + 4} C ${cx - 3.4} ${cy + 1}, ${cx - 1.4} ${cy - 3}, ${cx} ${cy - 4.6} C ${cx + 1.6} ${cy - 1}, ${cx + 3.4} ${cy + 1}, ${cx} ${cy + 4} Z`, fill: '#7c2d12' }, g);
  } else if (st === 'paralysis') {
    el('path', { d: `M ${cx + 1} ${cy - 4.6} L ${cx - 2.6} ${cy} L ${cx + 0.2} ${cy} L ${cx - 1} ${cy + 4.6} L ${cx + 2.8} ${cy - 0.4} L ${cx + 0.2} ${cy - 0.4} Z`, fill: '#111' }, g);
  } else {
    const t = el('text', { x: cx, y: cy + 3.3, 'font-size': 9, 'text-anchor': 'middle', fill: '#111', 'font-weight': '900', 'font-family': 'sans-serif' }, g);
    t.textContent = st === 'sleep' ? 'Z' : st[0].toUpperCase();
  }
}

function statusFX(g, u) {
  const mk = (tag, attrs, anim, delay) => {
    const e = el(tag, attrs, g);
    if (anim) { e.style.transformBox = 'fill-box'; e.style.transformOrigin = 'center'; e.style.animation = anim; if (delay) e.style.animationDelay = delay; e.classList.add('fx-anim'); }
    return e;
  };
  for (const st of u.status.slice(0, 2)) {
    if (st === 'frozen') {
      // Groot ijsblok om het hele poppetje heen
      el('rect', { x:-20, y:-53, width:40, height:62, rx:4, fill:'rgba(147,210,255,0.50)', stroke:'#7dd3fc', 'stroke-width':2 }, g);
      // Lichte facetten (diepte-illusie)
      el('polygon', { points:'-20,-53 -4,-53 -17,-20', fill:'rgba(255,255,255,0.14)', stroke:'none' }, g);
      el('polygon', { points:'20,-53 5,-53 17,-20', fill:'rgba(255,255,255,0.09)', stroke:'none' }, g);
      el('line', { x1:-5, y1:-53, x2:-11, y2:-18, stroke:'rgba(255,255,255,0.30)', 'stroke-width':1 }, g);
      el('line', { x1:7, y1:-53, x2:13, y2:-12, stroke:'rgba(255,255,255,0.20)', 'stroke-width':0.8 }, g);
      // Kristalspitsen bovenop
      el('polygon', { points:'-11,-53 -7,-64 -3,-53', fill:'#bae6fd', stroke:'#7dd3fc', 'stroke-width':1 }, g);
      el('polygon', { points:'-1,-53 2,-62 5,-53', fill:'#e0f2fe', stroke:'#7dd3fc', 'stroke-width':0.9 }, g);
      el('polygon', { points:'9,-53 12,-60 15,-53', fill:'#bae6fd', stroke:'#7dd3fc', 'stroke-width':0.9 }, g);
      // Glinsterende lichtpuntjes
      mk('circle', { cx:-7, cy:-33, r:2.5, fill:'white', opacity:0.9 }, 'fxGlint 2.4s ease-in-out infinite', '0s');
      mk('circle', { cx:11, cy:-17, r:1.8, fill:'white', opacity:0.8 }, 'fxGlint 2.4s ease-in-out infinite', '0.85s');
      mk('circle', { cx:2, cy:-46, r:1.4, fill:'white', opacity:0.75 }, 'fxGlint 2.4s ease-in-out infinite', '1.6s');

    } else if (st === 'burn') {
      // ECHT VUUR (sessie 39). Het waren drie flikkerende sliertjes; nu staat
      // het figuur in de fik: gloed op de grond, drie lagen dansende vlammen
      // (donkere buitenvlam, oranje kern, witgele hart), opstijgende vonken en
      // een sliert rook. Elke vlam danst in een eigen tempo, dus het patroon
      // herhaalt niet zichtbaar.
      el('ellipse', { cx:0, cy:8, rx:27, ry:11, fill:'url(#gVuurgloed)' }, g);
      // Hittewaas over het lijf zelf, zodat het figuur ín het vuur staat en er
      // niet alleen naast
      el('rect', { x:-19, y:-56, width:38, height:62, rx:7, fill:'rgba(249,115,22,0.14)' }, g);
      const VLAM = 'M 0 0 C -6.5 -8, -7.8 -19, 0 -28 C 7.8 -19, 6.5 -8, 0 0 Z';
      const vlam = (x, y, s, kleur, dur, delay, op) => {
        const wrap = el('g', { transform:`translate(${x},${y}) scale(${s})` }, g);
        const p = el('path', { d:VLAM, fill:kleur, opacity:op }, wrap);
        p.style.transformBox = 'fill-box'; p.style.transformOrigin = '50% 100%';
        p.style.animation = `vlamDans ${dur}s ease-in-out ${delay} infinite`;
        p.classList.add('fx-anim');
      };
      // Buitenvlammen slaan tot over de borst, maar blijven doorschijnend —
      // je moet nog kunnen zien WELK figuur er staat te branden.
      vlam(-15, 9, 1.55, '#c2410c', 0.9,  '0s',    0.30);
      vlam( 15, 9, 1.45, '#c2410c', 1.05, '-.35s', 0.30);
      vlam( -9, 9, 1.85, '#ea580c', 0.82, '-.15s', 0.34);
      vlam(  9, 9, 1.75, '#ea580c', 0.95, '-.55s', 0.34);
      vlam(  0, 10, 2.0, '#f97316', 0.78, '-.6s',  0.30);
      // Kern: lager, feller — het vuur zit aan z'n voeten, de rest is nagloed
      vlam( -7, 8, 1.0, '#fb923c', 0.62, '-.2s',  0.7);
      vlam(  7, 8, 0.95, '#fb923c', 0.7,  '-.5s',  0.7);
      vlam(  0, 8, 1.2, '#fdba74', 0.55, '-.4s',  0.62);
      // Hart van het vuur, klein en fel bij de sokkel
      vlam(  0, 7, 0.6, '#fef3c7', 0.5,  '-.15s', 0.9);
      // vonken die opstijgen
      [[-11,'-5px','1.5s','0s'],[6,'7px','1.9s','-.6s'],[-3,'3px','1.7s','-1.1s'],[12,'-4px','2.1s','-.3s'],[2,'-6px','2.3s','-1.6s']].forEach(([x, dx, dur, d]) => {
        const v = el('circle', { cx:x, cy:4, r:1.8, fill:'#fde047' }, g);
        v.style.setProperty('--dx', dx);
        v.style.animation = `vuurVonk ${dur} linear ${d} infinite`;
        v.classList.add('fx-anim');
      });
      // rook
      [[-4,'-8px','2.6s','0s'],[6,'6px','3.1s','-1.4s']].forEach(([x, dx, dur, d]) => {
        const r = el('ellipse', { cx:x, cy:-46, rx:5, ry:4, fill:'rgba(52,36,28,0.55)' }, g);
        r.style.transformBox = 'fill-box'; r.style.transformOrigin = 'center';
        r.style.setProperty('--dx', dx);
        r.style.animation = `vuurRook ${dur} ease-out ${d} infinite`;
        r.classList.add('fx-anim');
      });

    } else if (st === 'paralysis') {
      // VERLAMD (sessie 39). Was vier flikkerende boogjes. Nu knettert het er
      // omheen: gloed op de grond, een ring van stroom die rondloopt, bogen
      // over het lijf én af en toe een volle stroomstoot die het figuur wit
      // laat oplichten — dan zie je waarom hij niet kan aanvallen.
      el('ellipse', { cx:0, cy:8, rx:22, ry:8.5, fill:'rgba(253,224,71,0.30)' }, g);
      const ring = el('ellipse', { cx:0, cy:-24, rx:21, ry:30, fill:'none', stroke:'#fde047',
        'stroke-width':2, 'stroke-dasharray':'5 7', opacity:0.75 }, g);
      ring.style.transformBox = 'fill-box'; ring.style.transformOrigin = 'center';
      ring.style.animation = 'stroomRing 1.1s linear infinite';
      ring.classList.add('fx-anim');
      [['-19,-38 -10,-30 -16,-24 -8,-16','0s'],['18,-42 9,-34 15,-27 7,-19','-.28s'],
       ['-15,-16 -5,-10 -12,-4 -3,3','-.14s'],['16,-22 8,-15 14,-8 6,-1','-.42s'],
       ['-8,-52 0,-46 -6,-40 2,-34','-.2s'],['9,-54 2,-48 8,-42 1,-36','-.36s']].forEach(([pts,d]) => {
        mk('polyline', { points:pts, fill:'none', stroke:'#fef08a', 'stroke-width':2.4, 'stroke-linecap':'round', 'stroke-linejoin':'round' }, 'fxFlicker .45s linear infinite', d);
      });
      // volle stroomstoot: het hele figuur licht kort op
      const stoot = el('rect', { x:-20, y:-56, width:40, height:64, rx:6, fill:'#fef9c3', opacity:0 }, g);
      stoot.style.animation = 'stroomStoot 2.4s steps(1,end) infinite';
      stoot.classList.add('fx-anim');

    } else if (st === 'confusion') {
      // Draaiende roze sterren rondom het hoofd
      const orb = el('g', {}, g);
      orb.style.transformBox = 'fill-box'; orb.style.transformOrigin = 'center';
      orb.style.animation = 'fxOrbit 1.3s linear infinite'; orb.classList.add('fx-anim');
      [[-14,-44,3.2,'#f472b6'],[14,-44,2.6,'#fbcfe8'],[-8,-54,2.6,'#e879f9'],[8,-54,2.2,'#f472b6'],[0,-57,3,'#fbcfe8']].forEach(([cx,cy,r,fill]) => el('circle', { cx, cy, r, fill }, orb));

    } else if (st === 'sleep') {
      // SLAAP (sessie 39). Nachtwaas over het lijf, een droomwolk die zacht
      // ademt en z'jes die traag wegdrijven en groter worden — je ziet dat er
      // hier niets gaat gebeuren deze beurt.
      el('rect', { x:-20, y:-53, width:40, height:62, rx:6, fill:'rgba(10,25,65,0.42)' }, g);
      el('ellipse', { cx:0, cy:8, rx:22, ry:8, fill:'rgba(59,130,246,0.22)' }, g);
      const wolk = el('g', {}, g);
      [[-9,-50,7],[0,-55,9],[9,-50,7],[0,-47,8]].forEach(([cx,cy,r]) =>
        el('circle', { cx, cy, r, fill:'rgba(147,197,253,0.30)' }, wolk));
      wolk.style.transformBox = 'fill-box'; wolk.style.transformOrigin = 'center';
      wolk.style.animation = 'slaapAdem 3.2s ease-in-out infinite';
      wolk.classList.add('fx-anim');
      [[9,-44,11,'0s'],[15,-52,9,'-1.1s'],[4,-58,7,'-2.2s']].forEach(([x,y,fs,d]) => {
        const t = el('text', { x, y, 'font-size':fs, fill:'#bfdbfe', 'font-weight':'700', 'font-family':'Georgia,serif' }, g);
        t.textContent = 'z';
        t.style.transformBox = 'fill-box'; t.style.transformOrigin = 'center';
        t.style.animation = `slaapZ 3.3s ease-out ${d} infinite`;
        t.classList.add('fx-anim');
      });

    } else if (st === 'poison' || st === 'badlypoison' || st === 'curse') {
      // GIF (sessie 39). Waren vijf stipjes die omhoog schoven. Nu staat het
      // figuur in een gifplas: nevel over het lijf, bellen die opstijgen en
      // KNAPPEN, en druppels die eraf lopen. Zwaar vergiftigd is hetzelfde maar
      // paars, dichter en sneller — je ziet het verschil in één oogopslag.
      const erg = st !== 'poison';
      const c1 = erg ? '#a855f7' : '#4ade80';
      const c2 = erg ? '#f3e8ff' : '#dcfce7';
      const plas = erg ? 'rgba(147,51,234,0.38)' : 'rgba(74,222,128,0.34)';
      const nevel = erg ? 'rgba(126,34,206,0.22)' : 'rgba(34,197,94,0.16)';
      el('ellipse', { cx:0, cy:8, rx: erg ? 24 : 21, ry: erg ? 9.5 : 8, fill:plas }, g);
      el('rect', { x:-19, y:-54, width:38, height:60, rx:7, fill:nevel }, g);
      const bel = (x, r, dx, dur, delay) => {
        const b = el('circle', { cx:x, cy:5, r, fill:c1, opacity:0.55, stroke:c2, 'stroke-width':1 }, g);
        b.style.transformBox = 'fill-box'; b.style.transformOrigin = 'center';
        b.style.setProperty('--dx', dx);
        b.style.animation = `gifBel ${dur}s ease-out ${delay} infinite`;
        b.classList.add('fx-anim');
      };
      (erg
        ? [[-11,3.4,'-3px',2.0,'0s'],[-3,2.8,'4px',1.7,'-.45s'],[6,3.8,'-2px',2.2,'-.9s'],
           [12,2.6,'3px',1.9,'-1.3s'],[-7,3.0,'2px',2.1,'-1.6s'],[2,3.4,'-4px',1.8,'-.2s']]
        : [[-9,2.8,'-3px',2.4,'0s'],[0,2.4,'4px',2.1,'-.7s'],[9,3.0,'-2px',2.6,'-1.4s'],
           [-4,2.2,'2px',2.3,'-1.9s']]
      ).forEach(a => bel(...a));
      // Druppels die van het lijf af lopen. De verplaatsing zit in een wrapper-
      // <g>, want de CSS-animatie op transform zou een transform-ATTRIBUUT op
      // hetzelfde element overschrijven en de druppel naar de oorsprong gooien.
      (erg ? [[-13,-18,'0s'],[13,-26,'-.8s'],[0,-34,'-1.5s']] : [[-11,-20,'0s'],[11,-30,'-1.1s']])
        .forEach(([x, y, d]) => {
          const wrap = el('g', { transform:`translate(${x},${y})` }, g);
          const p = el('path', { d:'M 0 -5 q 3.2 3.4 3.2 5.6 a 3.2 3.2 0 0 1 -6.4 0 q 0 -2.2 3.2 -5.6 Z',
            fill:c1, opacity:0.8 }, wrap);
          p.style.transformBox = 'fill-box'; p.style.transformOrigin = 'center';
          p.style.animation = `gifDrup 2.2s ease-in ${d} infinite`;
          p.classList.add('fx-anim');
        });

    } else if (st === 'bulwark') {
      // SCHILDWAL (sessie 39). Was één boogje. Nu een zeshoekig schild om het
      // figuur heen dat langzaam glanst, met een lichtveeg die eroverheen loopt
      // — je ziet dat er iets tussen hem en de klap staat.
      const scherm = el('path', { d:'M 0 -60 L 20 -49 L 20 -6 L 0 5 L -20 -6 L -20 -49 Z',
        fill:'rgba(251,191,36,0.13)', stroke:'#fbbf24', 'stroke-width':2, opacity:0.85 }, g);
      scherm.style.transformBox = 'fill-box'; scherm.style.transformOrigin = 'center';
      scherm.style.animation = 'walAdem 2.2s ease-in-out infinite';
      scherm.classList.add('fx-anim');
      // lichtveeg die over het scherm trekt
      const veeg = el('path', { d:'M -20 -20 L 20 -40', stroke:'rgba(255,250,220,0.9)', 'stroke-width':3.5,
        'stroke-linecap':'round', fill:'none' }, g);
      veeg.style.transformBox = 'fill-box'; veeg.style.transformOrigin = 'center';
      veeg.style.animation = 'walVeeg 2.6s ease-in-out infinite';
      veeg.classList.add('fx-anim');
    }
  }
}

// Figuur op het bord. Naar Duel-verhoudingen: de figuur is FORS ten opzichte
// van z'n sokkel (ruwweg 1,4x de sokkeldiameter hoog), de sokkel is een dikke
// schijf met een fel oplichtende teamrand en een gekleurde gloed op de grond.
function unitGroup(u, withShadow = true) {
  const g = document.createElementNS(SVG_NS, 'g');
  const p1 = u.owner === 'p1';
  const rim   = p1 ? '#60a5fa' : '#f87171';
  const glow  = p1 ? 'rgba(59,130,246,0.55)' : 'rgba(239,68,68,0.55)';
  const side  = p1 ? '#0e2050' : '#450d0d';
  const RX = 20, RY = 9.5;                 // sokkelmaat

  if (withShadow) {
    el('ellipse', { cx:0, cy:13, rx:RX+3, ry:RY*0.85, fill:'rgba(0,0,0,0.45)' }, g);
    el('ellipse', { cx:0, cy:11, rx:RX+7, ry:RY, fill:glow, class:'fig-glow' }, g);
  }
  // Dikke zijwand: twee lagen geven de schijf hoogte
  el('ellipse', { cx:0, cy:7.5, rx:RX, ry:RY, fill:'rgba(0,0,0,0.55)' }, g);
  el('ellipse', { cx:0, cy:5,   rx:RX, ry:RY, fill:side }, g);
  el('rect', { x:-RX, y:0, width:RX*2, height:5, fill:side }, g);
  // Bovenvlak met felle teamrand
  el('ellipse', { class:'fig-base', cx:0, cy:0, rx:RX, ry:RY, fill:`url(#gBaseTop${p1?'P1':'P2'})`, stroke:rim, 'stroke-width':2 }, g);
  el('path', { d:`M -13 -2.8 A 15 6.5 0 0 1 13 -2.8`, fill:'none', stroke:'rgba(255,255,255,0.45)', 'stroke-width':1.6, 'stroke-linecap':'round' }, g);

  const art = UNIT_ART[u.defKey];
  if (art) {
    // Groter dan voorheen (34x48 -> 42x58) en iets dieper in de sokkel gezet,
    // zodat de figuur er echt OP lijkt te staan in plaats van erboven te zweven.
    el('image', { x:-24, y:-63, width:48, height:66, href:art, class:'fig-art' }, g);
  } else {
    const fo = document.createElementNS(SVG_NS, 'foreignObject');
    fo.setAttribute('x',-18); fo.setAttribute('y',-28); fo.setAttribute('width',36); fo.setAttribute('height',31);
    fo.innerHTML = unitSilhouette(u.defKey, u.owner); g.appendChild(fo);
  }

  // MP op de rand van de sokkel, zoals het cijfer op een Duel-figuur.
  // Alleen op het BORD: de figuren aan de zijlijn krijgen hun badge al van
  // renderBench, en twee cijfers op één poppetje leest als rommel.
  if (u.node) {
    el('circle', { cx:15, cy:4, r:8, fill: p1 ? '#2563eb' : '#dc2626', stroke:'#fff', 'stroke-width':1.6 }, g);
    const mt = el('text', { x:15, y:7.5, 'font-size':10, 'text-anchor':'middle', fill:'#fff', 'font-weight':'900', 'font-family':'sans-serif' }, g);
    mt.textContent = effMP(u);
    // KLAAR OM TE EVOLUEREN: hetzelfde blauwe stipje als in Duel. Alleen op het
    // BORD — daar betekent het iets ("deze staat één gewonnen gevecht van een
    // nieuwe schijf af"). Aan de zijlijn kan bijna iedereen evolueren, dus daar
    // zou het stipje geen informatie zijn maar ruis.
    if (kanEvolueren(u)) {
      const stip = el('circle', { cx:-15, cy:-52, r:5, fill:'#3b82f6', stroke:'#dbeafe', 'stroke-width':1.6, class:'evo-stip' }, g);
      stip.style.transformBox = 'fill-box'; stip.style.transformOrigin = 'center';
    }
  }


  if (u.level > 1) {
    el('rect', { x:-27, y:-6, width:18, height:12, rx:3, fill:'#fbbf24', stroke:'#000', 'stroke-width':1 }, g);
    const lt = el('text', { x:-18, y:3.5, 'font-size':9, 'text-anchor':'middle', fill:'#000', 'font-weight':'900', 'font-family':'sans-serif' }, g);
    lt.textContent = 'L' + u.level;
  }
  if (u.status.length) {
    u.status.slice(0, 2).forEach((st, i) => drawStatusBadge(g, st, 16, -24 - i * 16));
  }
  if (u.node && u.status.includes('wait')) {
    el('ellipse', { cx:0, cy:-28, rx:20, ry:12, fill:'rgba(12,16,24,0.42)' }, g);
  }
  statusFX(g, u);
  return g;
}

const BOARD_DEFS = `
<defs>
  <linearGradient id="gPlate" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dfe9f6"/><stop offset="40%" stop-color="#c9d8ec"/><stop offset="100%" stop-color="#aabfdd"/>
  </linearGradient>
  <linearGradient id="gPlateWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7288ad"/><stop offset="100%" stop-color="#46587a"/>
  </linearGradient>
  <radialGradient id="gPlateSheen" cx="50%" cy="18%" r="80%">
    <stop offset="0%" stop-color="rgba(255,255,255,0.55)"/><stop offset="45%" stop-color="rgba(255,255,255,0.10)"/><stop offset="100%" stop-color="rgba(255,255,255,0)"/>
  </radialGradient>
  <radialGradient id="gArenaGlow" cx="50%" cy="42%" r="65%">
    <stop offset="0%" stop-color="rgba(160,245,255,0.20)"/><stop offset="60%" stop-color="rgba(56,189,248,0.06)"/><stop offset="100%" stop-color="rgba(14,116,144,0)"/>
  </radialGradient>
  <radialGradient id="gNode" cx="35%" cy="30%" r="85%">
    <stop offset="0%" stop-color="#46405c"/><stop offset="55%" stop-color="#1c1729"/><stop offset="100%" stop-color="#100c1a"/>
  </radialGradient>
  <radialGradient id="gBaseTopP1" cx="35%" cy="28%" r="85%">
    <stop offset="0%" stop-color="#7db4fb"/><stop offset="55%" stop-color="#1d4ed8"/><stop offset="100%" stop-color="#172554"/>
  </radialGradient>
  <radialGradient id="gBaseTopP2" cx="35%" cy="28%" r="85%">
    <stop offset="0%" stop-color="#fa8a8a"/><stop offset="55%" stop-color="#b91c1c"/><stop offset="100%" stop-color="#450a0a"/>
  </radialGradient>
  <radialGradient id="gGoalGold" cx="40%" cy="32%" r="80%">
    <stop offset="0%" stop-color="#fde68a"/><stop offset="55%" stop-color="#f59e0b"/><stop offset="100%" stop-color="#92400e"/>
  </radialGradient>
  <radialGradient id="gMeteor" cx="38%" cy="34%" r="80%">
    <stop offset="0%" stop-color="#fff8dc"/><stop offset="42%" stop-color="#fb923c"/><stop offset="100%" stop-color="#7c2d12"/>
  </radialGradient>
  <linearGradient id="gEvoLicht" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="rgba(255,255,255,0.9)"/><stop offset="40%" stop-color="rgba(147,197,253,0.5)"/><stop offset="100%" stop-color="rgba(147,197,253,0)"/>
  </linearGradient>
  <radialGradient id="gVuurgloed" cx="50%" cy="50%" r="50%">
    <stop offset="0%" stop-color="rgba(253,186,116,0.75)"/><stop offset="45%" stop-color="rgba(249,115,22,0.40)"/><stop offset="100%" stop-color="rgba(249,115,22,0)"/>
  </radialGradient>
  <linearGradient id="gPortalLicht" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%" stop-color="rgba(219,234,254,0.85)"/><stop offset="45%" stop-color="rgba(147,197,253,0.35)"/><stop offset="100%" stop-color="rgba(147,197,253,0)"/>
  </linearGradient>
  <radialGradient id="gPadP1" cx="40%" cy="35%" r="70%">
    <stop offset="0%" stop-color="#dbeafe"/><stop offset="40%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#1e3a8a"/>
  </radialGradient>
  <radialGradient id="gPadP2" cx="40%" cy="35%" r="70%">
    <stop offset="0%" stop-color="#ffedd5"/><stop offset="40%" stop-color="#f97316"/><stop offset="100%" stop-color="#7c2d12"/>
  </radialGradient>
  <linearGradient id="gCardBack" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#7f1d1d"/><stop offset="55%" stop-color="#5b1414"/><stop offset="100%" stop-color="#380c0c"/>
  </linearGradient>
  <linearGradient id="gCardFace" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#fdf6e3"/><stop offset="55%" stop-color="#e8d9b5"/><stop offset="100%" stop-color="#c9b189"/>
  </linearGradient>
  <radialGradient id="gGoalBlue" cx="40%" cy="32%" r="80%">
    <stop offset="0%" stop-color="#93c5fd"/><stop offset="55%" stop-color="#2563eb"/><stop offset="100%" stop-color="#1e3a8a"/>
  </radialGradient>
</defs>`;

// Compacte ronde inzetplateaus — dezelfde vorm aan beide kanten, alleen
// de teamkleur verschilt. Zoals de figurenbakken in Duel: een metalen
// schijf met concentrische ringen, geen kasteelpoort of vulkaanput.
function drawSpawn(svg, cx, cy, scale, owner) {
  const g = el('g', { transform:`translate(${cx},${cy}) scale(${scale})`, class:'spawn' }, svg);
  const p1 = owner === 'p1';
  const glow  = p1 ? 'rgba(96,165,250,0.55)' : 'rgba(251,146,60,0.55)';
  const rim   = p1 ? '#bfdbfe' : '#fed7aa';
  const mid   = p1 ? '#3b82f6' : '#ea580c';
  const pad   = p1 ? 'url(#gPadP1)' : 'url(#gPadP2)';
  const metal = '#e2e8f0';
  const shade = '#64748b';

  el('ellipse', { cx:0, cy:10, rx:50, ry:19, fill:glow, class:'spawn-glow' }, g);
  el('ellipse', { cx:0, cy:11, rx:43, ry:16.5, fill:'rgba(0,0,0,0.42)' }, g);
  el('ellipse', { cx:0, cy:6, rx:41, ry:16, fill:shade, stroke:metal, 'stroke-width':3.2 }, g);
  el('ellipse', { cx:0, cy:5, rx:33, ry:12.6, fill:pad, stroke:rim, 'stroke-width':1.7 }, g);
  el('ellipse', { cx:0, cy:4.6, rx:23, ry:8.6, fill:'none', stroke:mid, 'stroke-width':2 }, g);
  el('ellipse', { cx:0, cy:4.2, rx:13, ry:4.8, fill:rim, class:'spawn-glow', opacity:0.9 }, g);
  el('ellipse', { cx:0, cy:3.4, rx:5.2, ry:1.9, fill:'#fff', opacity:0.78 }, g);
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    el('ellipse', {
      cx: Math.cos(a) * 37.4,
      cy: 6 + Math.sin(a) * 14.4,
      rx: 2.05, ry: 1.3,
      fill: metal, stroke: '#475569', 'stroke-width': 0.55
    }, g);
  }
}

function renderBoard() {
  const svg = document.getElementById('board'); svg.innerHTML = BOARD_DEFS;
  const wrap = document.querySelector('.board-wrap');
  if (wrap) wrap.setAttribute('data-arena', S('arena'));
  const tag = document.getElementById('arena-tag');
  if (tag) tag.textContent = t(ARENA_META[S('arena')] || 'arena.stadion').toUpperCase();
  // GEEN speelplaat meer: het bord is doorzichtig en zweeft boven de arena,
  // net als in Duel. Alleen een warme grondgloed onder de routes.
  el('ellipse', { cx:270, cy:445, rx:255, ry:255, fill:'url(#gArenaGlow)' }, svg);
  drawRondel(svg);
  drawCraters(svg);
  drawPortals(svg);
  // Lichtvlek op de vloer onder elk doel: maakt de doelzones herkenbaar
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'goal') continue;
    const col = n.owner === 'p1' ? 'rgba(59,130,246,0.30)' : 'rgba(249,115,22,0.30)';
    // Ronde lichtplas, geen ovaal: het bord kijkt recht van boven, dus een
    // uitgerekte cirkel klopt niet met de rest van de tekening.
    el('circle', { cx:n.x, cy:n.y, r:62, fill:col, opacity:0.55, style:'mix-blend-mode:screen;' }, svg);
  }
  // Ronde inzetplateaus: jouw bak linksonder, die van de tegenstander
  // rechtsboven — dezelfde plek als het apparaat in Duel.
  drawSpawn(svg, 72, 796, 0.95, 'p1');
  drawSpawn(svg, 470, 76, 0.95, 'p2');

  // Scheidingslijnen tussen de zijlijn en het speelveld (staan ook in Duel)
  for (const y of [190, 700]) {
    el('line', { x1:22, y1:y, x2:518, y2:y, stroke:'rgba(255,255,255,0.75)', 'stroke-width':3, 'stroke-linecap':'round' }, svg);
    el('line', { x1:22, y1:y, x2:518, y2:y, stroke:'rgba(255,220,170,0.35)', 'stroke-width':8, 'stroke-linecap':'round' }, svg);
  }
  // Routes: brede zachte halo + witte kern; de gloed staat op de groep
  const gRoutes = el('g', { class:'routes-glow' }, svg);
  const gHalo = el('g', {}, gRoutes), gRoute = el('g', {}, gRoutes);
  for (const [a,b] of ROUTES) { const A = NODES[a], B = NODES[b]; el('line', { x1:A.x, y1:A.y, x2:B.x, y2:B.y, class:'route-halo' }, gHalo); el('line', { x1:A.x, y1:A.y, x2:B.x, y2:B.y, class:'route-core' }, gRoute); }
  const gNodes = el('g', { class:'nodes-glow' }, svg);
  for (const [key, n] of Object.entries(NODES)) {
    const ds = 0.85 + 0.15 * (depthScale(n.y) - 0.78) / 0.22;   // nodes achterin iets kleiner
    const g = el('g', { 'data-node':key, style:'cursor:pointer;' }, gNodes);
    if (n.type === 'entry') {
      // Startpunt = concentrische ringen, als een schietschijf (Duel-look)
      el('circle', { cx:n.x, cy:n.y, r:24*ds, class:'node-glow', id:`glow-${key}` }, g);
      const col = n.owner === 'p1' ? '#60a5fa' : '#f87171';
      el('circle', { cx:n.x, cy:n.y, r:16*ds, fill:'rgba(12,6,10,0.88)', stroke:'#fff', 'stroke-width':2.2*ds, class:'entry-ring ' + n.owner }, g);
      el('circle', { cx:n.x, cy:n.y, r:11*ds, fill:'none', stroke:col, 'stroke-width':2*ds, opacity:0.95 }, g);
      el('circle', { cx:n.x, cy:n.y, r:6.5*ds, fill:'none', stroke:'rgba(255,255,255,0.8)', 'stroke-width':1.5*ds }, g);
      el('circle', { cx:n.x, cy:n.y, r:2.4*ds, fill:'#fff' }, g);
    }
    else if (n.type === 'goal') {
      // Doel = grote gloeiende ring met een pijl naar binnen
      const col = n.owner === 'p1' ? '#3b82f6' : '#f97316';
      const bright = n.owner === 'p1' ? '#93c5fd' : '#fdba74';
      el('circle', { cx:n.x, cy:n.y, r:29*ds, class:'goal-halo ' + n.owner }, g);
      el('circle', { cx:n.x, cy:n.y, r:26*ds, class:'node-glow', id:`glow-${key}` }, g);
      el('circle', { cx:n.x, cy:n.y, r:20*ds, fill:'rgba(10,5,8,0.72)', stroke:col, 'stroke-width':4.5*ds, class:'goal-ring ' + n.owner }, g);
      el('circle', { cx:n.x, cy:n.y, r:14.5*ds, fill:'none', stroke:bright, 'stroke-width':1.6*ds, opacity:0.9 }, g);
      // De pijl wijst OPZIJ, net als in Duel: bovenin naar links, onderin naar
      // rechts — dezelfde 180°-spiegeling als de rest van het bord.
      const t9 = 9*ds, t6 = 6*ds;
      const tri = n.owner==='p2'
        ? `${n.x-t9},${n.y} ${n.x+t6},${n.y-t9} ${n.x+t6},${n.y+t9}`
        : `${n.x+t9},${n.y} ${n.x-t6},${n.y-t9} ${n.x-t6},${n.y+t9}`;
      el('polygon', { points:tri, fill:bright }, g);
    }
    else {
      // Gewoon punt = witte ring met donker hart
      el('circle', { cx:n.x, cy:n.y, r:16*ds, class:'node-glow', id:`glow-${key}` }, g);
      el('circle', { cx:n.x, cy:n.y, r:8.4*ds, fill:'rgba(10,6,12,0.82)', class:'node-rim', 'stroke-width':2.8*ds }, g);
    }
    g.addEventListener('click', () => onNodeTap(key));
  }
  const gUnits = el('g', {}, svg);
  for (const u of Object.values(state.units)) {
    if (!u.node || state.animating === u.uid) continue; const n = NODES[u.node];
    const g = unitGroup(u);
    if (state.selected === u.uid) {
      // Twee gele wijzers links en rechts van de sokkel
      el('polygon', { points:'-34,-10 -22,-2 -34,6', class:'sel-marker' }, g);
      el('polygon', { points:'34,-10 22,-2 34,6', class:'sel-marker' }, g);
    }
    g.setAttribute('class', 'unit-fig' + (state.selected===u.uid?' selected':'') + (RARITY[u.defKey]==='R'?' fig-rare':''));
    g.setAttribute('transform', `translate(${n.x},${n.y}) scale(${depthScale(n.y).toFixed(3)})`);
    g.setAttribute('data-uid', u.uid);
    bindUnitGestures(g, u.uid);
    gUnits.appendChild(g);
  }
  for (const t of state.legalTargets) {
    const glow = document.getElementById(`glow-${t}`);
    if (glow) {
      glow.classList.add('active');
      const mover = state.units[state.selected] || (state.pendingDeploy && state.units[state.pendingDeploy]);
      if (mover && wouldSurround(mover, t).length) glow.classList.add('surround');
    }
  }
  const mover = state.units[state.selected] || (state.pendingDeploy && state.units[state.pendingDeploy]);
  if (mover) {
    const marked = new Set();
    for (const t of state.legalTargets) {
      for (const v of wouldSurround(mover, t)) {
        if (marked.has(v.uid)) continue;
        marked.add(v.uid);
        const fig = svg.querySelector(`.unit-fig[data-uid="${v.uid}"]`);
        if (fig) fig.classList.add('surround-victim');
      }
      const n = NODES[t];
      if (n && n.type === 'goal' && n.owner !== mover.owner) {
        const glow = document.getElementById(`glow-${t}`);
        if (glow) glow.classList.add('score-ready');
        const ring = glow && glow.parentNode && glow.parentNode.querySelector('.goal-ring');
        if (ring) ring.classList.add('score-now');
      }
    }
  }
}

// Duel-stijl: de poppetjes staan als echte figuren klaar aan hun eigen kant
// van de tafel (P2 achteraan, P1 vooraan) en worden vanuit daar ingezet.
// Getekend ín de bord-SVG zodat ze meeschalen met het perspectief.
// Zijlijn: TWEE rijen figuren per speler, boven en onder het bord — zoals in
// Duel. De achterste rij staat iets kleiner en verder weg; lege plekken worden
// als open ovaal getekend zodat je ziet hoeveel figuren je nog hebt.
const BENCH_PER_ROW = 3;
function benchSlot(player, i) {
  const isP2 = player === 'p2';
  const row = Math.floor(i / BENCH_PER_ROW), col = i % BENCH_PER_ROW;
  // P2 (boven): achterste rij bovenaan. P1 (onder): achterste rij onderaan.
  const rows = isP2 ? [58, 140] : [740, 818];
  const y = rows[isP2 ? row : (1 - row)];
  const scale = (isP2 ? 0.74 : 0.92) * (row === 0 ? 0.94 : 1);
  // De rijen verspringen half, en het geheel staat iets uit het midden zodat de
  // kaarten (rechtsonder) en de burchten hun eigen hoek houden.
  const spacing = 92, offset = (row % 2) ? 44 : 0;
  const centre = isP2 ? 282 : 258;
  const x = centre + (col - (BENCH_PER_ROW - 1) / 2) * spacing + (isP2 ? offset : -offset);
  return { x, y, scale };
}

// De kaarten van je tegenstander liggen met de rug omhoog linksboven — je ziet
// dus WEL hoeveel hij er nog heeft, maar niet welke. Precies zoals in Duel.
function renderFoeCards(svg, n) {
  if (!n) return;
  const g = el('g', { class:'foe-cards' }, svg);
  const CW = 34, CH = 48, BY = 72;
  const step = n <= 1 ? 0 : Math.min(24, 90 / (n - 1));
  const BX = 96 - ((n - 1) * step) / 2;
  for (let i = 0; i < n; i++) {
    const rot = n <= 1 ? 0 : 11 - (22 * i) / (n - 1);
    const card = el('g', { transform:`translate(${BX + i * step},${BY}) rotate(${rot})` }, g);
    el('rect', { x:-CW/2+2, y:-CH/2+3, width:CW, height:CH, rx:5, fill:'rgba(0,0,0,0.45)' }, card);
    el('rect', { x:-CW/2, y:-CH/2, width:CW, height:CH, rx:5, fill:'url(#gCardBack)', stroke:'rgba(255,180,180,0.7)', 'stroke-width':1.5 }, card);
    el('rect', { x:-CW/2+3, y:-CH/2+3, width:CW-6, height:CH-6, rx:3.5, fill:'none', stroke:'rgba(255,255,255,0.16)', 'stroke-width':1 }, card);
    // Sober ruggetje: een ruit met een streep, geen informatie
    el('path', { d:'M 0 -9 L 7 0 L 0 9 L -7 0 Z', fill:'none', stroke:'rgba(255,255,255,0.35)', 'stroke-width':1.4 }, card);
    el('circle', { cx:0, cy:0, r:2.2, fill:'rgba(255,255,255,0.30)' }, card);
  }
  const t = el('text', { x:96, y:114, 'font-size':9, 'text-anchor':'middle', fill:'rgba(255,220,220,0.75)', 'font-family':"'Fredoka', sans-serif" }, g);
  t.textContent = `${n} kaart${n === 1 ? '' : 'en'}`;
}

