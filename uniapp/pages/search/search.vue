<template>
	<gui-page>
		<template v-slot:gFixedTop>
			<view class="h-[88rpx] bg-white flex flex-row justify-between items-center gap-x-4 px-4 ">
				<gui-search @inputting="inputting" @confirm="confirm" kwd=""
					:placeholder="$t('search.stock_name_code')" @clear="clear"></gui-search>
				<view class="font-semibold " @click="confirm">{{ $t('confirm') }}</view>
			</view>
		</template>
		<!-- 页面主体 -->
		<template v-slot:gBody>
			<view style="height:88rpx;"></view>
			<view class="px-4 py-3 " v-if="lists.length">
				<view class="bg-white rounded-md px-3 py-4" >
					<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
						<view class="basis-1/2">{{ $t("table.symbol_name") }}</view>
						<view class="basis-1/3 text-right">{{ $t("table.price") }}</view>
						<view class="basis-1/3 text-right">{{ $t("table.chg") }}</view>
					</view>

					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')" v-for="(item,index) in lists" :key="item.id">
						<view class="basis-1/2 overflow-hidden">
							<view class="flex flex-col">
								<view class="truncate text-[22rpx]">{{ item.name }}</view>
								<view class="flex flex-row items-center gap-x-1 mt-2">
									<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">{{ item.market }}</view>
									<view class="text-[#999] text-[20rpx]">{{ item.code }}</view>
								</view>
							</view>
						</view>
						<view class="basis-1/3 text-right text-xs font-mono" :class="[parseFloat(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ parseFloat(item.newPrice).toFixed(3) || 0 }}</view>
						<view class="basis-1/3 text-right text-xs font-mono" :class="[parseFloat(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{parseFloat(item.change) > 0 ? '+' : ''}}{{ item.changePercent }}%</view>
					</view>

				</view>
			</view>
			<view class="px-3" v-else>
				<view class="flex justify-center items-center h-[70vh]">
					<empty></empty>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import {
		searchStock
	} from '@/api/stock.js'
	export default {
		data() {
			return {
				kwd: '',
				lists: []
			}
		},
		methods: {
			clear() {
				this.kwd = ''
			},
			// 监听输入
			inputting: function(e) {
				console.log(e);
				this.kwd = e
			},
			// 监听提交
			confirm: async function(e) {
				console.log(e);
				if (!this.kwd) return
				uni.showLoading({
					title: 'wait'
				})
				try {
					this.lists = await searchStock(this.kwd)
				} catch (e) {
					console.log(e)
					uni.showToast({
						title: "网络错误"
					})
					//TODO handle the exception
				}

				uni.hideLoading()
			},
			// 监听点击
			tapme: async function() {
				console.log(1)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>