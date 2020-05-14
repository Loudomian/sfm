module.exports = {
  'zh': [
    {
      text: '文档',
      icon: 'reco-api',
      items: [
        {
          text: '学习', items: [
            { text: '教程', link: '/views/guide/' },
            { text: '仓库', link: '/views/repertory/' }
          ],
          //  },
          // {
          //    text: '插件', items: [
          //    { text: '官方插件', link: '/views/plugins/index.html' },
          //     { text: '插件广场', link: '/views/other/recommend.html' }
          //   ]
        }
      ]
    },
    { text: '常见问题', link: '/views/other/question', icon: 'reco-faq' },
    { text: '更新日记', link: '/categories/update/', icon: 'reco-blog' },
    { text: '实例', link: '/views/other/up-example.html', icon: 'reco-category' },
    { text: '留言板', link: '/views/other/messageBoard.html', icon: 'reco-suggestion' },
    { text: 'GitHub', link: 'https://github.com/loudomian/sfm', icon: 'reco-github' }
  ]
}