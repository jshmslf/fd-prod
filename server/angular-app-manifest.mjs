
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
    'index.csr.html': {size: 4272, hash: '89a01a7f063fc905f891dd63fb1f0082183db1d8e0b463c7e9141bec590e9908', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: '69fec85e27c673b25ced09ca252042942efc517f5fea5650d436ae70a2075a87', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'news/index.html': {size: 37970, hash: '16816a42c25cb2b95dc36e02ae5eb422c65876d3683389bcb009e51f520bc7f1', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 39381, hash: '9b7abb178a9852ca25a9ad6ca5f7db9597994ee0f551dd5dccc813f88cbf36dd', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71221, hash: '549d0b46bfad689708b66d9cc0d61ca91742ad80b5cd0371f491367b50e9d7b7', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 76378, hash: '83ae7812f04faef3494ea9e4c0dc8447f4924354a0f4a310188775cf7a71f00c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 73223, hash: '310da3d7f4a998524eea9529bdcc3114542e663119b3215c36b150211aa40fc9', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37642, hash: '12654181fe3cbd808cd575a63e9ae1cb165d78f8180c93b4c60498c6c9a54108', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41830, hash: 'f282b5b03efbc0c9ce1f8d17a9ab6d079c3939c3e5e9621465b954f92026f554', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37642, hash: 'f7e6f6f48e42c7363534869f5d005beb7430bd7a28980dcdd3a01dcb50da8d72', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37648, hash: '4573c9044247b333476c162a0405bae4c5aa5056f3240965a13a7bfde4e63ff1', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 30274, hash: '5360603eed01774943355e04f7d0fa21d04caba1ca46e296760d2682c2f70dbb', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 79131, hash: '5ab3bccf3e8a4c9de5ecf236e2c250a99038fdb3c03796ed0d351f87691f4bb8', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'styles-6XLD3XM7.css': {size: 7624, hash: 'OHh/LwgVDtI', text: () => import('./assets-chunks/styles-6XLD3XM7_css.mjs').then(m => m.default)}
  },
};
