const CACHE='afterlight-nxz-v8';
const FILES=['./the-giant-afterlight.html','./afterlight.webmanifest','./afterlight-icon-192.png','./afterlight-icon-512.png','./afterlight-icon-180.png'];
const CDN=['https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js','https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.core.js','https://cdn.jsdelivr.net/npm/three@0.180.0/examples/jsm/controls/PointerLockControls.js'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE);await cache.addAll(FILES);await Promise.allSettled(CDN.map(async url=>{const response=await fetch(url,{mode:'cors'});if(response.ok)await cache.put(url,response);}));})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('afterlight-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();})()));
self.addEventListener('fetch',event=>{if(event.request.method!=='GET')return;const url=new URL(event.request.url),same=url.origin===self.location.origin;if(!same&&!CDN.includes(url.href))return;
  if(same&&!FILES.some(file=>new URL(file,self.registration.scope).pathname===url.pathname))return;
  event.respondWith((async()=>{const cache=await caches.open(CACHE);try{const response=await fetch(event.request);if(response.ok)await cache.put(event.request,response.clone());return response;}catch(error){const cached=await cache.match(event.request,{ignoreSearch:true});if(cached)return cached;return new Response('MINI GIANT is not cached yet. Reconnect once to load the game.',{status:503,headers:{'Content-Type':'text/plain'}});}})());
});
