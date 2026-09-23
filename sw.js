// Online somente. Atualiza instalações antigas e remove apenas caches deste app.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('chamada-')).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.method === 'GET' && new URL(event.request.url).origin === self.location.origin)
    event.respondWith(fetch(event.request, {cache: 'no-store'}));
});
