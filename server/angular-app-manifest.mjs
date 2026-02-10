
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
    'index.csr.html': {size: 4226, hash: 'bb7676f5819bb330cbbb9c864be3855c4092b20b5ca27ec4253f4747773a4d14', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'b058241cc0d15e45eb848aa6d40b65c8521bf349fcc44f241c9a11361495fbdf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35339, hash: 'f250e12078c38c384f9e76678546a469dd0e3ec2f1efb01fd033030b4662452d', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28657, hash: '3a8d4b86a2f7fd18b9799f2614f9dc6392ca5d1129d2ebe302958ca5329f7585', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35338, hash: 'f6132a084fed0e8a31a67097697088b6f3118836359c761740e0ff230e5dba31', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35347, hash: '5416063576da67e6109b76c051e56ca5e1a1cccd91a401bc478f935280e5a2f9', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'index.html': {size: 103707, hash: 'd3019fff34640f0d234ecfcb6876d8936c0e4de1cf41de32c340007a26412036', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35340, hash: 'e0982f8542fa530c2f1a5235c4ac17329f26dffd2098d1d0ba65c299ef544150', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 40745, hash: 'b2a445355b121132578fc4522cdcfda904cca495c5a74ec44502a46b58103aff', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71606, hash: '1e14ebcc401e641138d6764d477ec285b6d3e019330c11631647fc2ff29d5e5b', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 69915, hash: '04e62c755bf4e094bc459e709db1b225eddf9db65528d4aaeeea5f0bad5223d8', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37614, hash: '14945f259b15f13eec3c5891d36ca932ccf249df34011d3b3b9ce143871abd0d', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35344, hash: '4c5405c538bd54351fb88e59c0ce3e349fd393e1e10709c6fd777ab89af2d859', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 37363, hash: '824938d63ef7a41575b5147975eb3cc8e39f38b88e82fbd59b58c8f40a8009cf', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77514, hash: '1aa536b772f3e8f7963ad0d62bf6b129010920cf453e2e83fbdc54939a1fecd7', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-SN4JFWLA.css': {size: 6468, hash: 'RRdxURq2iE4', text: () => import('./assets-chunks/styles-SN4JFWLA_css.mjs').then(m => m.default)}
  },
};
