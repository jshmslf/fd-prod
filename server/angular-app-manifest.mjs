
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
    'index.csr.html': {size: 4226, hash: 'f4c5ac87258a28c6f1cd1516ec0ac797a6cea3a0101b931c3aef9b375c65364d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '14c4e20cdc703be02a8b74d19d9b24437e9083ac6ba09a8b5b3f8b77162e9ef7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: 'b79f139a442c875934211238fa6a0b41a5f9c5872e694e0e0239ef7567adc6f4', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '6865879a5181398d6eb99853505d03295aad12961cc50ef6279a4b0b8bf494a0', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: 'cfd71acf21409b91f3609de26b8d2aa1736ff4cdcd3a978525428b6174b6d53d', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: 'e9351878d0e7cdba364677056846746448ba2788e704d43bcd29b2fbe2b1c83f', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: 'ecf5fa7cfef8b34ddc8d06dada44bcf600b356381033f2f82b673178ed29ae04', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102507, hash: 'b13091316535d9cdb5ee3122ac0bc331766061d53259691dfee5ac50e8b69c80', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: 'f9b104cc8b9faf673dbe2675f581e6382773e480377f0321f9d432d3adc44250', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: 'aa996759cf7472339caaaaf3e23ff88fc20f4e5149127b8d6a372b21ae35a2b2', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: '31b8803ccd4ea769ff3e0fa2e36b4b05e018398525603fbad3e037ef7ab2ff29', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35280, hash: 'a56d542b8696eeb64010b6d60774c6edd1d047ec95f69790a8af828140ab00e5', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 70325, hash: '6b51909059f43b9dc8d13078851716496a40c0852dbab23a4ed616a26485dd71', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71533, hash: '1b3cc7d304da49002970fe435aef8f843cf7c42eb7b007021ad8e4ee32aaf03b', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
