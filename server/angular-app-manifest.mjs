
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
    'index.csr.html': {size: 4367, hash: '5a3f095947838d1f4e8da3a8c412b39cc9e7d816b0fe2b5a815f0b28f8ba0622', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1172, hash: '31d00ff6c74bcb3ce6d50f4377c568bcf00ef5c5ad0a03121fdb831155596ade', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 38799, hash: '872dc402784f5e9284f637f3eae7ec05b5b0f10e2a1bc0678da19247b95f7df5', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 40164, hash: '7fb8d2f5feeb1956755464b69bb70cee15684b4598fbff4c59861aa0c21a0706', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'index.html': {size: 77284, hash: '921935466a94ecfce4b97e61465aec5ab07364d5bdbd36de66150941f4040585', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37737, hash: '27baf19ba9af454f5db1716a68a4f5f9b0b76e19a34513385f9944c4b76aa397', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 72128, hash: '816ba0e17b42fd158ab17aa3d8677120129671ced6695d1dcc4ea34f68d83995', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37739, hash: '9498f710135f26b8e717de4e73f3c018297247fdb8fd590e043b3891ad8f33ca', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 42559, hash: 'd2bef65d8618bed1f4f88b5652a3179bea6ce133db79fe3acf75140ba3c9f1b2', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 74177, hash: '660b97bdd435e9700d3025bdaeb2d49921a1770b3c859d2396f21704e8eafdfc', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30369, hash: 'e9a9703a97a15b1376b864144a51c4768c56b96b281a82068de9f45feededce0', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37745, hash: '5aba04ffd8edc5f82068613197f5fb3b11db4d15c2c316d490189e6a18a4f8c3', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 80061, hash: 'f9809b1e8fa21de1bc9a74bc9ebb993e9c5c4781af77895c34d6615b425671d5', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
