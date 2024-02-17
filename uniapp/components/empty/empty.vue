<template>
	<view class="flex flex-col justify-center items-center text-[#999]">
		<image :src="EmptyImage" class="w-[200rpx] h-[200rpx]"></image>
		<view class="text-[20rpx]">{{ $t('empty') }}</view>
	</view>
</template>

<script>
	import EmptyImage from '@/static/img/empty_default.png'
	
	export default {
		name: "empty",
		data() {
			return {
				EmptyImage
			};
		}
	}
</script>

<style>

</style>