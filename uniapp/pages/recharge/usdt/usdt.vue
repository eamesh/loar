<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2">
				<view class="mt-3">
					<text class="text-xs text-gray-500">連鎖名稱</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<text class="gui-icons gui-block gui-color-gray text-lg">&#xe601;</text>
						<input type="password" class="gui-form-input" placeholder="" disabled="" />
					</view>

				</view>
				<view class="mt-3">
					<text class="text-xs text-gray-500">儲值金額</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input type="password" class="gui-form-input" placeholder="" />
					</view>

				</view>

				<view class="mt-8">
					<text class="text-xs text-gray-500">上傳截圖</text>
				</view>
				<view class="mt-3 w-full">
					<gui-upload-images @change="change" ref="uploadimgcom" @uploaded="uploaded"
						uploadServerUrl="https://您的域名/地址"></gui-upload-images>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[220rpx] bg-white footer flex flex-col justify-center ">
				<view class="flex flex-col justify-between items-center gap-3 px-4">
					<view class="text-xs text-[#3395ff]"  @click="$go('/pages/wallet/fundRecords/fundRecords', 'navigateTo')">存款歷史記錄</view>
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl">
						<text class="gui-color-white gui-button-text font-semibold font-sans">確認</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	export default {
		data() {
			return {
				// 记录需要上传的图片数据
				needPploadedImgs: [],
				// 文本框输入内容记录
				textareaVal: ' ',
				// 上传按钮名称
				subtxt: "+ 发布"
			}
		},
		onLoad: function() {
			// 模拟 api 加载默认图片
			// 不需要默认值删除此函数即可
			setTimeout(() => {
				this.$refs.uploadimgcom.setItems(
					[
						'https://images.unsplash.com/photo-1663524789630-b18292c8de6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
						'https://images.unsplash.com/photo-1663623483427-3d9b5d35cc61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
						'https://images.unsplash.com/photo-1663593675908-ccb95d32b644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
					]);
			}, 1000);
		},
		methods: {
			change: function(e) {
				this.needPploadedImgs = e;
			},
			// 提交动态
			// 过程说明 : 
			// 点击提交按钮 > 首先执行组件的上传函数 > 上传成功后获得已经上传的图片数据 > 提交给后端 api 记录整个内容 
			submit: function() {
				// 阻止重复提交
				if (this.subtxt != '+ 发布') {
					return;
				}
				// 判断图片选择数量
				if (this.needPploadedImgs.length < 1) {
					uni.showToast({
						title: "请选择图片",
						icon: "none"
					});
					return;
				}
				this.subtxt = '提交中，请稍候 ...';
				this.$refs.uploadimgcom.upload();
				// 代码执行到这里，组件开始执行上传工作
				// uni-app 上传api 一次上传一个图片
				// 组件会一个一个循环上传
				// 上传完毕后会触发组件的 uploaded 事件
				// uploaded 事件意味着上传工作完毕
				// 事件会携带上传完成的图片数据 [数组格式] 
			},
			// 图片上传完毕执行 uploaded 函数
			uploaded: function(uploadedImgs) {
				console.log('图片上传完毕，开始提交数据');
				console.log(uploadedImgs);
				// 组合数据给后端 api 提交
				var sendData = {
					imgs: uploadedImgs,
					// 其他表单数据
					content: this.textareaVal
				};
				console.log('全部数据 :');
				console.log(sendData);
				// 至此数据以及收集完毕
				// 请自己完成数据提交工作
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
	
	.footer {
		box-shadow: 0 -0.3125rem 0.4375rem rgba(128,128,128,.1);
	}
</style>