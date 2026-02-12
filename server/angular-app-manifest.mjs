
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
    'index.csr.html': {size: 4367, hash: 'c3e8a0db2078047f427d5e17f9a4f264dfd1f899009bb7b4bad87a8d52a6c793', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1172, hash: '41aaadfc1bc4fcadb56c37ba97619f50a7ed17cb44841e279fc6ef05e7f5556a', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 38065, hash: 'a496b6ea5afaf7be024a3e0546b7ba48a32fd9bf1b0e39bba27124016f21e857', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 39476, hash: '49176e4c7fc19da179766ae2aec7489a23852608bf35dcbd1aa15d56687c1324', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71316, hash: '9367e84490db8e6d1a95f15005439d06e325ad2ed9bce71854639ec21ecca753', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 78377, hash: 'cef9914c9c507f765a88adf57a88546ef977be8d2e2df8a1415ae2cb0c3bbca8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37737, hash: '944f42385a968ecd8ea1364f34b5bc185a6436d61e19c3d9acdf0c3617e912ca', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41925, hash: '916f39c971ba2a7f4cca813a9373b0aee3e912e54d8fa6002fed49b2d66f844b', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37737, hash: 'fcd454fa3b3f6e7125db45f76912102ad56bf8a1459f071e9f829b269854b7b0', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 73318, hash: 'ad9f1c0fec36f912561f0810879c553f5a9059a3ba8eb5ee3049c9fbc8fe6b71', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30369, hash: 'f85a160f1599117d4754431b6503c6ce8bb99d6c9a6a36b8b86a582f58092ba0', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37747, hash: '46ea5e0b289aae6a5afb3b779bfb4796b85dd6a3bc601641808e55ff78234b06', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 79226, hash: '1078b6a704522ce1efdded4df2201c242ef61824f979a3f6799cb7f6882cbb6d', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
