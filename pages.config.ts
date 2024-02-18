import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'Vitesse-Uni',
    navigationStyle: 'custom',
  },
  tabBar: {
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    list: [
      {
        iconPath: 'static/tabbar/home.png',
        selectedIconPath: 'static/tabbar/home.png',
        pagePath: 'pages/main/home/index',
        text: '首页',
      },
      {
        iconPath: 'static/tabbar/market.png',
        selectedIconPath: 'static/tabbar/market.png',
        pagePath: 'pages/main/quotes/index',
        text: '市场',
      },
      {
        iconPath: 'static/tabbar/news.png',
        selectedIconPath: 'static/tabbar/news.png',
        pagePath: 'pages/main/news/index',
        text: '新闻',
      },
      {
        iconPath: 'static/tabbar/trade.png',
        selectedIconPath: 'static/tabbar/trade.png',
        pagePath: 'pages/main/trade/index',
        text: '交易',
      },
      {
        iconPath: 'static/tabbar/my.png',
        selectedIconPath: 'static/tabbar/my.png',
        pagePath: 'pages/main/my/index',
        text: '我的',
      },
    ],
  },
  easycom: {
    autoscan: true,
    custom: {
      '^uni-(.*)': '@dcloudio/uni-ui/lib/uni-$1/uni-$1.vue',
      '^uv-(.*)': '@climblee/uv-ui/components/uv-$1/uv-$1.vue',
    },
  },
})
