<template>
	<view class="p-4">
		<view class="flex flex-row text-gray-400  text-[22rpx]">
			<view class="basis-1/3">{{ $t('table.type') }}</view>
			<view class="basis-1/3 text-center">{{ $t('table.account_change') }}</view>
			<view class="basis-1/3 text-right">{{ $t('table.time') }}</view>
		</view>
		
		<view class="flex flex-row items-center  text-xs mt-5">
			<view class="basis-1/3">手續費</view>
			<view class="basis-1/3 text-center">-1.3853</view>
			<view class="basis-1/3 text-right">
				<view>2024-02-07</view>
				<view>10:27:51</view>
			</view>
		</view>
		
		<view class="flex flex-row items-center  text-xs mt-5">
			<view class="basis-1/3">委託購買</view>
			<view class="basis-1/3 text-center">-1.3853</view>
			<view class="basis-1/3 text-right">
				<view>2024-02-07</view>
				<view>10:27:51</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
page {
	background-color: #fff;
}
</style>
