<template>
	<view>
		<web-view :src="webviewUrl" :updateTitle="false"></web-view>
	</view>
</template>

<script>
	import { mapState } from 'pinia'
	import { useAppStore } from '../../store/app'
	export default {
		data() {
			return {
				currentWebview: null,
				query: {}
			}
		},

		computed: {
			...mapState(useAppStore, {
				user: 'user',
				token: 'token'
			}),
			webviewUrl() {
				// return '/hybrid/html/index.html'
				// const symbol = this.query.symbol.split('.')[0]
				const url = process.env.NODE_ENV === 'development' ? 'http://localhost:8082' : '/hybrid/html/index.html'
				let target = `${url}/#/?uid=${this.user.id}&id=${this.query.id}`
				
				if (this.token) {
					target += `&token=${encodeURIComponent(this.token)}`
				}
				
				return target
			}
		},

		methods: {

		},

		created(e) {
			console.log(e)
		},
		
		onLoad(e) {
			console.log(e)
			this.query = e
		},

		onReady(e) {
			console.log(e)
			// #ifdef APP-PLUS
			this.currentWebview = this.$scope
			.$getAppWebview().children()[0] //此对象相当于html5plus里的plus.webview.currentWebview()。在uni-app里vue页面直接使用plus.webview.currentWebview()无效
			setTimeout(function() {
				console.log(this.currentWebview)
			}, 500); //如果是页面初始化调用时，需要延时一下
			// #endif
		}
	}
</script>

<style>

</style>