<template>
	<view class="bg-white">
		<view class="px-4 pt-4">
			<view
				class="w-full text-white font-semibold font-sans px-4 pt-5 text-xs box-border aspect-[1/0.24] bg-red-100 rounded-xl bg-cover bg-no-repeat bg-center flex flex-row flex-wrap"
				style="background-image: url('/static/img/trade_03.png');">
				<view class="basis-1/2">
					<view class="flex flex-col gap-y-2">
						<view>USD</view>
						<view>0</view>
					</view>
				</view>
				<view class="basis-1/2">
					<view class="flex flex-col gap-y-2">
						<view>HKD</view>
						<view>0</view>
					</view>
				</view>
				<!-- 	<view class="basis-1/2">
								<view class="flex flex-col gap-y-2">
									<view>AUD</view>
									<view>0</view>
								</view>
							</view>
							<view class="basis-1/2">
								<view class="flex flex-col gap-y-2">
									<view>USD</view>
									<view>0</view>
								</view>
							</view> -->
			</view>
		</view>

		<view class="px-4 my-4">
			<view class="text-sm font-sans font-semibold">{{ $t('fund.transfer') }}:</view>
			<view class="bg-[#F9F9F9] flex flex-row justify-between items-center px-3 py-3 rounded-full mt-4">
				<view class="flex flex-row rounded-full bg-[#f5f5f5] px-3 py-2 gap-3 items-center" @click="openResource">
					<image :src="fromMap.img" class="w-[50rpx] h-[50rpx] rounded-full" mode=""></image>
					<view class="text-[#3395ff]">{{ fromMap?.lable }}</view>
					<!-- <text class="gui-icons gui-block gui-color-gray gui-text">&#xe603;</text> -->
				</view>

				<view class="flex flex-col items-end justify-between gap-y-1 pr-3">
					<view class="text-xs text-gray-500">{{ $t('account') }}: {{ accountBalance[fromMap.market].balance }}</view>
					<input type="number" v-model="amount" @input="exchangeRequest" class="gui-form-input text-right" style="margin: 0;" name="name1" placeholder="" />
				</view>
			</view>
			<view class="flex justify-center items-center py-6">
				<image src="/static/country/transform02.png" class="w-[60rpx] h-[60rpx]" @click="handleSwitch"></image>
			</view>
			<view class="bg-[#F9F9F9] flex flex-row justify-between items-center px-3 py-3 rounded-full">
				<view class="flex flex-row rounded-full bg-[#f5f5f5] px-3 py-2 gap-3 items-center" @click="openResource">
					<image :src="toMap.img" class="w-[50rpx] h-[50rpx] rounded-full" mode=""></image>
					<view class="text-[#3395ff]">{{ toMap.lable }}</view>
					<!-- <text class="gui-icons gui-block gui-color-gray gui-text">&#xe603;</text> -->
				</view>

				<view class="flex flex-col items-end justify-between gap-y-1 pr-3">
					<view class="text-xs text-gray-500">{{ $t('account') }}: {{ accountBalance[toMap.market].balance }}</view>
					<input type="number" v-model="exchangeAmount" disabled="" class="gui-form-input text-right" style="margin: 0;" name="name1" placeholder="" />
				</view>
			</view>

			<view class="flex flex-row justify-between items-center mt-5 font-sans">
				<view class="text-xs">{{ $t('exchange.rate') }}</view>
				<view class="flex flex-row items-center gap-x-3 font-mono text-xs">
					<view>
						{{ amount }} {{ fromMap.lable }}
					</view>
					<image src="/static/country/transform_mini02.png" class="w-[24rpx] h-[24rpx]"></image>
					<view>
						{{ exchangeAmount }} {{ toMap.lable }}
					</view>
				</view>
			</view>

			<view class="h-[220rpx] bg-white footer flex flex-col justify-center mt-14 ">
				<view class="flex flex-col justify-between items-center gap-3">
					<!-- <view class="text-xs text-[#3395ff]" @click="$go('/pages/wallet/fundRecords/fundRecords', 'navigateTo')">
						{{ $t('trasfer.record') }}
					</view> -->
					<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @click="handleTranser">
						<text class="gui-color-white gui-button-text font-semibold font-sans" >{{ $t('confirm') }}</text>
					</button>
				</view>
			</view>

			<gui-popup ref="resource" position="bottom">
				<view class="bg-white rounded-t-lg h-[780rpx]">
					<view class="px-4 pt-3">
						<view class="flex flex-row justify-between items-center">
							<view class="font-semibold text-sm" @tap="">{{ $t('cancel') }}</view>
							<view class="font-semibold text-sm text-[#3395FF]">{{ $t('confirm') }}</view>
						</view>
					</view>
					<!-- iphone 底部适配 -->
					<gui-iphone-bottom :customClass="['gui-bg-white', 'gui-dark-bg-level-3']"></gui-iphone-bottom>
				</view>
			</gui-popup>
		</view>
	</view>
</template>

<script>
	import { getProfile, exchange, transer } from '@/api/member.js'
	
	function debounce(fn, wait) {
	    let timeout = null;
	    wait = wait || 600;
	    return function () {
	      let that = this;
	      if(timeout !== null)   clearTimeout(timeout);  
	      timeout = setTimeout(() => {
	        fn.apply(that);
	      }, wait);
	    }    
	}

	export default {
		data() {
			return {
				amount: 0,
				exchangeAmount: 0,
				from: 'USD',
				to: 'HKD',
				accountBalance: {
					HKEX: {
						lock: 0,
						balance: 0,
						unBalance: 0
					},
					US: {
						lock: 0,
						balance: 0,
						unBalance: 0
					}
				},
				map: {
					USD: {
						market: 'US',
						lable: 'USD',
						img: '/static/country/US.png'
					},
					HKD: {
						market: 'HKEX',
						lable: 'HKD',
						img: '/static/country/HKEX.png'
					}
				}
			}
		},
		computed: {
			fromMap() {
				return this.map[this.from]
			},
			toMap() {
				return this.map[this.to]
			}
		},
		methods: {
			exchangeRequest: debounce(async function () {
				uni.showLoading({
					title: 'Loading',
				})
				try{
					const result = await exchange({
						from: this.from,
						money: this.amount
					})
					
					this.exchangeAmount = result
				}catch(e){
					//TODO handle the exception
				}
				
				uni.hideLoading()
			}, 500),
			handleSwitch() {
				[this.to, this.from] = [this.from, this.to]
				this.amount = 0
				this.exchangeAmount = 0
			},
			async getProfile() {
				
				try{
					const profile = await getProfile()
					console.log(profile)
					this.accountBalance = profile.accountBalance
				}catch(e){
					//TODO handle the exception
				}
				
			},
			
			async handleTranser() {
				uni.showLoading({
					title: 'Loading'
				})
				
				try{
					await transer({
						from: this.from,
						to: this.to,
						money: this.amount
					})
					this.amount = 0
					this.exchangeAmount = 0
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					this.getProfile()
				}catch(e){
					uni.showToast({
						title: 'Failed',
						icon: 'none'
					})
					//TODO handle the exception
				}
				
				uni.hideLoading()
			}
		},
		created() {
			this.getProfile()
		}
	}
</script>

<style>
</style>