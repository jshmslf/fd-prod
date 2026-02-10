
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
    'index.csr.html': {size: 4226, hash: '53f29a297812f8b89b8a847c1b4577f9d1d682ac0697ba14cc132aaa7de39e5c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '1b321ae8fcfc0ae92917aa69f9a1db2f445a5fc534dc91fb4dabb450f8c3fa6b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35338, hash: 'a95eadad0bd4e8b2729b117d7edb91791e6a7e7f4a9b300ee9e8005dc214ce65', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35351, hash: '93438a6181a748127f0e34458af92e8d59e4c31f1c5bd4e87b432d944542ebef', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35339, hash: '8a47ba1325d9a9a254700439a409860de74cacaec7d5f9ffeaee21d0f7de3808', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28657, hash: '896d4e46145fba546fb22caa2f24b9c6bbd18388e4af0d96f7be8d589563e0d0', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103674, hash: '09b0859015de70e525c09219d2d83811a49ecf62c1149e78b77db1ec51fac70b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35340, hash: '443beabd3b04da2d115054f42adf72984eed6d36ffe3ac3173a6145cde7dafbc', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 40745, hash: 'a87d0c2590927b15a6034eb489697b6b1b2f0624cc2338454e09f12d5a5578a8', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 69923, hash: '6651aefbab9648c2b7e546f4124b32b3893c5e52eec4dc1514d96bdbf8c2c45d', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71606, hash: 'e2f3cd580f570161ac79a5722ab1d78b917c6a805043ecfc0d2d219eb971a8aa', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37618, hash: '392ed26dfa02176512c4e3e14c3c4501bb4ea8624652e9b4170cc3e1c77f525f', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35344, hash: '8bd2157c8bb28c7b305af187a52f011e35c0a679b0ff2147e45011fcd46030fb', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 37372, hash: '91f3f60fa703df33ed8b03cd60a1b494b69e2ba4059ce7160ae303dcedb60eae', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77508, hash: '070ccb4c16fa42e7f6d12c60f7f528152e7787b18681b26489142eaf380970c2', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-SN4JFWLA.css': {size: 6468, hash: 'RRdxURq2iE4', text: () => import('./assets-chunks/styles-SN4JFWLA_css.mjs').then(m => m.default)}
  },
};
