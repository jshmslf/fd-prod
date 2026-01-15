
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
    "route": "/news/story/lorem-ipsum-dolor"
  },
  {
    "renderMode": 2,
    "route": "/news/story/article-2"
  },
  {
    "renderMode": 2,
    "route": "/news/technology/article-1"
  },
  {
    "renderMode": 2,
    "route": "/news/technology/article-3"
  },
  {
    "renderMode": 2,
    "route": "/news/blog/article-4"
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
    'index.csr.html': {size: 4226, hash: '9695c516394011bcea23ef53fb9c2129f7c3ac5089bef7ec4d2a5e5318296512', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '6ce8e24bdde29287a71d5b0ff7587f2369134ed6a66dda20613b03729af08739', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '6f4ad84946660712b66280161d1b98047747e1dd688481db280cdce0393e10d0', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: '13aa19a4fcb7a158cc2dd78dacb90a32c92c9bbbf9c5dd5f5ecea2ba63fbeb05', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: '39b61430114e7abc0d5323ff07db5658740be6c81d909aea76190d20c0c7c6b7', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: 'bbc2dcdda9c77ccef277fc83785b1e648df7334e906d447a040c5e4e5e3b346d', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: '1493ac6981006579d83851b128da2dd1da26c8e0b3eb802677b3d4bb8fec0cbb', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103046, hash: '924207d30fa00fc81576bdaaba9891ce7c062e6baa13b5556cebd72a747eec5e', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: '7cbf1ade98330475741c9bc18c0fdf780d7cdf1224a024572c7caba4921bb8d8', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: 'ab49d6c68b322f59667e0a139e7f781b7ccce3feb6652007a0863e738a3a61bf', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71803, hash: '42f23738aac447abf2f31298dd83f0043f2d3f9223427d253577220de89bf975', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: 'e50f0b9a4dba932c6f01e114785f8e3378942a0773bafc664c99c6fb28a1fb1c', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71533, hash: '461340e8417418c07be4b35ef859991a57b8675fb81cddc1ea358d82f85bed7b', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35280, hash: '535b7c541b8a7dd0efc6632c4d466456e6cd3ec227d4bf2c4bc96c90fa71f542', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
