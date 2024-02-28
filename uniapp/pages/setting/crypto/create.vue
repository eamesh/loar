<template>
<gui-page :customFooter="true">
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-3 card-create">
				<view class="text-[24rpx]">幣種</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
						<gui-select-list 
										@change="changeType" 
										:items="types"></gui-select-list>
				</view>
				<view class="text-[24rpx]">網路</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<gui-select-list
									@change="changeNetwork" 
									:items="currentNetworks"></gui-select-list>
				</view>
				<view class="text-[24rpx]">地址</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input v-model="address" class="h-[70rpx] w-full text-[20rpx]" name="address" placeholder="地址" />
					</view>
				</view>
				{{params}}
			</view>
		</template>
		<template v-slot:gFooter>
			<view class="h-[140rpx] footer flex justify-center items-center px-4">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @tap="submit">
					<text class="gui-color-white gui-button-text">{{ $t('confirm') }}</text>
				</button>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { createCard } from '@/api/card.js'
	export default {
		data() {
			return {
				formData: {
					
				},
				
				types: [
					{title:"USDT", checked:true, children: [
						{
							title: "ERC20_USDT",
							checked: true
						},
						{
							title: "TRC20_USDT",
							checked: false
						}
					]},
					{title:"BTC", checked:false, children: [
						{
							title:"BTC", checked:true,
						}
					]},
					{title:"ETH", checked:false, children: [
						{
							title:"ETH", checked:true
						}
					]},
				],
				
				typeIndex: 0,
				networkIndex: 0,
				currentNetworks: [],
				currentType: {},
				network: {},
				address: ''
			}
		},
		
		computed: {
			params() {
				return {
					account: this.currentType.title,
					network: this.network.title,
					address: this.address
				}
			}
		},
		methods: {
			changeType(e) {
				console.log(e)
				this.currentType = this.types[e]
				this.currentNetworks = this.types[e].children.map((item, idx) => {
					idx === 0 && (this.network = item)
					return {
						...item,
						checked: idx === 0
					}
				})
			},
			changeNetwork(e) {
				this.network = this.currentNetworks[e]
			},
			async submit() {
				if (!this.params.address) {
					uni.showToast({
						title: '地址',
						icon: 'none'
					})
					return
				}
				
				uni.showLoading({
					title: 'Loading',
					mask: true
				})
				try{
					await createCard({
						type: 'CRYPTO',
						name: this.network.title,
						detail: this.params
					})
					uni.hideLoading()
					uni.showToast({
						title: 'Success',
						icon: 'none'
					})
					uni.navigateBack()
				}catch(e){
					//TODO handle the exception
					uni.hideLoading()
				}
			}
		},
		
		onShow() {
			this.currentType = this.types[0]
			this.currentNetworks = this.types[0].children
			this.network = this.currentNetworks[0]
		}
	}
</script>

<style lang="scss">
.card-create {
	:deep(.gui-select-list-title) {
		font-size: 22rpx;
	}
	
	:deep(.gui-select-list-content) {
		padding: 10rpx 0;
	}
}
</style>
