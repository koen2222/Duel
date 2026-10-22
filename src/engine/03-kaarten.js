// ==========================================
// PLATES (sessie 29) — herontworpen naar de ECHTE Duel-plates.
// Bron: serebii.net/duel/plates.shtml. Belangrijkste structuurpunten die wij
// misten: elke plate heeft een KOSTPRIJS en je deck mag samen niet boven de 8
// uitkomen, en elke plate is één keer per potje te gebruiken.
// Ook opvallend: Duel-plates geven de TEGENSTANDER nooit een status. Onze oude
// Hex/Ensnare/Scorch/Venom bestonden daar dus niet en zijn vervallen; hun rol
// is overgenomen door de echte archetypes hieronder.
// Het veld 'duel' noemt de kaart waar hij op gemodelleerd is.
// ==========================================
// PLATES-START (marker voor headless tests — niet verwijderen)
const PLATE_BUDGET = 8;
const PLATES = {
  // — Herstel —
  fullheal: { name:'Genezing',      duel:'Full Heal',      cost:1, cat:'herstel',  desc:'Wis alle statussen van één eigen figuur (niet Wacht)', target:'ally' },
  revive:   { name:'Herrijzenis',   duel:'Max Revive',     cost:2, cat:'herstel',  desc:'Haal een figuur uit het P.C. terug naar de zijlijn', target:'none' },
  clearwait:{ name:'Wachtbreuk',    duel:'Clear Wait',     cost:2, cat:'herstel',  desc:'Haal Wacht van één eigen figuur af', target:'wait' },
  // — Draaien —
  respin:   { name:'Tweede Kans',   duel:'Double Chance',  cost:1, cat:'draai',    desc:'Jouw figuur mag in het volgende gevecht één keer opnieuw draaien', target:'ally', fx:'respinSelf' },
  dazzle:   { name:'Verblinding',   duel:'Bright Powder',  cost:1, cat:'draai',    desc:'De tegenstander moet in het volgende gevecht opnieuw draaien', target:'ally', fx:'respinFoe' },
  trueaim:  { name:'Scherpschutter',duel:'X Accuracy',     cost:1, cat:'draai',    desc:'Draai je een Miss, dan schuift de wijzer naar het vak ernaast', target:'ally', fx:'xaccuracy' },
  // — Gevecht —
  xattack:  { name:'Krachtstoot',   duel:'X Attack',       cost:1, cat:'gevecht',  desc:'+30 schade in het volgende gevecht', target:'ally', fx:'xattack' },
  xdefend:  { name:'Schildwacht',   duel:'X Defend',       cost:1, cat:'gevecht',  desc:'Wordt niet verslagen door een klap van 10 t/m 100', target:'ally', fx:'xdefend' },
  xspeed:   { name:'Voorrang',      duel:'X Speed',        cost:1, cat:'gevecht',  desc:'Je witte aanval telt als een gouden doorbraak', target:'ally', fx:'xspeed' },
  xhex:     { name:'Vervloeking',   duel:'X Sp. Atk',      cost:1, cat:'gevecht',  desc:'★+2 op je paarse vakken in het volgende gevecht', target:'ally', fx:'xspatk' },
  focus:    { name:'Laatste Adem',  duel:'Focus Band',     cost:2, cat:'gevecht',  desc:'Kan in het volgende gevecht niet verslagen worden', target:'ally', fx:'focus' },
  // — Beweging —
  scoopup:  { name:'Terugroepen',   duel:'Scoop Up',       cost:1, cat:'beweging', desc:'Eigen figuur terug naar de zijlijn', target:'ally' },
  swapspot: { name:'Stellingwissel',duel:'Swap Spot',      cost:1, cat:'beweging', desc:'Wissel twee van je figuren op het veld om', target:'ally-then-ally' },
  hurdle:   { name:'Sprong',        duel:'Hurdle Jump',    cost:2, cat:'beweging', desc:'Spring met een figuur over een aangrenzende figuur heen. Beurt voorbij.', target:'ally-then-node', endsTurn:true },
  cape:     { name:'Sluiermantel',  duel:'Invisibility Cape', cost:3, cat:'beweging', desc:'Deze figuur loopt deze beurt dwars door anderen heen', target:'ally', fx:'phase' },
  longthrow:{ name:'Verworp',       duel:'Long Throw',     cost:2, cat:'beweging', desc:'Zet een figuur van de zijlijn neer, één punt naast je entry. Beurt voorbij.', target:'bench-then-node', endsTurn:true },
  goalblock:{ name:'Doelwacht',     duel:'Goal Block',     cost:2, cat:'beweging', desc:'Zet een eigen figuur op je doel als dat vrij is. Beurt voorbij.', target:'ally', endsTurn:true },
  pokeswitch:{name:'Wisselplaats',  duel:'Pokémon Switch', cost:1, cat:'beweging', desc:'Wissel een veldfiguur met één van de zijlijn. Beurt voorbij.', target:'ally-then-bench', endsTurn:true },
  // — Bijzonder —
  recycle:  { name:'Hergebruik',    duel:'Recycle',        cost:2, cat:'bijzonder',desc:'Al je gebruikte kaarten worden weer bruikbaar. Beurt voorbij.', target:'none', endsTurn:true },
  tropic:   { name:'Zomerstroom',   duel:'Tropical Energy',cost:1, cat:'bijzonder',desc:'Wis statussen van je Gras-, Vlieg- en Insect-figuren. Beurt voorbij.', target:'none', endsTurn:true },
  // Duel heeft een kaart die ALLEEN bestaat voor de situatie "de vijand bezet
  // al mijn startpunten" — het bewijs dat dat een bedoelde spelsituatie is.
  counter:  { name:'Tegenaanval',   duel:'Counter Attack', cost:1, cat:'bijzonder',desc:'Zolang de vijand ál je startpunten bezet, krijgen je figuren +1 MP', target:'none' },
};
(function attachPlateEn() {
  const en = {
    fullheal: ['Cleanse', 'Clear all status from one of your figures (not Wait)'],
    revive: ['Revival', 'Return a figure from the P.C. to the bench'],
    clearwait: ['Break Wait', 'Remove Wait from one of your figures'],
    respin: ['Second Chance', 'Your figure may respin once in the next battle'],
    dazzle: ['Dazzle', 'The opponent must respin in the next battle'],
    trueaim: ['True Aim', 'If you spin Miss, the pointer slides to the next wedge'],
    xattack: ['Power Boost', '+30 damage in the next battle'],
    xdefend: ['Guard Band', 'Cannot be KO’d by a hit of 10–100'],
    xspeed: ['Priority', 'Your white attack counts as a gold breakthrough'],
    xhex: ['Hex Up', '+2 ★ on purple wedges in the next battle'],
    focus: ['Last Breath', 'Cannot be KO’d in the next battle'],
    scoopup: ['Recall', 'Return one of your figures to the bench'],
    swapspot: ['Swap Spots', 'Swap two of your figures on the field'],
    hurdle: ['Leap', 'Jump a figure over an adjacent figure. Ends the turn.'],
    cape: ['Veil Cape', 'This figure walks through others this turn'],
    longthrow: ['Long Toss', 'Place a benched figure one point next to your entry. Ends the turn.'],
    goalblock: ['Goal Guard', 'Move one of your figures onto your empty goal. Ends the turn.'],
    pokeswitch: ['Bench Swap', 'Swap a field figure with a benched one. Ends the turn.'],
    recycle: ['Recycle', 'All spent plates become usable again. Ends the turn.'],
    tropic: ['Summer Flow', 'Clear status from your Grass, Flying and Bug figures. Ends the turn.'],
    counter: ['Counter', 'While the foe occupies all your entry points, your figures get +1 MP'],
  };
  for (const [k, v] of Object.entries(en)) {
    if (PLATES[k]) { PLATES[k].nameEn = v[0]; PLATES[k].descEn = v[1]; }
  }
})();
function plateCost(keys) { return (keys || []).reduce((a, k) => a + (PLATES[k] ? PLATES[k].cost : 0), 0); }
// PLATES-END (marker voor headless tests — niet verwijderen)

// Eigen plate-iconen (SVG, 24x24). Kleur per plate, stroke-stijl passend bij het bord.
const PLATE_ICONS = {
  // Herstel
  fullheal: ['#7dd3fc', '<path d="M12 4 Q17 10 17 14 A5 5 0 0 1 7 14 Q7 10 12 4 Z" stroke-width="1.8"/><path d="M10 14 a2.5 2.5 0 0 0 2 2.5" stroke-width="1.4" opacity="0.7"/>'],
  revive:   ['#f472b6', '<path d="M12 5 V19 M5 12 H19" stroke-width="3" stroke-linecap="round"/><circle cx="12" cy="12" r="8" stroke-width="1.4" opacity="0.5"/>'],
  // Draaien
  respin:   ['#a78bfa', '<path d="M19 12 a7 7 0 1 1 -2.4 -5.3" stroke-width="2"/><path d="M19 4.5 V9 H14.5" stroke-width="2" stroke-linejoin="round"/>'],
  dazzle:   ['#fde047', '<circle cx="12" cy="12" r="3.4" stroke-width="1.8"/><path d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21 M5.6 5.6 L7.8 7.8 M16.2 16.2 L18.4 18.4 M18.4 5.6 L16.2 7.8 M7.8 16.2 L5.6 18.4" stroke-width="1.6" stroke-linecap="round"/>'],
  trueaim:  ['#f87171', '<circle cx="12" cy="12" r="7.5" stroke-width="1.6"/><circle cx="12" cy="12" r="3.2" stroke-width="1.6"/><path d="M12 2.5 V6 M12 18 V21.5 M2.5 12 H6 M18 12 H21.5" stroke-width="1.6" stroke-linecap="round"/>'],
  // Gevecht
  xattack:  ['#fb923c', '<path d="M5 19 L15 9 M13 5 L19 5 L19 11" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M15 9 L19 5" stroke-width="2.2" stroke-linecap="round"/><path d="M4 15 L9 20" stroke-width="1.8" stroke-linecap="round"/>'],
  xdefend:  ['#60a5fa', '<path d="M12 3 L19 6 V12 Q19 18 12 21 Q5 18 5 12 V6 Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M8.5 12 l2.5 2.5 L16 9.5" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>'],
  xspeed:   ['#fbbf24', '<path d="M13 3 L7 13 h4 L9 21 L17 10 h-4.5 L15 3 Z" stroke-width="1.7" stroke-linejoin="round"/>'],
  xhex:     ['#c084fc', '<path d="M12 3 l2.3 6.2 L21 10 l-5 4.3 1.6 6.7 L12 17.5 L6.4 21 8 14.3 3 10 l6.7 -0.8 Z" stroke-width="1.6" stroke-linejoin="round"/>'],
  focus:    ['#f59e0b', '<path d="M6 8 h12 v3 a6 6 0 0 1 -12 0 Z" stroke-width="1.8" stroke-linejoin="round"/><path d="M4 8 h16" stroke-width="2.2" stroke-linecap="round"/><path d="M12 17 v3" stroke-width="1.8" stroke-linecap="round"/>'],
  // Beweging
  scoopup:  ['#9ca3af', '<path d="M14 5 H8 A4 4 0 0 0 8 13 H16 M13 16 l3 -3 l-3 -3" stroke-width="1.9" transform="rotate(180 12 10.5)"/><path d="M5 19.5 h14" stroke-width="1.7"/>'],
  swapspot: ['#38bdf8', '<path d="M4 9 h13 l-3 -3 M20 15 H7 l3 3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'],
  hurdle:   ['#4ade80', '<path d="M4 18 Q12 2 20 18" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="18" r="2.4" stroke-width="1.6"/>'],
  cape:     ['#a3a3a3', '<path d="M12 4 Q7 6 6 12 Q5.5 17 8 20 L12 17 L16 20 Q18.5 17 18 12 Q17 6 12 4 Z" stroke-width="1.7" stroke-linejoin="round" stroke-dasharray="3 2"/>'],
  longthrow:['#fb7185', '<path d="M5 17 L14 7 M12 6 h6 v6" stroke-width="2" stroke-linejoin="round"/><circle cx="7" cy="17" r="2.2" stroke-width="1.6"/>'],
  goalblock:['#fbbf24', '<circle cx="12" cy="12" r="7.2" stroke-width="1.8"/><path d="M12 6 V18 M6 12 H18" stroke-width="1.6"/>'],
  pokeswitch:['#38bdf8', '<path d="M8 7 a4 4 0 1 1 0 0.1 M16 17 a4 4 0 1 1 0 0.1" stroke-width="1.7"/><path d="M9 11 L15 13" stroke-width="1.8"/>'],
  clearwait:['#94a3b8', '<path d="M7 12 h10 M12 7 v10" stroke-width="2.2"/><circle cx="12" cy="12" r="8" stroke-width="1.5" stroke-dasharray="3 2"/>'],
  tropic:   ['#4ade80', '<path d="M12 4 C8 9 8 14 12 20 C16 14 16 9 12 4 Z" stroke-width="1.7"/><path d="M7 12 H17" stroke-width="1.4"/>'],
  // Bijzonder
  recycle:  ['#34d399', '<path d="M7 8 L4.5 12 L9 12 M17 16 L19.5 12 L15 12" stroke-width="1.8" stroke-linejoin="round"/><path d="M9 12 a5 5 0 0 1 8.5 -2.5 M15 12 a5 5 0 0 1 -8.5 2.5" stroke-width="1.8"/>']
};
function plateIcon(key, size) {
  const [color, body] = PLATE_ICONS[key] || ['#f59e0b', '<circle cx="12" cy="12" r="7" stroke-width="1.8"/>'];
  return `<svg viewBox="0 0 24 24" width="${size||22}" height="${size||22}" style="color:${color};flex-shrink:0;" fill="none" stroke="currentColor" stroke-linecap="round">${body}</svg>`;
}

