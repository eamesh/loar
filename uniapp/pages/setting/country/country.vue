<template>
	<view class="flex flex-col items-start">
		<view class="w-full" v-for="i in [...Array(10)]">
			<view class="font-semibold font-mono px-4 py-3">
				A
			</view>
			<view v-for="(k, idx) in [...Array(10)]"
				:class="idx === 9 ? '' : 'border-solid border-[#999] border-b-[1rpx] border-x-0 border-t-0'"
				class="bg-white text-md font-mono flex flex-row items-center px-4 py-3" @click="selectOne()">
				UnitedArabEmirates +971
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
			selectOne() {
				// #ifdef APP-NVUE
				const eventChannel = this.$scope.eventChannel; // 兼容APP-NVUE
				// #endif
				// #ifndef APP-NVUE
				const eventChannel = this.getOpenerEventChannel();
				// #endif
				const country = {
					code: '+86'
				}
				//注意，这里的第一个参数要和主页面的监听器名称一致
				//第二个就是要传的数据，我这里是传了一个对象回去
				eventChannel.emit('selectCountry', country);
				uni.navigateBack();
			}
		}
	}
</script>

<style>

</style>