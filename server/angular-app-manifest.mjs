
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
    'index.csr.html': {size: 4226, hash: 'f527ba89c945e93caed95704296e03998d21799716c598e730982629e9b929c3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '892da6182a3b1bfd017bd2aca7f84a633703a41c992b055dd9a83631a20abd14', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '8cc833f93dedd28876b885aa51b9fc05e61ba513eeeae9e5a07088d7591c4532', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: '117144de801db57a02eccb993d2638ff740e3817aa14d7c173ce6cec2cc11414', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: '981c5741effb1e8221b8e2f3f22cdd0e5d07c6173fb104a8d722a66afcfcf972', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: '638bd9b8fcf7ba17549a4d6e69af2b0c267599c67b59970a207984d3fc1d857c', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: 'c762a1663112c8e51f795808be3dc71e7ae3d17a2b8a4c7220d344cec58101ef', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102846, hash: '48bea4bc36e064d4f2a1a43cc589ffb21b3192c86b87aa93bcdfd8f725c9a750', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: 'e2920e44d61991adefcbfe63f46e71e087e88c5ffb87ee0a27aa694ef2271aec', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: '7fba3862fb71ef256ea3c588e863f0d5b399e26ac95c2e987368dee78e6a2617', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35280, hash: '4007cc0f7067f0b5a91dbdf3c5996dc2d0d24dcd822e7b9d112c87910de8fb1b', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71803, hash: 'f87496bfa3ad5909869c558c8cc0b3be047c494e89c45b7ff47dceff966ddc37', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: '5cda587d9901b0fde5ca83f25ea4168d7172e46bb2baa0245227ce646c273efc', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71533, hash: 'fd9ab3e0cfa9361f024405f8cf74922c78724e561580b739c02b6af626c78ca5', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
