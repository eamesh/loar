<template>
	<view class="p-4">
		<view class="flex flex-row text-gray-400 font-sans text-[22rpx]">
			<view class="basis-1/4">{{$t('money')}}</view>
			<view class="basis-1/4">{{$t('real_money')}}</view>
			<view class="basis-1/4 text-center">{{ $t('status') }}</view>
			<view class="basis-1/4 text-right">{{ $t('table.time') }}</view>
		</view>
		
		<view v-if="lists.length" class="flex flex-row items-center font-sans text-xs mt-5" v-for="(item,index) in lists" :key="item.id">
			<view class="basis-1/4">{{ item.money }}</view>
			<view class="basis-1/4">{{ item.rechargeMoney }}</view>
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
	import { requestRechargeRecord } from '@/api/member.js'
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
					'01': this.$t("refuse"),
					0: this.$t("audit"),
					1: this.$t("audited"),
					2: this.$t("audited"),
				}
			}
		},
		methods: {
			async requestRechargeRecord() {
				try{
					const result = await requestRechargeRecord()
					this.lists = result
				}catch(e){
					//TODO handle the exception
				}
			}
		},
		
		created() {
			this.requestRechargeRecord()
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>
