
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
    'index.csr.html': {size: 4226, hash: '9acedfc227d18cb829e65a94cc844aad04272393a721d2eeb092c17bfb75aff5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '50b35338f02c4aa1ce6ba71ba1795f5cc45a7451c2c61c94eb0734b780b48d30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35338, hash: '13e6d35b1966e0fed139ac76666a6067071f362bddf46734774381d13c0b8d1c', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35347, hash: '97ef5dc711c18e455537856c91a2f4400b4ac2ee4be928b5836764f9963b532d', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35339, hash: 'ff0a278b6fffffe8871d0727851dda14bd2392273dca410ef0f94ce6ce675eb0', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28657, hash: '9c6f08d376fc9d2f45c56afa685725b8d1f7cc0981d57c18382540e53b7b14fa', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35340, hash: '7f322df3cf5c95fbc6857074448434e953de598e1c254ddd64f56052ce1991df', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103217, hash: '582142d7143043924f4af9f12514154b8194de00ffdf5532d8c4256995b11111', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71606, hash: '25ca3539560870fe7c63dccf517eb1b4f7c3a0d65b790539fa2af3c482ddcd5b', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 70319, hash: 'b7aa139d5cc151b48f591e1e440dfa6746943e58f5692d0c0a77ecb83d4419c8', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37618, hash: '56be1dd0d85278eaacf1167651b228e3ac97595cd811922693ec5d1074262aa2', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 40741, hash: 'bf7e8350d25f94bbf93e6eabf0f01b3e341be8d176842cb344f7b33a3df288eb', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35344, hash: '2db0970c7b60bdd974619b4e5dcf7a161af1b2eb2fc81598f14c3e5091b2f9c7', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36535, hash: 'ed07febd5a3e5c6c382ca3cf15e59ce5a796edd8d782d0bb44ad048076d77c5c', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77514, hash: '3e869128f79a74b313fff4ccf48504a7266506ff70a2007156983d909d1506e2', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-SN4JFWLA.css': {size: 6468, hash: 'RRdxURq2iE4', text: () => import('./assets-chunks/styles-SN4JFWLA_css.mjs').then(m => m.default)}
  },
};
