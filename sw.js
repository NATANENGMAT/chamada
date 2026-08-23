const CACHE = "chamada-v3";
const ARQUIVOS = ["./","./index.html","./turma.html","./manifest.webmanifest",
  "./icon-192.png","./icon-512.png","./apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const u = new URL(e.request.url);
  // Nunca guardar chamadas ao Supabase: dados precisam ser sempre frescos.
  if(u.hostname.endsWith(".supabase.co")) return;
  if(e.request.method !== "GET") return;
  if(u.origin !== location.origin) return;
  e.respondWith(
    caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
      const copia = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copia)).catch(() => {});
      return res;
    }).catch(() => caches.match("./index.html")))
  );
});
