const CACHE_STATIC_NAME = "static-v0.01";
const STATIC_FILES = [
  "/sandwich-simulator/manifest.json",
  "/sandwich-simulator/logo192.png",
  "/sandwich-simulator/favicon.ico",
];

self.addEventListener("install", (event) => {
  console.log("[Service worker] Installing Service Worker...", event);
  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then((cache) => {
      console.log("[Service worker] Pre-caching app shell");
      cache.addAll(STATIC_FILES);
    })
  );
});

self.addEventListener("activate", (event) => {
  console.log("[Service worker] Activating Service Worker...", event);
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME) {
            console.log("[Service worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

const isInArray = (string, array) => {
  let cachePath;
  if (string.indexOf(self.origin) === 0) {
    cachePath = string.substring(self.origin.length);
  } else {
    cachePath = string;
  }
  return array.indexOf(cachePath) > -1;
};

self.addEventListener("fetch", (event) => {
  if (isInArray(event.request.url, STATIC_FILES)) {
    event.respondWith(caches.match(event.request));
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then((res) => res)
            .catch((err) => {
              console.log(err);
            });
        }
      })
    );
  }
});
