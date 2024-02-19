<template>
	<view class="px-4 pt-5">
		<view class="flex flex-row text-gray-400 font-sans text-[22rpx]">
			<view class="basis-1/4">市场</view>
			<view class="basis-1/4">代码</view>
			<view class="basis-1/4 text-center">模式</view>
			<view class="basis-1/4 text-center">数量</view>
			<view class="basis-1/4 text-right">{{ $t('table.time') }}</view>
		</view>
		
		<view v-if="lists.length" class="flex flex-row items-center font-sans text-xs mt-5" v-for="(item,index) in lists">
			<view class="basis-1/4">{{ item.stockSymbol.market }}</view>
			<view class="basis-1/4">{{ item.stockSymbol.code }}</view>
			<view class="basis-1/4 text-center">{{ types[item.mode].title }}
			</view>
			<view class="basis-1/4 text-center">{{ item.amount }}</view>
			<view class="basis-1/4 text-right">
				<view>{{ dayjs(item.createdAt).format("YYYY-MM-DD") }}</view>
				<view>{{ dayjs(item.createdAt).format("HH:mm:ss") }}</view>
			</view>
		</view>
		<view v-else class="flex justify-center items-center h-[70vh]">
			<empty></empty>
		</view>
	</view>
</template>

<script>
	import { requestMemberPositionsHistory } from '@/api/member.js'
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				market: '',
				lists: [],
				dayjs
			}
		},
		
		computed: {
			types() {
				return [
					{
						title: '开多',
						type: 'success'
					},
					{
						title: '开空',
						type: 'fail'
					}
				]
			}
		},
		methods: {
			async requestMemberPositionsHistory() {
				try{
					console.log(this.market)
					const result = await requestMemberPositionsHistory({
						market: this.market,
						status: 1
					})
					
					this.lists = result
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			}
		},
		
		created() {
			
		},
		
		onLoad(e) {
			console.log(e)
			this.market = e.market
			this.requestMemberPositionsHistory()
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>
