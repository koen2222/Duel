// ==========================================
// AANVALSANIMATIES (sessie 35)
// Elke aanval heeft een naam; die naam bepaalt wat je ziet. Slangenbeet toont
// giftanden, Smidshamer een hamer die neerkomt, Vonkenspel een vuurexplosie.
// De koppeling gaat op TREFWOORD in de naam, met de vak-kleur als terugval,
// zodat een nieuwe aanval automatisch iets passends krijgt.
// ==========================================
// FX-START (marker voor headless tests — niet verwijderen)
// VOLGORDE IS DE HELE TRUC: de eerste regel die past wint. Drie vallen die er
// al ingelopen zijn, en die deze volgorde nu afvangt:
//   'schild' moet vóór 'beuk'   — anders wordt Schildbeuk een hamer
//   'graf'   mag niet in 'kou'  — anders wordt Grafzwaard ijs
//   'slag'   is zó gewoon dat het alles opslokt (Caduceusslag, Veerslag);
//            daarom staan de specifieke woorden allemaal vóór de snede-regel
//   'tand'   zit óók in 'drietand'; een drietand is een steekwapen, geen kaak
const FX_TREFWOORDEN = [
  [/schild|muur|wering|shield|guard|block/i,             'schild'],
  [/hamer|aambeeld|smids|beuk|vuist|zuil|brons|hoef|staart|stamp|hammer|fist|stomp|tail/i, 'hamer'],
  [/slangen|gif|venijn|walm|lijken|zwavel|poison|venom|toxin/i, 'gif'],
  [/vuur|vlam|brand|laaiend|vonk|zonne|as|gloed|sintel|fire|flame|burn|ember|spark|cinder/i,'vuur'],
  [/bliksem|verlam|bevel|huil|storm|raven|ziel|thunder|volt|bolt|shock/i, 'bliksem'],
  [/pijl|boog|pees|schot|arrow|shot/i,                    'pijl'],
  [/kou|vries|ijs|rijp|ice|frost|freeze/i,                'kou'],
  [/caduceus|kalmerend|woord|vleugel|veer|dwaal|schijn|bedrog|licht|staf|slaap|zegen|sleep|lullaby|hypnosis|psy|mind|daze/i, 'magie'],
  [/drietand|speer|lans|gungnir|werp|worp|spear|toss/i,   'snede'],
  [/beet|klauw|kaak|tand|scheur|slagtand|grauw|blaf|bite|claw|fang/i, 'klauw'],
  [/dolk|zwaard|steek|bijl|slag|haal|snee|prik|slash|cut|chop|blade/i, 'snede'],
  [/greep|klem|grip/i,                                    'schild'],
];
function attackFx(slot) {
  if (!slot) return null;
  if (slot.k === 'red' || slot.k === 'blue') return null;   // mis of blok: geen klap
  const naam = slot.name || '';
  for (const [re, fx] of FX_TREFWOORDEN) if (re.test(naam)) return fx;
  if (slot.k === 'purple') return { poison:'gif', badlypoison:'gif', burn:'vuur',
    paralysis:'bliksem', confusion:'magie', sleep:'magie', frozen:'kou' }[slot.effect] || 'magie';
  return slot.k === 'gold' ? 'bliksem' : 'snede';
}
// FX-END (marker voor headless tests — niet verwijderen)

const FX_KLEUR = { hamer:'#cbd5e1', gif:'#4ade80', vuur:'#fb923c', bliksem:'#fde047',
                   pijl:'#e5e7eb', kou:'#7dd3fc', klauw:'#f87171', snede:'#f8fafc',
                   schild:'#60a5fa', magie:'#c084fc' };

// Tekent de inslag-animatie als een laag over het gevechtsscherm.
// `pos` is optioneel: {x, y} in pixels binnen de laag. Zonder pos speelt de
// animatie in het midden, zoals vroeger.
function speelAanvalFx(soort, pos) {
  if (!soort || animOff()) return 0;
  const laag = document.getElementById('attack-fx');
  if (!laag) return 0;
  const kleur = FX_KLEUR[soort] || '#fff';
  const d = document.createElement('div');
  d.className = 'fx-scene fx-' + soort;
  if (pos) { d.style.left = pos.x + 'px'; d.style.top = pos.y + 'px'; }
  d.style.setProperty('--fxk', kleur);
  const stuk = (cls, extra) => `<i class="${cls}" ${extra || ''}></i>`;
  let html = '';
  if (soort === 'hamer')      html = stuk('fx-hamer') + stuk('fx-ring') + stuk('fx-ring r2');
  else if (soort === 'gif')   html = stuk('fx-tand l') + stuk('fx-tand r') + stuk('fx-drup d1') + stuk('fx-drup d2') + stuk('fx-drup d3');
  else if (soort === 'vuur')  html = Array.from({length:9}, (_,i)=>`<i class="fx-vlam v${i}"></i>`).join('') + stuk('fx-ring');
  else if (soort === 'bliksem') html = stuk('fx-flits') + stuk('fx-flits f2') + stuk('fx-ring');
  else if (soort === 'pijl')  html = stuk('fx-pijl') + stuk('fx-ring r2');
  else if (soort === 'kou')   html = Array.from({length:6}, (_,i)=>`<i class="fx-scherf s${i}"></i>`).join('');
  else if (soort === 'klauw') html = stuk('fx-kras k1') + stuk('fx-kras k2') + stuk('fx-kras k3');
  else if (soort === 'snede') html = stuk('fx-snee n1') + stuk('fx-snee n2');
  else if (soort === 'schild')html = stuk('fx-schild') + stuk('fx-ring');
  else                        html = stuk('fx-rune') + stuk('fx-ring') + stuk('fx-ring r2');
  d.innerHTML = html;
  laag.appendChild(d);
  const duur = 900 * (animScale() || 1);
  setTimeout(() => d.remove(), duur + 200);
  return duur;
}

// ==========================================
// DE KLAP TUSSEN DE TWEE POPPETJES (sessie 37)
// Koen: "als ik een poppetje doe die 30 getagd heeft dan wil ik dat er een
// soort zwaardje door het andere poppetje heen gaat, en als ik blok dan wil ik
// dat er een schild icoontje verschijnt."
// Dus: eerst vliegt er iets van de aanvaller naar de verdediger, dan slaat het
// in OP de verdediger, en dan reageert die — geraakt, geblokt of neergegaan.
// ==========================================
// DUELFX-START (marker voor headless tests — niet verwijderen)
// Welk projectiel hoort bij welke soort aanval?
const FX_PROJECTIEL = {
  snede:  'pr-zwaard', pijl: 'pr-pijl',   vuur:  'pr-bol',   hamer: 'pr-hamer',
  gif:    'pr-tand',   bliksem:'pr-flits', kou:  'pr-scherf', klauw: 'pr-klauw',
  schild: 'pr-schild', magie:'pr-rune',
};
function projectielVoor(soort) { return FX_PROJECTIEL[soort] || 'pr-rune'; }
// DUELFX-END (marker voor headless tests — niet verwijderen)

// Middelpunt van een element, in pixels binnen de FX-laag.
function fxMidden(elem, laag) {
  if (!elem || !laag) return null;
  const a = elem.getBoundingClientRect(), b = laag.getBoundingClientRect();
  if (!a.width && !a.height) return null;
  return { x: a.left - b.left + a.width / 2, y: a.top - b.top + a.height / 2 };
}

// Laat één projectiel van `van` naar `naar` vliegen. Geeft terug hoeveel ms het
// duurt tot het ínslaat (niet tot het helemaal weg is).
function schietProjectiel(soort, van, naar, vertraging) {
  const laag = document.getElementById('attack-fx');
  if (!laag || !van || !naar || animOff()) return 0;
  const schaal = animScale() || 1;
  const duur = Math.round(420 * schaal);
  const dx = naar.x - van.x, dy = naar.y - van.y;
  const hoek = Math.atan2(dy, dx) * 180 / Math.PI;
  const d = document.createElement('div');
  d.className = 'fx-vlieg';
  d.style.setProperty('--fxk', FX_KLEUR[soort] || '#fff');
  d.style.setProperty('--fxt', duur + 'ms');
  d.style.setProperty('--rot', hoek.toFixed(1) + 'deg');
  d.style.setProperty('--x0', van.x.toFixed(1) + 'px');
  d.style.setProperty('--y0', van.y.toFixed(1) + 'px');
  d.style.setProperty('--x1', naar.x.toFixed(1) + 'px');
  d.style.setProperty('--y1', naar.y.toFixed(1) + 'px');
  // Doorschieten: het zwaard komt er aan de andere kant weer uit.
  d.style.setProperty('--x2', (naar.x + dx * 0.5).toFixed(1) + 'px');
  d.style.setProperty('--y2', (naar.y + dy * 0.5).toFixed(1) + 'px');
  d.style.animationDelay = (vertraging || 0) + 'ms';
  d.innerHTML = `<i class="fx-sliert"></i><i class="${projectielVoor(soort)}"></i>`;
  laag.appendChild(d);
  setTimeout(() => d.remove(), (vertraging || 0) + duur + 120);
  return Math.round(duur * 0.64);          // op 64% van de baan raakt hij doel
}

// Schild- of MIS-badge boven een poppetje.
function toonBadge(soort, pos) {
  const laag = document.getElementById('attack-fx');
  if (!laag || !pos || animOff()) return;
  const d = document.createElement('div');
  d.className = 'fx-badge';
  d.style.left = pos.x + 'px';
  if (soort === 'schild') {
    // Het schild vangt de klap op, dus het staat vóór het lijf
    d.style.top = (pos.y - 8) + 'px';
    const vonken = [0, 52, 104, 156, 208, 260, 312]
      .map(a => `<i class="bd-vonk" style="--a:${a}deg"></i>`).join('');
    d.innerHTML = `<div class="bd-schild"></div>${vonken}`;
  } else {
    // Een misser hangt boven het hoofd, met de zwieper die er langs ging
    d.style.top = (pos.y - 62) + 'px';
    d.innerHTML = `<i class="bd-zwieper"></i><div class="bd-mis">MIS</div>`;
  }
  laag.appendChild(d);
  setTimeout(() => d.remove(), 1200);
}

function beweegKlasse(elem, klas, ms) {
  if (!elem || animOff()) return;
  elem.classList.remove(klas); void elem.offsetWidth; elem.classList.add(klas);
  if (ms) setTimeout(() => elem.classList.remove(klas), ms);
}

// De hele choreografie van één treffer, van uitval tot inslag.
// `bron` slaat, `doel` incasseert. Geeft terug hoe lang het duurt.
function speelTreffer(bron, doel, soort, geblokt) {
  if (animOff()) return 0;
  const schaal = animScale() || 1;
  const laag = document.getElementById('attack-fx');
  const vanaf = fxMidden(bron, laag), naar = fxMidden(doel, laag);
  // Geen maten (scherm nog niet zichtbaar)? Dan speelt de inslag in het midden.
  if (!vanaf || !naar) { speelAanvalFx(soort); return 900 * schaal; }
  // Uitval van de aanvaller, de goede kant op
  bron.style.setProperty('--lunge', (naar.x > vanaf.x ? 16 : -16) + 'px');
  beweegKlasse(bron, 'stoot', 460 * schaal);
  sfx('zwiep');
  const raakNa = schietProjectiel(soort, vanaf, naar, 0);
  setTimeout(() => {
    if (geblokt) { toonBadge('schild', naar); sfx('fxschild'); }
    else { speelAanvalFx(soort, naar); beweegKlasse(doel, 'raakt', 520 * schaal); sfx(fxSfx(soort)); }
  }, raakNa);
  return raakNa + 620 * schaal;
}

