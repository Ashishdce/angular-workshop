importScripts('workbox-sw.prod.v2.1.2.js');
const workboxSW = new self.WorkboxSW();
/* workbox-cli will inject precaching in the array below*/
workboxSW.precache([]);

workboxSW.router.registerRoute('https://us-central1-pwa-demo-25ad5.cloudfunctions.net/pwaServer/posts', workboxSW.strategies.cacheFirst({
  "cacheName": "posts",
  "cacheExpiration": {
    "maxEntries": 20
  }
}), 'GET');
workboxSW.router.registerRoute('https://pwa-demo-25ad5.firebaseapp.com/*', workboxSW.strategies.cacheFirst({
  "cacheName": "routes",
  "cacheExpiration": {
    "maxEntries": 20
  }
}), 'GET');

self.addEventListener("push", function(){
  console.log("hi");
})
