const CACHE_NAME = "sedatur-music-v4";


const CACHE_FILES = [

"./",
"./index.html",
"./playlist.json",
"./manifest.json",
"./logo.png",

"./dunia-yang-nanti.mp3",
"./ini-abadi.mp3",
"./shape-of-my-heart.mp3"

];



// INSTALL

self.addEventListener(
"install",

event=>{


event.waitUntil(

caches.open(CACHE_NAME)

.then(cache=>{

return cache.addAll(CACHE_FILES);

})

);


}

);




// UPDATE CACHE

self.addEventListener(
"activate",

event=>{


event.waitUntil(

caches.keys()

.then(keys=>{


return Promise.all(

keys.map(key=>{


if(key !== CACHE_NAME){

return caches.delete(key);

}


})

);


})


);


}

);




// OFFLINE MODE

self.addEventListener(
"fetch",

event=>{


event.respondWith(


caches.match(event.request)

.then(response=>{


return response || fetch(event.request);


})


);


}

);
