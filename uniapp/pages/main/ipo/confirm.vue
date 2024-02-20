<template>
	<view>
		<view class="px-4 pt-5 flex flex-col gap-y-4">
			<view>{{ detail.name }}</view>
			<view class="flex flex-row gap-x-1 items-center">
				<view class="bg-[#3395FF] text-white text-[20rpx] px-[10rpx] py-[3px] rounded-sm">{{ detail.market?.code }}</view>
				<view class="text-[#999] text-[22rpx]">{{ detail.code }}</view>
			</view>
			<view class="flex flex-row text-[#999] justify-between items-center">
				<view>{{ $t('ipo_price') }}</view>
				<view class="text-black">{{ detail.ipoPrice }} {{ detail.market?.currency }}</view>
			</view>
			<view class="flex flex-row text-[#999] justify-between items-center">
				<view>{{ $t('deadline') }}</view>
				<view class="text-black flex justify-end">
					{{ dayjs(detail.endAt).format("YYYY-MM-DD HH:mm:ss") }}
				</view>
			</view>
			<view class="flex flex-col text-[#999] gap-y-3">
				<view></view>
				<view class="px-4 gui-bg-gray rounded-md">
					<gui-select-list @change="handleChange" :items="select"></gui-select-list>
				</view>
			</view>
			<view class="flex flex-row text-[#999] justify-between items-center">
				<view>{{ $t('money') }}</view>
				<view class="text-black flex justify-end">
					{{ money }}
				</view>
			</view>
			<view class="flex flex-row text-[#999] justify-between items-center">
				<view>{{ $t('unbalance') }}</view>
				<view class="text-black flex justify-end">
					{{ money }}
				</view>
			</view>
			<view class="mt-5">
				<button type="default" class="gui-button gui-bg-primary gui-noborder" @click="submit">
					<text class="gui-icons gui-color-white gui-button-text">{{ $t('confirm') }}</text>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import { getSubscribeDetail, orderSubscribe } from '@/api/ipo.js'
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				id: null,
				select: [],
				detail: {},
				current: 0,
				dayjs
			}
		},
		computed: {
			subAmount() {
				return this.detail.subAmount || []
			},
			money() {
				const current = this.subAmount[this.current]
				if(!current) {
					return 0
				}
				const money = +current.amount * +current.price
				return money
			},
			currentSelect() {
				return this.select[this.current]
			}
		},
		methods: {
			async submit() {
				uni.showLoading({
				})
				try{
					const current = this.currentSelect
					await orderSubscribe(this.id, {
						market: this.detail.market.code,
						amount: +current.amount,
						money: parseFloat(current.price),
						type: 0
					})
					
					uni.showToast({
						title: 'Success'
					})
					
					uni.switchTab({
						url: "/pages/main/ipo/ipo"
					})
				}catch(e){
					//TODO handle the exception
				}
				
				uni.hideLoading()
			},
			handleChange(e) {
				console.log(e)
				this.current = e
			},
			async requestDetail() {
				uni.showLoading({
					
				})
				try{
					const result = await getSubscribeDetail(this.id)
					this.detail = result
					this.select = result.subAmount.map((item, idx) => {
						const checked = idx === 0
						return {
							...item,
							title: `${this.$t('amount')}: ${item.amount}`,
							desc: `${this.$t('money')}: ${item.price}`,
							checked
						}
					})
					this.current = 0
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
				
				uni.hideLoading()
			}
		},
		
		created() {
		},
		
		onLoad(e) {
			this.id = e.id
			this.requestDetail()
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}
</style>