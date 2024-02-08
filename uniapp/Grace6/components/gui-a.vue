<template>
	<!-- #ifdef APP-PLUS -->
	<text 
	class="link" 
	@tap="openUrlForApp" 
	:style="{
		color:color, 
		lineHeight:lineHeight, 
		fontSize:fontSize
	}">{{title}}</text>
	<!-- #endif -->
	<!-- #ifdef H5 -->
	<a 
	:href="href" 
	class="link" 
	target="_blank" 
	:style="{
		color:color, 
		lineHeight:lineHeight, 
		fontSize:fontSize
	}">{{title}}</a>
	<!-- #endif -->
	<!-- #ifdef MP -->
	<text 
	class="link" 
	:style="{color:color, lineHeight:lineHeight, fontSize:fontSize}">{{href}}</text>
	<!-- #endif -->
</template>
<script>
export default {
	name  : "gui-a",
	props : {
		link:{
			type : String,
			default : ""
		},
		color:{
			type : String,
			default : "#008AFF"
		},
		fontSize : {
			type : String,
			default : "28rpx"
		},
		lineHeight : {
			type : String,
			default : "50rpx"
		}
	},
	data(){
		return {
			title : "",
			href  : ""
		}
	},
	created:function(){
		this.init();
	},
	watch:{
		link : function(){
			this.init();
		}
	},
	methods:{
		init:function(){
			var linkArray = this.link.split("](");
			this.title = linkArray[0].substring(1, linkArray[0].length);
			this.href = linkArray[1].substring(0, linkArray[1].length -1);
			console.log(this.title);
		},
		openUrlForApp : function(){
			plus.runtime.openURL(this.href);
		}
	}
}
</script>
<style scoped>
/* #ifdef H5 */
.link{text-decoration:none;}
/* #endif */
</style>