
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
    'index.csr.html': {size: 4226, hash: 'dcf9e550fff6b5a35d138119f919fec9f7ff72324cad5f97c8b9c5e6fe39a08c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '4c24e47952498b4d49ec4aeedab50046c1624e23bcc2b62339d8d07ffa2b7d5a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: 'c685223d16d839050d2a9805202c3427d11aa90ef80f14eb8255f8b59b3caf56', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '703ab713ab144905b29541ac5a8bbe9590a2d243820e42f7e85d0c0b46af75a5', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: '184ce1e5921ed8bdd62f8b3412edb6407ec76b61bd67d553244ce747d5e11dfa', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: '42174bbe54bdf3f0c058959e254f52a29a0964ea5f77b72bbd94075744640cd6', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102846, hash: 'd353a418fa138c680cd1a9dfe3082591d3decfd467d967b803b3bf1ab7afcb78', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: '472dd082e6d63360ea523e86f407fef354aaf99e68a8afc27df6ce9cbec020c0', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: 'bbd61f17856f854ae5a9921fcc16686353786578062b321bfcb8e9e152609bde', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: 'a9a56f44df60f78c083cfb8eadb406b131d127fc14d6029706f6effde18906fa', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 69974, hash: 'dc2a46fc6e1bc4b2ab2893bc0f7430619e32920bbaa51ca441b50c8985db493c', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71539, hash: 'bf3486cea471ca24bacaa372cdcb363111692e531980e3f9ca3f8818dc46c97d', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: 'fa80a24b1710bdccfc5cad441c14e5122d5c0e233c10a296f74cd59ce6c6b0d0', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35280, hash: 'a648c4dcb5460f11fd9a39e5c512a5d712328fc679cf592c0179b102ed69f09d', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
