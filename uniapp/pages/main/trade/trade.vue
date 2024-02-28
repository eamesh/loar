<template>
	<gui-page customHeader fullPage isSwitchPage :statusBarClass="[token ? 'bg-white' : '']"
		:class="[currentIndex === 2 ? 'resource' : '']" :isHeaderSized="!!token">
		<template v-slot:gFixedTop>
			<view class="flex justify-center items-end bg-white h-[80rpx] " v-if="token">
				<gui-switch-navigation :items="navTabs" @change="navchange" textAlign="center" :activeFontWeight="500"
					:isCenter="true" activeDirection="center" :size="0" :margin="20" padding="30rpx" activeLineHeight="4rpx"
					:currentIndex="currentIndex"></gui-switch-navigation>
			</view>
		</template>

		<template class="emesh" v-slot:gBody>
			<blank v-if="!token" />
			<view v-else>
				<view class="h-[80rpx]"></view>
				<view v-if="!isFunds">
					<view class="px-4 py-3 ">
						<view class="p-4 bg-white rounded-lg flex flex-row flex-nowrap justify-between items-center">
							<view class="flex flex-col justify-between h-14">
								<view class="font-medium">{{ $t('est.total.assets') }}（{{current.currency}}）</view>
								<view class="font-medium text-[38rpx] font-mono">{{ totalPrice }}</view>
							</view>
							<view class="flex flex-col justify-between items-end h-12 text-xs">
						<!-- 		<view>{{ $t('daily.pl') }}</view>
								<view class="mt-3 text-[#e60101] font-mono">-0.820</view> -->
								<image src="/static/img/card.png" class="w-[80rpx] h-[80rpx]"></image>
							</view>
						</view>
				
						<view
							class="mt-3 p-4 bg-white rounded-lg flex flex-row flex-nowrap justify-between items-center text-[22rpx]">
							<view class="basis-1/3">
								<view class="flex flex-col justify-between items-start gap-y-3">
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('total.stocks.value') }}</view>
										<view class="font-mono">{{ totalStockPrice }}</view>
									</view>
				
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('cash.balance') }}</view>
										<view class="font-mono">{{ profileBalance.balance }}</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3">
								<view class="flex flex-col justify-between items-start gap-y-3">
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('unrealized.pl') }}</view>
										<view class="font-mono">{{ unPl }}</view>
									</view>
				
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('froze.funds') }}</view>
										<view class="font-mono">{{ profileBalance.unBalance }}</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3">
								<view class="flex flex-col justify-between items-start gap-y-3">
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('historical.pl') }}</view>
										<view class="font-mono">0.000</view>
									</view>
				
									<view class="flex flex-col gap-y-2">
										<view class="text-[#999]">{{ $t('risk.rate') }}</view>
										<view class="font-mono">0.000%</view>
									</view>
								</view>
							</view>
						</view>
				
						<view class="flex flex-row flex-nowrap my-5">
							<view class="basis-1/3 flex justify-center items-center flex-col" @click="open">
								<gui-image src="/static/img/deposit.png" :width="40" :height="50"></gui-image>
								<view class="text-[20rpx] mt-1">{{ $t('deposit') }}</view>
							</view>
							<view class="basis-1/3 flex justify-center items-center flex-col" @click="openDown">
								<gui-image src="/static/img/reflect.png" :width="40" :height="50"></gui-image>
								<view class="text-[20rpx] mt-1">{{ $t('withdraw') }}</view>
							</view>
						<!-- 	<view class="basis-1/3 flex justify-center items-center flex-col"
								@click="$go('/pages/wallet/records/records', 'navigateTo')">
								<gui-image src="/static/img/cash.png" :width="40" :height="50"></gui-image>
								<view class="text-[20rpx] mt-1">{{ $t('cash.flow') }}</view>
							</view> -->
							<view class="basis-1/3 flex justify-center items-center flex-col"
								@click="$go(`/pages/market/order/history?market=${current.code}`, 'navigateTo')">
								<gui-image src="/static/img/history.png" :width="40" :height="50"></gui-image>
								<view class="text-[20rpx] mt-1">{{ $t('position.history') }}</view>
							</view>
						</view>
				
						<view class="p-4 bg-white rounded-lg ">
							<view class="flex flex-row items-center">
								<gui-switch-navigation width="160" :items="navSecondTabs" @change="navSecondChange" :size="0" activeDirection="center"
									:margin="20" padding="0rpx" textAlign="center"></gui-switch-navigation>
									<view class="pb-1 text-sm" @click="$go(`/pages/stock/order/order?market=${current.code}`, 'navigateTo')">
										{{$t("orders")}}
									</view>
							</view>
				
							<view class="flex flex-row items-center justify-between text-[20rpx] text-[#999] mt-5">
								<view class="basis-2/6 overflow-hidden">
									{{ $t('table.symbol_name') }}
								</view>
								<view class="basis-1/6 text-center">{{ $t('table.side') }}</view>
								<view class="basis-1/4 text-right">{{ $t('table.submit_price') }}</view>
								<view class="basis-1/4 text-right">{{ $t('table.pl') }}</view>
							</view>
				
							<view v-for="(item,index) in positions" :key="item.id">
								<view class="flex flex-row items-center justify-between text-[18rpx] mt-3 text-xs">
									<view class="basis-2/6 overflow-hidden flex flex-col justify-center gap-y-3">
										<view class="truncate font-semibold">{{ item.stockSymbol.name }}</view>
										<view class="flex flex-row gap-x-1">
											<view class="truncate font-semibold">{{ item.stockSymbol.code }}</view>
											<text class="gui-icons gui-block text-[20rpx] text-[#00c537]" v-if="item.mode === 0">&#xe654;</text>
											<text class="gui-icons gui-block text-[20rpx] text-[#e60101]" v-else>&#xe603;</text>
										</view>
									</view>
									<view class="basis-1/6 text-center font-semibold">{{ item.mode === 0 ? $t('long') : $t('short') }}
									</view>
									<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
										<view class="font-mono font-semibold">{{ item.amount }}</view>
										<view class="font-mono font-semibold">{{ item.price }}</view>
									</view>
									<view class="basis-1/4 text-right flex flex-col items-end gap-y-3">
										<view class="font-mono font-semibold" :class="[item.pl >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
											{{ item.pl > 0 ? '+' : '' }}{{ item.pl }}</view>
										<view class="font-mono font-semibold" :class="[item.pl >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
											{{ item.pl > 0 ? '+' : '' }}{{ item.rate }}%</view>
									</view>
				
								</view>
								<view class="flex flex-row text-center text-[#3395ff] text-xs mt-5 mb-5">
									<!-- <view class="basis-1/3">{{ $t('trade') }}</view> -->
									<view class="basis-1/2" @click="positionOpen(item)">{{ $t('close') }}</view>
									<!-- <view class="basis-1/4">TP/SL</view> -->
									<view class="basis-1/2" @click="$go(`/pages/kline/kline?id=${item.stockSymbol.id}`)">{{ $t('quotes') }}</view>
								</view>
							</view>
							<view v-if="!positions.length" class="py-[40rpx]">
								<empty></empty>
							</view>
						</view>
				
						<gui-modal :customClass="['gui-bg-white', 'gui-dark-bg-level-3', 'gui-border-radius']" ref="positionModal"
							title="平仓">
							<!-- 利用 flex 布局 可以放置多个自定义按钮哦  -->
							<template v-slot:btns>
								<view class="gui-flex gui-row gui-space-between">
									<view hover-class="gui-tap" class="modal-btns gui-flex1" style="margin-right:80rpx;">
										<text class="modal-btns gui-color-gray" @tap="positionClose">取消</text>
									</view>
									<view hover-class="gui-tap" class="modal-btns gui-flex1" style="margin-left:80rpx;">
										<text class="modal-btns gui-primary-color" @tap="positionConfirm">确认</text>
									</view>
								</view>
							</template>
						</gui-modal>
				
				
					</view>
				
				</view>
				<Exchange v-else />
				<gui-popup ref="guipopup">
					<view class="gui-relative gui-box-shadow">
						<view class="bg-white rounded-xl px-4 py-5 flex flex-col gap-y-3 ">
							<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
								@tap="openCardWithdraw">
								<view class="flex flex-row items-center justify-start gap-x-2">
									<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
									<view class="text-[#333] text-[24rpx]">{{ $t('wise.deposit') }}</view>
								</view>
								<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
							</view>
				
							<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
								@tap="() => { close(); $go(`/pages/recharge/usdt/usdt?market=${current.code}`, 'navigateTo') }">
								<view class="flex flex-row items-center justify-start gap-x-2">
									<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
									<view class="text-[#333] text-[24rpx]">{{ $t('usdt.deposit') }}</view>
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
						<view class="bg-white rounded-xl px-4 py-5 flex flex-col gap-y-3 ">
							<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
								@tap="() => { closeDown(); $go(`/pages/recharge/card/withdraw?market=${current.code}`, 'navigateTo') }">
								<view class="flex flex-row items-center justify-start gap-x-2">
									<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
									<view class="text-[#333] text-[24rpx]">{{ $t('wise.withdraw') }}</view>
								</view>
								<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
							</view>
				
							<view class="flex flex-row justify-between items-center bg-[#F9F9F9] rounded p-2"
								@tap="() => { closeDown(); $go(`/pages/recharge/usdt/withdraw?market=${current.code}`, 'navigateTo') }">
								<view class="flex flex-row items-center justify-start gap-x-2">
									<gui-image src="/static/img/card.png" :width="44" :height="46"></gui-image>
									<view class="text-[#333] text-[24rpx]">{{ $t('usdt.withdraw') }}</view>
								</view>
								<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
							</view>
						</view>
						<!-- 关闭按钮 -->
						<text class="gui-block demo-close gui-icons gui-color-white gui-absolute-rt" @tap.stop="close">&#xe78a;</text>
					</view>
				</gui-popup>
			</view>
		</template>
	</gui-page>

</template>

<script>
	import {
		mapActions,
		mapState
	} from 'pinia'
	import Blank from './blank.vue'
	import {
		useAppStore
	} from '@/store/app'
	import {
		getAccountList,
		getPositions,
		positionSell
	} from '@/api/trade.js'
	import { getProfile } from '@/api/member.js'
	import { getSettingBykey } from '@/api/setting.js'
	import Exchange from './exchange.vue'
	export default {
		data() {
			return {
				currentIndex: 0,
				login: true,
				account: {},
				positions: [],
				closeItem: {},
				tmpPostions: {},
				profile: {
					balance: 0,
					unBalance: 0,
					lockBalance: 0
				},
				settings: {},
				accountBalance: {}
			}
		},
		components: {
			Blank,
			Exchange
		},
		computed: {
			...mapState(useAppStore, {
				token: 'token',
				markets: 'markets',
				member: 'member'
			}),
			current() {
				return this.navTabs.find((_, idx) => idx === this.currentIndex)
			},
			userBalance() {
				if (this.accountBalance[this.current.code]) {
					return this.accountBalance[this.current.code]
				}
				return {
					balance: 0,
					unBalance: 0
				}
			},
			unPl() {
				if (!this.positions.length) return 0;
				let sum = 0;

				this.positions?.map((p) => {
					sum += +p.pl
				})

				return sum.toFixed(3)
			},
			totalStockPrice() {
				if (!this.positions.length) return 0;
				let sum = 0;

				this.positions?.map((p) => {
					sum += +p.stockSymbol.newPrice * +p.amount
				})
				
				return sum.toFixed(3)
			},
			totalPrice() {
				let sum = this.totalStockPrice
				console.log(this.profileBalance.balance)
				sum = parseFloat(sum) + parseFloat(this.profileBalance.balance)
				return sum.toFixed(4)
			},
			profileBalance() {
				const { balance, unBalance } = this.userBalance
				let balanceConvert = balance
				let unBalanceConvert = unBalance
				// console.log(this.settings)
				// if (this.current.code !== 'US') {
				// 	const rate = this.settings[this.current.code]
				// 	balanceConvert = (parseFloat(balanceConvert) / parseFloat(rate)).toFixed(3)
				// 	unBalanceConvert = (parseFloat(unBalanceConvert) / parseFloat(rate)).toFixed(3)
				// }
				return {
					balance: balanceConvert,
					unBalance: unBalanceConvert
				}
			},
			market() {
				const market = this.navTabs.find((_, idx) => idx === this.currentIndex)
				return market
			},
			isFunds() {
				// return false
				const current = this.navTabs.find((_, index) => this.currentIndex === index)

				return current.key === 'funds';
			},
			navTabs() {
				const data = this.markets.map(item => {
					return {
						...item,
						name: item.code
					}
				})

				data.push({
					key: 'funds',
					name: this.$t('funds')
				})

				// this.requestAccountList(this.markets[0].code)
				return data
			},
			navSecondTabs() {
				return [{
					id: 0,
					name: this.$t("my.holdings")
				}, 
				// {
				// 	id: 1,
				// 	name: this.$t("orders")
				// },
				]
			},
		},
		watch: {
			currentIndex() {
				console.log(1122)
				this.requestAccountList(this.market.code)
				this.getProfile()
			},
			positions() {
				console.log('watch po')
				this.handleUnSubPostions()
				this.handleSubPostions()
			}
		},
		methods: {
			...mapActions(useAppStore, ['setToken']),
			openCardWithdraw() {
				this.close(); 
				uni.showToast({
					title: '请联系VIP客服',
					icon: 'none'
				})
			},
			navchange: function(index) {
				console.log(index);
				this.currentIndex = index
			},
			navSecondChange: function(index) {
			},
			positionOpen: function(item) {
				this.closeItem = item
				this.$refs.positionModal.open();
			},
			positionClose: function() {
				this.closeItem = {}
				this.$refs.positionModal.close();
			},
			positionConfirm: async function() {
				console.log(this.closeItem)
				await this.requestSell()
				// 客户点击确认按钮后的逻辑请在此处实现
				this.$refs.positionModal.close();
			},
			open: function() {
				// console.log(this.current)
				// if (this.current.code !== 'US') {
				// 	this.$go(`/pages/recharge/card/card?market=${this.current.code}`)
				// 	return
				// }
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

			handleSubPostions() {
				const memberId = uni.getStorageSync('member_id')
				this.positions.length && this.positions.forEach(item => {
					this.tmpPostions[item.id] = item
					uni.$ws.ws.emit('sub', `ws.position.${item.market}.${item.stockSymbol.code}.${memberId}.${item.id}`)
				})
			},
			handleUnSubPostions() {
				// 缓存不为空 先退订
				console.log(this.tmpPostions)
				const memberId = uni.getStorageSync('member_id')
				Object.keys(this.tmpPostions).length && Object.keys(this.tmpPostions).forEach(key => {
					const item = this.tmpPostions[key]
					uni.$ws.ws.emit('unsub', `ws.position.${item.market}.${item.stockSymbol.code}.${memberId}.${item.id}`)
					delete this.tmpPostions[key]
				})
			},

			async requestSell() {
				try {
					await positionSell(this.closeItem.id)
					await this.init()
				} catch (e) {
					uni.showToast({
						title: 'error',
						icon: "none"
					})
				}
			},

			async requestAccountList(market) {
				if (!market) return
				try {
					const result = await getAccountList(market)
					const positions = await getPositions(market)
					this.account = result
					this.positions = positions
				} catch (e) {
					console.log(e)
				}
			},
			async getProfile() {
				try{
					const member = await getProfile()
					const accountBalance = member.accountBalance
					this.accountBalance = accountBalance
					this.profile.balance = member.balance
					this.profile.unBalance = member.unBalance
					this.profile.lockBalance = member.lockBalance
				}catch(e){
					console.log(e)
					//TODO handle the exception
				}
			},
			
			async getSettingBykey() {
				try{
					const result = await getSettingBykey('exchange_rate');
					console.log(result)
					this.settings = result.value
				}catch(e){
					//TODO handle the exception
					console.log(e)
				}
			},
			
			async init() {
				this.requestAccountList(this.market.code)
				this.getProfile()
				this.getSettingBykey()
			}
		},
		onShow() {
			this.init()
		},
		
		onHide() {
			this.handleUnSubPostions()
		},

		created() {
			uni.$ws.messageCallback = ({
				data
			}) => {
				try {
					const key = data.id
					this.tmpPostions[key] = Object.assign(this.tmpPostions[key], data)
				} catch (e) {
					console.log(e)
					//TODO handle the exception
				}
			}

			window.tmp = this.tmpPostions
		},
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
<style>
	.modal-btns {
		line-height: 88rpx;
		font-size: 26rpx;
		text-align: center;
		width: 200rpx;
	}
/* 	
	:deep(#guiPageBody) {
		background-color: white;
	} */
</style>