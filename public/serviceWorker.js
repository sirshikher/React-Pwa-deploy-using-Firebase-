const version = 'v1/';
const assetsToCache = [
  '/',
  './src.7ed060e2.js',
  './src.7ed060e2.css',
  './manifest.webmanifest',
  './icons/icon-128x128.3915c9ec.png',
  './icons/icon-256x256.3b420b72.png',
  './icons/icon-512x512.fd0e04dd.png',
];

self.addEventListener('install', (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(version + 'assetsToCache')
      .then((cache) => cache.addAll(assetsToCache))
      .then(() => console.log('assets cached')),
  );
});

self.addEventListener('fetch', (event) => {
  
    if (event.request.method === 'GET') {
      event.respondWith(
        fetch(event.request).catch(() => {
          return caches.match(event.request);
        }),
      );
    }
  });