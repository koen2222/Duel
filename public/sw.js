// Schijfduel service worker — bewust minimaal.
// Geen eigen cache: alles komt van het netwerk (GitHub Pages), dus een oude
// worker kan nooit verouderde bestanden vasthouden. Bij activeren worden
// eventuele caches van eerdere versies gewist en neemt deze worker direct over.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.clients.claim();
  })());
});
