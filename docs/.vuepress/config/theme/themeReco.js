module.exports = {
  type: 'HomePageOne',
  // logo: '/icon_vuepress_reco.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  sidebarDepth: 2,
  // 最后更新时间
  lastUpdated: '最后更新', // string | boolean
  // 作者
  author: 'Loudomian',
  authorAvatar: 'https://pic.downk.cc/item/5ebcfb45c2a9a83be54154ac.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2018',
  //algolia: {
  //  apiKey: '97357e58cac743c6de62036cb152f18b',
  //   indexName: 'vuepress-theme-reco'
  // inputSelector: '### REPLACE ME ####',
  // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
  // debug: false // Set debug to true if you want to inspect the dropdown
  // },
  // valine 设置
  valineConfig: {
    appId: '9P3O1CQ1GP0Xjxm0XClqBHkP-gzGzoHsz',
    appKey: 'nB2WH6kTTtIKVwtLfpFxGO41',
    placeholder: '留下你的足迹！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
    showComment: true
  },
  // vssueConfig: {
  //   admins: ['recoluan'],
  //   platform: 'github',
  //   owner: 'vuepress-reco',
  //   repo: 'vuepress-reco.github.io',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'loudomian/sfm',
  // // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // // 默认是 false, 设置为 true 来启用
  editLinks: true,
  mode: 'light',
  logo: 'https://sc02.alicdn.com/kf/H935f1cf571d04eaf94cf95b1577b3eceP.png'
}