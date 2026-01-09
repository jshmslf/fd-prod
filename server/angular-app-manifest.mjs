
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
    'index.csr.html': {size: 4226, hash: '6773c42433dc560c75ea0f7940dc7daf8e63d6b2ac77c85f75aae68297e32c3a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'aabeb69ffc62c10bb503f8704af5b38a369e34bb4875a24b1baeacb996102dbd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35431, hash: 'd8206def43cf6b3c3bb060bb6c93a412b766a132c446ded46f62b166dccd9e5e', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35424, hash: '9736f5646b3c79ba8887a241e0d441eca64a0fdc8b2a732131b3c3e831731629', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35426, hash: '4ab16c6a1c79b101dc49d097082000be98948db98206450298fcae9e74cc1779', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35425, hash: '610e62a5f538a85c66dbf4093c690d610f4479747693df215ae84e2b4b1aff61', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 46887, hash: 'f6ecee278d7b1e43d1f6648ef6d9db5f31cafa5ee6d4e288afaba94b72fe83da', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37700, hash: '3fb5cd87997d7905ce95a86ad5d067a7935b8fb01e35265e5787c8113aa7fb69', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35430, hash: '990961069b01ffa4abfab7344a4fb3b26bfa1af831ef05b8f1b03dd75e12d17f', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36632, hash: 'bd585c335945a449b4903d84f7841502abb25cb5a37cbcab37757531bbd94073', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100569, hash: '3f6b067da1d8ce4d7404e4ab67aae67c47ec7883a00261a9d421aff334058a3d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FDEN5QWS.css': {size: 6453, hash: '2ONmeI3qZ7k', text: () => import('./assets-chunks/styles-FDEN5QWS_css.mjs').then(m => m.default)}
  },
};
