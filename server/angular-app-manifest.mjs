
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
    'index.csr.html': {size: 4272, hash: 'bb18f281de13cb70eadf4d9187110f8e808644defcd6d9e2221016ae692e9ee4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'ac22566bcb14d9ef1bdbab0c45e5ebbdb0d35db48e47c0844aaecd5167c614a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 36317, hash: 'bc63a38663bb4c8c3bf1a8415ec0a7a26fb8242bf0162809bd6998c6decaf747', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 39381, hash: '10576090ccb42b4caab1b361f3ec9c51ef63b31cec55fc6ae41b53a04cd1c6c1', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71221, hash: '50e27cdaec726441b38a9c07d4d130b512ef83e3f92d7adbf786dcf9d99ce68a', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 67637, hash: '3a36225e8c1b471365691be268807160e10eb00675c7c5fa723c874b6ca0678a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41830, hash: '5acf0ee873a500a6d053ea7114b1d6066930d669c39a506e9c6631bf02c7f4e2', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37642, hash: '383e04f10a998589d5f55538de7a861b98291bae0d359a8cde0e21f353ae0677', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 73223, hash: 'c64f27ebc151189cf0777981de5ff7c649f47ddc9e89242b73577ad0a2344b80', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37646, hash: 'ffd2ae939155ac3fc3296a5ff415da749a55908f4d67813f6e4ffacc657fd5e4', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30274, hash: 'dad427cb86225349ae267bfade34fa1edc364e5a8842a240e3ecdcc0bfc26410', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37648, hash: '157471e686c3f3726cc6b9b7b1d5ea9968eefb806b9bc0080fd47286d79fcd28', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 79131, hash: 'fc83bfb9862b595c03b6c035dd9b843ba8c2260b6254b5b29819da5536027e15', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
