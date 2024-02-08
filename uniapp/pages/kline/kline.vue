<template>
	<view>
		<web-view :src="webviewUrl" :updateTitle="false"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		
		computed: {
			webviewUrl() {
				return '/hybrid/html/index.html'
				// return process.env.NODE_ENV === 'development' ? 'http://localhost:8082' : '/hybrid/html/index.html'
			}
		},
		
		methods: {
			
		},
		
		created() {
			console.log(process.env.NODE_ENV)
		}
	}
</script>

<style>

</style>
