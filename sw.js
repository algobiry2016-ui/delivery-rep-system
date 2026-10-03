// تشغيل التطبيق كتطبيق مثبّت (جوال + كمبيوتر). ما يخزّن شي — كل فتح يجيب آخر نسخة.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request));
});
