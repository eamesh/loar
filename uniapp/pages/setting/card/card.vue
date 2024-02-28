<template>
	<gui-page :customFooter="true">
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-3">
				<view class="flex flex-row gap-x-3 items-center justify-between bg-gray-200 rounded-md px-3 py-3 text-xs" v-for="(item,index) in lists" :key="item.id" @click="handleSelect(item)">
					<view class="flex flex-row gap-x-3">
						<image src="/static/img/bank.png" class="w-[78rpx] h-[40rpx]"></image>
						<view>
							{{ item.detail.bank }}
						</view>
						<view v-if="item.name">({{ item.name }})</view>
					</view>
					<view @click.stop="handleDelete(item)" v-if="edit">
						<image class="w-[30rpx] h-[30rpx]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI/SURBVHgBxZe/b9NAFMe/dz0qhgqlAxISi42TwkbYEDRKVybKPwAp/0B/jEzAxETTvyAp/wAwMTYQIrFRxiah9oLEliAxRY4f7xwnMqTEB7Ldz+Lk7nTfvHvvnr8RMMC1Ngq46JfHY2xKoAoBi4cL0fRQEI7HwBcI0Sp2229M9hSJgsv+NgE7MaEEyBMQTYz8Q9v75OFfhd3r69tEeGouOPcDXIGlZ3b3wyFMhd1SZZ8E7SAFBIl9u9feSxT+una3wUdVQ4oQUcPpdR7Hx2T8i440bVGNEGKL937529j0Q790pyaFbCA7iNO355x06jNh98Zti4ILRzxnIVsGP0bq2i2vNZwcdaAe5SCqWb207IdFG0Z8ulZxcxLWhFHLvlPZzFFUU1hRfpnriTaQL1zkuC/5rG8iZ1i0qjjLZZPFKw/uQV29snCN/+07fr5+BwMsBYNerEUvv3iCRGjyMBAvSJwTOuIhEqKeRpDiUQ/FaWn9s2me04KNw5HktLxHzmi3IgOCkVVJEVqSoiWVr44xyXNeup590n4rbX5T8HEfICcI4pV+htdJjpR+Rw6QOeTKkd+cCYdRB/Qc2UKh+Yuc56yBOP1OnV1lHRnBRXwQd5xzZq/PZk+m7LsCULPY7WzFx+Zapl4QRU5IQ5T3+lP0TGGN0/u4G1DAdlS4+H8GbO52i7zXWZOL/8KwCQwCVWPL+zByKQvXR4TXU98UXbR/W2SyUYi2SOxWqqFxmPT21akQJ8XTrVd3Qd2QFglO+QW3HtuKqJHphwAAAABJRU5ErkJggg==" />
					</view>
				</view>
			
			</view>
		</template>
		<template v-slot:gFooter>
			<view class="h-[140rpx] footer flex justify-center items-center px-4">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @tap="$go('/pages/setting/card/create', 'navigateTo')">
					<text class="gui-color-white gui-button-text">{{ $t('add.card') }}</text>
				</button>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { listCard, deleteCard } from '@/api/card.js'
	export default {
		data() {
			return {
				lists: [],
				edit: false
			}
		},
		methods: {
			async listCard () {
				uni.showLoading({
					title: 'Loading',
					icon: 'none'
				})
				try{
					const result = await listCard({
						type: 'CARD'
					})
					
					this.lists = result
				}catch(e){
					//TODO handle the exception
				}
				uni.hideLoading()
			},
			
			handleSelect(item) {
				// #ifdef APP-NVUE
				const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
				// #endif
				// #ifndef APP-NVUE
				const eventChannel = this.getOpenerEventChannel();
				// #endif
			
				eventChannel.emit('selectCard', item);
				uni.navigateBack()
			},
			async handleDelete (item) {
				uni.showLoading({
					title: "Loading",
					mask: true
				})
				try{
					await deleteCard(item.id)
					uni.hideLoading()
					await this.listCard()
				}catch(e){
					//TODO handle the exception
					uni.hideLoading()
				}
			}
		},
		
		onShow() {
			this.listCard()
		},
		
		onNavigationBarButtonTap() {
			console.log('click')
			this.edit = !this.edit
		}
	}
</script>

<style lang="scss" scoped>
.footer {
	box-shadow: 0 -.3125rem .4375rem rgba(128,128,128,.1);
}
</style>
