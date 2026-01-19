
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
    'index.csr.html': {size: 4226, hash: '8fede888c20f11bffd19ce553204c4a7bb585925f8b6d28e6bd93c559cc61117', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '6d2e6e6fb2163c51cc91044b3ae8df7887db010ba07793646096ad308483c842', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '5b84433dae96cbfde0deb2fbda85740723e7c10ab8b87f8a3e6e764d3a00bf92', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: '22b94d8e0768fd1eff79da4861b7b2ed86e5692438fb336d28c3a92821fb9af4', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: 'ad94c94d877cb5f71688e8d29041534aede47dbac6e21d61fb95d3cb8b8d91c3', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: 'c2f05caeb2eb507e388981aa2b630ee3a4804e4b077807ce630473f71de53ee7', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: 'ce9a30b1269647a2c6ee7d6877719a1cf7241106aed3c5fd07d05febfd4ceab0', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: '472385d832b6186be4ff6c0dcd6da6ec268deb4ff69afcbd5c32ec21061573bf', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: '023cfc849a056ca166ec9228be86c51aeafc14278b3d07f69508da5c14ab6119', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102846, hash: 'd46c9f3f1a9b81c38aefc8bbb5dd04e41e551ae23e8fe7c500760b1f8f587372', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35280, hash: 'e688ee39d5f7517b906359581279ac49d9bccad40ca495958164b73cbfd172cb', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: '3eee79c93ead63e45d51d57a7eb6f7036cccec64395eb87aa1bb256b031ba07a', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 70264, hash: '52c3b1e62ab8fb9556fdd307cb066b3a45088d1b834f10c23cade62834818172', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71533, hash: 'ef3e1763c91260d43c51a281ec4abd9e7da91aeabeb3f3a579fc55fbf7b0ccc4', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
