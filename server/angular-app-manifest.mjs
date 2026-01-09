
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
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4226, hash: 'e288444514cdfebff8449c104ffaf00244a6de090aebf5ab983215575ba34f68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '20448a5ed11ce5ae5506ee65d1a550e2e7506d8d9349f2ac8e1141d34acf1601', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35425, hash: '147a8c387801c591d86d5eaab5baba8c371132255cd65fc5bc9f06ccfe809bf1', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35426, hash: 'fd63d539c16f0ad221e28c3ae049ff5b19779f581a3383c05abcb89f3135336a', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 46927, hash: '3d38368b0923dfe5488002739e2917a3065a9d237c5bceaf2962dfd4797ec103', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35424, hash: 'aabee9ce8ba14906430b1dc537f3df98d6b3b2093eced8d58ef13248ba44a3a6', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35431, hash: '61db08f01662f10e5654338e4052b2706cc906d2fc517135379fbba2ed0f53a7', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100569, hash: '8d4f247e24398aec584c4ef199a5797acc0f3d7e659a9aca72ad8d33984820a7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37700, hash: '94d214bf5d8753c5eae183aa99212c81a31e5107f502fd84aa62068c3b169008', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35430, hash: '864dcc55e9bde99daedad697b7f1107e2ad72bd1844c545f1c98aff5744ef9d5', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36632, hash: 'f86c7ee2db804623816b8bb08c7d3f55224167344641a8a10c2e39f92fe29b29', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'styles-FDEN5QWS.css': {size: 6453, hash: '2ONmeI3qZ7k', text: () => import('./assets-chunks/styles-FDEN5QWS_css.mjs').then(m => m.default)}
  },
};
