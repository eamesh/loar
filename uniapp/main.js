import App from './App'
import locale from './locale'

/* 全局挂载请求库 */
import GraceRequest from '@/Grace6/js/request.js'
import Grace from '@/Grace6/js/grace.js'
uni.gRequest = GraceRequest;

// #ifndef VUE3
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import * as Pinia from 'pinia';
Vue.config.productionTip = false
Vue.prototype.$go = Grace.navigate
Vue.use(VueI18n)
app.use(Pinia.createPinia());
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
const i18n = createI18n(locale)
export function createApp() {
	const app = createSSRApp(App)
	app.config.globalProperties.$go = Grace.navigate
	app.use(Pinia.createPinia());
	app.use(i18n)
	return {
		app,
		Pinia
	}
}
// #endif