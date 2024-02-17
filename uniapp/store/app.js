import {
	defineStore
} from 'pinia';
import { requestSignin } from '@/api/auth.js'
import { removeToken, setToken } from '../util/auth';
import { getMarket } from '../api/stock';

export const useAppStore = defineStore('app', {
	state: () => {
		return {
			user: {},
			currentIndex: 1,
			token: false,
			market: 'us',
			language: {
				key: 'zh-Hant',
				title: '繁体中文'
			},
			markets: []
		};
	},

	actions: {
		setToken() {
			this.token = true
			console.log(this.token)
		},

		logout() {
			this.token = false
			this.user = {}
			uni.removeStorageSync('member_id')
			removeToken()
		},

		setMarket(market) {
			console.log(market)
			this.market = market
		},
		
		setLanguage(language) {
			this.language = language
		},
		
		async signin(data) {
			const result = await requestSignin(data)
			console.log(result)
			this.token = result.accessToken
			this.user = result.member
			uni.setStorageSync('member_id', result.member.id)
			setToken(result.accessToken)
		},
		async getMarkets() {
			const result = await getMarket()
			this.markets = result
			this.currentIndex = 1
			this.market = result[0].code
		},
		
		setCurrent(idx) {
			this.currentIndex = idx
		}
	},
	persist: {
		enabled: true,
	},
});