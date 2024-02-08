<template>
	<gui-page customHeader isSwitchPage>
		<template v-slot:gBody>
			<view class="w-screen aspect-[1/1.1] bg-white trade_bg" style></view>
			<view class="mt-3 p-4">
				<view class="px-7 flex flex-col gap-y-5">
					<view class="flex flex-row justify-start items-center gap-x-3">
						<image src="/static/img/trade_02.png" class="w-[60rpx] h-[60rpx]"></image>
						<view class="flex flex-col gap-y-1">
							<view class="text-sm font-semibold">全球投資</view>
							<view class="text-[#999] text-xs">投資多種類型的資金</view>
						</view>
					</view>
					<view class="flex flex-row justify-start items-center gap-x-3">
						<image src="/static/img/trade_01.png" class="w-[60rpx] h-[60rpx]"></image>
						<view class="flex flex-col gap-y-1">
							<view class="text-sm font-semibold">全球投資</view>
							<view class="text-[#999] text-xs">投資多種類型的資金</view>
						</view>
					</view>
				</view>
	
				<button type="default" class="gui-bg-primary gui-noborder rounded-3xl mt-16" @click="$go('/pages/auth/signin/signin', 'navigateTo')">
					<text class="gui-icons gui-color-white gui-button-text"> 開立帳號</text>
				</button>
			</view>
		</template>
	</gui-page>
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