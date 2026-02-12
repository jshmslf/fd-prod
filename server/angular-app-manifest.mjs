
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/news"
  },
  {
    "renderMode": 2,
    "route": "/news/announcement/lorem-ipsum-dolor-1"
  },
  {
    "renderMode": 2,
    "route": "/news/announcement/lorem-ipsum-dolor-2"
  },
  {
    "renderMode": 2,
    "route": "/news/story/lorem-ipsum-dolor"
  },
  {
    "renderMode": 0,
    "route": "/news/*/*"
  },
  {
    "renderMode": 2,
    "route": "/who-we-are"
  },
  {
    "renderMode": 2,
    "route": "/what-we-do"
  },
  {
    "renderMode": 2,
    "route": "/contact-us"
  },
  {
    "renderMode": 2,
    "route": "/policies"
  },
  {
    "renderMode": 2,
    "route": "/policies/privacy-policy"
  },
  {
    "renderMode": 2,
    "route": "/policies/terms-and-conditions"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4367, hash: '44d6d598ef9ba8405f9e0082bc62fa1f284b3be68df39c852bd054d2584b2076', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1172, hash: '4c53924d922a71ea129575bfd648790bc48bb290b4954b2c62ccf3e8b98a8a0c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 38895, hash: '1b5116c99549e3e00bdded832744f09f865e5eb9dac85c6053f4a0aaf6f15df0', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 40243, hash: '5b966402635d10e66932191bc646e09ae0ce8e61cf1cd05db4629ecf91399362', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71896, hash: 'f39d0e0e020092aade359695518440636f0504445807ed5b90d5380596f0a238', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37848, hash: '7874a0944829f78f741f0f8a33a6ca6068353f7a40a808cfe349926beb789447', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77032, hash: '1b0a94db1202bffba6a959d217227a6d7a683a69658c7d7deb1a8c9a36b4f0a4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 42367, hash: '06caed5dc34718c2ddb31db2a5fb8d6c8ca554bf1fe22a8aaf94c52fa02f5edb', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37852, hash: 'b39f36b9b3a6980fd11cddb9e591e1149853faf51d45dd263e668e33c9e9104c', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 74177, hash: '4f35841334da85bcf11834d569b54caa7c0ec95a14443c7ddf490a55835aa28f', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30369, hash: '864b545621f67f32351b1eee802de3b68bbc277453e9c8ad831c828747685c2f', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37858, hash: '3d157ea3610d3d0a028773c3a3e764fb372dddd9221e7c513afafd23120847e9', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 80061, hash: 'f16b0e430a961ede61c03bf56197a6a788c7b33b17fb74eef386942820caec8e', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
