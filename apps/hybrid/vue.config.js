const { resolve } = require('node:path')
const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('@vant/auto-import-resolver')
const ComponentsPlugin = require('unplugin-vue-components/webpack')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '',
  outputDir: resolve(__dirname, '..', '..', 'uniapp/hybrid/html'),
  devServer: {
    port: 8082
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin.default({
        resolvers: [VantResolver()]
      })
    ]
  }
})
