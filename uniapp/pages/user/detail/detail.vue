<template>
	<view class="py-4">
		<view class="bg-white">
			<view class="flex flex-row justify-between items-center p-4">
				<view class="font-semibold ">{{ $t("avatar") }}</view>
				<image src="/static/img/avatar.png" class="w-[60rpx] h-[60rpx] rounded-full"></image>
			</view>
			<view class="flex flex-row justify-between items-center p-4">
				<view class="font-semibold ">{{ $t("nickname") }}</view>
				<view class="text-gray-500 font-mono">{{ user.email }}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'pinia'
import { useAppStore } from '../../../store/app'
	export default {
		data() {
			return {
				
			}
		},
		computed: {
			...mapState(useAppStore, {
				user: 'user'
			})
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
