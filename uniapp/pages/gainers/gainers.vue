<template>
	<view class="px-4 py-3 font-sans">
		<view class="bg-white rounded-md px-3 py-4">
			<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
				<view class="basis-1/2">Symbol/Name</view>
				<view class="basis-1/3 text-right">Price</view>
				<view class="basis-1/3 text-right">Chg%</view>
			</view>
	
			<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6" @click="$go('/pages/kline/kline', 'navigateTo')">
				<view class="basis-1/2 overflow-hidden">
					<view class="flex flex-col">
						<view class="truncate text-[22rpx]">Qualcomm Incorporated</view>
						<view class="flex flex-row items-center gap-x-1 mt-2">
							<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">US</view>
							<view class="text-[#999] text-[20rpx]">QCOM</view>
						</view>
					</view>
				</view>
				<view class="basis-1/3 text-right text-xs text-[#00c537] font-mono">144.100</view>
				<view class="basis-1/3 text-right text-xs text-[#00c537] font-mono">+0.050%</view>
			</view>
			<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6" @click="$go('/pages/kline/kline', 'navigateTo')">
				<view class="basis-1/2 overflow-hidden">
					<view class="flex flex-col">
						<view class="truncate text-[22rpx]">Qualcomm Incorporated</view>
						<view class="flex flex-row items-center gap-x-1 mt-2">
							<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">US</view>
							<view class="text-[#999] text-[20rpx]">QCOM</view>
						</view>
					</view>
				</view>
				<view class="basis-1/3 text-right text-xs text-[#e60101] font-mono">144.100</view>
				<view class="basis-1/3 text-right text-xs text-[#e60101] font-mono">-0.050%</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
