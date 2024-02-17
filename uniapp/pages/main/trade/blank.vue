<template>

<view>
	<view class="w-screen aspect-[1/1.1] bg-white trade_bg" style></view>
	<view class="mt-3 p-4">
		<view class="px-7 flex flex-col gap-y-5">
			<view class="flex flex-row justify-start items-center gap-x-3">
				<image src="/static/img/trade_02.png" class="w-[60rpx] h-[60rpx]"></image>
				<view class="flex flex-col gap-y-1">
					<view class="text-sm font-semibold">{{ $t("trade.invest") }}</view>
					<view class="text-[#999] text-xs">{{ $t("trade.invest_content") }}</view>
				</view>
			</view>
			<view class="flex flex-row justify-start items-center gap-x-3">
				<image src="/static/img/trade_01.png" class="w-[60rpx] h-[60rpx]"></image>
				<view class="flex flex-col gap-y-1">
					<view class="text-sm font-semibold">{{ $t("trade.speedy") }}</view>
					<view class="text-[#999] text-xs">{{ $t("trade.speedy_content") }}</view>
				</view>
			</view>
		</view>
	
		<button type="default" class="gui-bg-primary gui-noborder rounded-3xl mt-16"
			@click="$go('/pages/auth/signin/signin', 'navigateTo')">
			<text class="gui-icons gui-color-white gui-button-text"> {{ $t("trade.open_account" )}}</text>
		</button>
	</view>
	
</view>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.trade_bg {
		background-image: url('/static/img/trade.png');
		background-position: 0% 0%;
		background-size: 100% 100%;
	}
</style>