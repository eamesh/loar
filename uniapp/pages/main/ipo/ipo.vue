<template>
	<gui-page customHeader isSwitchPage :statusBarClass="['bg-white']">
		<template v-slot:gFixedTop>
			<view class="flex flex-col justify-between items-center bg-white h-[160rpx] pt-2 box-border pr-4 font-sans">
				<view class="flex justify-between items-center w-full">
					<gui-switch-navigation :currentIndex="currentIndex" :items="navBars" textAlign="center" :size="80" activeDirection="center"
						@change="navchange" :margin="30" :width="600" padding="10rpx"></gui-switch-navigation>
					<!-- <view class="w-[80rpx] flex-shrink-0 text-xs" @click="$go('/pages/stock/ipo/record')">记录</view> -->
					<view class="gui-icons gui-block gui-color-gray text-lg" @click="$go('/pages/stock/ipo/record/record', 'navigateTo')">&#xe62f;</view>
				</view>
				<view class="flex justify-between items-center w-full">
					<gui-switch-navigation :currentIndex="currentIndexSecond" :items="secondaNav" fontSize="20rpx" activeFontSize="20rpx"
						textAlign="center" activeDirection="center" @change="navchangeSecond" :margin="0" 
						padding="0rpx"></gui-switch-navigation>
				</view>
			</view>
		</template>

		<template v-slot:gBody>
			<view class="h-[160rpx]"></view>
			<view class="p-4 flex flex-col gap-y-3">
				<view class="bg-white rounded-md py-4 px-3 flex flex-col gap-y-3" v-for="(item,index) in subscribes" :key="item.id">
					<view class="flex flex-row justify-between items-center">
						<view class="flex flex-col gap-y-2">
							<view class="font-semibold font-sans">{{ item.name }}</view>
							<view class="flex flex-row gap-x-1 items-center font-sans">
								<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">{{ item.market.code }}</view>
								<view class="text-[#999] text-[20rpx]">{{ item.code }}</view>
							</view>
						</view>
						<view class="px-5 py-1 bg-[#3395FF] text-white text-xs font-semibold rounded-md" @click="$go(`/pages/main/ipo/confirm?id=${item.id}`, 'navigateTo')">订阅</view>
					</view>
					<view class="flex flex-row text-[22rpx] text-[#999] font-sans">
						<view class="basis-1/3">發行價</view>
						<view class="basis-2/3 text-black">{{ item.ipoPrice }} {{ item.market.currency }}</view>
					</view>
					<view class="flex flex-row text-[22rpx] text-[#999] font-sans">
						<view class="basis-1/3">截止日期</view>
						<view class="basis-1/3 text-black">{{ dayjs(item.endAt).format("YYYY-MM-DD") }}</view>
						<view class="basis-1/3 text-black flex justify-end">
							<view class="text-[#3395FF] pr-1">{{ dayjs(item.endAt).diff(dayjs(), 'day') }}</view>
							days left
						</view>
					</view>
					<!-- <view class="flex flex-row text-[22rpx] text-[#999]">
						<view class="basis-1/3">進度</view>
						<view class="basis-2/3">1</view>
					</view> -->
				</view>
			</view>
			<view class="flex justify-center items-center h-[70vh]">
				<empty />
			</view>
		</template>
	</gui-page>
</template>

<script>
	import graceJS from '@/Grace6/js/grace.js';
	import { mapState } from 'pinia'
	import { useAppStore } from '../../../store/app';
	import { getSubscribes } from '@/api/ipo.js'
	import dayjs from 'dayjs'
	
	export default {
		data() {
			return {
				currentIndex: 0,
				currentIndexSecond: 0,
				subscribes: [],
				dayjs
			}
		},
		computed: {
			...mapState(useAppStore, {
				markets: 'markets',
			}),
			market() {
				return this.markets.find((_, idx) => this.currentIndex === idx)
			},
			type() {
				return this.secondaNav.find((_, idx) => idx === this.currentIndexSecond)?.type
			},
			navBars() {
				return this.markets.map(item => {
					return {
						...item,
						name: item.code
					}
				})
			},
			secondaNav () {
				return [{
						name: this.$t("offering"),
						id: 0,
						type: 1
					},
					{
						name: this.$t("to_be_listed"),
						id: 1,
						type: 4
					},
					{
						name: this.$t("listed"),
						id: 2,
						type: 5
					}
				]
			}
		},
		watch: {
			market() {
				this.requestSubscribes()
			},
			type() {
				this.requestSubscribes()
			}
		},
		methods: {
			navchangeSecond(index) {
				this.currentIndexSecond = index
			},
			navchange: function(index) {
				console.log(index);
				this.currentIndex = index
				this.currentIndexSecond = 0
			},
			async requestSubscribes() {
				if (!uni.getStorageSync('member_id')) {
					this.$go('/pages/auth/signin/signin', 'navigateTo')
					return
				}
				try{
					console.log(this.market.code)
					const result = await getSubscribes(this.market.code, this.type)
					console.log(this.market.code)
					this.subscribes = result
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			}
		},
		created: function() {
			console.log(this.market)
			this.requestSubscribes()
		},
		onShow() {
			if (uni.getStorageSync('member_id')) {
				this.requestSubscribes()
			}
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>