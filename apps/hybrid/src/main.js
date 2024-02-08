import { createApp } from 'vue'
import 'vant/lib/index.css'
import './styles/app.scss'
import { ConfigProvider } from 'vant'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)
app.use(ConfigProvider)
app.use(store).use(router).mount('#app')
