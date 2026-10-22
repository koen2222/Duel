function detectLang() {
  try {
    const l = String(navigator.language || navigator.userLanguage || 'nl').toLowerCase();
    if (l.startsWith('en')) return 'en';
  } catch (e) {}
  return 'nl';
}
function isEn() { return S('lang') === 'en'; }
function t(key) {
  const pack = isEn() ? I18N.en : I18N.nl;
  return (pack && pack[key]) || I18N.nl[key] || key;
}
function tr(nl, en) { return isEn() ? (en || nl) : nl; }
function tf(key, vars) {
  let s = t(key);
  for (const [k, v] of Object.entries(vars || {})) s = s.split('{' + k + '}').join(v);
  return s;
}
function unitName(key) {
  const d = UNIT_DEFS[key];
  if (!d) return key || '';
  return isEn() ? (d.nameEn || d.name) : d.name;
}
function facName(fac) {
  if (!fac) return '';
  if (fac === 'alle' || fac === 'bezit') return t('fac.' + fac);
  return isEn() ? (FAC_EN[fac] || fac) : fac;
}
function slotName(slot) {
  if (!slot) return '';
  const nl = slot.name || '';
  if (!isEn()) return nl;
  return slot.nameEn || MOVE_EN[nl] || nl;
}
function plateName(k) {
  const p = PLATES[k]; if (!p) return k;
  return isEn() ? (p.nameEn || p.name) : p.name;
}
function plateDesc(k) {
  const p = PLATES[k]; if (!p) return '';
  return isEn() ? (p.descEn || p.desc) : p.desc;
}
function applyLang() {
  document.documentElement.lang = isEn() ? 'en' : 'nl';
  for (const el of document.querySelectorAll('[data-i18n]')) {
    const k = el.getAttribute('data-i18n');
    if (k) el.textContent = t(k);
  }
}

const FAC_EN = {
  Gras:'Grass', Vuur:'Fire', Water:'Water', Elektro:'Electric', Normaal:'Normal',
  Giftig:'Poison', Vlieg:'Flying', Bodem:'Ground', Steen:'Rock', Insect:'Bug',
  IJs:'Ice', Vecht:'Fighting', Psychisch:'Psychic', Geest:'Ghost', Draak:'Dragon'
};

const MOVE_EN = {
  'Stoot':'Bash', 'Verstijf':'Stun', 'Ontwijk':'Dodge', 'Slaapspoor':'Drowse Dust',
  'Waterstraal':'Tide Shot', 'Spervuur':'Barrage', 'Aanval':'Strike', 'Kopstoot':'Headbutt',
  'Krab':'Swipe', 'Pik':'Peck', 'Psyknal':'Mind Burst', 'Gifbeet':'Venom Bite',
  'Rankzweep':'Vine Lash', 'Slaappoeder':'Drowse Dust', 'Gifsteek':'Venom Sting',
  'Snelstoet':'Dash Strike', 'Graaf':'Burrow', 'Naald':'Needle', 'Drakenstaart':'Drake Tail',
  'Bel':'Bubble', 'Snee':'Slash', 'Hypnose':'Hypnosis', 'Driedubbel':'Triple',
  'Wurg':'Bind', 'Staalvleugel':'Steel Wing', 'Loofrank':'Vine Lash', 'Bladstoot':'Leaf Bash',
  'Steenworp':'Rock Toss', 'Spiegeljas':'Mirror Coat', 'Vleugel':'Wing', 'Wikkel':'Wrap',
  'Donderschok':'Volt Shock', 'Donderstoot':'Volt Punch', 'Zandhaak':'Sand Hook',
  'Dubbelklap':'Double Slap', 'Slaan':'Slap', 'Zang':'Song', 'Bloedzuiger':'Leech',
  'Dwaalstraal':'Wander Beam', 'Draad':'Silk', 'Superpsy':'Psy Surge', 'Trap':'Kick',
  'Vlamwiel':'Flame Wheel', 'Vlamstoot':'Flame Blast', 'Teleporteer':'Warp',
  'Teleportstraal':'Warp Beam', 'Karatehak':'Karate Chop', 'Uitrol':'Unroll',
  'Wegtrappen':'Kick Away', 'Hoornboor':'Horn Drill', 'Vonk':'Spark', 'Dondergolf':'Volt Wave',
  'Razernij':'Fury', 'Nachtschaduw':'Night Shade', 'Toxine':'Toxin', 'Bescherm':'Guard',
  'Verwarring':'Daze', 'Stamp':'Stomp', 'Golf':'Wave', 'Bundeling':'Focus',
  'Rustplek':'Roost', 'Gifpoeder':'Toxin Dust', 'Scheerblad':'Razor Leaf',
  'Zonnestraal':'Sun Beam', 'Vlamstaart':'Flame Tail', 'Rookgordijn':'Smoke Veil',
  'IJzerstaart':'Iron Tail', 'Vlam':'Flame', 'Vuurwervel':'Fire Spin', 'Snelrol':'Quick Roll',
  'Hydropomp':'Tide Cannon', 'Draadwikkel':'Silk Wrap', 'Verhard':'Harden',
  'Psystraal':'Psy Beam', 'Schrikpoeder':'Scare Dust', 'Harde Korst':'Hard Shell',
  'Dubbelnaald':'Twin Needle', 'Hyperbeet':'Hyper Bite', 'Wegvlucht':'Flee',
  'Gifspuug':'Venom Spit', 'Staarblick':'Glare', 'Donderstraal':'Bolt Beam',
  'Donder':'Thunder', 'Verdedigrol':'Defense Curl', 'Slijm':'Slime', 'Gifval':'Venom Trap',
  'Hoornstoot':'Horn Bash', 'Sintelvonk':'Cinder Spark', 'Hyperstem':'Hyper Voice',
  'Lullaby':'Lullaby', 'Round':'Round', 'Luchtsnijder':'Air Cutter', 'Supersonisch':'Supersonic',
  'Beet':'Bite', 'Pollenwals':'Pollen Roll', 'Flauwe Aanval':'Feint', 'Afleidingsklap':'Fake Out',
  'Waterpuls':'Water Pulse', 'Blokkeer':'Block', 'Uitbarsting':'Rampage', 'Tease':'Tease',
  'Gloedschot':'Ember Shot', 'Dynamovuist':'Dynamo Fist', 'Zenkopstoot':'Zen Head',
  'Wissen':'Clear', 'Stilblind':'Disable', 'Psyschok':'Psy Shock', 'Focusvuist':'Focus Punch',
  'Onderwerping':'Submission', 'Zoete Geur':'Sweet Scent', 'Tentakelspervuur':'Tentacle Barrage',
  'Tentakelsteek':'Tentacle Sting', 'Zelfontploffing':'Selfdestruct', 'Landslide':'Landslide',
  'Steenregen':'Rock Fall', 'Rotsmuur':'Rock Wall', 'Overhit':'Overheat',
  'Truukkamer':'Trick Room', 'Geeuw':'Yawn', 'Poeder':'Powder', 'Lotsband':'Destiny Bond',
  'Astonish':'Astonish', 'Besmettelijke Angst':'Contagion Fear', 'Steenlawine':'Rock Slide',
  'Sleepwalk':'Sleepwalk', 'Explosie':'Explosion', 'Schokknal':'Shock Burst',
  'Verdovingspoor':'Stun Spore', 'Karate':'Karate', 'Slijk':'Sludge', 'Smog':'Smog',
  'Slijkbom':'Sludge Bomb', 'Gifgas':'Poison Gas', 'Hyperhaal':'Hyper Take',
  'Knel':'Constrict', 'Facade':'Front', 'Verrassingsvuist':'Sucker Punch',
  'Tweerand':'Double Edge', 'Waterval':'Waterfall', 'Waterstaart':'Water Tail',
  'Megahoorn':'Mega Horn', 'Verblindende Glans':'Dazzling Gleam', 'Mysterieus Scherm':'Mystery Screen',
  'Valse Veeg':'False Swipe', 'Zwaarddans':'Swords Dance', 'Dondervuist':'Thunder Punch',
  'Vuurvuist':'Fire Punch', 'Klemschaar':'Vice Grip', 'Guillotine':'Shear',
  'Schaarworp':'Scissor Toss', 'Neerhaal':'Take Down', 'Spetter':'Splash', 'Spartel':'Flail',
  'Hyperstraal':'Overbeam', 'Storm':'Storm', 'IJsstraal':'Ice Beam', 'Waterglij':'Aqua Slide',
  'Vlamstraal':'Flame Beam', 'Oerkracht':'Ancient Power', 'Modderschot':'Mud Shot',
  'Waterjet':'Aqua Jet', 'Steenrand':'Stone Edge', 'Spot':'Taunt', 'Lijfklap':'Body Slam',
  'Reuzengeeuw':'Giant Yawn', 'Koukraak':'Ice Crush', 'IJslading':'Ice Charge',
  'Donderklap':'Thunder Crash', 'Donderlading':'Volt Charge', 'Verpletterende Vlam':'Crushing Flame',
  'Vlamlading':'Flame Charge', 'Drakenwoede':'Dragon Rage', 'Staartknip':'Tail Chop',
  'Opzij':'Sidestep', 'Magneetstorm':'Magnet Storm', 'Extreemsnel':'Extreme Speed',
  'Sightseeing':'Sightseeing', 'Psyduw':'Psy Push', 'Hypersoon':'Hypersonic',
  'Terugtrek':'Withdraw', 'Gifspoor':'Venom Spore', 'Stormveer':'Gale Feather',
  'Gloed':'Glow', 'Vlamzuil':'Flame Pillar', 'Gevaarszin':'Danger Sense',
  'Psywisseling':'Psy Switch', 'Kanonstraal':'Cannon Beam', 'Blauwe Tentakels':'Blue Tentacles',
  'Rol':'Roll', 'Hemelval':'Sky Drop', 'Pendelsprong':'Pendulum Leap', 'Miss':'Miss'
};

const I18N = {
  nl: {
    'logo.kicker':'SCHIJF', 'home.sub':'Draai de schijf. Verover het doel.',
    'home.cta':'DUEL', 'home.ctaSub':'Solo tegen het systeem',
    'nav.collection':'Collectie', 'nav.store':'Winkel', 'nav.hotseat':'Hotseat',
    'nav.help':'Uitleg', 'nav.settings':'Instellingen', 'nav.online':'Online',
    'chip.collection':'Collectie', 'chip.w':'W', 'chip.l':'V',
    'back':'‹ Terug', 'title.collection':'COLLECTIE', 'title.store':'WINKEL',
    'title.settings':'INSTELLINGEN', 'title.help':'HOE SPEEL JE',
    'booster.name':'BOOSTERKIST', 'booster.desc':'Eén willekeurige unit. Kleine kans op een Rare. Dubbel? Credits terug.',
    'booster.owned':'Je hebt alles al — een kist geeft nu alleen credits terug.',
    'store.orBuy':'Of koop gericht',
    'hud.you':'Jij', 'hud.red':'Rood', 'hud.yourTurn':'Jouw beurt', 'hud.ai':'AI denkt',
    'hud.p2':'Speler 2', 'hud.action':'1 ACTIE', 'hud.end':'Einde beurt', 'hud.menu':'Menu',
    'result.menu':'Terug naar het menu', 'booster.nice':'Mooi!', 'booster.again':'Nog een kist ◈ 150',
    'info.close':'Sluiten', 'detail.close':'Sluiten', 'detail.upgrade':'Upgrade',
    'deck.title':'— STEL JE LEGER SAMEN —', 'deck.titleP2':'— SPELER 2: KIES JE TEAM —',
    'deck.arena':'Arena', 'deck.saved':'Opgeslagen teams', 'deck.units':'Units',
    'deck.plates':'Plates', 'deck.back':'‹ Menu', 'deck.random':'Random', 'deck.start':'Start',
    'combat.vs':'— DUEL —', 'combat.foe':'Tegenstander', 'combat.you':'Jij', 'combat.done':'Voltooien',
    'evo.title':'EVOLUTIE', 'evo.bonus':'+10 op elk wit en goud vak · +1 ★ op elk paars vak',
    'evo.yes':'Evolueren!', 'evo.no':'Nog even niet',
    'fac.alle':'Alle', 'fac.bezit':'In bezit',
    'atk':'Aanval', 'gold':'Doorbraak', 'curse':'Vloek', 'dodge':'Ontwijk', 'miss':'Miss',
    'arena.stadion':'Stadion', 'arena.vuur':'Vuur', 'arena.kristal':'Kristal', 'arena.woud':'Woud',
    'arena.grot':'Grot', 'arena.ijs':'IJs', 'arena.vulkaan':'Vulkaan', 'arena.nacht':'Nacht',
    'exit.confirm':'Duel verlaten en terug naar het menu?',
    'set.lang':'Taal', 'set.langD':'Nederlands of English — namen en menu wisselen mee',
    'set.groupLang':'TAAL',
    'empty.filter':'Geen figuren in dit filter.',
    'empty.shop':'Koop eerst figuren in de Winkel.',
    'goal.yell':'DOEL!',
    'result.win':'OVERWINNING', 'result.lose':'VERSLAGEN',
    'result.p1win':'SPELER 1 WINT', 'result.p2win':'SPELER 2 WINT',
    'block':'Verdedig', 'noAbility':'Geen ability',
    'evo.chain':'EVOLUTIEKETEN', 'maxLevel':'Max level',
    'disk.status':'Deze schijf is aangepast door de status.',
    'hud.aiCalc':'AI berekent…',
    'splash.yours':'JOUW BEURT', 'splash.foe':'TEGENSTANDER', 'splash.p2':'SPELER 2',
    'pc.label':'P.C.',
    'stamp.ko':'UITGESCHAKELD!', 'stamp.miss':'MIS', 'stamp.none':'GEEN EFFECT',
    'stamp.block':'BLOK', 'stamp.wait':'WACHT', 'stamp.bench':'TERUG!',
    'pause.title':'PAUZE', 'pause.resume':'Hervatten', 'pause.quit':'Opgeven',
    'deck.next':'Volgende', 'deck.p1':'— SPELER 1 (BLAUW) — STEL JE LEGER SAMEN —',
    'deck.p2hot':'— SPELER 2 (ROOD) — STEL JE LEGER SAMEN —',
    'deck.empty':'Leeg', 'deck.tapLoad':'Tik om te laden',
  },
  en: {
    'logo.kicker':'DISK', 'home.sub':'Spin the disc. Claim the goal.',
    'home.cta':'DUEL', 'home.ctaSub':'Solo versus the AI',
    'nav.collection':'Collection', 'nav.store':'Shop', 'nav.hotseat':'Hotseat',
    'nav.help':'Help', 'nav.settings':'Settings', 'nav.online':'Online',
    'chip.collection':'Collection', 'chip.w':'W', 'chip.l':'L',
    'back':'‹ Back', 'title.collection':'COLLECTION', 'title.store':'SHOP',
    'title.settings':'SETTINGS', 'title.help':'HOW TO PLAY',
    'booster.name':'BOOSTER CHEST', 'booster.desc':'One random figure. Small chance of a Rare. Duplicate? Credits back.',
    'booster.owned':'You already own everything — a chest now only refunds credits.',
    'store.orBuy':'Or buy a figure',
    'hud.you':'You', 'hud.red':'Red', 'hud.yourTurn':'Your turn', 'hud.ai':'AI thinking',
    'hud.p2':'Player 2', 'hud.action':'1 ACTION', 'hud.end':'End turn', 'hud.menu':'Menu',
    'result.menu':'Back to menu', 'booster.nice':'Nice!', 'booster.again':'Another chest ◈ 150',
    'info.close':'Close', 'detail.close':'Close', 'detail.upgrade':'Upgrade',
    'deck.title':'— BUILD YOUR TEAM —', 'deck.titleP2':'— PLAYER 2: PICK YOUR TEAM —',
    'deck.arena':'Arena', 'deck.saved':'Saved teams', 'deck.units':'Figures',
    'deck.plates':'Plates', 'deck.back':'‹ Menu', 'deck.random':'Random', 'deck.start':'Start',
    'combat.vs':'— DUEL —', 'combat.foe':'Opponent', 'combat.you':'You', 'combat.done':'Continue',
    'evo.title':'EVOLUTION', 'evo.bonus':'+10 on every white and gold wedge · +1 ★ on every purple wedge',
    'evo.yes':'Evolve!', 'evo.no':'Not yet',
    'fac.alle':'All', 'fac.bezit':'Owned',
    'atk':'Attack', 'gold':'Gold', 'curse':'Purple', 'dodge':'Dodge', 'miss':'Miss',
    'arena.stadion':'Stadium', 'arena.vuur':'Fire', 'arena.kristal':'Crystal', 'arena.woud':'Forest',
    'arena.grot':'Cave', 'arena.ijs':'Ice', 'arena.vulkaan':'Volcano', 'arena.nacht':'Night',
    'exit.confirm':'Leave the duel and return to the menu?',
    'set.lang':'Language', 'set.langD':'Nederlands or English — names and menus switch with it',
    'set.groupLang':'LANGUAGE',
    'empty.filter':'No figures in this filter.',
    'empty.shop':'Buy figures in the Shop first.',
    'goal.yell':'GOAL!',
    'result.win':'VICTORY', 'result.lose':'DEFEAT',
    'result.p1win':'PLAYER 1 WINS', 'result.p2win':'PLAYER 2 WINS',
    'block':'Block', 'noAbility':'No ability',
    'evo.chain':'EVOLUTION LINE', 'maxLevel':'Max level',
    'disk.status':'This disc is altered by status.',
    'hud.aiCalc':'AI calculating…',
    'splash.yours':'YOUR TURN', 'splash.foe':'OPPONENT', 'splash.p2':'PLAYER 2',
    'pc.label':'P.C.',
    'stamp.ko':'KNOCK OUT!', 'stamp.miss':'MISS', 'stamp.none':'NO EFFECT',
    'stamp.block':'BLOCK', 'stamp.wait':'WAIT', 'stamp.bench':'BACK!',
    'pause.title':'PAUSED', 'pause.resume':'Resume', 'pause.quit':'Forfeit',
    'deck.next':'Next', 'deck.p1':'— PLAYER 1 (BLUE) — BUILD YOUR TEAM —',
    'deck.p2hot':'— PLAYER 2 (RED) — BUILD YOUR TEAM —',
    'deck.empty':'Empty', 'deck.tapLoad':'Tap to load',
  }
};

// Animatie-beleid op één plek: de systeeminstelling van de telefoon én onze
// eigen instelling tellen allebei mee.
function prefersReduced() { return !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches); }
function animOff() { return prefersReduced() || S('animSpeed') === 'uit'; }
function animScale() { return animOff() ? 0 : (S('animSpeed') === 'snel' ? 0.5 : 1); }

