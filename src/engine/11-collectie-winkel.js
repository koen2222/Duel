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
    return `<button type="button" class="type-chip${on ? ' on' : ''}" data-id="${c.id}">${c.label}</button>`;
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
  document.getElementById('coll-credits').textContent = `◈ ${profile.credits}`;
  renderTypeFilters('coll-filters', 'coll');
  const g = document.getElementById('coll-grid'); g.innerHTML = '';
  for (const [key, def] of Object.entries(UNIT_DEFS)) {
    if (!unitMatchesFilter(key, def.fac, collOwnedOnly, collFilter)) continue;
    const lvl = profile.owned[key] || 0; const rar = RARITY[key];
    const c = document.createElement('div');
    c.className = 'coll-card' + (lvl ? '' : ' locked');
    c.innerHTML = `${lvl ? `<span class="lvl-badge">L${lvl}</span>` : ''}<span class="rar-chip rar-${rar}">${rar}</span>
      <div>${unitVisual(key, 'p1', 52)}</div>
      <div class="name">${unitName(key)}</div>
      <div class="sub">${facName(def.fac)} · ${def.mp} MP</div>
      <span class="dex-num">${dexNum(def)}</span>
      ${lvl ? '' : `<span class="price-chip">${isEn() ? 'via Shop' : 'via Winkel'}</span>`}`;
    c.addEventListener('click', () => { if (lvl) openUnitDetail(key); else { renderStore(); showScreen('store'); } });
    g.appendChild(c);
  }
  if (!g.childElementCount) {
    g.innerHTML = `<div class="empty-hint">${t('empty.filter')}</div>`;
  }
}

let detailKey = null;
function openUnitDetail(key) {
  detailKey = key;
  const def = UNIT_DEFS[key], lvl = profile.owned[key], rar = RARITY[key];
  document.getElementById('detail-art').innerHTML = unitVisual(key, 'p1', 128);
  document.getElementById('detail-name').textContent = unitName(key);
  document.getElementById('detail-sub').textContent = `${facName(def.fac)} · ${def.mp} MP · ${rar === 'C' ? 'Common' : rar === 'U' ? 'Uncommon' : 'Rare'} · Level ${lvl}`;
  const slots = slotsAtLevel(key, lvl);
  renderDisk('disk-preview', slots, key);
  // Slot-samenvatting per kleur
  const sum = {};
  for (const s of slots) {
    const k = s.k === 'white' || s.k === 'gold' ? `${s.k}-${s.v}` : (s.k === 'purple' ? `purple-${s.effect}` : s.k);
    sum[k] = (sum[k] || 0) + 1;
  }
  const NL = { red: t('miss'), blue: t('block') };
  const pills = Object.entries(sum).map(([k, n]) => {
    const [kind, val] = k.split('-');
    const label = kind === 'white' ? `${val} dmg` : kind === 'gold' ? `★ ${val} dmg` : kind === 'purple' ? val : NL[kind];
    return `<span class="slot-pill" style="color:${TXT[kind]};background:${COLORS[kind]}">${n}× ${label}</span>`;
  }).join('');
  const ab = UNIT_DEFS[key].ability;
  const abHtml = ab ? `<div class="ability-line"><span class="ability-tag">✦ ${abilityName(ab)}</span> ${abilityDesc(ab)}</div>` : `<div class="ability-line" style="opacity:0.5">${t('noAbility')}</div>`;
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
        return `<div class="ek-stap${nu ? ' nu' : ''}${heb ? '' : ' mist'}">${unitVisual(k, 'p1', 30)}<span>${unitName(k)}</span></div>`;
      }).join('');
      return (i ? '<div class="ek-pijl">›</div>' : '') + `<div class="ek-rij">${stappen}</div>`;
    }).join('');
  const upBtn = document.getElementById('btn-detail-upgrade');
  if (lvl >= 4) { upBtn.textContent = t('maxLevel'); upBtn.disabled = true; document.getElementById('detail-note').textContent = tr('Deze unit is volledig opgewaardeerd.', 'This figure is fully upgraded.'); }
  else {
    upBtn.textContent = `Upgrade ◈ ${UPGRADE_COST[lvl]}`; upBtn.disabled = profile.credits < UPGRADE_COST[lvl];
    document.getElementById('detail-note').textContent = isBasisvorm(key)
      ? tr('Upgrade: sterkste aanval groeit met 8/96 van het wiel, evenveel Miss verdwijnt.', 'Upgrade: strongest attack grows by 8/96 of the wheel, the same amount of Miss disappears.')
      : tr(`Upgrade: sterkste aanval groeit met 8/96 van het wiel. Dit level telt zodra ${unitName(voorloperVan(key))} in hem evolueert.`, `Upgrade: strongest attack grows by 8/96 of the wheel. This level applies once ${unitName(voorloperVan(key))} evolves into it.`);
  }
  document.getElementById('detail-overlay').classList.add('active');
}

function doUpgrade() {
  const lvl = profile.owned[detailKey];
  if (!detailKey || lvl >= 4) return;
  const cost = UPGRADE_COST[lvl];
  if (profile.credits < cost) { toast(tr('Te weinig credits', 'Not enough credits')); return; }
  profile.credits -= cost; profile.owned[detailKey] = lvl + 1; saveProfile();
  toast(`${unitName(detailKey)} → Level ${lvl + 1}!`);
  renderCollection(); openUnitDetail(detailKey); // detail ververst: disk groeit zichtbaar
}

// ===== Winkel: units kopen =====
function renderStore() {
  document.getElementById('store-credits').textContent = `◈ ${profile.credits}`;
  const bc = document.getElementById('booster-card');
  if (bc) {
    const allOwned = Object.keys(UNIT_DEFS).every(k => profile.owned[k]);
    document.getElementById('booster-price').textContent = `◈ ${BOOSTER_COST}`;
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
      ? `<div class="sub evo-rol">${isEn() ? 'evolves from' : 'evolutie van'} ${unitName(voor)}</div>`
      : `<div class="sub evo-rol basis">${isEn() ? 'you field this one' : 'zet je zelf op'}</div>`;
    c.innerHTML = `<span class="rar-chip rar-${rar}">${rar}</span>
      <div>${unitVisual(key, 'p1', 52)}</div>
      <div class="name">${unitName(key)}</div>
      <div class="sub">${facName(def.fac)} · ${def.mp} MP</div>
      ${rol}
      <span class="dex-num">${dexNum(def)}</span>
      <span class="price-chip">${owned ? (isEn() ? 'Owned' : 'In bezit') : `${isEn() ? 'BUY' : 'KOOP'} ◈ ${price}`}</span>`;
    if (!owned) c.addEventListener('click', () => {
      if (profile.credits < price) { toast(isEn() ? 'Not enough credits — win duels for more' : 'Te weinig credits — win duels voor meer'); return; }
      profile.credits -= price; profile.owned[key] = 1; saveProfile();
      toast(isEn() ? `Bought ${unitName(key)}!` : `${unitName(key)} gekocht!`); renderStore();
    });
    g.appendChild(c);
  }
  if (!g.childElementCount) {
    g.innerHTML = `<div class="empty-hint">${t('empty.filter')}</div>`;
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
      : `<div id="booster-stralen" style="--bsk:${kleur}">` +
        Array.from({ length: 12 }, (_, i) => `<i style="--a:${i * 30}deg; animation-delay:${i * 45}ms"></i>`).join('') +
        '</div>';
    document.getElementById('booster-art').innerHTML = stralen + unitVisual(roll.key, 'p1', 84);
    document.getElementById('booster-name').textContent = unitName(roll.key);
    const rarLabel = roll.rarity === 'C' ? 'Common' : roll.rarity === 'U' ? 'Uncommon' : 'Rare';
    document.getElementById('booster-sub').textContent = `${facName(def.fac)} · ${def.mp} MP · ${rarLabel}`;
    document.getElementById('booster-bonus').textContent = roll.duplicate
      ? tr(`Had je al — +${roll.refund} credits terug`, `Already owned — +${roll.refund} credits back`)
      : tr('Nieuw in je collectie!', 'New to your collection!');
    document.getElementById('booster-name').className = 'result-title ' + (roll.duplicate ? 'lose' : 'win');
    document.getElementById('btn-booster-again').textContent = tr(`Nog een kist ◈ ${BOOSTER_COST}`, `Another chest ◈ ${BOOSTER_COST}`);
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
      r.innerHTML = `<div class="set-label"><div class="t">${row.t}</div><div class="d">${row.d}</div></div>`;
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
  pbox.innerHTML = `<div class="set-group-title">${isEn() ? 'PROFILE' : 'PROFIEL'}</div>
    <div class="set-row"><div class="set-label"><div class="t">${isEn() ? 'Your progress' : 'Jouw voortgang'}</div>
      <div class="d">◈ ${profile.credits} credits · ${Object.keys(profile.owned).length}/${DEX_COUNT} · ${profile.stats.wins} ${isEn() ? 'won' : 'gewonnen'}, ${profile.stats.losses} ${isEn() ? 'lost' : 'verloren'}</div></div></div>`;
  const rr = document.createElement('div'); rr.className = 'set-row';
  rr.innerHTML = `<div class="set-label"><div class="t set-danger">${isEn() ? 'Erase everything' : 'Alles wissen'}</div><div class="d">${isEn() ? 'Deletes your credits, figures and stats. This cannot be undone.' : 'Verwijdert je credits, units en statistieken. Dit kan niet ongedaan worden gemaakt.'}</div></div>`;
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
    ? `Schijfduel<br>Tactical figure duel · 151 creatures<br>Original names and art`
    : `Schijfduel<br>Tactisch figuren-duel · 151 wezens<br>Eigen namen en art`;
  body.appendChild(about);
}

