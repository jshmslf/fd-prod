
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
    'index.csr.html': {size: 4226, hash: 'e8f69ecf682aabd0842830d9b0163a60ae3af7460f216f8ecbe401cb2b27f4ac', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '4e675159410ae161ad0fb8b97bfe32e878a63a2f6dcbe56db3c22b2248c97bba', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35336, hash: '6c423cf34933b81dbe18b9ab76ecb8dde3b64cc44c0767c0ca2e372478d81353', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35345, hash: '2b965f5440b12c06614e4feb66d7e7a45ef464bdc5779319671ffeb891459187', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35337, hash: '1d476ef4c4fc130485b9c3e2bb5012d6d47f345688816acfa4bc7f783381fff4', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35338, hash: 'c75a195d418aad0ebba2ed852515d41667aadb17a3a5aea85e149e7b8da728ca', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37612, hash: '0ade7690806a9ecd1e026a377d23cb09d9f403aa87a0481ad9ce36f637cb3695', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100889, hash: '64be67c62f7e2223136aca63da14a8ccac8e1b3e7c775e3e76723f467011bcf1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 61281, hash: '54b2a8795fbec6a856119a4f0d7a4a1424079d060f643411adcf6eb09391ab2f', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35342, hash: '4bf3a846ac2d2111494dd6646f63c69327d7746dd5fd3e8346fdc1484fb6a3bb', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36586, hash: 'f625e5b67ad038df2cbafa5d2bd6125280ff972eb3dfe59b5e4aa570c150b5a2', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
