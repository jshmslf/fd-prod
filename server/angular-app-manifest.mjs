
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
    'index.csr.html': {size: 4226, hash: '6ff79d9de811aca81ee765659649062bd4b483a4faa5fb685d52c9e3c9a7481f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'd691d0980f3b836a3abdde145c24f640fb7ae6e8c64001e22f9b1429f42025b7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35302, hash: 'b01863dfe0279572b63a2ab1ca53a997dacc3a0c0b916c5ce5700b0e4895ca39', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35310, hash: '2baa3a813061ffa05bd26cc156b7c13b2f556b6f85f238ab54ff7898f7b69f1c', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35301, hash: '1ee87b267100bf49c8f3c2f63e9ddf2d92688605ec62f3bdbe5fd9212489ef89', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102539, hash: 'b1470a9db03225bb6f59d0a9c27446149997fa6e361eb50815126b507a6354be', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37577, hash: 'ca411f81443e93d4afac51dd853b32041e419f71573af20bf1c744f634058acb', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35307, hash: 'fc3748398f330459995e744ec9f75a968254a8c6d3d4630ecb6de27f90b0801c', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77458, hash: 'da2e3ee047ae2528bcb152efa4af1e60b4c96847fd227ce7ed1df61d2051d8cf', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36551, hash: '61a442fa31a08d645750755a5d525e9f63d1a6ad479d0be9ee9042769d76ddaf', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 70287, hash: '750c1ad95b2040dfcf3b42f80d72d0186248e3f90110f2cddc8b89f5914dd114', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71556, hash: '86f3d8d75410dd1ce06de99f54224c89b698f292524338e5ae98e565a2f75d2d', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28607, hash: '1c7da467b5caa91863d651a4997ccc38f8d52f8aea9197668df4139d8ba30e17', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35303, hash: '4178e27580cc66c82561a6c36907edc428a4c05ae24b6cf7e1cb877853572ea8', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'styles-SN4JFWLA.css': {size: 6468, hash: 'RRdxURq2iE4', text: () => import('./assets-chunks/styles-SN4JFWLA_css.mjs').then(m => m.default)}
  },
};
