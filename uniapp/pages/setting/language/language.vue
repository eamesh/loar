<template>
	<view class="flex flex-col py-4 w-screen min-h-screen bg-white">
		<view class="border-solid border-[#eee] border-b-[1rpx] border-x-0 border-t-0 flex flex-row justify-between items-center px-4 py-4" :key="item.key"
			v-for="item in languages" @tap="changeLocale(item)">
			<view class="text-md text-black">{{ item.title }}</view>
			<gui-radio-custom :checked="item.key === key" />
		</view>
	</view>
</template>

<script>
	import { mapState, mapActions } from 'pinia'
import { useAppStore } from '../../../store/app'
	export default {
		data() {
			return {
				// defaultLocale: {
				// 	key: 'en',
				// 	title: 'English'
				// },
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
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			}),
			key() {
				return this.language.key || ''
			}
		},
		methods: {
			...mapActions(useAppStore, ['setLanguage']),
			changeLocale(locale) {
				// this.defaultLocale = locale
				this.setLanguage(locale)
				this.$i18n.locale = this.language.key
				uni.setLocale(this.language.key)
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