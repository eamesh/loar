<template>
	<view class="flex flex-col py-4 w-screen min-h-screen bg-white">
		<view class="border-solid border-[#eee] border-b-[1rpx] border-x-0 border-t-0 flex flex-row justify-between items-center px-4 py-4" :key="item.key"
			v-for="item in languages" @tap="changeLocale(item)">
			<view class="text-md text-black">{{ item.title }}</view>
			<gui-radio-custom :checked="item.key === defaultLocale" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultLocale: 'zh-Hant',
				languages: [{
						key: 'en',
						title: 'English'
					},
					{
						key: 'zh-Hant',
						title: '繁體中文'
					}
				]
			}
		},
		methods: {
			changeLocale(locale) {
				this.defaultLocale = locale.key
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;

		:deep(.gui-radio-lable.gui-flex1) {
			display: none;
		}
	}
</style>