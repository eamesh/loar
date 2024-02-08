<template>
	<view class="w-screen h-screen overflow-auto profile">
		<view class="w-screen h-[300rpx] flex justify-start items-end px-4">
			<view class="flex flex-row gap-2 justify-start items-center pb-3">
				<gui-image src="/static/img/avatar.png" :width="140" :height="140" borderRadius="140rpx"></gui-image>
				<view v-if="token" class="flex flex-col gap-y-2 justify-center">
					<view class="font-mono text-[26rpx]">
						123@gmail.com
					</view>
					<view class="font-mono text-[24rpx]">ID:00000001</view>
				</view>
				<view v-else class="flex flex-col gap-y-2 justify-center" @click="$go('/pages/auth/signin/signin')">
					<view class="font-mono text-[34rpx] font-semibold">
						登入/註冊
					</view>
				</view>
			</view>
		</view>
		<view class="px-4 flex flex-col mt-2 gap-y-3">
			<view class="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-lg"
				@click="$go('/pages/user/detail/detail', 'navigateTo')">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/icon_white01.png" class="w-[50rpx] h-[50rpx]"></image>
					<view class="text-md">帳號資訊</view>
				</view>
				<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
			</view>

			<view class="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-lg"
				@click="$go('/pages/user/password/password')">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/icon_white02.png" class="w-[50rpx] h-[50rpx]"></image>
					<view class="text-md">密碼</view>
				</view>
				<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
			</view>

			<view class="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-lg"
				@click="$go('/pages/setting/language/language')">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/icon_white03.png" class="w-[50rpx] h-[50rpx]"></image>
					<view class="text-md">語言</view>
				</view>
				<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
			</view>

			<!-- 		<view class="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-lg">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/icon_white06.png" class="w-[50rpx] h-[50rpx]"></image>
					<view class="text-md">主題設定</view>
				</view>
				<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
			</view> -->

			<view class="flex flex-row justify-between items-center px-4 py-2 bg-white rounded-lg"
				@click="$go('/pages/about/about')">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/icon_white05.png" class="w-[50rpx] h-[50rpx]"></image>
					<view class="text-md">關於我們</view>
				</view>
				<text class="gui-icons gui-block text-[32rpx] text-[#999]">&#xe601;</text>
			</view>

			<view v-if="token" class="flex flex-row justify-between items-center mt-3">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @tap="open">
					<text class="gui-color-white gui-button-text">登出</text>
				</button>
			</view>
		</view>

		<gui-modal :customClass="['gui-bg-white', 'gui-dark-bg-level-3', 'gui-border-radius']" ref="guimodal" title="退出？">


			<!-- 利用 flex 布局 可以放置多个自定义按钮哦  -->
			<template v-slot:btns>
				<view class="gui-flex gui-row gui-space-between">
					<view hover-class="gui-tap" class="modal-btns gui-flex1" style="margin-right:80rpx;">
						<text class="modal-btns gui-color-gray" @tap="close">取消</text>
					</view>
					<view hover-class="gui-tap" class="modal-btns gui-flex1" style="margin-left:80rpx;">
						<text class="modal-btns gui-primary-color" @tap="confirm">确认</text>
					</view>
				</view>
			</template>
		</gui-modal>
	</view>
</template>

<script>
	import {
		mapState,
		mapActions
	} from 'pinia'
	import {
		useAppStore
	} from '../../../store/app';
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState(useAppStore, {
				token: 'token'
			})
		},
		methods: {
			...mapActions(useAppStore, ['logout']),
			navchange: function(index) {
				console.log(index);
			},
			open: function() {
				this.$refs.guimodal.open();
			},
			close: function() {
				this.$refs.guimodal.close();
			},
			confirm: function() {
				// 客户点击确认按钮后的逻辑请在此处实现
				this.logout()
				this.$refs.guimodal.close();
			},
		}
	}
</script>

<style scoped lang="scss">
	.profile {
		background: #f9f9f9 linear-gradient(180deg, #3395FF 0%, rgba(0, 0, 0, 0) 99.48%) no-repeat;
		background-size: 100% 300rpx;
	}

	.modal-btns {
		line-height: 88rpx;
		font-size: 26rpx;
		text-align: center;
		width: 200rpx;
	}
</style>