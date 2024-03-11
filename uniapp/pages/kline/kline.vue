<template>
	<gui-page custom-footer>
		<template v-slot:gBody>
			<view class="flex flex-col justify-start items-start w-full px-4 py-4 gap-y-3 box-border">
				<view class="flex flex-row justify-between items-center w-full">
					<view class="text-md font-mono font-semibold">{{ stock.name }}</view>
					<image v-if="!favorite" src="/static/img/icon_01.png" class="w-6 h-6" @click="handleFavorite"/>
					<image v-else src="/static/img/icon_02.png" class="w-6 h-6" @click="handleFavorite"/>
				</view>
				<view class="flex flex-row justify-start items-center gap-x-2">
					<view class="bg-[#3395FF] text-white text-[10px] px-[6px] py-[2px] rounded-sm">{{ stock.marketResult?.code }}</view>
					<view class="text-[#999] text-[14px]">{{ stock.symbol }}</view>
				</view>
				<view class="flex flex-row justify-start items-center">
					<view class="text-md font-semibold font-mono" :class="[+(stock.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ stock.detail?.price }}</view>
				</view>
				<view class="flex flex-row justify-start items-center gap-x-3">
					<view class="text-[22rpx]" :class="[+(stock.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ parseFloat(stock.change) > 0 ? '+' : '' }}{{(+stock.change).toFixed(3)}}</view>
					<view class="text-[22rpx]" :class="[+(stock.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ parseFloat(stock.change) > 0 ? '+' : '' }}{{(+stock.changePercent).toFixed(3)}}%</view>
				</view>

				<view class="flex flex-row text-[12px] text-[#999] w-full mt-2">
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-start gap-y-3">
							<view>{{$t('kline.open')}} {{ (+stock.open).toFixed(3) }}</view>
							<view>{{$t('kline.close')}} {{ (+stock.close).toFixed(3) }}</view>
						</view>
					</view>
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-center gap-y-3">
							<view>{{ $t('kline.high') }} {{ (+stock.high).toFixed(3) }}</view>
							<view>{{ $t('kline.low') }} {{ (+stock.low).toFixed(3) }}</view>
						</view>
					</view>
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-end gap-y-3">
							<view>Vol {{ stock.volume }}</view>
							<view>T/O {{ stock.amount }}</view>
						</view>
					</view>

				</view>
			</view>
			<view :msg="stock" :change:msg="kline.handleLoad" type="default"></view>
			<view id="container" style="height: 800rpx"></view>
		</template>
		<template v-slot:gFooter>
			<view
				class="w-screen flex-shrink-0 bg-white flex justify-center items-center border-t h-[120rpx]"
				style="box-shadow: 0 -.3125rem .4375rem rgba(128,128,128,.1);"
			>			
				<uni-popup ref="popup" type="bottom" class="rounded-2xl" @change="handleChange">
					<view class="bg-white rounded-t-xl">
						<view class="flex flex-col px-4 pt-4 gap-y-4">
							<view>
								<view class="text-black text-[28rpx] font-semibold">Order Details</view>
								<view class=""></view>
							</view>
							<view class="flex flex-row justify-between item">
								<view class="text-gray-400">{{ $t('kline.stock') }}</view>
								<view class="">{{ stock.name }}</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.side') }}</view>
								<view class="flex flex-row gap-x-3">
									<view class="w-[120rpx] text-sm py-1 rounded text-center" :class="formData.mode === 0 ? 'bg-[#00c537] text-white' : 'bg-[#f9f9f9] text-[#999]'" @click="swithMode(0)">{{ $t('long') }}</view>
									<view class="w-[120rpx] text-sm py-1 rounded text-center" :class="formData.mode === 1 ? 'bg-[#e60101] text-white ' : 'bg-[#f9f9f9] text-[#999]'" @click="swithMode(1)">{{ $t('short') }}</view>
								</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.type') }}</view>
								<view class="flex flex-row gap-x-3">
									<view class="w-[120rpx] text-sm py-1 rounded text-center" :class="formData.type === 0 ? 'text-white bg-[#3395FF]' : 'text-[#999] bg-[#f9f9f9]'" @click="swithType(0)">{{ $t('market') }}</view>
									<view class="w-[120rpx] text-sm py-1 rounded text-center" :class="formData.type === 1 ? 'text-white bg-[#3395FF]' : 'text-[#999] bg-[#f9f9f9]'" @click="swithType(1)">{{ $t('limit') }}</view>
								</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.qty') }}</view>
								<view class="bg-gray-100 rounded-md">
									<input type="number" v-model="formData.amount" :placeholder="$t('kline.min_num')" class="gui-form-input" style="margin-top: 16rpx;margin-bottom: 16rpx; padding-left: 20rpx;padding-right: 20rpx;" name="amount" />
								</view>
							</view>
							<view class="flex flex-row justify-between items-center" v-if="formData.type === 1">
								<view class="text-gray-400">{{ $t('kline.order_price') }}</view>
								<view class="bg-gray-100 rounded-md">
									<input type="number" :placeholder="$t('kline.order_price')" v-model="formData.price" class="gui-form-input" style="margin-top: 16rpx;margin-bottom: 16rpx; padding-left: 20rpx;padding-right: 20rpx;" name="price" />
								</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.price') }}</view>
								<view class="">
									{{ priceComputed.price }}
								</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.fee') }}</view>
								<view class="">
									{{ priceComputed.fee }}
								</view>
							</view>
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.take_profit') }}</view>
								<view class="">
									<gui-step-box 
										:step="0.01"
										width="400rpx"
										:inputClass="['gui-step-box-input','gui-border-radius', 'gui-bg-gray', 'gui-dark-bg-level-2']" 
										:minNum="0"
										:value="formData.takeProfit" @change="changeTakeProfit"></gui-step-box>
								</view>
							</view>
							
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.stop_loss') }}</view>
								<view class="">
									<gui-step-box 
										:step="0.01"
										width="400rpx"
										:inputClass="['gui-step-box-input','gui-border-radius', 'gui-bg-gray', 'gui-dark-bg-level-2']" 
										:minNum="0"
										:value="formData.stopLoss" @change="changeStoploss"></gui-step-box>
								</view>
							</view>
							
							<view class="flex flex-row justify-between items-center">
								<view class="text-gray-400">{{ $t('kline.balance') }}</view>
								<view class="">
									{{balance}} {{ currency }}
								</view>
							</view>
							
							<view class="mt-4 pb-3">
								<button class="bg-[#00c537] gui-noborder w-full rounded-3xl" :class="formData.mode === 0 ? 'bg-[#00c537]' : 'bg-[#e60101]'" style="border-radius: 80rpx;" @tap="submit">
									<text class="gui-color-white gui-button-text">{{ $t('kline.buy_order') }}</text>
								</button>
							</view>
						</view>
						
						
					</view>
				</uni-popup>
				<view class="flex flex-row justify-between items-center gap-x-3 w-full px-4">
					<button class="gui-button gui-bg-green gui-button-mini gui-noborder w-full rounded-3xl" style="border-radius: 80rpx;" @tap="open(0)">
						<text class="gui-color-white gui-button-text-mini">{{ $t('long') }}</text>
					</button>
					<button class="gui-button gui-bg-red gui-button-mini gui-noborder w-full rounded-3xl" style="border-radius: 80rpx;" @tap="open(1)">
						<text class="gui-color-white gui-button-text-mini">{{ $t('short') }}</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { getStock, buy } from '@/api/stock.js'
	import { getProfile, checkFaovorite, requestFavorite } from '@/api/member.js'
	import './kline/klinecharts-pro.css'
	export default {
		data() {
			return {
				id: 0,
				default: 'default',
				favorite: false,
				stock: {},
				profile: {},
				feeRate: 0,
				formData: {
					price: 0,
					code: '',
					amount: '',
					market: '',
					mode: 0,
					type: 0,
					stopLoss: 0,
					takeProfit: 0
				}
			}
		},
		computed: {
			priceComputed() {
				const price = (+this.formData.amount * +this.formData.price).toFixed(3)
				const fee = (price * +this.feeRate || 0).toFixed(3)
				return {
					price: price,
					fee
				}
			},
			balance() {
				try{
					return this.profile.accountBalance[this.stock.marketResult.code].balance || 0;
				}catch(e){
					return 0
					//TODO handle the exception
				}
			},
			currency() {
				return this.stock.marketResult?.currency || ''
			}
		},
		methods: {
			handleChange(e) {
				if (e.show) return
				this.formData.amount = ''
				this.formData.stopLoss = 0
				this.formData.takeProfit = 0
				// this.formData.price = 0
				// this.formData = Object.assign({}, this.formData, {
				// 	price: 0,
				// 	code: '',
				// 	amount: '',
				// 	market: '',
				// 	mode: 0,
				// 	type: 0,
				// 	stopLoss: 0,
				// 	takeProfit: 0
				// })
			},
			swithMode(mode) {
				this.formData.mode = mode
			},
			swithType(type) {
				this.formData.type = type
			},
			handleData() {
				console.log(123)
			},
			
			changeStoploss (e) {
				console.log(e)
				this.formData.stopLoss = e[0]
			},
			
			changeTakeProfit (e) {
				console.log(e)
				this.formData.takeProfit = e[0]
			},
			
			async handleFavorite() {
				const status = this.favorite ? 0 : 1
				uni.showLoading({
					
				})
				try{
					await requestFavorite(this.id, {
						status
					})
					
					await this.checkFavorite()
					uni.hideLoading()
				}catch(e){
					//TODO handle the exception
					uni.hideLoading()
				}
			},
			
			async checkFavorite() {
				try{
					const result = await checkFaovorite(this.id)
					this.favorite = result
				}catch(e){
					//TODO handle the exception
				}
			},
			
			async getStock() {
				const result = await getStock(this.id)
				this.stock = result
				this.feeRate = result.marketResult?.feeRate || 0
				this.formData.price = result.detail?.price
				this.formData.market = result.market
				this.formData.code = result.id
				console.log(this.kline, result)
				// this.kline.handleLoad(result)
				
				uni.$ws.ws.emit('sub', `ws.market.${result.market}.${result.code}`)
			},
			
			async getProfile() {
				try{
					const profile = await getProfile()
					this.profile = profile
					
					await this.checkFavorite()
				}catch(e){
					//TODO handle the exception
				}
			},
			
			async submit() {
				if (!this.formData.amount || this.formData.amount < 1) {
						uni.showToast({
							title: this.$t('amount'),
							icon: 'none'
						})
						return
					}
				uni.showLoading({
					title: "Loading",
					mask: true
				})
				try{
					await buy(this.formData)
					uni.hideLoading()
					uni.showToast({
						title: "Success",
						icon: 'none'
					})
					setTimeout(() => {
						uni.navigateBack()
					}, 500)
				}catch(e){
					uni.hideLoading()
					console.log(e)
					if (e.data.message === 5001) {
						uni.showToast({
							title: this.$t('market.close'),
							icon: "none"
						})
					} else {
						uni.showToast({
							title: "Failed",
							icon: "none"
						})
					}
					
					//TODO handle the exception
				}
			},
			
			open (mode) {
				if (Object.keys(this.profile).length === 0) {
					this.$go('/pages/auth/signin/signin', 'navigateTo')
					return
				}
				this.formData.mode = mode
				this.$refs.popup.open('bottom')
			},
			handleChangeStock(stock) {
				// console.log('change', stock)
				// this.stock.open = stock.open
				// this.stock.detail.price = stock.close.toFixed(3)
				// this.stock.high = stock.high
				// this.stock.low = stock.low
				// this.stock.change = data.change
				// this.stock.changePercent = data.changePercent
			}
		},
		onLoad(e) {
			this.id = e.id
		},
		created() {
			uni.$ws.messageCallback = ({
				data
			}) => {
				try {
					if (typeof data !== 'object' && this.id !== data.id) return
					const sync = JSON.parse(data.sync)
					console.log(sync, data)
					this.stock.open = sync.open
					this.stock.detail.price = sync.newPrice.toFixed(3)
					this.stock.high = sync.high
					this.stock.low = sync.high
					this.stock.change = data.change
					this.stock.changePercent = data.changePercent
					// this.formData.price = sync.newPrice.toFixed(3)
				} catch (e) {
					//TODO handle the exception
				}
			}
		},
		onUnload() {
			uni.$ws.ws.emit('unsub', `ws.market.${this.stock.market}.${this.stock.code}`)
			console.log(1111,this.kline)
		},
		onShow() {
			this.getProfile()
			this.getStock()
		}
	}
</script>

<style lang="scss">
page {
	background-color: #fff;
}

#container {
	:deep(.klinecharts-pro-period-bar .item.period) {
		font-weight: 700;
	}
}

</style>

<script module="kline" lang="renderjs">
	// 引入js
	import { KLineChartPro, DefaultDatafeed } from './kline/klinecharts-pro.js'
	import { KlineDatafeed } from './kline-datafeed'
	
	export default {
		data() {
			return {
				render: 'render',
				datafeed: null
				
			}
		},
		methods: {
			handleData(e, instance) {
				console.log(e, instance)
				instance.callMethod('handleData')
			},
			
			changeSubscribe(data) {
				this.$ownerInstance.callMethod('handleChangeStock', data)
			},
			
			handleClear() {
				this.datafeed.clear()
			},
			
			handleLoad(stock) {
				if (Object.keys(stock).length === 0) return
				this.datafeed = new KlineDatafeed(this.changeSubscribe.bind(this))
				const chart = new KLineChartPro({
					container: document.getElementById('container'),
					// 初始化标的信息
					symbol: {
						name: stock.name,
						shortName: stock.symbol,
						ticker: stock.symbol,
						priceCurrency: stock.marketResult?.showName || stock.marketResult?.currency,
						id: stock.id
					},
					styles: {
						candle: {
							area: 0.5
						}
						
					},
					locale: 'en',
					watermark: '',
					// styles: 'candle_solid',
					drawingBarVisible: false,
					// 初始化周期
					period: { multiplier: 1, timespan: 'day', text: '1D' },
					periods: [
						{ multiplier: 1, timespan: 'minute', text: '1m' },
						{ multiplier: 5, timespan: 'minute', text: '5m' },
						{ multiplier: 30, timespan: 'minute', text: '30m' },
						{ multiplier: 1, timespan: 'day', text: '1D' },
						{ multiplier: 7, timespan: 'day', text: '1W' },
						{ multiplier: 30, timespan: 'day', text: '1M' },
						// { multiplier: 60, timespan: 'minute', text: '1H' },
						// { multiplier: 120, timespan: 'minute', text: '2H' },
					],
					mainIndicators: [],
					// subIndicators: [],
					// 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
					datafeed: this.datafeed
				})
			}
		},
		mounted() {
			
			
		},
		onUnload() {
			this.handleClear()
		}
	}
</script>