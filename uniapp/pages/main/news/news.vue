<template>
	<gui-page isSwitchPage>
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-4">
				<view class="rounded-md bg-white flex flex-row flex-nowrap justify-between p-3 gap-x-4" @click="$go('/pages/article/article', 'navigateTo')">
					<view class="basis-1/2">
						<view class="flex flex-col justify-between items-start overflow-hidden h-full">
							<view class="line-clamp-5 text-[26rpx]">力挺鮑威爾？ IMF總裁警告：聯準會降息宜遲早</view>
							<view class="text-[#999] text-[20rpx] font-mono">2024-02-02 07:49:59</view>
						</view>
					</view>
					<view class="basis-1/2">
						<gui-image src="/static/img/article_01.jpg" border-radius="20rpx" :width="340" :height="242" mode="cover"></gui-image>
					</view>
				</view>
				
				<view class="rounded-md bg-white flex flex-row flex-nowrap justify-between p-3 gap-x-4" @click="$go('/pages/article/article', 'navigateTo')">
					<view class="basis-1/2">
						<view class="flex flex-col justify-between items-start overflow-hidden h-full">
							<view class="line-clamp-5 text-[26rpx]">財政赤字窟窿太大！ 美國未來三月長債發行規模再創歷史紀錄</view>
							<view class="text-[#999] text-[20rpx] font-mono">2024-02-02 07:49:59</view>
						</view>
					</view>
					<view class="basis-1/2">
						<gui-image src="/static/img/article_02.jpg" border-radius="20rpx" :width="340" :height="242" mode="cover"></gui-image>
					</view>
				</view>
			</view>
		</template>
	</gui-page>
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
