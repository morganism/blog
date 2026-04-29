const CACHE = "blog-cache-v1";
const OFFLINE_URLS = [
  "/",
  "/index.html",
  "/assets/css/site.css"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(OFFLINE_URLS))
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
