<template>
	<view class="px-4">
		<view class="flex justify-center items-center pt-8 pb-5">
			<image src="/static/img/avatar.png" class="w-32 h-24 rounded-lg"></image>
		</view>
		
		<view class="bg-white rounded-lg flex flex-col py-1">
			<view class="flex flex-row justify-between items-center px-4 py-3" @click="$go('/pages/article/article')">
				<view>使用者協議</view>
				<text class="gui-icons gui-block gui-color-gray text-md">&#xe601;</text>
			</view>
			<view class="flex flex-row justify-between items-center px-4 py-3" @click="$go('/pages/article/article')">
				<view>隱私權政策</view>
				<text class="gui-icons gui-block gui-color-gray text-md">&#xe601;</text>
			</view>
			<view class="flex flex-row justify-between items-center px-4 py-3" @click="$go('/pages/article/article')">
				<view>公司簡介</view>
				<text class="gui-icons gui-block gui-color-gray text-md">&#xe601;</text>
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

</style>
