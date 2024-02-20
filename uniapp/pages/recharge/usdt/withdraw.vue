<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2 font-sans">
				<view class="mt-3">
					<!-- <text class="text-xs text-gray-500">帳戶類型</text> -->
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view>{{ $t('withdraw.enter_address') }}</view>
						<view class="gui-form-input flex">
							<view class="flex flex-row items-center justify-center gap-4 text-xs text-gray-500">
								<view>USD</view>
								<view>{{ balance }}</view>
							</view>
						</view>
					</view>
				</view>
				
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input class="gui-form-input" :placeholder="$t('usdt.address')" v-model="address" />
					</view>
				</view>
				
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input type="number" class="gui-form-input" :placeholder="$t('withdraw.enter_money')" v-model="money" />
					</view>
				</view>
				
				<view class="text-[20rpx] text-gray-400 mt-4">
					{{ $t('max_withdraw') }}：<text class="text-black">{{ min }}</text>
				</view>
				
				<view class="text-[20rpx] text-gray-400 mt-4">
					{{ $t('max_withdraw') }}：<text class="text-black">{{ max }}</text>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[220rpx] bg-white footer flex flex-col justify-center ">
				<view class="flex flex-col justify-between items-center gap-3 px-4">
					<view class="text-xs text-[#3395ff]"  @click="$go('/pages/wallet/fundRecords/fundRecords', 'navigateTo')">{{ $t('withdraw.history') }}</view>
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @click="submit">
						<text class="gui-color-white gui-button-text font-semibold font-sans">{{ $t('confirm') }}</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { requestWithdraw, getProfile } from '@/api/member.js'
	import { getSettings } from '@/api/setting.js'
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
				balance: 0,
				settings: {}
			}
		},
		onLoad: function() {
			
		},
		
		computed: {
			min() {
				return this.settings?.min_withdraw?.value || 0
			},
			max() {
				return this.settings?.max_withdraw?.value || 0
			}
		},
		methods: {
			change: function(e) {
				this.needPploadedImgs = e;
			},
			// 提交动态
			// 过程说明 : 
			// 点击提交按钮 > 首先执行组件的上传函数 > 上传成功后获得已经上传的图片数据 > 提交给后端 api 记录整个内容 
			submit: async function() {
				if (!this.address || !this.money) {
					uni.showToast({
						title: this.$t('form.validate_error'),
						icon: 'none'
					})
					return
				}
				
				if (this.money > this.balance || this.money < this.min || this.money > this.max ) {
					uni.showToast({
						title: this.$t('form.validate_error'),
						icon: 'none'
					})
					return
				}
				
				uni.showLoading({
					title: 'Wait'
				})
				try{
					await requestWithdraw({
						address: this.address,
						money: this.money
					})
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					
					uni.switchTab({
						url: "/pages/main/trade/trade"
					})
				}catch(e){
					uni.showToast({
						title: 'Fail',
						icon: 'none'
					})
					//TODO handle the exception
				}
				
				uni.hideLoading()
			},
			
			async getSettings() {
				try{
					const result = await getSettings()
					const obj = {}
					result.forEach((item) => {
						obj[item.key] = item.value;
					});
					
					this.settings = obj
					
				}catch(e){
					//TODO handle the exception
				}
			},
			
			async getProfile() {
				try{
					const member = await getProfile()
					this.balance = member.balance
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			}
		},
		created() {
			this.getProfile()
			this.getSettings()
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