import App from './App'
import locale from './locale'
import { Ws } from './util/socket.js'
import * as dayjs from 'dayjs'

const ws = new Ws('wss://api.loar.cc')
uni.$ws = ws
/* 全局挂载请求库 */
import GraceRequest from '@/Grace6/js/request.js'
import Grace from '@/Grace6/js/grace.js'
uni.gRequest = GraceRequest;

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as Pinia from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni'
Vue.config.productionTip = false
Vue.prototype.$go = Grace.navigate
Vue.prototype.$day = dayjs
Vue.use(VueI18n)
const piniaUse = Pinia.createPinia()
piniaUse.use(piniaPersist)
app.use(piniaUse);
const i18n = new VueI18n(locale)
App.mpType = 'app'
const app = new Vue({
	i18n,
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
import { createI18n } from 'vue-i18n'
import * as Pinia from 'pinia';
import piniaPersist from 'pinia-plugin-persist-uni'
const i18n = createI18n(locale)
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$go = Grace.navigate
	app.config.globalProperties.$day = dayjs
	const piniaUse = Pinia.createPinia()
	piniaUse.use(piniaPersist)
	app.use(piniaUse);
	app.use(i18n)
	return {
		app,
		piniaUse
	}
}
// #endif