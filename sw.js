
const CACHE_NAME = "ai-review-pwa-saved-ui-v4";
const ASSETS = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(key => key !== CACHE_NAME ? caches.delete(key) : null))));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      return response;
    }).catch(() => cached))
  );
});

self.addEventListener("message", event => {
  const data = event.data || {};
  if (data.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification(data.title || "복습 알림", {
      body: data.body || "오늘 복습할 자료를 확인하세요.",
      icon: "./icon-192.png",
      badge: "./icon-192.png",
      tag: "ai-review-reminder"
    });
  }
});
