<template>
	<gui-page custom-footer>
		<template v-slot:gBody>
			<view class="flex flex-col justify-start items-start w-full px-4 py-4 gap-y-3 box-border">
				<view class="flex flex-row justify-between items-center w-full">
					<view class="text-md font-mono">{{ stock.name }}</view>
					<image src="/static/img/icon_01.png" class="w-6 h-6" />
				</view>
				<view class="flex flex-row justify-start items-center gap-x-2">
					<view class="bg-[#3395FF] text-white text-[10px] px-[6px] py-[2px] rounded-sm">{{ stock.marketResult?.code }}</view>
					<view class="text-[#999] text-[14px]">{{ stock.symbol }}</view>
				</view>
				<view class="flex flex-row justify-start items-center">
					<view class="text-[#00c537] text-md font-semibold font-mono">{{ stock.detail?.price }}</view>
				</view>
				<view class="flex flex-row justify-start items-center gap-x-3">
					<view class="text-[#00c537]">{{ parseFloat(stock.detail?.chg) > 0 ? '+' : '' }}{{stock.detail?.chg}}</view>
					<view class="text-[#e60101]">{{ parseFloat(stock.detail?.chg) > 0 ? '+' : '' }}{{stock.detail?.chgV}}%</view>
				</view>

				<view class="flex flex-row text-[12px] text-[#999] w-full mt-2">
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-start gap-y-3">
							<view>{{$t('kline.open')}} 1111</view>
							<view>{{$t('kline.close')}} 2222</view>
						</view>
					</view>
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-center gap-y-3">
							<view>{{ $t('kline.high') }} 22</view>
							<view>{{ $t('kline.low') }} 33</view>
						</view>
					</view>
					<view class="basis-1/3">
						<view class="flex flex-col justify-between items-end gap-y-3">
							<view>Vol 11</view>
							<view>T/O 22</view>
						</view>
					</view>

				</view>
			</view>
			<view id="container"></view>
		</template>
		<template v-slot:gFooter>
			<view
				class="w-screen flex-shrink-0 bg-white flex justify-center items-center border-t h-[120rpx]"
				style="box-shadow: 0 -.3125rem .4375rem rgba(128,128,128,.1);"
			>			
				<uni-popup ref="popup" type="bottom" class="rounded-2xl">
					<view class="h-[100rpx] bg-white rounded-t-xl"></view>
				</uni-popup>
				<view class="flex flex-row justify-between items-center gap-x-3 w-full px-4">
					<button class="gui-button gui-bg-green gui-button-mini gui-noborder w-full rounded-3xl" style="border-radius: 80rpx;" @tap="open">
						<text class="gui-color-white gui-button-text-mini">{{ $t('long') }}</text>
					</button>
					<button class="gui-button gui-bg-red gui-button-mini gui-noborder w-full rounded-3xl" style="border-radius: 80rpx;" @tap="open">
						<text class="gui-color-white gui-button-text-mini">{{ $t('short') }}</text>
					</button>
				</view>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { getStock } from '@/api/stock.js'
	import './kline/klinecharts-pro.css'
	export default {
		data() {
			return {
				id: 0,
				default: 'default',
				stock: {}
			}
		},
		methods: {
			handleData() {
				console.log(123)
			},
			
			async getStock() {
				const result = await getStock(this.id)
				this.stock = result
				console.log(this.renderScript, result)
				this.renderScript.handleLoad(result)
			},
			
			open () {
				this.$refs.popup.open('bottom')
			}
		},
		onLoad(e) {
			this.id = e.id
		},
		onShow() {
			this.getStock()
		}
	}
</script>

<style lang="scss">

</style>

<script module="renderScript" lang="renderjs">
	// 引入js
	import { KLineChartPro, DefaultDatafeed } from './kline/klinecharts-pro.js'
	import { KlineDatafeed } from './kline-datafeed'
	
	export default {
		data() {
			return {
				render: 'render'
			}
		},
		methods: {
			handleData(e, instance) {
				console.log(e, instance)
				instance.callMethod('handleData')
			},
			
			handleLoad(stock) {
				new KLineChartPro({
					container: document.getElementById('container'),
					// 初始化标的信息
					symbol: {
						name: stock.name,
						shortName: stock.symbol,
						ticker: stock.symbol,
						priceCurrency: stock.marketResult.currency,
						id: stock.id
					},
					locale: 'en',
					watermark: '',
					// styles: 'candle_solid',
					drawingBarVisible: false,
					// 初始化周期
					period: { multiplier: 'day', timespan: 'day', text: 'D' },
					periods: [
						{ multiplier: 1, timespan: 'minute', text: '1m' },
						{ multiplier: 5, timespan: 'minute', text: '5m' },
						{ multiplier: 15, timespan: 'minute', text: '15m' },
						{ multiplier: 60, timespan: 'minute', text: '1H' },
						{ multiplier: 120, timespan: 'minute', text: '2H' },
						{ multiplier: 'day', timespan: 'day', text: 'D' }
					],
					mainIndicators: [],
					subIndicators: [],
					// 这里使用默认的数据接入，如果实际使用中也使用默认数据，需要去 https://polygon.io/ 申请 API key
					datafeed: new KlineDatafeed()
				})
			}
		},
		mounted() {
			
			
		}
	}
</script>