<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2 recharge-stags">
				<view class="flex flex-col mt-3 gap-y-6">
					<view class="flex flex-col gap-y-4">
						<text class="text-xs text-gray-500">{{ $t('usdt.address') }}</text>
						<gui-stags :checkedClass="['checked-class']" :defaultClass="['default-class']" :tags="tags" @change="changeTag"></gui-stags>
					</view>
					<view class="flex flex-col gap-y-4">
						<text class="text-xs text-gray-500">{{ $t('network') }}</text>
						<gui-stags :checkedClass="['checked-class']" :defaultClass="['default-class']" :tags="current?.children" @change="changeNetwork"></gui-stags>
					</view>
					<view class="flex flex-col justify-center items-center gap-y-3">
						<view class="p-3 rounded-2xl" style="border: 4px solid #3395FF;">
							<canvas 
													canvas-id="canvas" 
													id="canvas" 
													style="width:260rpx; height:260rpx;"></canvas>
						</view>
						<view class="font-semibold">{{ $t('address') }}</view>
						<view class="flex flex-row justify-center items-center gap-x-2" @click="copyAddress">
							<view class="text-[22rpx]">{{ currentNetwork?.accountAddress }}</view>
							<image class="w-[30rpx] h-[30rpx]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKjSURBVHgB7VdNchJBFP56BlDLDZxA8AJi0I2rgY1LKQ8QQiwXVqKRCxi4gIZSzE6TC1icIJmtZWLhzpXBEziLLExgeH7dDHHCX6AgWGXlq5qZnpn3+nvv9evu1wp9SL+ReDSGpHQQx5RQFrwva6oxkWyY0LqODeXjJb9OTXoGgUf9un+KSqOkmhhHTNKkHcM+m8lA2eWfJqaFMFLsTnUNPyJ5bhS5Ic7U5MiQktC3UWw8G23pODj7dPc7knabUbOwEZAvkdzrl40s1WSlR3q4rrKYAW7W+NF8sC2lkw5usZ23YjQCKA8QK0FB++0rlEZ1eL8mad9HGhPid4s3G9/YbZ7Xi3tvxT14rtywjGKYOSzwDtdUor8DKjhiYZNNB7Pj3JhHgo8DY5B5LwWatGNeuslWRwc/1RDZcaDhd6ifp77DBP5BZ3La+57HTXqc6gkHWa4TjjmCIufmDmaA81FwfIxyEL1f9Py2NUzQjnaTgeNfmpVUwy0qRG+gwohV+ZrQCTeUmGEp8O4drKstzAkPn0CYoJVu91geIE5vSzJoTrT0TYoyV5VrN01+NHklLfwjXBFfEf+fxHpuxfWytlhiMQtFnGupgwXC4npsljGxsckNXP2twi6Z2GzQwnpL4JwIPqGFFBYAk1x+C48D8ke2hT3z55I9N8S6GGO9lWN6rRoDNFgxzjvh2h3z0BWod246feXeqw0wFQd3ECZctizzIXdqAmljJSBuDJ3HTLFd87Twul5FYlbPTdl7ihRH75XulsO4O3IkM+9kjwK63G2qDlYlBjcSMvPzU3WhNTpaNDwesXGXTnxA98CwxTKrNJJYH2lYd2nhPHSq0WhGYqpCT4PmxUNHIkNqvl+kqAt+Ki+HjiZnfWIC0GmPei6jVg3X1n8AjEz/0x6pE5sAAAAASUVORK5CYII=" mode=""></image>
						</view>
					</view>
				</view>
				<!-- <view class="mt-3">
					<text class="text-xs text-gray-500">{{ $t('usdt.address') }}</text>
				</view> -->
				<!-- <view class="mt-3 gui-bg-gray rounded-md px-3"> -->
					<!-- <view class="flex flex-row gap-x-1 justify-between items-center" @click="copyAddress"> -->
						<!-- <text class="gui-icons gui-block gui-color-gray text-lg">&#xe601;</text> -->
						<!-- <view class="gui-form-input" selectable>{{ address }}</view> -->
						<!-- <image src="/static/img/copy.png" class="h-[50rpx] w-[50rpx]"></image> -->
					<!-- </view> -->

				<!-- </view> -->
				<view class="mt-10">
					<text class="text-xs text-gray-500">{{ $t('recharge.money') }}</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input type="number" v-model="money" class="gui-form-input" placeholder="" />
						<!-- <view>USDT</view> -->
					</view>
				</view>
				
				<view class="flex flex-row gap-2 text-[20rpx] text-gray-500 mt-5">
					<view>*{{ $t('min_withdraw') }}：</view>
					<view>{{ currentNetwork.min }} {{ currentNetwork.currency }}</view>
				</view>
				<view class="flex flex-row gap-2 text-[20rpx] text-gray-500 mt-2">
					<view>*{{ $t('max_withdraw') }}：</view>
					<view>{{ currentNetwork.max }} {{ currentNetwork.currency }}</view>
				</view>

				<view class="mt-8">
					<text class="text-xs text-gray-500">{{ $t('recharge.upload') }}</text>
				</view>
				<view class="mt-3 w-full">
					<gui-upload-images :header="header" @change="change" ref="uploadimgcom" @uploaded="uploaded" fileName="file"
						@uploaderror="handleError" :btnName="$t('upload.add')"
						uploadServerUrl="http://localhost:3000/api/v1/member/upload/file"></gui-upload-images>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[220rpx] bg-white footer flex flex-col justify-center ">
				<view class="flex flex-col justify-between items-center gap-3 px-4">
					<view class="text-xs text-[#3395ff]"
						@click="$go('/pages/wallet/rechargeRecords/rechargeRecords', 'navigateTo')">{{ $t('recharge.history') }}
					</view>
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @click="submit">
						<text class="gui-color-white gui-button-text font-semibold ">{{ $t('confirm') }}</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import {
		getSettingBykey
	} from '@/api/setting.js'
	import {
		getToken,
		removeToken
	} from '@/util/auth.js';
	import {
		requestRecharge,
		getAccountList
	} from '@/api/member.js'
	import QRCode from '@/Grace6/js/qrcode.js';
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
				tags: [
				],
				
				tagIndex: {},
				current: {},
				currentNetwork: {}
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
		watch: {
			currentNetwork() {
				new QRCode('canvas', {
					text         : this.currentNetwork.accountAddress,
					width        : uni.upx2px(360),
					height       : uni.upx2px(360),
					colorDark    : '#000000',
					colorLight   : "#ffffff"
				});
			}
		},
		computed: {
			header() {
				return {
					// 'content-type': 'application/json',
					'Authorization': `Bearer ${getToken()}`
				}
			},
			network() {
				return this.tags[this.tagIndex]?.children || []
			},
			// currentNetwork () {
			// 	return this.network[this.]
			// }
		},
		methods: {
			async getAccountList() {
				try{
					const result = await getAccountList()
					const map = [];
					
					result.forEach((item, idx) => {
						const index = map.findIndex(i => i.text === item.currency)
						if (index >= 0) {
							const parent = map[index];
							map[index].children.push({
								text: item.account,
								...item,
								checked: false
							})
						} else {
							map.push({
								text: item.currency,
								checked: idx === 0,
								children: [
									{
										text: item.account,
										checked: true,
										...item
									}
								]
							})
						}
						
					})
					console.log(map)
					this.tags = map
					this.current = this.tags[0]
					this.tagIndex = map[0]
					this.currentNetwork = map[0].children[0]
				}catch(e){
					//TODO handle the exception
				}
			},
			changeTag(index) {
				this.current = index
				console.log(index)
				index.children?.forEach((item, idx) => {
					item.checked = idx === 0
				})
				
				this.currentNetwork = index.children[0]
			},
			changeNetwork(index) {
				console.log(index)
				// this.networkIndex = index
				this.currentNetwork = index
			},
			copyAddress() {
				uni.setClipboardData({
					data: this.currentNetwork.accountAddress,
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
				const screens = uploadedImgs.map(item => item.result.file.path)
				console.log(screen)
				try {
					await requestRecharge({
						money: this.money,
						screens,
						type: 'CRYPTO',
						market: this.market,
						account: this.currentNetwork.currency,
						accountNetwork: this.currentNetwork.account,
					})
					uni.hideLoading()
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					uni.switchTab({
						url: "/pages/main/trade/trade"
					})
				} catch (e) {
					uni.hideLoading()
					//TODO handle the exception
					uni.showToast({
						title: 'Failed',
						icon: 'none'
					})
				}
			},
			async requestSetting() {
				try {
					const {
						value
					} = await getSettingBykey('usdt')
					this.address = value.value
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			}
		},
		onShow() {
			this.requestSetting()
			this.getAccountList()
		},
		created() {
			// this.current = this.tags[0]
		},
		onLoad(e) {
			this.market = e.market
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
	
	.recharge-stags {
		:deep(.checked-class) {
			color: #3395ff !important;
			border: 1px solid #3395FF;
			background-color: #E5F2FF !important;
			box-sizing: border-box !important;
			font-size: 24rpx !important;
			padding-left: 40rpx !important;
			padding-right: 40rpx !important;
		}
		
		:deep(.default-class) {
			color: #333 !important;
			background-color: #f9f9f9 !important;
			font-size: 24rpx !important;
			padding-left: 40rpx !important;
			padding-right: 40rpx !important;
		}
	}

</style>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.footer {
		box-shadow: 0 -0.3125rem 0.4375rem rgba(128, 128, 128, .1);
	}
	

</style>