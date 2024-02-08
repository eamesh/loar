<template>
	<gui-page customHeader isSwitchPage>
		<template v-slot:gBody>
			<view class="px-4 pt-3 flex flex-row-reverse" @click="$go('/pages/setting/language/language')">
				<view class="flex flex-row items-center gap-x-2">
					<image src="/static/img/language.png" class="w-[40rpx] h-[40rpx]"></image>
					<view class="text-xs">繁體中文</view>
					<text class="gui-icons gui-block gui-color-gray text-[40rpx]">&#xe601;</text>
				</view>
			</view>

			<view class="flex flex-col justify-center items-center pt-20 pb-10 gap-y-4">
				<image src="/static/img/avatar.png" class="w-32 h-24 rounded-xl"></image>
				<text class="text-[#3395ff] font-sans font-semibold">VIM GROUPS</text>
			</view>

			<view class="px-4">
				<form @submit="submit">
					<view class="flex flex-row gap-x-3">
						<text :class="['text-md', type === 'phone' ? 'font-semibold' : 'text-[#999]']"
							@click="changeType('phone')">電話</text>
						<text :class="['text-md', type === 'email' ? 'font-semibold' : 'text-[#999]']"
							@click="changeType('email')">電子郵件</text>
					</view>
					<view v-if="type === 'phone'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3 gap-x-3">
						<view class="phone-prefix" @click="selectCountry">
							<view class="gui-flex gui-row gui-nowrap gui-space-between gap-x-1">
								<text class="gui-text gui-color-gray">{{phonePrefixList[phonePrefixIndex]}}</text>
								<text class="gui-text gui-icons gui-color-gray">&#xe603;</text>
							</view>
						</view>
						<input type="number" class="gui-form-input" name="phone" placeholder="您的電話號碼" value="" />
					</view>
					<view v-if="type === 'email'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3">
						<input type="email" class="gui-form-input" name="email" placeholder="您的電子郵件地址" value="" />
					</view>

					<view class="mt-5">
						<text class="text-md text-black">密碼</text>
					</view>
					<view class="mt-5 gui-bg-gray rounded-3xl px-3">
						<view class="flex flex-row justify-between items-center">
							<view>
								<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.name3" name="name3"
									@input="inputting" placeholder="您的密碼" />
								<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.name3"
									name="name3" @input="inputting" placeholder="您的密碼" />
							</view>
							<text class="gui-form-icon gui-icons gui-text-center"
								:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
						</view>

					</view>
					<view class="gui-flex gui-rows gui-space-between gui-align-items-center" style="margin-top:38rpx;">
						<view class="gui-tap">
							<text class="text-[#3395ff] text-xs font-sans font-semibold gui-icons"
								@tap="$go('/pages/auth/reset/reset')">忘記密碼</text>
						</view>

					</view>
					<view hover-class="gui-flex gui-tap" class="flex mt-6">
						<gui-submit-button ref="guibtn"
							style="width: 100%; border-radius: 60rpx; padding-top: 6rpx; padding-bottom: 6rpx;"
							class="flex justify-center items-center" @click="tmpToken">
							<template v-slot:default>
								<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">登入</text>
							</template>
							<template v-slot:realBtn>
								<button style="width:230rpx; height:80rpx;" type="default" form-type="submit">登入</button>
							</template>
							<template v-slot:success>
								<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">&#xe7f8; 登入成功</text>
							</template>
							<template v-slot:error>
								<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">&#xe646; 登入失败</text>
							</template>
						</gui-submit-button>
					</view>
				</form>

				<view class="flex justify-center items-center text-[#3395FF] font-sans font-semibold mt-6"
					@click="$go('/pages/auth/signup/signup', 'navigateTo')">
					註冊
				</view>
				<view class="flex justify-center items-center">
					<view class="gui-bg-white gui-dark-bg-level-3 gui-padding gui-margin-top w-[600rpx]">
						<gui-radio @change="radioChange" :defaultClass="['m-auto']">
							<div class="flex text-xs">
								<text class="gui-primary-text">我已閱讀並同意</text>
								<text class="gui-color-blue" @tap.stop.prevent="openXYPage">使用者協議</text>
								<text class="gui-primary-text px-1">和</text>
								<text class="gui-color-blue" @tap.stop.prevent="openXYPage">隱私權政策</text>
							</div>
						</gui-radio>
					</view>
				</view>
			</view>


		</template>
	</gui-page>
</template>

<script>
	import graceChecker from "@/Grace6/js/checker.js";
	import { useAppStore } from '@/store/app'
	import { mapActions } from 'pinia'
	export default {
		data() {
			return {
				isPwd: true,
				phonePrefixIndex: 0,
				phonePrefixList: ['0086', '001'],
				type: 'phone',
				formData: {
					phone: '',
					email: '',
					password: ''
				}
			}
		},
		created() {
		},
		methods: {
			...mapActions(useAppStore, ['setToken']),
			selectCountry() {
				uni.navigateTo({
					url: '/pages/setting/country/country',
					events: {
						selectCountry(data) {
							console.log(data)
						}
					}
				})

			},
			changeType(type) {
				this.type = type
			},
			radioChange: function(e) {
				console.log(e);
			},
			openXYPage: function() {
				uni.showToast({
					title: "打开协议页面",
					icon: "none"
				});
				// 此处可以使用 uni api 打开协议页面
			},
			inputting: function(e) {
				var name2Val = e.detail.value;
				console.log(name2Val);
			},
			changePwdType: function() {
				this.isPwd = !this.isPwd;
			},
			loginbymsg: function() {
				console.log('请自行完善代码');
			},
			tmpToken() {
				this.setToken()
				uni.navigateBack()
			},
			// 提交
			submit: function(e) {
				// 表单数据
				var formData = e.detail.value;
				console.log(formData);
				// 利用 graceUI 的表单验证工具进行验证
				//定义表单规则
				var rule = [{
						name: "phone",
						checkType: "phone",
						checkRule: "",
						errorMsg: "请正确输入11位手机号"
					},
					{
						name: "password",
						checkType: "string",
						checkRule: "6,100",
						errorMsg: "登录密码至少6个字符"
					},
				];
				var checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					// 检查按钮状态 按钮状态不为 1 阻止重复提交
					var btnStatus = this.$refs.guibtn.status;
					if (btnStatus != 1) {
						return;
					}
					this.$refs.guibtn.loading();
					// 根据项目需要完成数据验证工作 如连接 api 进行登录
					// 提交按钮相关操作请参考 graceUI 手册
					// https://www.graceui.com/v6/info/60051-80.html
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			},
			// 国家号码切换
			phonePrefixChange: function(e) {
				this.phonePrefixIndex = e.detail.value;
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}
</style>