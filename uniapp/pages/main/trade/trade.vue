<template>
	<blank v-if="!token" />
	<gui-page v-else customHeader isSwitchPage :statusBarClass="['bg-white']"
		:class="[currentIndex === 3 ? 'resource' : '']">
		<template v-slot:gFixedTop>
			<view class="flex justify-center items-end bg-white h-[80rpx] font-sans">
				<gui-switch-navigation :items="navTabs" @change="navchange" textAlign="center" :activeFontWeight="500"
					:isCenter="true" activeDirection="center" :size="0" :margin="20" padding="30rpx" activeLineHeight="4rpx"
					:currentIndex="currentIndex"></gui-switch-navigation>
			</view>
		</template>

		<template class="emesh" v-slot:gBody>
			<view class="h-[80rpx]"></view>
			<view v-if="currentIndex !== 3">
				<view class="px-4 py-3 font-sans">
					<view class="p-4 bg-white rounded-lg flex flex-row flex-nowrap justify-between items-center">
						<view class="flex flex-col justify-between h-14">
							<view class="font-medium">預計總資產（USD）</view>
							<view class="font-medium text-[38rpx] font-mono">998.991</view>
						</view>
						<view class="flex flex-col justify-between items-end h-12">
							<view class="text-[20rpx]">每日 損益</view>
							<view class="text-[20rpx] mt-3 text-[#e60101] font-mono">-0.820</view>
						</view>
					</view>

					<view
						class="mt-3 p-4 bg-white rounded-lg flex flex-row flex-nowrap justify-between items-center text-[18rpx]">
						<view class="basis-1/3">
							<view class="flex flex-col justify-between items-start gap-y-3">
								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">股票總價值</view>
									<view class="font-mono">94.480</view>
								</view>

								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">現金餘額</view>
									<view class="font-mono">905.231</view>
								</view>
							</view>
						</view>
						<view class="basis-1/3">
							<view class="flex flex-col justify-between items-start gap-y-3">
								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">未實作 損益</view>
									<view class="font-mono">-0.200</view>
								</view>

								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">凍結資金</view>
									<view class="font-mono">0.000</view>
								</view>
							</view>
						</view>
						<view class="basis-1/3">
							<view class="flex flex-col justify-between items-start gap-y-3">
								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">歷史 損益</view>
									<view class="font-mono">0.000</view>
								</view>

								<view class="flex flex-col gap-y-2">
									<view class="text-[#999]">風險率</view>
									<view>0%</view>
								</view>
							</view>
						</view>
					</view>

					<view class="flex flex-row flex-nowrap my-5">
						<view class="basis-1/4 flex justify-center items-center flex-col" @click="open">
							<gui-image src="/static/img/deposit.png" :width="40" :height="50"></gui-image>
							<view class="text-[20rpx] mt-1">存款</view>
						</view>
						<view class="basis-1/4 flex justify-center items-center flex-col" @click="openDown">
							<gui-image src="/static/img/reflect.png" :width="40" :height="50"></gui-image>
							<view class="text-[20rpx] mt-1">提現</view>
						</view>
						<view class="basis-1/4 flex justify-center items-center flex-col"
							@click="$go('/pages/wallet/records/records', 'navigateTo')">
							<gui-image src="/static/img/cash.png" :width="40" :height="50"></gui-image>
							<view class="text-[20rpx] mt-1">現金流量</view>
						</view>
						<view class="basis-1/4 flex justify-center items-center flex-col"
							@click="$go('/pages/market/order/history', 'navigateTo')">
							<gui-image src="/static/img/history.png" :width="40" :height="50"></gui-image>
							<view class="text-[20rpx] mt-1">持倉歷史記錄</view>
						</view>
					</view>

					<view class="p-4 bg-white rounded-lg font-sans">
						<gui-switch-navigation :items="navSecondTabs" @change="navSecondChange" activeDirection="center"
							:margin="20" padding="0rpx" textAlign="center"></gui-switch-navigation>

						<view class="flex flex-row items-center justify-between text-[18rpx] text-[#999] mt-5">
							<view class="basis-2/6 overflow-hidden">
								符號/名稱
							</view>
							<view class="basis-1/6 text-center">側面</view>
							<view class="basis-1/4 text-right">提交/價格</view>
							<view class="basis-1/4 text-right">損益</view>
						</view>

						<view>
							<view class="flex flex-row items-center justify-between text-[18rpx] mt-3">
								<view class="basis-2/6 overflow-hidden flex flex-col gap-y-3">
									<view class="truncate font-semibold">3M Company Common Stock</view>
									<view class="flex flex-row gap-x-1">
										<view class="truncate font-semibold">MMM</view>
										<text class="gui-icons gui-block text-[20rpx] text-[#00c537]">&#xe654;</text>
									</view>
								</view>
								<view class="basis-1/6 text-center font-semibold">開多</view>
								<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
									<view class="font-mono font-semibold">1</view>
									<view class="font-mono font-semibold">94.580</view>
								</view>
								<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
									<view class="font-mono font-semibold text-[#00c537]">+0.460</view>
									<view class="font-mono font-semibold text-[#00c537]">+0.481%</view>
								</view>

							</view>
							<view class="flex flex-row text-center text-[#3395ff] text-xs mt-5 mb-5">
								<view class="basis-1/4">貿易</view>
								<view class="basis-1/4">關閉</view>
								<view class="basis-1/4">TP/SL</view>
								<view class="basis-1/4">行情</view>
							</view>
						</view>

						<view>
							<view class="flex flex-row items-center justify-between text-[18rpx] mt-3">
								<view class="basis-2/6 overflow-hidden flex flex-col gap-y-3">
									<view class="truncate font-semibold">3M Company Common Stock</view>
									<view class="flex flex-row gap-x-1">
										<view class="truncate font-semibold">MMM</view>
										<text class="gui-icons gui-block text-[20rpx] text-[#e60101]">&#xe603;</text>
									</view>
								</view>
								<view class="basis-1/6 text-center font-semibold">開多</view>
								<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
									<view class="font-mono font-semibold">1</view>
									<view class="font-mono font-semibold">94.580</view>
								</view>
								<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
									<view class="font-mono font-semibold text-[#]">-0.460</view>
									<view class="font-mono font-semibold text-[#e60101]">-0.481%</view>
								</view>

							</view>
							<view class="flex flex-row text-center text-[#3395ff] text-xs mt-5 mb-3">
								<view class="basis-1/4">貿易</view>
								<view class="basis-1/4">關閉</view>
								<view class="basis-1/4">TP/SL</view>
								<view class="basis-1/4">行情</view>
							</view>
						</view>
					</view>


				</view>

			</view>
			<view v-else>
				<view class="px-4 mt-4">
					<view
						class="w-full text-white font-semibold font-sans px-4 pt-5 text-xs box-border aspect-[1/0.43] bg-red-100 rounded-xl bg-cover bg-no-repeat bg-center flex flex-row flex-wrap"
						style="background-image: url('/static/img/trade_03.png');">
						<view class="basis-1/2">
							<view class="flex flex-col gap-y-2">
								<view>INR</view>
								<view>0</view>
							</view>
						</view>
						<view class="basis-1/2">
							<view class="flex flex-col gap-y-2">
								<view>HKD</view>
								<view>0</view>
							</view>
						</view>
						<view class="basis-1/2">
							<view class="flex flex-col gap-y-2">
								<view>AUD</view>
								<view>0</view>
							</view>
						</view>
						<view class="basis-1/2">
							<view class="flex flex-col gap-y-2">
								<view>USD</view>
								<view>0</view>
							</view>
						</view>
					</view>
				</view>

				<view class="px-4 my-4">
					<view class="text-sm font-sans font-semibold">資金轉帳:</view>

					<view class="bg-[#F9F9F9] flex flex-row justify-between items-center px-3 py-3 rounded-full mt-4">
						<view class="flex flex-row rounded-full bg-[#f5f5f5] px-3 py-2 gap-3 items-center" @click="openResource">
							<image src="/static/country/BSE.png" class="w-[50rpx] h-[50rpx] rounded-full" mode=""></image>
							<view class="text-[#3395ff]">INR</view>
							<text class="gui-icons gui-block gui-color-gray gui-text">&#xe603;</text>
						</view>

						<view class="flex flex-col items-end justify-between gap-y-1 pr-3">
							<view class="text-xs text-gray-500">帳戶:0</view>
							<view class="text-sm">0</view>
						</view>
					</view>
					<view class="flex justify-center items-center py-6">
						<image src="/static/country/transform02.png" class="w-[60rpx] h-[60rpx]"></image>
					</view>
					<view class="bg-[#F9F9F9] flex flex-row justify-between items-center px-3 py-3 rounded-full">
						<view class="flex flex-row rounded-full bg-[#f5f5f5] px-3 py-2 gap-3 items-center" @click="openResource">
							<image src="/static/country/HKEX.png" class="w-[50rpx] h-[50rpx] rounded-full" mode=""></image>
							<view class="text-[#3395ff]">HKD</view>
							<text class="gui-icons gui-block gui-color-gray gui-text">&#xe603;</text>
						</view>

						<view class="flex flex-col items-end justify-between gap-y-1 pr-3">
							<view class="text-xs text-gray-500">帳戶:0</view>
							<view class="text-sm">0</view>
						</view>
					</view>

					<view class="flex flex-row justify-between items-center mt-5 font-sans">
						<view class="text-xs">匯率</view>
						<view class="flex flex-row items-center gap-x-3 font-mono text-xs">
							<view>
								0 INR
							</view>
							<image src="/static/country/transform_mini02.png" class="w-[24rpx] h-[24rpx]"></image>
							<view>
								0 HKD
							</view>
						</view>
					</view>

					<view class="h-[220rpx] bg-white footer flex flex-col justify-center mt-14 ">
						<view class="flex flex-col justify-between items-center gap-3">
							<view class="text-xs text-[#3395ff]" @click="$go('/pages/wallet/fundRecords/fundRecords', 'navigateTo')">
								轉帳記錄</view>
							<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl">
								<text class="gui-color-white gui-button-text font-semibold font-sans">確認</text>
							</button>
						</view>
					</view>

					<gui-popup ref="resource" position="bottom">
						<view class="bg-white rounded-t-lg h-[780rpx]">
							<view class="px-4 pt-3">
								<view class="flex flex-row justify-between items-center">
									<view class="font-semibold text-sm" @tap="">取消</view>
									<view class="font-semibold text-sm text-[#3395FF]">確認</view>
								</view>
							</view>
							<!-- iphone 底部适配 -->
							<gui-iphone-bottom :customClass="['gui-bg-white', 'gui-dark-bg-level-3']"></gui-iphone-bottom>
						</view>
					</gui-popup>
				</view>
			</view>
			<gui-popup ref="guipopup">
				<view class="gui-relative gui-box-shadow">
					<view class="bg-white rounded-xl px-4 py-5 flex flex-col gap-y-3 font-sans">
						<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
							@tap="() => { close(); $go('/pages/recharge/card/card', 'navigateTo') }">
							<view class="flex flex-row items-center justify-start gap-x-2">
								<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
								<view class="text-[#333] text-[24rpx]">銀行卡儲值</view>
							</view>
							<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
						</view>

						<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
							@tap="() => { close(); $go('/pages/recharge/usdt/usdt', 'navigateTo') }">
							<view class="flex flex-row items-center justify-start gap-x-2">
								<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
								<view class="text-[#333] text-[24rpx]">USDT儲值</view>
							</view>
							<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
						</view>
					</view>
					<!-- 关闭按钮 -->
					<text class="gui-block demo-close gui-icons gui-color-white gui-absolute-rt" @tap.stop="close">&#xe78a;</text>
				</view>
			</gui-popup>

			<gui-popup ref="guipopupDown">
				<view class="gui-relative gui-box-shadow">
					<view class="bg-white rounded-xl px-4 py-5 flex flex-col gap-y-3 font-sans">
						<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
							@tap="() => { closeDown(); $go('/pages/recharge/card/withdraw', 'navigateTo') }">
							<view class="flex flex-row items-center justify-start gap-x-2">
								<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
								<view class="text-[#333] text-[24rpx]">銀行卡提現</view>
							</view>
							<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
						</view>

						<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
							@tap="() => { closeDown(); $go('/pages/recharge/usdt/withdraw', 'navigateTo') }">
							<view class="flex flex-row items-center justify-start gap-x-2">
								<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
								<view class="text-[#333] text-[24rpx]">USDT提現</view>
							</view>
							<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
						</view>
					</view>
					<!-- 关闭按钮 -->
					<text class="gui-block demo-close gui-icons gui-color-white gui-absolute-rt" @tap.stop="close">&#xe78a;</text>
				</view>
			</gui-popup>
		</template>
	</gui-page>

</template>

<script>
	import { mapActions, mapState } from 'pinia'
	import Blank from './blank.vue'
	import { useAppStore } from '@/store/app'
	
	export default {
		data() {
			return {
				currentIndex: 0,
				login: true,
				navTabs: [{
					id: 0,
					name: 'US'
				}, {
					id: 1,
					name: 'HKEX'
				}, {
					id: 2,
					name: 'BSE'
				}, {
					id: 3,
					name: '资金'
				}],
				navSecondTabs: [{
					id: 0,
					name: '我的持股'
				}, {
					id: 1,
					name: '訂單'
				}]
			}
		},
		components: {
			Blank
		},
		computed: {
			 ...mapState(useAppStore, {
				 token: 'token'
			 })
		},
		methods: {
			...mapActions(useAppStore, ['setToken']),
			navchange: function(index) {
				console.log(index);
				this.currentIndex = index
			},
			navSecondChange: function(index) {

			},
			open: function() {
				this.$refs.guipopup.open();
			},
			close: function() {
				this.$refs.guipopup.close();
			},
			openDown: function() {
				this.$refs.guipopupDown.open();
			},
			closeDown: function() {
				this.$refs.guipopupDown.close();
			},
			openResource: function() {
				this.$refs.resource.open();
			},
			closeResource: function() {
				this.$refs.resource.close();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.trade_bg {
		background-image: url('/static/img/trade.png');
		background-position: 0% 0%;
		background-size: 100% 100%;
	}

	.resource {
		:deep(#guiPageBody) {
			flex: 1;
			background-color: #fff;
		}
	}
</style>