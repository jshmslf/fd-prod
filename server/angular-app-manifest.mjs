
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
    'index.csr.html': {size: 4226, hash: '024821231c1091781e03ed15b34a4df42e554cba1a43c9e8833eac30938a06c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'a84d3a75196693f3147adfdfddb654c93b6ffeb7bf632da6db01eb455a247bae', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35205, hash: '2f94286ab1c4e3655312d88cc6a5fed8722a18ca8ec7fca96ce4ca4d4700f3e6', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35214, hash: 'f648956867341e80a87380baab048c362df6eba2531a4d3fc414880866e9dabc', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35206, hash: '07ca5e8bd7655f696ff3ac77dc9dcf3a702fa19b5d4013f005f8e9c8f3aa4d14', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35207, hash: 'ef50531c1dad5e64dbb8ec68ca9adbc69479950a80266e2c3ede452bcd2e693e', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37481, hash: 'f9d97a39ecb1df15093d3b9b0f4b8799ebb778112cd7d0010374c71d589c538a', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100758, hash: '548356c5569cc847dd87e345a20ce056a9d13f5601c8a62245d9e429f53b4c04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71674, hash: '1aceedfcbe2453b4cc8ba097592e827b416ed268ec96108b41e8569b0541431e', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35211, hash: '92ec40fbdc6fa6aae96070acd285e4d4491c710c00508b24e9706fa147375aca', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36455, hash: 'dd9d00526e798ef278e1c231f9158cbd677a1580d05575422b96cd030b26c9cd', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
