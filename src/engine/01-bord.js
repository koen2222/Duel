// ==========================================
// BORD — 28-node layout, sessie 25 gelijkgetrokken met het ECHTE Duel-bord.
// Bron: pokemon.com noemt "fields made up of 26 points (and two goals)"; een
// na-gebouwd fysiek Duel-bord beschrijft de vorm als een 7x5 buitenrand met
// een 3x3 binnenvierkant, waarbij de hoeken van beide vierkanten met elkaar
// verbonden zijn. Dat geeft precies 20 + 8 = 28 posities, waarvan 2 doelen —
// dus 26 punten + 2 doelen. Wij hadden een 5x3 binnenrechthoek (12 punten) en
// dus 4 punten te veel; dat is nu gecorrigeerd.
//
// Rendering blijft in PERSPECTIEF (trapezoïde: bovenkant smaller, rijen dichter
// op elkaar) zodat het bord schuin ligt zoals een echte duel-tafel.
// Entry->vijandelijk doel blijft 7 stappen aan beide kanten, en het doel houdt
// precies 2 toegangen — de rush-fix van sessie 17 blijft dus intact.
// ==========================================
// Sessie 27: het bord is RECHT, geen trapezium meer. Op Koens tweede screenshot
// (bijna recht van boven) lopen de zijkanten evenwijdig. De verticale afstand
// tussen rijen is GROTER dan de horizontale tussen kolommen (105 om 75), zodat
// het geheel bijna vierkant uitkomt: 6x75 = 450 breed bij 4x105 = 420 hoog.
// Boven en onder blijft ruimte over voor TWEE rijen figuren per speler.
const BOARD_CX = 270;
const BOARD_COL_X = [45, 120, 195, 270, 345, 420, 495];
const BOARD_ROW_Y = [235, 340, 445, 550, 655];
// Nauwelijks nog dieptewerking: alleen een subtiel verschil zodat de achterste
// rij niet even zwaar oogt als de voorste.
function depthScale(y) { return 0.93 + 0.07 * Math.min(1, Math.max(0, (y - BOARD_ROW_Y[0]) / (BOARD_ROW_Y[4] - BOARD_ROW_Y[0]))); }
const NODES = (function() {
  const N = {};
  const add = (k, c, r, type, owner) => { N[k] = { x: BOARD_COL_X[c], y: BOARD_ROW_Y[r], type: type || 'regular', owner }; };

  // Outer top (P2-kant)
  add('E2_TL',0,0,'entry','p2'); add('T1',1,0); add('T2',2,0); add('G2',3,0,'goal','p2'); add('T3',4,0); add('T4',5,0); add('E2_TR',6,0,'entry','p2');
  // Zijkanten
  add('L1',0,1); add('L2',0,2); add('L3',0,3);
  add('R1',6,1); add('R2',6,2); add('R3',6,3);
  // Outer bottom (P1-kant)
  add('E1_BL',0,4,'entry','p1'); add('B1',1,4); add('B2',2,4); add('G1',3,4,'goal','p1'); add('B3',4,4); add('B4',5,4); add('E1_BR',6,4,'entry','p1');
  // Binnenvierkant 3x3 (8 randpunten, midden blijft leeg) — Duel-conform
  add('IT1',2,1); add('IT2',3,1); add('IT3',4,1);
  add('IL',2,2);                  add('IR',4,2);
  add('IB1',2,3); add('IB2',3,3); add('IB3',4,3);
  return N;
})();

const ROUTES = [
  // Outer ring
  ['E2_TL','T1'], ['T1','T2'], ['T2','G2'], ['G2','T3'], ['T3','T4'], ['T4','E2_TR'],
  ['E2_TR','R1'], ['R1','R2'], ['R2','R3'], ['R3','E1_BR'],
  ['E1_BR','B4'], ['B4','B3'], ['B3','G1'], ['G1','B2'], ['B2','B1'], ['B1','E1_BL'],
  ['E1_BL','L3'], ['L3','L2'], ['L2','L1'], ['L1','E2_TL'],
  // Binnenvierkant (gesloten ring van 8)
  ['IT1','IT2'], ['IT2','IT3'], ['IT3','IR'], ['IR','IB3'],
  ['IB3','IB2'], ['IB2','IB1'], ['IB1','IL'], ['IL','IT1'],
  // De vier hoeken van de buitenrand verbinden met de vier hoeken van het
  // binnenvierkant — de lijn die vanaf elk startpunt het bord in loopt.
  ['E2_TL','IT1'], ['E2_TR','IT3'], ['E1_BL','IB1'], ['E1_BR','IB3'],
  // DOEL-DIAGONALEN (sessie 26, afgelezen van een echte Duel-screenshot):
  // vanaf het midden van het binnenvierkant loopt één schuine lijn naar een
  // flank van het doel — bovenin naar links, onderin naar rechts, dus 180°
  // gespiegeld. Precies zoals Koen ze in sessie 3 al beschreef; ze waren in
  // sessie 17 geschrapt als rush-fix, maar dat week af van Duel.
  ['T2','IT2'], ['B3','IB2']
];

const ADJ = {}; for (const k of Object.keys(NODES)) ADJ[k] = new Set();
for (const [a,b] of ROUTES) { ADJ[a].add(b); ADJ[b].add(a); }

// Slot-helpers. Sinds sessie 23 dragen aanvallen hun NAAM in het slot zelf, en
// heeft elke unit TWEE onderscheiden white-aanvallen (hoofd + snelle bijaanval,
// verschillende waarde). Duel-reden: burn/paralysis maakt alleen de KLEINSTE
// aanval Miss — met één aanvalswaarde wiste dat het hele wiel (Koens miss-loop).
// Totale white-schade per unit is ~gelijk gehouden aan de oude data (±20).
