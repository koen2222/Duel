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

