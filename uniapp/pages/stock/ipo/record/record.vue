<template>
	<view class="p-4">
		<view class="flex flex-col gap-y-4" v-if="lists.length">
			<view class="flex bg-white p-4 rounded-lg flex-row flex-wrap text-gray-400 font-sans text-[22rpx] gap-y-3" v-for="(item,index) in lists" :key="item.id">
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t('market') }}</view>
						<view class="text-black">{{ item.market }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t('code') }}</view>
						<view class="text-black">{{ item.code }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("quantity") }}</view>
						<view class="text-black">{{ item.amount }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("sub_amount") }}</view>
						<view class="text-black">{{ item.money }} {{ mapMarkets[item.market] }}</view>
					</view>
				</view>
				
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("win_quantity") }}</view>
						<view class="text-black">{{ item.winningAmount }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("win_amount") }}</view>
						<view class="text-black">{{ item.winningPrice }} {{ mapMarkets[item.market] }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("status") }}</view>
						<view class="text-black">{{ types[item.type] }}</view>
					</view>
				</view>
				<view class="basis-1/4">
					<view class="flex flex-col gap-y-2">
						<view class="font-semibold">{{ $t("time") }}</view>
						<view class="text-black">{{ dayjs(item.createdAt).format("YYYY-MM-DD") }}</view>
					</view>
				</view>
			</view>
		</view>
		
		
		<view v-else class="w-full h-[70rpx] pt-[200rpx]">
			<empty></empty>
		</view>
	</view>
</template>

<script>
	import { getSubscribeMemberList } from '@/api/member.js'
	import dayjs from 'dayjs'
	import { mapState } from 'pinia'
import { useAppStore } from '../../../../store/app'
	export default {
		data() {
			return {
				lists: [],
				dayjs
			}
		},
		computed: {
			...mapState(useAppStore, {
				markets: 'markets'
			}),
			mapMarkets() {
				let map = {}
				
				this.markets.forEach(item => {
					map[item.code] = item.currency
				})
				
				return map
			},
			status() {
				return {
					'01': this.$t("refuse"),
					0: this.$t("audit"),
					1: this.$t("audited"),
					2: this.$t("audited"),
				}
			},
			types() {
				return {
					0: this.$t('audit'),
					1: this.$t('audited'),
					2: this.$t('refuse'),
					3: this.$t('cancel'),
					4: this.$t('partial'),
				}
			}
		},
		methods: {
			async getSubscribeMemberList() {
				try{
					const result = await getSubscribeMemberList()
					this.lists = result
				}catch(e){
					//TODO handle the exception
				}
			}
		},
		
		created() {
			this.getSubscribeMemberList()
		}
	}
</script>

<style>
page {
	/* background-color: #fff; */
}
</style>
