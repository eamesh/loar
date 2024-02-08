<template>
<view class="gui-editor">
	<!-- 选项类型选择 -->
	<view
	class="gui-flex gui-row gui-align-contentItems-center gui-space-between gui-editor-menus gui-border-box gui-border-b">
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="h3" 
		@tap="addItem" 
		style="font-size:46rpx;">&#xe64d;</text>
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="p" 
		@tap="addItem" 
		style="font-size:32rpx;">&#xe9e4;</text>
		<text
		class="gui-editor-icons gui-icons" 
		data-type="strong" 
		style="font-size:30rpx;" 
		@tap="addItem">&#xe640;</text>
		<text
		class="gui-editor-icons gui-icons" 
		data-type="i" 
		style="font-size:28rpx;" 
		@tap="addItem">&#xe66b;</text>
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="center" 
		@tap="addItem">&#xe621;</text>
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="img" 
		@tap="addItem">&#xe63d;</text>
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="blockquote" 
		@tap="addItem">&#xe620;</text>
		<text 
		class="gui-editor-icons gui-icons" 
		data-type="pre" 
		@tap="addItem" 
		style="font-size:40rpx;">&#xe64e;</text>
		<text 
		class="gui-editor-icons gui-icons gui-bold" 
		data-type="a" 
		@tap="addItem" 
		style="font-size:38rpx;">&#xe61e;</text>
		<text 
		class="gui-editor-icons gui-icons gui-bold" 
		data-type="hr" 
		@tap="addItem">&#xe61b;</text>
	</view>
	<!-- 内容区域 -->
	<scroll-view 
	:show-scrollbar="false" 
	scroll-y="true" 
	:style="{height:height+'px'}">
		<view 
		v-for="(item, index) in contentItems" 
		:key="index" 
		class="gui-editor-contentItems">
			<!-- h -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-if="
			item.type == 'h1' 
			|| item.type == 'h2' 
			|| item.type == 'h3' 
			|| item.type == 'h4' 
			|| item.type == 'h5' 
			|| item.type == 'h6' ">
				<textarea 
				class="gui-editor-strong gui-border-box" 
				:data-index="index" 
				maxlength="-1" 
				:focus="item.focusin" 
				@input="graceEditorInput" 
				:value="item.content" 
				@blur="blur" 
				placeholder="请输入标题" />
			</view>
			<!-- p -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'p'">
				<textarea 
				class="gui-editor-txt gui-border-box" 
				maxlength="-1" 
				@blur="blur" 
				:data-index="index" 
				:focus="item.focusin" 
				@input="graceEditorInput" 
				:value="item.content" 
				placeholder="请填写文本内容" />
			</view>
			<!-- 居中文本 -->
			<view 
			v-else-if="item.type == 'center'" 
			class="gui-flex gui-rows gui-justify-content-center gui-bg-gray gui-dark-bg-level-2" 
			style="padding:20rpx;">
				<input 
				type="text" 
				class="gui-editor-center" 
				@blur="blur" 
				maxlength="-1" 
				:data-index="index" 
				:focus="item.focusin" 
				@input="graceEditorInput"  
				:value="item.content" 
				placeholder="请填写居中文本" />
			</view>
			<!-- 图片 -->
			<view 
			v-else-if="item.type == 'img'" 
			class="gui-editor-img-wrap">
				<image 
				:src="item.content" 
				class="gui-editor-img" 
				:data-index="index" 
				mode="aspectFill"></image>
				<view 
				v-if="item.error" 
				class="gui-editor-img-error gui-flex gui-columns gui-justify-content-center">
					<text 
					class="gui-editor-img-error-text gui-block gui-text-center gui-icons">&#xe6a1; 上传失败，请重试</text>
				</view>
			</view>
			<!-- 引用 -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'blockquote'">
				<textarea 
				class="gui-editor-quote gui-border-box" 
				maxlength="-1" 
				@blur="blur" 
				:data-index="index" 
				@input="graceEditorInput" 
				:focus="item.focusin" 
				:value="item.content" 
				placeholder="请输入引用文本" />
			</view>
			<!-- 代码 -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'pre'">
				<textarea 
				class="gui-editor-quote gui-border-box" 
				maxlength="-1" 
				@blur="blur" 
				style="height:300rpx;"
				:data-index="index" 
				@input="graceEditorInput" 
				:focus="item.focusin" 
				:value="item.content" 
				placeholder="请输入代码" />
			</view>
			<!-- 加粗 -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'strong'">
				<textarea 
				class="gui-editor-strong gui-border-box" 
				:data-index="index" 
				maxlength="-1" 
				:focus="item.focusin" 
				@input="graceEditorInput" 
				:value="item.content" 
				@blur="blur" 
				placeholder="请输入加粗文本" />
			</view>
			<!-- i -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'i'">
				<textarea 
				class="gui-editor-i gui-border-box" 
				:data-index="index" 
				maxlength="-1" 
				:focus="item.focusin" 
				@input="graceEditorInput" 
				:value="item.content" 
				@blur="blur" 
				placeholder="请输入倾斜文本" />
			</view>
			<!-- 链接 -->
			<view 
			class="gui-bg-gray gui-dark-bg-level-2" 
			v-else-if="item.type == 'a'">
				<input 
				type="text" 
				class="gui-editor-link gui-border-box" 
				:focus="item.focusin" 
				:data-index="index" 
				@input="graceEditorInput" 
				@blur="blur" 
				:value="item.content" 
				placeholder="[标题](地址)" />
			</view>
			<!-- 分割 -->
			<view 
			v-else-if="item.type == 'hr'">
				<text 
				class="gui-editor-spline gui-block" 
				:data-index="index">● ● ●</text>
			</view>
			<!-- 功能 -->
			<view class="gui-flex gui-row gui-justify-content-end gui-editor-item-btns-wrap">
				<view 
				class="gui-editor-item-btns" 
				hover-class="gui-tap" 
				:data-index="index" 
				@tap="moveup">
					<text 
					class="gui-editor-item-btns-text gui-block gui-icons">&#xe654; 上移</text>
				</view>
				<view 
				class="gui-editor-item-btns" 
				hover-class="gui-tap" 
				:data-index="index" 
				@tap="movedown">
					<text 
					class="gui-editor-item-btns-text gui-block gui-icons">&#xe603; 下移</text>
				</view>
				<view 
				class="gui-editor-item-btns" 
				@tap="deleteItem" 
				hover-class="gui-tap" 
				:data-index="index">
					<text 
					class="gui-editor-item-btns-text gui-block gui-icons">&#xe636; 删除</text>
				</view>
			</view>
		</view>
	</scroll-view>
</view>
</template>
<script>
export default{
	name : "gui-content-editor",
	props:{
		height:{type:Number, default:300}
	},
	data() {
		return {
			contentItems   : [],
		}
	},
	methods:{
		addItem : function(e){
			var type = e.currentTarget.dataset.type;
			if(type == 'img'){
				uni.chooseImage({
					success:(e)=>{
						var imgs = e.tempFilePaths;
						for(let i = 0; i < imgs.length; i++){
							this.contentItems.push({type:type,content:imgs[i], focusin:false});
						}
					}
				});
			}else if(type == 'hr'){
				this.contentItems.push({type:type,content:'...',focusin:false});
			}else{
				this.contentItems.push({type:type,content:'',focusin:true});
			}
		},
		graceEditorInput : function(e){
			var index = e.currentTarget.dataset.index;
			var val   = e.detail.value;
			this.contentItems[index].content = val;
		},
		deleteItem : function(e){
			var index = e.currentTarget.dataset.index;
			uni.showModal({
				title:"提示",
				content:"确定要删除项目吗?",
				success:(e)=>{
					if(e.confirm){
						if(this.contentItems[index].type == "img" && this.contentItems[index].uploaded){
							this.$emit("deleteImage", this.contentItems[index].content);
						}
						this.contentItems.splice(index, 1); 
					}
				}
			})
		},
		blur    : function (e) {
			var index = Number(e.currentTarget.dataset.index);
			this.contentItems[index].focusin = false;
			this.contentItems.splice(index, 1, this.contentItems[index]);
		},
		moveup  : function (e) {
			var index = Number(e.currentTarget.dataset.index);
			if(index > 0){
				this.contentItems[index] = this.contentItems.splice(index - 1, 1, this.contentItems[index])[0];
			}
		},
		movedown : function (e) {
			var index = Number(e.currentTarget.dataset.index);
			if(index < this.contentItems.length - 1){
				this.contentItems[index] = this.contentItems.splice(index + 1, 1, this.contentItems[index])[0];
			}
		},
		getData  : function () {
			return this.contentItems;
		},
		setError : function (index) {
			this.contentItems[index].error = true;
			this.contentItems.splice(index, 1, this.contentItems[index]);
		},
		setDefault : function (contentItems) {
			this.contentItems = contentItems;
		},
		formatItems : function(items){
			var returnItems = [];
			for(var k in items){
				returnItems.push({
					type:items[k].type,
					content:items[k].content,
				})
			}
			return returnItems;
		}
	},
	emits:['deleteImage']
}
</script>
<style scoped>
.gui-editor{padding:10rpx 25rpx; border-radius:6rpx; position:relative;}
.gui-editor-title{padding:25rpx 0; width:690rpx; font-size:32rpx; line-height:50rpx;}
.gui-editor-empty{line-height:120rpx; font-size:26rpx;}
.gui-editor-icons{width:80rpx; height:80rpx; color:#898989; line-height:88rpx; text-align:center; font-size:34rpx; margin:5rpx 0;}
.gui-editor-contentItems{margin-top:20rpx;}
.gui-editor-item-btns-wrap{padding:20rpx 5rpx;}
.gui-editor-item-btns{width:100rpx; border-radius:30rpx; margin-left:20rpx; background-color:#898989;}
.gui-editor-item-btns-text{text-align:center; font-size:20rpx; line-height:38rpx; border-radius:30rpx; color:#FFFFFF;}
/* #ifndef APP-NVUE */
.gui-editor-icons{display:block;}
/* #endif */
.gui-editor-txt{font-size:26rpx; line-height:35rpx; padding:20rpx; height:150rpx;}
.gui-editor-center{width:500rpx; text-align:center; font-size:28rpx; height:60rpx; line-height:60rpx;}
.gui-editor-img-wrap{width:500rpx; height:320rpx; overflow:hidden; position:relative; font-size:0;}
.gui-editor-img{width:500rpx; height:320rpx;}
.gui-editor-quote{font-size:26rpx; line-height:35rpx; padding:20rpx; height:100rpx;}
.gui-editor-strong{font-size:26rpx; line-height:35rpx; padding:20rpx; height:100rpx; font-weight:bold;}
.gui-editor-i{font-size:26rpx; line-height:35rpx; padding:20rpx; height:100rpx; font-style:italic;}
.gui-editor-link{font-size:26rpx; line-height:35rpx; padding:20rpx; height:100rpx; color:#008AFF;}
.gui-editor-spline{line-height:60rpx; text-align:center; color:#8788A3; font-size:28rpx; opacity:0.6;}
.gui-editor-img-error{position:absolute; width:500rpx; height:320rpx; left:0; top:0; background-color:rgba(0,0,0,0.8);}
.gui-editor-img-error-text{font-size:28rpx; color:#FFFFFF;}
</style>