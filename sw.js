const CACHE="sedatur-v1";

const files=[
"./",
"./index.html",
"./playlist.json",
"./logo.png"
];


self.addEventListener(
"install",
e=>{

e.waitUntil(

caches.open(CACHE)
.then(cache=>cache.addAll(files))

);

});



self.addEventListener(
"fetch",
e=>{

e.respondWith(

caches.match(e.request)
.then(res=>res || fetch(e.request))

);

});
