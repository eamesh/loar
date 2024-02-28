<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2 ">
				<view class="mt-3">
					<text class="text-xs text-gray-500">貨幣</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<gui-select-list @change="handleSelectMarket"
									:items="lists"></gui-select-list>
					<!-- <view class="flex flex-row justify-between items-center">
						<view>{{ currentKey }}</view>
						<input type="password" class="gui-form-input" placeholder="" disabled="" />
						<text class="gui-icons gui-block gui-color-gray text-lg">&#xe601;</text>
					</view> -->
				</view>
			<!-- 	<view class="text-[20rpx] text-gray-400 mt-4">
					可提現金額：{{ accountBalance[currentKey]?.balance || 0 }}
				</view> -->
				
				<view class="mt-4">
					<text class="text-xs text-gray-500">銀行帳戶</text>
				</view>
			
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center" @click="handleSelectCard">
						<view class="gui-form-input">{{ card.detail?.bank }}</view>
						<!-- <input type="password" class="gui-form-input" placeholder="" disabled="" /> -->
						<text class="gui-icons gui-block gui-color-gray text-lg">&#xe601;</text>
					</view>
				</view>

				<view class="mt-4">
					<text class="text-xs text-gray-500">金額</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input type="number" min="100" v-model="money" class="gui-form-input w-full" placeholder="" />
						<view>{{ currentMarket.showName }}</view>
					</view>
				</view>

				<view class="text-[20rpx] text-gray-400 mt-4">
					*最低金額：<text class="text-black">{{ currentMarket.minWithdrawal }} {{ currentMarket.showName }}</text>
				</view>
				
				<view class="text-[20rpx] text-gray-400 mt-4">
					*最大金額：<text class="text-black">{{ currentMarket.maxWithdrawal}} {{ currentMarket.showName }}</text>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[220rpx] bg-white footer flex flex-col justify-center ">
				<view class="flex flex-col justify-between items-center gap-3 px-4">
					<view class="text-xs text-[#3395ff]"  @click="$go('/pages/wallet/fundRecords/fundRecords', 'navigateTo')">提幣歷史</view>
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @click="submit">
						<text class="gui-color-white gui-button-text font-semibold ">確認</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { getProfile } from '@/api/member.js'
	import { getMarket } from '@/api/stock.js'
	import { requestWithdraw } from '@/api/withdraw.js'
	export default {
		data() {
			return {
				market: '',
				accountBalance: {},
				// currentKey: "",
				selectIndex: 0,
				lists: [
					
				],
				markets: [],
				card: {},
				money: ''
			}
		},
		computed: {
			currentMarket() {
				const list = this.lists[this.selectIndex]
				
				if (!list) return {}
				const market = this.markets.find(item => item.code === list.code)
				
				return {
					...market,
					balance: list.balance
				}
			}
		},
		methods: {
			change: function(e) {
				this.needPploadedImgs = e;
			},
			// 提交动态
			// 过程说明 : 
			// 点击提交按钮 > 首先执行组件的上传函数 > 上传成功后获得已经上传的图片数据 > 提交给后端 api 记录整个内容 
			async submit () {
				if (this.money <=0) {
					uni.showToast({
						title: '金額',
						icon: 'none'
					})
					
					return
				}
				uni.showLoading({
					title: 'Loading',
					mask: true
				})
				try{
					await requestWithdraw({
						type: 'CARD',
						market: this.currentMarket.code,
						money: this.money,
						card: this.card.id,
						currency: this.currentMarket.currency
					})
					uni.hideLoading()
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					uni.navigateBack()
				}catch(e){
					//TODO handle the exception
					uni.hideLoading()
				}
			},
			handleSelectMarket(e) {
				console.log(e)
				this.selectIndex = e
			},
			handleSelectCard() {
				uni.navigateTo({
					url: '/pages/setting/card/card',
					events: {
						selectCard: (data) => {
							console.log(data)
							this.card = data
						}
					}
				})
			},
			async getProfile() {
				try{
					const result = await getProfile()
					console.log(result)
					this.accountBalance = result.accountBalance
					// this.currentKey = Object.keys(this.accountBalance)[0]
					
					const lists = Object.keys(this.accountBalance).map((key, index) => {
						const item = this.accountBalance[key]
						const checked = key === this.market
						
						checked && (this.selectIndex = index)
						
						return {
							title: `市场 ${key}`,
							desc: `可提現金額 ${item.balance}`,
							checked,
							code: key,
							...item
						}
					})
					
					this.lists = lists
				}catch(e){
					//TODO handle the exception
				}
			},
			async getMarket() {
				this.markets = await getMarket()
			}
		},
		
		onLoad(e) {
			this.market = e.market
		},
		
		onShow() {
			this.getProfile()
			this.getMarket()
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