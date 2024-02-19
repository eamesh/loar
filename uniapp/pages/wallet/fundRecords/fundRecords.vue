<template>
	<view class="p-4">
		<view class="flex flex-row text-gray-400 font-sans text-[22rpx]">
			<view class="basis-1/3">金额</view>
			<view class="basis-1/3 text-center">状态</view>
			<view class="basis-1/3 text-right">{{ $t('table.time') }}</view>
		</view>
		
		<view v-if="lists.length" class="flex flex-row items-center font-sans text-xs mt-5" v-for="(item,index) in lists">
			<view class="basis-1/3">{{ item.money }}</view>
			<view class="basis-1/3 text-center">{{ status[item.status] }}</view>
			<view class="basis-1/3 text-right">
				<view>{{ dayjs(item.createdAt).format("YYYY-MM-DD") }}</view>
				<view>{{ dayjs(item.createdAt).format("HH:mm:ss") }}</view>
			</view>
		</view>
		<view v-else class="w-full h-[70rpx] pt-[200rpx]">
			<empty></empty>
		</view>
	</view>
</template>

<script>
	import { requestWithdrawRecord } from '@/api/member.js'
	import dayjs from 'dayjs'
	export default {
		data() {
			return {
				lists: [],
				dayjs
			}
		},
		computed: {
			status() {
				return {
					'01': '拒绝',
					0: '待审很',
					1: '已审核',
				}
			}
		},
		methods: {
			async requestWithdrawRecord() {
				try{
					const result = await requestWithdrawRecord()
					this.lists = result
				}catch(e){
					//TODO handle the exception
				}
			}
		},
		
		created() {
			this.requestWithdrawRecord()
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>
