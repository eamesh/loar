<template>
	<view class="p-4">
		<view class="flex flex-row text-gray-400  text-[22rpx]">
			<view class="basis-1/4">{{ $t('type') }}</view>
			<view class="basis-1/4">{{ $t('currency') }}</view>
			<view class="basis-1/4">{{ $t('money') }}</view>
			<view class="basis-1/4 text-center">{{ $t('status') }}</view>
			<view class="basis-1/4 text-right">{{ $t('table.time') }}</view>
		</view>
		
		<view v-if="lists.length" class="flex flex-row items-center  text-xs mt-5" v-for="(item,index) in lists" :key="item.id">
			<view class="basis-1/4">{{ item.type }}</view>
			<view class="basis-1/4">{{ item.currency }}</view>
			<view class="basis-1/4">{{ item.convertMoney }}</view>
			<view class="basis-1/4 text-center">{{ status[item.status] }}</view>
			<view class="basis-1/4 text-right">
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
					2: this.$t("refuse"),
					0: this.$t("audit"),
					1: this.$t("audited"),
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
