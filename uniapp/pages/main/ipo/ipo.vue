<template>
	<gui-page customHeader isSwitchPage :statusBarClass="['bg-white']">
		<template v-slot:gFixedTop>
			<view class="flex flex-col justify-between items-center bg-white h-[160rpx] pt-2 box-border pr-4 font-sans">
				<view class="flex justify-between items-center w-full">
					<gui-switch-navigation :items="navItems" textAlign="center" :size="80" activeDirection="center"
						@change="navchange" :margin="30" :width="600" padding="10rpx"></gui-switch-navigation>
					<!-- <view class="w-[80rpx] flex-shrink-0 text-xs" @click="$go('/pages/stock/ipo/record')">记录</view> -->
					<view class="gui-icons gui-block gui-color-gray text-lg" @click="$go('/pages/stock/ipo/record/record', 'navigateTo')">&#xe62f;</view>
				</view>
				<view class="flex justify-between items-center w-full">
					<gui-switch-navigation :items="secondaNav" fontSize="20rpx" activeFontSize="20rpx" :size="80"
						textAlign="center" activeDirection="center" @change="navchange" :margin="30"
						padding="10rpx"></gui-switch-navigation>
				</view>
			</view>
		</template>

		<template v-slot:gBody>
			<view class="h-[160rpx]"></view>
			<view class="flex justify-center items-center h-[70vh]">
				<empty />
			</view>
		</template>
	</gui-page>
</template>

<script>
	import graceJS from '@/Grace6/js/grace.js';
	export default {
		data() {
			return {
				navItems: [{
						name: 'US',
						id: 0
					},
					{
						name: 'HKEX',
						id: 1
					},
					{
						name: 'BSE',
						id: 2
					}
				],
				secondaNav: [{
						name: '報價',
						id: 0
					},
					{
						name: '待上市',
						id: 1
					},
					{
						name: '已列出',
						id: 2
					}
				]
			}
		},
		methods: {
			navchange: function(index) {
				console.log(index);
			}
		},
		onLoad: function() {

		}
	}
</script>

<style>

</style>