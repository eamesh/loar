<template>
	<gui-page>
		<template v-slot:gBody>
			<view class="gui-bg-white gui-dark-bg-level-3">
				<view v-html="content">
				</view>
			</view>
		</template>
	</gui-page>
</template>
<script>
	import {
		getSettingBykey
	} from '@/api/setting.js'
	import { mapState } from 'pinia'
import { useAppStore } from '../../store/app'
	export default {
		data() {
			return {
				title: "",
				contentItems: [],
				key: null,
				detail: {}
			}
		},
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			}),
			
			content () {
				try{
					return this.detail.value[this.language.key]
				}catch(e){
					//TODO handle the exception
					return ''
				}
			}
		},
		
		watch: {
			content() {
				const title = {
					about: this.$t('about'),
					agree: this.$t('user_agree'),
					privacy: this.$t('privacy')
				}
				uni.setNavigationBarTitle({
					title: title[this.key]
				})
			}
		},
		
		onLoad: function(e) {
			console.log(e)
			this.key = e.key
			// uni.showLoading({title:"loading", mask:true});
			// uni.setNavigationBarTitle({ title:'加载中' });
			// uni.request({
			// 	url:"http://192.168.1.101/contentDemo.php",
			// 	success: (res) => {
			// 		console.log(res);
			// 		this.contentItems = res.data.data;
			// 		// 文章标题 来自 api 加载
			// 		this.title    = "文章标题";
			// 		uni.setNavigationBarTitle({ title:this.title});
			// 		uni.hideLoading();
			// 	}
			// })
		},
		methods: {
			async requestDetail() {
				try{
					const result = await getSettingBykey(this.key)
					this.detail = result;
					console.log(result)
					
				
				}catch(e){
					//TODO handle the exception
				}
			}
		},
		onShow() {
			this.requestDetail()
		}
	}
</script>
<style >
	page {
		background-color: #fff;
	}
</style>