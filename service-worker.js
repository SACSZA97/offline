const cacheName = 'mi-pwa-cache-v1';
const urlsToCache = [
    '/', //pagina de inicio
    './index.html', //archivo html principal
    './app.js', //archivo java script principal
    'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
        .then(cache =>{
            console.log('abriendo cache')
            return cache.addAll(urlsToCache)
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service Worker Activo')
});


self.addEventListener('fetch', event =>{
    event.respondWith(
        caches.match(event.request)
        .then(response =>{
            return response || fetch(event.request);
        })
    );
});