const path = require('path')
const themeConfig = require('./config/theme/')

module.exports = {
  // base: '/vuepress-theme-reco-doc/',
  head: [
    ['link', { rel: 'icon', href: 'https://pic.downk.cc/item/5ea12fccc2a9a83be5ace97b.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
    ['meta', { name: 'author', content: 'Loudomian' }],
    ['meta', { name: 'keywords', content: 'SFM,Source Filmmaker,学习笔记,教程' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#42b983' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://pic.downk.cc/item/5ea12fccc2a9a83be5ace97b.png' }],
    ['link', { rel: 'mask-icon', href: 'https://pic.downk.cc/item/5ea12fccc2a9a83be5ace97b.png', color: '#42b983' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://pic.downk.cc/item/5ea12fccc2a9a83be5ace97b.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['script', { 'ata-ad-client': 'ca-pub-9709755052957993', async: 'async', src: '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js' }]
  ],
  theme: 'reco',
  themeConfig,
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: "SFM学习笔记",
      description: '一个 Source Filmmaker 学习库'
    },
  },
  markdown: {
    // lineNumbers: true
  },
  plugins: [
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: {
          message: "发现新内容可用",
          buttonText: "刷新"
        }
      }
    ],
    ['vuepress-plugin-smooth-scroll'],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-131390686-2'
      }
    ],
    [
      '@vuepress/plugin-register-components',
      {
        components: [
          {
            name: 'reco-home-page-one',
            path: path.resolve(__dirname, './components/HomePageOne.vue')
          }
        ],
        componentsDir: path.resolve(__dirname, './demo')
      }
    ],
    'flowchart',
    ['sitemap', {
      hostname: 'https://sfm.soka.wang'
    }],
    ['@vuepress-reco/rss', {
      site_url: 'https://sfm.soka.wang',
      copyright: ''
    }],
    require('./plugins/notification/index')
  ]
}  