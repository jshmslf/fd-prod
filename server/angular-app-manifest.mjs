
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
    'index.csr.html': {size: 4226, hash: 'c640f064dfb1b882445108e7956115f3d77988247bca712b14919c9cebe4fbc5', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1076, hash: 'ae79ba0c542b4601d767e0bb995e986b35a7ca1f773b3cdca4fd68714882a0d4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'what-we-do/index.html': {size: 38664, hash: 'eb398fe175c410ab8e07bdae1838324a0df3a52182d5f65ae176df5f7243ed5c', text: () => import('./assets-chunks/what-we-do_index_html.mjs').then(m => m.default)},
    'news/index.html': {size: 36057, hash: '3ae9387caef42e48d75b88769bf6bfbacef55dc33eb2b07d8d2fe1da29c0a5f4', text: () => import('./assets-chunks/news_index_html.mjs').then(m => m.default)},
    'who-we-are/index.html': {size: 71572, hash: '112fee9c5bac149a721fd0a5d92135c756b35f9653ac930474d94f4898adb217', text: () => import('./assets-chunks/who-we-are_index_html.mjs').then(m => m.default)},
    'index.html': {size: 75829, hash: '6d825c5f108a876efacad87d532b62e6e09d666f44790fa35fc5b0f4f7562140', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-2/index.html': {size: 37136, hash: '599c4711df7ed8bc1ddfa29d66544765aab3a7bda06e279217476f6b055e4d29', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-2_index_html.mjs').then(m => m.default)},
    'contact-us/index.html': {size: 41320, hash: '10fb7ab0d705b23648f21e63c6b8e9d745c3fa5f9dd3edea0d55c14a9d927bc5', text: () => import('./assets-chunks/contact-us_index_html.mjs').then(m => m.default)},
    'policies/terms-and-conditions/index.html': {size: 72183, hash: '9681c019bddaea544f46c62814782b7838429e22af173024bdc5be1b99029bf6', text: () => import('./assets-chunks/policies_terms-and-conditions_index_html.mjs').then(m => m.default)},
    'news/story/lorem-ipsum-dolor/index.html': {size: 37136, hash: '9d011b3b624c44e5fec17e9eaa7d569cd606cd4ac6971abfcbf5a04f061b3ba7', text: () => import('./assets-chunks/news_story_lorem-ipsum-dolor_index_html.mjs').then(m => m.default)},
    'news/announcement/lorem-ipsum-dolor-1/index.html': {size: 37146, hash: 'c647a3c8298ad4aa7fefa56264a76f696a55e2320d01ebaf5b79bcde97fad0f9', text: () => import('./assets-chunks/news_announcement_lorem-ipsum-dolor-1_index_html.mjs').then(m => m.default)},
    'policies/privacy-policy/index.html': {size: 78091, hash: '48795cece1fc97d62f71d49e49dcb579a9f9dc719b96f02ac3f83bd73d300b85', text: () => import('./assets-chunks/policies_privacy-policy_index_html.mjs').then(m => m.default)},
    'policies/index.html': {size: 29234, hash: 'dabec3fdeea6348e0a243a29586f3f61a126d6b2623670b424e409e05e4f9a4c', text: () => import('./assets-chunks/policies_index_html.mjs').then(m => m.default)},
    'styles-P2TCDWBA.css': {size: 6876, hash: 'FdX/1M1mESM', text: () => import('./assets-chunks/styles-P2TCDWBA_css.mjs').then(m => m.default)}
  },
};
