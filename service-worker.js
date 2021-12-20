/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "5a6dbc34017e35323ddb6a51ab892300"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.ecc73f2f.css",
    "revision": "531306999500e00557280f6de1009cf0"
  },
  {
    "url": "assets/img/Edit.9aa1130c.png",
    "revision": "9aa1130c4e6dba5b1b5e2b09344f28b0"
  },
  {
    "url": "assets/img/GetOrganization.e7dbaaa4.png",
    "revision": "e7dbaaa4d419aecf487866e4d4871ad5"
  },
  {
    "url": "assets/img/GetOrganizations.ef78de6c.png",
    "revision": "ef78de6c881fb60814dcb16add51fef1"
  },
  {
    "url": "assets/img/Insert.480005b8.png",
    "revision": "480005b89d138386337662b3e58dec73"
  },
  {
    "url": "assets/img/Remove.aa586352.png",
    "revision": "aa58635286ed23b43d2ebb912f504f8c"
  },
  {
    "url": "assets/img/Remove2.fa62578a.png",
    "revision": "fa62578ae3e0e3e80da3fa3a667f28c7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2335d171.js",
    "revision": "fea7c8caf3c78ceee44a393912146324"
  },
  {
    "url": "assets/js/11.635499d7.js",
    "revision": "4dd529ed50f10406b07590bd9a55e4b8"
  },
  {
    "url": "assets/js/12.95061cd2.js",
    "revision": "f5303aac86a7f3b24ee097c3f9692a35"
  },
  {
    "url": "assets/js/13.06fdf018.js",
    "revision": "e8002bb7566b5e57aa7780ce736075db"
  },
  {
    "url": "assets/js/14.6bf8c30d.js",
    "revision": "7d8d52e1d276c4efe0b3315c904f56fd"
  },
  {
    "url": "assets/js/15.62c4ca41.js",
    "revision": "66943fc0e940dfbaa08a3fb8f39580ff"
  },
  {
    "url": "assets/js/16.dcdad092.js",
    "revision": "db4a5d056dd1fb9f58323c7a1daa094b"
  },
  {
    "url": "assets/js/17.e098781f.js",
    "revision": "83baefdcc3d685628e41cd6bd4c985e9"
  },
  {
    "url": "assets/js/18.1c14d2b3.js",
    "revision": "76c3dcd63eeb0886062f6c7c1139f64d"
  },
  {
    "url": "assets/js/19.e50e0cf1.js",
    "revision": "e6347eabd36a171eafb86378203732ea"
  },
  {
    "url": "assets/js/2.b3f7f95f.js",
    "revision": "e83ae08752bb15e89a35040767e944e9"
  },
  {
    "url": "assets/js/20.3b950501.js",
    "revision": "77363f5e2bd6d2eabe4c8e547c3b8f4b"
  },
  {
    "url": "assets/js/21.fe0f0c78.js",
    "revision": "794c803371405cfa5aaa08fb58f15da6"
  },
  {
    "url": "assets/js/22.a8e39070.js",
    "revision": "d04aadd8599c6d2093667b748d4153c4"
  },
  {
    "url": "assets/js/23.a12a75e6.js",
    "revision": "554718fe431be2eb63322332c2267bd6"
  },
  {
    "url": "assets/js/24.dcf06088.js",
    "revision": "2b0a974b1f7661cf3e7875f9480c423b"
  },
  {
    "url": "assets/js/26.92f11a01.js",
    "revision": "30d3a279ef2c9a3926b29b676025ac05"
  },
  {
    "url": "assets/js/3.7637e932.js",
    "revision": "ec9c09366dd6845b75d6cc2ce572e6eb"
  },
  {
    "url": "assets/js/4.75b28055.js",
    "revision": "5dcaf968ff14c0d9678c53dc440598ba"
  },
  {
    "url": "assets/js/5.723757c6.js",
    "revision": "ca4e170a92ee06270cd054a4261a78d1"
  },
  {
    "url": "assets/js/6.c6360e74.js",
    "revision": "fd09527626dd68c3ac05800c5aeac174"
  },
  {
    "url": "assets/js/7.348fcbec.js",
    "revision": "53eef28f582e2d38b7882a1951b33971"
  },
  {
    "url": "assets/js/8.3ddb516f.js",
    "revision": "80b46447268537fd86a70dd2a3385294"
  },
  {
    "url": "assets/js/9.10dd557b.js",
    "revision": "bd7019f9104848e37a7283efbd174418"
  },
  {
    "url": "assets/js/app.40677592.js",
    "revision": "98ca9d8eb5a30dd54f2d28b590012df8"
  },
  {
    "url": "conclusion/index.html",
    "revision": "d985315583cad8808cf13eca1690257a"
  },
  {
    "url": "design/index.html",
    "revision": "388d20b162b2abdd224bc2aebe88d476"
  },
  {
    "url": "index.html",
    "revision": "df6c13c202ef71d46e424d5eaa58b371"
  },
  {
    "url": "intro/index.html",
    "revision": "a94e4ac07a4495b53b82410efb0ca6fe"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "4dd52dbf10cdd43e5a5715a4d50851ee"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4e38c2b2bcf70255ed7d282f8642ecbe"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "eaa993261954be759a14260de3094709"
  },
  {
    "url": "software/index.html",
    "revision": "a3569472a5bbb68ce84a9e588460fe29"
  },
  {
    "url": "test/index.html",
    "revision": "8ea92dba92b23a256d23706aa32f7aa7"
  },
  {
    "url": "use cases/index.html",
    "revision": "a3978f8437ab2e0657799f3c9e6daec7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
