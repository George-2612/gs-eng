self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('v1').then(function(cache) {
        return cache.addAll([
          '/index.html',
          '/style.css',
          '/img/home-01.jpg',
          '/img/home-2.jpg',
          '/img/home-3.jpg',
          '/img/about.jpg',
          '/img/project-1.jpg',
          '/img/project-2.jpg',
          '/img/project-3.jpg',
          '/img/team-1.jpg',
          '/img/team-2.jpg',
          '/img/team-3.jpg',
          '/img/team-4.jpg',
          'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
          'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });