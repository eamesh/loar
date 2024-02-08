<template>
	<gui-page customHeader isSwitchPage :statusBarClass="['bg-white']">
		<template v-slot:gFixedTop>
			<view class="flex justify-center items-end bg-white h-[80rpx] font-sans">
				<gui-switch-navigation :items="navBars" :currentIndex="currentIndex" @change="navchange" textAlign="center"
					:isCenter="true" activeDirection="center" :size="0" :margin="20" padding="30rpx"
					activeLineHeight="4rpx"></gui-switch-navigation>
			</view>
		</template>

		<template v-slot:gBody>
			<view class="h-[80rpx]"></view>
			<view v-if="currentIndex !== 0">
				<view class="flex justify-between items-center pt-4 px-4 gap-3 font-sans">
					<view @click="$go('/pages/kline/kline', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-square bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">NDX</view>
						<view class="truncate w-full text-center text-[#00c537] font-mono">15608.998</view>
						<view class="w-full flex flex-row justify-between items-center text-[#00c537] font-mono">
							<view class="text-[18rpx]">+11.321</view>
							<view class="text-[18rpx]">+0.072%</view>
						</view>
					</view>
					<view @click="$go('/pages/kline/kline', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-square bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">NDX</view>
						<view class="truncate w-full text-center text-[#e60101] font-mono">15608.998</view>
						<view class="w-full flex flex-row justify-between items-center text-[#e60101] font-mono">
							<view class="text-[18rpx]">-11.321</view>
							<view class="text-[18rpx]">-0.072%</view>
						</view>
					</view>
					<view @click="$go('/pages/kline/kline', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-square bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">NDX</view>
						<view class="truncate w-full text-center text-[#00c537] font-mono">15608.998</view>
						<view class="w-full flex flex-row justify-between items-center text-[#00c537] font-mono">
							<view class="text-[18rpx]">+11.321</view>
							<view class="text-[18rpx]">+0.072%</view>
						</view>
					</view>
				</view>
				<view class="mt-3 px-4 text-base font-sans">Market Overview</view>
				<view class="flex justify-between items-center pt-3 px-4 gap-3 font-sans">
					<view @click="$go('/pages/gainers/gainers', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-[3/3.5] bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">Gainers</view>
						<view class="truncate w-full text-center text-[#00c537] font-mono">15608.998</view>
						<view class="truncate w-full text-[#999] text-xs">ADDvantage Technologies Group, Inc.</view>
						<view class="w-full flex flex-row justify-between items-center text-[#00c537] font-mono">
							<view class="text-[18rpx]">+11.321</view>
							<view class="text-[18rpx]">+0.072%</view>
						</view>
					</view>
					<view @click="$go('/pages/gainers/gainers', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-[3/3.5] bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">Losers</view>
						<view class="truncate w-full text-center text-[#e60101] font-mono">15608.998</view>
						<view class="truncate w-full text-[#999] text-xs">ADDvantage Technologies Group, Inc.</view>
						<view class="w-full flex flex-row justify-between items-center text-[#e60101] font-mono">
							<view class="text-[18rpx]">-11.321</view>
							<view class="text-[18rpx]">-0.072%</view>
						</view>
					</view>
					<view @click="$go('/pages/gainers/gainers', 'navigateTo')"
						class="flex-1 flex-shrink-0 aspect-[3/3.5] bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
						<view class="truncate w-full text-center">Turnover</view>
						<view class="truncate w-full text-center text-[#00c537] font-mono">15608.998</view>
						<view class="truncate w-full text-[#999] text-xs">ADDvantage Technologies Group, Inc.</view>
						<view class="w-full flex flex-row justify-between items-center text-[#00c537] font-mono">
							<view class="text-[18rpx]">+11.321</view>
							<view class="text-[18rpx]">+0.072%</view>
						</view>
					</view>
				</view>
				<view class="mt-3 px-4 text-base font-sans">All Stocks</view>
				<view class="px-4 py-3 font-sans">
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

			</view>

			<view v-else>
				<view class="px-4 pt-4 font-semibold font-sans">所有股票</view>
				<view class="px-4 py-3">
					<view class="bg-white rounded-md px-3 py-4 custom-stock font-sans">
						<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
							<view class="basis-1/2">Symbol/Name</view>
							<view class="basis-1/3 text-right">Price</view>
							<view class="basis-1/3 text-right">Chg%</view>
						</view>

						<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6" @click="() => {
								 !editCustom && $go('/pages/kline/kline', 'navigateTo')
							}">
							<view class="basis-1/2 overflow-hidden">
								<view class="flex flex-row items-center gap-x-2">
									<gui-radio v-if="editCustom" />
									<view class="flex flex-col flex-1 overflow-hidden">
										<view class="truncate text-[22rpx]">
											Qualcomm Incorporated
										</view>

										<view class="flex flex-row items-center gap-x-1 mt-2">
											<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">US</view>
											<view class="text-[#999] text-[20rpx]">QCOM</view>
										</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3 text-right text-xs text-[#00c537] font-mono">144.100</view>
							<view class="basis-1/3 text-right text-xs text-[#00c537] font-mono">+0.050%</view>
						</view>

						<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6" @click="() => {
								 !editCustom && $go('/pages/kline/kline', 'navigateTo')
							}">
							<view class="basis-1/2 overflow-hidden">
								<view class="flex flex-row items-center gap-x-2">
									<gui-radio v-if="editCustom" />
									<view class="flex flex-col flex-1 overflow-hidden">
										<view class="truncate text-[22rpx]">
											Qualcomm Incorporated
										</view>

										<view class="flex flex-row items-center gap-x-1 mt-2">
											<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">US</view>
											<view class="text-[#999] text-[20rpx]">QCOM</view>
										</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3 text-right text-xs text-[#e60101] font-mono">144.100</view>
							<view class="basis-1/3 text-right text-xs text-[#e60101] font-mono">+0.050%</view>
						</view>

					</view>
				</view>

				<view class="h-[70vh] flex justify-center items-center" v-if="flase">
					<empty />
				</view>

			</view>

			<gui-right-menus>
				<!-- 扩展按钮 -->
				<template v-slot:menus-more>
					<view hover-class="gui-tap" @click="$go('/pages/search/search', 'navigateTo')"
						class="menu-items gui-bg-primary gui-flex gui-columns gui-justify-content-center">
						<text class="menu-icon gui-block gui-text-center gui-icons gui-color-white">&#xe604;</text>
					</view>
				</template>
				<!-- 核心按钮 -->
				<template v-slot:menus-primary>
					<view class="menu-items gui-bg-primary gui-flex gui-columns gui-justify-content-center">
						<text class="menu-icon gui-color-white gui-block gui-text-center gui-icons">&#xe614;</text>
					</view>
				</template>
			</gui-right-menus>

			<transition name="custom">
				<view v-if="currentIndex === 0" class="h-[160rpx] bg-white fixed w-screen footer p-4 box-border"
					style="bottom: var(--window-bottom); left: 0;">
					<view v-if="editCustom" class="flex flex-row justify-between items-center gap-x-5">
						<button type="default" :plain="true" class="gui-button flex-1"
							style="border-radius: 50rpx; border: 1px solid #999 !important;"
							@tap="() => {
								editCustom = false
							}">
							<view class="text-gray-500 gui-button-text font-sans font-semibold">取消</view>
						</button>
						<button type="default" class="gui-button gui-bg-red gui-noborder flex-1" style="border-radius: 50rpx;"
							@tap="setEditCustom">
							<view class="text-white font-sans font-semibold" @click="deleteCustom">删除</view>
						</button>
					</view>
					<view v-else class="flex flex-row justify-between items-center gap-x-5">
						<button type="default" :plain="true" class="gui-button flex-1" style="border-radius: 50rpx;"
							@tap="$go('/pages/search/search', 'navigateTo')">
							<view class="gui-primary-color gui-button-text font-sans font-semibold">+新增股票</view>
						</button>
						<button type="default" class="gui-button gui-bg-primary gui-noborder flex-1" style="border-radius: 50rpx;"
							@tap="setEditCustom">
							<view class="text-white font-sans font-semibold">編輯清單</view>
						</button>
					</view>

				</view>
			</transition>
		</template>

	</gui-page>
</template>

<script>
	import { mapStores, mapActions, mapState } from 'pinia'
	import graceJS from "@/Grace6/js/grace.js";
import { useAppStore } from '../../../store/app';
	export default {
		data() {
			return {
				navBars: [{
					id: 0,
					name: '自选'
				}, {
					id: 1,
					name: 'US'
				}, {
					id: 2,
					name: 'HKEX'
				}, {
					id: 3,
					name: 'BSE'
				}],
				currentIndex: 1,
				editCustom: false
			}
		},
		computed: {
			...mapState(useAppStore, {
				token: 'token'
			})
		},
		methods: {
			...mapActions(useAppStore, ['setToken']),
			setEditCustom() {
				this.editCustom = true
			},
			navchange: function(index) {
				console.log(index);
				this.currentIndex = index
			},
			deleteCustom () {
				graceJS.msg("删除成功")
			}
		},

		created() {
			console.log(this.$go)
		}
	}
</script>

<style scoped lang="scss">
	.menu-items {
		width: 100rpx;
		height: 100rpx;
		margin: 20rpx 0;
		border-radius: 100rpx;
	}

	.menu-icon {
		width: 100rpx;
		line-height: 40rpx;
		font-size: 36rpx;
	}

	.menu-text {
		width: 100rpx;
		line-height: 30rpx;
		font-size: 22rpx;
	}

	.footer {
		box-shadow: 0 -0.3125rem 0.4375rem rgba(128, 128, 128, .1);
	}

	.custom-stock {
		:deep(.gui-radio-lable.gui-flex1) {
			display: none;
		}
	}

	.custom-enter-active {
		animation: gui-bottom-in .6s;
	}

	.custom-leave-active {
		animation: gui-bottom-in .6s reverse;
	}
</style>