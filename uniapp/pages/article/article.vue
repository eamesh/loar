<template>
	<gui-page>
		<template v-slot:gBody>
			<view 
			class="gui-bg-white gui-dark-bg-level-3">
				<!-- 文章标题 -->
				<view class="gui-padding">
					<text 
					class="gui-h4 gui-bold">{{title}}</text>
				</view>
				<!-- 文章内容 -->
				<view>
					<gui-content-render 
					:items="contentItems"></gui-content-render>
				</view>
			</view>
		</template>
	</gui-page>
</template>
<script>
export default {
	data() {
		return {
			title   : "",
			contentItems : []
		}
	},
	onLoad : function(){
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
		
	}
}
</script>
<style scoped>
</style>