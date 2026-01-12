
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
    'index.csr.html': {size: 4226, hash: 'a7a6134fd46a84f965eda2900a24dbccf9f4ceb13a66cfb863bf7cef71ffbde5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '271e857a179dba1ecc01a360e11cadf019a5a7aef6fb600f7fb6297ac5ce6b0f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35336, hash: 'a7d18d727b808abd8a112f67b161d69be6403fe905c7e3643d12dcecdf488530', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35337, hash: 'c3650c93d9e5d739d30f94137d56b9a95d461ca07a35fff09bb458ae7016416e', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35345, hash: 'de7a2abfe360b0b13a516bb71c99c8fbc4e7b874c156363d18c6feab4990c0b8', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35338, hash: '9b69da20740a7f8938ef7f193a87ecd0a67b250a01f8d9e7ae7d433092857b06', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37612, hash: '05faedbc27509ce8f0d7d37fd04fb5ba953fd14890186541e0426b9d296626eb', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100889, hash: '9f673eade4e4c6c0292229e149a10d5e51b32c4aa2b603c4d71c8bc6965394bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36586, hash: 'b76abe3dcaa1bf71222c2fe6c9d228287086042fc85b57e53094f45bcb6d3f59', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 54595, hash: 'a710e567c1f19e6187993b2b80920d4d9fe955c587896b1ab76894a37c81d69c', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35342, hash: '1b95add9821ecce92514aa29b93e2b134a56646fb8d5c08c4255927b90c6e529', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
