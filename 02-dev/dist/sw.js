importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "css/styles.css",
    "revision": "e555dfa6ba16d5cb769235ae4bf9a3ec"
  },
  {
    "url": "img/c0-mobile.jpg",
    "revision": "ebcdfca531fdc5c08c3d2c14434a4af5"
  },
  {
    "url": "img/c00-mobile.jpg",
    "revision": "f5d81c266933ad09370f142d6bf08bb6"
  },
  {
    "url": "img/c1-mobile.png",
    "revision": "635d7799b30cc9cd05cfd6e3218b5526"
  },
  {
    "url": "img/c10-mobile.png",
    "revision": "216864d09a808c654b40f0288963f68c"
  },
  {
    "url": "img/c2-mobile.png",
    "revision": "b7fbea985a8f6317a380948637eb2315"
  },
  {
    "url": "img/c3-mobile.png",
    "revision": "2cd4760a5ce244c6d37a2f6ae3a5d7fd"
  },
  {
    "url": "img/c4-mobile.png",
    "revision": "0d37c206159910d118b7dd1439df5735"
  },
  {
    "url": "img/c5-mobile.png",
    "revision": "1788f37c6ce4414c5fe862d8343f7d87"
  },
  {
    "url": "img/c6-mobile.png",
    "revision": "4da6cbb5d9e2112f81199989a2383520"
  },
  {
    "url": "img/c7-mobile.png",
    "revision": "4b40c3e6208bb39ca89be6e52c125201"
  },
  {
    "url": "img/c8-mobile.png",
    "revision": "3406e51361a048257f13034f62c36684"
  },
  {
    "url": "img/c9-mobile.png",
    "revision": "89124491490793bb2ad5e6df12d181e7"
  },
  {
    "url": "index.html",
    "revision": "beab6fdb51815487bbbba3185e0db251"
  },
  {
    "url": "js/script.js",
    "revision": "666b1f880793e58673db613e906df934"
  },
  {
    "url": "static/mani-144.png",
    "revision": "2cd03f7c604b892a71ca5e04914a982a"
  },
  {
    "url": "static/mani-192.png",
    "revision": "0db7919379e5d67e36cacbe2ea4b5344"
  },
  {
    "url": "static/mani-96.png",
    "revision": "985fcf10c13f93467ff449b413808964"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
