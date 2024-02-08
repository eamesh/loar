<template>
	<gui-page>
		<template v-slot:gFixedTop>
			<view class="h-[88rpx] bg-white flex flex-row justify-between items-center gap-x-4 px-4">
				<gui-search @inputting="inputting" @confirm="confirm" kwd="TSLA" placeholder="股票名稱/代碼"></gui-search>
				<view class="font-semibold font-sans">確認</view>
			</view>
		</template>
		<!-- 页面主体 -->
		<template v-slot:gBody>
			<view style="height:88rpx;"></view>
			<view class="px-4 py-3">
				<view class="bg-white rounded-md px-3 py-4">
					<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
						<view class="basis-1/2">Symbol/Name</view>
						<view class="basis-1/3 text-right">Price</view>
						<view class="basis-1/3 text-right">Chg%</view>
					</view>
			
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go('/pages/kline/kline', 'navigateTo')">
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
				</view>
			</view>
			<view class="px-3" v-if="false">
				<view class="flex justify-center items-center h-[70vh]">
					<empty></empty>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 监听输入
			inputting: function(e) {
				console.log(e);
			},
			// 监听提交
			confirm: function(e) {
				console.log(e);
			},
			// 监听点击
			tapme: function() {
				uni.showToast({
					title: "被点了...."
				});
			}
		}
	}
</script>

<style lang="scss">
page {
	background-color: #fff;
}
</style>