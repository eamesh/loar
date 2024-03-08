<template>
	<gui-page>
		<template v-slot:gFixedTop>
			<view class="w-full flex justify-center">
				<gui-switch-navigation :items="navBars" :currentIndex="currentIndex" @change="navchange" textAlign="center"
					:isCenter="true" activeDirection="center" :size="0" :margin="20" padding="50rpx"
					activeLineHeight="4rpx" class="w-full"></gui-switch-navigation>
			</view>
		</template>
		
		<template v-slot:gBody>
			<view class="h-[80rpx]"></view>
			<view class="px-4 py-3 " v-if="currentLists.length">
				<view class="bg-white rounded-md px-3 py-4" >
					<view class="flex flex-row flex-nowrap justify-between items-center text-[#999] font-medium pb-1">
						<view class="basis-1/2">{{ $t("table.symbol_name") }}</view>
						<view class="basis-1/3 text-right">提交/已填写</view>
						<view class="basis-1/3 text-right">类型</view>
					</view>
			
					<view class="flex flex-row flex-nowrap justify-between items-center font-medium mt-6"
						@click="$go(`/pages/kline/kline?id=${item.id}`, 'navigateTo')" v-for="(item,index) in currentLists" :key="item.id">
						<view class="basis-1/2 overflow-hidden">
							<view class="flex flex-col">
								<view class="truncate text-[22rpx]">{{ item.stockSymbol.name }}</view>
								<view class="flex flex-row items-center gap-x-1 mt-2">
									<view class="bg-[#3395FF] text-white text-[18rpx] px-[10rpx] py-[3px] rounded-sm">{{ item.market }}</view>
									<view class="text-[#999] text-[20rpx]">{{ item.stockSymbol.code }}</view>
								</view>
							</view>
						</view>
						<view class="basis-1/3 text-right text-xs font-mono flex flex-col gap-y-2" >
							<view class="text-black">{{ item.amount }}</view>
							<view class="text-gray-400 text-[22rpx]">{{ item.price }}</view>
						</view>
						<view class="basis-1/3 text-right text-xs font-mono">
							<view class="flex flex-col gap-y-2 items-end">
								<view :class="[parseFloat(item.mode) === 0 ? 'text-[#00c537]' : 'text-[#e60101]']" class="pr-1">
									{{ modeText[item.mode] }}
								</view>
								<view v-if="currentIndex === 0" class="rounded-3xl bg-[#e60101] text-white text-[16rpx] px-2" @click.stop="handleCancelSubscribe(item.id)">取消</view>
							</view>
						</view>
							
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
	import { getTypeOrder, cancelPosition } from '@/api/member.js'
	export default {
		data() {
			return {
				market: '',
				currentIndex: 0,
				lists: []
			}
		},
		computed: {
			navBars() {
				return [{
					id: 0,
					name: "待處理"
				},{
					id: 1,
					name: "已處理"
				},{
					id: 2,
					name: "已取消"
				}]
			},
			modeText() {
				return [
					this.$t('long'),
					this.$t('short')
				]
			},
			currentLists() {
				switch (this.currentIndex){
					case 0:
						return this.lists.filter(item => item.status === 2)
						break;
					case 1:
						return this.lists.filter(item => item.status === 0)
						break;
					case 2:
						return this.lists.filter(item => item.status === 3)
						break;
				}
			}
		},
		methods: {
			navchange (index) {
				this.currentIndex = index
			},
			async getTypeOrder() {
				uni.showLoading({
					
				})
				try{
					const result = await getTypeOrder({
						market: this.market
					})
					this.lists = result
				}catch(e){
					//TODO handle the exception
				}
				
				uni.hideLoading()
			},
			async handleCancelSubscribe(id) {
				console.log(123)
				uni.showLoading({
					title: 'Loading',
				})
				try{
					await cancelPosition(id)
					uni.hideLoading()
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					await this.getTypeOrder()
				}catch(e){
					console.log(e)
					//TODO handle the exception
					uni.hideLoading()
				}
			}
		},
		
		onLoad(e) {
			this.market = e.market
		},
		
		onShow() {
			this.getTypeOrder()
		}
	}
</script>

<style>

</style>
