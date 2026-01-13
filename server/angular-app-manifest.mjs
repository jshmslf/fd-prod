
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
    'index.csr.html': {size: 4226, hash: '200fccd40b95a5fa49db2125ab64f1363a61e323c74141fa35cec5fa6b7585b3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'ea53509d30993605c8fca379decdb5b390ab6e1e5d5fcbf1cdfcb967761f3b2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35337, hash: 'ff3d452f3296bfccbd431378289fb6cbbd83698aac6ca89a1298506f4337cdec', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35345, hash: 'ef439a6a2230d6b751598d2b334e745012c04a28e8e40e0a30831d8d11ca605a', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35336, hash: '2c3f5465123790bc1e20704ca026fc614fc40f772ccc0e405fdc0192f6e5723b', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35338, hash: 'a0a581e04270762f06fc43865b5ee37aa1c50d2d52e2f2acbe8ec567942abd90', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 53197, hash: 'bbe94eff1800091b2f9185d0b67b76238cac03c8102acfc91ea520438e38880a', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36586, hash: '0dec16eb40e55432a9cbc977da05bee3dc59b99727d56f9abcdbe940a23eb8ed', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37612, hash: '7a32b759bdede9846ac6ae79ac8f4a9b7bf00753a4f6e75805b0cf33ae165d86', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100889, hash: '7b60f598e30dc211d0afc3effa3ca5c56395aa23698742338bd268d60938ed58', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35346, hash: 'd7076b68803e7de30ffe5a510cfa5958bbc6f4084a623e0e7855b6c7c2cd908b', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
