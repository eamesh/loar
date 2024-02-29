<template>
	<gui-page customFooter>
		<template v-slot:gBody>
			<view class="px-4 py-2 ">
				<view class="mt-3">
					<text class="text-xs text-gray-500">貨幣</text>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="gui-form-input flex flex-row justify-between items-center w-full">
							<view class="text-[20rpx] text-gray-500"> 可提金额</view>
							<view class="text-[20rpx] text-gray-500"> {{ currentMarket?.showName }} {{ balance }}</view>
							<text class="gui-icons gui-block gui-color-gray gui-text">&#xe601;</text>
						</view>
					</view>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3" @click="handleSelectCard">
					<view class="flex flex-row justify-between items-center">
						<view class="gui-form-input flex flex-row justify-between items-center w-full">
							<view class="text-[20rpx] text-gray-500"> {{ card?.detail?.network ?? '请选择收款账户' }}</view>
							<text class="gui-icons gui-block gui-color-gray gui-text">&#xe601;</text>
						</view>
					</view>
				</view>
				<view class="mt-3 gui-bg-gray rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="gui-form-input flex flex-row justify-between items-center w-full">
							<input type="number" v-model="money" class="text-[22rpx] w-full" placeholder="请输入体现金额" />
							<text class="gui-icons gui-block gui-color-gray gui-text">&#xe601;</text>
						</view>
					</view>
				</view>
				
				<view class="flex flex-col text-gray-500 text-[18rpx] gap-y-2 mt-3">
					<view>最低金额: {{ currentMarket?.maxWithdrawal || 0 }}</view>
					<view>最大金额: {{ currentMarket?.minWithdrawal || 0 }}</view>
					<view>收款地址: {{ card?.detail?.address }}</view>
				</view>
			</view>
		</template>

		<template v-slot:gFooter>
			<view class="h-[200rpx] bg-white footer flex flex-col justify-center ">
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
				card: {},
				accountBalance: [],
				markets: [],
				market: '',
				money: ''
			}
		},
		computed: {
			currentMarket() {
				return this.markets.find(item => item.code === this.market)
			},
			balance () {
				return this.accountBalance[this.market]?.balance
			}
		},
		methods: {
			handleSelectCard() {
				uni.navigateTo({
					url: '/pages/setting/crypto/crypto',
					events: {
						selectCard: (data) => {
							console.log(data)
							this.card = data
						}
					}
				})
			},
			
			async getProfile() {
				uni.showLoading({
					title: 'Loading',
					mask: 'true'
				})
				try{
					const result = await getProfile()
					this.accountBalance = result.accountBalance
					uni.hideLoading()
				}catch(e){
					//TODO handle the exception
					uni.hideLoading()
				}
			},
			
			async getMarket() {
				try{
					this.markets = await getMarket()
				}catch(e){
					//TODO handle the exception
				}
			},
			async submit() {
				if (!this.card?.id) {
					uni.showToast({
						title: '请选择收款账户',
						icon: 'none'
					})
					return
				}
				
				if (this.money <= 0) {
					uni.showToast({
						title: '请输入提现金额',
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
						type: 'CRYPTO',
						market: this.market,
						money: this.money,
						card: this.card,
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
			}
		},
		onShow() {
			this.getProfile()
			this.getMarket()
		},
		onLoad(e) {
			this.market = e.market
			uni.setNavigationBarTitle({
				title: `${this.market}`
			})
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
	
	.footer {
		box-shadow: 0 -0.3125rem 0.4375rem rgba(128,128,128,.1);
	}
</style>