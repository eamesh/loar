<template>
	<view class="px-4 py-3 ">
		<view class="bg-white rounded-md px-3 py-4">
			
			<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
				<view class="basis-1/2">{{ $t("table.symbol_name") }}</view>
				<view class="basis-1/3 text-right">{{ type !== 'turnover' ? $t("table.price") : $t('rank.turnover') }}</view>
				<view class="basis-1/3 text-right">{{ $t("table.chg") }}</view>
			</view>
	
			<view v-for="(item,index) in current" :key="index" class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6" @click="$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')">
				<view class="basis-1/2 overflow-hidden">
					<view class="flex flex-col">
						<view class="truncate text-[22rpx]">{{ item.name }}</view>
						<view class="flex flex-row items-center gap-x-1 mt-2">
							<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">{{ item.market }}</view>
							<view class="text-[#999] text-[20rpx]">{{ item.symbol }}</view>
						</view>
					</view>
				</view>
				<view class="basis-1/3 text-right text-xs font-mono" :class="[+(item.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']" v-if="type === 'turnover'">{{ item.volume }}</view>
				<view class="basis-1/3 text-right text-xs font-mono" :class="[+(item.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']" v-else>{{ +(item.change) > 0 ? '+' : '' }}{{ parseFloat(item.newPrice)?.toFixed(3) }}</view>
				<view class="basis-1/3 text-right text-xs font-mono" :class="[+(item.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ +(item.change) > 0 ? '+' : '' }}{{ parseFloat(item.changePercent)?.toFixed(3) }}%</view>
			</view>

		</view>
	</view>
</template>

<script>
	import { index } from '@/api/index.js'
	import { mapState } from 'pinia'
	import { useAppStore } from '../../store/app'
	export default {
		data() {
			return {
				type: 'gainers',
				indexData: {
					hot: [],
					gainers: {},
					losers: {},
					turnover: {}
				}
			}
		},
		computed: {
			...mapState(useAppStore, {
				token: 'token',
				market: 'market'
			}),
			current() {
				return this.indexData[this.type]
			}
		},
		methods: {
			async indexRequest() {
				try{
					const result = await index(this.market)
					
					this.indexData = {
						hot: result.hot.length ? result.hot : [],
						gainers: result.gainers.length ? result.gainers : {},
						losers: result.losers.length ? result.losers : {},
						turnover: result.turnover.length ? result.turnover : {},
					}
					
					console.log(this.indexData)
				}catch(e){
					//TODO handle the exception
				}
			}
		},
		
		created() {
			this.indexRequest()
		},
		
		onLoad({ type }) {
			this.type = type
			uni.setNavigationBarTitle({
				title: this.$t(`rank.${type}`)
			})
		}
	}
</script>

<style>

</style>
