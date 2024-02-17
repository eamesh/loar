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
		getArticleList,
		getArticleDetail
	} from '@/api/article.js'
	import { mapState } from 'pinia'
import { useAppStore } from '../../store/app'
	export default {
		data() {
			return {
				title: "",
				contentItems: [],
				id: null,
				detail: {}
			}
		},
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			}),
			
			content () {
				try{
					return this.detail.content[this.language.key].content
				}catch(e){
					//TODO handle the exception
					return ''
				}
			}
		},
		
		watch: {
			content() {
				uni.setNavigationBarTitle({
					title: this.detail.content[this.language.key].title
				})
			}
		},
		
		onLoad: function(e) {
			console.log(e)
			this.id = e.id
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
					const result = await getArticleDetail(this.id)
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