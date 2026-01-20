
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
    'index.csr.html': {size: 4226, hash: 'b59b7ee50a543c0c85eee9b31418796aaabce1542372be129971cb27dc730ffa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '231f46cfd2c4ba19ea7d2c097ed2add48e56228db8ee6cd22b778b18a6b59ee9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/technology/article-3/index.html': {size: 35279, hash: '1b9e9569e80843a53773a28fb183d167f7b827b0aa3a7709dea2d554b3d196a9', text: () => import('./assets-chunks/news_technology_article-3_index_html.mjs').then(m => m.default)},
    'news/blog/article-4/index.html': {size: 35278, hash: '8c0008caa320ad5b3a51837e50adef5ad9638c4fc5d97dd67bbbf43637961d03', text: () => import('./assets-chunks/news_blog_article-4_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 35287, hash: 'c0f3f3b772b168c9e971b4536e8b86dbdb8e969b90a1453b3342a931ec0f4843', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'index.html': {size: 102469, hash: '4de71def9bc77fed28505b8cd052a1a87ce816ea32c6dfdd865a5d07a1d5fe38', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37554, hash: '0190d196c4fce1076dc51381062f3931b998b8dbbcbd251731c86dc4415d4fcb', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/technology/article-1/index.html': {size: 35284, hash: '827e9e583259f2ec81ffe04b0b5569c13e204d61d0fb90d50574ebac1d4cdaf3', text: () => import('./assets-chunks/news_technology_article-1_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 36528, hash: 'ca2de8f063239c6c3b38464c1b5d6950fb04bfd7ed038395adea5ff959ca69bc', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 77435, hash: 'a0dc9e9815cb23777d3a2fe3c01bd35032c98979487e174f4ac639c0f4a3e4a2', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'news/story/article-2/index.html': {size: 35284, hash: '6b011e9d6ead002385d36e3b0822b60f0141063adf5f8e1fa2c51eb662dd62c8', text: () => import('./assets-chunks/news_story_article-2_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 70272, hash: 'e1464952be13895ec828460ed25c798659017392d11ea4a77fbb03c513733de7', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 28584, hash: 'c4f941e124fa9da8ec29370ef37dae3ad1415d27485814ab13b3448763971983', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 71533, hash: '13aaeda59ad0a24a5b99084857d3c4732588dec494f0bbd785c293d0fefcac02', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'styles-GMQSZLEM.css': {size: 6445, hash: 'yFbgMFWNu50', text: () => import('./assets-chunks/styles-GMQSZLEM_css.mjs').then(m => m.default)}
  },
};
