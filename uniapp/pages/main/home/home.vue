<template>
	<gui-page customHeader isSwitchPage :statusBarClass="['bg-white']" :apiLoadingStatus="apiLoadingStatus" 
	:loadmore="true" 
	@loadmorefun="indexStocks" 
	:loadMoreText="loadTexts"
	ref="guipage">
		<template v-slot:gFixedTop>
			<view class="flex justify-center items-end bg-white h-[80rpx]  relative">
				<gui-switch-navigation :items="navBars" :currentIndex="currentIndex" @change="navchange" textAlign="center"
					:isCenter="true" activeDirection="center" :size="0" :margin="20" padding="30rpx"
					activeLineHeight="4rpx"></gui-switch-navigation>
				
				<view class="h-full flex justify-center items-center absolute" style="right: 40rpx" @click="$go('/pages/search/search', 'navigateTo')">
					<text class="gui-icons gui-block gui-color-gray gui-text">&#xe604;</text>
				</view>
			</view>
		</template>

		<template v-slot:gBody>
			<!-- <view class="h-[80rpx]"></view> -->
			<view v-if="currentIndex !== 0">
				<view class="flex justify-between items-center pt-4 px-4 gap-3 ">
					<template v-for="(item,index) in indexData.hot" :key="index">
						<view @click="$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')"
							class="flex-1 flex-shrink-0 aspect-square bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
							<view class="truncate w-full text-center">{{ item.name || item.showName }}</view>
							<view class="truncate w-full text-center font-mono"
								:class="[+(item.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								{{ parseFloat(item.newPrice).toFixed(3) }}
							</view>
							<view class="w-full flex flex-row justify-between items-center text-[#00c537] font-mono"
								:class="[+(item.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								<view class="text-[18rpx]">
									{{ +(item.change) > 0 ? '+' : '' }}{{ parseFloat(item.change).toFixed(3) }}
								</view>
								<view class="text-[18rpx]">
									{{ +(item.change) > 0 ? '+' : '' }}{{ parseFloat(item.changePercent || 0).toFixed(3) }}%
								</view>
							</view>
						</view>
					</template>
				</view>
				<view class="mt-3 px-4 text-base ">{{ $t("index.market_overview") }}</view>
				<view class="flex justify-between items-center pt-3 px-4 gap-3 ">
					<template v-for="(item,index) in rank" :key="index">
						<view @click="$go(`/pages/rank/rank?type=${item.key}`, 'navigateTo')"
							class="flex-1 flex-shrink-0 aspect-[3/3.5] bg-white rounded-md flex flex-col justify-between items-center px-3 py-4 box-border overflow-hidden">
							<view class="truncate w-full text-center">{{ $t(`rank.${item.key}`) }}</view>
							<view class="truncate w-full text-center font-mono"
								:class="[+(item.data.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								{{ parseFloat(item.data.newPrice).toFixed(3) }}
							</view>
							<view class="truncate w-full text-[#999] text-xs text-center">{{ item.data.name }}</view>
							<view class="w-full flex flex-row justify-between items-center font-mono"
								:class="[+(item.data.change) > 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								<view class="text-[18rpx]">
									{{ +(item.data.change) > 0 ? '+' : '' }}{{ parseFloat(item.data.change).toFixed(3) }}
								</view>
								<view class="text-[18rpx]">
									{{ +(item.data.change) > 0 ? '+' : '' }}{{ parseFloat(item.data.changePercent || 0).toFixed(3) }}%
								</view>
							</view>
						</view>
					</template>
				</view>
				<view class="mt-3 px-4 text-base ">{{ $t("index.all_stocks") }}</view>
				<view class="px-4 py-3 ">
					<view class="bg-white rounded-md px-3 py-4">
						<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
							<view class="basis-1/2">{{ $t("table.symbol_name") }}</view>
							<view class="basis-1/3 text-right">{{ $t("table.price") }}</view>
							<view class="basis-1/3 text-right">{{ $t("table.chg") }}</view>
						</view>

						<view v-for="(item,index) in stocks" :key="item.id"
							class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
							@click="$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')">
							<view class="basis-1/2 overflow-hidden">
								<view class="flex flex-col">
									<view class="truncate text-[22rpx]">{{ item.name }}</view>
									<view class="flex flex-row items-center gap-x-1 mt-2">
										<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">
											{{ item.market }}</view>
										<view class="text-[#999] text-[20rpx]">{{ item.code }}</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3 text-right text-xs font-mono"
								:class="[+(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ (+item.newPrice)?.toFixed(3) }}
							</view>
							<view class="basis-1/3 text-right text-xs font-mono"
								:class="[+(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								{{ +(item.change) >= 0 ? '+' : '' }}{{ item.changePercent }}%</view>
						</view>

					</view>
				</view>

			</view>

			<view v-else>
				<view class="px-4 pt-4 font-semibold ">{{ $t("index.all_stocks") }}</view>
				<view class="px-4 py-3">
					<view class="bg-white rounded-md px-3 py-4 custom-stock " v-if="favorite.length">
						<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
							<view class="basis-1/2">{{ $t("table.symbol_name") }}</view>
							<view class="basis-1/3 text-right">{{ $t("table.price") }}</view>
							<view class="basis-1/3 text-right">{{ $t("table.chg") }}</view>
						</view>

						<view v-for="(item,index) in favorite" :key="item.id"
							class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
							@click="handleClickCustom(item, index)">
							<view class="basis-1/2 overflow-hidden">
								<view class="flex flex-row items-center gap-x-2">
									<gui-radio v-if="editCustom" @change="(e) => changeCustom(e[0], index)" :checked="item.checked" />
									<view class="flex flex-col flex-1 overflow-hidden">
										<view class="truncate text-[22rpx]">
											{{ item.name }}
										</view>

										<view class="flex flex-row items-center gap-x-1 mt-2">
											<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">
												{{ `${item.market}`.toUpperCase() }}</view>
											<view class="text-[#999] text-[20rpx]">{{ item.code }}</view>
										</view>
									</view>
								</view>
							</view>
							<view class="basis-1/3 text-right text-xs font-mono"
								:class="[+(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">{{ (+item.newPrice)?.toFixed(3) }}
							</view>
							<view class="basis-1/3 text-right text-xs font-mono"
								:class="[+(item.change) >= 0 ? 'text-[#00c537]' : 'text-[#e60101]']">
								{{ +(item.change) >= 0 ? '+' : '' }}{{ item.changePercent }}</view>

						</view>

					</view>
					<view class="w-full h-[160rpx]"></view>
				</view>

				<!-- <transition name="custom"> -->
				<view class="h-[160rpx] bg-white fixed w-screen footer p-4 box-border"
					style="bottom: var(--window-bottom); left: 0;">
					<view v-if="editCustom" class="flex flex-row justify-between items-center gap-x-5">
						<button type="default" :plain="true" class="gui-button flex-1"
							style="border-radius: 50rpx; border: 1px solid #999 !important;" @tap="handleCancel">
							<view class="text-gray-500 gui-button-text  font-semibold">{{ $t('cancel') }}</view>
						</button>
						<button type="default" class="gui-button gui-bg-red gui-noborder flex-1" style="border-radius: 50rpx;"
							@tap="setEditCustom">
							<view class="text-white  font-semibold" @click="deleteCustom">{{ $t('delete') }}</view>
						</button>
					</view>
					<view v-else class="flex flex-row justify-between items-center gap-x-5">
						<button type="default" :plain="true" class="gui-button flex-1" style="border-radius: 50rpx;"
							@tap="$go('/pages/search/search', 'navigateTo')">
							<view class="gui-primary-color gui-button-text  font-semibold">+{{ $t('add_stock') }}</view>
						</button>
						<button type="default" class="gui-button gui-bg-primary gui-noborder flex-1" style="border-radius: 50rpx;"
							@tap="setEditCustom">
							<view class="text-white  font-semibold">{{ $t('edit_list') }}</view>
						</button>
					</view>

				</view>
				<!-- </transition> -->

				<view class="h-[70vh] flex justify-center items-center" v-if="!favorite.length">
					<empty />
				</view>

			</view>

		</template>

	</gui-page>
</template>

<script>
	import {
		mapStores,
		mapActions,
		mapState
	} from 'pinia'
	import graceJS from "@/Grace6/js/grace.js";
	import {
		useAppStore
	} from '../../../store/app';
	import {
		index
	} from '@/api/index.js'
	import {
		getStocks,
		getFavorite,
		deleteFavorite
	} from '@/api/stock.js'
let page = 1;
	export default {
		data() {
			return {

				editCustom: false,
				indexData: {
					hot: [],
					gainers: {},
					losers: {},
					turnover: {}
				},
				stocks: {
					data: [],
					meta: {}
				},
				favorite: [],
				tmpIndexData: {

				},
				tmpStocks: {},
				pageLoading      : true,
				// 用于记录是否有 api 请求正在执行
				apiLoadingStatus : false
			}
		},
		computed: {
			...mapState(useAppStore, {
				token: 'token',
				market: 'market',
				user: 'user',
				markets: 'markets',
				currentIndex: 'currentIndex'
			}),
			// type() {
			// 	return this.navBars.find(item => this.currentIndex === item.id).type
			// },

			loadTexts() {
				return ['',this.$t('loading'), this.$t('loading_success'), this.$t('empty')]
			},
			navBars() {
				const data = [{
					id: 0,
					name: this.$t("index.watchlist")
				}]
				this.markets?.forEach((item) => {
					data.push({
						name: item.code,
						...item
					})
				})
				console.log(1231, data)
				return data
			},

			rank() {
				const data = [{
						name: 'Gainers',
						key: 'gainers',
						data: this.indexData.gainers
					},
					{
						name: 'Losers',
						key: 'losers',
						data: this.indexData.losers
					},
					{
						name: 'Turnover',
						key: 'turnover',
						data: this.indexData.turnover
					}
				]

				return data
			}
		},

		watch: {
			market() {
				this.$refs.guipage.toTop();
				page = 1
				this.indexRequest()
				this.indexStocks()
			},

			currentIndex() {
				if (this.currentIndex === 0) {
					this.editCustom = false
					if (!this.token) {
						uni.navigateTo({
							url: '/pages/auth/signin/signin'
						})
					}
					this.indexFavorite()
					return
				}
				const market = this.navBars.find((_, idx) => idx === this.currentIndex)?.code
				console.log(this.currentIndex)
				this.setMarket(market)
			},

			indexData() {
				this.handleUnSubIndexData()

				this.handleSubIndexData()
			},
			// stocks() {
			// 	this.handleUnsubStocks()
			// 	this.handleSubStocks()
			// }
		},

		methods: {
			...mapActions(useAppStore, ['setMarket', 'getMarkets', 'setCurrent']),
			handleCancel() {
				this.editCustom = false
				this.favorite = this.favorite.map(item => {
					item.checked = false
					return item
				})
			},
			changeCustom(e, idx) {
				console.log(e, idx)
				this.favorite[idx].checked = false
			},
			handleClickCustom(item, index) {
				if (this.editCustom) {
					this.favorite[index].checked = !this.favorite[index].checked
				} else {
					this.$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')
				}
			},
			setEditCustom() {
				this.editCustom = true
			},
			navchange: function(index) {
				console.log(index);
				// this.currentIndex = index
				this.setCurrent(index)
			},
			async deleteCustom() {

				const ids = this.favorite.filter(item => item.checked).map(item => item.id)

				try {
					await deleteFavorite(ids)
					graceJS.msg("Success")
					this.indexFavorite()
				} catch (e) {
					//TODO handle the exception
					graceJS.msg("Fail")
				}
			},

			async indexFavorite() {
				try {
					const result = await getFavorite()
					console.log(result)
					this.favorite = result.map(item => {
						item.checked = false
						return item
					})
				} catch (e) {
					//TODO handle the exception
				}
			},

			async indexRequest() {
				try {
					const result = await index(this.market)
					console.log(result)

					this.indexData = {
						hot: result.hot.length ? result.hot.slice(0, 3) : [],
						gainers: result.gainers.length ? result.gainers[0] : {},
						losers: result.losers.length ? result.losers[0] : {},
						turnover: result.turnover.length ? result.turnover[0] : {},
					}

					console.log(this.indexData)
				} catch (e) {
					//TODO handle the exception
				}
			},

			async indexStocks() {
				try {
					console.log(123)
					const result = await getStocks(this.market, page);
					
					if (page >= 2) {
						this.stocks = this.stocks.concat(result.data)
						this.handleSubStocks(result.data)
						if(page >= result.lastPage){
							this.$refs.guipage.nomore();
						}
					} else {
						this.handleUnsubStocks()
						this.handleSubStocks(result.data)
						this.pageLoading = false;
						this.stocks = result.data
					}
					this.$refs.guipage.stopLoadmore();
					
					page++;
					this.apiLoadingStatus = false;
					console.log(result)
					
				} catch (e) {
					console.log(e)
					this.$refs.guipage.stopLoadmore();
					//TODO handle the exception
				}
			},

			setCurrentIndex() {
				if (this.currentIndex !== 0 && this.market !== this.currentIndex) {
					this.currentIndex = this.navBars.find(item => item.market === this.market)?.id;
				}
			},

			handleSubIndexData() {
				Object.keys(this.indexData).forEach(key => {
					console.log(key, this.indexData)
					if (Array.isArray(this.indexData[key])) {
						this.indexData[key].length && this.indexData[key]?.forEach(item => {
							this.tmpIndexData[item.code] = item
							uni.$ws.ws.emit('sub', `ws.market.${this.market}.${item.code}`)
						})
					} else {
						const item = this.indexData[key]
						this.tmpIndexData[item.code] = this.indexData[key]
						uni.$ws.ws.emit('sub', `ws.market.${this.market}.${item.code}`)
					}
				})
			},

			handleUnSubIndexData() {
				// 缓存不为空 先退订
				Object.keys(this.tmpIndexData).length && Object.keys(this.tmpIndexData).forEach(key => {
					const current = this.tmpIndexData[key]
					uni.$ws.ws.emit('unsub', `ws.market.${current.market}.${key}`)
					delete this.tmpIndexData[key]
				})
			},

			handleSubStocks(stocks) {
				stocks.forEach(item => {
					this.tmpStocks[item.code] = item
					uni.$ws.ws.emit('sub', `ws.market.${this.market}.${item.code}`)
				})
			},
			handleUnsubStocks() {
				// 缓存不为空 先退订
				Object.keys(this.tmpStocks).length && Object.keys(this.tmpStocks).forEach(key => {
					const current = this.tmpStocks[key]
					uni.$ws.ws.emit('unsub', `ws.market.${current.market}.${key}`)
					delete this.tmpStocks[key]
				})
			}
		},

		created() {


			uni.$ws.messageCallback = ({
				data
			}) => {
				try {
					const key = data.code
					if (this.tmpIndexData[key]) {
						this.tmpIndexData[key] = Object.assign(this.tmpIndexData[key], data)
					}

					if (this.tmpStocks[key]) {
						this.tmpStocks[key] = Object.assign(this.tmpStocks[key], data)
					}
				} catch (e) {
					//TODO handle the exception
				}
			}

			uni.onNetworkStatusChange(res => {
				console.log(this.navbars)
				this.setCurrentIndex()
				this.indexRequest()
				this.indexStocks()
			});

			// window.tmp = this.tmpIndexData
		},
		onHide() {
			console.log(22222)
			this.handleUnSubIndexData()
			this.handleUnsubStocks()
		},

		onShow() {
			page = 1;
			this.indexRequest()
			this.indexStocks()
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