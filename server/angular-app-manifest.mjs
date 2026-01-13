
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
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4226, hash: 'e63834a76e5fe6f90d086fe636eb5a7f870328f617b96a58bde8f6434d2d8cda', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '83fd36f61f000a4836d4a21daed11047f2e424febd01b4147a9a32b361482388', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35336, hash: '72682015fff2117caab02c6503dc3a94cbadcbf3e4e540e4436e9dfb189f3c40', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35337, hash: '77ca93daf9d981a73fcac09c12e84bd1ec3d77fe8177d70d9723c1fac8370026', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35345, hash: '7f338667ba7dc7dad07626e9bae0f6e3c38706fb10876e64635c75108dd34b97', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35338, hash: '5aae3a877665d98941784b593651ecc01be4f8e5e73670fc0898b498175a44aa', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37612, hash: '76e69df7e20a2a0b0accc6a87f435a7bbbd3060d65f348d16e69b39f6ba732c1', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'index.html': {size: 100889, hash: '5147fa15d53125650ff9e0450cb82395a0262d4520a7d13dc83209dbb74231fa', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36586, hash: 'ab006eca616099a2c98b2d43c0e2729fa20b78e3b097e6d3ba12b28aff73d578', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 53193, hash: 'c29c71a07ae2635d0f7db7dfec0f372f94bd605e2b9ef65b45194a53f9d2cafa', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35342, hash: 'cd8a780b40f3ae1644819ec75037d122951485f98496a147ecfa99005b2a8c4a', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
