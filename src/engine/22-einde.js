loadProfile();
newGame();
window.__rondelBoot = function () {
  loadProfile();
  applyLang();
  newGame();
};
window.__RONDEL_ENGINE_VER = 'schijfduel-bgm-1';
window.__rondelQA = { get state() { return state; }, get online() { return Online; }, renderAll, showTurnSplash, openPause, get audio() { return Audio_; } };
// PWA: service worker alleen registreren als we via https draaien (file:// blijft gewoon werken)
try { if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js'); } catch(e) {}

}
