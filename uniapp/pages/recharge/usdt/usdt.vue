<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2">
				<view class="mt-3">
					<text class="text-xs text-gray-500">{{ $t('usdt.address') }}</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row gap-x-1 justify-between items-center" @click="copyAddress">
						<!-- <text class="gui-icons gui-block gui-color-gray text-lg">&#xe601;</text> -->
						<view class="gui-form-input" selectable>{{ address }}</view>
						<image src="/static/img/copy.png" class="h-[50rpx] w-[50rpx]"></image>
					</view>

				</view>
				<view class="mt-3">
					<text class="text-xs text-gray-500">{{ $t('recharge.money') }}</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input type="number" v-model="money" class="gui-form-input" placeholder="" />
						<view>USDT</view>
					</view>

				</view>

				<view class="mt-8">
					<text class="text-xs text-gray-500">{{ $t('recharge.upload') }}</text>
				</view>
				<view class="mt-3 w-full">
					<gui-upload-images :header="header" @change="change" ref="uploadimgcom" @uploaded="uploaded" fileName="file" @uploaderror="handleError" :btnName="$t('upload.add')"
						uploadServerUrl="http://localhost:3000/api/v1/member/upload/file"></gui-upload-images>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[220rpx] bg-white footer flex flex-col justify-center ">
				<view class="flex flex-col justify-between items-center gap-3 px-4">
					<view class="text-xs text-[#3395ff]"  @click="$go('/pages/wallet/rechargeRecords/rechargeRecords', 'navigateTo')">{{ $t('recharge.history') }}</view>
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @click="submit">
						<text class="gui-color-white gui-button-text font-semibold font-sans" >{{ $t('confirm') }}</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { getSettingBykey } from '@/api/setting.js'
	import {getToken,removeToken} from '@/util/auth.js';
	import { requestRecharge } from '@/api/member.js'
	export default {
		data() {
			return {
				// 记录需要上传的图片数据
				needPploadedImgs: [],
				// 文本框输入内容记录
				textareaVal: ' ',
				// 上传按钮名称
				subtxt: "+ 发布",
				address: '',
				money: '',
			}
		},
		onLoad: function() {
			// 模拟 api 加载默认图片
			// 不需要默认值删除此函数即可
			// setTimeout(() => {
			// 	this.$refs.uploadimgcom.setItems(
			// 		[
			// 			'https://images.unsplash.com/photo-1663524789630-b18292c8de6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMTN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
			// 			'https://images.unsplash.com/photo-1663623483427-3d9b5d35cc61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOTl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
			// 			'https://images.unsplash.com/photo-1663593675908-ccb95d32b644?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80'
			// 		]);
			// }, 1000);
		},
		computed: {
			header() {
				return {
						// 'content-type': 'application/json',
						'Authorization': `Bearer ${getToken()}`
					}
			}
		},
		methods: {
			copyAddress() {
				uni.setClipboardData({
					data: this.address,
					success() {
						uni.showToast({
							title: 'Copied',
							icon: 'none'
						})
					}
				})
			},
			handleError() {
				uni.hideLoading()
			},
			change: function(e) {
				this.needPploadedImgs = e;
			},
			// 提交动态
			// 过程说明 : 
			// 点击提交按钮 > 首先执行组件的上传函数 > 上传成功后获得已经上传的图片数据 > 提交给后端 api 记录整个内容 
			submit: async function() {
				// try{
				// 	await requestRecharge({
				// 		money: this.money,
				// 		screen: []
				// 	})
					
				// 	uni.showToast({
				// 		title: 'Success',
				// 		icon: 'none'
				// 	})
				// }catch(e){
				// 	//TODO handle the exception
				// 	uni.showToast({
				// 		title: 'Failed',
				// 		icon: 'none'
				// 	})
				// }
				// return;
				// 阻止重复提交
				// if (this.subtxt != '+ 发布') {
				// 	return;
				// }
				
				if (!this.money) {
					uni.showToast({
						title: this.$t('recharge.enter_money'),
						icon: "none"
					});
					return;
				}
				
				// 判断图片选择数量
				if (this.needPploadedImgs.length < 1) {
					uni.showToast({
						title: this.$t("recharge.select_image"),
						icon: "none"
					});
					return;
				}
				
				uni.showLoading({
					title: 'Wait',
					icon: 'none'
				})
				// this.subtxt = '提交中，请稍候 ...';
				this.$refs.uploadimgcom.upload();
				
				// 代码执行到这里，组件开始执行上传工作
				// uni-app 上传api 一次上传一个图片
				// 组件会一个一个循环上传
				// 上传完毕后会触发组件的 uploaded 事件
				// uploaded 事件意味着上传工作完毕
				// 事件会携带上传完成的图片数据 [数组格式] 
			},
			// 图片上传完毕执行 uploaded 函数
			uploaded: async function(uploadedImgs) {
				// console.log('图片上传完毕，开始提交数据');
				console.log(uploadedImgs);
				const screen = uploadedImgs.map(item => item.result.file.path)
				console.log(screen)
				try{
					await requestRecharge({
						money: this.money,
						screen
					})
					uni.hideLoading()
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					uni.switchTab({
						url: "/pages/main/trade/trade"
					})
				}catch(e){
					uni.hideLoading()
					//TODO handle the exception
					uni.showToast({
						title: 'Failed',
						icon: 'none'
					})
				}
			},
			async requestSetting() {
				try{
					const { value } = await getSettingBykey('usdt')
					this.address = value.value
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			}
		},
		onShow() {
			this.requestSetting()
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