
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
    'index.csr.html': {size: 4226, hash: 'ae6d66deb000fda51d2b3460509c0ed0b6a7af158f4b1ad0a2a82e7151a0839b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '429bd5c1d2dde87bb027e9fc310d93f900313d4a2d7ba46e3ce5921c00722da3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35337, hash: 'e821182e88129ac33f043cd2ecf3154f5a1849b2bc6b590ed350a71873ea9cc0', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35336, hash: '5c0a11e3d352fe2a893eaaff18e7ce578bd0d42e696187dd1165d065ce664eee', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35345, hash: '719d3a7ccded036e80f189d7e793f51823560ebf73d3b811d4bb68e3dcf02782', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35338, hash: '8204a7d8fef60f49228e045581a87f83095f053887d325b6840516b548b85359', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37612, hash: '2d40421f5c10551c1d6de0098ada2bdadf21dd584106df1dbd2d2fb409f0d1b3', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100889, hash: '84d4556993ddae832058b26be904c756cfdcfbcaa6f52c906308a8a08a9736ae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 61016, hash: 'b38d646020aa3a2dac156480e0974addcd5fcd52d8f03d60d9cb76544b583a11', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36586, hash: '0d5fdfd19aa6bdbd7a22855f7133f7e68619313f666c69f8c0267c67d0c650fa', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35342, hash: 'ce4f7edffaa29c828e0a8736609042e12dad6e3693d8d65058304e3b2909a456', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
