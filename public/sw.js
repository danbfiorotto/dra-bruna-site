// Service Worker para cache e performance
const CACHE_NAME = 'dra-bruna-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Assets para cache estático
const STATIC_ASSETS = [
  '/',
  '/sobre/',
  '/tratamentos/',
  '/tratamento-canal/',
  '/contato/',
  '/blog/',
  '/casos/',
  '/depoimentos/',
  '/politica-privacidade/',
  '/termos-uso/',
  '/images/logo.png',
  '/images/banner.png',
  '/images/dentist-profile.jpg',
  '/images/dentist-profile2.jpeg',
  '/og-image.jpg',
  '/favicon.ico',
  '/sitemap.xml',
  '/robots.txt'
];

// Instalar Service Worker
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => {
        console.log('Service Worker: Installation complete');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Installation failed', error);
      })
  );
});

// Ativar Service Worker
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Service Worker: Activation complete');
        return self.clients.claim();
      })
  );
});

// Interceptar requisições
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Estratégia para diferentes tipos de recursos
  if (request.method === 'GET') {
    // Páginas HTML - Network First
    if (request.headers.get('accept')?.includes('text/html')) {
      event.respondWith(networkFirstStrategy(request));
    }
    // Imagens - Cache First
    else if (request.destination === 'image') {
      event.respondWith(cacheFirstStrategy(request));
    }
    // CSS/JS - Stale While Revalidate
    else if (request.destination === 'style' || request.destination === 'script') {
      event.respondWith(staleWhileRevalidateStrategy(request));
    }
    // API calls - Network First
    else if (url.pathname.startsWith('/api/')) {
      event.respondWith(networkFirstStrategy(request));
    }
    // Outros recursos - Cache First
    else {
      event.respondWith(cacheFirstStrategy(request));
    }
  }
});

// Estratégia Network First
async function networkFirstStrategy(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    // Fallback para página offline
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/');
    }
    throw error;
  }
}

// Estratégia Cache First
async function cacheFirstStrategy(request) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    throw error;
  }
}

// Estratégia Stale While Revalidate
async function staleWhileRevalidateStrategy(request) {
  const cachedResponse = await caches.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      const cache = caches.open(DYNAMIC_CACHE);
      cache.then((c) => c.put(request, networkResponse.clone()));
    }
    return networkResponse;
  }).catch(() => cachedResponse);
  
  return cachedResponse || fetchPromise;
}

// Background Sync para analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Implementar sync de analytics offline
  console.log('Service Worker: Syncing analytics data');
}

// Push notifications (futuro)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/logo.png',
      badge: '/images/logo.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      },
      actions: [
        {
          action: 'explore',
          title: 'Ver Mais',
          icon: '/images/logo.png'
        },
        {
          action: 'close',
          title: 'Fechar',
          icon: '/images/logo.png'
        }
      ]
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});
