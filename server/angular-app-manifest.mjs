
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
    "route": "/news/announcement/lorem-ipsum-dolor-1"
  },
  {
    "renderMode": 2,
    "route": "/news/announcement/lorem-ipsum-dolor-2"
  },
  {
    "renderMode": 2,
    "route": "/news/story/lorem-ipsum-dolor"
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
    "route": "/contact-us"
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
    'index.csr.html': {size: 4226, hash: '5b7056e5cd75654b62ba46fad012e74116c80a2ec32263518da16324ac16d50f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'c2be2232102e91855956ff487cfa5b5c3a664261c72cd54b3c9d63b7b4c73a5c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 36057, hash: 'ffebb53df68f744db4810167405d364fd4cda06851b0b4f3ce279abc00894253', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 38664, hash: '5d90444dbd8117d1a10cae20650c1d36b6066576594d33e100820f3452ba3c3e', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71572, hash: '917aafbff7c834589c9364f4345b3da70f438ea9f2645f645ed470b9f12ceccf', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 75829, hash: '22a3d3c7576b6fe35df0458a06e50d7b2be7599b26d090d8e44769457eb946d5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37136, hash: 'bfe63a923edfb1878f1bce90d33bb34b1f5d2ed5cebfdeae16592983f3be8110', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41320, hash: '2e9cc4792dcbd8a054608d841f81894795fa9bf503a5a992c75320edd8d5d5cb', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 72183, hash: '4af2ba8be01f3b592ea99338f7d81f08dc2ab08f39113df39dafc47f7cd31e75', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 29234, hash: '0752e547b190488b6dc3f46684acc93efa85a96fd369a17d3faddd48a0cedd9e', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37146, hash: 'bebca017ec7917ffde3027113e8c0a65493c7e014bfe34c75b6821d485df0f7b', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37136, hash: '6ed31a1552a78af4468bb29a40bec49f2745b8bbe32b3d88e095ca7c4ea54cda', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 78091, hash: 'b749997f46ce2850d03266b4850e87ff1e8ab4084e601f9718323f906354fc43', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-P2TCDWBA.css': {size: 6876, hash: 'FdX/1M1mESM', text: () => import('./assets-chunks/styles-P2TCDWBA_css.mjs').then(m => m.default)}
  },
};
