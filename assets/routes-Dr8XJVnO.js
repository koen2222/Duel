import{n as e,r as t,t as n}from"./index-C7hcOzN5.js";var r=t(e()),i=`<!-- ===== HOME — gym-lobby, Duel-achtig ===== -->
<div id="screen-home" class="screen active">
  <div class="home">
    <div id="home-fx"></div>
    <div class="home-logo">
      <div class="home-logo-kicker" data-i18n="logo.kicker">SCHIJF</div>
      <div class="home-logo-mark">DUEL</div>
      <div class="home-sub" data-i18n="home.sub">Draai de schijf. Verover het doel.</div>
    </div>
    <div class="profile-bar">
      <div class="profile-chip">◈ <b id="home-credits">0</b></div>
      <div class="profile-chip"><span data-i18n="chip.collection">Collectie</span> <b id="home-owned">0</b>/151</div>
      <div class="profile-chip"><span data-i18n="chip.w">W</span> <b id="home-wins">0</b> · <span data-i18n="chip.l">V</span> <b id="home-losses">0</b></div>
    </div>
    <div class="home-stage">
      <div class="home-pad" aria-hidden="true"></div>
      <div class="home-roster" id="home-roster"></div>
      <div class="home-tile home-cta" id="tile-solo">
        <div class="tname" data-i18n="home.cta">DUEL</div>
        <div class="tdesc" data-i18n="home.ctaSub">Solo tegen het systeem</div>
      </div>
    </div>
    <nav class="home-dock" aria-label="Menu">
      <div class="home-tile home-dock-btn" id="tile-collection">
        <span class="ico-wrap">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2.5 L20 5.5 V12 q0 6.5 -8 9.5 Q4 18.5 4 12 V5.5 Z"/>
            <path d="M12 8 l1.9 3.9 L18 12.5 l-3 2.9 0.8 4.1 L12 17.6 L8.2 19.5 L9 15.4 L6 12.5 l4.1 -0.6 Z"/>
          </svg>
        </span>
        <div class="tname" data-i18n="nav.collection">Collectie</div>
      </div>
      <div class="home-tile home-dock-btn" id="tile-store">
        <span class="ico-wrap">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2.5 L20 12 L12 21.5 L4 12 Z"/><path d="M7.5 12 L12 6.6 L16.5 12 L12 17.4 Z"/>
          </svg>
        </span>
        <div class="tname" data-i18n="nav.store">Winkel</div>
      </div>
      <div class="home-tile home-dock-btn" id="tile-hotseat">
        <span class="ico-wrap">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="7.5" cy="7" r="3"/><path d="M2.5 20 v-2.5 a5 5 0 0 1 10 0 V20"/>
            <circle cx="16.5" cy="7" r="3"/><path d="M11.5 20 v-2.5 a5 5 0 0 1 10 0 V20"/>
          </svg>
        </span>
        <div class="tname" data-i18n="nav.hotseat">Hotseat</div>
      </div>
      <div class="home-tile home-dock-btn" id="tile-help">
        <span class="ico-wrap">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 6.2 Q8.5 3.5 3 4.4 V18.6 Q8.5 17.7 12 20.4 Q15.5 17.7 21 18.6 V4.4 Q15.5 3.5 12 6.2 Z"/>
            <path d="M12 6.2 V20.4"/>
          </svg>
        </span>
        <div class="tname" data-i18n="nav.help">Uitleg</div>
      </div>
      <div class="home-tile home-dock-btn" id="tile-settings">
        <span class="ico-wrap">
          <svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="3.2"/>
            <path d="M12 2.2 l1.5 2.6 h-3 Z M12 21.8 l-1.5 -2.6 h3 Z M2.2 12 l2.6 -1.5 v3 Z M21.8 12 l-2.6 1.5 v-3 Z M5.1 5.1 l3 0.4 -2.1 2.1 Z M18.9 18.9 l-3 -0.4 2.1 -2.1 Z M18.9 5.1 l-0.4 3 -2.1 -2.1 Z M5.1 18.9 l0.4 -3 2.1 2.1 Z"/>
            <circle cx="12" cy="12" r="7.4" stroke-dasharray="2.4 3"/>
          </svg>
        </span>
        <div class="tname" data-i18n="nav.settings">Instellingen</div>
      </div>
    </nav>
  </div>
</div>

<!-- ===== COLLECTIE ===== -->
<div id="screen-collection" class="screen">
  <div class="subscreen">
    <div class="subscreen-head">
      <button class="btn-back" data-back="home" data-i18n="back">‹ Terug</button>
      <div class="subscreen-title" data-i18n="title.collection">COLLECTIE</div>
      <div class="subscreen-credits" id="coll-credits"></div>
    </div>
    <div class="type-filters" id="coll-filters"></div>
    <div class="coll-grid" id="coll-grid"></div>
  </div>
</div>

<!-- ===== WINKEL ===== -->
<div id="screen-store" class="screen">
  <div class="subscreen">
    <div class="subscreen-head">
      <button class="btn-back" data-back="home" data-i18n="back">‹ Terug</button>
      <div class="subscreen-title" data-i18n="title.store">WINKEL</div>
      <div class="subscreen-credits" id="store-credits"></div>
    </div>
    <div class="booster-card" id="booster-card">
      <div class="booster-chest">
        <svg viewBox="0 0 64 56" width="44" height="38" aria-hidden="true">
          <path d="M6 24 h52 v26 a3 3 0 0 1 -3 3 H9 a3 3 0 0 1 -3 -3 Z" fill="#7c4a1e" stroke="#3d230d" stroke-width="2"/>
          <path d="M6 24 a26 14 0 0 1 52 0 Z" fill="#95591f" stroke="#3d230d" stroke-width="2"/>
          <rect x="4" y="21" width="56" height="7" rx="2.5" fill="#c8912f" stroke="#5c3a10" stroke-width="1.6"/>
          <rect x="27" y="18" width="10" height="16" rx="2" fill="#f3c969" stroke="#5c3a10" stroke-width="1.6"/>
          <circle cx="32" cy="26" r="2.4" fill="#3d230d"/>
          <path d="M14 27 v25 M50 27 v25" stroke="#c8912f" stroke-width="3" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="booster-txt">
        <div class="bt-name" data-i18n="booster.name">BOOSTERKIST</div>
        <div class="bt-desc" data-i18n="booster.desc">Eén willekeurige unit. Kleine kans op een Rare. Dubbel? Credits terug.</div>
      </div>
      <div class="booster-price" id="booster-price">◈ 150</div>
    </div>
    <div class="deck-sub" style="margin-top:4px;" data-i18n="store.orBuy">Of koop gericht</div>
    <div class="type-filters" id="store-filters"></div>
    <div class="coll-grid" id="store-grid"></div>
  </div>
</div>

<!-- ===== INSTELLINGEN ===== -->
<div id="screen-settings" class="screen">
  <div class="subscreen">
    <div class="subscreen-head">
      <button class="btn-back" data-back="home" data-i18n="back">‹ Terug</button>
      <div class="subscreen-title" data-i18n="title.settings">INSTELLINGEN</div>
    </div>
    <div id="settings-body" style="display:flex; flex-direction:column; gap:12px;"></div>
  </div>
</div>

<!-- ===== HOE SPEEL JE ===== -->
<div id="screen-help" class="screen">
  <div class="subscreen">
    <div class="subscreen-head">
      <button class="btn-back" data-back="home" data-i18n="back">‹ Terug</button>
      <div class="subscreen-title" data-i18n="title.help">HOE SPEEL JE</div>
    </div>
    <div id="help-body" style="display:flex; flex-direction:column; gap:12px;"></div>
  </div>
</div>

<!-- ===== GAME ===== -->
<div id="screen-game" class="screen">
<div class="game">
  <div id="turn-banner" class="turn-banner p1">
    <div class="hud-p hud-p2">
      <span class="hud-dot"></span>
      <span class="hud-who" id="hud-p2-name">Rood</span>
      <span class="hud-clock" id="hud-p2-clock">5:00</span>
    </div>
    <div class="hud-mid">
      <span class="hud-fase" id="turn-name">Jouw beurt</span>
      <span class="hud-act" id="turn-actions">1 ACTIE</span>
    </div>
    <div class="hud-p hud-p1">
      <span class="hud-clock" id="hud-p1-clock">5:00</span>
      <span class="hud-who" id="hud-p1-name">Jij</span>
      <span class="hud-dot"></span>
    </div>
    <span id="turn-clock" hidden>5:00</span>
  </div>
  <div class="board-wrap"><div id="arena-fx"></div><div id="arena-tag" class="arena-tag">STADION</div><svg id="board" viewBox="0 0 540 850" xmlns="http://www.w3.org/2000/svg"></svg></div>
  <div id="plate-strip" class="plate-strip"></div>
  <div class="action-bar">
    <button class="btn primary" id="btn-end-turn" data-i18n="hud.end">Einde beurt</button>
    <button class="btn" id="btn-menu" data-i18n="hud.menu">Menu</button>
  </div>
  <div id="turn-splash" class="turn-splash" aria-hidden="true">
    <div class="turn-splash-inner">
      <div class="turn-splash-kicker">SCHIJFDUEL</div>
      <div class="turn-splash-txt" id="turn-splash-txt">JOUW BEURT</div>
    </div>
  </div>
</div>
</div>

<!-- ===== RESULTAAT (einde match) ===== -->
<div id="result-overlay" class="overlay">
  <div class="result-panel">
    <div class="result-title win" id="result-title">OVERWINNING</div>
    <div class="result-roster" id="result-roster"></div>
    <div class="result-reason" id="result-reason"></div>
    <div class="result-reward" id="result-reward"></div>
    <button class="btn primary" id="btn-result-menu" style="width:100%; margin-top:18px;" data-i18n="result.menu">Terug naar het menu</button>
  </div>
</div>
<div id="pause-overlay" class="overlay">
  <div class="result-panel pause-panel">
    <div class="pause-kicker">SCHIJFDUEL</div>
    <div class="result-title" id="pause-title">PAUZE</div>
    <button class="btn primary" id="btn-pause-resume" data-i18n="pause.resume" style="width:100%; margin-top:8px;">Hervatten</button>
    <button class="btn" id="btn-pause-quit" data-i18n="pause.quit" style="width:100%; margin-top:10px;">Opgeven</button>
  </div>
</div>

<!-- ===== BOOSTERKIST-ONTHULLING ===== -->
<div id="booster-overlay" class="overlay">
  <div class="result-panel">
    <div class="booster-reveal-chest" id="booster-anim">
      <!-- Getekende kist in plaats van een emoji: die zag er op elk toestel
           anders uit en paste niet bij de rest. -->
      <svg viewBox="0 0 64 56" width="112" height="98" aria-hidden="true">
        <path d="M6 24 h52 v26 a3 3 0 0 1 -3 3 H9 a3 3 0 0 1 -3 -3 Z" fill="#7c4a1e" stroke="#3d230d" stroke-width="2"/>
        <path d="M6 24 a26 14 0 0 1 52 0 Z" fill="#95591f" stroke="#3d230d" stroke-width="2"/>
        <rect x="4" y="21" width="56" height="7" rx="2.5" fill="#c8912f" stroke="#5c3a10" stroke-width="1.6"/>
        <rect x="27" y="18" width="10" height="16" rx="2" fill="#f3c969" stroke="#5c3a10" stroke-width="1.6"/>
        <circle cx="32" cy="26" r="2.4" fill="#3d230d"/>
        <path d="M14 27 v25 M50 27 v25" stroke="#c8912f" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
    <div id="booster-result" style="display:none;">
      <div id="booster-art" style="position:relative; margin: 4px 0 8px;"><div id="booster-stralen"></div></div>
      <div class="result-title win" id="booster-name" style="font-size:1.3rem;"></div>
      <div class="result-reason" id="booster-sub"></div>
      <div class="result-reward" id="booster-bonus"></div>
      <button class="btn primary" id="btn-booster-close" style="width:100%; margin-top:16px;" data-i18n="booster.nice">Mooi!</button>
      <button class="btn" id="btn-booster-again" style="width:100%; margin-top:8px;" data-i18n="booster.again">Nog een kist ◈ 150</button>
    </div>
  </div>
</div>

<!-- ===== FIGUUR-INFO tijdens het duel (Duel: figuur vasthouden = data bekijken) ===== -->
<div id="info-overlay" class="overlay">
  <div class="detail-panel">
    <div class="detail-head">
      <div id="info-art"></div>
      <div>
        <div class="detail-name" id="info-name"></div>
        <div class="detail-sub" id="info-sub"></div>
      </div>
    </div>
    <div class="detail-disk-wrap"><svg id="info-disk" viewBox="0 0 240 240"></svg></div>
    <div class="slot-summary" id="info-slots"></div>
    <div class="detail-actions"><button class="btn primary" id="btn-info-close" style="width:100%" data-i18n="info.close">Sluiten</button></div>
  </div>
</div>

<!-- ===== UNIT-DETAIL (collectie) ===== -->
<div id="detail-overlay" class="overlay">
  <div class="detail-panel">
    <div class="detail-stage">
      <div class="detail-pad" aria-hidden="true"></div>
      <div id="detail-art"></div>
    </div>
    <div class="detail-name" id="detail-name"></div>
    <div class="detail-sub" id="detail-sub"></div>
    <div class="detail-disk-wrap"><svg id="disk-preview" viewBox="0 0 240 240"></svg></div>
    <div class="slot-summary" id="detail-slots"></div>
    <div class="evo-keten" id="detail-keten"></div>
    <div class="detail-actions">
      <button class="btn" id="btn-detail-close" data-i18n="detail.close">Sluiten</button>
      <button class="btn primary" id="btn-detail-upgrade">Upgrade</button>
    </div>
    <div class="upg-note" id="detail-note"></div>
  </div>
</div>
<div id="deck-overlay" class="overlay">
  <div class="deck-panel">
    <div class="deck-title" data-i18n="deck.title">— STEL JE LEGER SAMEN —</div>
    <div id="deck-credits" class="deck-credits"></div>
    <div class="deck-lineup" id="deck-lineup"></div>
    <div class="deck-sub" data-i18n="deck.arena">Arena</div>
    <div class="arena-picks" id="deck-arenas"></div>
    <div class="deck-sub" data-i18n="deck.saved">Opgeslagen teams</div>
    <div class="slot-row" id="deck-slots"></div>
    <div class="deck-sub" id="deck-count-units">Units: 0 / 6</div>
    <div class="deck-grid" id="deck-units"></div>
    <div class="deck-sub" id="deck-count-plates">Plates: 0 / 3</div>
    <div class="deck-grid plates" id="deck-plates"></div>
    <div class="deck-actions">
      <button class="btn" id="btn-deck-back" data-i18n="deck.back">‹ Menu</button>
      <button class="btn" id="btn-deck-random" data-i18n="deck.random">Random</button>
      <button class="btn primary" id="btn-deck-start" disabled data-i18n="deck.start">Start</button>
    </div>
  </div>
</div>
<div id="vs-overlay" class="overlay">
  <div class="vs-stage">
    <div class="vs-side vs-p2">
      <div class="vs-who" id="vs-p2-name">AI</div>
      <div class="vs-roster" id="vs-p2-roster"></div>
    </div>
    <div class="vs-mark">VS</div>
    <div class="vs-side vs-p1">
      <div class="vs-roster" id="vs-p1-roster"></div>
      <div class="vs-who" id="vs-p1-name">Jij</div>
    </div>
  </div>
</div>
<div id="combat-overlay" class="overlay">
  <div id="clash-flash"></div>
  <div id="attack-fx"></div>
  <div class="combat-vs" data-i18n="combat.vs">— DUEL —</div>
  <div id="clash-moves" class="clash-moves"></div>
  <div id="clash-stamp" class="clash-stamp" aria-hidden="true">
    <div class="clash-stamp-kicker" id="clash-stamp-kicker"></div>
    <div class="clash-stamp-txt" id="clash-stamp-txt"></div>
  </div>
  <div class="disks-row">
    <div class="disk-cell">
      <div class="who" id="combat-top-name" style="color:var(--p2-soft); text-shadow: 0 0 8px var(--p2-glow);">Tegenstander</div>
      <div class="fight-row">
        <div class="fighter p2" id="fighter-top"></div>
        <div class="disk-wrap"><div class="disk-pointer"></div><svg id="disk-top" class="disk-svg" viewBox="0 0 240 240"></svg></div>
      </div>
    </div>
    <div class="disk-cell">
      <div class="fight-row">
        <div class="fighter p1" id="fighter-bottom"></div>
        <div class="disk-wrap"><div class="disk-pointer"></div><svg id="disk-bottom" class="disk-svg" viewBox="0 0 240 240"></svg></div>
      </div>
      <div class="who" id="combat-bottom-name" style="color:var(--p1-soft); text-shadow: 0 0 8px var(--p1-glow);">Jij</div>
    </div>
  </div>
  <div class="combat-result" id="combat-result"></div>
  <button class="btn primary" id="btn-combat-continue" style="flex:0 0 auto; margin-top:20px; width:100%; max-width: 240px; display:none;" data-i18n="combat.done">Voltooien</button>
</div>
<!-- ===== EVOLUEREN (Duel: je mag altijd weigeren) ===== -->
<div id="evo-overlay" class="overlay">
  <div class="result-panel evo-panel">
    <div class="evo-kop" data-i18n="evo.title">EVOLUTIE</div>
    <div class="evo-rij">
      <div class="evo-kant">
        <div id="evo-van-art"></div>
        <div class="evo-naam" id="evo-van-naam"></div>
      </div>
      <div class="evo-pijl">➜</div>
      <div class="evo-kant nieuw">
        <div id="evo-naar-art"></div>
        <div class="evo-naam" id="evo-naar-naam"></div>
        <div class="evo-sub" id="evo-naar-sub"></div>
      </div>
    </div>
    <div class="evo-bonus" data-i18n="evo.bonus">+10 op elk wit en goud vak · +1 ★ op elk paars vak</div>
    <button class="btn primary" id="btn-evo-ja" style="flex:0 0 auto; width:100%; margin-top:16px;" data-i18n="evo.yes">Evolueren!</button>
    <button class="btn" id="btn-evo-nee" style="flex:0 0 auto; width:100%; margin-top:8px;" data-i18n="evo.no">Nog even niet</button>
  </div>
</div>
<div id="kaart-fx"></div>
<div id="toast" class="toast"></div>
`,a=`if (window.__RONDEL_BOOTED) {
  if (typeof window.__rondelBoot === 'function') window.__rondelBoot();
} else {
window.__RONDEL_BOOTED = true;

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
const W=(n,v,name,effect)=>Array.from({length:n},()=>({k:'white',v,name,effect}));
const G=(n,v,name,effect)=>Array.from({length:n},()=>({k:'gold',v,name,effect}));
const B=(n,name)=>Array.from({length:n},()=>({k:'blue',name}));
const R=n=>Array.from({length:n},()=>({k:'red'}));
const P=(n,effect,stars,name)=>Array.from({length:n},()=>({k:'purple',stars,effect,name}));
let UNIT_DEFS = {};
let DISK_LAYOUT = {};
let UNIT_ART = {};
let UNIT_ABILITY = {};
let RARITY = {};
let EVOLUTIE = {};
const DEX_COUNT = 151;
const OLD_KEY_MAP = {
  squire:'p001', cleric:'p002', commander:'p003',
  imp:'p004', hellhound:'p005', pitlord:'p006',
  apprentice:'p007', runesmith:'p008', warden:'p009',
  scout:'p025', archer:'p026', weaver:'p125',
  skeleton:'p092', ghoul:'p093', necromancer:'p094',
  boar:'p147', lupine:'p148', wyrmling:'p149'
};

function buildSlotsFromDex(e) {
  if (e.segments && e.segments.length) {
    const out = [];
    for (const s of e.segments) {
      const n = s.n | 0;
      if (s.k === 'white') out.push(...W(n, s.v, s.name, s.effect));
      else if (s.k === 'gold') out.push(...G(n, s.v, s.name, s.effect));
      else if (s.k === 'purple') out.push(...P(n, s.effect, s.stars, s.name));
      else if (s.k === 'blue') out.push(...B(n, s.name));
      else if (s.k === 'red') out.push(...R(n));
    }
    return out;
  }
  const out = [];
  for (const w of (e.w || [])) out.push(...W(w.n, w.v, w.name, w.effect));
  for (const g of (e.g || [])) out.push(...G(g.n, g.v, g.name, g.effect));
  for (const p of (e.p || [])) out.push(...P(p.n, p.effect, p.stars, p.name));
  if (e.b) out.push(...B(e.b));
  if (e.r) out.push(...R(e.r));
  return out;
}

// Zet de platte slot-lijst in de vaste schijf-volgorde uit de dex (bv. "G3 W3 R2 W2 P3 R1 B2").
function arrangeSlots(slots, layout) {
  if (!layout || !slots || !slots.length) return null;
  const pool = { white: [], gold: [], purple: [], blue: [], red: [] };
  for (const s of slots) { if (pool[s.k]) pool[s.k].push(s); }
  const map = { W: 'white', G: 'gold', P: 'purple', B: 'blue', R: 'red' };
  const out = [];
  for (const part of String(layout).trim().split(/\\s+/)) {
    const kind = map[part[0]];
    const n = parseInt(part.slice(1), 10);
    if (!kind || !n) continue;
    out.push(...pool[kind].splice(0, n));
  }
  for (const k of ['gold', 'white', 'red', 'purple', 'blue']) out.push(...pool[k]);
  return out.length === slots.length ? out : null;
}

function applyDex(dex) {
  UNIT_DEFS = {}; DISK_LAYOUT = {}; UNIT_ART = {}; UNIT_ABILITY = {}; RARITY = {}; EVOLUTIE = {};
  if (!Array.isArray(dex) || dex.length < 18) return false;
  for (const e of dex) {
    const id = e.id;
    UNIT_DEFS[id] = { name:e.name, nameEn:e.nameEn || e.name, fac:e.fac, mp:e.mp, num:e.num, legend:!!e.legend, slots: buildSlotsFromDex(e), fromSegments: !!(e.segments && e.segments.length) };
    RARITY[id] = e.rar || 'C';
    if (e.evo) EVOLUTIE[id] = e.evo;
    if (e.art) UNIT_ART[id] = e.art;
    if (e.ability) UNIT_ABILITY[id] = e.ability;
    if (e.layout) DISK_LAYOUT[id] = e.layout;
  }
  for (const [k, def] of Object.entries(UNIT_DEFS)) {
    if (!def.fromSegments) {
      const a = DISK_LAYOUT[k] && arrangeSlots(def.slots, DISK_LAYOUT[k]);
      if (a) def.slots = a;
    }
    if (def.slots.length === 16) {
      const exp = [];
      for (const s of def.slots) for (let i = 0; i < 6; i++) exp.push({ ...s });
      def.slots = exp;
    }
    if (def.slots.length !== 96) console.warn('Rondel: schijf van', k, 'heeft', def.slots.length, 'vakken');
  }
  for (const [k, ab] of Object.entries(UNIT_ABILITY)) UNIT_DEFS[k].ability = ab;
  return true;
}

// DISK-ARRANGE-APPLY (marker voor headless tests — niet verwijderen)
if (!applyDex(window.RONDEL_DEX)) {
  console.warn('Rondel: dex ontbreekt — laad rondel-dex.js vóór de engine');
}

const ABILITIES = {
  blessing:  { name:'Zegenende Aura', nameEn:'Blessing Aura', desc:'Wis bij inzet de status van aangrenzende bondgenoten', descEn:'On entry, clear status from adjacent allies' },
  command:   { name:'Aanvoerder',     nameEn:'Commander', desc:'Aangrenzende bondgenoten krijgen +1 MP', descEn:'Adjacent allies gain +1 MP' },
  infernal:  { name:'Hellevaart',     nameEn:'Infernal', desc:'Wie met dit figuur vecht, raakt verbrand', descEn:'Fighters that clash with this figure are burned' },
  undying:   { name:'Onsterfelijk',   nameEn:'Undying', desc:'Eén keer per potje overleeft dit figuur een nederlaag en trekt terug', descEn:'Once per match, this figure survives a KO and retreats' },
  emberrune: { name:'Vuurrune',       nameEn:'Ember Rune', desc:'Wie met dit figuur vecht, raakt verbrand', descEn:'Fighters that clash with this figure are burned' },
  mountain:  { name:'Bergvast',       nameEn:'Mountain Stance', desc:'Standvastig: zwaarder te verdringen wanneer omringd', descEn:'Harder to push when surrounded' },
  stalk:     { name:'Sluipen',        nameEn:'Stalk', desc:'Loopt dwars door andere figuren heen', descEn:'Walks through other figures' },
  fly:       { name:'Vleugelslag',    nameEn:'Wings', desc:'Vliegt over andere figuren heen', descEn:'Flies over other figures' },
  rot:       { name:'Rot',            nameEn:'Rot', desc:'Wie met dit figuur vecht, raakt vergiftigd', descEn:'Fighters that clash with this figure are poisoned' },
  pack:      { name:'Roedel',         nameEn:'Pack', desc:'+1 MP zolang dit figuur naast een bondgenoot staat', descEn:'+1 MP while adjacent to an ally' },
  enchant:   { name:'Betovering',     nameEn:'Enchant', desc:'Wie met dit figuur vecht, raakt in de war', descEn:'Fighters that clash with this figure become confused' },
  raise:     { name:'Zielenoproep',   nameEn:'Soul Call', desc:'Wis bij inzet de Wacht-status van je zijlijn, zodat ze meteen weer inzetbaar zijn', descEn:'On entry, clear Wait from your bench' },
  guts:      { name:'Durf',           nameEn:'Guts', desc:'+50 schade zolang dit figuur een status heeft', descEn:'+50 damage while this figure has a status' },
  insomnia:  { name:'Slapeloos',      nameEn:'Sleepless', desc:'Kan niet in slaap worden gebracht', descEn:'Cannot be put to sleep' },
  icewall:   { name:'IJswal',         nameEn:'Ice Wall', desc:'Kan niet verbranden of bevriezen', descEn:'Cannot be burned or frozen' },
  grounding: { name:'Aarding',        nameEn:'Grounding', desc:'Kan niet verlamd raken', descEn:'Cannot be paralyzed' },
  shed:      { name:'Afschudden',     nameEn:'Shed', desc:'Wist aan het begin van jouw beurt alle statussen', descEn:'Clears all status at the start of your turn' },
  sturdy:    { name:'Stevig',         nameEn:'Sturdy', desc:'Wordt niet verslagen zolang het geen status heeft', descEn:'Cannot be KO’d while it has no status' },
  swiftswim: { name:'Stroomversnelling', nameEn:'Swift Current', desc:'+1 MP naast een Water-bondgenoot', descEn:'+1 MP next to a Water ally' },
};
function abilityName(ab) {
  if (!(ab && ABILITIES[ab])) return '';
  return isEn() ? (ABILITIES[ab].nameEn || ABILITIES[ab].name) : ABILITIES[ab].name;
}
function abilityDesc(ab) {
  if (!(ab && ABILITIES[ab])) return '';
  return isEn() ? (ABILITIES[ab].descEn || ABILITIES[ab].desc) : ABILITIES[ab].desc;
}

function abilityOf(u) { return u && UNIT_DEFS[u.defKey] ? UNIT_DEFS[u.defKey].ability : null; }
// Contact-status: welke status krijgt de tegenstander die ermee vecht?
function contactStatusOf(ability) { return { enchant:'confusion', emberrune:'burn', rot:'poison', infernal:'burn' }[ability] || null; }
function canPhase(u) { const a = abilityOf(u); return a === 'stalk' || a === 'fly' || !!(u && u.fx && u.fx.phase); }

// Move-labels (sessie 23): namen zitten sinds de twee-aanvallen-herontwerp
// ín de slots zelf (zie UNIT_DEFS). Blauw en Miss blijven naamloos.
function moveLabel(slot) {
  const n = slotName(slot);
  if (slot.k === 'white') return \`\${n || t('atk')} \${slot.v}\`;
  if (slot.k === 'gold')  return \`\${n || t('gold')} \${slot.v}\`;
  if (slot.k === 'purple') return \`\${n || t('curse')} \${'★'.repeat(slot.stars || 1)}\`;
  if (slot.k === 'blue')  return n || t('dodge');
  return t('miss');
}
// ABILITIES-END (marker voor headless tests — niet verwijderen)

// Echte character-art (base64). Elke nieuwe PNG van Koen = één regel erbij.

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
  return \`<svg viewBox="0 0 24 24" width="\${size||22}" height="\${size||22}" style="color:\${color};flex-shrink:0;" fill="none" stroke="currentColor" stroke-linecap="round">\${body}</svg>\`;
}

// ==========================================
// STORE & COLLECTIE — kaartjes kopen/upgraden met credits
// ==========================================
// ==========================================
// EVOLUTIE (sessie 39) — 1-op-1 overgenomen uit Pokémon Duel
// Regels zoals Duel ze heeft (bron: Duel-gidsen, zie docs):
//  1. Je moet ALLEBEI de figuren bezitten: de basisvorm én z'n evolutie.
//  2. De basisvorm zet je in je team; de evolutie hang je eronder. Een figuur
//     dat klaar is om te evolueren krijgt een blauw stipje.
//  3. Tijdens een potje evolueert hij als hij een gevecht WINT — dus als hij
//     de tegenstander verslaat of van z'n plek verdringt.
//  4. Je MAG weigeren. Soms wil je je huidige schijf houden.
//  5. Wie mid-potje evolueert krijgt een bonus die je niet krijgt als je met
//     de evolutie begint: +10 op elk wit en goud vak, +1 ster op elk paars.
// Onze zes facties vormen elk precies zo'n keten van drie: common -> uncommon
// -> rare. Dat was geen ontwerpkeuze achteraf maar viel exact samen.
// EVO-START (marker voor headless tests — niet verwijderen)
// Waar evolueert deze sleutel naartoe? (of null als het al de eindvorm is)
function evolutieOpties(key) {
  const v = EVOLUTIE[key];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}
function evolutieVan(key) { const o = evolutieOpties(key); return o[0] || null; }
function evoMatch(from, to) { return evolutieOpties(from).includes(to); }
function voorloperVan(key) {
  return Object.keys(EVOLUTIE).find(k => evoMatch(k, key)) || null;
}
// Alleen BASISVORMEN mag je opstellen. Een geëvolueerde vorm verdien je door te
// evolueren, niet door hem te kopen en neer te zetten. Koen: "je moet alleen
// ongevolueerde figurines in kunnen zetten en ze alleen kunnen evolven als je
// de kaart ook hebt gekocht." Dit WIJKT BEWUST AF van Duel, waar je een
// geëvolueerde vorm gewoon in je deck mag zetten (de evolutiebonus is daar het
// enige verschil). Zie het statusdocument.
function isBasisvorm(key) { return !voorloperVan(key); }
// De hele keten waar deze sleutel in zit, van begin tot eind.
function evolutieKeten(key) {
  return ketenLagen(key).flat();
}
// Lagen voor weergave: lineaire ketens zijn [[a],[b],[c]]; een vork (Pluimstaart)
// is [[basis],[tak1, tak2, tak3]].
function ketenLagen(key) {
  let start = key;
  for (let i = 0; i < 6; i++) {
    const vorige = Object.keys(EVOLUTIE).find(k => evoMatch(k, start));
    if (!vorige) break;
    start = vorige;
  }
  const lagen = [[start]];
  let cur = start;
  const seen = new Set([start]);
  while (true) {
    const opts = evolutieOpties(cur).filter(k => !seen.has(k));
    if (!opts.length) break;
    if (opts.length === 1) {
      lagen.push([opts[0]]);
      seen.add(opts[0]);
      cur = opts[0];
      continue;
    }
    if (opts.includes(key)) {
      lagen.push([key]);
      seen.add(key);
      cur = key;
      continue;
    }
    lagen.push(opts);
    opts.forEach(k => seen.add(k));
    break;
  }
  return lagen;
}
// De bonus van mid-potje evolueren: +10 schade op wit/goud, +1 ster op paars.
// Precies zoals Duel: daarom loont het om KLEIN te beginnen en door te groeien
// in plaats van meteen de eindvorm op te stellen.
function evolutieBonus(slots) {
  return slots.map(s => {
    if (s.k === 'white' || s.k === 'gold') return { ...s, v: (s.v || 0) + 10 };
    if (s.k === 'purple') return { ...s, stars: (s.stars || 1) + 1 };
    return { ...s };
  });
}
// EVO-END (marker voor headless tests — niet verwijderen)

const PRICE = { C:100, U:200, R:400 };
const UPGRADE_COST = { 1:150, 2:250, 3:400 }; // kosten van huidig level naar volgend (max 4)
const WIN_CREDITS = 100, LOSS_CREDITS = 25;

// ==========================================
// BOOSTERKIST (sessie 24) — in Duel kwam je aan figuren via boosters, niet via
// een vaste winkel. De winkel blijft ongewijzigd (gericht kopen, duurder); de
// kist is de goedkope gok. Dubbel? Dan krijg je credits terug, zodat een kist
// nooit weggegooid geld is.
// ==========================================
// BOOSTER-START (marker voor headless tests — niet verwijderen)
const BOOSTER_COST = 150;
const BOOSTER_ODDS = [['C', 0.65], ['U', 0.27], ['R', 0.08]];
const BOOSTER_REFUND = { C: 60, U: 120, R: 240 };
// Puur: rand01 = getal in [0,1) voor de rarity, pick01 = idem voor de unitkeuze.
function rollBooster(rand01, pick01, owned, rarityMap) {
  let acc = 0, rar = 'C';
  for (const [r, p] of BOOSTER_ODDS) { acc += p; if (rand01 < acc) { rar = r; break; } }
  let pool = Object.keys(rarityMap).filter(k => rarityMap[k] === rar);
  // Alles van deze zeldzaamheid al in bezit? Dan liever iets nieuws uit een
  // andere lade dan gegarandeerd een duplicaat.
  const fresh = pool.filter(k => !owned[k]);
  const anyFresh = Object.keys(rarityMap).filter(k => !owned[k]);
  if (!fresh.length && anyFresh.length) pool = anyFresh;
  else if (fresh.length) pool = fresh;
  const key = pool[Math.min(pool.length - 1, Math.floor(pick01 * pool.length))];
  const duplicate = !!owned[key];
  return { key, rarity: rarityMap[key], duplicate, refund: duplicate ? BOOSTER_REFUND[rarityMap[key]] : 0 };
}
// BOOSTER-END (marker voor headless tests — niet verwijderen)

// ==========================================
// INSTELLINGEN (sessie 24) — leven in het profiel zodat ze meegaan met
// localStorage. Elke waarde wordt bij het laden gevalideerd, zodat een oud of
// beschadigd profiel nooit het spel kan breken (defaults winnen).
// ==========================================
// SETTINGS-START (marker voor headless tests — niet verwijderen)
const SETTING_DEFS = {
  sfx:         { def: true,     type:'bool' },
  sfxVolume:   { def: 0.7,      type:'num',    min: 0, max: 1 },
  music:       { def: true,     type:'bool' },
  musicVolume: { def: 0.58,     type:'num',    min: 0, max: 1 },
  bgmDuel:     { def: true,     type:'bool' },
  haptics:     { def: true,     type:'bool' },
  animSpeed:   { def: 'normaal',type:'enum',   opts: ['normaal','snel','uit'] },
  arena:       { def: 'stadion',type:'enum',   opts: ['stadion','vuur','kristal','woud','grot','ijs','vulkaan','nacht'] },
  clockMinutes:{ def: 5,        type:'enum',   opts: [3, 5, 10, 0] },   // 0 = geen klok
  difficulty:  { def: 'normaal',type:'enum',   opts: ['makkelijk','normaal','moeilijk'] },
  confirmExit: { def: true,     type:'bool' },
  showHints:   { def: true,     type:'bool' },
  autoEndTurn: { def: true,     type:'bool' },
  lang:        { def: 'nl',     type:'enum',   opts: ['nl','en'] },
};
function freshSettings() {
  const s = {};
  for (const [k, d] of Object.entries(SETTING_DEFS)) s[k] = d.def;
  s.lang = detectLang();
  return s;
}
// Valideert elke sleutel apart: onbekende/ongeldige waarden vallen terug op de default.
function normalizeSettings(raw) {
  const out = freshSettings();
  if (!raw || typeof raw !== 'object') {
    out.lang = detectLang();
    return out;
  }
  for (const [k, d] of Object.entries(SETTING_DEFS)) {
    const v = raw[k];
    if (v === undefined || v === null) continue;
    if (d.type === 'bool' && typeof v === 'boolean') out[k] = v;
    else if (d.type === 'num' && typeof v === 'number' && isFinite(v)) out[k] = Math.min(d.max, Math.max(d.min, v));
    else if (d.type === 'enum' && d.opts.includes(v)) out[k] = v;
  }
  if (raw.lang === undefined || raw.lang === null) out.lang = detectLang();
  return out;
}
// SETTINGS-END (marker voor headless tests — niet verwijderen)

let profile;
const DECK_SLOTS = 3;
function freshProfile() { return { credits: 400, owned: { p001:1, p004:1, p007:1, p025:1, p092:1, p147:1 }, stats: { wins:0, losses:0 }, settings: freshSettings(), decks: Array(DECK_SLOTS).fill(null) }; }
// Opgeslagen teams valideren: units die je niet (meer) bezit vallen weg, en een
// slot dat daardoor incompleet wordt gaat leeg — zo kan een oud slot nooit een
// ongeldig potje starten.
function normalizeDecks(raw, owned) {
  const out = Array(DECK_SLOTS).fill(null);
  if (!Array.isArray(raw)) return out;
  for (let i = 0; i < DECK_SLOTS; i++) {
    const d = raw[i];
    if (!d || !Array.isArray(d.units) || !Array.isArray(d.plates)) continue;
    // Alleen basisvormen mogen in het team staan; een geëvolueerde vorm hang je
    // eronder. Oude teams met een evolutie erin verliezen die unit.
    const units = d.units.filter(k => UNIT_DEFS[k] && owned[k] && isBasisvorm(k));
    const plates = d.plates.filter(k => PLATES[k]);
    // Aangehangen evoluties: alleen geldig als het écht de evolutie van dat
    // figuur is én je hem bezit. De keten loopt door: hang je Rankhorn onder
    // Spruiton, dan mag Loofra daar weer onder. Loofra zonder Rankhorn mag niet.
    const evos = {};
    if (d.evos && typeof d.evos === 'object') {
      for (const start of units) {
        let k = start;
        while (true) {
          const e = d.evos[k];
          if (!e || !evoMatch(k, e) || !owned[e]) break;
          evos[k] = e; k = e;
        }
      }
    }
    if (units.length === 6 && plates.length > 0 && plateCost(plates) <= PLATE_BUDGET) out[i] = { units, plates, evos, name: typeof d.name === 'string' ? d.name.slice(0, 16) : '' };
  }
  return out;
}
function migrateOwned(owned) {
  const out = {};
  if (!owned || typeof owned !== 'object') return out;
  for (const [k, v] of Object.entries(owned)) out[OLD_KEY_MAP[k] || k] = v;
  return out;
}
function loadProfile() {
  let upgraded = false;
  try {
    const rawStr = localStorage.getItem('rondel_profile');
    const raw = rawStr ? JSON.parse(rawStr) : null;
    profile = raw || freshProfile();
    if (raw && raw.settings && raw.settings.bgmDuel === undefined) upgraded = true;
  }
  catch(e) { profile = freshProfile(); }
  if (!profile || typeof profile.credits !== 'number' || !profile.owned) profile = freshProfile();
  profile.owned = migrateOwned(profile.owned);
  if (!profile.stats) profile.stats = { wins:0, losses:0 };
  profile.settings = normalizeSettings(profile.settings);
  profile.decks = normalizeDecks(profile.decks, profile.owned);
  applyLang();
  if (upgraded) {
    profile.settings.music = true;
    profile.settings.bgmDuel = true;
    saveProfile();
  }
}
function saveProfile() { try { localStorage.setItem('rondel_profile', JSON.stringify(profile)); } catch(e) {} }
// Korte accessor; valt terug op de default als het profiel nog niet geladen is.
function S(key) {
  const s = profile && profile.settings ? profile.settings : null;
  const v = s ? s[key] : undefined;
  // Let op: nooit terugvallen op SETTING_DEFS[key] zelf — dat is de definitie
  // ({def,type,...}), niet de waarde. Voor het profiel geladen is moet .def eruit.
  return v === undefined ? SETTING_DEFS[key].def : v;
}

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
    'nav.help':'Uitleg', 'nav.settings':'Instellingen',
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
    'nav.help':'How to play', 'nav.settings':'Settings',
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

// ==========================================
// AUDIO (sessie 24) — alle geluid wordt in code gesynthetiseerd met de
// WebAudio-API: geen enkel extern bestand, dus de PWA blijft offline werken en
// het spel wordt er geen byte zwaarder van. Mobiele browsers staan audio pas
// toe ná een gebruikersgebaar; daarom wordt de context lui aangemaakt en bij de
// eerste tik hervat (unlockAudio).
// ==========================================
const Audio_ = {
  ctx: null, master: null, sfxGain: null, musicGain: null, musicComp: null,
  musicNodes: [], unlocked: false,
  track: null, pendingTrack: 'lobby', playing: false,
  schedTimer: null, nextNoteTime: 0, step: 0, bpm: 128, duck: 1,
  nbuf: null,

  ensure() {
    if (this.ctx) return this.ctx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      this.ctx = new AC({ latencyHint: 'interactive' });
      this.master = this.ctx.createGain();
      this.master.gain.value = 1;
      this.master.connect(this.ctx.destination);
      this.sfxGain = this.ctx.createGain();
      this.sfxGain.gain.value = S('sfxVolume');
      this.sfxGain.connect(this.master);
      this.musicGain = this.ctx.createGain();
      this.musicGain.gain.value = 0;
      this.musicComp = this.ctx.createDynamicsCompressor();
      this.musicComp.threshold.value = -16;
      this.musicComp.knee.value = 18;
      this.musicComp.ratio.value = 3.2;
      this.musicComp.attack.value = 0.01;
      this.musicComp.release.value = 0.18;
      const delay = this.ctx.createDelay();
      delay.delayTime.value = 0.18;
      const fb = this.ctx.createGain(); fb.gain.value = 0.18;
      const wet = this.ctx.createGain(); wet.gain.value = 0.16;
      this.musicGain.connect(this.musicComp);
      this.musicComp.connect(this.master);
      this.musicComp.connect(delay);
      delay.connect(fb); fb.connect(delay); delay.connect(wet); wet.connect(this.master);
      this.delay = delay;
      const frames = this.ctx.sampleRate * 0.5;
      this.nbuf = this.ctx.createBuffer(1, frames, this.ctx.sampleRate);
      const d = this.nbuf.getChannelData(0);
      for (let i = 0; i < frames; i++) d[i] = Math.random() * 2 - 1;
    } catch (e) { this.ctx = null; }
    return this.ctx;
  },
  unlock() {
    const ctx = this.ensure(); if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    this.unlocked = true;
    if (S('music')) this.setTrack(this.pendingTrack || 'lobby');
  },
  setVolume(v) { if (this.sfxGain) this.sfxGain.gain.setTargetAtTime(Math.max(0, v), this.ctx.currentTime, 0.03); },
  applyMusicGain() {
    if (!this.musicGain || !this.ctx) return;
    const on = S('music') && this.playing;
    const v = on ? Math.max(0.0001, (S('musicVolume') || 0.58) * this.duck) : 0.0001;
    this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicGain.gain.setTargetAtTime(v, this.ctx.currentTime, 0.06);
  },
  setDuck(d) { this.duck = d; this.applyMusicGain(); },

  tone({ freq = 440, dur = 0.15, type = 'sine', vol = 0.3, attack = 0.005, decay = null, slideTo = null, delay = 0 }) {
    if (!S('sfx')) return;
    const ctx = this.ensure(); if (!ctx || ctx.state === 'suspended') return;
    const t0 = ctx.currentTime + delay;
    const osc = ctx.createOscillator(), g = ctx.createGain();
    osc.type = type; osc.frequency.setValueAtTime(freq, t0);
    if (slideTo) osc.frequency.exponentialRampToValueAtTime(Math.max(1, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), t0 + attack);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + (decay || dur));
    osc.connect(g); g.connect(this.sfxGain || this.master);
    osc.start(t0); osc.stop(t0 + (decay || dur) + 0.02);
  },
  noise({ dur = 0.2, vol = 0.3, filter = 1200, sweepTo = null, delay = 0, type = 'lowpass' }) {
    if (!S('sfx')) return;
    const ctx = this.ensure(); if (!ctx || ctx.state === 'suspended') return;
    const t0 = ctx.currentTime + delay;
    const src = ctx.createBufferSource();
    src.buffer = this.nbuf;
    const bp = ctx.createBiquadFilter(); bp.type = type; bp.frequency.setValueAtTime(filter, t0);
    if (sweepTo) bp.frequency.exponentialRampToValueAtTime(Math.max(40, sweepTo), t0 + dur);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    src.connect(bp); bp.connect(g); g.connect(this.sfxGain || this.master);
    src.start(t0); src.stop(t0 + dur + 0.02);
  },
  buzz(ms) { if (S('haptics') && navigator.vibrate) { try { navigator.vibrate(ms); } catch (e) {} } },

  startMusic() { this.syncTrack(); },
  stopMusic() { this.stopLoop(); },

  setTrack(name) {
    this.pendingTrack = name;
    if (!S('music') || !this.unlocked) { if (!S('music')) this.stopLoop(); return; }
    const ctx = this.ensure(); if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    if (this.track === name && this.playing) { this.applyMusicGain(); return; }
    this.track = name;
    this.bpm = name === 'combat' ? 148 : name === 'battle' ? 140 : 128;
    this.step = 0;
    this.nextNoteTime = ctx.currentTime + 0.04;
    this.playing = true;
    this.applyMusicGain();
    if (!this.schedTimer) this._scheduler();
  },
  stopLoop() {
    this.playing = false;
    this.track = null;
    if (this.schedTimer) { clearTimeout(this.schedTimer); this.schedTimer = null; }
    if (this.musicGain && this.ctx) {
      this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
      this.musicGain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.08);
    }
  },
  syncTrack() {
    if (!S('music')) { this.stopLoop(); return; }
    const combat = document.getElementById('combat-overlay')?.classList.contains('active');
    const vs = document.getElementById('vs-overlay')?.classList.contains('active');
    const result = document.getElementById('result-overlay')?.classList.contains('active');
    const game = document.getElementById('screen-game')?.classList.contains('active');
    const store = document.getElementById('screen-store')?.classList.contains('active');
    if (result) return;
    if (combat) this.setTrack('combat');
    else if (vs || game) this.setTrack('battle');
    else if (store) this.setTrack('lobby');
    else this.setTrack('lobby');
  },

  _scheduler() {
    if (!this.playing || !this.ctx) { this.schedTimer = null; return; }
    const ctx = this.ctx;
    const stepDur = (60 / this.bpm) / 4;
    while (this.nextNoteTime < ctx.currentTime + 0.2) {
      this._emit(this.nextNoteTime, this.step);
      this.nextNoteTime += stepDur;
      this.step++;
    }
    this.schedTimer = setTimeout(() => this._scheduler(), 40);
  },

  _out() { return this.musicGain; },
  _hz(n) { return 440 * Math.pow(2, (n - 69) / 12); },

  _env(g, t0, dur, vol, atk, rel) {
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol), t0 + atk);
    g.gain.setValueAtTime(Math.max(0.0001, vol * 0.72), t0 + Math.max(atk, dur - rel));
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  },
  _noiseAt(t0, dur) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.nbuf;
    src.start(t0); src.stop(t0 + dur + 0.02);
    return src;
  },
  _kick(t0, vol) {
    const ctx = this.ctx, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(150, t0);
    o.frequency.exponentialRampToValueAtTime(42, t0 + 0.11);
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.22);
    o.connect(g); g.connect(this._out());
    o.start(t0); o.stop(t0 + 0.24);
    const click = ctx.createOscillator(), cg = ctx.createGain();
    click.type = 'triangle'; click.frequency.value = 980;
    cg.gain.setValueAtTime(vol * 0.18, t0);
    cg.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.03);
    click.connect(cg); cg.connect(this._out());
    click.start(t0); click.stop(t0 + 0.04);
  },
  _snare(t0, vol) {
    const ctx = this.ctx;
    const src = this._noiseAt(t0, 0.14);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = 1800; bp.Q.value = 0.9;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.14);
    src.connect(bp); bp.connect(g); g.connect(this._out());
    const o = ctx.createOscillator(), og = ctx.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(190, t0);
    o.frequency.exponentialRampToValueAtTime(120, t0 + 0.08);
    og.gain.setValueAtTime(vol * 0.45, t0);
    og.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.1);
    o.connect(og); og.connect(this._out());
    o.start(t0); o.stop(t0 + 0.12);
  },
  _hat(t0, vol, open) {
    const ctx = this.ctx;
    const src = this._noiseAt(t0, open ? 0.18 : 0.045);
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 7500;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + (open ? 0.16 : 0.04));
    src.connect(hp); hp.connect(g); g.connect(this._out());
  },
  _crash(t0, vol) {
    const ctx = this.ctx;
    const src = this._noiseAt(t0, 0.55);
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.setValueAtTime(6000, t0);
    bp.frequency.exponentialRampToValueAtTime(900, t0 + 0.5);
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t0);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.55);
    src.connect(bp); bp.connect(g); g.connect(this._out());
  },
  _bass(t0, midi, dur, vol) {
    const ctx = this.ctx, f = this._hz(midi);
    const o = ctx.createOscillator(), s = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'triangle'; o.frequency.setValueAtTime(f, t0);
    s.type = 'sine'; s.frequency.setValueAtTime(f / 2, t0);
    this._env(g, t0, dur, vol, 0.01, 0.06);
    o.connect(g); s.connect(g); g.connect(this._out());
    o.start(t0); s.start(t0); o.stop(t0 + dur + 0.02); s.stop(t0 + dur + 0.02);
  },
  _brass(t0, midi, dur, vol) {
    const ctx = this.ctx, f = this._hz(midi);
    const g = ctx.createGain(), filt = ctx.createBiquadFilter();
    filt.type = 'lowpass';
    filt.frequency.setValueAtTime(900, t0);
    filt.frequency.exponentialRampToValueAtTime(2200, t0 + 0.04);
    filt.frequency.exponentialRampToValueAtTime(1200, t0 + dur * 0.7);
    this._env(g, t0, dur, vol, 0.018, 0.08);
    for (const det of [-11, 8]) {
      const o = ctx.createOscillator();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(f, t0); o.detune.value = det;
      o.connect(filt); o.start(t0); o.stop(t0 + dur + 0.03);
    }
    filt.connect(g); g.connect(this._out());
  },
  _bell(t0, midi, dur, vol) {
    const ctx = this.ctx, f = this._hz(midi);
    const o = ctx.createOscillator(), o2 = ctx.createOscillator(), g = ctx.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(f, t0);
    o2.type = 'sine'; o2.frequency.setValueAtTime(f * 2.01, t0);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    o.connect(g); o2.connect(g); g.connect(this._out());
    o.start(t0); o2.start(t0); o.stop(t0 + dur); o2.stop(t0 + dur);
  },
  _chord(t0, midis, dur, vol) {
    const ctx = this.ctx, g = ctx.createGain();
    this._env(g, t0, dur, vol, 0.03, 0.12);
    g.connect(this._out());
    for (const n of midis) {
      const o = ctx.createOscillator();
      o.type = 'triangle'; o.frequency.setValueAtTime(this._hz(n), t0);
      o.connect(g); o.start(t0); o.stop(t0 + dur + 0.02);
    }
  },

  _emit(t, step) {
    if (this.track === 'battle' || this.track === 'combat') this._patBattle(t, step, this.track === 'combat');
    else this._patLobby(t, step);
  },

  // Gym-fanfare in C, 128 BPM, 8 maten — origineel, Duel-achtig: snare-mars,
  // koper-hook, klokkenspel-antwoord. Geen Pokémon-melodie.
  _patLobby(t, step) {
    const s = step % 128, bar = (s / 16) | 0, b = s % 16;
    const sp = (60 / this.bpm) / 4;
    if (s === 0) this._crash(t, 0.11);
    if (b === 0 || b === 8) this._kick(t, 0.2);
    if (bar === 7 && (b === 4 || b === 10 || b === 14)) this._kick(t, 0.16);
    if (b === 4 || b === 12) this._snare(t, 0.15);
    if (bar === 7 && b === 14) this._snare(t, 0.12);
    if (b % 2 === 0) this._hat(t, b % 4 === 0 ? 0.045 : 0.028, false);
    if (bar % 2 === 1 && b === 14) this._hat(t, 0.05, true);

    const roots = [36, 31, 33, 29, 36, 28, 29, 31];
    const root = roots[bar], fifth = root + 7, oct = root + 12;
    const bassWalk = [root, root, fifth, root, oct, fifth, root, fifth];
    if (b % 2 === 0) this._bass(t, bassWalk[b / 2], sp * 2.05, 0.13);

    const chords = [
      [60, 64, 67], [59, 62, 67], [57, 60, 64], [53, 57, 60],
      [60, 64, 67], [52, 55, 59], [53, 57, 60], [55, 59, 62],
    ];
    if (b === 0 || b === 8) this._chord(t, chords[bar], sp * 7.5, b === 0 ? 0.045 : 0.032);

    const lead = this._lobbyLead(s);
    if (lead) {
      this._brass(t, lead.n, sp * lead.d * 0.95, 0.095);
      if (lead.d >= 4) this._bell(t, lead.n + 12, sp * lead.d * 0.7, 0.055);
    }
  },
  _lobbyLead(s) {
    // [step, midi, duration in 16ths]
    const L = [
      [0,72,2],[2,76,2],[4,79,4],[8,81,2],[10,79,2],[12,76,2],[14,72,2],
      [16,79,2],[18,81,2],[20,84,4],[24,81,2],[26,79,2],[28,76,2],[30,74,2],
      [32,76,2],[34,79,2],[36,81,4],[40,79,2],[42,77,2],[44,76,2],[46,74,2],
      [48,72,4],[52,67,4],[56,72,2],[58,74,2],[60,76,4],
      [64,76,2],[66,76,2],[68,79,2],[70,81,2],[72,84,4],[76,81,2],[78,79,2],
      [80,81,2],[82,84,2],[84,86,4],[88,84,2],[90,81,2],[92,79,2],[94,76,2],
      [96,77,2],[98,76,2],[100,74,2],[102,76,2],[104,79,4],[108,76,2],[110,74,2],
      [112,72,4],[116,67,2],[118,64,2],[120,67,2],[122,71,2],[124,72,4],
    ];
    for (const [st, n, d] of L) if (st === s) return { n, d };
    return null;
  },

  // Dueldeun: Am-mars, 140 BPM. Drijvende bas, koperstoten, strakkere drums.
  _patBattle(t, step, tense) {
    const s = step % 128, bar = (s / 16) | 0, b = s % 16;
    const sp = (60 / this.bpm) / 4;
    if (s === 0) this._crash(t, 0.1);
    if (b === 0 || b === 8) this._kick(t, 0.22);
    else if (b === 4 || b === 12) this._kick(t, 0.1);
    if (tense && (b === 6 || b === 14)) this._kick(t, 0.08);
    if (b === 4 || b === 12) this._snare(t, 0.16);
    if (bar === 7 && (b === 10 || b === 14)) this._snare(t, 0.12);
    if (b % 2 === 0) this._hat(t, 0.036, false);
    if (tense && b % 2 === 1) this._hat(t, 0.02, false);
    if (b === 14) this._hat(t, 0.05, true);

    const roots = [33, 31, 29, 28, 33, 31, 36, 31];
    const root = roots[bar], fifth = root + 7;
    if (b % 2 === 0) this._bass(t, (b % 4 === 2) ? fifth : root, sp * 2.05, 0.15);
    if (tense && b === 0) this._bass(t, root - 12, sp * 15, 0.06);

    const chords = [
      [57, 60, 64], [55, 59, 62], [53, 57, 60], [52, 55, 59],
      [57, 60, 64], [55, 59, 62], [60, 64, 67], [55, 59, 62],
    ];
    if (b === 0 || b === 8) this._chord(t, chords[bar], sp * 6, 0.04);
    if (b === 4 || b === 12) this._brass(t, chords[bar][2], sp * 1.6, 0.05);

    const lead = this._battleLead(s);
    if (lead) this._brass(t, lead.n, sp * lead.d * 0.9, 0.1);
  },
  _battleLead(s) {
    const L = [
      [0,69,2],[2,72,2],[4,76,4],[8,74,2],[10,72,2],[12,71,2],[14,69,2],
      [16,72,2],[18,74,2],[20,76,4],[24,79,2],[26,76,2],[28,74,2],[30,72,2],
      [32,69,2],[34,72,2],[36,74,2],[38,76,2],[40,77,4],[44,76,2],[46,74,2],
      [48,71,2],[50,72,2],[52,74,2],[54,76,2],[56,72,4],[60,71,4],
      [64,69,2],[66,69,2],[68,72,2],[70,76,2],[72,81,4],[76,79,2],[78,76,2],
      [80,79,2],[82,81,2],[84,83,4],[88,81,2],[90,79,2],[92,76,2],[94,74,2],
      [96,77,2],[98,76,2],[100,74,2],[102,72,2],[104,74,4],[108,76,4],
      [112,69,4],[116,64,2],[118,67,2],[120,69,2],[122,71,2],[124,72,4],
    ];
    for (const [st, n, d] of L) if (st === s) return { n, d };
    return null;
  },

  playSting(kind) {
    const ctx = this.ensure(); if (!ctx || !this.unlocked) return;
    const t0 = ctx.currentTime;
    const sp = 0.14;
    if (kind === 'vs') {
      this._crash(t0, 0.12);
      [60, 64, 67, 72].forEach((n, i) => this._brass(t0 + i * sp, n, 0.28, 0.12));
      this._snare(t0 + 0.42, 0.14);
      this._snare(t0 + 0.56, 0.16);
    } else if (kind === 'win') {
      this._crash(t0, 0.14);
      [60, 64, 67, 72, 76, 79, 84].forEach((n, i) => this._brass(t0 + i * 0.11, n, 0.32, 0.13));
      this._bell(t0 + 0.7, 84, 0.8, 0.1);
    } else if (kind === 'lose') {
      [72, 67, 63, 60].forEach((n, i) => this._brass(t0 + i * 0.22, n, 0.4, 0.11));
    }
  },
};

// Benoemde spel-geluiden. Eén plek, zodat de rest van de code alleen sfx('ko') doet.
const SFX = {
  click:   () => Audio_.tone({ freq: 320, dur: 0.05, type: 'triangle', vol: 0.16 }),
  select:  () => Audio_.tone({ freq: 620, dur: 0.07, type: 'triangle', vol: 0.18 }),
  denied:  () => { Audio_.tone({ freq: 150, dur: 0.12, type: 'square', vol: 0.12 }); Audio_.buzz(18); },
  hop:     () => Audio_.noise({ dur: 0.09, vol: 0.13, filter: 900, sweepTo: 300 }),
  deploy:  () => { Audio_.noise({ dur: 0.28, vol: 0.2, filter: 400, sweepTo: 2400, type: 'bandpass' }); Audio_.tone({ freq: 220, slideTo: 660, dur: 0.25, type: 'triangle', vol: 0.16 }); },
  tick:    () => Audio_.tone({ freq: 1500, dur: 0.028, type: 'square', vol: 0.08 }),
  clash:   () => { Audio_.noise({ dur: 0.35, vol: 0.42, filter: 2600, sweepTo: 200 }); Audio_.tone({ freq: 180, slideTo: 60, dur: 0.3, type: 'sawtooth', vol: 0.24 }); Audio_.buzz(45); },
  ko:      () => { Audio_.noise({ dur: 0.6, vol: 0.5, filter: 1800, sweepTo: 90 }); Audio_.tone({ freq: 140, slideTo: 40, dur: 0.5, type: 'square', vol: 0.22 }); Audio_.buzz([30, 40, 60]); },
  status:  () => { Audio_.tone({ freq: 880, dur: 0.1, type: 'sine', vol: 0.14 }); Audio_.tone({ freq: 1320, dur: 0.14, type: 'sine', vol: 0.11, delay: 0.06 }); },
  block:   () => Audio_.tone({ freq: 400, dur: 0.14, type: 'square', vol: 0.16, slideTo: 300 }),
  levelup: () => [523, 659, 784, 1046].forEach((f, i) => Audio_.tone({ freq: f, dur: 0.16, type: 'triangle', vol: 0.2, delay: i * 0.075 })),
  plate:   () => { Audio_.tone({ freq: 700, slideTo: 1400, dur: 0.2, type: 'sine', vol: 0.16 }); Audio_.noise({ dur: 0.2, vol: 0.1, filter: 3000 }); },
  win:     () => [523, 659, 784, 1046, 1318].forEach((f, i) => Audio_.tone({ freq: f, dur: 0.4, type: 'triangle', vol: 0.24, delay: i * 0.13 })),
  lose:    () => [392, 349, 294, 220].forEach((f, i) => Audio_.tone({ freq: f, dur: 0.45, type: 'sine', vol: 0.2, delay: i * 0.17 })),
  turn:    () => Audio_.tone({ freq: 480, slideTo: 720, dur: 0.16, type: 'triangle', vol: 0.14 }),
  // Per aanvalssoort een eigen klank — zo hoor je wat er op je afkomt nog
  // vóór je het ziet inslaan.
  zwiep:   () => Audio_.noise({ dur: 0.18, vol: 0.2, filter: 4200, sweepTo: 700, type: 'bandpass' }),
  fxsnede: () => { Audio_.noise({ dur: 0.16, vol: 0.26, filter: 5200, sweepTo: 900, type: 'bandpass' }); Audio_.tone({ freq: 2100, slideTo: 700, dur: 0.14, type: 'sawtooth', vol: 0.1 }); },
  fxpijl:  () => { Audio_.noise({ dur: 0.2, vol: 0.2, filter: 3200, sweepTo: 1400, type: 'bandpass' }); Audio_.tone({ freq: 1300, slideTo: 420, dur: 0.16, type: 'triangle', vol: 0.09 }); },
  fxvuur:  () => { Audio_.noise({ dur: 0.5, vol: 0.34, filter: 700, sweepTo: 2600, type: 'lowpass' }); Audio_.tone({ freq: 90, slideTo: 46, dur: 0.42, type: 'sawtooth', vol: 0.2 }); },
  fxbliksem: () => { Audio_.noise({ dur: 0.34, vol: 0.44, filter: 6500, sweepTo: 260 }); Audio_.tone({ freq: 3200, slideTo: 120, dur: 0.16, type: 'square', vol: 0.12 }); Audio_.buzz(40); },
  fxkou:   () => { [1800, 2400, 3100].forEach((f, i) => Audio_.tone({ freq: f, slideTo: f * 1.6, dur: 0.14, type: 'sine', vol: 0.12, delay: i * 0.045 })); Audio_.noise({ dur: 0.3, vol: 0.14, filter: 5200, type: 'highpass' }); },
  fxhamer: () => { Audio_.tone({ freq: 150, slideTo: 55, dur: 0.4, type: 'square', vol: 0.26 }); Audio_.noise({ dur: 0.3, vol: 0.3, filter: 1200, sweepTo: 140 }); Audio_.buzz(50); },
  fxgif:   () => { Audio_.noise({ dur: 0.42, vol: 0.2, filter: 2600, sweepTo: 5200, type: 'bandpass' }); Audio_.tone({ freq: 340, slideTo: 200, dur: 0.3, type: 'sine', vol: 0.1 }); },
  fxklauw: () => { Audio_.noise({ dur: 0.24, vol: 0.3, filter: 2200, sweepTo: 500, type: 'bandpass' }); Audio_.tone({ freq: 620, slideTo: 180, dur: 0.2, type: 'sawtooth', vol: 0.12 }); },
  fxmagie: () => { [700, 1050, 1400].forEach((f, i) => Audio_.tone({ freq: f, slideTo: f * 1.5, dur: 0.26, type: 'sine', vol: 0.11, delay: i * 0.06 })); },
  fxschild: () => { Audio_.tone({ freq: 520, slideTo: 300, dur: 0.22, type: 'square', vol: 0.2 }); Audio_.noise({ dur: 0.2, vol: 0.18, filter: 2600, sweepTo: 600 }); },
  mis:     () => Audio_.noise({ dur: 0.24, vol: 0.16, filter: 2000, sweepTo: 380, type: 'bandpass' }),
  // Evolueren: een oplopende reeks die uitmondt in een heldere klap
  evolve:  () => { [392, 523, 659, 784, 1047, 1319].forEach((f, i) => Audio_.tone({ freq: f, dur: 0.22, type: 'triangle', vol: 0.2, delay: i * 0.075 }));
                   Audio_.noise({ dur: 0.5, vol: 0.28, filter: 900, sweepTo: 5200, type: 'bandpass', delay: 0.4 });
                   Audio_.buzz([25, 30, 60]); },
};
// Welke klank hoort bij welke aanvalssoort?
function fxSfx(soort) { return SFX['fx' + soort] ? 'fx' + soort : 'clash'; }
function sfx(name) { const f = SFX[name]; if (f) { try { f(); } catch (e) {} } }

function unitVisual(defKey, owner, h) {
  const art = UNIT_ART[defKey];
  if (art) return \`<img src="\${art}" style="height:\${h||46}px;width:auto;display:block;margin:0 auto;filter:drop-shadow(0 2px 3px rgba(0,0,0,0.7));">\`;
  return unitSilhouette(defKey, owner);
}

function unitSilhouette(defKey, owner) {
  const PAL = {
    Gras: ['#86efac', '#4ade80'], Elektro: ['#fde047', '#67e8f9'], Water: ['#7dd3fc', '#38bdf8'],
    Geest: ['#c4b5fd', '#a78bfa'], Draak: ['#a5f3fc', '#fde68a'], Vuur: ['#fb923c', '#ef4444'],
    Normaal: ['#e2e8f0', '#cbd5e1'], Giftig: ['#d8b4fe', '#a855f7'], Vlieg: ['#bae6fd', '#38bdf8'],
    Bodem: ['#d6b48a', '#b45309'], Steen: ['#d6d3d1', '#78716c'], Insect: ['#bef264', '#65a30d'],
    IJs: ['#a5f3fc', '#67e8f9'], Vecht: ['#fdba74', '#ea580c'], Psychisch: ['#f0abfc', '#e879f9']
  };
  const [f, a] = PAL[(UNIT_DEFS[defKey] || {}).fac] || ['#cbd5e1', '#ffffff'];
  const body = \`<ellipse cx="12" cy="14" rx="7" ry="6" fill="\${f}"/><circle cx="12" cy="6.2" r="3.2" fill="\${a}"/>\`;
  return \`<svg viewBox="0 0 24 22" width="100%" height="100%">\${body}</svg>\`;
}

let state;
let currentMode = 'solo';

function initialState() {
  const ms = S('clockMinutes') * 60000;   // 0 = klok uit
  return { turn:'p1', turnN:0, actionsLeft:1, units:{}, bench:{p1:[],p2:[]}, hc:{p1:[],p2:[]}, selected:null, legalTargets:new Set(), pendingDeploy:null, over:false, mode: currentMode, aiThinking: false, locked: false, plates:{p1:[],p2:[]}, usedPlates:{p1:[],p2:[]}, counterAttack:{p1:false,p2:false}, plateUsed:false, pendingPlate:null, mpBonus:{}, warcry:{p1:false,p2:false}, firstMoveDone:false, animating:null, pendingFX:[], craters:[], portals:[], clock: ms ? { p1:ms, p2:ms } : null };
}

// ===== Schaakklok (Duel-regel: 5 min per speler; tijd op = verlies) =====
// De klok tikt alleen tijdens je eigen beurt en pauzeert tijdens
// animaties/gevechten (state.locked).
let clockTimer = null, clockLast = 0;
function fmtClock(ms) { const s = Math.max(0, Math.ceil(ms / 1000)); return \`\${Math.floor(s/60)}:\${String(s%60).padStart(2,'0')}\`; }
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

// ===== App-router: home / collection / store / game =====
function showScreen(name) {
  for (const s of document.querySelectorAll('.screen')) s.classList.remove('active');
  document.getElementById('screen-' + name).classList.add('active');
  window.scrollTo(0, 0);
  Audio_.syncTrack();
}

function renderHome() {
  applyLang();
  document.getElementById('home-credits').textContent = profile.credits;
  document.getElementById('home-owned').textContent = Object.keys(profile.owned).length;
  document.getElementById('home-wins').textContent = profile.stats.wins;
  document.getElementById('home-losses').textContent = profile.stats.losses;
  const roster = document.getElementById('home-roster');
  if (roster) {
    const starters = ['p001','p004','p007','p025','p092','p147'];
    roster.innerHTML = starters.map(k => {
      const art = UNIT_ART[k];
      if (art) return \`<img src="\${art}" alt="">\`;
      return unitVisual(k, 'p1', 118);
    }).join('');
  }
  buildHomeFx();
}

function goHome() {
  stopClock(); clearSpinTicks();
  document.getElementById('deck-overlay').classList.remove('active');
  document.getElementById('result-overlay').classList.remove('active');
  const pause = document.getElementById('pause-overlay');
  if (pause) pause.classList.remove('active');
  const vs = document.getElementById('vs-overlay');
  if (vs) vs.classList.remove('active');
  const combat = document.getElementById('combat-overlay');
  if (combat) combat.classList.remove('active');
  Audio_.setDuck(1);
  state = initialState(); state.over = true;
  renderHome(); showScreen('home');
}

// Als er niets te kiezen valt, kies het dan alvast. Sinds alleen basisvormen
// opgesteld mogen worden bezit een beginner er precies zes — even veel als er
// teamplekken zijn. Dan is zes keer tikken geen keuze maar een klusje. Zodra je
// er zeven of meer hebt is het wél weer een keuze en vullen we niets in.
function vulTeamAlsErNietsTeKiezenValt() {
  const basis = Object.keys(profile.owned).filter(isBasisvorm);
  if (deckSel.units.length || basis.length === 0 || basis.length > 6) return;
  deckSel.units = basis.slice(0, 6);
  for (const k of deckSel.units) {
    let stap = k;
    while (true) {
      const opts = evolutieOpties(stap).filter(e => profile.owned[e]);
      if (!opts.length) break;
      deckSel.evos[stap] = opts[0]; stap = opts[0];
    }
  }
}

// Vanuit home: modus kiezen -> deck-selectie openen
function startMatchFlow(mode) {
  currentMode = mode;
  deckSel = { units: [], plates: [], evos: {} };
  deckStage = 'p1'; deckP1 = null;
  state = initialState(); state.over = true;
  vulTeamAlsErNietsTeKiezenValt();
  renderDeckSelect();
  document.getElementById('deck-overlay').classList.add('active');
}

// Backwards-compat: her en der wordt newGame() aangeroepen als "match voorbij"
function newGame() { goHome(); }

function onDeckConfirm() {
  if (!(deckSel.units.length === 6 && deckSel.plates.length > 0)) return;
  if (currentMode === 'hotseat' && deckStage === 'p1') {
    deckP1 = { units: [...deckSel.units], plates: [...deckSel.plates], evos: { ...deckSel.evos } };
    deckSel = { units: [], plates: [], evos: {} };
    deckStage = 'p2';
    vulTeamAlsErNietsTeKiezenValt();
    renderDeckSelect();
    toast(tr('Speler 2: stel je leger samen', 'Player 2: build your team'));
    return;
  }
  startGame();
}

// Opgeslagen teams: tik een gevuld slot om het te laden, of het ◇-knopje om je
// huidige keuze erin te bewaren. Scheelt elk potje opnieuw negen kaarten kiezen.
function renderDeckSlots() {
  const row = document.getElementById('deck-slots'); if (!row) return;
  row.innerHTML = '';
  const selectionValid = deckSel.units.length === 6 && deckSel.plates.length > 0 && plateCost(deckSel.plates) <= PLATE_BUDGET;
  for (let i = 0; i < DECK_SLOTS; i++) {
    const d = profile.decks[i];
    const chip = document.createElement('div');
    chip.className = 'slot-chip' + (d ? ' filled' : '');
    chip.dataset.slot = String(i);
    const figs = d ? \`<div class="sfigs">\${d.units.slice(0, 6).map(k => unitVisual(k, 'p1', 16)).join('')}</div>\` : '';
    chip.innerHTML = \`<div class="sname">TEAM \${i + 1}</div>\${figs}<div class="sbody">\${d ? t('deck.tapLoad') : t('deck.empty')}</div>\`;
    chip.addEventListener('click', () => {
      if (!d) { toast(selectionValid ? tr('Tik op ◇ om je team hier te bewaren', 'Tap ◇ to save your team here') : tr('Kies eerst 6 units en minstens één kaart', 'Pick 6 figures and at least one plate first')); return; }
      deckSel = { units: [...d.units], plates: [...d.plates], evos: { ...(d.evos || {}) } };
      sfx('select'); toast(tr(\`Team \${i + 1} geladen\`, \`Team \${i + 1} loaded\`)); renderDeckSelect();
    });
    const save = document.createElement('div');
    save.className = 'slot-save'; save.textContent = '◇'; save.title = tr('Huidige keuze hier bewaren', 'Save current pick here');
    save.addEventListener('click', (e) => {
      e.stopPropagation();
      if (!selectionValid) { sfx('denied'); toast(tr('Kies eerst 6 units en minstens één kaart', 'Pick 6 figures and at least one plate first')); return; }
      if (d && !confirm(tr(\`Team \${i + 1} overschrijven?\`, \`Overwrite Team \${i + 1}?\`))) return;
      profile.decks[i] = { units: [...deckSel.units], plates: [...deckSel.plates], evos: { ...deckSel.evos }, name: '' };
      saveProfile(); sfx('plate'); toast(tr(\`Bewaard als Team \${i + 1}\`, \`Saved as Team \${i + 1}\`)); renderDeckSlots();
    });
    chip.appendChild(save);
    row.appendChild(chip);
  }
}

function hangEvoSleuven(card, startKey) {
  const ontkoppel = (vanaf) => {
    let k = vanaf;
    while (k && deckSel.evos[k]) {
      const nxt = deckSel.evos[k];
      delete deckSel.evos[k];
      k = nxt;
    }
    delete deckSel.evos[vanaf];
  };
  const walk = (stap, diep) => {
    const opts = evolutieOpties(stap);
    if (!opts.length) return;
    for (const doel of opts) {
      const heb = !!profile.owned[doel];
      const aan = deckSel.evos[stap] === doel;
      const vorigeAan = diep === 0 || deckSel.evos[voorloperVan(stap)] === stap;
      const sleuf = document.createElement('div');
      sleuf.className = 'evo-sleuf' + (aan ? ' aan' : '') + (heb && vorigeAan ? '' : ' mist');
      if (diep) sleuf.style.marginLeft = (diep * 10) + 'px';
      sleuf.innerHTML = heb
        ? \`\${unitVisual(doel, 'p1', 22)}<span>\${unitName(doel)}</span>\`
        : \`<span class="evo-slot-leeg">▾</span><span>\${tr(\`\${unitName(doel)} nodig\`, \`Need \${unitName(doel)}\`)}</span>\`;
      sleuf.addEventListener('click', (e) => {
        e.stopPropagation();
        if (!heb) { sfx('denied'); toast(tr(\`Je hebt \${unitName(doel)} nog niet — koop hem in de Winkel\`, \`You don’t own \${unitName(doel)} yet — buy it in the Shop\`)); return; }
        if (!vorigeAan) { sfx('denied'); toast(tr(\`Hang eerst \${unitName(stap)} eronder\`, \`Attach \${unitName(stap)} underneath first\`)); return; }
        if (aan) ontkoppel(stap);
        else { ontkoppel(stap); deckSel.evos[stap] = doel; }
        sfx('select'); renderDeckSelect();
      });
      if (!(heb && vorigeAan) && !aan) sleuf.style.cursor = 'default';
      card.appendChild(sleuf);
    }
    const gekozen = opts.find(o => deckSel.evos[stap] === o);
    if (gekozen) walk(gekozen, diep + 1);
  };
  walk(startKey, 0);
}

const ARENA_META = {
  stadion: 'arena.stadion', vuur: 'arena.vuur', kristal: 'arena.kristal', woud: 'arena.woud',
  grot: 'arena.grot', ijs: 'arena.ijs', vulkaan: 'arena.vulkaan', nacht: 'arena.nacht',
};
const ARENA_LIST = Object.keys(ARENA_META);

function renderArenaPicks() {
  const host = document.getElementById('deck-arenas');
  if (!host) return;
  const cur = S('arena');
  host.innerHTML = ARENA_LIST.map(k =>
    \`<button type="button" class="arena-pick\${k === cur ? ' on' : ''}" data-arena="\${k}">\${t(ARENA_META[k])}</button>\`
  ).join('');
  host.querySelectorAll('.arena-pick').forEach(btn => {
    btn.addEventListener('click', () => {
      setSetting('arena', btn.getAttribute('data-arena'));
      sfx('select');
      renderArenaPicks();
    });
  });
}

function renderDeckSelect() {
  const title = document.querySelector('#deck-overlay .deck-title');
  if (currentMode === 'hotseat') title.textContent = deckStage === 'p1' ? t('deck.p1') : t('deck.p2hot');
  else title.textContent = t('deck.title');
  document.getElementById('btn-deck-start').textContent = (currentMode === 'hotseat' && deckStage === 'p1') ? t('deck.next') : t('deck.start');
  document.getElementById('deck-credits').textContent = \`◈ \${profile.credits} CREDITS\`;
  renderArenaPicks();
  renderDeckSlots();
  const ug = document.getElementById('deck-units'); ug.innerHTML = '';
  const ownedKeys = Object.keys(UNIT_DEFS).filter(k => profile.owned[k]);
  for (const key of ownedKeys) {
    const def = UNIT_DEFS[key];
    const lvl = profile.owned[key] || 0; const rar = RARITY[key];
    const c = document.createElement('div');
    if (!isBasisvorm(key)) {
      const voor = voorloperVan(key);
      c.className = 'deck-card evo-only';
      c.innerHTML = \`<span class="rar rar-\${rar}">\${rar}</span>\${unitVisual(key, 'p1', 38)}<div class="name">\${unitName(key)}</div><div class="fac">\${facName(def.fac)} · \${def.mp} MP</div><div class="evo-only-note">\${isEn() ? 'evolves from' : 'evolutie van'} \${unitName(voor)}</div>\`;
      c.addEventListener('click', () => { sfx('denied'); toast(isEn() ? \`\${unitName(key)} isn’t played directly — attach it under \${unitName(voor)} and evolve in battle\` : \`\${unitName(key)} zet je niet rechtstreeks in — hang hem onder \${unitName(voor)} en evolueer tijdens het potje\`); });
    } else {
      const gekozen = deckSel.units.includes(key);
      const opts = evolutieOpties(key);
      c.className = 'deck-card' + (gekozen ? ' selected' : '') + (gekozen && deckSel.evos[key] ? ' evo-klaar' : '');
      c.innerHTML = \`<span class="rar rar-\${rar}">\${rar}</span>\${unitVisual(key, 'p1', 38)}<div class="name">\${unitName(key)}</div><div class="fac">\${facName(def.fac)} · \${def.mp} MP</div><div class="lvl">L\${lvl}</div>\`;
      c.addEventListener('click', () => {
        const i = deckSel.units.indexOf(key);
        if (i >= 0) {
          deckSel.units.splice(i, 1);
          for (const k of evolutieKeten(key)) delete deckSel.evos[k];
        }
        else if (deckSel.units.length < 6) deckSel.units.push(key);
        else toast(tr('Max 6 units', 'Max 6 figures'));
        renderDeckSelect();
      });
      if (gekozen && opts.length) hangEvoSleuven(c, key);
    }
    ug.appendChild(c);
  }
  if (!ownedKeys.length) {
    ug.innerHTML = \`<div class="empty-hint">\${t('empty.shop')}</div>\`;
  }
  const pg = document.getElementById('deck-plates'); pg.innerHTML = '';
  for (const [key, p] of Object.entries(PLATES)) {
    const c = document.createElement('div'); c.className = 'deck-card' + (deckSel.plates.includes(key) ? ' selected' : '');
    c.innerHTML = \`<span class="rar" style="color:var(--gold)">\${p.cost}</span><div style="display:flex;justify-content:center;margin-bottom:2px;">\${plateIcon(key, 26)}</div><div class="name">\${plateName(key)}</div><div class="fac">\${plateDesc(key)}</div>\`;
    c.addEventListener('click', () => {
      const i = deckSel.plates.indexOf(key);
      if (i >= 0) { deckSel.plates.splice(i, 1); }
      else if (plateCost(deckSel.plates) + p.cost <= PLATE_BUDGET) { deckSel.plates.push(key); }
      else toast(tr(\`Geen ruimte meer — je mag voor \${PLATE_BUDGET} punten aan kaarten meenemen\`, \`No room left — you may bring plates worth \${PLATE_BUDGET} points\`));
      renderDeckSelect();
    });
    pg.appendChild(c);
  }
  document.getElementById('deck-count-units').textContent = \`\${t('deck.units')}: \${deckSel.units.length} / 6 (\${t('chip.collection').toLowerCase()}: \${Object.keys(profile.owned).length}/\${DEX_COUNT})\`;
  document.getElementById('deck-count-plates').textContent = \`\${t('deck.plates')}: \${plateCost(deckSel.plates)} / \${PLATE_BUDGET} (\${deckSel.plates.length})\`;
  document.getElementById('btn-deck-start').disabled = !(deckSel.units.length === 6 && deckSel.plates.length > 0);
  renderDeckLineup();
}

function renderDeckLineup() {
  const host = document.getElementById('deck-lineup');
  if (!host) return;
  host.innerHTML = '';
  for (let i = 0; i < 6; i++) {
    const key = deckSel.units[i];
    const pad = document.createElement('div');
    pad.className = 'lineup-pad' + (key ? ' filled' : '');
    pad.innerHTML = key ? unitVisual(key, currentMode === 'hotseat' && deckStage === 'p2' ? 'p2' : 'p1', 54) : '';
    if (key) {
      pad.title = unitName(key);
      pad.addEventListener('click', () => {
        const ix = deckSel.units.indexOf(key);
        if (ix >= 0) {
          deckSel.units.splice(ix, 1);
          for (const k of evolutieKeten(key)) delete deckSel.evos[k];
          renderDeckSelect();
        }
      });
    }
    host.appendChild(pad);
  }
}

// Tegenstander-decks per moeilijkheidsgraad (sessie 24). Voorheen kreeg de AI
// zes willekeurige units uit de hele roster op level 1 — vaak een onsamenhangend
// team. Nu krijgt hij een écht deck: op 'Licht' vooral commons, op 'Zwaar' een
// factie-samenhangend team met rares op een hoger level.
// Sinds sessie 40 zet ook de AI alleen BASISVORMEN op; z'n zwaardere figuren
// verdient hij door te evolueren, net als jij. 'rares' bepaalt daarom niet meer
// wie er in het team staat maar hoe diep z'n evolutieketens hangen.
const AI_DECKS = {
  makkelijk: { ketens: 0, level: 1 },   // geen evoluties: blijft licht
  normaal:   { ketens: 1, level: 3 },   // één stap: common -> uncommon
  moeilijk:  { ketens: 2, level: 4 },   // hele keten: tot en met de rare
};
function aiDeck() {
  const d = AI_DECKS[S('difficulty')] || AI_DECKS.normaal;
  const diff = S('difficulty');
  const bases = Object.keys(UNIT_DEFS).filter(k => isBasisvorm(k) && !UNIT_DEFS[k].legend);
  const byRar = r => bases.filter(k => RARITY[k] === r);
  let pool = bases;
  if (diff === 'makkelijk') pool = [...byRar('C'), ...byRar('C'), ...byRar('U')];
  else if (diff === 'moeilijk') pool = [...byRar('U'), ...byRar('R'), ...bases];
  const uniq = [...new Set(pool.length ? pool : bases)];
  const units = randomPick(uniq, Math.min(6, uniq.length));
  const supportive = ['fullheal','respin','xdefend','scoopup'];
  const aggressive = ['xattack','xhex','hurdle','cape','trueaim','dazzle'];
  const plates = diff === 'makkelijk'
    ? randomPick(supportive, 3)
    : randomPick([...aggressive, ...supportive], 3);
  // Evoluties aanhangen, zo diep als het niveau toestaat. Op Licht helemaal
  // niet — anders wordt hij halverwege ineens veel sterker en is 'licht' niet
  // meer licht. Op Zwaar hangt de hele keten eronder, tot en met de rare.
  const evos = {};
  for (const k of units) {
    let stap = k;
    for (let i = 0; i < d.ketens; i++) {
      const e = evolutieVan(stap); if (!e) break;
      evos[stap] = e; stap = e;
    }
  }
  return { units, plates, evos, level: d.level };
}

// Sintels één keer aanmaken; ze leven in de HTML-laag en overleven het
// opnieuw opbouwen van de bord-SVG.
// Sintels in het menu, dezelfde laag als in de arena maar wat rustiger.
function buildHomeFx() {
  const box = document.getElementById('home-fx');
  if (!box || box.childElementCount || animOff()) return;
  for (let i = 0; i < 16; i++) {
    const e = document.createElement('i');
    e.style.left = (2 + Math.random() * 96) + '%';
    e.style.bottom = (-6 + Math.random() * 26) + '%';
    e.style.animationDuration = (9 + Math.random() * 9).toFixed(1) + 's';
    e.style.animationDelay = (-Math.random() * 16).toFixed(1) + 's';
    e.style.opacity = (0.3 + Math.random() * 0.6).toFixed(2);
    const sc = (0.6 + Math.random() * 1.4).toFixed(2);
    e.style.width = e.style.height = (3 * sc).toFixed(1) + 'px';
    box.appendChild(e);
  }
}

function buildArenaFx() {
  const box = document.getElementById('arena-fx');
  if (!box || box.childElementCount || animOff()) return;
  for (let i = 0; i < 14; i++) {
    const e = document.createElement('i');
    e.style.left = (4 + Math.random() * 92) + '%';
    e.style.bottom = (-8 + Math.random() * 40) + '%';
    e.style.animationDuration = (7 + Math.random() * 7).toFixed(1) + 's';
    e.style.animationDelay = (-Math.random() * 12).toFixed(1) + 's';
    e.style.opacity = (0.4 + Math.random() * 0.6).toFixed(2);
    const sc = (0.6 + Math.random() * 1.3).toFixed(2);
    e.style.width = e.style.height = (3 * sc).toFixed(1) + 'px';
    box.appendChild(e);
  }
}

function startGame() {
  state = initialState(); let id = 0;
  // evoKey = de evolutie die je onder dit figuur hebt gehangen. Staat er niets,
  // dan kan hij niet evolueren — precies zoals in Duel.
  const mk = (defKey, owner, lvl, evoMap) => {
    const uid = \`u\${++id}\`;
    // evoMap is de HELE keten die onder dit figuur hangt, niet één stap. Zo kan
    // Spruiton in hetzelfde potje eerst Rankhorn en daarna Loofra worden.
    const map = evoMap || {};
    const u = { uid, defKey, owner, node:null, status:[], fx:{}, level:1,
                evoMap: map, evoKey: map[defKey] || null, evolved:false,
                slots: JSON.parse(JSON.stringify(UNIT_DEFS[defKey].slots)) };
    if (lvl && lvl > 1) { for (let i = 1; i < lvl; i++) levelSlotBoost(u); u.level = lvl; }
    state.units[uid] = u; state.bench[owner].push(uid);
  };
  const p1Deck = deckP1 || deckSel;   // hotseat: deckP1 geparkeerd, deckSel = P2-keuze
  const p1Evos = p1Deck.evos || {};
  for (const k of p1Deck.units) mk(k, 'p1', profile.owned[k] || 1, p1Evos);
  if (currentMode === 'hotseat' && deckP1) {
    const p2Evos = deckSel.evos || {};
    for (const k of deckSel.units) mk(k, 'p2', profile.owned[k] || 1, p2Evos);
    state.plates.p2 = [...deckSel.plates];
  } else {
    const foe = aiDeck();
    const foeEvos = foe.evos || {};
    for (const k of foe.units) mk(k, 'p2', foe.level, foeEvos);
    state.plates.p2 = foe.plates;
  }
  state.plates.p1 = [...p1Deck.plates];
  playVsIntro();
}

function playVsIntro() {
  const ov = document.getElementById('vs-overlay');
  const p1 = document.getElementById('vs-p1-roster');
  const p2 = document.getElementById('vs-p2-roster');
  const n1 = document.getElementById('vs-p1-name');
  const n2 = document.getElementById('vs-p2-name');
  if (n1) n1.textContent = t('hud.you');
  if (n2) n2.textContent = state.mode === 'solo' ? 'AI' : t('hud.p2');
  const figs = (owner) => Object.values(state.units)
    .filter(u => u.owner === owner)
    .map(u => unitVisual(u.defKey, owner, 78)).join('');
  if (p1) p1.innerHTML = figs('p1');
  if (p2) p2.innerHTML = figs('p2');
  if (!ov || animOff()) { document.getElementById('deck-overlay').classList.remove('active'); beginMatchView(); return; }
  ov.classList.add('active');
  document.getElementById('deck-overlay').classList.remove('active');
  sfx('turn');
  Audio_.playSting('vs');
  Audio_.setTrack('battle');
  setTimeout(() => { ov.classList.remove('active'); beginMatchView(); }, 1700);
}

function beginMatchView() {
  showScreen('game');
  const cEl = document.getElementById('turn-clock');
  if (cEl) { cEl.textContent = state.clock ? fmtClock(state.clock.p1) : '—'; cEl.style.color = ''; }
  paintClocks();
  startClock();
  buildArenaFx();
  renderAll();
  showTurnSplash();
}

function showTurnSplash() {
  const box = document.getElementById('turn-splash');
  const txt = document.getElementById('turn-splash-txt');
  if (!box || !txt || animOff()) return;
  txt.textContent = state.turn === 'p1' ? t('splash.yours') : (state.mode === 'solo' ? t('splash.foe') : t('splash.p2'));
  box.className = 'turn-splash show ' + state.turn;
  box.setAttribute('aria-hidden', 'false');
  setTimeout(() => { box.classList.remove('show'); box.setAttribute('aria-hidden', 'true'); }, 1200);
}

// Reden-tekst bij het einde van een potje. Vroeger gaf elke aanroepplek z'n
// eigen zin mee, wat rare combinaties opleverde ("VERSLAGEN — DOEL BEREIKT!"
// als de AI JOUW doel innam). Nu geven de aanroepplekken alleen een CODE en
// formuleert deze functie het vanuit de speler die kijkt.
function endReasonText(winner, kind) {
  const solo = state.mode === 'solo';
  const jij = winner === 'p1';
  if (kind === 'goal') {
    if (!solo) return tr(\`Speler \${jij ? 1 : 2} bereikte het doel van de tegenstander\`, \`Player \${jij ? 1 : 2} reached the opponent’s goal\`);
    return jij ? tr('Je figuur bereikte hun doel!', 'Your figure reached their goal!') : tr('De tegenstander bereikte jouw doel', 'The opponent reached your goal');
  }
  if (kind === 'lockout') {
    if (!solo) return tr(\`Speler \${jij ? 2 : 1} kon geen zet meer doen\`, \`Player \${jij ? 2 : 1} could not make a move\`);
    return jij ? tr('De tegenstander kon geen zet meer doen', 'The opponent could not make a move') : tr('Je kon geen zet meer doen', 'You could not make a move');
  }
  if (kind === 'time') {
    if (!solo) return tr(\`De bedenktijd van speler \${jij ? 2 : 1} is op\`, \`Player \${jij ? 2 : 1} ran out of time\`);
    return jij ? tr('De bedenktijd van de tegenstander is op', 'The opponent ran out of time') : tr('Je bedenktijd is op', 'You ran out of time');
  }
  return kind;
}

function endMatch(winner, kind) {
  if (state.over) return;   // dubbele triggers (klok + zet) afvangen
  const msg = endReasonText(winner, kind);
  state.over = true; stopClock(); clearSpinTicks();
  let gain = 0;
  if (state.mode === 'solo') {
    gain = winner === 'p1' ? WIN_CREDITS : LOSS_CREDITS;
    profile.credits += gain;
    if (winner === 'p1') profile.stats.wins++; else profile.stats.losses++;
    saveProfile();
  }
  const won = winner === 'p1';
  // Het doel bereiken is HET moment: laat het doel openbarsten voor het
  // eindscherm eroverheen komt.
  if (kind === 'goal') {
    const doel = Object.values(NODES).find(n => n.type === 'goal' && n.owner !== winner);
    if (doel) queueFX(doel.x, doel.y, 'goal:' + winner);
  }
  document.getElementById('result-title').textContent = state.mode === 'solo' ? (won ? t('result.win') : t('result.lose')) : (won ? t('result.p1win') : t('result.p2win'));
  document.getElementById('result-title').className = 'result-title ' + (state.mode !== 'solo' || won ? 'win' : 'lose');
  document.getElementById('result-reason').textContent = msg;
  document.getElementById('result-reward').textContent = state.mode === 'solo' ? \`+\${gain} credits\` : '';
  const roster = document.getElementById('result-roster');
  if (roster) {
    const figs = Object.values(state.units)
      .filter(u => u.owner === winner)
      .slice(0, 6)
      .map(u => unitVisual(u.defKey, winner, 64))
      .join('');
    roster.innerHTML = figs + '<div class="result-pad" aria-hidden="true"></div>';
  }
  renderAll();
  // Het eindscherm komt met een tel vertraging, zodat je de laatste zet nog
  // ziet. Ben je intussen naar het menu gelopen, dan hoort het er niet meer
  // overheen te ploffen.
  setTimeout(() => {
    if (!document.getElementById('screen-game').classList.contains('active')) return;
    sfx(state.mode !== 'solo' || won ? 'win' : 'lose');
    Audio_.playSting(state.mode !== 'solo' || won ? 'win' : 'lose');
    Audio_.stopLoop();
    document.getElementById('result-overlay').classList.add('active');
  }, kind === 'goal' && !animOff() ? 1700 : 900);
}

// ===== Collectie: bekijken + upgraden (met disk-preview) =====
function slotsAtLevel(defKey, lvl) {
  const u = { slots: JSON.parse(JSON.stringify(UNIT_DEFS[defKey].slots)) };
  for (let i = 1; i < lvl; i++) levelSlotBoost(u);
  return u.slots;
}

const FAC_VOLGORDE = ['Gras','Vuur','Water','Elektro','Normaal','Giftig','Vlieg','Bodem','Steen','Insect','IJs','Vecht','Psychisch','Geest','Draak'];
let collFilter = 'alle';
let storeFilter = 'alle';
let collOwnedOnly = false;
let storeOwnedOnly = false;

function facLijst() {
  const seen = new Set(Object.values(UNIT_DEFS).map(d => d.fac));
  return FAC_VOLGORDE.filter(f => seen.has(f));
}
function dexNum(def) {
  const n = def && def.num;
  return n ? '#' + String(n).padStart(3, '0') : '';
}
function renderTypeFilters(hostId, which) {
  const host = document.getElementById(hostId);
  if (!host) return;
  const cur = which === 'store' ? storeFilter : collFilter;
  const owned = which === 'store' ? storeOwnedOnly : collOwnedOnly;
  const chips = [{ id:'alle', label:t('fac.alle') }, ...facLijst().map(f => ({ id:f, label:facName(f) })), { id:'bezit', label:t('fac.bezit') }];
  host.innerHTML = chips.map(c => {
    const on = c.id === 'bezit' ? owned : cur === c.id;
    return \`<button type="button" class="type-chip\${on ? ' on' : ''}" data-id="\${c.id}">\${c.label}</button>\`;
  }).join('');
  host.querySelectorAll('.type-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      if (id === 'bezit') {
        if (which === 'store') storeOwnedOnly = !storeOwnedOnly;
        else collOwnedOnly = !collOwnedOnly;
      } else if (which === 'store') storeFilter = id;
      else collFilter = id;
      if (which === 'store') renderStore(); else renderCollection();
    });
  });
}
function unitMatchesFilter(key, fac, ownedOnly, facFilter) {
  if (ownedOnly && !profile.owned[key]) return false;
  if (facFilter && facFilter !== 'alle' && fac !== facFilter) return false;
  return true;
}

function renderCollection() {
  document.getElementById('coll-credits').textContent = \`◈ \${profile.credits}\`;
  renderTypeFilters('coll-filters', 'coll');
  const g = document.getElementById('coll-grid'); g.innerHTML = '';
  for (const [key, def] of Object.entries(UNIT_DEFS)) {
    if (!unitMatchesFilter(key, def.fac, collOwnedOnly, collFilter)) continue;
    const lvl = profile.owned[key] || 0; const rar = RARITY[key];
    const c = document.createElement('div');
    c.className = 'coll-card' + (lvl ? '' : ' locked');
    c.innerHTML = \`\${lvl ? \`<span class="lvl-badge">L\${lvl}</span>\` : ''}<span class="rar-chip rar-\${rar}">\${rar}</span>
      <div>\${unitVisual(key, 'p1', 52)}</div>
      <div class="name">\${unitName(key)}</div>
      <div class="sub">\${facName(def.fac)} · \${def.mp} MP</div>
      <span class="dex-num">\${dexNum(def)}</span>
      \${lvl ? '' : \`<span class="price-chip">\${isEn() ? 'via Shop' : 'via Winkel'}</span>\`}\`;
    c.addEventListener('click', () => { if (lvl) openUnitDetail(key); else { renderStore(); showScreen('store'); } });
    g.appendChild(c);
  }
  if (!g.childElementCount) {
    g.innerHTML = \`<div class="empty-hint">\${t('empty.filter')}</div>\`;
  }
}

let detailKey = null;
function openUnitDetail(key) {
  detailKey = key;
  const def = UNIT_DEFS[key], lvl = profile.owned[key], rar = RARITY[key];
  document.getElementById('detail-art').innerHTML = unitVisual(key, 'p1', 128);
  document.getElementById('detail-name').textContent = unitName(key);
  document.getElementById('detail-sub').textContent = \`\${facName(def.fac)} · \${def.mp} MP · \${rar === 'C' ? 'Common' : rar === 'U' ? 'Uncommon' : 'Rare'} · Level \${lvl}\`;
  const slots = slotsAtLevel(key, lvl);
  renderDisk('disk-preview', slots, key);
  // Slot-samenvatting per kleur
  const sum = {};
  for (const s of slots) {
    const k = s.k === 'white' || s.k === 'gold' ? \`\${s.k}-\${s.v}\` : (s.k === 'purple' ? \`purple-\${s.effect}\` : s.k);
    sum[k] = (sum[k] || 0) + 1;
  }
  const NL = { red: t('miss'), blue: t('block') };
  const pills = Object.entries(sum).map(([k, n]) => {
    const [kind, val] = k.split('-');
    const label = kind === 'white' ? \`\${val} dmg\` : kind === 'gold' ? \`★ \${val} dmg\` : kind === 'purple' ? val : NL[kind];
    return \`<span class="slot-pill" style="color:\${TXT[kind]};background:\${COLORS[kind]}">\${n}× \${label}</span>\`;
  }).join('');
  const ab = UNIT_DEFS[key].ability;
  const abHtml = ab ? \`<div class="ability-line"><span class="ability-tag">✦ \${abilityName(ab)}</span> \${abilityDesc(ab)}</div>\` : \`<div class="ability-line" style="opacity:0.5">\${t('noAbility')}</div>\`;
  document.getElementById('detail-slots').innerHTML = pills + abHtml;
  // De evolutieketen van deze unit, zodat je ziet waar hij vandaan komt en waar
  // hij naartoe kan. Wat je nog niet bezit staat grijs.
  const lagen = ketenLagen(key);
  document.getElementById('detail-keten').innerHTML =
    '<div class="ek-kop">' + t('evo.chain') + '</div>' +
    lagen.map((laag, i) => {
      const stappen = laag.map(k => {
        const heb = !!profile.owned[k];
        const nu = k === key;
        return \`<div class="ek-stap\${nu ? ' nu' : ''}\${heb ? '' : ' mist'}">\${unitVisual(k, 'p1', 30)}<span>\${unitName(k)}</span></div>\`;
      }).join('');
      return (i ? '<div class="ek-pijl">›</div>' : '') + \`<div class="ek-rij">\${stappen}</div>\`;
    }).join('');
  const upBtn = document.getElementById('btn-detail-upgrade');
  if (lvl >= 4) { upBtn.textContent = t('maxLevel'); upBtn.disabled = true; document.getElementById('detail-note').textContent = tr('Deze unit is volledig opgewaardeerd.', 'This figure is fully upgraded.'); }
  else {
    upBtn.textContent = \`Upgrade ◈ \${UPGRADE_COST[lvl]}\`; upBtn.disabled = profile.credits < UPGRADE_COST[lvl];
    document.getElementById('detail-note').textContent = isBasisvorm(key)
      ? tr('Upgrade: sterkste aanval groeit met 8/96 van het wiel, evenveel Miss verdwijnt.', 'Upgrade: strongest attack grows by 8/96 of the wheel, the same amount of Miss disappears.')
      : tr(\`Upgrade: sterkste aanval groeit met 8/96 van het wiel. Dit level telt zodra \${unitName(voorloperVan(key))} in hem evolueert.\`, \`Upgrade: strongest attack grows by 8/96 of the wheel. This level applies once \${unitName(voorloperVan(key))} evolves into it.\`);
  }
  document.getElementById('detail-overlay').classList.add('active');
}

function doUpgrade() {
  const lvl = profile.owned[detailKey];
  if (!detailKey || lvl >= 4) return;
  const cost = UPGRADE_COST[lvl];
  if (profile.credits < cost) { toast(tr('Te weinig credits', 'Not enough credits')); return; }
  profile.credits -= cost; profile.owned[detailKey] = lvl + 1; saveProfile();
  toast(\`\${unitName(detailKey)} → Level \${lvl + 1}!\`);
  renderCollection(); openUnitDetail(detailKey); // detail ververst: disk groeit zichtbaar
}

// ===== Winkel: units kopen =====
function renderStore() {
  document.getElementById('store-credits').textContent = \`◈ \${profile.credits}\`;
  const bc = document.getElementById('booster-card');
  if (bc) {
    const allOwned = Object.keys(UNIT_DEFS).every(k => profile.owned[k]);
    document.getElementById('booster-price').textContent = \`◈ \${BOOSTER_COST}\`;
    bc.classList.toggle('broke', profile.credits < BOOSTER_COST);
    bc.querySelector('.bt-desc').textContent = allOwned ? t('booster.owned') : t('booster.desc');
  }
  renderTypeFilters('store-filters', 'store');
  const g = document.getElementById('store-grid'); g.innerHTML = '';
  const entries = Object.entries(UNIT_DEFS).sort(([a], [b]) => (profile.owned[a] ? 1 : 0) - (profile.owned[b] ? 1 : 0));
  for (const [key, def] of entries) {
    if (!unitMatchesFilter(key, def.fac, storeOwnedOnly, storeFilter)) continue;
    const owned = !!profile.owned[key]; const rar = RARITY[key]; const price = PRICE[rar];
    const c = document.createElement('div');
    c.className = 'coll-card' + (owned ? ' locked' : '');
    const voor = voorloperVan(key);
    const rol = voor
      ? \`<div class="sub evo-rol">\${isEn() ? 'evolves from' : 'evolutie van'} \${unitName(voor)}</div>\`
      : \`<div class="sub evo-rol basis">\${isEn() ? 'you field this one' : 'zet je zelf op'}</div>\`;
    c.innerHTML = \`<span class="rar-chip rar-\${rar}">\${rar}</span>
      <div>\${unitVisual(key, 'p1', 52)}</div>
      <div class="name">\${unitName(key)}</div>
      <div class="sub">\${facName(def.fac)} · \${def.mp} MP</div>
      \${rol}
      <span class="dex-num">\${dexNum(def)}</span>
      <span class="price-chip">\${owned ? (isEn() ? 'Owned' : 'In bezit') : \`\${isEn() ? 'BUY' : 'KOOP'} ◈ \${price}\`}</span>\`;
    if (!owned) c.addEventListener('click', () => {
      if (profile.credits < price) { toast(isEn() ? 'Not enough credits — win duels for more' : 'Te weinig credits — win duels voor meer'); return; }
      profile.credits -= price; profile.owned[key] = 1; saveProfile();
      toast(isEn() ? \`Bought \${unitName(key)}!\` : \`\${unitName(key)} gekocht!\`); renderStore();
    });
    g.appendChild(c);
  }
  if (!g.childElementCount) {
    g.innerHTML = \`<div class="empty-hint">\${t('empty.filter')}</div>\`;
  }
}

// ===== Boosterkist openen =====
function openBooster() {
  if (profile.credits < BOOSTER_COST) { sfx('denied'); toast(tr('Te weinig credits — win duels om te sparen', 'Not enough credits — win duels to save up')); return; }
  profile.credits -= BOOSTER_COST;
  const roll = rollBooster(Math.random(), Math.random(), profile.owned, RARITY);
  const def = UNIT_DEFS[roll.key];
  if (roll.duplicate) profile.credits += roll.refund; else profile.owned[roll.key] = 1;
  saveProfile();

  const ov = document.getElementById('booster-overlay');
  const chest = document.getElementById('booster-anim');
  const res = document.getElementById('booster-result');
  res.style.display = 'none'; chest.style.display = '';
  ov.classList.add('active');
  sfx('plate');
  const revealDelay = animOff() ? 0 : 1100;
  if (!animOff()) { chest.classList.remove('shake'); void chest.offsetWidth; chest.classList.add('shake'); }
  setTimeout(() => {
    chest.style.display = 'none'; res.style.display = '';
    // Stralenkrans in de kleur van de zeldzaamheid, dan pas het figuur erover
    const kleur = roll.duplicate ? '#94a3b8'
      : (roll.rarity === 'R' ? '#fbbf24' : roll.rarity === 'U' ? '#7dd3fc' : '#cbd5e1');
    const stralen = animOff() ? ''
      : \`<div id="booster-stralen" style="--bsk:\${kleur}">\` +
        Array.from({ length: 12 }, (_, i) => \`<i style="--a:\${i * 30}deg; animation-delay:\${i * 45}ms"></i>\`).join('') +
        '</div>';
    document.getElementById('booster-art').innerHTML = stralen + unitVisual(roll.key, 'p1', 84);
    document.getElementById('booster-name').textContent = unitName(roll.key);
    const rarLabel = roll.rarity === 'C' ? 'Common' : roll.rarity === 'U' ? 'Uncommon' : 'Rare';
    document.getElementById('booster-sub').textContent = \`\${facName(def.fac)} · \${def.mp} MP · \${rarLabel}\`;
    document.getElementById('booster-bonus').textContent = roll.duplicate
      ? tr(\`Had je al — +\${roll.refund} credits terug\`, \`Already owned — +\${roll.refund} credits back\`)
      : tr('Nieuw in je collectie!', 'New to your collection!');
    document.getElementById('booster-name').className = 'result-title ' + (roll.duplicate ? 'lose' : 'win');
    document.getElementById('btn-booster-again').textContent = tr(\`Nog een kist ◈ \${BOOSTER_COST}\`, \`Another chest ◈ \${BOOSTER_COST}\`);
    document.getElementById('btn-booster-again').disabled = profile.credits < BOOSTER_COST;
    sfx(roll.duplicate ? 'block' : (roll.rarity === 'R' ? 'win' : 'levelup'));
    if (!roll.duplicate) Audio_.buzz(roll.rarity === 'R' ? [40, 60, 90] : 35);
    renderStore(); renderHome();
  }, revealDelay);
}

// ===== Instellingen-scherm =====
// Bouwt zichzelf op uit een declaratieve lijst, zodat een instelling toevoegen
// één regel is. Elke wijziging slaat direct op (geen "opslaan"-knop nodig).
function setSetting(key, value) {
  profile.settings[key] = value;
  profile.settings = normalizeSettings(profile.settings);
  saveProfile();
  // Directe effecten van bepaalde instellingen
  if (key === 'sfxVolume') Audio_.setVolume(profile.settings.sfxVolume);
  if (key === 'musicVolume') Audio_.applyMusicGain();
  if (key === 'music') { if (profile.settings.music) Audio_.syncTrack(); else Audio_.stopMusic(); }
  if (key === 'arena') { const w = document.querySelector('.board-wrap'); if (w) w.setAttribute('data-arena', profile.settings.arena); }
  if (key === 'clockMinutes' && state && !state.over) toast(isEn() ? 'New clock time applies from the next duel' : 'Nieuwe kloktijd geldt vanaf het volgende duel');
  if (key === 'lang') {
    applyLang();
    renderHome();
    if (document.getElementById('screen-settings')?.classList.contains('active')) renderSettings();
    if (document.getElementById('screen-help')?.classList.contains('active')) renderHelp();
    if (document.getElementById('screen-collection')?.classList.contains('active')) renderCollection();
    if (document.getElementById('screen-store')?.classList.contains('active')) renderStore();
    if (document.getElementById('deck-overlay')?.classList.contains('active')) renderDeckSelect();
  }
}

function settingsUI() {
  const en = isEn();
  const arenaOpts = ARENA_LIST.map(k => [k, t(ARENA_META[k])]);
  return [
    { group: t('set.groupLang'), rows: [
      { key:'lang', kind:'seg', t: t('set.lang'), d: t('set.langD'),
        opts:[['nl','Nederlands'],['en','English']] },
    ]},
    { group: en ? 'Sound' : 'Geluid', rows: [
      { key:'sfx',       kind:'toggle', t: en ? 'Sound effects' : 'Geluidseffecten', d: en ? 'Disc spin, clashes, KO and menu taps' : 'Draaischijf, klappen, KO en menu-tikken' },
      { key:'sfxVolume', kind:'slider', t: en ? 'Effect volume' : 'Effectvolume', d: en ? 'Hits, KO, menu taps' : 'Klap, KO, menu-tikken' },
      { key:'music',     kind:'toggle', t: en ? 'Background music' : 'Achtergrondmuziek', d: en ? 'Gym fanfare in the lobby, a duel march on the board' : 'Gym-fanfare in de lobby, een duelmars op het bord' },
      { key:'musicVolume', kind:'slider', t: en ? 'Music volume' : 'Muziekvolume', d: en ? 'Lobby and duel loops' : 'Lobby- en duelloops' },
      { key:'haptics',   kind:'toggle', t: en ? 'Haptics' : 'Trillen',         d: en ? 'Short buzz on clashes and KO (phone)' : 'Korte trilling bij klappen en KO (telefoon)' },
    ]},
    { group: en ? 'Display & pace' : 'Weergave & tempo', rows: [
      { key:'arena', kind:'seg', t: en ? 'Arena' : 'Arena', d: en ? 'The table you duel on — same board, different gym' : 'De tafel waarop je duelleert — zelfde bord, andere gym',
        opts: arenaOpts },
      { key:'animSpeed', kind:'seg', t: en ? 'Animation speed' : 'Animatiesnelheid', d: en ? 'Faster plays snappier; off skips animations' : 'Sneller speelt vlotter; uit slaat animaties over',
        opts: en ? [['normaal','Normal'],['snel','Fast'],['uit','Off']] : [['normaal','Normaal'],['snel','Snel'],['uit','Uit']] },
      { key:'showHints', kind:'toggle', t: en ? 'Show hints' : 'Hints tonen', d: en ? 'Short tips during your turn' : 'Korte tips tijdens je beurt (bv. waarom een zet niet mag)' },
      { key:'autoEndTurn', kind:'toggle', t: en ? 'Auto end turn' : 'Beurt vanzelf beëindigen', d: en ? 'When your move lands, the turn passes. Play plates before you move.' : 'Zodra je zet erop zit gaat de beurt door. Speel je kaart dus vóór je zet.' },
    ]},
    { group: en ? 'Duel rules' : 'Duel-regels', rows: [
      { key:'clockMinutes', kind:'seg', t: en ? 'Think time' : 'Bedenktijd', d: en ? 'Time per player; at 0 you lose (default 5 min)' : 'Tijd per speler; op = verloren (standaard 5 min)',
        opts: en ? [[3,'3 min'],[5,'5 min'],[10,'10 min'],[0,'Off']] : [[3,'3 min'],[5,'5 min'],[10,'10 min'],[0,'Uit']] },
      { key:'difficulty', kind:'seg', t: en ? 'Difficulty' : 'Moeilijkheid', d: en ? 'How hard the AI defends. Light is generous; Normal and up you have to fight for the goal.' : 'Hoe scherp het AI-systeem verdedigt. Op Licht loop je er meestal zo doorheen; vanaf Normaal moet je je een weg naar het doel vechten.',
        opts: en ? [['makkelijk','Light'],['normaal','Normal'],['moeilijk','Hard']] : [['makkelijk','Licht'],['normaal','Normaal'],['moeilijk','Zwaar']] },
      { key:'confirmExit', kind:'toggle', t: en ? 'Confirm on leave' : 'Vragen bij verlaten', d: en ? 'Ask before you abandon a running duel' : 'Bevestiging voordat je een lopend duel afbreekt' },
    ]},
  ];
}

function renderSettings() {
  const body = document.getElementById('settings-body'); body.innerHTML = '';
  for (const grp of settingsUI()) {
    const box = document.createElement('div'); box.className = 'set-group';
    const title = document.createElement('div'); title.className = 'set-group-title'; title.textContent = grp.group.toUpperCase();
    box.appendChild(title);
    for (const row of grp.rows) {
      const r = document.createElement('div'); r.className = 'set-row';
      r.innerHTML = \`<div class="set-label"><div class="t">\${row.t}</div><div class="d">\${row.d}</div></div>\`;
      if (row.kind === 'toggle') {
        const tg = document.createElement('div');
        tg.className = 'toggle' + (S(row.key) ? ' on' : '');
        tg.setAttribute('role', 'switch'); tg.setAttribute('aria-checked', String(!!S(row.key)));
        tg.dataset.setting = row.key;
        tg.addEventListener('click', () => {
          const nv = !S(row.key); setSetting(row.key, nv);
          tg.classList.toggle('on', nv); tg.setAttribute('aria-checked', String(nv));
          sfx(nv ? 'select' : 'click');
        });
        r.appendChild(tg);
      } else if (row.kind === 'seg') {
        const seg = document.createElement('div'); seg.className = 'seg'; seg.dataset.setting = row.key;
        for (const [val, label] of row.opts) {
          const b = document.createElement('button');
          b.textContent = label; b.className = S(row.key) === val ? 'on' : '';
          b.addEventListener('click', () => {
            setSetting(row.key, val); sfx('select');
            for (const sib of seg.children) sib.className = '';
            b.className = 'on';
          });
          seg.appendChild(b);
        }
        r.appendChild(seg);
      } else if (row.kind === 'slider') {
        const wrap = document.createElement('div'); wrap.className = 'set-slider';
        const inp = document.createElement('input');
        inp.type = 'range'; inp.min = '0'; inp.max = '100'; inp.step = '5';
        inp.value = String(Math.round(S(row.key) * 100)); inp.dataset.setting = row.key;
        const val = document.createElement('span'); val.className = 'val'; val.textContent = inp.value + '%';
        inp.addEventListener('input', () => { val.textContent = inp.value + '%'; setSetting(row.key, Number(inp.value) / 100); });
        inp.addEventListener('change', () => sfx('click'));
        wrap.appendChild(inp); wrap.appendChild(val);
        r.appendChild(wrap);
      }
      box.appendChild(r);
    }
    body.appendChild(box);
  }

  // Profiel-blok: voortgang en de reset-knop
  const pbox = document.createElement('div'); pbox.className = 'set-group';
  pbox.innerHTML = \`<div class="set-group-title">\${isEn() ? 'PROFILE' : 'PROFIEL'}</div>
    <div class="set-row"><div class="set-label"><div class="t">\${isEn() ? 'Your progress' : 'Jouw voortgang'}</div>
      <div class="d">◈ \${profile.credits} credits · \${Object.keys(profile.owned).length}/\${DEX_COUNT} · \${profile.stats.wins} \${isEn() ? 'won' : 'gewonnen'}, \${profile.stats.losses} \${isEn() ? 'lost' : 'verloren'}</div></div></div>\`;
  const rr = document.createElement('div'); rr.className = 'set-row';
  rr.innerHTML = \`<div class="set-label"><div class="t set-danger">\${isEn() ? 'Erase everything' : 'Alles wissen'}</div><div class="d">\${isEn() ? 'Deletes your credits, figures and stats. This cannot be undone.' : 'Verwijdert je credits, units en statistieken. Dit kan niet ongedaan worden gemaakt.'}</div></div>\`;
  const rb = document.createElement('button'); rb.className = 'btn set-danger'; rb.style.flex = '0 0 auto'; rb.textContent = isEn() ? 'Erase' : 'Wissen';
  rb.addEventListener('click', () => {
    if (!confirm(isEn() ? 'Are you sure? All credits, figures and stats will be wiped.' : 'Weet je het zeker? Al je credits, units en statistieken worden gewist.')) return;
    if (!confirm(isEn() ? 'Really sure? This cannot be undone.' : 'Echt zeker? Dit kan niet ongedaan worden gemaakt.')) return;
    const keep = profile.settings;
    profile = freshProfile(); profile.settings = keep; saveProfile();
    renderSettings(); renderHome(); toast(isEn() ? 'Profile wiped — you start over' : 'Profiel gewist — je begint opnieuw');
  });
  rr.appendChild(rb); pbox.appendChild(rr);
  body.appendChild(pbox);

  const about = document.createElement('div'); about.className = 'set-about';
  about.innerHTML = isEn()
    ? \`Schijfduel<br>Tactical figure duel · 151 creatures<br>Original names and art\`
    : \`Schijfduel<br>Tactisch figuren-duel · 151 wezens<br>Eigen namen en art\`;
  body.appendChild(about);
}

// ===== "Hoe speel je" — de regels zoals ze ECHT in deze code zitten =====
const HELP_NL = [
  { h:'Het doel', p:[
    'Je wint door met één van je figuren op het <b>doelpunt van je tegenstander</b> te eindigen — de gloeiende cirkel aan de overkant.',
    'Je wint ook als je tegenstander <b>niets meer kan doen</b>, of als zijn <b>bedenktijd</b> op is.',
    'Je wint <b>niet</b> door alle vijanden te verslaan. Verslagen figuren komen namelijk gewoon terug.' ]},
  { h:'Je beurt: één actie', p:[
    'Per beurt doe je <b>precies één ding</b>: een figuur verplaatsen, een figuur inzetten vanaf de zijkant, of met een figuur aanvallen.',
    'Een <b>kaart</b> (rechtsonder op tafel) kost géén actie — je mag er één per beurt spelen. Speel hem <b>vóór</b> je zet, want zodra je zet erop zit gaat de beurt vanzelf door.',
    'De kaarten van je tegenstander liggen linksboven met de rug omhoog: je ziet wel hoevéél hij er heeft, niet welke.',
    'De allereerste zet van het potje kost <b>1 MP extra</b>, zodat wie begint geen gratis voorsprong krijgt.' ]},
  { h:'Je moet elke beurt iets doen', p:[
    'Passen bestaat niet: elke beurt verplaats je één figuur, of je zet er één in. Kun je helemaal <b>niets</b> meer, dan verlies je.',
    'Dat kan lelijk uitpakken: staat je laatste figuur op je eigen doel en kun je niemand meer inzetten, dan móét je er toch vanaf stappen. Dat is geen bug — zo werkt het in Duel ook.',
    'De tegenstander kan dat afdwingen door <b>al je startpunten te bezetten</b>. De kaart <b>Tegenaanval</b> is daar precies voor: zolang dat zo is krijgen je figuren +1 MP om eruit te breken.' ]},
  { h:'Bewegen en inzetten', p:[
    'Elk figuur heeft <b>MP</b> (het gouden getal): zoveel punten mag hij per beurt afleggen.',
    'Inzetten doe je via je eigen <b>entry-punten</b> in de hoeken. Dat kost 1 MP; met je resterende MP mag je meteen doorlopen naar een leeg punt.',
    'Je kunt niet op een bezet punt landen. Sommige figuren hebben een ability waarmee ze er wél <b>doorheen</b> lopen.' ]},
  { h:'Gevechten: de draaischijf', p:[
    'Loop je op een vijand af, dan draaien <b>beide schijven</b>. Waar de pijl landt, bepaalt wat er gebeurt.',
    'De grootte van een vak is precies de kans erop — een groot wit vak betekent dus vaak raak.',
    'Wil je een schijf van tevoren zien? <b>Houd een figuur even vast</b> op het bord — ook die van je tegenstander. Je ziet dan de schijf zoals hij nú draait, inclusief het effect van een status.' ]},
  { h:'Wat je ziet tijdens een gevecht', p:[
    'Zodra beide wielen stilstaan <b>licht het vak op dat telt</b>. Meestal is dat het vak onder de pijl — maar met <b>Verwarring</b> of <b>Scherpschutter</b> schuift het geldende vak een plek op, en dan licht het vak op dat écht meedoet.',
    'Daarna vliegt er iets van de aanvaller naar de verdediger: een vonk, een golf, een vlam, bliksem — wat er vliegt hangt af van de <b>naam</b> van de aanval die je draaide.',
    'Blokkeer je met blauw, dan vangt een <b>schild</b> de klap op. Draai je rood, dan blijft er <b>MIS</b> boven je hoofd hangen. Wie het niet overleeft licht wit op en valt om.',
    'Na afloop slaat de klap ook nog in <b>op het bord</b>, op het punt waar hij landt. Vuur, hamer en bliksem laten een krater achter die langzaam vervaagt.',
    'Hoeft dit allemaal niet? Zet de <b>animatiesnelheid</b> in de instellingen op snel of uit.' ]},
  { h:'De vijf kleuren', swatches:[
    ['#e5e7eb','<b>Wit — aanval.</b> Het getal is de kracht. Hoogste getal wint; gelijk = niemand valt.'],
    ['#fbbf24','<b>Goud — doorbraak.</b> Slaat dwars door paars, blauw én mis heen. Alleen een sterkere aanval stopt hem.'],
    ['#3b82f6','<b>Blauw — verdediging.</b> Blokt wit en paars. Verliest wél van goud.'],
    ['#8b5cf6','<b>Paars — vloek.</b> Geen schade, maar een status. Twee paarse tegen elkaar: de meeste sterren wint.'],
    ['#ef4444','<b>Rood — mis.</b> Je doet niets. De ander kan je wel raken.'] ]},
  { h:'Statussen', p:[
    'Een figuur kan <b>één status tegelijk</b> hebben; een nieuwe vervangt de oude.',
    '<b>Gif</b> verzwakt je aanvallen, <b>zwaar gif</b> nog meer — en aan het begin van jouw beurt is een vergiftigd figuur op het veld <b>KO</b>. <b>Brand</b> maakt aanvallen van 10 of minder een mis en haalt 10 van je schade af. <b>Verlamming</b> maakt je kleinste aanval een mis.',
    '<b>Verwarring</b> laat de schijf één vakje verspringen. <b>Slaap</b> houdt je stil tot een bondgenoot naast je staat. <b>Bevroren</b> laat je wel lopen maar niet aanvallen, en gaat na één gevecht vanzelf weg.',
    'Genezen doe je met de kaart <b>Genezing</b>, via het P.C., of met een ability.',
    '<b>Wacht</b> is geen gewone status: het figuur blijft op het bord maar mag de volgende beurt niet lopen of vechten. Wacht gaat vanzelf weg ná die overgeslagen beurt.' ]},
  { h:'Omsingelen', p:[
    'Een figuur gaat KO als de <b>tegenstander alle punten bezet</b> waar hij heen zou kunnen. Zonder gevecht.',
    'Ingesloten raken door je <b>eigen</b> figuren is geen KO — dan kun je alleen niet meer lopen.' ]},
  { h:'P.C.', p:[
    'Verslagen figuren gaan naar het <b>P.C.</b> (herstelcentrum). Aan het begin van je volgende beurt komen ze terug op de zijlijn, statussen gewist, level behouden.',
    'Met de kaart <b>Herrijzenis</b> haal je iemand meteen uit het P.C., ook midden in een beurt.' ]},
  { h:'Evolueren', p:[
    'Elk figuur hoort bij een <b>evolutieketen</b> — meestal common via uncommon naar rare. Sommige, zoals Pluimstaart, splitsen in drie richtingen: je hangt één tak eronder.',
    'Je stelt <b>alleen basisvormen</b> op. Een geëvolueerde vorm koop je niet om hem neer te zetten, maar om hem te kúnnen worden — je verdient hem tijdens het potje.',
    'Om te kunnen evolueren moet je <b>allebei de figuren bezitten</b>. Zet de basisvorm in je team en hang z\\'n evolutie eronder in de sleuf die dan verschijnt. Hangt de derde vorm er óók onder, dan kan hij in hetzelfde potje <b>twee keer</b> evolueren. Een figuur dat klaar is krijgt een <b>blauw stipje</b>.',
    'Tijdens het potje evolueert hij zodra hij een <b>gevecht wint</b> — of hij de ander nou verslaat of van z\\'n plek verdringt. Je mag <b>weigeren</b>: dan groeit z\\'n huidige schijf gewoon een level.',
    'Wie mid-potje evolueert krijgt een bonus die je NIET krijgt als je met de eindvorm begint: <b>+10 op elk wit en goud vak</b> en <b>+1 ★ op elk paars vak</b>. Klein beginnen en doorgroeien loont dus.' ]},
  { h:'Sterker worden', p:[
    'Versla je een vijand, dan gaat je figuur <b>een level omhoog</b> (tot level 4): zijn sterkste aanval groeit met 8/96 van het wiel en er verdwijnt evenveel mis.',
    'In de <b>Collectie</b> kun je units met credits permanent upgraden. Die levels blijven voor altijd.' ]},
  { h:'Je kaarten', p:[
    'Elke kaart heeft een <b>kostprijs</b> van 1, 2 of 3 punten. Je mag voor maximaal <b>8 punten</b> aan kaarten meenemen — dus veel goedkope of een paar dure.',
    'Er zijn vijf soorten: <b>herstel</b> (statussen wissen, iemand uit het P.C. halen), <b>draaien</b> (jij of je tegenstander moet opnieuw draaien), <b>gevecht</b> (meer schade, of juist niet verslagen kunnen worden), <b>beweging</b> (terugroepen, wisselen, springen) en <b>bijzonder</b>.',
    '<b>Verworp</b> zet iemand van de zijlijn neer, één vak naast je entry. <b>Doelwacht</b> teleporteert een eigen figuur naar je vrije doel. Beide beëindigen je beurt.',
    'Elke kaart werkt <b>één keer per potje</b>. Met <b>Hergebruik</b> maak je al je gebruikte kaarten weer bruikbaar.' ]},
  { h:'Abilities', p:[
    'Sommige figuren hebben een <b>ability</b>: een eigen kracht die vanzelf werkt, bijvoorbeeld door units heen lopen, buren extra MP geven, of een vijand vergiftigen die met ze vecht.',
    'Je ziet de ability van elke unit in de <b>Collectie</b>, onder de schijf.' ]},
  { h:'De klok', p:[
    'Elke speler heeft <b>bedenktijd</b> (standaard 5 minuten, net als in Duel). Je klok loopt alleen tijdens je eigen beurt en staat stil tijdens gevechten.',
    'Is je tijd op, dan verlies je. Zo loopt een potje nooit eindeloos vast. Je kunt de kloktijd aanpassen bij <b>Instellingen</b>.' ]},
];

const HELP_EN = [
  { h:'The goal', p:[
    'You win by ending on your <b>opponent’s goal</b> — the glowing circle on their side.',
    'You also win if your opponent <b>cannot act</b>, or if their <b>think time</b> runs out.',
    'You do <b>not</b> win by knocking out every foe. Knocked-out figures come back.' ]},
  { h:'Your turn: one action', p:[
    'Each turn you do <b>exactly one thing</b>: move a figure, send one in from the side, or attack with a figure.',
    'A <b>plate</b> (bottom-right of the table) costs no action — you may play one per turn. Play it <b>before</b> you move, because as soon as your move lands the turn passes.',
    'Your opponent’s plates sit top-left face-down: you see how many, not which.',
    'The very first move of the match costs <b>1 extra MP</b>, so going first is not a free lead.' ]},
  { h:'You must act every turn', p:[
    'Passing is not allowed: every turn you move a figure, or you send one in. If you can do <b>nothing</b> at all, you lose.',
    'That can sting: if your last figure is on your own goal and you cannot send anyone in, you still have to step off. That is not a bug — the original disc duel works the same way.',
    'The opponent can force this by <b>occupying all your entry points</b>. The plate <b>Counter</b> exists for that: while that is true, your figures gain +1 MP to break out.' ]},
  { h:'Moving and sending in', p:[
    'Every figure has <b>MP</b> (the gold number): how many points it may travel this turn.',
    'You send in through your own <b>entry points</b> in the corners. That costs 1 MP; leftover MP can walk onto an empty point right away.',
    'You cannot land on an occupied point. Some figures have an ability that lets them walk <b>through</b> others.' ]},
  { h:'Battles: the spinning disc', p:[
    'Walk onto an enemy and <b>both discs</b> spin. Where the pointer lands decides what happens.',
    'The size of a wedge is exactly its chance — a big white wedge means you often hit.',
    'Want to see a disc first? <b>Hold a figure</b> on the board — including the opponent’s. You see the disc as it spins now, including status.' ]},
  { h:'What you see in a battle', p:[
    'Once both wheels stop, <b>the wedge that counts lights up</b>. Usually that is the one under the pointer — but <b>Confusion</b> or <b>True Aim</b> shift the counting wedge, and then the real one lights up.',
    'Then something flies from attacker to defender: a spark, a wave, a flame, lightning — what flies depends on the <b>name</b> of the attack you spun.',
    'If you block with blue, a <b>shield</b> catches the hit. Spin red and <b>MISS</b> hangs over your head. Whoever does not survive flashes white and falls.',
    'Afterwards the hit also lands <b>on the board</b>, on the point it struck. Fire, hammer and lightning leave a crater that fades.',
    'Don’t need all that? Set <b>animation speed</b> in Settings to fast or off.' ]},
  { h:'The five colours', swatches:[
    ['#e5e7eb','<b>White — attack.</b> The number is power. Highest wins; a tie means nobody falls.'],
    ['#fbbf24','<b>Gold — breakthrough.</b> Cuts through purple, blue and miss. Only a stronger attack stops it.'],
    ['#3b82f6','<b>Blue — defence.</b> Blocks white and purple. Still loses to gold.'],
    ['#8b5cf6','<b>Purple — curse.</b> No damage, but a status. Two purples: most stars wins.'],
    ['#ef4444','<b>Red — miss.</b> You do nothing. The other can still hit you.'] ]},
  { h:'Statuses', p:[
    'A figure can have <b>one status at a time</b>; a new one replaces the old.',
    '<b>Poison</b> weakens your attacks, <b>badly poisoned</b> even more — and at the start of your turn a poisoned figure on the field is <b>KO</b>. <b>Burn</b> turns attacks of 10 or less into miss and subtracts 10 damage. <b>Paralysis</b> turns your smallest attack into miss.',
    '<b>Confusion</b> shifts the disc one wedge. <b>Sleep</b> keeps you still until an ally stands next to you. <b>Frozen</b> lets you walk but not attack, and wears off after one battle.',
    'Heal with the plate <b>Cleanse</b>, via the P.C., or with an ability.',
    '<b>Wait</b> is not a normal status: the figure stays on the board but may not walk or fight next turn. Wait wears off after that skipped turn.' ]},
  { h:'Surround', p:[
    'A figure is KO if the <b>opponent occupies every point</b> it could move to. No battle.',
    'Being boxed in by your <b>own</b> figures is not a KO — you just cannot walk.' ]},
  { h:'P.C.', p:[
    'Knocked-out figures go to the <b>P.C.</b> (recovery). At the start of your next turn they return to the bench, statuses cleared, level kept.',
    'The plate <b>Revival</b> pulls someone out of the P.C. immediately, even mid-turn.' ]},
  { h:'Evolving', p:[
    'Every figure belongs to an <b>evolution line</b> — usually common through uncommon to rare. Some, like Plumetail, split three ways: you hang one branch underneath.',
    'You field <b>base forms only</b>. You do not buy an evolved form to place it — you earn it during the match.',
    'To evolve you must <b>own both figures</b>. Put the base form in your team and hang its evolution in the slot that appears. Hang the third form too and it can evolve <b>twice</b> in the same match. A ready figure gets a <b>blue dot</b>.',
    'During the match it evolves when it <b>wins a battle</b> — whether it knocks the other out or pushes it off its spot. You may <b>refuse</b>: then its current disc simply levels up.',
    'Whoever evolves mid-match gets a bonus you do NOT get if you start as the final form: <b>+10 on every white and gold wedge</b> and <b>+1 ★ on every purple wedge</b>. Starting small and growing pays off.' ]},
  { h:'Getting stronger', p:[
    'Knock out an enemy and your figure <b>gains a level</b> (up to 4): its strongest attack grows by 8/96 of the wheel and the same amount of miss disappears.',
    'In the <b>Collection</b> you can upgrade figures with credits permanently. Those levels stay forever.' ]},
  { h:'Your plates', p:[
    'Each plate has a <b>cost</b> of 1, 2 or 3. You may bring plates totalling at most <b>8 points</b> — lots of cheap ones or a few expensive ones.',
    'There are five kinds: <b>recovery</b> (clear status, pull from the P.C.), <b>spin</b> (you or your opponent must respin), <b>battle</b> (more damage, or cannot be KO’d), <b>movement</b> (recall, swap, jump) and <b>special</b>.',
    '<b>Long Toss</b> places someone from the bench one point next to your entry. <b>Goal Guard</b> teleports one of yours onto your empty goal. Both end your turn.',
    'Each plate works <b>once per match</b>. <b>Recycle</b> makes all your spent plates usable again.' ]},
  { h:'Abilities', p:[
    'Some figures have an <b>ability</b>: a power that works on its own, such as walking through units, giving neighbours extra MP, or poisoning an enemy that battles them.',
    'You see each figure’s ability in the <b>Collection</b>, under the disc.' ]},
  { h:'The clock', p:[
    'Each player has <b>think time</b> (default 5 minutes). Your clock only runs on your turn and pauses during battles.',
    'When your time is up, you lose. A match never stalls forever. You can change the clock in <b>Settings</b>.' ]},
];

function helpSections() { return isEn() ? HELP_EN : HELP_NL; }

function renderHelp() {
  const body = document.getElementById('help-body'); body.innerHTML = '';
  for (const sec of helpSections()) {
    const d = document.createElement('div'); d.className = 'help-sec';
    let html = \`<h3>\${sec.h}</h3>\`;
    for (const p of (sec.p || [])) html += \`<p>\${p}</p>\`;
    for (const [color, txt] of (sec.swatches || [])) {
      html += \`<div class="help-key"><div class="help-swatch" style="background:\${color}"></div><div>\${txt}</div></div>\`;
    }
    d.innerHTML = html;
    body.appendChild(d);
  }
}

const SVG_NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs={}, parent=null) { const n = document.createElementNS(SVG_NS, tag); for (const [k,v] of Object.entries(attrs)) n.setAttribute(k, v); if (parent) parent.appendChild(n); return n; }

const STATUS_COLORS = { poison:'#4ade80', badlypoison:'#a855f7', burn:'#fb923c', paralysis:'#fde047', confusion:'#f472b6', sleep:'#93c5fd', frozen:'#7dd3fc', curse:'#7e22ce', bulwark:'#fbbf24', wait:'#9ca3af' };

function drawStatusBadge(g, st, cx, cy) {
  const c = STATUS_COLORS[st] || '#f59e0b';
  el('circle', { cx, cy, r: 8, fill: c, stroke: '#fff', 'stroke-width': 1.4 }, g);
  if (st === 'wait') {
    el('circle', { cx, cy, r: 4.6, fill: 'none', stroke: '#111', 'stroke-width': 1.45 }, g);
    el('path', { d: \`M \${cx} \${cy - 3.1} L \${cx} \${cy} L \${cx + 2.5} \${cy + 1.5}\`, fill: 'none', stroke: '#111', 'stroke-width': 1.3, 'stroke-linecap': 'round' }, g);
  } else if (st === 'poison' || st === 'badlypoison') {
    el('path', { d: \`M \${cx} \${cy - 4.6} C \${cx + 3.4} \${cy - 1}, \${cx + 2.6} \${cy + 4}, \${cx} \${cy + 4.6} C \${cx - 2.6} \${cy + 4}, \${cx - 3.4} \${cy - 1}, \${cx} \${cy - 4.6} Z\`, fill: st === 'badlypoison' ? '#3b0764' : '#14532d' }, g);
  } else if (st === 'burn') {
    el('path', { d: \`M \${cx} \${cy + 4} C \${cx - 3.4} \${cy + 1}, \${cx - 1.4} \${cy - 3}, \${cx} \${cy - 4.6} C \${cx + 1.6} \${cy - 1}, \${cx + 3.4} \${cy + 1}, \${cx} \${cy + 4} Z\`, fill: '#7c2d12' }, g);
  } else if (st === 'paralysis') {
    el('path', { d: \`M \${cx + 1} \${cy - 4.6} L \${cx - 2.6} \${cy} L \${cx + 0.2} \${cy} L \${cx - 1} \${cy + 4.6} L \${cx + 2.8} \${cy - 0.4} L \${cx + 0.2} \${cy - 0.4} Z\`, fill: '#111' }, g);
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
        const wrap = el('g', { transform:\`translate(\${x},\${y}) scale(\${s})\` }, g);
        const p = el('path', { d:VLAM, fill:kleur, opacity:op }, wrap);
        p.style.transformBox = 'fill-box'; p.style.transformOrigin = '50% 100%';
        p.style.animation = \`vlamDans \${dur}s ease-in-out \${delay} infinite\`;
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
        v.style.animation = \`vuurVonk \${dur} linear \${d} infinite\`;
        v.classList.add('fx-anim');
      });
      // rook
      [[-4,'-8px','2.6s','0s'],[6,'6px','3.1s','-1.4s']].forEach(([x, dx, dur, d]) => {
        const r = el('ellipse', { cx:x, cy:-46, rx:5, ry:4, fill:'rgba(52,36,28,0.55)' }, g);
        r.style.transformBox = 'fill-box'; r.style.transformOrigin = 'center';
        r.style.setProperty('--dx', dx);
        r.style.animation = \`vuurRook \${dur} ease-out \${d} infinite\`;
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
        t.style.animation = \`slaapZ 3.3s ease-out \${d} infinite\`;
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
        b.style.animation = \`gifBel \${dur}s ease-out \${delay} infinite\`;
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
          const wrap = el('g', { transform:\`translate(\${x},\${y})\` }, g);
          const p = el('path', { d:'M 0 -5 q 3.2 3.4 3.2 5.6 a 3.2 3.2 0 0 1 -6.4 0 q 0 -2.2 3.2 -5.6 Z',
            fill:c1, opacity:0.8 }, wrap);
          p.style.transformBox = 'fill-box'; p.style.transformOrigin = 'center';
          p.style.animation = \`gifDrup 2.2s ease-in \${d} infinite\`;
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
  el('ellipse', { class:'fig-base', cx:0, cy:0, rx:RX, ry:RY, fill:\`url(#gBaseTop\${p1?'P1':'P2'})\`, stroke:rim, 'stroke-width':2 }, g);
  el('path', { d:\`M -13 -2.8 A 15 6.5 0 0 1 13 -2.8\`, fill:'none', stroke:'rgba(255,255,255,0.45)', 'stroke-width':1.6, 'stroke-linecap':'round' }, g);

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

const BOARD_DEFS = \`
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
</defs>\`;

// Compacte ronde inzetplateaus — dezelfde vorm aan beide kanten, alleen
// de teamkleur verschilt. Zoals de figurenbakken in Duel: een metalen
// schijf met concentrische ringen, geen kasteelpoort of vulkaanput.
function drawSpawn(svg, cx, cy, scale, owner) {
  const g = el('g', { transform:\`translate(\${cx},\${cy}) scale(\${scale})\`, class:'spawn' }, svg);
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
      el('circle', { cx:n.x, cy:n.y, r:24*ds, class:'node-glow', id:\`glow-\${key}\` }, g);
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
      el('circle', { cx:n.x, cy:n.y, r:26*ds, class:'node-glow', id:\`glow-\${key}\` }, g);
      el('circle', { cx:n.x, cy:n.y, r:20*ds, fill:'rgba(10,5,8,0.72)', stroke:col, 'stroke-width':4.5*ds, class:'goal-ring ' + n.owner }, g);
      el('circle', { cx:n.x, cy:n.y, r:14.5*ds, fill:'none', stroke:bright, 'stroke-width':1.6*ds, opacity:0.9 }, g);
      // De pijl wijst OPZIJ, net als in Duel: bovenin naar links, onderin naar
      // rechts — dezelfde 180°-spiegeling als de rest van het bord.
      const t9 = 9*ds, t6 = 6*ds;
      const tri = n.owner==='p2'
        ? \`\${n.x-t9},\${n.y} \${n.x+t6},\${n.y-t9} \${n.x+t6},\${n.y+t9}\`
        : \`\${n.x+t9},\${n.y} \${n.x-t6},\${n.y-t9} \${n.x-t6},\${n.y+t9}\`;
      el('polygon', { points:tri, fill:bright }, g);
    }
    else {
      // Gewoon punt = witte ring met donker hart
      el('circle', { cx:n.x, cy:n.y, r:16*ds, class:'node-glow', id:\`glow-\${key}\` }, g);
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
    g.setAttribute('transform', \`translate(\${n.x},\${n.y}) scale(\${depthScale(n.y).toFixed(3)})\`);
    g.setAttribute('data-uid', u.uid);
    bindUnitGestures(g, u.uid);
    gUnits.appendChild(g);
  }
  for (const t of state.legalTargets) {
    const glow = document.getElementById(\`glow-\${t}\`);
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
        const fig = svg.querySelector(\`.unit-fig[data-uid="\${v.uid}"]\`);
        if (fig) fig.classList.add('surround-victim');
      }
      const n = NODES[t];
      if (n && n.type === 'goal' && n.owner !== mover.owner) {
        const glow = document.getElementById(\`glow-\${t}\`);
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
    const card = el('g', { transform:\`translate(\${BX + i * step},\${BY}) rotate(\${rot})\` }, g);
    el('rect', { x:-CW/2+2, y:-CH/2+3, width:CW, height:CH, rx:5, fill:'rgba(0,0,0,0.45)' }, card);
    el('rect', { x:-CW/2, y:-CH/2, width:CW, height:CH, rx:5, fill:'url(#gCardBack)', stroke:'rgba(255,180,180,0.7)', 'stroke-width':1.5 }, card);
    el('rect', { x:-CW/2+3, y:-CH/2+3, width:CW-6, height:CH-6, rx:3.5, fill:'none', stroke:'rgba(255,255,255,0.16)', 'stroke-width':1 }, card);
    // Sober ruggetje: een ruit met een streep, geen informatie
    el('path', { d:'M 0 -9 L 7 0 L 0 9 L -7 0 Z', fill:'none', stroke:'rgba(255,255,255,0.35)', 'stroke-width':1.4 }, card);
    el('circle', { cx:0, cy:0, r:2.2, fill:'rgba(255,255,255,0.30)' }, card);
  }
  const t = el('text', { x:96, y:114, 'font-size':9, 'text-anchor':'middle', fill:'rgba(255,220,220,0.75)', 'font-family':"'Fredoka', sans-serif" }, g);
  t.textContent = \`\${n} kaart\${n === 1 ? '' : 'en'}\`;
}

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
// \`pos\` is optioneel: {x, y} in pixels binnen de laag. Zonder pos speelt de
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
  const stuk = (cls, extra) => \`<i class="\${cls}" \${extra || ''}></i>\`;
  let html = '';
  if (soort === 'hamer')      html = stuk('fx-hamer') + stuk('fx-ring') + stuk('fx-ring r2');
  else if (soort === 'gif')   html = stuk('fx-tand l') + stuk('fx-tand r') + stuk('fx-drup d1') + stuk('fx-drup d2') + stuk('fx-drup d3');
  else if (soort === 'vuur')  html = Array.from({length:9}, (_,i)=>\`<i class="fx-vlam v\${i}"></i>\`).join('') + stuk('fx-ring');
  else if (soort === 'bliksem') html = stuk('fx-flits') + stuk('fx-flits f2') + stuk('fx-ring');
  else if (soort === 'pijl')  html = stuk('fx-pijl') + stuk('fx-ring r2');
  else if (soort === 'kou')   html = Array.from({length:6}, (_,i)=>\`<i class="fx-scherf s\${i}"></i>\`).join('');
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

// Laat één projectiel van \`van\` naar \`naar\` vliegen. Geeft terug hoeveel ms het
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
  d.innerHTML = \`<i class="fx-sliert"></i><i class="\${projectielVoor(soort)}"></i>\`;
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
      .map(a => \`<i class="bd-vonk" style="--a:\${a}deg"></i>\`).join('');
    d.innerHTML = \`<div class="bd-schild"></div>\${vonken}\`;
  } else {
    // Een misser hangt boven het hoofd, met de zwieper die er langs ging
    d.style.top = (pos.y - 62) + 'px';
    d.innerHTML = \`<i class="bd-zwieper"></i><div class="bd-mis">MIS</div>\`;
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
// \`bron\` slaat, \`doel\` incasseert. Geeft terug hoe lang het duurt.
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

// ===== Plates als KAARTEN op tafel (Duel-look) =====
// In Duel liggen je support-kaarten rechtsonder naast het veld. Hier tekenen we
// ze in de bord-SVG zelf, licht gewaaierd, met het icoon en de naam erop.
function renderPlateCards() {
  const svg = document.getElementById('board');
  const player = (state.mode === 'solo') ? 'p1' : state.turn;
  const foe = player === 'p1' ? 'p2' : 'p1';
  renderFoeCards(svg, (state.plates[foe] || []).length);
  const plates = state.plates[player] || [];
  const g = el('g', { class:'plate-cards' }, svg);
  const n = plates.length;
  const CW = 40, CH = 56, BY = 796;
  // De waaier schaalt mee met het aantal kaarten (je mag er nu tot acht hebben)
  // en blijft altijd binnen de rechterhelft van het bord.
  const step = n <= 1 ? 0 : Math.min(30, 108 / (n - 1));
  const BX = 452 - ((n - 1) * step) / 2;
  plates.forEach((key, i) => {
    const p = PLATES[key];
    const sel = state.pendingPlate && state.pendingPlate.idx === i;
    // Waaier: van -11° links naar +11° rechts, midden iets omhoog
    const rot = n <= 1 ? 0 : -11 + (22 * i) / (n - 1);
    const dx = i * step, dy = -Math.abs((n - 1) / 2 - i) * 3;
    const card = el('g', {
      class: 'plate-card' + (sel ? ' sel' : '') + (state.plateUsed ? ' spent' : ''),
      transform: \`translate(\${BX + dx},\${BY + dy}) rotate(\${rot})\`,
      style: 'cursor:pointer;'
    }, g);
    el('rect', { x:-CW/2+2, y:-CH/2+4, width:CW, height:CH, rx:7, fill:'rgba(0,0,0,0.45)' }, card);
    el('rect', { x:-CW/2, y:-CH/2, width:CW, height:CH, rx:7, fill:'url(#gCardFace)', stroke: sel ? '#fde047' : 'rgba(255,220,170,0.85)', 'stroke-width': sel ? 3 : 1.8 }, card);
    el('rect', { x:-CW/2+3.5, y:-CH/2+3.5, width:CW-7, height:CH-7, rx:5, fill:'none', stroke:'rgba(255,255,255,0.22)', 'stroke-width':1 }, card);
    // Icoon van de plate, midden op de kaart
    const ico = document.createElementNS(SVG_NS, 'g');
    const isz = n <= 4 ? 20 : 24;
    ico.setAttribute('transform', \`translate(\${-isz/2},\${n <= 4 ? -22 : -isz/2 - 2})\`);
    ico.innerHTML = plateIcon(key, isz);
    card.appendChild(ico);
    // Bij een volle hand overlappen de kaarten te veel voor een leesbare naam;
    // dan alleen het icoon. De namen staan toch in de strip onder het bord.
    if (n <= 4) {
      const t = el('text', { x:0, y:18, 'font-size':6.6, 'text-anchor':'middle', fill:'#3b2a12', 'font-family':"'Fredoka', sans-serif", 'font-weight':'700' }, card);
      t.textContent = plateName(key).length > 10 ? plateName(key).slice(0, 9) + '.' : plateName(key);
    }
    card.addEventListener('click', (e) => { e.stopPropagation(); onPlateTap(i); });
  });
}

function renderBench() {
  const svg = document.getElementById('board');
  for (const player of ['p1','p2']) {
    const gRow = el('g', { class:\`bench-row bench-\${player}\` }, svg);
    const dim = state.turn !== player && !state.over;
    const uids = [...state.bench[player]];
    for (let i = uids.length; i < BENCH_PER_ROW * 2; i++) {
      const s = benchSlot(player, i);
      el('ellipse', { cx:s.x, cy:s.y, rx:20*s.scale, ry:9.5*s.scale, fill:'none', stroke:'rgba(255,255,255,0.30)', 'stroke-width':2 }, gRow);
    }
    uids.forEach((uid, i) => {
      const u = state.units[uid];
      const s = benchSlot(player, i);
      const x = s.x, y = s.y, scale = s.scale;
      const waiting = u.status.includes('wait');
      const g = unitGroup(u);
      g.setAttribute('class', 'unit-fig bench-fig' + (state.pendingDeploy === uid ? ' selected' : ''));
      g.setAttribute('transform', \`translate(\${x},\${y}) scale(\${scale})\`);
      if (waiting) { g.setAttribute('opacity', '0.35'); g.setAttribute('filter', 'grayscale(1)'); }
      else if (dim) g.setAttribute('opacity', '0.6');
      el('circle', { cx:-15, cy:-44, r:8, fill:'#fbbf24', stroke:'#fff', 'stroke-width':1.5 }, g);
      const t = el('text', { x:-15, y:-40.5, 'font-size':10.5, 'text-anchor':'middle', fill:'#000', 'font-weight':'900', 'font-family':'sans-serif' }, g); t.textContent = UNIT_DEFS[u.defKey].mp;
      bindUnitGestures(g, uid, () => onBenchTap(uid));
      gRow.appendChild(g);
    });
  }
}

function pcSlot(player, i, n) {
  const isP1 = player === 'p1';
  const cx = isP1 ? 72 : 470, cy = isP1 ? 790 : 70;
  const scale = (isP1 ? 0.78 : 0.66) * (n > 2 ? 0.9 : 1);
  if (n <= 1) return { x: cx, y: cy - 10, scale };
  const spread = Math.min(22, 56 / Math.max(1, n - 1));
  return { x: cx + (i - (n - 1) / 2) * spread, y: cy - 10 + Math.abs(i - (n - 1) / 2) * 3, scale };
}

function renderPC() {
  const svg = document.getElementById('board');
  if (!svg || !state) return;
  for (const player of ['p1', 'p2']) {
    const uids = state.hc[player] || [];
    if (!uids.length) continue;
    const gRow = el('g', { class: \`pc-row pc-\${player}\` }, svg);
    const origin = player === 'p1' ? { x: 72, y: 796 } : { x: 470, y: 76 };
    const lab = el('text', {
      x: origin.x, y: origin.y + (player === 'p1' ? 28 : -22),
      'font-size': 9, 'text-anchor': 'middle', fill: 'rgba(251,207,232,0.9)',
      'font-family': "'Fredoka', sans-serif", 'font-weight': '700', 'letter-spacing': '0.12em'
    }, gRow);
    lab.textContent = t('pc.label');
    uids.forEach((uid, i) => {
      const u = state.units[uid]; if (!u) return;
      const s = pcSlot(player, i, uids.length);
      const g = unitGroup(u);
      g.setAttribute('class', 'unit-fig pc-fig');
      g.setAttribute('transform', \`translate(\${s.x},\${s.y}) scale(\${s.scale})\`);
      g.setAttribute('opacity', '0.78');
      el('circle', { cx: 14, cy: -42, r: 7.5, fill: '#f472b6', stroke: '#fff', 'stroke-width': 1.4 }, g);
      const plus = el('text', { x: 14, y: -38.5, 'font-size': 11, 'text-anchor': 'middle', fill: '#fff', 'font-weight': '900', 'font-family': 'sans-serif' }, g);
      plus.textContent = '+';
      g.addEventListener('click', e => {
        e.stopPropagation();
        toast(tr(\`\${unitName(u.defKey)} herstelt in het P.C.\`, \`\${unitName(u.defKey)} is recovering in the P.C.\`));
      });
      gRow.appendChild(g);
    });
  }
}

function renderTurnBanner() {
  document.getElementById('turn-banner').className = \`turn-banner \${state.turn}\`;
  const solo = state.mode === 'solo';
  const p1n = document.getElementById('hud-p1-name');
  const p2n = document.getElementById('hud-p2-name');
  if (p1n) p1n.textContent = t('hud.you');
  if (p2n) p2n.textContent = solo ? 'AI' : t('hud.p2');
  let name = state.turn === 'p1' ? t('hud.yourTurn') : (solo ? t('hud.ai') : t('hud.p2'));
  if (state.aiThinking) name = t('hud.aiCalc');
  document.getElementById('turn-name').textContent = name;
  document.getElementById('turn-actions').textContent = \`\${state.actionsLeft} \${isEn() ? (state.actionsLeft===1?'ACTION':'ACTIONS') : ('ACTIE' + (state.actionsLeft===1?'':'S'))}\`;
  const endBtn = document.getElementById('btn-end-turn');
  const bar = document.querySelector('.action-bar');
  if (bar) bar.classList.toggle('auto-end', !!S('autoEndTurn'));
  if (endBtn) endBtn.style.display = S('autoEndTurn') ? 'none' : '';
  paintClocks();
}

function renderPlates() {
  const div = document.getElementById('plate-strip'); div.innerHTML = '';
  const player = (state.mode === 'solo') ? 'p1' : state.turn;
  const plates = state.plates[player] || [];
  // De strip blijft ALTIJD even hoog, ook zonder kaarten. Anders klapt hij bij
  // elke beurtwissel open en dicht en herschaalt het hele bord mee — dat was
  // het 'hij kalibreert steeds'-effect.
  div.style.display = 'flex';
  if (!plates.length) return;
  const mine = player === state.turn && !state.over;
  plates.forEach((key, idx) => {
    const c = document.createElement('div');
    c.className = 'plate-chip' + (state.pendingPlate && state.pendingPlate.idx === idx && mine ? ' selected' : '') + ((!mine || state.plateUsed) ? ' disabled' : '');
    c.innerHTML = \`<div style="display:flex;align-items:center;gap:6px;">\${plateIcon(key, 20)}<b>\${plateName(key)}</b></div><span>\${plateDesc(key)}</span>\`;
    c.addEventListener('click', () => { if (mine) onPlateTap(idx); });
    div.appendChild(c);
  });
}

function ownGoalKey(player) {
  return Object.keys(NODES).find(k => NODES[k].type === 'goal' && NODES[k].owner === player);
}
function longThrowTargets(player) {
  const out = new Set();
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== player) continue;
    for (const adj of ADJ[k]) {
      if (!unitAt(adj)) out.add(adj);
    }
  }
  return out;
}

function onPlateTap(idx) {
  if (state.over || state.locked) return;
  const player = state.turn;
  if (state.plateUsed) { toast(tr('Al een plate gebruikt deze beurt', 'Already used a plate this turn')); return; }
  if (state.pendingPlate && state.pendingPlate.idx === idx) { state.pendingPlate = null; state.legalTargets = new Set(); renderAll(); return; }
  const key = state.plates[player][idx]; const pl = PLATES[key];
  if (pl.target === 'none') {
    if (key === 'revive' && !state.hc[player].length) { sfx('denied'); toast(tr('Je P.C. is leeg', 'Your P.C. is empty')); return; }
    if (key === 'recycle' && !(state.usedPlates[player] || []).length) { sfx('denied'); toast(tr('Je hebt nog geen kaarten gebruikt', 'You have not used any plates yet')); return; }
    usePlate(player, idx); return;
  }
  if (pl.target === 'bench-then-node') {
    const ready = state.bench[player].filter(uid => !state.units[uid].status.includes('wait'));
    if (!ready.length) { sfx('denied'); toast(tr('Geen figuur op de zijlijn klaar', 'No figure ready on the bench')); return; }
    if (!longThrowTargets(player).size) { sfx('denied'); toast(tr('Geen vrije plek naast je entry', 'No free point next to your entry')); return; }
    state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
    state.legalTargets = new Set();
    toast(tr(\`\${plateName(key)}: kies een figuur op je zijlijn\`, \`\${plateName(key)}: pick a figure on your bench\`));
    renderAll(); return;
  }
  if (pl.target === 'wait') {
    const waiters = Object.values(state.units).filter(u => u.owner === player && u.status.includes('wait') && !state.hc[player].includes(u.uid));
    if (!waiters.length) { sfx('denied'); toast(tr('Niemand heeft Wacht', 'Nobody has Wait')); return; }
    state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
    state.legalTargets = new Set(waiters.filter(u => u.node).map(u => u.node));
    toast(tr(\`\${plateName(key)}: kies een figuur met Wacht\`, \`\${plateName(key)}: pick a figure with Wait\`));
    renderAll(); return;
  }
  if (pl.target === 'ally-then-bench') {
    const field = Object.values(state.units).filter(u => u.owner === player && u.node);
    if (!field.length) { sfx('denied'); toast(tr('Geen figuur op het veld', 'No figure on the field')); return; }
    if (!state.bench[player].length) { sfx('denied'); toast(tr('Je zijlijn is leeg', 'Your bench is empty')); return; }
  }
  if (key === 'goalblock') {
    const g = ownGoalKey(player);
    if (!g || unitAt(g)) { sfx('denied'); toast(tr('Je doel is bezet', 'Your goal is occupied')); return; }
  }
  state.pendingPlate = { idx, key, stage: 1 }; state.selected = null; state.pendingDeploy = null;
  state.legalTargets = new Set();
  for (const u of Object.values(state.units)) {
    if (!u.node) continue;
    if ((pl.target === 'enemy' && u.owner !== player) || ((pl.target === 'ally' || pl.target === 'ally-then-node' || pl.target === 'ally-then-ally' || pl.target === 'ally-then-bench' || pl.target === 'wait') && u.owner === player)) state.legalTargets.add(u.node);
  }
  if (state.legalTargets.size === 0 && pl.target !== 'wait') { state.pendingPlate = null; toast(tr('Geen geldig doelwit', 'No valid target')); renderAll(); return; }
  toast(tr(\`\${plateName(key)}: kies doelwit\`, \`\${plateName(key)}: pick a target\`)); renderAll();
}

// ==========================================
// KAARTANIMATIE (sessie 37)
// Koen: "alles moet een soort animatie hebben, dat geldt dus ook voor de
// kaarten." Een kaart verdwijnt dus niet stilletjes uit je hand: hij vliegt
// naar voren, licht op met z'n eigen kleur, en spat uiteen op het doelwit.
// ==========================================
// Waar ligt de kaart nu? Bij jezelf is dat de waaier rechtsonder, bij de
// tegenstander het stapeltje met de rug omhoog linksboven.
function kaartBronRect(player, idx) {
  const kijker = (state.mode === 'solo') ? 'p1' : state.turn;
  if (player === kijker) {
    const lijst = document.querySelectorAll('#board g.plate-card');
    const e = lijst[idx] || lijst[lijst.length - 1];
    return e ? e.getBoundingClientRect() : null;
  }
  const g = document.querySelector('#board g.foe-cards');
  return g ? g.getBoundingClientRect() : null;
}
// Waar landt hij? Op het punt waar de kaart z'n werk doet: het vak waar het
// figuur naartoe gaat, anders het vak waar het nu staat, anders het bord.
function kaartDoelRect(u, node) {
  const plek = node || (u && u.node);
  if (plek) {
    const e = document.querySelector(\`#board [data-node="\${plek}"]\`);
    if (e) return e.getBoundingClientRect();
  }
  const b = document.getElementById('board');
  return b ? b.getBoundingClientRect() : null;
}

function kaartInslag(laag, x, y, kleur) {
  const g = document.createElement('div');
  g.className = 'kaart-inslag';
  g.style.left = x + 'px'; g.style.top = y + 'px';
  g.style.setProperty('--kk', kleur);
  g.innerHTML = '<i class="ki-ring"></i>' + Array.from({ length: 10 },
    (_, i) => \`<i class="ki-vonk" style="--a:\${i * 36}deg; animation-delay:\${i * 12}ms"></i>\`).join('');
  laag.appendChild(g);
  setTimeout(() => g.remove(), 1000);
}

function speelKaartFx(key, van, naar) {
  if (animOff()) return;
  const laag = document.getElementById('kaart-fx'); const p = PLATES[key];
  if (!laag || !p) return;
  const kleur = (PLATE_ICONS[key] || ['#f59e0b'])[0];
  const R = laag.getBoundingClientRect();
  const mx = R.width / 2, my = R.height * 0.4;
  const pt = (r, val) => r ? { x: r.left - R.left + r.width / 2, y: r.top - R.top + r.height / 2 } : val;
  const start = pt(van, { x: mx, y: R.height * 0.86 });
  const eind  = pt(naar, { x: mx, y: my });
  const krimp = van ? Math.max(0.14, Math.min(0.5, van.width / 132)) : 0.24;

  const kaart = document.createElement('div');
  kaart.className = 'kaart-vlucht';
  kaart.style.setProperty('--kk', kleur);
  kaart.innerHTML = \`<div class="kv-glans"></div><div class="kv-ico">\${plateIcon(key, 48)}</div>\` +
    \`<div class="kv-naam">\${plateName(key)}</div>\`;
  laag.appendChild(kaart);

  const T = animScale() || 1, duur = 1020 * T;
  const zet = (x, y, s, r) => \`translate(\${x.toFixed(0)}px, \${y.toFixed(0)}px) translate(-50%, -50%) scale(\${s}) rotate(\${r}deg)\`;
  const anim = kaart.animate([
    { transform: zet(start.x, start.y, krimp, -22), opacity: 0.25, offset: 0 },
    { transform: zet(mx, my, 1.08, 3), opacity: 1, offset: 0.3 },
    { transform: zet(mx, my, 1, 0), opacity: 1, offset: 0.66 },
    { transform: zet(eind.x, eind.y, 0.14, 16), opacity: 0, offset: 1 },
  ], { duration: duur, easing: 'cubic-bezier(.3,.05,.3,1)', fill: 'forwards' });
  anim.onfinish = () => kaart.remove();
  setTimeout(() => { if (kaart.isConnected) kaart.remove(); }, duur + 400);
  setTimeout(() => kaartInslag(laag, eind.x, eind.y, kleur), duur * 0.94);
}

function usePlate(player, idx, targetUid, targetNode) {
  const key = state.plates[player][idx]; const pl = PLATES[key];
  const u = targetUid ? state.units[targetUid] : null;
  // Meten vóór we het bord opnieuw tekenen — daarna is de kaart weg
  const kaartVan = kaartBronRect(player, idx);
  const kaartNaar = kaartDoelRect(u, targetNode);
  if (key === 'fullheal') { u.status = u.status.filter(s => s === 'wait'); }
  else if (key === 'revive') {
    const back = state.hc[player].shift();
    if (back) { state.units[back].status = []; state.bench[player].push(back); }
  }
  else if (key === 'scoopup') { u.node = null; u.status = u.status.filter(s => s !== 'wait'); state.bench[player].push(u.uid); }
  else if (key === 'swapspot') { const other = state.units[state.pendingPlate.uid]; const a = other.node; other.node = u.node; u.node = a; }
  else if (key === 'hurdle') { state.units[state.pendingPlate.uid].node = targetNode; }
  else if (key === 'longthrow') {
    u.node = targetNode;
    state.bench[player] = state.bench[player].filter(id => id !== u.uid);
  }
  else if (key === 'goalblock') {
    const g = ownGoalKey(player);
    if (g && !unitAt(g)) u.node = g;
  }
  else if (key === 'clearwait') { u.status = u.status.filter(s => s !== 'wait'); }
  else if (key === 'pokeswitch') {
    const field = state.units[state.pendingPlate.uid];
    const spot = field.node;
    field.node = null; state.bench[player].push(field.uid);
    u.node = spot;
    state.bench[player] = state.bench[player].filter(id => id !== u.uid);
  }
  else if (key === 'tropic') {
    for (const fig of Object.values(state.units)) {
      if (fig.owner !== player) continue;
      const fac = UNIT_DEFS[fig.defKey] && UNIT_DEFS[fig.defKey].fac;
      if (fac === 'Gras' || fac === 'Vlieg' || fac === 'Insect') {
        fig.status = fig.status.filter(s => s === 'wait');
      }
    }
  }
  else if (key === 'counter') { state.counterAttack[player] = true; }
  else if (key === 'recycle') { state.usedPlates[player] = (state.usedPlates[player] || []); state.plates[player].push(...state.usedPlates[player]); state.usedPlates[player] = []; }
  else if (pl.fx) { u.fx = u.fx || {}; u.fx[pl.fx] = true; }
  // Kaart is op — bewaren zodat Hergebruik hem kan terughalen
  const [used] = state.plates[player].splice(idx, 1);
  if (key !== 'recycle') { state.usedPlates[player] = state.usedPlates[player] || []; state.usedPlates[player].push(used); }
  state.plateUsed = true; state.pendingPlate = null; state.legalTargets = new Set();
  sfx('plate');
  // Speelt de kaart z'n eigen animatie? Dan is die groot genoeg als melding.
  if (animOff()) toast(tr(\`\${plateName(key)} gebruikt\`, \`\${plateName(key)} used\`));
  renderAll();
  speelKaartFx(key, kaartVan, kaartNaar);
  if (pl.endsTurn) {
    state.actionsLeft = 0;
    afterAction();
  }
}

// Plate-effecten die pas in het GEVECHT gelden. Ze worden hier toegepast op de
// gedraaide vakjes; 'focus' en 'xdefend' grijpen later in op de uitkomst.
function applyPlateFx(u, slot) {
  const fx = u.fx || {};
  let s = { ...slot };
  if (fx.xaccuracy && s.k === 'red') s = { ...s, __shift: true };   // afgehandeld bij het draaien
  if (fx.xspeed && s.k === 'white') s = { ...s, k: 'gold', name: (s.name || 'Aanval') + ' +' };
  if (fx.xattack && (s.k === 'white' || s.k === 'gold')) s = { ...s, v: (s.v || 0) + 30 };
  if (fx.xspatk && s.k === 'purple') s = { ...s, stars: (s.stars || 1) + 2 };
  return s;
}
function clearPlateFx(u) { if (u) u.fx = {}; }

// De inslag zelf, getekend in de bord-SVG op het punt waar de klap valt.
function spawnImpact(svg, x, y, soort) {
  const g = el('g', {}, svg);
  const zet = (n, attrs, anim, delay) => {
    const e = el(n, attrs, g);
    e.style.transformBox = 'fill-box'; e.style.transformOrigin = 'center';
    e.style.animation = anim; if (delay) e.style.animationDelay = delay;
    return e;
  };
  const K = { vuur:'#fb923c', bliksem:'#fde047', gif:'#4ade80', kou:'#7dd3fc',
              klauw:'#f87171', snede:'#f8fafc', hamer:'#cbd5e1', pijl:'#e5e7eb',
              schild:'#60a5fa', magie:'#c084fc' }[soort] || '#fff';

  if (soort === 'bliksem') {
    // Donderschicht die van bovenaf het bord in slaat
    const pad = \`M \${x-6} \${y-260} L \${x-16} \${y-120} L \${x+2} \${y-124} L \${x-10} \${y-8} L \${x+18} \${y-140} L \${x-1} \${y-136} L \${x+12} \${y-260}\`;
    zet('path', { d:pad, fill:'none', stroke:K, 'stroke-width':7, 'stroke-linejoin':'round',
      filter:'drop-shadow(0 0 8px '+K+')' }, 'fxBolt .5s steps(4) forwards');
    zet('path', { d:pad, fill:'none', stroke:'#fff', 'stroke-width':2.5, 'stroke-linejoin':'round' }, 'fxBolt .5s steps(4) forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'#fff' }, 'fxShock .55s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .7s ease-out forwards', '.06s');
  } else if (soort === 'vuur') {
    // Meteoor die schuin inkomt en inslaat
    zet('path', { d:\`M \${x-150} \${y-190} L \${x-18} \${y-14} L \${x-38} \${y-38} Z\`, fill:'rgba(251,146,60,0.55)' },
        'fxMeteorTrail .34s ease-in forwards');
    zet('circle', { cx:x, cy:y, r:11, fill:'url(#gMeteor)' }, 'fxMeteor .34s ease-in forwards');
    for (let i = 0; i < 10; i++) {
      const a = (Math.PI * 2 * i) / 10;
      zet('circle', { cx:x + Math.cos(a)*7, cy:y + Math.sin(a)*4, r:3.4, fill: i%2 ? '#fde047' : K },
          'fxBurst .6s ease-out forwards', (0.3 + i*0.015) + 's');
    }
    zet('ellipse', { cx:x, cy:y+5, rx:10, ry:4.5, fill:'none', stroke:K, 'stroke-width':4 }, 'fxShock .8s ease-out forwards', '.3s');
  } else if (soort === 'gif') {
    for (let i = 0; i < 9; i++) {
      const a = (Math.PI * 2 * i) / 9;
      zet('ellipse', { cx:x + Math.cos(a)*6, cy:y + Math.sin(a)*4, rx:4.5, ry:6, fill:K, opacity:0.9 },
          'fxSplat .8s ease-out forwards', (i*0.03) + 's');
    }
    zet('ellipse', { cx:x, cy:y+5, rx:16, ry:7, fill:'rgba(74,222,128,0.35)' }, 'fxPlas 1.6s ease-out forwards');
  } else if (soort === 'kou') {
    for (let i = 0; i < 7; i++) {
      const a = (Math.PI * 2 * i) / 7;
      zet('path', { d:\`M \${x} \${y-3} l \${Math.cos(a)*7} \${Math.sin(a)*4-9} l \${Math.cos(a)*5} \${Math.sin(a)*3+9} Z\`, fill:K, opacity:0.9 },
          'fxScherfUit .7s ease-out forwards', (i*0.03) + 's');
    }
  } else if (soort === 'klauw' || soort === 'snede') {
    for (let i = 0; i < 3; i++) {
      zet('path', { d:\`M \${x-26+i*9} \${y-22} L \${x+16+i*9} \${y+16}\`, stroke:K, 'stroke-width':4.5,
        'stroke-linecap':'round', fill:'none' }, 'fxKrasUit .45s ease-out forwards', (i*0.06) + 's');
    }
  } else if (soort === 'pijl') {
    zet('path', { d:\`M \${x-120} \${y-46} L \${x-4} \${y-2}\`, stroke:K, 'stroke-width':3.5, 'stroke-linecap':'round', fill:'none' },
        'fxPijlIn .3s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+3, rx:7, ry:3, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .5s ease-out forwards', '.25s');
  } else if (soort === 'hamer' || soort === 'schild') {
    zet('ellipse', { cx:x, cy:y+4, rx:9, ry:4, fill:'none', stroke:K, 'stroke-width':5 }, 'fxShock .6s ease-out forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:9, ry:4, fill:'none', stroke:'#fff', 'stroke-width':2 }, 'fxShock .8s ease-out forwards', '.1s');
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI * 2 * i) / 6;
      zet('rect', { x:x + Math.cos(a)*8, y:y + Math.sin(a)*5, width:5, height:5, fill:'#8a7f6d' },
          'fxBurst .55s ease-out forwards', (i*0.02) + 's');
    }
  } else {
    // magie en de rest: een oplichtende ring met runenstipjes
    zet('circle', { cx:x, cy:y, r:10, fill:'none', stroke:K, 'stroke-width':3, 'stroke-dasharray':'6 5' },
        'fxRuneUit .8s linear forwards');
    zet('ellipse', { cx:x, cy:y+4, rx:8, ry:4, fill:'none', stroke:K, 'stroke-width':3 }, 'fxShock .7s ease-out forwards');
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1800);
}

// ===== Inslagen OP HET BORD =====
// Naast de animatie bij de draaischijven slaat de aanval ook echt in op het
// bord, op het punt waar de klap valt: een bliksem die neerkomt, een meteoor
// die inslaat, een gifplas. Zware inslagen laten een krater achter die pas na
// een tijdje vervaagt.
const FX_KRATER = { vuur: true, hamer: true, bliksem: true };
function boardImpact(node, soort) {
  if (!node || !soort || animOff() || !NODES[node]) return;
  const n = NODES[node];
  queueFX(n.x, n.y, 'inslag:' + soort);
  if (FX_KRATER[soort]) {
    state.craters = state.craters || [];
    state.craters.push({ x: n.x, y: n.y, soort, born: performance.now() });
    if (state.craters.length > 8) state.craters.shift();
  }
}

// Kraters worden bij elke render opnieuw getekend en vervagen met de tijd.
function drawCraters(svg) {
  const lijst = state.craters || [];
  if (!lijst.length) return;
  const nu = performance.now();
  state.craters = lijst.filter(c => nu - c.born < 14000);
  for (const c of state.craters) {
    const leeftijd = (nu - c.born) / 14000;
    const op = Math.max(0, 0.75 * (1 - leeftijd));
    const g = el('g', { opacity: op.toFixed(2) }, svg);
    // opgeworpen rand, dan de donkere kom
    el('ellipse', { cx:c.x, cy:c.y + 8, rx:34, ry:15, fill:'rgba(120,72,40,0.55)' }, g);
    el('ellipse', { cx:c.x, cy:c.y + 8, rx:29, ry:12.5, fill:'rgba(16,7,3,0.92)' }, g);
    el('ellipse', { cx:c.x, cy:c.y + 6.5, rx:20, ry:8, fill:'rgba(48,20,8,0.95)' }, g);
    if (c.soort === 'vuur') {
      el('ellipse', { cx:c.x, cy:c.y + 7, rx:11, ry:4.4, fill:\`rgba(251,146,60,\${(0.7*(1-leeftijd)).toFixed(2)})\` }, g);
      el('ellipse', { cx:c.x, cy:c.y + 7, rx:5, ry:2, fill:\`rgba(254,215,170,\${(0.8*(1-leeftijd)).toFixed(2)})\` }, g);
    }
    // barsten die uit de krater het bord in lopen
    for (const a of [8, 62, 118, 176, 232, 298]) {
      const r = (a * Math.PI) / 180;
      el('path', { d:\`M \${c.x + Math.cos(r)*20} \${c.y + 8 + Math.sin(r)*9} L \${c.x + Math.cos(r)*40} \${c.y + 8 + Math.sin(r)*18}\`,
        stroke:'rgba(14,6,3,0.85)', 'stroke-width':2.6, 'stroke-linecap':'round' }, g);
    }
  }
}

// Het hart van het binnenvierkant was leeg. Daar ligt nu het teken waar het
// spel naar heet: een rondel — concentrische ringen met spaken en een kern.
// Ingebrand in de arenavloer, dus heel licht: het mag de figuren niet
// wegdrukken. Een handvol elementen, dus het kost niets per render.
function drawRondel(svg) {
  const cx = 270, cy = 445;
  const g = el('g', { class:'rondel-teken', opacity:0.22 }, svg);
  for (const [r, w] of [[112, 3], [86, 1.6], [58, 2.4], [26, 1.4]])
    el('circle', { cx, cy, r, fill:'none', stroke:'#ffe9c2', 'stroke-width':w }, g);
  for (let i = 0; i < 8; i++) {
    const a = (i * 45 - 90) * Math.PI / 180;
    el('line', { x1:cx + Math.cos(a) * 60, y1:cy + Math.sin(a) * 60,
      x2:cx + Math.cos(a) * 110, y2:cy + Math.sin(a) * 110,
      stroke:'#ffe9c2', 'stroke-width': i % 2 ? 1.4 : 2.6, 'stroke-linecap':'round' }, g);
  }
  // Vier ruitjes op de assen, als de merktekens op een echte rondel
  for (let i = 0; i < 4; i++) {
    const a = (i * 90 - 90) * Math.PI / 180;
    const x = cx + Math.cos(a) * 86, y = cy + Math.sin(a) * 86;
    el('path', { d:\`M \${x} \${y-9} L \${x+7} \${y} L \${x} \${y+9} L \${x-7} \${y} Z\`, fill:'#ffe9c2' }, g);
  }
  el('circle', { cx, cy, r:11, fill:'#ffe9c2', opacity:0.55 }, g);
}

// ==========================================
// INZETPOORT (sessie 38)
// Koen wilde een duistere put "waar die monsters uit gekropen komen" en een
// hemelpoort. Die stonden als decor aan de zijkant, maar een figuur verscheen
// gewoon uit het niets op z'n startpunt. Nu scheurt de poort daar open: bij
// jou een lichtzuil met vonken, bij de tegenstander een zwart gat met walm en
// klauwsporen. Het figuur klimt er zichtbaar uit.
// Poorten leven in state.portals en worden bij elke render opnieuw getekend,
// zodat ze het herbouwen van de SVG overleven — net als de kraters.
// ==========================================
function addPortal(node, owner) {
  if (animOff() || !NODES[node]) return;
  state.portals = state.portals || [];
  state.portals.push({ x: NODES[node].x, y: NODES[node].y, owner, born: performance.now() });
  if (state.portals.length > 4) state.portals.shift();
}
const PORTAL_DUUR = 1300;
function drawPortals(svg) {
  const lijst = state.portals || [];
  if (!lijst.length) return;
  const nu = performance.now();
  state.portals = lijst.filter(p => nu - p.born < PORTAL_DUUR);
  for (const p of state.portals) {
    // De poort loopt op CSS-animaties, niet op een teken-lus: de SVG wordt bij
    // elke zet herbouwd en dan zou hij stilstaan. Met een NEGATIEVE vertraging
    // ter grootte van z'n leeftijd pikt hij de animatie op waar hij was.
    const oud = nu - p.born;
    const g = el('g', { class: 'portal portal-' + p.owner, transform: \`translate(\${p.x},\${p.y + 7})\` }, svg);
    const anim = (e, naam, duur, delay) => { e.style.animation = \`\${naam} \${duur}ms ease-out \${(delay || 0) - oud}ms forwards\`; return e; };
    const ring = p.owner === 'p1' ? 'rgba(191,219,254,0.95)' : 'rgba(217,70,70,0.9)';
    anim(el('ellipse', { cx:0, cy:0, rx:34, ry:14, fill:'none', stroke:ring, 'stroke-width':4 }, g), 'portalGolf', 900);
    anim(el('ellipse', { cx:0, cy:0, rx:52, ry:21, fill: p.owner === 'p1' ? 'rgba(147,197,253,0.45)' : 'rgba(88,28,135,0.6)' }, g), 'portalPlas', PORTAL_DUUR);
    anim(el('ellipse', { cx:0, cy:0, rx:36, ry:15, fill: p.owner === 'p1' ? 'rgba(219,234,254,0.9)' : '#08040a' }, g), 'portalPlas', PORTAL_DUUR);
    if (p.owner === 'p1') {
      anim(el('path', { d:'M -38 0 L -22 -96 L 22 -96 L 38 0 Z', fill:'url(#gPortalLicht)' }, g), 'portalZuil', PORTAL_DUUR);
      for (let i = 0; i < 10; i++) {
        const a = (i * 36) * Math.PI / 180;
        anim(el('circle', { cx:Math.cos(a) * 30, cy:0, r:3, fill:'#fff' }, g), 'portalVonk', 900, i * 72);
      }
    } else {
      anim(el('ellipse', { cx:0, cy:1, rx:18, ry:7, fill:'#ef4444' }, g), 'portalGloed', PORTAL_DUUR);
      for (let i = 0; i < 6; i++) {
        const a = (i * 61 + 15) * Math.PI / 180;
        anim(el('circle', { cx:Math.cos(a) * 22, cy:0, r:9, fill:'rgba(52,26,66,0.75)' }, g), 'portalWalm', 1100, i * 110);
      }
      for (const dx of [-1, 1]) {
        anim(el('path', { d:\`M \${dx * 19} -4 l \${dx * 10} -13\`, stroke:'#be3c3c', 'stroke-width':2.6, 'stroke-linecap':'round' }, g), 'portalKlauw', 700, 90);
      }
    }
  }
}

// Het figuur klimt uit de poort omhoog in plaats van er te verschijnen.
function riseUnit(u) {
  return new Promise(res => {
    if (animOff() || !u.node) { res(); return; }
    state.animating = u.uid;
    renderAll();                       // poort tekenen, statisch figuur verbergen
    const svg = document.getElementById('board');
    const n = NODES[u.node];
    const ghost = unitGroup(u, false); ghost.style.transition = 'none'; svg.appendChild(ghost);
    const dur = 480 * (animScale() || 1), t0 = performance.now();
    const ds = depthScale(n.y);
    const frame = (now) => {
      const t = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      const lift = (1 - e) * 30;
      ghost.setAttribute('transform', \`translate(\${n.x},\${n.y + lift}) scale(\${ds.toFixed(3)},\${(ds * (0.3 + 0.7 * e)).toFixed(3)})\`);
      ghost.setAttribute('opacity', Math.min(1, e * 1.8).toFixed(2));
      if (t < 1) requestAnimationFrame(frame);
      // De SVG kan tussendoor herbouwd zijn (klok, AI); dan is de ghost al weg
      else { if (ghost.parentNode) ghost.parentNode.removeChild(ghost); state.animating = null; renderAll(); res(); }
    };
    requestAnimationFrame(frame);
  });
}

function queueFX(x, y, kind, extra) { (state.pendingFX = state.pendingFX || []).push({ x, y, kind, extra }); }
function flushFX() { const list = state.pendingFX || []; state.pendingFX = []; for (const f of list) spawnFX(f.x, f.y, f.kind, f.extra); }

// Een verslagen figuur verdween met een knal en stond ineens aan de zijlijn.
// Nu zie je z'n ziel in een boog naar het P.C. zweven, zodat je
// begrijpt WAAR hij heen is en dat hij terugkomt.
function zielNaarHC(u, vanNode) {
  if (animOff() || !NODES[vanNode]) return;
  const i = Math.max(0, (state.hc[u.owner] || []).indexOf(u.uid));
  const s = pcSlot(u.owner, i, Math.max(1, (state.hc[u.owner] || []).length));
  queueFX(NODES[vanNode].x, NODES[vanNode].y, 'ziel', { tx: s.x, ty: s.y, owner: u.owner });
}

function spawnZiel(svg, x, y, opt) {
  if (!opt) return;
  const kleur = opt.owner === 'p1' ? '#93c5fd' : '#fca5a5';
  const g = el('g', { class:'zielfx' }, svg);
  // Boogje: halverwege een stuk boven de rechte lijn langs
  const mx = (x + opt.tx) / 2, my = Math.min(y, opt.ty) - 70;
  for (const [k, v] of [['--x0', x], ['--y0', y - 18], ['--xm', mx], ['--ym', my], ['--x1', opt.tx], ['--y1', opt.ty - 10]])
    g.style.setProperty(k, v.toFixed(1) + 'px');
  el('circle', { cx:0, cy:0, r:16, fill:kleur, opacity:0.22 }, g);
  el('circle', { cx:0, cy:0, r:8, fill:kleur, opacity:0.55 }, g);
  el('circle', { cx:0, cy:0, r:4, fill:'#fff' }, g);
  // Sliertjes die achterblijven
  for (let i = 0; i < 3; i++) {
    const s = el('circle', { cx:0, cy:0, r:3.4 - i * 0.8, fill:kleur, opacity:0.5 }, g);
    s.style.animation = \`zielSliert 1.05s ease-in-out \${i * 70}ms forwards\`;
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1300);
}
// Een figuur dat opklimt verdient meer dan een regeltje tekst: gouden ringen
// die opstijgen, sterren die wegspatten en het nieuwe levelcijfer dat opbloeit.
function spawnLevelUp(svg, x, y, lvl) {
  const g = el('g', { class:'lvlfx', transform:\`translate(\${x},\${y})\` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = \`\${naam} \${duur}ms ease-out \${delay || 0}ms forwards\`; return e; };
  zet(el('ellipse', { cx:0, cy:8, rx:40, ry:17, fill:'rgba(253,224,71,0.28)' }, g), 'lvlPlas', 700);
  for (let i = 0; i < 4; i++) {
    zet(el('ellipse', { cx:0, cy:8, rx:36, ry:15, fill:'none', stroke:'#fde047', 'stroke-width':4 }, g), 'lvlRing', 950, i * 150);
  }
  for (let i = 0; i < 10; i++) {
    const a = (i * 36) * Math.PI / 180;
    zet(el('path', { d:'M 0 -11 L 3 -3 L 11 0 L 3 3 L 0 11 L -3 3 L -11 0 L -3 -3 Z', fill:'#fff7d6' }, g), 'lvlSter', 850, i * 40);
    g.lastChild.style.setProperty('--a', (i * 36) + 'deg');
  }
  const t = el('text', { x:0, y:-52, 'font-size':28, 'text-anchor':'middle', fill:'#fde047',
    'font-family':"'Fredoka', sans-serif", 'font-weight':'900', stroke:'#3b2a12', 'stroke-width':1.6,
    'paint-order':'stroke' }, g);
  t.textContent = 'LV ' + lvl;
  zet(t, 'lvlTekst', 1300, 120);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1500);
}

// Het doel bereiken is HET moment van het potje. Dat mag je zien: het doel
// barst open met stralen, ringen en een regen van vonken.
function spawnGoal(svg, x, y, winner) {
  const g = el('g', { class:'goalfx', transform:\`translate(\${x},\${y})\` }, svg);
  const kleur = winner === 'p1' ? '#93c5fd' : '#fca5a5';
  const zet = (e, naam, duur, delay) => { e.style.animation = \`\${naam} \${duur}ms ease-out \${delay || 0}ms forwards\`; return e; };
  zet(el('circle', { cx:0, cy:0, r:30, fill:'#fff' }, g), 'goalFlits', 700);
  for (let i = 0; i < 14; i++) {
    const a = i * (360 / 14);
    // De draaiing zit in een wrapper-<g>; de straal zelf schaalt alleen uit
    // z'n voet omhoog. Zo hoeft de CSS geen transform-origin in bord-
    // coördinaten te raden (die verwijst bij SVG naar de viewBox, niet naar
    // het punt waar de groep staat).
    const wrap = el('g', { transform:\`rotate(\${a})\` }, g);
    zet(el('path', { class:'goal-straal', d:'M -5 0 L 0 -120 L 5 0 Z', fill:kleur, opacity:0.85 }, wrap), 'goalStraal', 1100, i * 22);
  }
  for (let i = 0; i < 4; i++) {
    zet(el('circle', { cx:0, cy:0, r:26, fill:'none', stroke:'#fde047', 'stroke-width':5 }, g), 'goalRing', 1200, i * 170);
  }
  for (let i = 0; i < 16; i++) {
    const a = i * 22.5;
    const v = el('circle', { cx:0, cy:0, r:4, fill: i % 2 ? '#fde047' : '#fff' }, g);
    v.style.setProperty('--a', a + 'deg');
    zet(v, 'goalVonk', 1000, 120 + i * 25);
  }
  const t = el('text', { x:0, y:-58, 'font-size':34, 'text-anchor':'middle', fill:'#fde047',
    'font-family':"'Fredoka', sans-serif", 'font-weight':'900', stroke:'#2a1a06', 'stroke-width':2,
    'paint-order':'stroke' }, g);
  t.textContent = tr('DOEL!', 'GOAL!');
  zet(t, 'goalTekst', 1600, 200);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1900);
}

// Omsingeld: geen vrij buurpunt meer én een vijand ernaast, dus direct KO —
// zonder gevecht, zonder draaischijf. Dat is de meest eigenzinnige regel van
// Duel en die verdient z'n eigen beeld: acht punten die van alle kanten naar
// binnen schieten en dichtklappen, met een ring die meekrimpt.
function spawnOmsingeld(svg, x, y) {
  // Iets omhoog: het figuur staat mét z'n voeten op het punt, dus het
  // midden van z'n lijf ligt hoger dan de knoop zelf.
  const g = el('g', { class:'omfx', transform:\`translate(\${x},\${y - 22})\` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = \`\${naam} \${duur}ms cubic-bezier(.55,0,.35,1) \${delay || 0}ms forwards\`; return e; };
  // Ring die dichtklapt
  zet(el('circle', { cx:0, cy:0, r:42, fill:'none', stroke:'#fca5a5', 'stroke-width':4, 'stroke-dasharray':'7 6' }, g), 'omRing', 520);
  // Punten die van alle kanten naar binnen schieten
  for (let i = 0; i < 8; i++) {
    const a = i * 45;
    const wrap = el('g', { transform:\`rotate(\${a})\` }, g);
    const p = el('path', { class:'om-punt', d:'M 0 -54 L 5.5 -72 L -5.5 -72 Z', fill:'#ef4444' }, wrap);
    zet(p, 'omPunt', 460, i * 18);
  }
  // Klap op het moment dat alles samenkomt
  zet(el('circle', { cx:0, cy:0, r:9, fill:'#fff' }, g), 'omKlap', 420, 430);
  zet(el('circle', { cx:0, cy:0, r:16, fill:'none', stroke:'#fecaca', 'stroke-width':5 }, g), 'omGolf', 500, 470);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1100);
}

// Evolueren is de grootste verandering die een figuur kan doormaken, dus dat
// mag je zien: een kolom licht die uit de grond omhoog schiet, ringen die
// meestijgen en sterren die eruit spatten.
function spawnEvolutie(svg, x, y, owner) {
  const kleur = owner === 'p1' ? '#93c5fd' : '#fca5a5';
  const g = el('g', { class:'evofx', transform:\`translate(\${x},\${y})\` }, svg);
  const zet = (e, naam, duur, delay) => { e.style.animation = \`\${naam} \${duur}ms ease-out \${delay || 0}ms forwards\`; return e; };
  zet(el('ellipse', { cx:0, cy:7, rx:34, ry:14, fill:kleur, opacity:0.5 }, g), 'evoPlas', 900);
  // lichtkolom
  zet(el('path', { class:'evo-kolom', d:'M -22 8 L -13 -96 L 13 -96 L 22 8 Z', fill:'url(#gEvoLicht)' }, g), 'evoKolom', 1000);
  for (let i = 0; i < 3; i++) {
    zet(el('ellipse', { cx:0, cy:7, rx:30, ry:12, fill:'none', stroke:kleur, 'stroke-width':3.5 }, g), 'evoRing', 950, i * 190);
  }
  for (let i = 0; i < 10; i++) {
    const a = i * 36;
    const s = el('path', { d:'M 0 -9 L 2.6 -2.6 L 9 0 L 2.6 2.6 L 0 9 L -2.6 2.6 L -9 0 L -2.6 -2.6 Z', fill:'#fff7d6' }, g);
    s.style.setProperty('--a', a + 'deg');
    zet(s, 'evoSter', 900, 120 + i * 32);
  }
  zet(el('circle', { cx:0, cy:-18, r:14, fill:'#ffffff' }, g), 'evoFlits', 620, 380);
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1500);
}

// Een ability die afgaat: een gekleurde golf die van het punt af rolt. Kort en
// klein, want dit gebeurt vaak — het mag opvallen zonder in de weg te zitten.
function spawnAura(svg, x, y, soort) {
  const kleur = soort === 'raise' ? '#a78bfa' : '#7dd3fc';
  const g = el('g', { class:'aurafx', transform:\`translate(\${x},\${y})\` }, svg);
  for (let i = 0; i < 3; i++) {
    const r = el('ellipse', { cx:0, cy:6, rx:20, ry:8, fill:'none', stroke:kleur, 'stroke-width':3 }, g);
    r.style.animation = \`auraGolf 780ms ease-out \${i * 150}ms forwards\`;
    r.style.transformBox = 'fill-box'; r.style.transformOrigin = 'center';
  }
  const ster = el('path', { d:'M 0 -10 L 3 -3 L 10 0 L 3 3 L 0 10 L -3 3 L -10 0 L -3 -3 Z', fill:kleur }, g);
  ster.style.transformBox = 'fill-box'; ster.style.transformOrigin = 'center';
  ster.setAttribute('transform', 'translate(0,-34)');
  ster.style.animation = 'auraSter 900ms ease-out forwards';
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 1200);
}

function spawnFX(x, y, kind, extra) {
  if (animOff()) return;
  const svg = document.getElementById('board');
  if (kind === 'omsingeld') { spawnOmsingeld(svg, x, y); return; }
  if (kind.startsWith('evolutie:')) { spawnEvolutie(svg, x, y, kind.slice(9)); return; }
  if (kind.startsWith('aura:')) { spawnAura(svg, x, y, kind.slice(5)); return; }
  if (kind.startsWith('inslag:')) { spawnImpact(svg, x, y, kind.slice(7)); return; }
  if (kind.startsWith('level:')) { spawnLevelUp(svg, x, y, kind.slice(6)); return; }
  if (kind.startsWith('goal:')) { spawnGoal(svg, x, y, kind.slice(5)); return; }
  if (kind === 'ziel') { spawnZiel(svg, x, y, extra); return; }
  const g = el('g', {}, svg);
  const n = kind === 'poof' ? 4 : 7;
  for (let i = 0; i < n; i++) {
    const a = (Math.PI * 2 * i) / n + Math.random() * 0.5;
    const col = kind === 'poof' ? 'rgba(210,210,225,0.85)' : (i % 2 ? '#fde047' : '#f87171');
    const c = el('circle', { cx: x + Math.cos(a) * 6, cy: y + Math.sin(a) * 4, r: kind === 'poof' ? 2.2 : 3, fill: col }, g);
    c.style.transformBox = 'fill-box'; c.style.transformOrigin = 'center';
    c.style.animation = (kind === 'poof' ? 'fxPoof .4s' : 'fxBurst .55s') + ' ease-out forwards';
    c.style.animationDelay = (i * 0.02) + 's';
  }
  setTimeout(() => { if (g.parentNode) g.parentNode.removeChild(g); }, 800);
}

function renderAll() { renderBoard(); renderBench(); renderPC(); renderPlateCards(); renderTurnBanner(); renderPlates(); flushFX(); }

// Tik = actie, vasthouden (450 ms) = figuur-info. Werkt met muis én aanraking;
// bewegen tijdens het vasthouden annuleert, zodat scrollen niet per ongeluk de
// info-kaart opent.
function bindUnitGestures(g, uid, onTap) {
  let timer = null, longFired = false, sx = 0, sy = 0;
  const start = (e) => {
    longFired = false;
    const p = e.touches ? e.touches[0] : e;
    sx = p.clientX; sy = p.clientY;
    timer = setTimeout(() => { longFired = true; Audio_.buzz(20); showUnitInfo(uid); }, 450);
  };
  const move = (e) => {
    if (!timer) return;
    const p = e.touches ? e.touches[0] : e;
    if (Math.abs(p.clientX - sx) > 12 || Math.abs(p.clientY - sy) > 12) { clearTimeout(timer); timer = null; }
  };
  const cancel = () => { if (timer) { clearTimeout(timer); timer = null; } };
  g.addEventListener('pointerdown', start);
  g.addEventListener('pointermove', move);
  g.addEventListener('pointerup', cancel);
  g.addEventListener('pointercancel', cancel);
  g.addEventListener('pointerleave', cancel);
  g.addEventListener('click', e => {
    e.stopPropagation(); cancel();
    if (longFired) { longFired = false; return; }   // lang indrukken telt niet als tik
    (onTap || (() => onUnitTap(uid)))();
  });
}

function onBenchTap(uid) {
  if (state.over || state.locked) return; const u = state.units[uid];
  if (state.pendingPlate && state.pendingPlate.stage === 1 && state.pendingPlate.key === 'longthrow') {
    if (u.owner !== state.turn) { sfx('denied'); return; }
    if (u.status.includes('wait')) { sfx('denied'); toast(tr('Die heeft nog Wacht', 'That one still has Wait')); return; }
    if (!state.bench[state.turn].includes(uid)) { sfx('denied'); return; }
    state.pendingPlate.uid = uid; state.pendingPlate.stage = 2;
    state.legalTargets = longThrowTargets(state.turn);
    toast(tr('Verworp: kies een vak naast je entry', 'Long Toss: pick a point next to your entry'));
    renderAll(); return;
  }
  if (state.pendingPlate && state.pendingPlate.stage === 1 && state.pendingPlate.key === 'clearwait') {
    if (u.owner === state.turn && u.status.includes('wait')) { usePlate(state.turn, state.pendingPlate.idx, uid); return; }
  }
  if (state.pendingPlate && state.pendingPlate.stage === 2 && state.pendingPlate.key === 'pokeswitch') {
    if (u.owner === state.turn && state.bench[state.turn].includes(uid) && !u.status.includes('wait')) {
      usePlate(state.turn, state.pendingPlate.idx, uid); return;
    }
  }
  if (u.owner !== state.turn) { sfx('denied'); hint('Dit is niet jouw figuur'); return; }
  if (u.status.includes('wait')) { sfx('denied'); toast(tr(\`\${unitName(u.defKey)} herstelt nog — vanaf je volgende beurt inzetbaar\`, \`\${unitName(u.defKey)} is still recovering — ready from your next turn\`)); return; }
  if (state.actionsLeft <= 0) { sfx('denied'); hint(tr('Je hebt je zet al gedaan — tik op Einde beurt', 'You already moved — tap End turn')); return; }

  if (state.pendingDeploy === uid) { state.pendingDeploy = null; state.legalTargets = new Set(); }
  else {
    state.selected = null; state.pendingDeploy = uid; state.legalTargets = deployTargets(u);
    if (state.legalTargets.size === 0) { state.pendingDeploy = null; sfx('denied'); toast(tr('Je entry-punten zijn geblokkeerd — maak er eerst één vrij', 'Your entry points are blocked — free one first')); }
    else { sfx('select'); hint(\`Inzetten kost 1 MP; met de rest mag \${unitName(u.defKey)} meteen doorlopen\`); }
  }
  renderAll();
}

function onNodeTap(nodeKey) {
  if (state.over || state.locked || !state.legalTargets.has(nodeKey)) return;
  if (state.pendingPlate && state.pendingPlate.stage === 2) { usePlate(state.turn, state.pendingPlate.idx, state.pendingPlate.uid, nodeKey); return; }
  if (state.pendingPlate) return;
  if (state.pendingDeploy) {
    state.locked = true; const uid = state.pendingDeploy; const u = state.units[uid];
    state.pendingDeploy = null; state.legalTargets = new Set();
    doDeploy(u, nodeKey).then(() => { state.actionsLeft--; state.locked = false; afterAction(); });
    return;
  }
  if (state.selected) {
    state.locked = true; 
    const u = state.units[state.selected];
    const targetUnit = unitAt(nodeKey);

    if (targetUnit && targetUnit.owner !== u.owner) {
      const path = bfs(u.node, nodeKey);
      if (path && path.length > 1) {
        const standNode = path[path.length - 2];
        if (standNode !== u.node) { moveUnit(u, standNode).then(() => { state.actionsLeft--; runCombat(u, targetUnit); }); } 
        else { state.actionsLeft--; runCombat(u, targetUnit); }
      }
      return;
    }

    moveUnit(u, nodeKey).then(() => { 
      const goal = NODES[nodeKey]; if (goal.type==='goal' && goal.owner !== u.owner) { endMatch(u.owner, 'goal'); return; } 
      state.selected = null; state.legalTargets = new Set(); state.actionsLeft--; state.locked = false; afterAction(); 
    });
  }
}

function moveUnit(u, end) {
  return new Promise(res => {
    const path = bfs(u.node, end, canPhase(u));
    if (!path || path.length < 2) { u.node = end; renderAll(); res(); return; }
    if (animOff()) { u.node = path[path.length - 1]; renderAll(); res(); return; }
    state.animating = u.uid;
    renderAll(); // één keer: statische figuur verbergen, daarna alleen de ghost bewegen
    const svg = document.getElementById('board');
    const shadow = el('ellipse', { cx:0, cy:0, rx:21, ry:7.5, fill:'rgba(0,0,0,0.45)' }, svg);
    const ghost = unitGroup(u, false); ghost.style.transition = 'none'; svg.appendChild(ghost);
    let seg = 0;
    const hopOne = () => {
      const A = NODES[path[seg]], B = NODES[path[seg + 1]];
      const dur = 250 * (animScale() || 1);
      sfx('hop');
      let t = 0, last = performance.now();
      const frame = (now) => {
        // Tijdstap klemmen: bij haperende frames vertraagt de sprong i.p.v. overslaan
        t = Math.min(1, t + Math.min((now - last) / dur, 0.16));
        last = now;
        const gx = A.x + (B.x - A.x) * t, gy = A.y + (B.y - A.y) * t;   // grondpositie
        const lift = Math.sin(Math.PI * t) * 24;                          // boogje
        const ds = depthScale(gy);                                        // dieper op het bord = kleiner
        let sy = 1, sx = 1;
        if (t > 0.88) { const k = (t - 0.88) / 0.12; sy = 1 - 0.14 * k; sx = 1 + 0.09 * k; } // landing-squash
        ghost.setAttribute('transform', \`translate(\${gx},\${gy - lift}) scale(\${(sx*ds).toFixed(3)},\${(sy*ds).toFixed(3)})\`);
        const sh = (1 - (lift / 24) * 0.45) * ds;                          // schaduw krimpt op het hoogste punt
        shadow.setAttribute('cx', gx); shadow.setAttribute('cy', gy + 11 * ds);
        shadow.setAttribute('rx', 21 * sh); shadow.setAttribute('ry', 7.5 * sh);
        shadow.setAttribute('fill', \`rgba(0,0,0,\${0.45 * (0.55 + 0.45 * sh)})\`);
        if (t < 1) requestAnimationFrame(frame);
        else {
          spawnFX(B.x, B.y + 9, 'poof');
          u.node = path[seg + 1]; seg++;
          if (seg < path.length - 1) hopOne();
          else {
            // Ook hier kan de SVG tussendoor herbouwd zijn
            if (ghost.parentNode) ghost.parentNode.removeChild(ghost);
            if (shadow.parentNode) shadow.parentNode.removeChild(shadow);
            state.animating = null; renderAll(); res();
          }
        }
      };
      requestAnimationFrame(frame);
    };
    hopOne();
  });
}

function bfs(start, end, phase) {
  const q = [[start]], seen = new Set([start]);
  while (q.length) { const p = q.shift(); const last = p[p.length-1]; if (last === end) return p; for (const n of ADJ[last]) { if (seen.has(n)) continue; if (n !== end && unitAt(n) && !phase) continue; seen.add(n); q.push([...p, n]); } } return null;
}

function onUnitTap(uid) {
  if (state.over || state.locked) return; const u = state.units[uid];
  if (state.pendingPlate && state.pendingPlate.stage === 1) {
    if (u.node && state.legalTargets.has(u.node)) {
      const pp = state.pendingPlate;
      if (pp.key === 'hurdle') {
        // Sprong: over een AANGRENZENDE figuur heen naar het punt erachter
        pp.uid = uid; pp.stage = 2;
        const over = new Set();
        for (const n of ADJ[u.node]) {
          if (!unitAt(n)) continue;                      // je springt alleen over iemand heen
          for (const beyond of ADJ[n]) {
            if (beyond === u.node || unitAt(beyond)) continue;
            // moet in dezelfde richting liggen, dus niet terug naar je startpunt
            over.add(beyond);
          }
        }
        state.legalTargets = over;
        if (!over.size) { state.pendingPlate = null; state.legalTargets = new Set(); toast(tr('Er staat niemand om overheen te springen', 'Nobody to jump over')); }
        else toast(tr('Sprong: kies waar hij landt', 'Leap: pick where it lands'));
        renderAll(); return;
      }
      if (pp.key === 'swapspot') {
        // Stellingwissel: kies de tweede eigen figuur
        pp.uid = uid; pp.stage = 2;
        state.legalTargets = new Set(Object.values(state.units)
          .filter(o => o.owner === state.turn && o.node && o.uid !== uid).map(o => o.node));
        if (!state.legalTargets.size) { state.pendingPlate = null; state.legalTargets = new Set(); toast(tr('Je hebt maar één figuur op het veld', 'You only have one figure on the field')); }
        else toast(tr('Stellingwissel: kies de tweede figuur', 'Swap Spots: pick the second figure'));
        renderAll(); return;
      }
      if (pp.key === 'pokeswitch') {
        pp.uid = uid; pp.stage = 2;
        state.legalTargets = new Set();
        toast(tr('Wisselplaats: kies een figuur op je zijlijn', 'Bench Swap: pick a figure on your bench'));
        renderAll(); return;
      }
      if (pp.key === 'clearwait') {
        if (!u.status.includes('wait')) { toast(tr('Dit figuur heeft geen Wacht', 'This figure does not have Wait')); return; }
        usePlate(state.turn, pp.idx, uid); return;
      }
      usePlate(state.turn, pp.idx, uid); return;
    }
    toast(tr('Ongeldig doelwit', 'Invalid target')); return;
  }
  // Tweede stap van Stellingwissel: de andere eigen figuur aantikken
  if (state.pendingPlate && state.pendingPlate.stage === 2 && state.pendingPlate.key === 'swapspot') {
    if (u.node && state.legalTargets.has(u.node)) { usePlate(state.turn, state.pendingPlate.idx, uid); return; }
    toast(tr('Kies een van je eigen figuren', 'Pick one of your own figures')); return;
  }
  if (u.owner === state.turn && u.node) {
    if (state.actionsLeft<=0) { hint(tr('Je hebt je zet al gedaan — tik op Einde beurt', 'You already moved — tap End turn')); sfx('denied'); return; }
    if (u.status.includes('wait')) { hint(\`\${unitName(u.defKey)} heeft Wacht — overgeslagen tot na deze beurt\`); sfx('denied'); return; }
    if (u.status.includes('sleep')) { hint(\`\${unitName(u.defKey)} slaapt — zet een bondgenoot ernaast om hem te wekken\`); sfx('denied'); return; }
    state.pendingDeploy = null; state.selected = (state.selected===uid) ? null : uid;
    state.legalTargets = state.selected ? legalMoves(u) : new Set();
    if (state.selected) {
      sfx('select');
      if (state.legalTargets.size === 0) hint(\`\${unitName(u.defKey)} kan nergens heen — alle buurpunten zijn bezet\`);
      else if (S('showHints')) hint(unitHint(u));
    }
    renderAll(); return;
  }
  if (u.owner !== state.turn && u.node) {
    if (state.selected && state.legalTargets.has(u.node)) { onNodeTap(u.node); return; }
    // Niets geselecteerd? Dan wil je die vijand waarschijnlijk bekíjken (Duel-gewoonte)
    if (!state.selected) { showUnitInfo(uid); return; }
    sfx('denied');
    hint('Te ver weg — deze vijand ligt buiten het bereik van je figuur');
  }
}

// Hint-regel (respecteert de instelling "Hints tonen"); waarschuwingen die je
// écht moet zien lopen gewoon via toast().
function hint(msg) { if (S('showHints') && msg) toast(msg); }

// ===== Figuur-info tijdens het duel =====
// In Duel houd je een figuur vast om z'n data te zien. Hier: lang indrukken op
// een figuur op het bord, of een vijand aantikken zonder eigen selectie.
// Cruciaal is dat de schijf HIER de status meerekent — je ziet dus precies wat
// brand of verlamming van je wiel heeft overgelaten.
const STATUS_NL = { poison:'Vergiftigd', badlypoison:'Zwaar vergiftigd', burn:'Brandend', paralysis:'Verlamd', confusion:'Verward', sleep:'Slaapt', frozen:'Bevroren', curse:'Vervloekt', bulwark:'Bolwerk actief', wait:'Wacht' };
const STATUS_EN = { poison:'Poisoned', badlypoison:'Badly poisoned', burn:'Burned', paralysis:'Paralyzed', confusion:'Confused', sleep:'Asleep', frozen:'Frozen', curse:'Cursed', bulwark:'Bulwark active', wait:'Wait' };
function statusLabel(s) { return (isEn() ? STATUS_EN : STATUS_NL)[s] || s; }
function showUnitInfo(uid) {
  const u = state.units[uid]; if (!u) return;
  const def = UNIT_DEFS[u.defKey];
  document.getElementById('info-art').innerHTML = unitVisual(u.defKey, u.owner, 64);
  document.getElementById('info-name').textContent = unitName(u.defKey);
  const side = u.owner === 'p1' ? t('combat.you') : (state.mode === 'solo' ? t('combat.foe') : t('hud.p2'));
  const mp = u.node ? effMP(u) : def.mp;
  const st = u.status.map(statusLabel);
  document.getElementById('info-sub').textContent =
    \`\${side} · \${facName(def.fac)} · Level \${u.level} · \${mp} MP\${st.length ? ' · ' + st.join(', ') : ''}\`;
  const shown = applyStatus(u.slots, u.status, u);   // schijf zoals hij NÚ draait
  renderDisk('info-disk', shown, u.defKey);
  const sum = {};
  for (const s of shown) {
    const k = s.k === 'white' || s.k === 'gold' ? \`\${s.k}-\${s.v}\` : (s.k === 'purple' ? \`purple-\${s.effect}\` : s.k);
    sum[k] = (sum[k] || 0) + 1;
  }
  const NL = { red: t('miss'), blue: t('block') };
  let pills = Object.entries(sum).map(([k, n]) => {
    const [kind, val] = k.split('-');
    const label = kind === 'white' ? \`\${val} dmg\` : kind === 'gold' ? \`★ \${val} dmg\` : kind === 'purple' ? val : NL[kind];
    return \`<span class="slot-pill" style="color:\${TXT[kind]};background:\${COLORS[kind]}">\${n}× \${label}</span>\`;
  }).join('');
  const ab = def.ability;
  pills += ab ? \`<div class="ability-line"><span class="ability-tag">✦ \${abilityName(ab)}</span> \${abilityDesc(ab)}</div>\` : '';
  if (u.status.some(s => !['wait','bulwark'].includes(s))) pills += \`<div class="ability-line" style="color:#fca5a5">\${t('disk.status')}</div>\`;
  document.getElementById('info-slots').innerHTML = pills;
  document.getElementById('info-overlay').classList.add('active');
  sfx('select');
}

// Korte uitleg bij het selecteren van een figuur: wat kan hij nu?
function unitHint(u) {
  const mp = effMP(u), name = unitName(u.defKey);
  const bits = [\`\${name}: \${mp} MP\`];
  if (!state.firstMoveDone) bits.push(tr('(eerste zet kost 1 MP extra)', '(first move costs 1 extra MP)'));
  const ab = abilityOf(u);
  if (ab && abilityMPBonus(u) > 0) bits.push(\`· \${abilityName(ab)} \${tr('actief', 'active')}\`);
  else if (ab === 'command' || ab === 'pack') bits.push(\`· \${abilityName(ab)} \${tr('werkt naast een bondgenoot', 'works next to an ally')}\`);
  const st = u.status.filter(s => !['wait','bulwark'].includes(s));
  if (st.length) bits.push(\`· \${statusLabel(st[0])}\`);
  return bits.join(' ');
}

// Ability-MP: +1 als deze unit 'pack' heeft en naast een bondgenoot staat,
// of naast een bondgenoot met 'command' (Aanvoerder) staat.
// Zijn ALLE startpunten van deze speler door de tegenstander bezet? Dan kan hij
// niets meer inzetten — in Duel een erkende (en met kaarten gecounterde) situatie.
function entriesBlockedBy(player) {
  const mine = Object.entries(NODES).filter(([, n]) => n.type === 'entry' && n.owner === player);
  if (!mine.length) return false;
  return mine.every(([k]) => { const o = unitAt(k); return o && o.owner !== player; });
}

function abilityMPBonus(u) {
  if (!u.node) return 0;
  const neighbours = [...ADJ[u.node]].map(unitAt).filter(o => o && o.owner === u.owner);
  let bonus = 0;
  if (abilityOf(u) === 'pack' && neighbours.length) bonus += 1;
  if (abilityOf(u) === 'swiftswim' && neighbours.some(o => UNIT_DEFS[o.defKey] && UNIT_DEFS[o.defKey].fac === 'Water')) bonus += 1;
  if (neighbours.some(o => abilityOf(o) === 'command')) bonus += 1;
  return bonus;
}

function effMP(u) {
  // Tegenaanval: extra bewegingsruimte zolang je aanvoer geblokkeerd is
  const counter = (state.counterAttack && state.counterAttack[u.owner] && entriesBlockedBy(u.owner)) ? 1 : 0;
  let mp = Math.min(3, UNIT_DEFS[u.defKey].mp + (state.mpBonus[u.uid] || 0) + (state.warcry[u.owner] ? 1 : 0) + abilityMPBonus(u) + counter);
  if (!state.firstMoveDone) mp = Math.max(1, mp - 1); // Duel: allereerste zet van het potje MP-1
  return mp;
}

// Duel: deployen via entry kost 1 MP; resterende MP mag direct doorbewegen (alleen naar lege punten)
function deployTargets(u) {
  const budget = effMP(u) - 1;
  const out = new Set();
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== u.owner || unitAt(k)) continue;
    out.add(k);
    const seen = new Map([[k, 0]]), q = [[k, 0]];
    while (q.length) { const [nd, d] = q.shift(); if (d >= budget) continue; for (const nx of ADJ[nd]) { if (unitAt(nx)) continue; if (seen.has(nx) && seen.get(nx) <= d + 1) continue; seen.set(nx, d + 1); out.add(nx); q.push([nx, d + 1]); } }
  }
  return out;
}

function doDeploy(u, target) {
  let entry = null, best = Infinity;
  for (const [k, n] of Object.entries(NODES)) {
    if (n.type !== 'entry' || n.owner !== u.owner || unitAt(k)) continue;
    if (k === target) { entry = k; best = 0; break; }
    const p = bfs(k, target); if (p && p.length - 1 < best) { best = p.length - 1; entry = k; }
  }
  u.node = entry;
  state.bench[u.owner] = state.bench[u.owner].filter(x => x !== u.uid);
  sfx('deploy');
  // De poort scheurt open op het startpunt en het figuur klimt eruit
  addPortal(entry, u.owner);
  const verder = () => {
    if (target === entry || !entry) { onDeployComplete(u); renderAll(); return Promise.resolve(); }
    return moveUnit(u, target).then(() => onDeployComplete(u));
  };
  return riseUnit(u).then(verder);
}

// Inzet-abilities (triggeren zodra de unit op het veld staat)
function onDeployComplete(u) {
  const ab = abilityOf(u);
  if (ab === 'blessing' && u.node) {
    // Zegenende Aura: wis status van aangrenzende bondgenoten. Je zag alleen een
    // regeltje tekst; nu golft er een ring van de bron naar elke bondgenoot die
    // er iets aan heeft, zodat je ZIET wie er geraakt wordt.
    queueFX(NODES[u.node].x, NODES[u.node].y, 'aura:blessing');
    for (const n of ADJ[u.node]) {
      const o = unitAt(n);
      if (o && o.owner === u.owner) {
        const had = o.status.some(s => s !== 'wait' && s !== 'bulwark');
        o.status = o.status.filter(s => s === 'wait' || s === 'bulwark');
        if (had) queueFX(NODES[n].x, NODES[n].y, 'aura:blessing');
      }
    }
    toast(\`\${unitName(u.defKey)}: \${abilityName('blessing')}\`);
  } else if (ab === 'raise') {
    // Zielenoproep: wis Wacht-status van je eigen bank (sneller herinzetten)
    let geraakt = 0;
    for (const uid of state.bench[u.owner]) {
      const o = state.units[uid];
      if (o.status.includes('wait')) geraakt++;
      o.status = o.status.filter(s => s !== 'wait');
    }
    if (u.node) queueFX(NODES[u.node].x, NODES[u.node].y, 'aura:raise');
    toast(\`\${unitName(u.defKey)}: \${abilityName('raise')}\${geraakt ? tr(\` — \${geraakt} figuur\${geraakt === 1 ? '' : 'en'} weer inzetbaar\`, \` — \${geraakt} figure\${geraakt === 1 ? '' : 's'} ready again\`) : ''}\`);
  }
}

function legalMoves(u) {
  if (u.status.includes('wait') || u.status.includes('sleep')) return new Set();
  const frozen = u.status.includes('frozen');
  const phase = canPhase(u);   // Sluipen/Vleugelslag: dwars door bezette punten
  const mp = effMP(u);
  const out = new Set(), seen = new Map([[u.node, 0]]), q = [[u.node, 0]];
  while (q.length) {
    const [n, d] = q.shift(); if (d >= mp) continue;
    for (const nx of ADJ[n]) {
      const occ = unitAt(nx);
      if (occ && occ.owner !== u.owner) {
        if (!frozen) out.add(nx);                             // aanvallen op de vijand
        if (phase && (!seen.has(nx) || seen.get(nx) > d+1)) { seen.set(nx, d+1); q.push([nx, d+1]); } // eroverheen
        continue;
      }
      if (occ) {                                              // eigen unit: nooit landen
        if (phase && (!seen.has(nx) || seen.get(nx) > d+1)) { seen.set(nx, d+1); q.push([nx, d+1]); }
        continue;
      }
      if (seen.has(nx) && seen.get(nx) <= d+1) continue;
      seen.set(nx, d+1); out.add(nx); q.push([nx, d+1]);
    }
  }
  return out;
}

function unitAt(k) { return Object.values(state.units).find(u => u.node === k); }

function occupantAfterMove(node, mover, dest) {
  if (node === dest) return mover;
  if (mover && mover.node && node === mover.node) return null;
  return unitAt(node);
}

function wouldSurround(mover, dest) {
  if (!mover || !dest || !state) return [];
  const victims = [];
  for (const u of Object.values(state.units)) {
    if (!u.node || u.owner === mover.owner || u.uid === mover.uid) continue;
    if (u.node === dest) continue;
    const adj = ADJ[u.node] || [];
    if (!adj.length) continue;
    let allEnemy = true;
    for (const n of adj) {
      const occ = occupantAfterMove(n, mover, dest);
      if (!(occ && occ.owner === mover.owner)) { allEnemy = false; break; }
    }
    if (allEnemy) victims.push(u);
  }
  return victims;
}

function checkSurround() {
  // Duel-regel, letterlijk: "A Pokémon will be knocked out if the OPPONENT'S
  // Pokémon are occupying all the points a Pokémon could possibly move to" —
  // en "this requires ALL adjacent spaces to be filled with your Pokémon".
  // Wij keken alleen of er géén vrij buurpunt was plus mínstens één vijand
  // ernaast. Daardoor kon je je eigen figuur doodmaken door hem met je eigen
  // poppetjes in te sluiten. Nu moet ELK buurpunt door de VIJAND bezet zijn.
  // (Ingesloten raken door je eigen figuren mag dus wel — dan kun je alleen
  // niet meer bewegen, en dat is een tactisch probleem, geen KO.)
  for (const u of Object.values(state.units)) {
    if (!u.node) continue;
    const adj = [...ADJ[u.node]];
    if (!adj.every(n => { const o = unitAt(n); return o && o.owner !== u.owner; })) continue;
    const vanaf = u.node;
    queueFX(NODES[vanaf].x, NODES[vanaf].y, 'omsingeld');
    koUnit(u);
    zielNaarHC(u, vanaf);
    toast(tr(\`\${unitName(u.defKey)} omsingeld — KO!\`, \`\${unitName(u.defKey)} surrounded — KO!\`));
  }
}

function afterAction() {
  state.firstMoveDone = true;
  checkSurround();
  maybeAutoEndTurn();
  if (state.actionsLeft<=0 && !hasAnyAction(state.turn)) { endMatch(state.turn==='p1'?'p2':'p1', 'lockout'); return; }
  renderAll(); if (state.mode === 'solo' && state.turn === 'p2' && state.actionsLeft <= 0 && !state.over) { setTimeout(endTurn, 600); }
}

// In Duel is er geen End Turn-knop: zodra je je zet hebt gedaan, gaat de beurt
// door. Je kaart speel je dus VOOR je zet. Uit te zetten bij Instellingen.
function maybeAutoEndTurn() {
  if (!S('autoEndTurn')) return;
  if (state.over || state.actionsLeft > 0 || state.pendingPlate) return;
  if (state.mode === 'solo' && state.turn !== 'p1') return;   // AI regelt z'n eigen beurt al
  setTimeout(() => {
    if (state.over || state.locked || state.actionsLeft > 0 || state.pendingPlate) return;
    endTurn();
  }, Math.max(300, 900 * (animScale() || 0.4)));
}

function hasAnyAction(player) {
  const deployable = state.bench[player].some(uid => !state.units[uid].status.includes('wait'));
  if (deployable) { for (const [k,n] of Object.entries(NODES)) if (n.type==='entry' && n.owner===player && !unitAt(k)) return true; }
  for (const u of Object.values(state.units)) {
    if (u.owner !== player || !u.node) continue;
    if (u.status.includes('sleep') || u.status.includes('wait')) continue;
    if (legalMoves(u).size > 0) return true;
  }
  return false;
}

function endTurn() {
  if (state.over || state.locked) return;
  // Sleep geneest via een aangrenzende bondgenoot; frozen geneest sinds sessie 22 ná een gevecht (Duel-regel)
  for (const u of Object.values(state.units)) { if (!u.node) continue; if (u.status.includes('sleep')) { const hasAdj = [...ADJ[u.node]].some(n => { const o = unitAt(n); return o && o.owner === u.owner; }); if (hasAdj) u.status = u.status.filter(s => s!=='sleep'); } }
  // Wacht gaat eraf ná de beurt die het figuur moest overslaan (niet meteen bij toekennen).
  const ending = state.turn;
  const turnN = state.turnN || 0;
  for (const u of Object.values(state.units)) {
    if (u.owner === ending && u.status.includes('wait') && (u.waitTurn ?? -1) < turnN) {
      u.status = u.status.filter(s => s !== 'wait');
    }
  }
  state.turn = ending==='p1'?'p2':'p1';
  state.turnN = turnN + 1;
  state.actionsLeft = 1; state.selected = null; state.pendingDeploy = null; state.legalTargets = new Set();
  state.plateUsed = false; state.pendingPlate = null; state.mpBonus = {}; state.warcry = { p1:false, p2:false };
  for (const u of Object.values(state.units)) u.fx = {};   // plate-effecten gelden 'deze beurt'
  // Shed Skin: wis special conditions aan het begin van jouw beurt
  for (const u of Object.values(state.units)) {
    if (u.owner === state.turn && abilityOf(u) === 'shed') {
      u.status = u.status.filter(s => s === 'wait' || s === 'bulwark');
    }
  }
  // P.C. → zijlijn aan het begin van je beurt (Duel 1:1) — EERST, zodat
  // wie dit beurt door gif KO gaat niet meteen weer op de zijlijn staat.
  while (state.hc[state.turn].length) {
    const uid = state.hc[state.turn].shift();
    state.bench[state.turn].push(uid);
  }
  // Duel: vergiftigd/zwaar vergiftigd op het veld is KO aan het begin van jouw beurt
  for (const u of Object.values(state.units)) {
    if (u.owner !== state.turn || !u.node) continue;
    if (u.status.includes('poison') || u.status.includes('badlypoison')) {
      const vanaf = u.node;
      toast(tr(\`\${unitName(u.defKey)} bezwijkt aan gif\`, \`\${unitName(u.defKey)} succumbs to poison\`));
      koUnit(u);
      zielNaarHC(u, vanaf);
      queueFX(NODES[vanaf].x, NODES[vanaf].y, 'burst');
    }
  }
  sfx('turn');
  renderAll();
  beweegKlasse(document.getElementById('turn-banner'), 'wissel', 700);
  showTurnSplash();
  if (!hasAnyAction(state.turn)) { endMatch(state.turn==='p1'?'p2':'p1', 'lockout'); return; }
  // Waarschuwing zodra je aanvoer is afgesneden: dan kun je niets meer inzetten
  // en moet je elke beurt met wat er staat blijven schuiven. In Duel is dit een
  // erkende situatie (er bestaan kaarten die er speciaal tegen zijn).
  if ((state.mode !== 'solo' || state.turn === 'p1') && entriesBlockedBy(state.turn)) {
    const own = Object.values(state.units).filter(u => u.owner === state.turn && u.node).length;
    toast(own <= 1
      ? tr('Al je startpunten zijn bezet én je hebt nog één figuur — je moet wel bewegen!', 'All your entries are occupied and you have one figure left — you have to move!')
      : tr('Al je startpunten zijn bezet: je kunt niemand inzetten. Maak er eerst één vrij.', 'All your entries are occupied: you cannot send anyone in. Free one first.'));
  }
  if (state.mode === 'solo' && state.turn === 'p2') { setTimeout(aiTurn, Math.max(150, 400 * (animScale() || 0.4))); }
}

const SLOT_COUNT = 96, SLOT_DEG = 3.75;
const COLORS = { white:'#e5e7eb', purple:'#8b5cf6', blue:'#3b82f6', gold:'#fbbf24', red:'#ef4444' };
const TXT = { white:'#000', purple:'#fff', blue:'#fff', gold:'#000', red:'#fff' };

// ===== Disk-iconen (Duel-stijl): elk vaktype z'n eigen glyph =====
function diskEffectGlyph(svg, effect, gx, gy, s) {
  const g = el('g', { transform:\`translate(\${gx},\${gy})\` }, svg);
  const P = (d, fill) => el('path', { d, fill: fill||'#fff', stroke:'rgba(0,0,0,0.55)', 'stroke-width':1, 'stroke-linejoin':'round' }, g);
  const L = (d) => el('path', { d, fill:'none', stroke:'#fff', 'stroke-width':2, 'stroke-linecap':'round', 'stroke-linejoin':'round' }, g);
  switch (effect) {
    case 'poison': case 'badlypoison':
      P(\`M0 \${-s} C \${s*0.8} \${-s*0.1}, \${s*0.55} \${s}, 0 \${s} C \${-s*0.55} \${s}, \${-s*0.8} \${-s*0.1}, 0 \${-s} Z\`, '#bbf7d0');
      el('circle', { cx:s*0.18, cy:s*0.25, r:s*0.28, fill:'rgba(0,0,0,0.28)' }, g);
      if (effect==='badlypoison') { el('path', { d:\`M \${-s*0.35} \${-s*0.15} L \${s*0.3} \${-s*0.15} M \${-s*0.05} \${-s*0.45} L \${-s*0.05} \${s*0.15}\`, stroke:'#4c1d95', 'stroke-width':1.4, 'stroke-linecap':'round' }, g); }
      break;
    case 'burn':
      P(\`M0 \${s} C \${-s} \${s*0.35}, \${-s*0.35} \${-s*0.25}, \${-s*0.05} \${-s} C \${s*0.15} \${-s*0.3}, \${s*0.6} \${-s*0.35}, \${s*0.35} \${s*0.15} C \${s*0.95} \${s*0.1}, \${s*0.55} \${s*0.85}, 0 \${s} Z\`, '#fed7aa');
      break;
    case 'paralysis':
      P(\`M \${s*0.12} \${-s} L \${-s*0.55} \${s*0.12} L \${-s*0.05} \${s*0.12} L \${-s*0.22} \${s} L \${s*0.58} \${-s*0.2} L \${s*0.02} \${-s*0.2} Z\`, '#fef08a');
      break;
    case 'sleep': {
      const t = el('text', { x:0, y:s*0.1, 'font-size':s*2, 'font-family':"'Fredoka',sans-serif", 'font-weight':900, fill:'#fff', stroke:'rgba(0,0,0,0.5)', 'stroke-width':0.8, 'text-anchor':'middle', 'dominant-baseline':'central' }, g); t.textContent='Z'; break;
    }
    case 'confusion':
      L(\`M \${-s*0.55} \${s*0.2} Q \${-s*0.15} \${-s*0.8} \${s*0.5} \${-s*0.25} Q \${s*0.1} \${s*0.6} \${-s*0.3} \${s*0.35}\`);
      el('circle', { cx:s*0.55, cy:-s*0.35, r:s*0.16, fill:'#fff' }, g);
      break;
    case 'frozen':
      L(\`M0 \${-s} L0 \${s} M \${-s*0.87} \${-s*0.5} L \${s*0.87} \${s*0.5} M \${s*0.87} \${-s*0.5} L \${-s*0.87} \${s*0.5}\`);
      break;
    case 'wait':
      el('circle', { cx:0, cy:0, r:s*0.85, fill:'none', stroke:'#fff', 'stroke-width':1.8 }, g);
      el('circle', { cx:0, cy:0, r:s*0.12, fill:'#fff' }, g);
      L(\`M0 0 L0 \${-s*0.55} M0 0 L \${s*0.4} \${s*0.15}\`);
      break;
    default:
      el('circle', { cx:0, cy:0, r:s*0.55, fill:'#fff' }, g);
  }
  return g;
}
function diskShield(svg, gx, gy, s) {
  const g = el('g', { transform:\`translate(\${gx},\${gy})\` }, svg);
  el('path', { d:\`M0 \${-s} L \${s*0.85} \${-s*0.5} L \${s*0.85} \${s*0.15} Q \${s*0.85} \${s*0.82} 0 \${s} Q \${-s*0.85} \${s*0.82} \${-s*0.85} \${s*0.15} L \${-s*0.85} \${-s*0.5} Z\`, fill:'#fff', stroke:'rgba(0,0,0,0.5)', 'stroke-width':1, 'stroke-linejoin':'round' }, g);
  el('path', { d:\`M0 \${-s*0.5} L0 \${s*0.55} M \${-s*0.5} \${-s*0.12} L \${s*0.5} \${-s*0.12}\`, stroke:'#2563eb', 'stroke-width':1.5, 'stroke-linecap':'round' }, g);
  return g;
}
function diskMiss(svg, gx, gy, s) {
  const g = el('g', { transform:\`translate(\${gx},\${gy})\` }, svg);
  el('path', { d:\`M \${-s} \${-s} L \${s} \${s} M \${s} \${-s} L \${-s} \${s}\`, stroke:'#fff', 'stroke-width':2.6, 'stroke-linecap':'round' }, g);
  return g;
}
function diskStars(svg, n, gx, gy, s) {
  const g = el('g', { transform:\`translate(\${gx},\${gy})\` }, svg);
  const w = (n-1)*s*1.5;
  for (let i=0;i<n;i++){ const px=-w/2+i*s*1.5; const t=el('text',{x:px,y:0,'font-size':s*2,fill:'#fde047',stroke:'rgba(0,0,0,0.55)','stroke-width':0.6,'text-anchor':'middle','dominant-baseline':'central'},g); t.textContent='★'; }
  return g;
}

function renderDisk(svgId, slots, defKey) {
  const svg = document.getElementById(svgId); svg.innerHTML = ''; svg.style.transition = 'none'; svg.style.transform = 'rotate(0deg)'; svg.getBoundingClientRect();
  const cx=120, cy=120, R=100, IR=26;
  const uq = svgId.replace(/[^a-zA-Z0-9]/g, '');
  svg.innerHTML = \`<defs>
    <radialGradient id="dHub\${uq}" cx="38%" cy="30%" r="85%"><stop offset="0%" stop-color="#4a4666"/><stop offset="55%" stop-color="#1a1826"/><stop offset="100%" stop-color="#0a0910"/></radialGradient>
    <linearGradient id="dRim\${uq}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#fde68a"/><stop offset="40%" stop-color="#b45309"/><stop offset="65%" stop-color="#fbbf24"/><stop offset="100%" stop-color="#713f12"/></linearGradient>
  </defs>\`;
  // Metalen buitenrand met tick-markeringen per slot
  el('circle', { cx, cy, r: R+17, fill:'#0b0912' }, svg);
  el('circle', { cx, cy, r: R+14, fill:'none', stroke:\`url(#dRim\${uq})\`, 'stroke-width':7 }, svg);
  el('circle', { cx, cy, r: R+9.5, fill:'none', stroke:'rgba(255,255,255,0.28)', 'stroke-width':1 }, svg);
  el('circle', { cx, cy, r: R+4, fill:'#12101e' }, svg);
  for (let k = 0; k < SLOT_COUNT; k += 8) {
    const a = (k*SLOT_DEG - 90)*Math.PI/180;
    el('line', { x1:cx+(R+4)*Math.cos(a), y1:cy+(R+4)*Math.sin(a), x2:cx+(R+10)*Math.cos(a), y2:cy+(R+10)*Math.sin(a), stroke:'rgba(255,255,255,0.45)', 'stroke-width':1.6 }, svg);
  }
  // Wedge-helper voor ringsegmenten (buitenradius ro, binnenradius ri)
  const seg = (ro, ri, sA, eA, large) => {
    const x1=cx+ro*Math.cos(sA), y1=cy+ro*Math.sin(sA), x2=cx+ro*Math.cos(eA), y2=cy+ro*Math.sin(eA);
    const ix1=cx+ri*Math.cos(sA), iy1=cy+ri*Math.sin(sA), ix2=cx+ri*Math.cos(eA), iy2=cy+ri*Math.sin(eA);
    return \`M \${ix1} \${iy1} L \${x1} \${y1} A \${ro} \${ro} 0 \${large} 1 \${x2} \${y2} L \${ix2} \${iy2} A \${ri} \${ri} 0 \${large} 0 \${ix1} \${iy1} Z\`;
  };
  // Gebogen move-naam langs de buitenrand van een wedge (leesbaar: onderin gespiegeld)
  let arcSeq = 0;
  const nameArc = (name, sA, eA, mA, color) => {
    const nr = R - 10.5, pad = 0.10;
    const id = \`nm\${uq}\${arcSeq++}\`;
    const flip = Math.sin(mA) > 0;   // onderste helft: pad omkeren zodat de tekst rechtop staat
    const a1 = flip ? eA - pad : sA + pad, a2 = flip ? sA + pad : eA - pad;
    const p = el('path', { id, d:\`M \${cx+nr*Math.cos(a1)} \${cy+nr*Math.sin(a1)} A \${nr} \${nr} 0 0 \${flip?0:1} \${cx+nr*Math.cos(a2)} \${cy+nr*Math.sin(a2)}\`, fill:'none' }, svg);
    const t = el('text', { 'font-size':9.5, 'font-family':"'Fredoka', sans-serif", 'font-weight':'700', fill:color, 'letter-spacing':'0.04em' }, svg);
    const tp = el('textPath', { href:\`#\${id}\`, startOffset:'50%', 'text-anchor':'middle' }, t);
    tp.textContent = name;
  };
  const merged = []; let i = 0;
  while (i < slots.length) { let j = i; while (j < slots.length && slots[i].k===slots[j].k && slots[i].v===slots[j].v && slots[i].stars===slots[j].stars && slots[i].name===slots[j].name) j++; merged.push({ slot: slots[i], start:i, end:j }); i = j; }
  for (const m of merged) {
    const sA = (m.start*SLOT_DEG - 90)*Math.PI/180, eA = (m.end*SLOT_DEG - 90)*Math.PI/180, mA = (sA+eA)/2;
    const large = (m.end-m.start)*SLOT_DEG > 180 ? 1 : 0;
    // Basiskleur + subtiele diepte: lichte gloss aan de buitenkant, schaduw bij de naaf
    // data-start/data-end: zo weet markeerSlot() welk vak de wijzer aanwijst
    el('path', { d: seg(R, IR, sA, eA, large), fill: COLORS[m.slot.k], stroke:'rgba(0,0,0,0.55)', 'stroke-width':1.6,
      'data-start': m.start, 'data-end': m.end }, svg);
    el('path', { d: seg(R-1.5, R-13, sA, eA, large), fill:'rgba(255,255,255,0.22)', stroke:'none' }, svg);
    el('path', { d: seg(IR+11, IR, sA, eA, large), fill:'rgba(0,0,0,0.22)', stroke:'none' }, svg);
    const wedgeSlots = m.end - m.start;
    const narrow = wedgeSlots < 8;
    const lr = (R+IR)/2 + (narrow ? 10 : 5);   // smalle vakjes: inhoud iets naar buiten
    const lx = cx+lr*Math.cos(mA), ly = cy+lr*Math.sin(mA);
    const k = m.slot.k;
    if (k === 'white' || k === 'gold') {
      const fs = wedgeSlots < 8 ? 13 : wedgeSlots < 16 ? 17 : 22;
      const t = el('text', { x:lx, y:ly, fill:TXT[k], 'font-family':"'Fredoka', sans-serif", 'font-weight':'900', 'font-size':fs, 'text-anchor':'middle', 'dominant-baseline':'middle', 'paint-order':'stroke', stroke:'rgba(255,255,255,0.55)', 'stroke-width':2.5 }, svg);
      t.textContent = String(m.slot.v);
      if (wedgeSlots >= 12 && m.slot.name) nameArc(slotName(m.slot), sA, eA, mA, k === 'gold' ? '#78350f' : '#374151');
      if (k === 'gold') {
        const gr = narrow ? R - 6 : R - 20, gx = cx+gr*Math.cos(mA), gy = cy+gr*Math.sin(mA);
        el('path', { d:\`M \${gx} \${gy-3} L \${gx+0.9} \${gy-0.9} L \${gx+3} \${gy} L \${gx+0.9} \${gy+0.9} L \${gx} \${gy+3} L \${gx-0.9} \${gy+0.9} L \${gx-3} \${gy} L \${gx-0.9} \${gy-0.9} Z\`, fill:'#fff', opacity:0.95 }, svg);
      }
    } else if (k === 'purple') {
      // Status-icoon + stervakjes (sterren tellen bij Purple-vs-Purple)
      const gs = narrow ? 7.5 : 10;
      diskEffectGlyph(svg, m.slot.effect, lx, ly, gs);
      const sr = lr - (narrow ? 12 : 16), sx = cx+sr*Math.cos(mA), sy = cy+sr*Math.sin(mA);
      diskStars(svg, m.slot.stars || 1, sx, sy, narrow ? 3.4 : 4);
      if (wedgeSlots >= 12 && m.slot.name) nameArc(slotName(m.slot), sA, eA, mA, '#ede9fe');
    } else if (k === 'blue') {
      diskShield(svg, lx, ly, narrow ? 8.5 : 12);
    } else if (k === 'red') {
      diskMiss(svg, lx, ly, narrow ? 7 : 9.5);
    }
  }
  // Glossy naaf
  el('circle', { cx, cy, r: IR, fill:\`url(#dHub\${uq})\`, stroke:'#fbbf24', 'stroke-width':2.5 }, svg);
  el('ellipse', { cx:cx-6, cy:cy-8, rx:10, ry:6, fill:'rgba(255,255,255,0.20)' }, svg);
  el('circle', { cx, cy, r:4, fill:'#fbbf24', opacity:0.85 }, svg);
}

// Welk vak wijst de wijzer aan? Zonder markering moet je zelf uitzoeken waar
// hij stilstaat; nu licht het gedraaide vak op zolang de uitslag in beeld is.
function markeerSlot(svgId, idx) {
  if (animOff()) return;
  const svg = document.getElementById(svgId); if (!svg) return;
  svg.querySelectorAll('.slot-mark').forEach(e => e.remove());
  const wedge = [...svg.querySelectorAll('path[data-start]')]
    .find(p => idx >= +p.dataset.start && idx < +p.dataset.end);
  if (!wedge) return;
  // Twee lagen: een lichte waas over het hele vak zodat je het van een afstand
  // ziet, en een dikke rand eromheen zodat je precies weet welk vak het is.
  const waas = wedge.cloneNode(false);
  waas.setAttribute('class', 'slot-mark-waas');
  waas.setAttribute('fill', 'rgba(255,255,255,0.30)');
  waas.setAttribute('stroke', 'none');
  const mark = wedge.cloneNode(false);
  mark.setAttribute('class', 'slot-mark');
  mark.setAttribute('fill', 'none');
  mark.setAttribute('stroke', '#ffffff');
  mark.setAttribute('stroke-width', '7');
  for (const e of [waas, mark]) { e.removeAttribute('data-start'); e.removeAttribute('data-end'); svg.appendChild(e); }
}

function spin(svgId, ms) {
  return new Promise(res => {
    const svg = document.getElementById(svgId);
    const idx = Math.floor(Math.random()*SLOT_COUNT);
    // Animatie-instelling: 'uit' toont het resultaat meteen, 'snel' halveert.
    if (animOff()) {
      svg.style.transition = 'none';
      svg.style.transform = \`rotate(\${-((idx+0.5)*SLOT_DEG)}deg)\`;
      setTimeout(() => res(idx), 60);
      return;
    }
    const dur = Math.max(400, ms * animScale());
    const fullRots = 5 + Math.floor(Math.random()*2);
    const deg = 360*fullRots - ((idx+0.5)*SLOT_DEG);
    svg.style.transition = \`transform \${dur}ms cubic-bezier(0.15, 0.85, 0.1, 1)\`;
    svg.getBoundingClientRect(); svg.style.transform = \`rotate(\${deg}deg)\`;
    scheduleSpinTicks(dur, fullRots);
    setTimeout(() => { res(idx); }, dur+100);
  });
}

// Tik-geluid dat meeloopt met de vertragende schijf: we sampelen dezelfde
// easing-curve als de CSS-transitie, zodat elke tik met een slot-grens samenvalt.
// Openstaande tikken opruimen als het gevecht/scherm wegvalt, zodat er nooit
// geluid natikt in een menu.
let spinTickTimers = [];
function clearSpinTicks() { for (const t of spinTickTimers) clearTimeout(t); spinTickTimers = []; }

function scheduleSpinTicks(dur, fullRots) {
  if (!S('sfx')) return;
  // We tikken niet op élk slot: dat zouden ~90 losse oscillators per gevecht
  // zijn (×2 schijven), wat op een telefoon hoorbaar hapert. Eén tik per twee
  // slots klinkt hetzelfde en is de helft van het werk; bovendien harde grens.
  const totalSlots = fullRots * SLOT_COUNT;
  const ease = t => 1 - Math.pow(1 - t, 3);            // benadert cubic-bezier(.15,.85,.1,1)
  const timers = [];
  let last = 0;
  for (let i = 1; i <= 120 && timers.length < 40; i++) {
    const t = i / 120;
    const slotsPassed = Math.floor(ease(t) * totalSlots);
    if (slotsPassed >= last + 2) { last = slotsPassed; timers.push(setTimeout(() => sfx('tick'), t * dur)); }
  }
  spinTickTimers.push(...timers);
}

function applyStatus(slots, st, u) {
  let r = slots.map(s => ({...s}));
  const SPECIAL = ['poison','badlypoison','burn','paralysis','confusion','sleep','frozen','curse'];
  // Verlamming: de KLEINSTE aanval (minste vakken, niet-rood) wordt Miss.
  if (st.includes('paralysis')) {
    const groups = [];
    let i = 0;
    while (i < r.length) {
      const s = r[i];
      if (s.k === 'red') { i++; continue; }
      let j = i + 1;
      while (j < r.length && r[j].k === s.k && r[j].name === s.name && r[j].v === s.v && r[j].effect === s.effect) j++;
      groups.push({ i, n: j - i });
      i = j;
    }
    if (groups.length) {
      const g = groups.reduce((a, b) => b.n < a.n ? b : a);
      for (let k = g.i; k < g.i + g.n; k++) r[k] = { k: 'red' };
    }
  }
  // Brand: witte/gouden aanvallen van 10 of minder worden Miss, en -10 schade
  if (st.includes('burn')) {
    for (let i = 0; i < r.length; i++) {
      if ((r[i].k === 'white' || r[i].k === 'gold') && (r[i].v || 0) <= 10) r[i] = { k: 'red' };
    }
  }
  let mod = 0;
  if (st.includes('poison')) mod -= 20;
  if (st.includes('badlypoison')) mod -= 40;
  if (st.includes('burn')) mod -= 10;
  if (u && abilityOf(u) === 'guts' && st.some(s => SPECIAL.includes(s))) mod += 50;
  if (mod) for (let s of r) if (s.k === 'white' || s.k === 'gold') s.v = Math.max(0, (s.v || 0) + mod);
  return r;
}

function nextAttackIndex(slots, idx) {
  const n = slots.length;
  if (!n) return 0;
  const cur = slots[idx];
  const same = (s) => s && cur && s.k === cur.k && s.name === cur.name && s.v === cur.v && s.effect === cur.effect;
  let i = idx;
  let guard = 0;
  while (same(slots[i % n]) && guard < n) { i++; guard++; }
  return i % n;
}

function noEffectReason(a, d) {
  if (a.k==='red' && d.k==='red') return tr('Beide Miss', 'Both Miss'); if (a.k==='blue' && d.k==='blue') return tr('Beide ontwijken', 'Both dodge');
  if ((a.k==='red' && d.k==='blue') || (a.k==='blue' && d.k==='red')) return tr('Miss vs Ontwijken', 'Miss vs Dodge');
  if (a.k==='blue') return tr('Aanval ontweken', 'Attack dodged'); if (d.k==='blue') return tr('Aanval ontweken', 'Attack dodged');
  if (a.k==='purple' && d.k==='purple') return tr('Krachten heffen op', 'Powers cancel out');
  if ((a.k==='white'||a.k==='gold') && (d.k==='white'||d.k==='gold')) return tr(\`Gelijke Strijd (\${a.v} = \${d.v})\`, \`Even clash (\${a.v} = \${d.v})\`);
  return tr('Geen effect', 'No effect');
}

function showClashStamp(r, aSlot, dSlot) {
  const box = document.getElementById('clash-stamp');
  const txt = document.getElementById('clash-stamp-txt');
  const kick = document.getElementById('clash-stamp-kicker');
  if (!box || !txt || animOff()) return;
  let kind = 'none', title = t('stamp.none'), sub = '';
  if (r.attKO || r.defKO) {
    kind = 'ko';
    title = t('stamp.ko');
    if ((aSlot.k === 'white' || aSlot.k === 'gold') && (dSlot.k === 'white' || dSlot.k === 'gold')) {
      sub = \`\${aSlot.v || 0}  ·  \${dSlot.v || 0}\`;
    } else {
      sub = moveLabel(r.attKO ? dSlot : aSlot);
    }
  } else if (r.attBench || r.defBench) {
    kind = 'wait';
    title = t('stamp.bench');
  } else if (r.statusOnAtt || r.statusOnDef) {
    kind = 'status';
    const st = r.statusOnDef || r.statusOnAtt;
    title = (statusLabel(st) || st).toUpperCase();
  } else if (aSlot.k === 'red' && dSlot.k === 'red') {
    kind = 'miss'; title = t('stamp.miss');
  } else if (aSlot.k === 'blue' || dSlot.k === 'blue') {
    kind = 'block'; title = t('stamp.block');
  } else if (aSlot.k === 'red' || dSlot.k === 'red') {
    kind = 'miss'; title = t('stamp.miss');
  }
  txt.textContent = title;
  if (kick) kick.textContent = sub;
  box.className = 'clash-stamp show ' + kind;
  box.setAttribute('aria-hidden', 'false');
  setTimeout(() => {
    box.classList.remove('show');
    box.setAttribute('aria-hidden', 'true');
  }, 1300);
}

async function runCombat(att, def) {
  state.locked = true;
  const defInitialNode = def.node; const attInitialNode = att.node; 
  
  state.selected = null; const ov = document.getElementById('combat-overlay');
  const attDiskId = att.owner === 'p2' ? 'disk-top' : 'disk-bottom', defDiskId = def.owner === 'p2' ? 'disk-top' : 'disk-bottom';
  document.getElementById(att.owner==='p2'?'combat-top-name':'combat-bottom-name').textContent = unitName(att.defKey);
  document.getElementById(def.owner==='p2'?'combat-top-name':'combat-bottom-name').textContent = unitName(def.defKey);

  // De twee kemphanen zelf, naast hun schijf. Zo zie je WIE er vecht en kan de
  // aanval straks van de een naar de ander vliegen.
  const attFig = document.getElementById(att.owner === 'p2' ? 'fighter-top' : 'fighter-bottom');
  const defFig = document.getElementById(def.owner === 'p2' ? 'fighter-top' : 'fighter-bottom');
  attFig.className = 'fighter ' + att.owner; attFig.innerHTML = unitVisual(att.defKey, att.owner, 118);
  defFig.className = 'fighter ' + def.owner; defFig.innerHTML = unitVisual(def.defKey, def.owner, 118);
  const fxLaag = document.getElementById('attack-fx'); if (fxLaag) fxLaag.innerHTML = '';

  const aSlots = applyStatus(att.slots, att.status, att), dSlots = applyStatus(def.slots, def.status, def);
  renderDisk(attDiskId, aSlots, att.defKey); renderDisk(defDiskId, dSlots, def.defKey);
  document.getElementById('combat-result').textContent = ''; document.getElementById('btn-combat-continue').style.display = 'none';
  const clashEl0 = document.getElementById('clash-moves'); if (clashEl0) clashEl0.innerHTML = '';
  const stamp0 = document.getElementById('clash-stamp');
  if (stamp0) { stamp0.className = 'clash-stamp'; stamp0.setAttribute('aria-hidden', 'true'); }
  ov.classList.add('active');
  Audio_.setTrack('combat');

  // Clash: flits + schok zodra beide wielen stilstaan
  sfx('clash');
  if (!animOff()) {
    const row = document.querySelector('#combat-overlay .disks-row');
    const flash = document.getElementById('clash-flash');
    if (row) { row.classList.remove('clash'); void row.offsetWidth; row.classList.add('clash'); }
    if (flash) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
  }

  let finalAIdx = aIdx, finalDIdx = dIdx;

  // HERKANSINGEN (Duel: Double Chance / Bright Powder). Tweede Kans laat je
  // eigen figuur opnieuw draaien, Verblinding dwingt de tegenstander ertoe.
  const aFx = att.fx || {}, dFx = def.fx || {};
  const respinAtt = aFx.respinSelf || dFx.respinFoe;
  const respinDef = dFx.respinSelf || aFx.respinFoe;
  if (respinAtt || respinDef) {
    toast(respinAtt && respinDef ? tr('Beide figuren draaien opnieuw!', 'Both figures spin again!') : (respinAtt ? tr('Herkansing voor de aanvaller!', 'Respin for the attacker!') : tr('Herkansing voor de verdediger!', 'Respin for the defender!')));
    const again = await Promise.all([
      respinAtt ? spin(attDiskId, 1600 + Math.random()*300) : Promise.resolve(finalAIdx),
      respinDef ? spin(defDiskId, 1900 + Math.random()*300) : Promise.resolve(finalDIdx),
    ]);
    finalAIdx = again[0]; finalDIdx = again[1];
    sfx('clash');
  }

  if (att.status.includes('confusion')) finalAIdx = nextAttackIndex(aSlots, finalAIdx);
  if (def.status.includes('confusion')) finalDIdx = nextAttackIndex(dSlots, finalDIdx);
  // Scherpschutter (X Accuracy): een Miss schuift door naar het vak ernaast
  if (aFx.xaccuracy && aSlots[finalAIdx].k === 'red') finalAIdx = nextAttackIndex(aSlots, finalAIdx);
  if (dFx.xaccuracy && dSlots[finalDIdx].k === 'red') finalDIdx = nextAttackIndex(dSlots, finalDIdx);

  // Laat zien WELK vak je hebt gedraaid — inclusief het doorgeschoven vak bij
  // Verwarring of Scherpschutter, want dan wijst de wijzer zelf ernaast.
  markeerSlot(attDiskId, finalAIdx); markeerSlot(defDiskId, finalDIdx);

  const attWasFrozen = att.status.includes('frozen'), defWasFrozen = def.status.includes('frozen');
  let aSlot = attWasFrozen ? {k:'red'} : aSlots[finalAIdx];
  let dSlot = defWasFrozen ? {k:'red'} : dSlots[finalDIdx];

  // Vuurwervel / Fire Spin: blijf draaien tot je iets anders raakt; schade × aantal
  const multiplyOnce = async (who, diskId, slots, slot, idx) => {
    if (!slot || slot.effect !== 'multiply') return { slot, idx };
    let times = 1;
    for (let n = 0; n < 6; n++) {
      toast(\`\${slotName(slot)} ×\${times}!\`);
      const next = await spin(diskId, 800 + Math.random() * 250);
      const s = slots[next];
      if (s && s.k === slot.k && s.name === slot.name) {
        times++;
        idx = next;
        markeerSlot(diskId, idx);
      } else {
        markeerSlot(diskId, idx);
        return { slot: { ...slot, v: (slot.v || 0) * times, name: \`\${slot.name} ×\${times}\` }, idx };
      }
    }
    return { slot: { ...slot, v: (slot.v || 0) * times, name: \`\${slot.name} ×\${times}\` }, idx };
  };
  {
    const am = await multiplyOnce(att, attDiskId, aSlots, aSlot, finalAIdx);
    aSlot = am.slot; finalAIdx = am.idx;
    const dm = await multiplyOnce(def, defDiskId, dSlots, dSlot, finalDIdx);
    dSlot = dm.slot; finalDIdx = dm.idx;
  }

  if (att.status.includes('bulwark')) { att.status = att.status.filter(s => s !== 'bulwark'); if (aSlot.k === 'red') aSlot = {k:'blue'}; }
  if (def.status.includes('bulwark')) { def.status = def.status.filter(s => s !== 'bulwark'); if (dSlot.k === 'red') dSlot = {k:'blue'}; }

  // Krachtstoot / Voorrang / Vervloeking passen het gedraaide vak aan
  aSlot = applyPlateFx(att, aSlot);
  dSlot = applyPlateFx(def, dSlot);

  const r = resolve(aSlot, dSlot); let html = "";
  const clashEl = document.getElementById('clash-moves');
  if (clashEl) {
    clashEl.innerHTML = \`<span class="mv-att">\${moveLabel(aSlot)}</span><span class="vs">VS</span><span class="mv-def">\${moveLabel(dSlot)}</span>\`;
  }

  // Schildwacht (X Defend): overleeft een klap van 10 t/m 100.
  // Laatste Adem (Focus Band): kan deze beurt helemaal niet verslagen worden.
  const saved = [];
  if (r.attKO && (aFx.focus || (aFx.xdefend && (dSlot.v || 0) >= 10 && (dSlot.v || 0) <= 100))) { r.attKO = false; saved.push(unitName(att.defKey)); }
  if (r.defKO && (dFx.focus || (dFx.xdefend && (aSlot.v || 0) >= 10 && (aSlot.v || 0) <= 100))) { r.defKO = false; saved.push(unitName(def.defKey)); }
  clearPlateFx(att); clearPlateFx(def);

  // Onverwoestbaar (Ruinous Helix): eerste KO wordt geen KO — de unit trekt
  // terug naar de bank en de tegenstander levelt NIET. Eenmalig per potje.
  let attRetreat = false, defRetreat = false;
  if (r.attKO && abilityOf(att) === 'undying' && !att.undyingUsed) { att.undyingUsed = true; r.attKO = false; attRetreat = true; }
  if (r.defKO && abilityOf(def) === 'undying' && !def.undyingUsed) { def.undyingUsed = true; r.defKO = false; defRetreat = true; }
  const hasSpecial = (u) => u.status.some(s => ['poison','badlypoison','burn','paralysis','confusion','sleep','frozen','curse'].includes(s));
  if (r.attKO && abilityOf(att) === 'sturdy' && !hasSpecial(att)) { r.attKO = false; saved.push(unitName(att.defKey)); }
  if (r.defKO && abilityOf(def) === 'sturdy' && !hasSpecial(def)) { r.defKO = false; saved.push(unitName(def.defKey)); }

  let attNextNode = att.node;
  let defNextNode = def.node;
  let attToBench = false;
  let defToBench = false;
  let attBenchOnly = false, defBenchOnly = false;

  if (r.attKO) { html += \`<span class="ko">\${unitName(att.defKey)} \${tr('is verslagen!', 'is knocked out!')}</span><br>\`; attNextNode = null; attToBench = true; }
  if (r.defKO) { html += \`<span class="ko">\${unitName(def.defKey)} \${tr('is verslagen!', 'is knocked out!')}</span><br>\`; defNextNode = null; defToBench = true; }
  if (r.attBench) { html += \`<span class="status">\${unitName(att.defKey)} \${tr('gaat terug naar de zijlijn!', 'returns to the bench!')}</span><br>\`; attNextNode = null; attBenchOnly = true; }
  if (r.defBench) { html += \`<span class="status">\${unitName(def.defKey)} \${tr('gaat terug naar de zijlijn!', 'returns to the bench!')}</span><br>\`; defNextNode = null; defBenchOnly = true; }
  if (attRetreat) { html += \`<span class="status">\${unitName(att.defKey)} — \${tr('Onverwoestbaar! Trekt terug.', 'Undying! Retreats.')}</span><br>\`; attNextNode = null; }
  if (defRetreat) { html += \`<span class="status">\${unitName(def.defKey)} — \${tr('Onverwoestbaar! Trekt terug.', 'Undying! Retreats.')}</span><br>\`; defNextNode = null; }

  if (r.defKO && !r.attKO) { attNextNode = defInitialNode; }

  if (r.statusOnAtt) { applyCondition(att, r.statusOnAtt); html += \`<span class="status">-> \${statusLabel(r.statusOnAtt).toUpperCase()}</span><br>\`; }
  if (r.statusOnDef) { applyCondition(def, r.statusOnDef); html += \`<span class="status">-> \${statusLabel(r.statusOnDef).toUpperCase()}</span><br>\`; }

  // Contact-abilities: status op de overlevende tegenstander (en op zichzelf bij Helse Jacht)
  const applyContact = (src, tgt, srcSurvives, tgtSurvives) => {
    const st = contactStatusOf(abilityOf(src)); if (!st) return;
    if (tgtSurvives && !tgt.status.includes(st)) { applyCondition(tgt, st); html += \`<span class="status">\${unitName(src.defKey)}: \${unitName(tgt.defKey)} -> \${statusLabel(st).toUpperCase()}</span><br>\`; }
    if (abilityOf(src) === 'infernal' && srcSurvives && !src.status.includes('burn')) applyCondition(src, 'burn');
  };
  applyContact(att, def, !attToBench, !defToBench);
  applyContact(def, att, !defToBench, !attToBench);

  for (const nm of saved) html += \`<span class="status">\${nm} \${tr('houdt stand dankzij je kaart!', 'holds on thanks to your plate!')}</span><br>\`;
  if (!r.attKO && !r.defKO && !attRetreat && !defRetreat && !r.statusOnAtt && !r.statusOnDef && !r.attBench && !r.defBench && !html) html += \`<span style="opacity:0.8;font-style:italic">\${noEffectReason(aSlot, dSlot)}</span>\`;
  showClashStamp(r, aSlot, dSlot);

  // AANVALSANIMATIE: de klap gaat van het ene poppetje NAAR het andere. Wat je
  // draait bepaalt wat er vliegt — een vonk, een golf, een vlam — en waar
  // het aankomt gebeurt de inslag. Blokkeer je, dan vangt een schild het op;
  // mis je, dan blijft er een 'MIS' boven je hoofd hangen.
  {
    const schaal = animOff() ? 0 : (animScale() || 1);
    const fxA = attackFx(aSlot), fxD = attackFx(dSlot);
    const attNeer = r.attKO || attRetreat, defNeer = r.defKO || defRetreat;
    let wacht = 0;
    if (fxA) wacht = Math.max(wacht, speelTreffer(attFig, defFig, fxA, dSlot.k === 'blue'));
    if (fxD) {
      const start = Math.round((fxA ? 220 : 0) * schaal);
      setTimeout(() => speelTreffer(defFig, attFig, fxD, aSlot.k === 'blue'), start);
      wacht = Math.max(wacht, start + 760 * schaal);
    }
    // Wie zelf niets uithaalt, laat zien wat hij dan wél deed. MAAR: krijgt hij
    // op datzelfde moment een klap te verwerken, dan houden we z'n MIS weg.
    // Anders staat er 'MIS' bovenop een figuur die je net ziet incasseren of
    // omvallen, en lees je twee dingen tegelijk over één poppetje. Wat er
    // gedraaid is staat sowieso onder het scherm ("Miss ⚔ Grafzwaard 40").
    const attRaakt = !!fxD || attNeer;   // de aanvaller krijgt zelf iets te verduren
    const defRaakt = !!fxA || defNeer;
    if (!fxA && aSlot.k === 'red' && !attRaakt) { toonBadge('mis', fxMidden(attFig, fxLaag)); sfx('mis'); }
    if (!fxD && dSlot.k === 'red' && !defRaakt) { toonBadge('mis', fxMidden(defFig, fxLaag)); sfx('mis'); }
    if (!fxA && !fxD && aSlot.k === 'blue' && !attRaakt) toonBadge('schild', fxMidden(attFig, fxLaag));
    if (!fxA && !fxD && dSlot.k === 'blue' && !defRaakt) toonBadge('schild', fxMidden(defFig, fxLaag));
    if (!fxA && !fxD) wacht = Math.max(wacht, 620 * schaal);
    // Wie het niet overleeft gaat neer — ook als de winnende klap niet zichtbaar
    // was (goud dat op een blok stukloopt, bijvoorbeeld).
    if (attNeer || defNeer) {
      const valNa = Math.max(0, wacht - 360 * schaal);
      if (attNeer && attFig) setTimeout(() => attFig.classList.add('valt'), valNa);
      if (defNeer && defFig) setTimeout(() => defFig.classList.add('valt'), valNa);
      wacht = valNa + 820 * schaal;
    }
    if (wacht > 0) await new Promise(res => setTimeout(res, Math.min(wacht, 1800 * schaal)));
  }

  // Uitkomst-geluid. De klap zelf klonk al tijdens de animatie (elke soort z'n
  // eigen klank), dus hier alleen nog wat er ná de inslag gebeurt.
  if (r.attKO || r.defKO) sfx('ko');
  else if (attRetreat || defRetreat) sfx('block');
  else if (r.statusOnAtt || r.statusOnDef) sfx('status');

  document.getElementById('combat-result').innerHTML = html;
  const btn = document.getElementById('btn-combat-continue'); btn.style.display = ''; setTimeout(() => btn.scrollIntoView({ behavior: 'smooth', block: 'center' }), 50);
  await new Promise(res => { btn.onclick = res; }); ov.classList.remove('active');
  Audio_.setTrack('battle');

  // De aanval slaat nu ook echt IN op het bord, op het punt waar hij landt.
  // Dat gebeurt na het sluiten van het gevechtsscherm, zodat je het ziet.
  {
    const fxA = attackFx(aSlot), fxD = attackFx(dSlot);
    if (fxA) boardImpact(defInitialNode, fxA);   // wat de aanvaller doet, landt op de verdediger
    if (fxD) boardImpact(attInitialNode, fxD);   // en andersom
  }

  att.node = attNextNode;
  def.node = defNextNode;
  if (attToBench) { koUnit(att); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'burst'); zielNaarHC(att, attInitialNode); }
  if (defToBench) { koUnit(def); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'burst'); zielNaarHC(def, defInitialNode); }
  if (attBenchOnly) { att.node = null; if (r.statusOnAtt === 'wait') markWait(att); state.bench[att.owner].push(att.uid); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'poof'); }
  if (defBenchOnly) { def.node = null; if (r.statusOnDef === 'wait') markWait(def); state.bench[def.owner].push(def.uid); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'poof'); }
  // Onverwoestbaar-terugtocht: statussen behouden (geen P.C.-genezing), wél 'wait'
  if (attRetreat) { markWait(att); state.bench[att.owner].push(att.uid); queueFX(NODES[attInitialNode].x, NODES[attInitialNode].y, 'poof'); }
  if (defRetreat) { markWait(def); state.bench[def.owner].push(def.uid); queueFX(NODES[defInitialNode].x, NODES[defInitialNode].y, 'poof'); }

  // Duel-regel (Serebii): Frozen wordt na een gevecht gewist, ongeacht de uitkomst
  if (attWasFrozen) att.status = att.status.filter(s => s !== 'frozen');
  if (defWasFrozen) def.status = def.status.filter(s => s !== 'frozen');

  // EVOLUTIE OF LEVEL-UP (Duel-regel + onze huisregel).
  // Duel: wie een gevecht wint en z'n evolutie eronder heeft hangen, MAG
  // evolueren — hij mag ook weigeren. Wij hadden al de huisregel "winnen = een
  // level erbij". Die twee komen hier samen als een echte keuze: evolueer je,
  // dan krijg je de hele schijf van je evolutie mét de Duel-bonus; weiger je,
  // dan groeit je huidige schijf zoals altijd.
  // "Verslaan óf verdringen" telt allebei als winst — Onverwoestbaar duwt de
  // verdediger van z'n plek zonder KO, en dat is in Duel ook een gewonnen gevecht.
  const attWon = (r.defKO || defRetreat) && !r.attKO && !attRetreat;
  const defWon = (r.attKO || attRetreat) && !r.defKO && !defRetreat;
  if (attWon) { if (!(await vraagEvolutie(att))) levelUp(att); }
  if (defWon) { if (!(await vraagEvolutie(def))) levelUp(def); }

  if (r.defKO && !r.attKO && att.node) {
    if (NODES[att.node].type==='goal' && NODES[att.node].owner !== att.owner) { endMatch(att.owner, 'goal'); return; }
  }
  state.locked = false;
  afterAction();
}

function purpleOutcome(effect, onDef) {
  const o = { attKO:false, defKO:false, statusOnAtt:null, statusOnDef:null, attBench:false, defBench:false };
  const hitKO = () => { if (onDef) o.defKO = true; else o.attKO = true; };
  const hitBench = () => { if (onDef) o.defBench = true; else o.attBench = true; };
  const hitSt = (st) => { if (onDef) o.statusOnDef = st; else o.statusOnAtt = st; };
  if (effect === 'knockout') hitKO();
  else if (effect === 'bench' || effect === 'benchwait') { hitBench(); if (effect === 'benchwait') hitSt('wait'); }
  else hitSt(effect || 'confusion');
  return o;
}

function whiteWinEffect(slot, onDef, o) {
  if (slot.effect === 'bench' || slot.effect === 'benchwait') {
    if (onDef) o.defBench = true; else o.attBench = true;
    if (slot.effect === 'benchwait') { if (onDef) o.statusOnDef = 'wait'; else o.statusOnAtt = 'wait'; }
    return;
  }
  if (onDef) o.defKO = true; else o.attKO = true;
}

function resolve(a, d) {
  const o = { attKO:false, defKO:false, statusOnAtt:null, statusOnDef:null, attBench:false, defBench:false }; const A = a.k, D = d.k;
  if (A==='red' && D==='red') return o; if (A==='blue' && D==='blue') return o; if (A==='red' && D==='blue') return o; if (D==='red' && A==='blue') return o;
  // Splash / 0-schade: vs Miss gebeurt er niets
  if (A==='red' && (D==='white' || D==='gold')) {
    if ((d.v || 0) <= 0 && !d.effect) return o;
    whiteWinEffect(d, false, o); return o;
  }
  if (D==='red' && (A==='white' || A==='gold')) {
    if ((a.v || 0) <= 0 && !a.effect) return o;
    whiteWinEffect(a, true, o); return o;
  }
  if (A==='red' && D==='purple') return purpleOutcome(d.effect, false);
  if (D==='red' && A==='purple') return purpleOutcome(a.effect, true);
  if (A==='blue' && (D==='white' || D==='purple')) return o; if (D==='blue' && (A==='white' || A==='purple')) return o;
  if (A==='blue' && D==='gold') { o.attKO = true; return o; } if (D==='blue' && A==='gold') { o.defKO = true; return o; }
  if (A==='gold' && D==='purple') { o.defKO = true; return o; } if (D==='gold' && A==='purple') { o.attKO = true; return o; }
  if (A==='purple' && D==='white') return purpleOutcome(a.effect, true);
  if (D==='purple' && A==='white') return purpleOutcome(d.effect, false);
  if (A==='purple' && D==='purple') {
    const aS = a.stars||1, dS = d.stars||1;
    if (aS > dS) return purpleOutcome(a.effect, true);
    if (dS > aS) return purpleOutcome(d.effect, false);
    return o;
  }
  if ((A==='white'||A==='gold') && (D==='white'||D==='gold')) {
    const aV = a.v||0, dV = d.v||0;
    if (aV > dV) whiteWinEffect(a, true, o);
    else if (dV > aV) whiteWinEffect(d, false, o);
  }
  return o;
}

function levelSlotBoost(u, n = 8) {
  for (let k = 0; k < n; k++) {
    const ri = u.slots.findIndex(s => s.k === 'red'); if (ri < 0) return;
    let bestIdx = -1, bestV = -1;
    for (let i = 0; i < u.slots.length; i++) { const s = u.slots[i]; if ((s.k==='white' || s.k==='gold') && s.v > bestV) { bestV = s.v; bestIdx = i; } }
    if (bestIdx < 0) return;
    const copy = {...u.slots[bestIdx]};
    u.slots.splice(ri, 1);
    const insertAt = u.slots.findIndex(s => s.k === copy.k && s.v === copy.v && s.name === copy.name);
    u.slots.splice(insertAt >= 0 ? insertAt : 0, 0, copy);
  }
}

function levelUp(u) {
  if (u.level >= 4) return; u.level++;
  levelSlotBoost(u);
  sfx('levelup');
  if (u.node && NODES[u.node]) queueFX(NODES[u.node].x, NODES[u.node].y, 'level:' + u.level);
  toast(\`\${unitName(u.defKey)} → Level \${u.level}!\`);
}

// ==========================================
// EVOLUEREN TIJDENS EEN POTJE (sessie 39)
// Duel-regel: wint een figuur een gevecht en hangt z'n evolutie eronder, dan
// MAG hij evolueren. Hij krijgt dan de schijf van z'n evolutie PLUS de bonus
// (+10 wit/goud, +1 ster paars) — daarom loont het om klein te beginnen.
// ==========================================
function kanEvolueren(u) {
  return !!(u && u.evoKey && UNIT_DEFS[u.evoKey]);
}

function doeEvolutie(u) {
  const naar = u.evoKey; if (!UNIT_DEFS[naar]) return;
  const van = unitName(u.defKey);
  // De schijf van de evolutie plus de bonus. Voor jouw figuren geldt het level
  // dat je van die evolutie in je collectie hebt; de AI heeft geen collectie,
  // dus die houdt het level van z'n eigen deck aan.
  const uitCollectie = !(state.mode === 'solo' && u.owner === 'p2');
  const lvl = uitCollectie ? ((profile && profile.owned && profile.owned[naar]) || 1) : (u.level || 1);
  const tmp = { slots: JSON.parse(JSON.stringify(UNIT_DEFS[naar].slots)) };
  for (let i = 1; i < lvl; i++) levelSlotBoost(tmp);
  u.defKey = naar;
  u.level = lvl;
  // NIET opnieuw arrangeSlots(): de schijven in UNIT_DEFS zijn bij het laden al
  // in hun vaste volgorde gezet, en evolutieBonus laat die volgorde intact.
  u.slots = evolutieBonus(tmp.slots);
  // Een keten van drie: hangt de volgende stap er ook onder, dan kan hij in
  // hetzelfde potje nóg een keer evolueren (na een volgend gewonnen gevecht).
  u.evoKey = (u.evoMap && u.evoMap[naar]) || null;
  u.evolved = !u.evoKey;
  u.undyingUsed = false;
  sfx('evolve');
  if (u.node && NODES[u.node]) queueFX(NODES[u.node].x, NODES[u.node].y, 'evolutie:' + u.owner);
  toast(tr(\`\${van} evolueert tot \${unitName(naar)}!\`, \`\${van} evolves into \${unitName(naar)}!\`));
}

// Het keuzemoment. De speler krijgt een scherm, de AI beslist zelf.
function vraagEvolutie(u) {
  return new Promise(res => {
    if (!kanEvolueren(u)) { res(false); return; }
    // De AI evolueert altijd: een grotere schijf mét bonus is nooit slechter
    // dan dezelfde schijf zonder.
    if (state.mode === 'solo' && u.owner === 'p2') { doeEvolutie(u); res(true); return; }
    const ov = document.getElementById('evo-overlay');
    const naar = u.evoKey;
    document.getElementById('evo-van-art').innerHTML = unitVisual(u.defKey, u.owner, 92);
    document.getElementById('evo-naar-art').innerHTML = unitVisual(naar, u.owner, 92);
    document.getElementById('evo-van-naam').textContent = unitName(u.defKey);
    document.getElementById('evo-naar-naam').textContent = unitName(naar);
    document.getElementById('evo-naar-sub').textContent = \`\${facName(UNIT_DEFS[naar].fac)} · \${UNIT_DEFS[naar].mp} MP\`;
    ov.classList.add('active');
    const ja = document.getElementById('btn-evo-ja'), nee = document.getElementById('btn-evo-nee');
    const klaar = (evolueren) => {
      ja.onclick = null; nee.onclick = null;
      ov.classList.remove('active');
      if (evolueren) doeEvolutie(u);
      res(evolueren);
    };
    ja.onclick = () => klaar(true);
    nee.onclick = () => klaar(false);
  });
}

let toastT; function toast(msg) { const t = document.getElementById('toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 2000); }

document.getElementById('btn-end-turn').addEventListener('click', endTurn);
let pauseWasLocked = false;
function openPause() {
  if (!state || state.over) { goHome(); return; }
  if (!S('confirmExit')) { goHome(); return; }
  pauseWasLocked = !!state.locked;
  state.locked = true;
  const ov = document.getElementById('pause-overlay');
  if (ov) ov.classList.add('active');
  const title = document.getElementById('pause-title');
  if (title) title.textContent = t('pause.title');
  Audio_.setDuck(0.32);
}
function closePause() {
  const ov = document.getElementById('pause-overlay');
  if (ov) ov.classList.remove('active');
  if (state && !state.over) state.locked = pauseWasLocked;
  Audio_.setDuck(1);
}
document.getElementById('btn-menu').addEventListener('click', openPause);
// Random vult je team met basisvormen die je bezit, en hangt daar meteen de
// evoluties onder die je ook al hebt — anders zou 'Random' je evolutieketens
// stilletjes weggooien.
document.getElementById('btn-deck-random').addEventListener('click', () => {
  const basis = Object.keys(profile.owned).filter(isBasisvorm);
  deckSel.units = randomPick(basis, Math.min(6, basis.length));
  deckSel.evos = {};
  for (const k of deckSel.units) {
    let stap = k;
    while (true) {
      const opts = evolutieOpties(stap).filter(e => profile.owned[e]);
      if (!opts.length) break;
      deckSel.evos[stap] = opts[0]; stap = opts[0];
    }
  }
  deckSel.plates = randomPlates();
  renderDeckSelect();
});
document.getElementById('btn-deck-start').addEventListener('click', onDeckConfirm);
document.getElementById('btn-deck-back').addEventListener('click', goHome);
// Home-tegels & subschermen — delegated, so a shell-refresh keeps working.
document.addEventListener('click', (e) => {
  const t = e.target;
  if (!(t instanceof Element)) return;
  if (t.closest('#tile-solo')) startMatchFlow('solo');
  else if (t.closest('#tile-hotseat')) startMatchFlow('hotseat');
  else if (t.closest('#tile-collection')) { renderCollection(); showScreen('collection'); }
  else if (t.closest('#tile-store')) { renderStore(); showScreen('store'); }
  else if (t.closest('#tile-settings')) { renderSettings(); showScreen('settings'); }
  else if (t.closest('#tile-help')) { renderHelp(); showScreen('help'); }
  else if (t.closest('#btn-pause-resume')) closePause();
  else if (t.closest('#btn-pause-quit')) { closePause(); goHome(); }
});

// Audio mag op mobiel pas starten ná een gebruikersgebaar — de eerste tik waar
// dan ook in de app ontgrendelt de AudioContext.
for (const ev of ['pointerdown', 'touchstart', 'keydown']) {
  window.addEventListener(ev, () => Audio_.unlock(), { once: true, passive: true });
}
document.addEventListener('visibilitychange', () => {
  if (document.hidden) return;
  if (Audio_.ctx && Audio_.ctx.state === 'suspended' && Audio_.unlocked) Audio_.ctx.resume().catch(() => {});
  if (S('music') && Audio_.unlocked) Audio_.syncTrack();
});
// Elke tik op een knop/tegel geeft feedback; overige klikgeluiden staan bij de actie zelf.
document.addEventListener('click', (e) => {
  if (e.target.closest('.home-tile, .btn-back, .coll-card, .plate-chip, .deck-card')) sfx('click');
}, true);
for (const b of document.querySelectorAll('.btn-back')) b.addEventListener('click', () => { renderHome(); showScreen(b.dataset.back); });
document.getElementById('btn-detail-close').addEventListener('click', () => document.getElementById('detail-overlay').classList.remove('active'));
document.getElementById('btn-detail-upgrade').addEventListener('click', doUpgrade);
document.getElementById('btn-result-menu').addEventListener('click', goHome);
document.getElementById('btn-info-close').addEventListener('click', () => document.getElementById('info-overlay').classList.remove('active'));
document.getElementById('booster-card').addEventListener('click', openBooster);
document.getElementById('btn-booster-close').addEventListener('click', () => document.getElementById('booster-overlay').classList.remove('active'));
document.getElementById('btn-booster-again').addEventListener('click', () => { document.getElementById('booster-overlay').classList.remove('active'); openBooster(); });
document.getElementById('info-overlay').addEventListener('click', (e) => { if (e.target.id === 'info-overlay') e.currentTarget.classList.remove('active'); });

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
        state.locked = true; const u = state.units[best.uid]; const path = bfs(u.node, best.target);
        if (path && path.length > 1) {
            const standNode = path[path.length - 2];
            if (standNode !== u.node) { moveUnit(u, standNode).then(() => { state.actionsLeft--; runCombat(u, state.units[best.defenderUid]); }); }
            else { state.actionsLeft--; runCombat(u, state.units[best.defenderUid]); }
        } else { state.locked = false; setTimeout(endTurn, 300); }
    }
  }, Math.max(120, cfg.think * (animScale() || 0.35)));
}

loadProfile();
newGame();
window.__rondelBoot = function () {
  loadProfile();
  applyLang();
  newGame();
};
window.__RONDEL_ENGINE_VER = 'schijfduel-bgm-1';
window.__rondelQA = { get state() { return state; }, renderAll, showTurnSplash, openPause, get audio() { return Audio_; } };
// PWA: service worker alleen registreren als we via https draaien (file:// blijft gewoon werken)
try { if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js'); } catch(e) {}

}
`,o=JSON.parse(`[{"id":"p001","num":1,"name":"Spruiton","fac":"Gras","mp":3,"rar":"U","w":[{"n":16,"v":30,"name":"Rankzweep"}],"g":[],"p":[{"n":20,"effect":"poison","stars":1,"name":"Gifpoeder"},{"n":24,"effect":"sleep","stars":1,"name":"Slaappoeder"}],"b":0,"r":36,"layout":"P20 W16 P24 R36","evo":"p002","art":"art/squire.png","segments":[{"k":"purple","n":20,"stars":1,"effect":"poison","name":"Gifpoeder"},{"k":"white","n":16,"v":30,"name":"Rankzweep"},{"k":"purple","n":24,"stars":1,"effect":"sleep","name":"Slaappoeder"},{"k":"red","n":36}],"ability":"blessing","nameEn":"Sprouton"},{"id":"p002","num":2,"name":"Rankhorn","fac":"Gras","mp":2,"rar":"C","w":[{"n":28,"v":40,"name":"Rankzweep"},{"n":24,"v":60,"name":"Scheerblad"}],"g":[],"p":[{"n":28,"effect":"sleep","stars":1,"name":"Slaappoeder"}],"b":0,"r":16,"layout":"W28 W24 P28 R16","evo":"p003","ability":"blessing","art":"art/cleric.png","segments":[{"k":"white","n":28,"v":40,"name":"Rankzweep"},{"k":"white","n":24,"v":60,"name":"Scheerblad"},{"k":"purple","n":28,"stars":1,"effect":"sleep","name":"Slaappoeder"},{"k":"red","n":16}],"nameEn":"Vinehorn"},{"id":"p003","num":3,"name":"Loofra","fac":"Gras","mp":1,"rar":"R","w":[{"n":24,"v":50,"name":"Rankzweep"},{"n":32,"v":130,"name":"Zonnestraal"}],"g":[],"p":[{"n":32,"effect":"sleep","stars":1,"name":"Slaappoeder"}],"b":0,"r":8,"layout":"W24 W32 P32 R8","ability":"command","art":"art/commander.png","segments":[{"k":"white","n":24,"v":50,"name":"Rankzweep"},{"k":"white","n":32,"v":130,"name":"Zonnestraal"},{"k":"purple","n":32,"stars":1,"effect":"sleep","name":"Slaappoeder"},{"k":"red","n":8}],"nameEn":"Canopyra"},{"id":"p004","num":4,"name":"Vonkit","fac":"Vuur","mp":3,"rar":"U","w":[{"n":24,"v":40,"name":"Vlamstaart"},{"n":32,"v":10,"name":"Krab"}],"g":[],"p":[{"n":28,"effect":"wait","stars":1,"name":"Rookgordijn"}],"b":0,"r":12,"layout":"W24 P28 W32 R12","evo":"p005","art":"art/imp.png","segments":[{"k":"white","n":24,"v":40,"name":"Vlamstaart"},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Rookgordijn"},{"k":"white","n":32,"v":10,"name":"Krab"},{"k":"red","n":12}],"nameEn":"Emberkit"},{"id":"p005","num":5,"name":"Vlamstaart","fac":"Vuur","mp":2,"rar":"C","w":[{"n":56,"v":50,"name":"IJzerstaart"}],"g":[],"p":[{"n":24,"effect":"burn","stars":2,"name":"Vlam"}],"b":0,"r":16,"layout":"R8 P24 R8 W56","evo":"p006","ability":"infernal","art":"art/hellhound.png","segments":[{"k":"red","n":8},{"k":"purple","n":24,"stars":2,"effect":"burn","name":"Vlam"},{"k":"red","n":8},{"k":"white","n":56,"v":50,"name":"IJzerstaart"}],"nameEn":"Flaretail"},{"id":"p006","num":6,"name":"Infernox","fac":"Vuur","mp":2,"rar":"R","w":[{"n":56,"v":50,"name":"Vuurwervel","effect":"multiply"},{"n":28,"v":0,"name":"Drakenstaart","effect":"benchwait"}],"g":[],"p":[],"b":0,"r":12,"layout":"R8 W56 R4 W28","ability":"undying","art":"art/pitlord.png","segments":[{"k":"red","n":8},{"k":"white","n":56,"v":50,"name":"Vuurwervel","effect":"multiply"},{"k":"red","n":4},{"k":"white","n":28,"v":0,"name":"Drakenstaart","effect":"benchwait"}],"nameEn":"Infernox"},{"id":"p007","num":7,"name":"Schelpad","fac":"Water","mp":3,"rar":"U","w":[{"n":44,"v":30,"name":"Bel"}],"g":[],"p":[],"b":40,"r":12,"layout":"R12 W44 B40","evo":"p008","art":"art/apprentice.png","segments":[{"k":"red","n":12},{"k":"white","n":44,"v":30,"name":"Bel"},{"k":"blue","n":40,"name":"Terugtrek"}],"nameEn":"Turtide"},{"id":"p008","num":8,"name":"Stroomschild","fac":"Water","mp":2,"rar":"C","w":[{"n":40,"v":40,"name":"Waterstraal"},{"n":36,"v":20,"name":"Snelrol"}],"g":[],"p":[],"b":16,"r":4,"layout":"R4 B8 W40 B8 W36","evo":"p009","ability":"emberrune","art":"art/runesmith.png","segments":[{"k":"red","n":4},{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":40,"v":40,"name":"Waterstraal"},{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":36,"v":20,"name":"Snelrol"}],"nameEn":"Tidecoat"},{"id":"p009","num":9,"name":"Hydraguard","fac":"Water","mp":2,"rar":"R","w":[{"n":40,"v":100,"name":"Hydropomp"}],"g":[],"p":[{"n":40,"effect":"knockout","stars":2,"name":"Spiegeljas"}],"b":0,"r":16,"layout":"R8 W40 R8 P40","ability":"mountain","art":"art/warden.png","segments":[{"k":"red","n":8},{"k":"white","n":40,"v":100,"name":"Hydropomp"},{"k":"red","n":8},{"k":"purple","n":40,"stars":2,"effect":"knockout","name":"Spiegeljas"}],"nameEn":"Hydraguard"},{"id":"p010","num":10,"name":"Rupsje","fac":"Insect","mp":1,"rar":"U","w":[{"n":32,"v":10,"name":"Stoot"}],"g":[],"p":[{"n":52,"effect":"curse","stars":1,"name":"Draadwikkel"}],"b":0,"r":12,"layout":"R8 P52 R4 W32","evo":"p011","art":"art/p010.png","segments":[{"k":"red","n":8},{"k":"purple","n":52,"stars":1,"effect":"curse","name":"Draadwikkel"},{"k":"red","n":4},{"k":"white","n":32,"v":10,"name":"Stoot"}],"nameEn":"Wormlet"},{"id":"p011","num":11,"name":"Cocoonix","fac":"Insect","mp":0,"rar":"U","w":[{"n":68,"v":0,"name":"Verhard","effect":"knockout"},{"n":24,"v":10,"name":"Stoot"}],"g":[],"p":[],"b":0,"r":4,"layout":"W68 W24 R4","evo":"p012","art":"art/p011.png","segments":[{"k":"white","n":68,"v":0,"name":"Verhard","effect":"knockout"},{"k":"white","n":24,"v":10,"name":"Stoot"},{"k":"red","n":4}],"nameEn":"Cocoonix"},{"id":"p012","num":12,"name":"Vlindra","fac":"Insect","mp":2,"rar":"U","w":[{"n":32,"v":40,"name":"Psystraal","effect":"knockout"}],"g":[],"p":[{"n":36,"effect":"poison","stars":1,"name":"Schrikpoeder"}],"b":0,"r":28,"layout":"R28 W32 P36","ability":"fly","art":"art/p012.png","segments":[{"k":"red","n":28},{"k":"white","n":32,"v":40,"name":"Psystraal","effect":"knockout"},{"k":"purple","n":36,"stars":1,"effect":"poison","name":"Schrikpoeder"}],"nameEn":"Fluttera"},{"id":"p013","num":13,"name":"Naaldje","fac":"Insect","mp":1,"rar":"C","w":[{"n":32,"v":10,"name":"Stoot"}],"g":[],"p":[{"n":60,"effect":"poison","stars":1,"name":"Gifsteek"}],"b":0,"r":4,"layout":"P60 W32 R4","evo":"p014","art":"art/p013.png","segments":[{"k":"purple","n":60,"stars":1,"effect":"poison","name":"Gifsteek"},{"k":"white","n":32,"v":10,"name":"Stoot"},{"k":"red","n":4}],"nameEn":"Stinglet"},{"id":"p014","num":14,"name":"Stekelpop","fac":"Insect","mp":0,"rar":"U","w":[{"n":64,"v":0,"name":"Harde Korst"}],"g":[],"p":[{"n":28,"effect":"poison","stars":1,"name":"Gifsteek"}],"b":0,"r":4,"layout":"R4 W64 P28","evo":"p015","art":"art/p014.png","segments":[{"k":"red","n":4},{"k":"white","n":64,"v":0,"name":"Harde Korst"},{"k":"purple","n":28,"stars":1,"effect":"poison","name":"Gifsteek"}],"nameEn":"Spincocoon"},{"id":"p015","num":15,"name":"Wespenix","fac":"Insect","mp":3,"rar":"C","w":[{"n":44,"v":40,"name":"Dubbelnaald","effect":"knockout"}],"g":[],"p":[],"b":0,"r":52,"layout":"W44 R52","art":"art/p015.png","segments":[{"k":"white","n":44,"v":40,"name":"Dubbelnaald","effect":"knockout"},{"k":"red","n":52}],"nameEn":"Waspex"},{"id":"p016","num":16,"name":"Donswiek","fac":"Vlieg","mp":3,"rar":"C","w":[{"n":18,"v":30,"name":"Vleugel"},{"n":12,"v":10,"name":"Pik"}],"g":[],"p":[{"n":18,"effect":"poison","stars":1,"name":"Gifspoor"}],"b":12,"r":36,"layout":"W18 R18 W12 P18 R18 B12","evo":"p017","art":"art/p016.png","nameEn":"Downwing"},{"id":"p017","num":17,"name":"Stormveer","fac":"Vlieg","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Vleugel"},{"n":12,"v":20,"name":"Pik"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","evo":"p018","art":"art/p017.png","nameEn":"Galeplume"},{"id":"p018","num":18,"name":"Hemelklauw","fac":"Vlieg","mp":3,"rar":"R","w":[{"n":18,"v":60,"name":"Vleugel"},{"n":12,"v":30,"name":"Pik"}],"g":[{"n":18,"v":60,"name":"Stormveer"}],"p":[{"n":12,"effect":"burn","stars":2,"name":"Gloed"}],"b":18,"r":18,"layout":"G18 W18 R6 W12 P12 R12 B18","ability":"fly","art":"art/p018.png","nameEn":"Skytalon"},{"id":"p019","num":19,"name":"Knaagmuis","fac":"Normaal","mp":2,"rar":"C","w":[{"n":68,"v":10,"name":"Stoot"}],"g":[{"n":24,"v":40,"name":"Snelstoet"}],"p":[],"b":0,"r":4,"layout":"G24 W68 R4","evo":"p020","art":"art/p019.png","segments":[{"k":"gold","n":24,"v":40,"name":"Snelstoet"},{"k":"white","n":68,"v":10,"name":"Stoot"},{"k":"red","n":4}],"ability":"undying","nameEn":"Nibblit"},{"id":"p020","num":20,"name":"Bijtrats","fac":"Normaal","mp":2,"rar":"C","w":[{"n":28,"v":70,"name":"Hyperbeet"},{"n":64,"v":10,"name":"Stoot"}],"g":[],"p":[],"b":0,"r":4,"layout":"W28 W64 R4","ability":"stalk","art":"art/p020.png","segments":[{"k":"white","n":28,"v":70,"name":"Hyperbeet"},{"k":"white","n":64,"v":10,"name":"Stoot"},{"k":"red","n":4}],"nameEn":"Gnawrat"},{"id":"p021","num":21,"name":"Speerpik","fac":"Vlieg","mp":2,"rar":"C","w":[{"n":16,"v":40,"name":"Pik"}],"g":[],"p":[{"n":44,"effect":"curse","stars":3,"name":"Wegvlucht"}],"b":0,"r":36,"layout":"R20 W16 R16 P44","evo":"p022","art":"art/p021.png","segments":[{"k":"red","n":20},{"k":"white","n":16,"v":40,"name":"Pik"},{"k":"red","n":16},{"k":"purple","n":44,"stars":3,"effect":"curse","name":"Wegvlucht"}],"nameEn":"Spearpeck"},{"id":"p022","num":22,"name":"Snavelwind","fac":"Vlieg","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Vleugel"},{"n":12,"v":20,"name":"Pik"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","art":"art/p022.png","nameEn":"Beakgale"},{"id":"p023","num":23,"name":"Slingslang","fac":"Giftig","mp":3,"rar":"C","w":[{"n":24,"v":20,"name":"Wikkel"},{"n":24,"v":20,"name":"Wikkel"}],"g":[],"p":[{"n":28,"effect":"poison","stars":2,"name":"Gifspuug"}],"b":0,"r":20,"layout":"W24 P28 W24 R20","evo":"p024","art":"art/p023.png","segments":[{"k":"white","n":24,"v":20,"name":"Wikkel"},{"k":"purple","n":28,"stars":2,"effect":"poison","name":"Gifspuug"},{"k":"white","n":24,"v":20,"name":"Wikkel"},{"k":"red","n":20}],"nameEn":"Coilsnake"},{"id":"p024","num":24,"name":"Kapslang","fac":"Giftig","mp":2,"rar":"U","w":[{"n":28,"v":40,"name":"Gifbeet","effect":"knockout"}],"g":[],"p":[{"n":32,"effect":"paralysis","stars":2,"name":"Staarblick"}],"b":28,"r":8,"layout":"B28 P32 W28 R8","ability":"shed","art":"art/p024.png","segments":[{"k":"blue","n":28,"name":"Ontwijk"},{"k":"purple","n":32,"stars":2,"effect":"paralysis","name":"Staarblick"},{"k":"white","n":28,"v":40,"name":"Gifbeet","effect":"knockout"},{"k":"red","n":8}],"nameEn":"Hoodviper"},{"id":"p025","num":25,"name":"Pipvolt","fac":"Elektro","mp":2,"rar":"U","w":[{"n":24,"v":40,"name":"Donderschok"},{"n":24,"v":100,"name":"Donderstraal"},{"n":24,"v":40,"name":"Donderschok"}],"g":[],"p":[],"b":4,"r":20,"layout":"W24 R12 W24 R8 W24 B4","evo":"p026","ability":"stalk","art":"art/scout.png","segments":[{"k":"white","n":24,"v":40,"name":"Donderschok"},{"k":"red","n":12},{"k":"white","n":24,"v":100,"name":"Donderstraal"},{"k":"red","n":8},{"k":"white","n":24,"v":40,"name":"Donderschok"},{"k":"blue","n":4,"name":"Ontwijk"}],"nameEn":"Pipvolt"},{"id":"p026","num":26,"name":"Sparkwit","fac":"Elektro","mp":2,"rar":"U","w":[{"n":28,"v":100,"name":"Donder"},{"n":52,"v":40,"name":"Donderstoot","effect":"knockout"}],"g":[],"p":[],"b":0,"r":16,"layout":"R8 W28 R8 W52","art":"art/archer.png","segments":[{"k":"red","n":8},{"k":"white","n":28,"v":100,"name":"Donder"},{"k":"red","n":8},{"k":"white","n":52,"v":40,"name":"Donderstoot","effect":"knockout"}],"ability":"grounding","nameEn":"Sparkwit"},{"id":"p027","num":27,"name":"Zandmuis","fac":"Bodem","mp":2,"rar":"C","w":[{"n":24,"v":40,"name":"Snee"},{"n":16,"v":10,"name":"Krab"},{"n":28,"v":40,"name":"Snee"},{"n":24,"v":0,"name":"Verdedigrol","effect":"knockout"}],"g":[],"p":[],"b":0,"r":4,"layout":"W24 W16 W28 W24 R4","evo":"p028","art":"art/p027.png","segments":[{"k":"white","n":24,"v":40,"name":"Snee"},{"k":"white","n":16,"v":10,"name":"Krab"},{"k":"white","n":28,"v":40,"name":"Snee"},{"k":"white","n":24,"v":0,"name":"Verdedigrol","effect":"knockout"},{"k":"red","n":4}],"nameEn":"Sandmouse"},{"id":"p028","num":28,"name":"Zandklauw","fac":"Bodem","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Zandhaak"},{"n":12,"v":20,"name":"Graaf"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p028.png","nameEn":"Sandclaw"},{"id":"p029","num":29,"name":"Paarsnaald","fac":"Giftig","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Gifbeet"},{"n":12,"v":10,"name":"Naald"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p030","art":"art/p029.png","nameEn":"Lilacsting"},{"id":"p030","num":30,"name":"Stekeldo","fac":"Giftig","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Gifbeet"},{"n":12,"v":20,"name":"Naald"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","evo":"p031","art":"art/p030.png","nameEn":"Spikette"},{"id":"p031","num":31,"name":"Kroonstoot","fac":"Giftig","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Gifbeet"},{"n":12,"v":40,"name":"Naald"}],"g":[{"n":18,"v":50,"name":"Slijm"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","ability":"mountain","art":"art/p031.png","nameEn":"Crownram"},{"id":"p032","num":32,"name":"Horensprong","fac":"Giftig","mp":2,"rar":"C","w":[{"n":28,"v":40,"name":"Gifval","effect":"knockout"},{"n":16,"v":70,"name":"Hoornstoot"}],"g":[],"p":[{"n":24,"effect":"poison","stars":1,"name":"Gifsteek"}],"b":0,"r":28,"layout":"W28 W16 P24 R28","evo":"p033","art":"art/p032.png","segments":[{"k":"white","n":28,"v":40,"name":"Gifval","effect":"knockout"},{"k":"white","n":16,"v":70,"name":"Hoornstoot"},{"k":"purple","n":24,"stars":1,"effect":"poison","name":"Gifsteek"},{"k":"red","n":28}],"nameEn":"Hornleap"},{"id":"p033","num":33,"name":"Horendo","fac":"Giftig","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Gifbeet"},{"n":12,"v":20,"name":"Naald"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","evo":"p034","art":"art/p033.png","nameEn":"Hornette"},{"id":"p034","num":34,"name":"Titaanhoorn","fac":"Giftig","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Gifbeet"},{"n":12,"v":40,"name":"Naald"}],"g":[{"n":18,"v":50,"name":"Slijm"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p034.png","nameEn":"Titanhorn"},{"id":"p035","num":35,"name":"Parelfee","fac":"Normaal","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Aanval"},{"n":12,"v":10,"name":"Stoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p036","ability":"blessing","art":"art/p035.png","nameEn":"Pearlfey"},{"id":"p036","num":36,"name":"Parelprinses","fac":"Normaal","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p036.png","nameEn":"Pearlprincess"},{"id":"p037","num":37,"name":"Vosvlam","fac":"Vuur","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Sintelvonk"},{"n":12,"v":10,"name":"Krab"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p038","art":"art/p037.png","nameEn":"Foxember"},{"id":"p038","num":38,"name":"Vosnova","fac":"Vuur","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Sintelvonk"},{"n":12,"v":40,"name":"Krab"}],"g":[{"n":18,"v":50,"name":"Vlamzuil"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p038.png","nameEn":"Foxnova"},{"id":"p039","num":39,"name":"Rozeblazer","fac":"Normaal","mp":2,"rar":"R","w":[{"n":12,"v":70,"name":"Hyperstem"},{"n":36,"v":40,"name":"Dubbelklap"}],"g":[],"p":[{"n":36,"effect":"sleep","stars":1,"name":"Lullaby"}],"b":0,"r":12,"layout":"R12 P36 W12 W36","evo":"p040","art":"art/p039.png","segments":[{"k":"red","n":12},{"k":"purple","n":36,"stars":1,"effect":"sleep","name":"Lullaby"},{"k":"white","n":12,"v":70,"name":"Hyperstem"},{"k":"white","n":36,"v":40,"name":"Dubbelklap"}],"nameEn":"Rosepuff"},{"id":"p040","num":40,"name":"Zangballon","fac":"Normaal","mp":2,"rar":"R","w":[{"n":24,"v":20,"name":"Round"},{"n":28,"v":50,"name":"Slaan"}],"g":[],"p":[{"n":32,"effect":"sleep","stars":1,"name":"Zang"}],"b":0,"r":12,"layout":"R8 W24 P32 R4 W28","art":"art/p040.png","segments":[{"k":"red","n":8},{"k":"white","n":24,"v":20,"name":"Round"},{"k":"purple","n":32,"stars":1,"effect":"sleep","name":"Zang"},{"k":"red","n":4},{"k":"white","n":28,"v":50,"name":"Slaan"}],"nameEn":"Songballoon"},{"id":"p041","num":41,"name":"Fladdervleer","fac":"Giftig","mp":3,"rar":"C","w":[{"n":32,"v":20,"name":"Bloedzuiger"},{"n":12,"v":40,"name":"Luchtsnijder"}],"g":[],"p":[{"n":32,"effect":"confusion","stars":2,"name":"Supersonisch"}],"b":0,"r":20,"layout":"W32 W12 P32 R20","evo":"p042","ability":"fly","art":"art/p041.png","segments":[{"k":"white","n":32,"v":20,"name":"Bloedzuiger"},{"k":"white","n":12,"v":40,"name":"Luchtsnijder"},{"k":"purple","n":32,"stars":2,"effect":"confusion","name":"Supersonisch"},{"k":"red","n":20}],"nameEn":"Flitterbat"},{"id":"p042","num":42,"name":"Echoot","fac":"Giftig","mp":2,"rar":"U","w":[{"n":28,"v":30,"name":"Bloedzuiger"},{"n":24,"v":60,"name":"Beet"}],"g":[],"p":[{"n":24,"effect":"curse","stars":3,"name":"Dwaalstraal"}],"b":0,"r":20,"layout":"W28 W24 P24 R20","art":"art/p042.png","segments":[{"k":"white","n":28,"v":30,"name":"Bloedzuiger"},{"k":"white","n":24,"v":60,"name":"Beet"},{"k":"purple","n":24,"stars":3,"effect":"curse","name":"Dwaalstraal"},{"k":"red","n":20}],"nameEn":"Echoling"},{"id":"p043","num":43,"name":"Wortelknop","fac":"Gras","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Loofrank"},{"n":12,"v":10,"name":"Bladstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p044","art":"art/p043.png","nameEn":"Rootbud"},{"id":"p044","num":44,"name":"Stinkbloem","fac":"Gras","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Loofrank"},{"n":12,"v":20,"name":"Bladstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","evo":"p045","art":"art/p044.png","nameEn":"Reekbloom"},{"id":"p045","num":45,"name":"Kroonbloem","fac":"Gras","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Loofrank"},{"n":12,"v":40,"name":"Bladstoot"}],"g":[{"n":18,"v":50,"name":"Pollenwals"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p045.png","nameEn":"Crownbloom"},{"id":"p046","num":46,"name":"Scheurzwam","fac":"Insect","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Draad"},{"n":12,"v":10,"name":"Aanval"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p047","art":"art/p046.png","nameEn":"Tearshroom"},{"id":"p047","num":47,"name":"Parasolum","fac":"Insect","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Draad"},{"n":12,"v":20,"name":"Aanval"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p047.png","nameEn":"Parasolum"},{"id":"p048","num":48,"name":"Mottenoog","fac":"Insect","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Draad"},{"n":12,"v":10,"name":"Aanval"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p049","art":"art/p048.png","nameEn":"Motheye"},{"id":"p049","num":49,"name":"Motnacht","fac":"Insect","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Draad"},{"n":12,"v":20,"name":"Aanval"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p049.png","nameEn":"Nighthmoth"},{"id":"p050","num":50,"name":"Graveltunnel","fac":"Bodem","mp":2,"rar":"U","w":[{"n":20,"v":40,"name":"Flauwe Aanval"},{"n":32,"v":20,"name":"Krab"}],"g":[],"p":[{"n":40,"effect":"curse","stars":2,"name":"Graaf"}],"b":0,"r":4,"layout":"W20 P40 W32 R4","evo":"p051","art":"art/p050.png","segments":[{"k":"white","n":20,"v":40,"name":"Flauwe Aanval"},{"k":"purple","n":40,"stars":2,"effect":"curse","name":"Graaf"},{"k":"white","n":32,"v":20,"name":"Krab"},{"k":"red","n":4}],"nameEn":"Graveldigger"},{"id":"p051","num":51,"name":"Drietunnel","fac":"Bodem","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Zandhaak"},{"n":12,"v":20,"name":"Graaf"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","art":"art/p051.png","nameEn":"Tripletunnel"},{"id":"p052","num":52,"name":"Snoetkat","fac":"Normaal","mp":2,"rar":"R","w":[{"n":36,"v":40,"name":"Krab"}],"g":[],"p":[{"n":32,"effect":"curse","stars":3,"name":"Afleidingsklap"}],"b":20,"r":8,"layout":"P32 W36 B20 R8","evo":"p053","art":"art/p052.png","segments":[{"k":"purple","n":32,"stars":3,"effect":"curse","name":"Afleidingsklap"},{"k":"white","n":36,"v":40,"name":"Krab"},{"k":"blue","n":20,"name":"Ontwijk"},{"k":"red","n":8}],"nameEn":"Snoutcat"},{"id":"p053","num":53,"name":"Snoetheer","fac":"Normaal","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","art":"art/p053.png","nameEn":"Snoutlord"},{"id":"p054","num":54,"name":"Koptol","fac":"Water","mp":2,"rar":"U","w":[{"n":24,"v":60,"name":"Waterpuls"},{"n":32,"v":40,"name":"Superpsy","effect":"knockout"}],"g":[],"p":[{"n":28,"effect":"wait","stars":2,"name":"Blokkeer"}],"b":0,"r":12,"layout":"W24 W32 P28 R12","evo":"p055","art":"art/p054.png","segments":[{"k":"white","n":24,"v":60,"name":"Waterpuls"},{"k":"white","n":32,"v":40,"name":"Superpsy","effect":"knockout"},{"k":"purple","n":28,"stars":2,"effect":"wait","name":"Blokkeer"},{"k":"red","n":12}],"nameEn":"Headspin"},{"id":"p055","num":55,"name":"Kopzee","fac":"Water","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Waterstraal"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p055.png","nameEn":"Headsea"},{"id":"p056","num":56,"name":"Woedekop","fac":"Vecht","mp":3,"rar":"C","w":[{"n":28,"v":20,"name":"Krab"},{"n":28,"v":50,"name":"Uitbarsting"}],"g":[],"p":[{"n":28,"effect":"curse","stars":1,"name":"Tease"}],"b":0,"r":12,"layout":"R12 W28 W28 P28","evo":"p057","art":"art/p056.png","segments":[{"k":"red","n":12},{"k":"white","n":28,"v":20,"name":"Krab"},{"k":"white","n":28,"v":50,"name":"Uitbarsting"},{"k":"purple","n":28,"stars":1,"effect":"curse","name":"Tease"}],"nameEn":"Ragehead"},{"id":"p057","num":57,"name":"Woedevuist","fac":"Vecht","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Stoot"},{"n":12,"v":20,"name":"Trap"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","art":"art/p057.png","nameEn":"Ragefist"},{"id":"p058","num":58,"name":"Vuurhond","fac":"Vuur","mp":3,"rar":"R","w":[{"n":52,"v":50,"name":"Vlamwiel","effect":"knockout"}],"g":[],"p":[],"b":0,"r":44,"layout":"R8 R8 W52 R28","evo":"p059","ability":"pack","art":"art/p058.png","segments":[{"k":"red","n":8},{"k":"red","n":8},{"k":"white","n":52,"v":50,"name":"Vlamwiel","effect":"knockout"},{"k":"red","n":28}],"nameEn":"Flamepup"},{"id":"p059","num":59,"name":"Leeuwvlam","fac":"Vuur","mp":2,"rar":"R","w":[{"n":24,"v":80,"name":"Vlamstoot","effect":"knockout"}],"g":[],"p":[{"n":20,"effect":"burn","stars":2,"name":"Gloedschot"}],"b":0,"r":52,"layout":"R8 P20 W24 R4 R40","art":"art/p059.png","segments":[{"k":"red","n":8},{"k":"purple","n":20,"stars":2,"effect":"burn","name":"Gloedschot"},{"k":"white","n":24,"v":80,"name":"Vlamstoot","effect":"knockout"},{"k":"red","n":4},{"k":"red","n":40}],"nameEn":"Lionblaze"},{"id":"p060","num":60,"name":"Kikkervis","fac":"Water","mp":3,"rar":"C","w":[{"n":24,"v":20,"name":"Bel"},{"n":24,"v":20,"name":"Bel"}],"g":[],"p":[{"n":28,"effect":"sleep","stars":2,"name":"Hypnose"}],"b":16,"r":4,"layout":"W24 P28 W24 B16 R4","evo":"p061","art":"art/p060.png","segments":[{"k":"white","n":24,"v":20,"name":"Bel"},{"k":"purple","n":28,"stars":2,"effect":"sleep","name":"Hypnose"},{"k":"white","n":24,"v":20,"name":"Bel"},{"k":"blue","n":16,"name":"Ontwijk"},{"k":"red","n":4}],"nameEn":"Tadling"},{"id":"p061","num":61,"name":"Kikkerslag","fac":"Water","mp":2,"rar":"U","w":[{"n":16,"v":50,"name":"Waterstraal"},{"n":48,"v":40,"name":"Waterstraal"}],"g":[],"p":[{"n":24,"effect":"sleep","stars":2,"name":"Hypnose"}],"b":0,"r":8,"layout":"R8 W16 W48 P24","evo":"p062","art":"art/p061.png","segments":[{"k":"red","n":8},{"k":"white","n":16,"v":50,"name":"Waterstraal"},{"k":"white","n":48,"v":40,"name":"Waterstraal"},{"k":"purple","n":24,"stars":2,"effect":"sleep","name":"Hypnose"}],"nameEn":"Frogstrike"},{"id":"p062","num":62,"name":"Kikkerkroon","fac":"Water","mp":2,"rar":"R","w":[{"n":36,"v":100,"name":"Dynamovuist"},{"n":44,"v":40,"name":"Dubbelklap"}],"g":[],"p":[],"b":0,"r":16,"layout":"R8 W36 R8 W44","art":"art/p062.png","segments":[{"k":"red","n":8},{"k":"white","n":36,"v":100,"name":"Dynamovuist"},{"k":"red","n":8},{"k":"white","n":44,"v":40,"name":"Dubbelklap"}],"ability":"enchant","nameEn":"Frogcrown"},{"id":"p063","num":63,"name":"Flitsbrein","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":16,"v":20,"name":"Zenkopstoot","effect":"wait"}],"g":[],"p":[{"n":28,"effect":"curse","stars":3,"name":"Teleporteer"},{"n":28,"effect":"curse","stars":3,"name":"Teleporteer"}],"b":20,"r":4,"layout":"P28 R4 W16 P28 B20","evo":"p064","art":"art/p063.png","segments":[{"k":"purple","n":28,"stars":3,"effect":"curse","name":"Teleporteer"},{"k":"red","n":4},{"k":"white","n":16,"v":20,"name":"Zenkopstoot","effect":"wait"},{"k":"purple","n":28,"stars":3,"effect":"curse","name":"Teleporteer"},{"k":"blue","n":20,"name":"Gevaarszin"}],"ability":"sturdy","nameEn":"Flashmind"},{"id":"p064","num":64,"name":"Lepelwaker","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":36,"v":60,"name":"Superpsy","effect":"knockout"}],"g":[],"p":[{"n":20,"effect":"confusion","stars":2,"name":"Teleportstraal"},{"n":20,"effect":"confusion","stars":2,"name":"Teleportstraal"}],"b":16,"r":4,"layout":"P20 R4 W36 P20 B16","evo":"p065","art":"art/p064.png","segments":[{"k":"purple","n":20,"stars":2,"effect":"confusion","name":"Teleportstraal"},{"k":"red","n":4},{"k":"white","n":36,"v":60,"name":"Superpsy","effect":"knockout"},{"k":"purple","n":20,"stars":2,"effect":"confusion","name":"Teleportstraal"},{"k":"blue","n":16,"name":"Wissen"}],"nameEn":"Spoonward"},{"id":"p065","num":65,"name":"Mentora","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":28,"v":110,"name":"Psyknal"}],"g":[],"p":[{"n":24,"effect":"wait","stars":2,"name":"Stilblind"},{"n":24,"effect":"knockout","stars":3,"name":"Psyschok"}],"b":20,"r":0,"layout":"P24 W28 P24 B20","ability":"enchant","art":"art/p065.png","segments":[{"k":"purple","n":24,"stars":2,"effect":"wait","name":"Stilblind"},{"k":"white","n":28,"v":110,"name":"Psyknal"},{"k":"purple","n":24,"stars":3,"effect":"knockout","name":"Psyschok"},{"k":"blue","n":20,"name":"Psywisseling"}],"nameEn":"Mentora"},{"id":"p066","num":66,"name":"Vuistling","fac":"Vecht","mp":2,"rar":"C","w":[{"n":56,"v":40,"name":"Focusvuist"}],"g":[],"p":[],"b":28,"r":12,"layout":"R8 W56 B28 R4","evo":"p067","art":"art/p066.png","segments":[{"k":"red","n":8},{"k":"white","n":56,"v":40,"name":"Focusvuist"},{"k":"blue","n":28,"name":"Ontwijk"},{"k":"red","n":4}],"nameEn":"Fistling"},{"id":"p067","num":67,"name":"Spierarm","fac":"Vecht","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Stoot"},{"n":12,"v":20,"name":"Trap"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","evo":"p068","art":"art/p067.png","nameEn":"Musclearm"},{"id":"p068","num":68,"name":"Viervuist","fac":"Vecht","mp":2,"rar":"R","w":[{"n":24,"v":60,"name":"Karatehak"},{"n":28,"v":80,"name":"Onderwerping"},{"n":24,"v":60,"name":"Karatehak"}],"g":[],"p":[],"b":12,"r":8,"layout":"R4 W24 W28 W24 R4 B12","art":"art/p068.png","segments":[{"k":"red","n":4},{"k":"white","n":24,"v":60,"name":"Karatehak"},{"k":"white","n":28,"v":80,"name":"Onderwerping"},{"k":"white","n":24,"v":60,"name":"Karatehak"},{"k":"red","n":4},{"k":"blue","n":12,"name":"Ontwijk"}],"ability":"guts","nameEn":"Fourfist"},{"id":"p069","num":69,"name":"Rankplant","fac":"Gras","mp":2,"rar":"U","w":[{"n":36,"v":20,"name":"Rankzweep"}],"g":[],"p":[{"n":32,"effect":"wait","stars":1,"name":"Zoete Geur"},{"n":20,"effect":"sleep","stars":1,"name":"Slaappoeder"}],"b":0,"r":8,"layout":"P32 R8 P20 W36","evo":"p070","art":"art/p069.png","segments":[{"k":"purple","n":32,"stars":1,"effect":"wait","name":"Zoete Geur"},{"k":"red","n":8},{"k":"purple","n":20,"stars":1,"effect":"sleep","name":"Slaappoeder"},{"k":"white","n":36,"v":20,"name":"Rankzweep"}],"nameEn":"Vineplant"},{"id":"p070","num":70,"name":"Rankbeet","fac":"Gras","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Loofrank"},{"n":12,"v":20,"name":"Bladstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","evo":"p071","art":"art/p070.png","nameEn":"Vinebite"},{"id":"p071","num":71,"name":"Vliegenval","fac":"Gras","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Loofrank"},{"n":12,"v":40,"name":"Bladstoot"}],"g":[{"n":18,"v":50,"name":"Pollenwals"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p071.png","nameEn":"Flytrapper"},{"id":"p072","num":72,"name":"Kwalgel","fac":"Water","mp":2,"rar":"U","w":[{"n":52,"v":40,"name":"Tentakelspervuur"}],"g":[],"p":[{"n":32,"effect":"poison","stars":1,"name":"Gifsteek"}],"b":0,"r":12,"layout":"R8 W52 R4 P32","evo":"p073","art":"art/p072.png","segments":[{"k":"red","n":8},{"k":"white","n":52,"v":40,"name":"Tentakelspervuur"},{"k":"red","n":4},{"k":"purple","n":32,"stars":1,"effect":"poison","name":"Gifsteek"}],"nameEn":"Jellsting"},{"id":"p073","num":73,"name":"Kwalnet","fac":"Water","mp":1,"rar":"R","w":[{"n":56,"v":80,"name":"Tentakelsteek","effect":"knockout"}],"g":[],"p":[{"n":24,"effect":"knockout","stars":2,"name":"Spiegeljas"}],"b":0,"r":16,"layout":"R8 W56 R8 P24","ability":"rot","art":"art/p073.png","segments":[{"k":"red","n":8},{"k":"white","n":56,"v":80,"name":"Tentakelsteek","effect":"knockout"},{"k":"red","n":8},{"k":"purple","n":24,"stars":2,"effect":"knockout","name":"Spiegeljas"}],"nameEn":"Jellnet"},{"id":"p074","num":74,"name":"Kiezelkop","fac":"Steen","mp":2,"rar":"C","w":[{"n":40,"v":30,"name":"Uitrol"},{"n":24,"v":40,"name":"Steenworp"}],"g":[],"p":[{"n":24,"effect":"knockout","stars":3,"name":"Zelfontploffing"}],"b":0,"r":8,"layout":"P24 W40 W24 R8","evo":"p075","art":"art/p074.png","segments":[{"k":"purple","n":24,"stars":3,"effect":"knockout","name":"Zelfontploffing"},{"k":"white","n":40,"v":30,"name":"Uitrol"},{"k":"white","n":24,"v":40,"name":"Steenworp"},{"k":"red","n":8}],"nameEn":"Pebblehead"},{"id":"p075","num":75,"name":"Broksteen","fac":"Steen","mp":1,"rar":"C","w":[{"n":40,"v":40,"name":"Uitrol"}],"g":[],"p":[{"n":40,"effect":"wait","stars":1,"name":"Landslide"}],"b":0,"r":16,"layout":"R8 W40 R8 P40","evo":"p076","art":"art/p075.png","segments":[{"k":"red","n":8},{"k":"white","n":40,"v":40,"name":"Uitrol"},{"k":"red","n":8},{"k":"purple","n":40,"stars":1,"effect":"wait","name":"Landslide"}],"nameEn":"Chunkrock"},{"id":"p076","num":76,"name":"Bergreus","fac":"Steen","mp":1,"rar":"U","w":[{"n":24,"v":40,"name":"Steenworp"},{"n":40,"v":60,"name":"Steenregen"},{"n":24,"v":30,"name":"Rotsmuur","effect":"knockout"}],"g":[],"p":[],"b":0,"r":8,"layout":"W24 W40 W24 R8","ability":"mountain","art":"art/p076.png","segments":[{"k":"white","n":24,"v":40,"name":"Steenworp"},{"k":"white","n":40,"v":60,"name":"Steenregen"},{"k":"white","n":24,"v":30,"name":"Rotsmuur","effect":"knockout"},{"k":"red","n":8}],"nameEn":"Peakgiant"},{"id":"p077","num":77,"name":"Vlampony","fac":"Vuur","mp":3,"rar":"U","w":[{"n":32,"v":80,"name":"Vlamwiel","effect":"knockout"}],"g":[],"p":[{"n":32,"effect":"wait","stars":1,"name":"Wegtrappen"}],"b":20,"r":12,"layout":"R4 W32 R4 B20 R4 P32","evo":"p078","art":"art/p077.png","segments":[{"k":"red","n":4},{"k":"white","n":32,"v":80,"name":"Vlamwiel","effect":"knockout"},{"k":"red","n":4},{"k":"blue","n":20,"name":"Ontwijk"},{"k":"red","n":4},{"k":"purple","n":32,"stars":1,"effect":"wait","name":"Wegtrappen"}],"nameEn":"Flamepony"},{"id":"p078","num":78,"name":"Vlamrenner","fac":"Vuur","mp":2,"rar":"R","w":[{"n":32,"v":130,"name":"Overhit"},{"n":32,"v":80,"name":"Vlamstoot","effect":"knockout"}],"g":[],"p":[{"n":20,"effect":"knockout","stars":1,"name":"Hoornboor"}],"b":0,"r":12,"layout":"R4 W32 R4 P20 R4 W32","art":"art/p078.png","segments":[{"k":"red","n":4},{"k":"white","n":32,"v":130,"name":"Overhit"},{"k":"red","n":4},{"k":"purple","n":20,"stars":1,"effect":"knockout","name":"Hoornboor"},{"k":"red","n":4},{"k":"white","n":32,"v":80,"name":"Vlamstoot","effect":"knockout"}],"nameEn":"Flameracer"},{"id":"p079","num":79,"name":"Traagpoel","fac":"Water","mp":1,"rar":"R","w":[{"n":28,"v":120,"name":"Psyknal"}],"g":[],"p":[{"n":24,"effect":"curse","stars":2,"name":"Truukkamer"},{"n":36,"effect":"sleep","stars":1,"name":"Geeuw"}],"b":0,"r":8,"layout":"R8 P24 P36 W28","evo":"p080","art":"art/p079.png","segments":[{"k":"red","n":8},{"k":"purple","n":24,"stars":2,"effect":"curse","name":"Truukkamer"},{"k":"purple","n":36,"stars":1,"effect":"sleep","name":"Geeuw"},{"k":"white","n":28,"v":120,"name":"Psyknal"}],"ability":"grounding","nameEn":"Slowpool"},{"id":"p080","num":80,"name":"Traagwijs","fac":"Water","mp":1,"rar":"U","w":[{"n":24,"v":60,"name":"Waterstraal"},{"n":12,"v":30,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":30,"r":18,"layout":"W18 R6 W18 P12 R12 B30","art":"art/p080.png","nameEn":"Slowwise"},{"id":"p081","num":81,"name":"Magneetje","fac":"Elektro","mp":3,"rar":"C","w":[{"n":40,"v":20,"name":"Vonk"}],"g":[],"p":[{"n":40,"effect":"paralysis","stars":2,"name":"Dondergolf"}],"b":8,"r":8,"layout":"R8 P40 B8 W40","evo":"p082","art":"art/p081.png","segments":[{"k":"red","n":8},{"k":"purple","n":40,"stars":2,"effect":"paralysis","name":"Dondergolf"},{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":40,"v":20,"name":"Vonk"}],"nameEn":"Magnetite"},{"id":"p082","num":82,"name":"Magneetdrie","fac":"Elektro","mp":2,"rar":"R","w":[{"n":24,"v":40,"name":"Driedubbel","effect":"knockout"},{"n":24,"v":40,"name":"Driedubbel","effect":"knockout"},{"n":24,"v":40,"name":"Driedubbel","effect":"knockout"}],"g":[],"p":[],"b":16,"r":8,"layout":"W24 B8 W24 B8 W24 R8","art":"art/p082.png","segments":[{"k":"white","n":24,"v":40,"name":"Driedubbel","effect":"knockout"},{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":24,"v":40,"name":"Driedubbel","effect":"knockout"},{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":24,"v":40,"name":"Driedubbel","effect":"knockout"},{"k":"red","n":8}],"nameEn":"Magtriple"},{"id":"p083","num":83,"name":"Snepsnavel","fac":"Normaal","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Aanval"},{"n":12,"v":10,"name":"Stoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","art":"art/p083.png","nameEn":"Snipbeak"},{"id":"p084","num":84,"name":"Tweeloop","fac":"Normaal","mp":3,"rar":"C","w":[{"n":16,"v":20,"name":"Pik"},{"n":48,"v":20,"name":"Razernij"},{"n":16,"v":10,"name":"Pik"}],"g":[],"p":[],"b":12,"r":4,"layout":"W16 W48 W16 B12 R4","evo":"p085","art":"art/p084.png","segments":[{"k":"white","n":16,"v":20,"name":"Pik"},{"k":"white","n":48,"v":20,"name":"Razernij"},{"k":"white","n":16,"v":10,"name":"Pik"},{"k":"blue","n":12,"name":"Ontwijk"},{"k":"red","n":4}],"nameEn":"Twinrun"},{"id":"p085","num":85,"name":"Drieloop","fac":"Normaal","mp":3,"rar":"U","w":[{"n":24,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":18,"r":30,"layout":"W18 R12 W18 P12 R18 B18","art":"art/p085.png","nameEn":"Trirun"},{"id":"p086","num":86,"name":"IJszegel","fac":"Water","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Waterstraal"},{"n":12,"v":10,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p087","art":"art/p086.png","nameEn":"Iceseal"},{"id":"p087","num":87,"name":"IJsmaan","fac":"IJs","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Poeder"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p087.png","nameEn":"Icemoon"},{"id":"p088","num":88,"name":"Slijmhoop","fac":"Giftig","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Gifbeet"},{"n":12,"v":10,"name":"Naald"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p089","art":"art/p088.png","nameEn":"Sludgeheap"},{"id":"p089","num":89,"name":"Slijmreus","fac":"Giftig","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Gifbeet"},{"n":12,"v":20,"name":"Naald"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p089.png","nameEn":"Sludgetitan"},{"id":"p090","num":90,"name":"Schelpbijt","fac":"Water","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Waterstraal"},{"n":12,"v":10,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p091","art":"art/p090.png","nameEn":"Shellbite"},{"id":"p091","num":91,"name":"Schelpkruis","fac":"Water","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Waterstraal"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p091.png","nameEn":"Shellcross"},{"id":"p092","num":92,"name":"Neveling","fac":"Geest","mp":3,"rar":"R","w":[{"n":28,"v":0,"name":"Lotsband","effect":"knockout"},{"n":48,"v":20,"name":"Astonish"}],"g":[],"p":[],"b":0,"r":20,"layout":"W28 W48 R20","evo":"p093","art":"art/skeleton.png","segments":[{"k":"white","n":28,"v":0,"name":"Lotsband","effect":"knockout"},{"k":"white","n":48,"v":20,"name":"Astonish"},{"k":"red","n":20}],"ability":"stalk","nameEn":"Mistwisp"},{"id":"p093","num":93,"name":"Schimwolk","fac":"Geest","mp":2,"rar":"U","w":[{"n":40,"v":20,"name":"Nachtschaduw"}],"g":[],"p":[{"n":32,"effect":"badlypoison","stars":1,"name":"Toxine"}],"b":16,"r":8,"layout":"R8 P32 B16 W40","evo":"p094","ability":"stalk","art":"art/ghoul.png","segments":[{"k":"red","n":8},{"k":"purple","n":32,"stars":1,"effect":"badlypoison","name":"Toxine"},{"k":"blue","n":16,"name":"Ontwijk"},{"k":"white","n":40,"v":20,"name":"Nachtschaduw"}],"nameEn":"Shadecloud"},{"id":"p094","num":94,"name":"Nachtvorst","fac":"Geest","mp":2,"rar":"R","w":[{"n":40,"v":100,"name":"Nachtschaduw"}],"g":[],"p":[{"n":32,"effect":"wait","stars":2,"name":"Besmettelijke Angst"}],"b":16,"r":8,"layout":"R8 P32 B16 W40","ability":"stalk","art":"art/necromancer.png","segments":[{"k":"red","n":8},{"k":"purple","n":32,"stars":2,"effect":"wait","name":"Besmettelijke Angst"},{"k":"blue","n":16,"name":"Ontwijk"},{"k":"white","n":40,"v":100,"name":"Nachtschaduw"}],"nameEn":"Nightfrost"},{"id":"p095","num":95,"name":"Rotsdraak","fac":"Steen","mp":2,"rar":"R","w":[{"n":56,"v":80,"name":"Steenlawine","effect":"knockout"}],"g":[],"p":[{"n":28,"effect":"curse","stars":2,"name":"Graaf"}],"b":8,"r":4,"layout":"B8 W56 R4 P28","art":"art/p095.png","segments":[{"k":"blue","n":8,"name":"Bescherm"},{"k":"white","n":56,"v":80,"name":"Steenlawine","effect":"knockout"},{"k":"red","n":4},{"k":"purple","n":28,"stars":2,"effect":"curse","name":"Graaf"}],"nameEn":"Rockwyrm"},{"id":"p096","num":96,"name":"Droomduik","fac":"Psychisch","mp":1,"rar":"C","w":[{"n":28,"v":20,"name":"Verwarring"}],"g":[],"p":[{"n":36,"effect":"sleep","stars":2,"name":"Hypnose"}],"b":0,"r":32,"layout":"R32 P36 W28","evo":"p097","art":"art/p096.png","segments":[{"k":"red","n":32},{"k":"purple","n":36,"stars":2,"effect":"sleep","name":"Hypnose"},{"k":"white","n":28,"v":20,"name":"Verwarring"}],"ability":"insomnia","nameEn":"Dreampool"},{"id":"p097","num":97,"name":"Droomheer","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":28,"v":70,"name":"Psyknal"},{"n":28,"v":40,"name":"Verwarring"}],"g":[],"p":[{"n":28,"effect":"sleep","stars":2,"name":"Sleepwalk"}],"b":0,"r":12,"layout":"W28 P28 W28 R12","art":"art/p097.png","segments":[{"k":"white","n":28,"v":70,"name":"Psyknal"},{"k":"purple","n":28,"stars":2,"effect":"sleep","name":"Sleepwalk"},{"k":"white","n":28,"v":40,"name":"Verwarring"},{"k":"red","n":12}],"nameEn":"Dreamlord"},{"id":"p098","num":98,"name":"Krabschaar","fac":"Water","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Waterstraal"},{"n":12,"v":10,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p099","art":"art/p098.png","nameEn":"Crabscissor"},{"id":"p099","num":99,"name":"Krabhamer","fac":"Water","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Waterstraal"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p099.png","nameEn":"Crabbash"},{"id":"p100","num":100,"name":"Voltbol","fac":"Elektro","mp":3,"rar":"U","w":[{"n":32,"v":10,"name":"Stoot"},{"n":32,"v":20,"name":"Vonk"}],"g":[],"p":[{"n":28,"effect":"curse","stars":2,"name":"Explosie"}],"b":0,"r":4,"layout":"W32 P28 W32 R4","evo":"p101","art":"art/p100.png","segments":[{"k":"white","n":32,"v":10,"name":"Stoot"},{"k":"purple","n":28,"stars":2,"effect":"curse","name":"Explosie"},{"k":"white","n":32,"v":20,"name":"Vonk"},{"k":"red","n":4}],"nameEn":"Voltorb"},{"id":"p101","num":101,"name":"Voltknaller","fac":"Elektro","mp":3,"rar":"R","w":[{"n":44,"v":40,"name":"Schokknal","effect":"knockout"}],"g":[],"p":[{"n":48,"effect":"paralysis","stars":2,"name":"Dondergolf"}],"b":0,"r":4,"layout":"R4 W44 P48","art":"art/p101.png","segments":[{"k":"red","n":4},{"k":"white","n":44,"v":40,"name":"Schokknal","effect":"knockout"},{"k":"purple","n":48,"stars":2,"effect":"paralysis","name":"Dondergolf"}],"nameEn":"Voltblast"},{"id":"p102","num":102,"name":"Eihoofd","fac":"Gras","mp":2,"rar":"C","w":[{"n":12,"v":90,"name":"Spervuur"},{"n":16,"v":10,"name":"Spervuur"},{"n":16,"v":30,"name":"Spervuur"},{"n":16,"v":50,"name":"Spervuur"},{"n":16,"v":70,"name":"Spervuur"}],"g":[],"p":[],"b":0,"r":20,"layout":"W12 R20 W16 W16 W16 W16","evo":"p103","art":"art/p102.png","segments":[{"k":"white","n":12,"v":90,"name":"Spervuur"},{"k":"red","n":20},{"k":"white","n":16,"v":10,"name":"Spervuur"},{"k":"white","n":16,"v":30,"name":"Spervuur"},{"k":"white","n":16,"v":50,"name":"Spervuur"},{"k":"white","n":16,"v":70,"name":"Spervuur"}],"nameEn":"Egghead"},{"id":"p103","num":103,"name":"Palmkop","fac":"Gras","mp":1,"rar":"U","w":[{"n":32,"v":70,"name":"Spervuur"},{"n":32,"v":70,"name":"Spervuur"}],"g":[],"p":[{"n":28,"effect":"paralysis","stars":1,"name":"Verdovingspoor"}],"b":0,"r":4,"layout":"W32 W32 P28 R4","art":"art/p103.png","segments":[{"k":"white","n":32,"v":70,"name":"Spervuur"},{"k":"white","n":32,"v":70,"name":"Spervuur"},{"k":"purple","n":28,"stars":1,"effect":"paralysis","name":"Verdovingspoor"},{"k":"red","n":4}],"nameEn":"Palmcrown"},{"id":"p104","num":104,"name":"Botbeest","fac":"Bodem","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Zandhaak"},{"n":12,"v":10,"name":"Graaf"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p105","art":"art/p104.png","nameEn":"Bonebeast"},{"id":"p105","num":105,"name":"Botkrijger","fac":"Bodem","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Zandhaak"},{"n":12,"v":20,"name":"Graaf"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p105.png","nameEn":"Bonewarrior"},{"id":"p106","num":106,"name":"Trapvoet","fac":"Vecht","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Stoot"},{"n":12,"v":40,"name":"Trap"}],"g":[{"n":18,"v":50,"name":"Karate"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p106.png","nameEn":"Kickfoot"},{"id":"p107","num":107,"name":"Vuistslag","fac":"Vecht","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Stoot"},{"n":12,"v":40,"name":"Trap"}],"g":[{"n":18,"v":50,"name":"Karate"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p107.png","nameEn":"Punchstrike"},{"id":"p108","num":108,"name":"Likton","fac":"Normaal","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p108.png","nameEn":"Lickton"},{"id":"p109","num":109,"name":"Gaswolk","fac":"Giftig","mp":2,"rar":"C","w":[{"n":40,"v":30,"name":"Slijk","effect":"knockout"}],"g":[],"p":[{"n":44,"effect":"poison","stars":1,"name":"Smog"}],"b":0,"r":12,"layout":"R8 P44 R4 W40","evo":"p110","art":"art/p109.png","segments":[{"k":"red","n":8},{"k":"purple","n":44,"stars":1,"effect":"poison","name":"Smog"},{"k":"red","n":4},{"k":"white","n":40,"v":30,"name":"Slijk","effect":"knockout"}],"nameEn":"Gascloud"},{"id":"p110","num":110,"name":"Gasreus","fac":"Giftig","mp":2,"rar":"U","w":[{"n":56,"v":50,"name":"Slijkbom","effect":"knockout"}],"g":[],"p":[{"n":32,"effect":"poison","stars":2,"name":"Gifgas"}],"b":0,"r":8,"layout":"W56 P32 R8","art":"art/p110.png","segments":[{"k":"white","n":56,"v":50,"name":"Slijkbom","effect":"knockout"},{"k":"purple","n":32,"stars":2,"effect":"poison","name":"Gifgas"},{"k":"red","n":8}],"nameEn":"Gastitan"},{"id":"p111","num":111,"name":"Neushoorn","fac":"Bodem","mp":1,"rar":"C","w":[{"n":24,"v":90,"name":"Hyperhaal","effect":"knockout"},{"n":48,"v":40,"name":"Stamp"}],"g":[],"p":[],"b":0,"r":24,"layout":"R12 W24 R12 W48","evo":"p112","art":"art/p111.png","segments":[{"k":"red","n":12},{"k":"white","n":24,"v":90,"name":"Hyperhaal","effect":"knockout"},{"k":"red","n":12},{"k":"white","n":48,"v":40,"name":"Stamp"}],"nameEn":"Rhinohorn"},{"id":"p112","num":112,"name":"Neusram","fac":"Steen","mp":1,"rar":"U","w":[{"n":48,"v":60,"name":"Stamp"}],"g":[],"p":[{"n":28,"effect":"knockout","stars":1,"name":"Hoornboor"}],"b":0,"r":20,"layout":"R12 P28 R8 W48","art":"art/p112.png","segments":[{"k":"red","n":12},{"k":"purple","n":28,"stars":1,"effect":"knockout","name":"Hoornboor"},{"k":"red","n":8},{"k":"white","n":48,"v":60,"name":"Stamp"}],"nameEn":"Rhinoram"},{"id":"p113","num":113,"name":"Eierdrager","fac":"Normaal","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","ability":"blessing","art":"art/p113.png","nameEn":"Eggbearer"},{"id":"p114","num":114,"name":"Wierhaar","fac":"Gras","mp":2,"rar":"U","w":[{"n":60,"v":10,"name":"Wurg","effect":"wait"}],"g":[],"p":[{"n":24,"effect":"wait","stars":2,"name":"Knel"}],"b":0,"r":12,"layout":"W60 P24 R12","art":"art/p114.png","segments":[{"k":"white","n":60,"v":10,"name":"Wurg","effect":"wait"},{"k":"purple","n":24,"stars":2,"effect":"wait","name":"Knel"},{"k":"red","n":12}],"nameEn":"Kelphair"},{"id":"p115","num":115,"name":"Buidelstoot","fac":"Normaal","mp":2,"rar":"R","w":[{"n":32,"v":150,"name":"Facade"}],"g":[{"n":28,"v":100,"name":"Verrassingsvuist"}],"p":[{"n":28,"effect":"knockout","stars":2,"name":"Tweerand"}],"b":0,"r":8,"layout":"G28 R8 W32 P28","art":"art/p115.png","segments":[{"k":"gold","n":28,"v":100,"name":"Verrassingsvuist"},{"k":"red","n":8},{"k":"white","n":32,"v":150,"name":"Facade"},{"k":"purple","n":28,"stars":2,"effect":"knockout","name":"Tweerand"}],"ability":"sturdy","nameEn":"Pouchpunch"},{"id":"p116","num":116,"name":"Zeenaald","fac":"Water","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Waterstraal"},{"n":12,"v":10,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p117","art":"art/p116.png","nameEn":"Seaneedle"},{"id":"p117","num":117,"name":"Zeedraak","fac":"Water","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Waterstraal"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p117.png","nameEn":"Seadrake"},{"id":"p118","num":118,"name":"Goudvis","fac":"Water","mp":2,"rar":"U","w":[{"n":56,"v":40,"name":"Waterval"},{"n":24,"v":30,"name":"Waterstaart","effect":"wait"}],"g":[],"p":[],"b":0,"r":16,"layout":"R8 W56 R8 W24","evo":"p119","art":"art/p118.png","segments":[{"k":"red","n":8},{"k":"white","n":56,"v":40,"name":"Waterval"},{"k":"red","n":8},{"k":"white","n":24,"v":30,"name":"Waterstaart","effect":"wait"}],"ability":"swiftswim","nameEn":"Goldfin"},{"id":"p119","num":119,"name":"Goudkoning","fac":"Water","mp":2,"rar":"U","w":[{"n":28,"v":80,"name":"Megahoorn"},{"n":44,"v":20,"name":"Razernij"}],"g":[],"p":[],"b":12,"r":12,"layout":"B12 W28 R12 W44","art":"art/p119.png","segments":[{"k":"blue","n":12,"name":"Ontwijk"},{"k":"white","n":28,"v":80,"name":"Megahoorn"},{"k":"red","n":12},{"k":"white","n":44,"v":20,"name":"Razernij"}],"ability":"swiftswim","nameEn":"Goldking"},{"id":"p120","num":120,"name":"Stervorm","fac":"Water","mp":2,"rar":"C","w":[{"n":24,"v":30,"name":"Waterstraal"},{"n":12,"v":10,"name":"Kopstoot"}],"g":[],"p":[{"n":12,"effect":"paralysis","stars":1,"name":"Verstijf"}],"b":12,"r":36,"layout":"W18 R18 W18 P12 R18 B12","evo":"p121","art":"art/p120.png","nameEn":"Starform"},{"id":"p121","num":121,"name":"Sterkern","fac":"Water","mp":2,"rar":"R","w":[{"n":18,"v":70,"name":"Waterstraal"},{"n":12,"v":40,"name":"Kopstoot"}],"g":[{"n":18,"v":50,"name":"Kanonstraal"}],"p":[{"n":18,"effect":"paralysis","stars":2,"name":"Verstijf"}],"b":12,"r":18,"layout":"G18 W18 R6 W12 P18 R12 B12","art":"art/p121.png","nameEn":"Starcore"},{"id":"p122","num":122,"name":"Mimicus","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":24,"v":50,"name":"Verblindende Glans","effect":"knockout"}],"g":[],"p":[{"n":28,"effect":"confusion","stars":3,"name":"Mysterieus Scherm"}],"b":28,"r":16,"layout":"P28 R4 B28 R4 W24 R8","ability":"enchant","art":"art/p122.png","segments":[{"k":"purple","n":28,"stars":3,"effect":"confusion","name":"Mysterieus Scherm"},{"k":"red","n":4},{"k":"blue","n":28,"name":"Ontwijk"},{"k":"red","n":4},{"k":"white","n":24,"v":50,"name":"Verblindende Glans","effect":"knockout"},{"k":"red","n":8}],"nameEn":"Mimicus"},{"id":"p123","num":123,"name":"Sikkelsnede","fac":"Insect","mp":2,"rar":"U","w":[{"n":24,"v":20,"name":"Valse Veeg"},{"n":32,"v":50,"name":"Snee"},{"n":36,"v":0,"name":"Zwaarddans"}],"g":[],"p":[],"b":0,"r":4,"layout":"W24 W32 W36 R4","art":"art/p123.png","segments":[{"k":"white","n":24,"v":20,"name":"Valse Veeg"},{"k":"white","n":32,"v":50,"name":"Snee"},{"k":"white","n":36,"v":0,"name":"Zwaarddans"},{"k":"red","n":4}],"nameEn":"Sicklecut"},{"id":"p124","num":124,"name":"IJskus","fac":"IJs","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Poeder"},{"n":12,"v":20,"name":"Kopstoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p124.png","nameEn":"Icekiss"},{"id":"p125","num":125,"name":"Donderra","fac":"Elektro","mp":2,"rar":"R","w":[{"n":60,"v":50,"name":"Dondervuist","effect":"knockout"}],"g":[{"n":24,"v":30,"name":"Snelstoet"}],"p":[],"b":0,"r":12,"layout":"W60 G24 R12","ability":"enchant","art":"art/weaver.png","segments":[{"k":"white","n":60,"v":50,"name":"Dondervuist","effect":"knockout"},{"k":"gold","n":24,"v":30,"name":"Snelstoet"},{"k":"red","n":12}],"nameEn":"Thunderra"},{"id":"p126","num":126,"name":"Magmavlam","fac":"Vuur","mp":2,"rar":"R","w":[{"n":52,"v":50,"name":"Vuurvuist","effect":"knockout"}],"g":[],"p":[{"n":28,"effect":"confusion","stars":3,"name":"Dwaalstraal"}],"b":0,"r":16,"layout":"W52 R16 P28","ability":"icewall","art":"art/p126.png","segments":[{"k":"white","n":52,"v":50,"name":"Vuurvuist","effect":"knockout"},{"k":"red","n":16},{"k":"purple","n":28,"stars":3,"effect":"confusion","name":"Dwaalstraal"}],"nameEn":"Magmablaze"},{"id":"p127","num":127,"name":"Hoornkever","fac":"Insect","mp":2,"rar":"R","w":[{"n":32,"v":40,"name":"Klemschaar"}],"g":[],"p":[{"n":20,"effect":"knockout","stars":1,"name":"Guillotine"},{"n":28,"effect":"wait","stars":1,"name":"Schaarworp"}],"b":0,"r":16,"layout":"R8 P20 R8 P28 W32","art":"art/p127.png","segments":[{"k":"red","n":8},{"k":"purple","n":20,"stars":1,"effect":"knockout","name":"Guillotine"},{"k":"red","n":8},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Schaarworp"},{"k":"white","n":32,"v":40,"name":"Klemschaar"}],"nameEn":"Hornbeetle"},{"id":"p128","num":128,"name":"Stierenkop","fac":"Normaal","mp":2,"rar":"C","w":[{"n":8,"v":30,"name":"Stoot"},{"n":24,"v":80,"name":"Neerhaal"},{"n":8,"v":30,"name":"Stoot"}],"g":[],"p":[{"n":28,"effect":"wait","stars":1,"name":"Wegtrappen"}],"b":0,"r":28,"layout":"W8 R16 W24 R12 W8 P28","art":"art/p128.png","segments":[{"k":"white","n":8,"v":30,"name":"Stoot"},{"k":"red","n":16},{"k":"white","n":24,"v":80,"name":"Neerhaal"},{"k":"red","n":12},{"k":"white","n":8,"v":30,"name":"Stoot"},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Wegtrappen"}],"nameEn":"Bullhead"},{"id":"p129","num":129,"name":"Kabbelvis","fac":"Water","mp":2,"rar":"C","w":[{"n":48,"v":0,"name":"Spetter"},{"n":44,"v":10,"name":"Spartel"}],"g":[],"p":[],"b":0,"r":4,"layout":"W48 W44 R4","evo":"p130","art":"art/p129.png","segments":[{"k":"white","n":48,"v":0,"name":"Spetter"},{"k":"white","n":44,"v":10,"name":"Spartel"},{"k":"red","n":4}],"nameEn":"Ripplefin"},{"id":"p130","num":130,"name":"Zeeslang","fac":"Water","mp":1,"rar":"R","w":[{"n":52,"v":100,"name":"Hyperstraal","effect":"knockout"}],"g":[],"p":[{"n":28,"effect":"wait","stars":1,"name":"Storm"}],"b":0,"r":16,"layout":"R8 W52 R8 P28","art":"art/p130.png","segments":[{"k":"red","n":8},{"k":"white","n":52,"v":100,"name":"Hyperstraal","effect":"knockout"},{"k":"red","n":8},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Storm"}],"nameEn":"Seawyrm"},{"id":"p131","num":131,"name":"Zanglied","fac":"Water","mp":2,"rar":"R","w":[{"n":12,"v":50,"name":"IJsstraal"},{"n":36,"v":50,"name":"Golf"}],"g":[],"p":[{"n":32,"effect":"sleep","stars":1,"name":"Zang"}],"b":12,"r":4,"layout":"W12 W36 P32 B12 R4","art":"art/p131.png","segments":[{"k":"white","n":12,"v":50,"name":"IJsstraal"},{"k":"white","n":36,"v":50,"name":"Golf"},{"k":"purple","n":32,"stars":1,"effect":"sleep","name":"Zang"},{"k":"blue","n":12,"name":"Ontwijk"},{"k":"red","n":4}],"ability":"icewall","nameEn":"Melodrift"},{"id":"p132","num":132,"name":"Slijmform","fac":"Normaal","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p132.png","nameEn":"Gooform"},{"id":"p133","num":133,"name":"Pluimstaart","fac":"Normaal","mp":3,"rar":"R","w":[{"n":24,"v":30,"name":"Stoot"},{"n":28,"v":0,"name":"Bundeling"}],"g":[{"n":16,"v":20,"name":"Snelstoet"}],"p":[],"b":20,"r":8,"layout":"B8 W24 W28 G16 B12 R8","evo":["p134","p135","p136"],"art":"art/p133.png","segments":[{"k":"blue","n":8,"name":"Ontwijk"},{"k":"white","n":24,"v":30,"name":"Stoot"},{"k":"white","n":28,"v":0,"name":"Bundeling"},{"k":"gold","n":16,"v":20,"name":"Snelstoet"},{"k":"blue","n":12,"name":"Ontwijk"},{"k":"red","n":8}],"nameEn":"Plumetail"},{"id":"p134","num":134,"name":"Golfpluim","fac":"Water","mp":3,"rar":"R","w":[{"n":40,"v":40,"name":"Golf"}],"g":[],"p":[{"n":28,"effect":"wait","stars":1,"name":"Waterglij"}],"b":20,"r":8,"layout":"R8 B20 P28 W40","art":"art/p134.png","segments":[{"k":"red","n":8},{"k":"blue","n":20,"name":"Ontwijk"},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Waterglij"},{"k":"white","n":40,"v":40,"name":"Golf"}],"nameEn":"Waveplume"},{"id":"p135","num":135,"name":"Bliksempluim","fac":"Elektro","mp":3,"rar":"R","w":[{"n":40,"v":40,"name":"Donderstoot","effect":"knockout"}],"g":[{"n":28,"v":30,"name":"Snelstoet"}],"p":[],"b":20,"r":8,"layout":"B20 W40 G28 R8","art":"art/p135.png","segments":[{"k":"blue","n":20,"name":"Ontwijk"},{"k":"white","n":40,"v":40,"name":"Donderstoot","effect":"knockout"},{"k":"gold","n":28,"v":30,"name":"Snelstoet"},{"k":"red","n":8}],"nameEn":"Boltplume"},{"id":"p136","num":136,"name":"Vlampluim","fac":"Vuur","mp":3,"rar":"R","w":[{"n":44,"v":40,"name":"Vlamstraal","effect":"knockout"},{"n":20,"v":0,"name":"Bundeling"}],"g":[],"p":[],"b":20,"r":12,"layout":"R12 W44 W20 B20","art":"art/p136.png","segments":[{"k":"red","n":12},{"k":"white","n":44,"v":40,"name":"Vlamstraal","effect":"knockout"},{"k":"white","n":20,"v":0,"name":"Bundeling"},{"k":"blue","n":20,"name":"Ontwijk"}],"nameEn":"Flameplume"},{"id":"p137","num":137,"name":"Polyvorm","fac":"Normaal","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Aanval"},{"n":12,"v":20,"name":"Stoot"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p137.png","nameEn":"Polyform"},{"id":"p138","num":138,"name":"Spiraalschelp","fac":"Steen","mp":2,"rar":"U","w":[{"n":40,"v":40,"name":"Wurg","effect":"wait"},{"n":24,"v":70,"name":"Oerkracht"}],"g":[],"p":[],"b":24,"r":8,"layout":"R4 W40 W24 R4 B24","evo":"p139","art":"art/p138.png","segments":[{"k":"red","n":4},{"k":"white","n":40,"v":40,"name":"Wurg","effect":"wait"},{"k":"white","n":24,"v":70,"name":"Oerkracht"},{"k":"red","n":4},{"k":"blue","n":24,"name":"Bescherm"}],"nameEn":"Spiralshell"},{"id":"p139","num":139,"name":"Spiraalheer","fac":"Steen","mp":1,"rar":"R","w":[{"n":40,"v":70,"name":"Wurg","effect":"wait"}],"g":[],"p":[{"n":24,"effect":"badlypoison","stars":1,"name":"Toxine"}],"b":24,"r":8,"layout":"R4 W40 P24 R4 B24","art":"art/p139.png","segments":[{"k":"red","n":4},{"k":"white","n":40,"v":70,"name":"Wurg","effect":"wait"},{"k":"purple","n":24,"stars":1,"effect":"badlypoison","name":"Toxine"},{"k":"red","n":4},{"k":"blue","n":24,"name":"Blauwe Tentakels"}],"nameEn":"Spiralord"},{"id":"p140","num":140,"name":"Schildkrab","fac":"Steen","mp":2,"rar":"U","w":[{"n":40,"v":40,"name":"Modderschot"}],"g":[{"n":20,"v":30,"name":"Waterjet"}],"p":[],"b":32,"r":4,"layout":"R4 B16 W40 B16 G20","evo":"p141","art":"art/p140.png","segments":[{"k":"red","n":4},{"k":"blue","n":16,"name":"Bescherm"},{"k":"white","n":40,"v":40,"name":"Modderschot"},{"k":"blue","n":16,"name":"Bescherm"},{"k":"gold","n":20,"v":30,"name":"Waterjet"}],"nameEn":"Shieldcrab"},{"id":"p141","num":141,"name":"Schildhelm","fac":"Steen","mp":2,"rar":"U","w":[{"n":18,"v":50,"name":"Steenworp"},{"n":12,"v":20,"name":"Rol"}],"g":[],"p":[{"n":18,"effect":"sleep","stars":1,"name":"Slaapspoor"}],"b":18,"r":30,"layout":"W18 R12 W12 P18 R18 B18","art":"art/p141.png","nameEn":"Shieldhelm"},{"id":"p142","num":142,"name":"Vleugelsteen","fac":"Steen","mp":2,"rar":"R","w":[{"n":40,"v":150,"name":"Steenrand"}],"g":[],"p":[{"n":28,"effect":"curse","stars":3,"name":"Spot"}],"b":20,"r":8,"layout":"R4 W40 B20 R4 P28","ability":"fly","art":"art/p142.png","segments":[{"k":"red","n":4},{"k":"white","n":40,"v":150,"name":"Steenrand"},{"k":"blue","n":20,"name":"Hemelval"},{"k":"red","n":4},{"k":"purple","n":28,"stars":3,"effect":"curse","name":"Spot"}],"nameEn":"Wingstone"},{"id":"p143","num":143,"name":"Slaapberg","fac":"Normaal","mp":1,"rar":"R","w":[{"n":32,"v":100,"name":"Lijfklap"},{"n":20,"v":40,"name":"Slaan"}],"g":[],"p":[{"n":36,"effect":"sleep","stars":1,"name":"Reuzengeeuw"}],"b":0,"r":8,"layout":"R8 P36 W32 W20","ability":"undying","art":"art/p143.png","segments":[{"k":"red","n":8},{"k":"purple","n":36,"stars":1,"effect":"sleep","name":"Reuzengeeuw"},{"k":"white","n":32,"v":100,"name":"Lijfklap"},{"k":"white","n":20,"v":40,"name":"Slaan"}],"nameEn":"Sleepmount"},{"id":"p144","num":144,"name":"IJsvleugel","fac":"IJs","mp":2,"rar":"R","w":[{"n":16,"v":70,"name":"Staalvleugel"},{"n":32,"v":90,"name":"Koukraak"}],"g":[],"p":[{"n":20,"effect":"frozen","stars":2,"name":"IJslading"}],"b":16,"r":12,"layout":"W16 W32 R12 B16 P20","ability":"fly","legend":true,"art":"art/p144.png","segments":[{"k":"white","n":16,"v":70,"name":"Staalvleugel"},{"k":"white","n":32,"v":90,"name":"Koukraak"},{"k":"red","n":12},{"k":"blue","n":16,"name":"Rustplek"},{"k":"purple","n":20,"stars":2,"effect":"frozen","name":"IJslading"}],"nameEn":"Icewing"},{"id":"p145","num":145,"name":"Donderwiek","fac":"Elektro","mp":2,"rar":"R","w":[{"n":16,"v":50,"name":"Staalvleugel"}],"g":[{"n":32,"v":100,"name":"Donderklap"}],"p":[{"n":20,"effect":"paralysis","stars":2,"name":"Donderlading"}],"b":16,"r":12,"layout":"W16 G32 R12 B16 P20","ability":"fly","legend":true,"art":"art/p145.png","segments":[{"k":"white","n":16,"v":50,"name":"Staalvleugel"},{"k":"gold","n":32,"v":100,"name":"Donderklap"},{"k":"red","n":12},{"k":"blue","n":16,"name":"Rustplek"},{"k":"purple","n":20,"stars":2,"effect":"paralysis","name":"Donderlading"}],"nameEn":"Stormwing"},{"id":"p146","num":146,"name":"Asvleugel","fac":"Vuur","mp":2,"rar":"R","w":[{"n":16,"v":60,"name":"Staalvleugel"},{"n":32,"v":110,"name":"Verpletterende Vlam"}],"g":[],"p":[{"n":20,"effect":"burn","stars":2,"name":"Vlamlading"}],"b":16,"r":12,"layout":"W16 W32 R12 B16 P20","ability":"fly","legend":true,"art":"art/p146.png","segments":[{"k":"white","n":16,"v":60,"name":"Staalvleugel"},{"k":"white","n":32,"v":110,"name":"Verpletterende Vlam"},{"k":"red","n":12},{"k":"blue","n":16,"name":"Rustplek"},{"k":"purple","n":20,"stars":2,"effect":"burn","name":"Vlamlading"}],"nameEn":"Ashwing"},{"id":"p147","num":147,"name":"Slingon","fac":"Draak","mp":2,"rar":"R","w":[{"n":12,"v":80,"name":"Drakenwoede"},{"n":52,"v":30,"name":"Staartknip"}],"g":[],"p":[{"n":20,"effect":"wait","stars":2,"name":"Opzij"}],"b":0,"r":12,"layout":"W12 P20 R12 W52","evo":"p148","art":"art/boar.png","segments":[{"k":"white","n":12,"v":80,"name":"Drakenwoede"},{"k":"purple","n":20,"stars":2,"effect":"wait","name":"Opzij"},{"k":"red","n":12},{"k":"white","n":52,"v":30,"name":"Staartknip"}],"nameEn":"Coilwyrm"},{"id":"p148","num":148,"name":"Azuriel","fac":"Draak","mp":2,"rar":"R","w":[{"n":48,"v":60,"name":"Drakenstaart","effect":"benchwait"}],"g":[],"p":[{"n":32,"effect":"paralysis","stars":2,"name":"Magneetstorm"}],"b":0,"r":16,"layout":"R4 P32 R12 W48","evo":"p149","ability":"shed","art":"art/lupine.png","segments":[{"k":"red","n":4},{"k":"purple","n":32,"stars":2,"effect":"paralysis","name":"Magneetstorm"},{"k":"red","n":12},{"k":"white","n":48,"v":60,"name":"Drakenstaart","effect":"benchwait"}],"nameEn":"Azuriel"},{"id":"p149","num":149,"name":"Drakevorst","fac":"Draak","mp":1,"rar":"R","w":[{"n":28,"v":90,"name":"Drakenstaart","effect":"benchwait"}],"g":[{"n":28,"v":50,"name":"Extreemsnel"}],"p":[{"n":28,"effect":"wait","stars":1,"name":"Sightseeing"}],"b":0,"r":12,"layout":"G28 R12 P28 W28","ability":"fly","art":"art/wyrmling.png","segments":[{"k":"gold","n":28,"v":50,"name":"Extreemsnel"},{"k":"red","n":12},{"k":"purple","n":28,"stars":1,"effect":"wait","name":"Sightseeing"},{"k":"white","n":28,"v":90,"name":"Drakenstaart","effect":"benchwait"}],"nameEn":"Drakelord"},{"id":"p150","num":150,"name":"Psyklon","fac":"Psychisch","mp":2,"rar":"R","w":[{"n":48,"v":70,"name":"Psyknal"}],"g":[],"p":[{"n":32,"effect":"wait","stars":2,"name":"Psyduw"}],"b":8,"r":8,"layout":"W48 P32 B8 R8","ability":"enchant","legend":true,"art":"art/p150.png","segments":[{"k":"white","n":48,"v":70,"name":"Psyknal"},{"k":"purple","n":32,"stars":2,"effect":"wait","name":"Psyduw"},{"k":"blue","n":8,"name":"Wissen"},{"k":"red","n":8}],"nameEn":"Psyklon"},{"id":"p151","num":151,"name":"Wonderwicht","fac":"Psychisch","mp":3,"rar":"R","w":[{"n":24,"v":100,"name":"Psyknal"}],"g":[{"n":48,"v":30,"name":"Hypersoon","effect":"knockout"}],"p":[],"b":20,"r":4,"layout":"R4 W24 G48 B20","ability":"undying","legend":true,"art":"art/p151.png","segments":[{"k":"red","n":4},{"k":"white","n":24,"v":100,"name":"Psyknal"},{"k":"gold","n":48,"v":30,"name":"Hypersoon","effect":"knockout"},{"k":"blue","n":20,"name":"Pendelsprong"}],"nameEn":"Wonderwisp"}]`),s=n(),c=`schijfduel-bgm-1`;function l(){return(0,r.useLayoutEffect)(()=>{let e=window;if(e.RONDEL_DEX=o,e.__RONDEL_BOOTED&&e.__RONDEL_ENGINE_VER&&e.__RONDEL_ENGINE_VER!==c){location.reload();return}let t=document.getElementById(`rondel-root`);if(t&&t.dataset.filled!==c&&(t.innerHTML=i,t.dataset.filled=c),!e.__RONDEL_BOOTED&&!document.getElementById(`rondel-engine-script`)){let e=document.createElement(`script`);e.id=`rondel-engine-script`,e.text=a,document.body.appendChild(e)}else typeof e.__rondelBoot==`function`&&e.__rondelBoot()},[]),(0,s.jsx)(`div`,{id:`rondel-root`,"data-filled":c,dangerouslySetInnerHTML:{__html:i}})}export{l as component};