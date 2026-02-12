
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
    'index.csr.html': {size: 4272, hash: '2ed26c42d745b3fb5dbe04f4a5406a385c79dc5e4692b80a06b8c9fa9512acd1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '8bdc6465588e466df662f6beb7429fc159c5702bf385c6b8139944b5676e6b12', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 39381, hash: '972020c4721988910d408ee24b25ccfd9f33ecf51b897ae6d89bf5192a3b99cb', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 37970, hash: '13db6c32982900bf46c9c9f40381fd5db97f57fee5653acf82ffb262c0c5206d', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71221, hash: 'abee0b6d23575e1cf72598c40fbf9635d1d9c0d00c5b9bd7bf1de9f2603cdd8e', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78282, hash: '0403ee050ae144285a681a00f1055e0234f4bee641b1bc08f5ecc6d0280c0463', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41830, hash: 'be20ce0e239ddf93e1c87d2f3e2684be331c5d12fd4f805bd80c90218ae3ea87', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37642, hash: '51dcfd7eb4e2b32939cec6878dd16022567581a86efa175ecb8311574176db34', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37646, hash: '02a5d64de903ce21d7fca4626132ba50afa0e96f86144c058a6d650411c14bd2', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37648, hash: '207694cf82706883931291361f5fc81e6538a439f819bcdfa4ee0d5789813042', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 73223, hash: '470f1b71fd47d7486b6a4a5847a1ce65a8991ae6e1091eeb58b8d07fc0a31291', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30274, hash: 'f6ff73b1e68e0f012490f4b4bb70cf1bd5048dd70e138c9d92c2430e4261e98e', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 79131, hash: 'df911124eb8f24306607b278fbcfcb12dac4b8beb825dc6452e9a0b1dab8c21d', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
