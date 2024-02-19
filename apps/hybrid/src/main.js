import { createApp } from 'vue'
import 'vant/lib/index.css'
import './styles/app.scss'
import { ConfigProvider } from 'vant'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'

const i18n = VueI18n.createI18n({
  locale: 'zh-Hant', // set locale
  fallbackLocale: 'zh-Hant', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

const app = createApp(App)
app.use(ConfigProvider)
app.use(i18n)
app.use(store).use(router).mount('#app')
