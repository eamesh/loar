<template>
	<gui-page customHeader isSwitchPage>
		<template v-slot:gBody>
			<view class="px-4 pt-3 flex flex-row-reverse" @click="$go('/pages/setting/language/language')">
				<view class="flex flex-row items-center gap-x-2 font-sans">
					<image src="/static/img/language.png" class="w-[40rpx] h-[40rpx]"></image>
					<view class="text-xs">{{ language.title }}</view>
					<text class="gui-icons gui-block gui-color-gray text-[40rpx]">&#xe601;</text>
				</view>
			</view>

			<view class="flex flex-col justify-center items-center pt-20 pb-10 gap-y-4 font-sans">
				<image src="/static/img/avatar.png" class="w-32 h-24 rounded-xl"></image>
				<text class="text-[#3395ff] font-sans font-semibold">VIM 777777GROUPS</text>
			</view>

			<view class="px-4 font-sans">
				<form @submit="submit">
					<view class="flex flex-row gap-x-3">
			<!-- 			<text :class="['text-md', type === 'phone' ? 'font-semibold' : 'text-[#999]']"
							@click="changeType('phone')">{{ $t("phone") }}</text> -->
						<text :class="['text-md', type === 'email' ? 'font-semibold' : 'text-[#999]']"
							@click="changeType('email')">{{ $t("email") }}</text>
					</view>
					<view v-if="type === 'phone'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3 gap-x-3">
						<view class="phone-prefix" @click="selectCountry">
							<view class="gui-flex gui-row gui-nowrap gui-space-between gap-x-1">
								<text class="gui-text gui-color-gray">{{phonePrefixList[phonePrefixIndex]}}</text>
								<text class="gui-text gui-icons gui-color-gray">&#xe603;</text>
							</view>
						</view>
						<input type="number" class="gui-form-input" name="phone" :placeholder="$t('your_phone')" value="" />
					</view>
					<view v-if="type === 'email'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3 w-full box-border">
						<input type="email" class="gui-form-input w-full" name="email" :placeholder="$t('your_email')" value="" />
					</view>

					<view class="mt-5">
						<text class="text-md text-black">{{ $t("password") }}</text>
					</view>
					<view class="mt-5 gui-bg-gray rounded-3xl px-3">
						<view class="flex flex-row justify-between items-center">
							<view class="w-full">
								<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.password" name="password"
									@input="inputting" :placeholder="$t('your_password')" />
								<input type="text" class="gui-form-input" v-if="!isPwd" v-model="formData.password"
									name="password" @input="inputting" :placeholder="$t('your_password')" />
							</view>
							<text class="gui-form-icon gui-icons gui-text-center"
								:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
						</view>

					</view>
					<view class="gui-flex gui-rows gui-space-between gui-align-items-center" style="margin-top:38rpx;">
				<!-- 		<view class="gui-tap">
							<text class="text-[#3395ff] text-xs font-sans font-semibold gui-icons"
								@tap="$go('/pages/auth/reset/reset')">{{ $t("forget_password") }}</text>
						</view> -->

					</view>
					<view hover-class="gui-flex gui-tap" class="flex mt-6 block-btn">
						<gui-submit-button ref="guibtn"
							style="width: 100%; border-radius: 60rpx; padding-top: 6rpx; padding-bottom: 6rpx;"
							class="flex justify-center items-center" baseClass="btn-block">
							<template v-slot:default>
								<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">{{ $t("signin") }}</text>
							</template>
							<template v-slot:realBtn>
								<button style="width:230rpx; height:80rpx;" type="default"
									form-type="submit">{{ $t("signin") }}</button>
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
					{{ $t("signup") }}
				</view>
				<view class="flex justify-center items-center">
					<view class="gui-bg-white flex flex-row justify-center items-center gui-dark-bg-level-3 gui-padding gui-margin-top footer-section gap-x-2">
						<gui-radio :checked="check" @change="radioChange" :defaultClass="['m-auto']">
							
						</gui-radio>
						<div class="flex text-[16rpx] " :class="[language.key === 'en' ? 'text-[16rpx]': '']">
							<text class="gui-primary-text pr-1">{{ $t("read_agree") }}</text>
							<text class="gui-color-blue" @tap.stop.prevent="openAgreePage">{{ $t("user_agree") }}</text>
							<text class="gui-primary-text px-1">{{ $t("and") }}</text>
							<text class="gui-color-blue" @tap.stop.prevent="openXYPage">{{ $t("privacy") }}</text>
						</div>
					</view>
				</view>
			</view>


		</template>
	</gui-page>
</template>

<script>
	import graceChecker from "@/Grace6/js/checker.js";
	import {
		useAppStore
	} from '@/store/app'
	import {
		mapActions,
		mapState
	} from 'pinia'
	import { requestSignin } from '@/api/auth.js'
	
	export default {
		data() {
			return {
				isPwd: true,
				phonePrefixIndex: 0,
				phonePrefixList: ['0086', '001'],
				type: 'email',
				formData: {
					phone: '',
					email: '',
					password: ''
				},
				check: true
			}
		},
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			})
		},
		created() {},
		methods: {
			...mapActions(useAppStore, ['signin']),
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
				this.check = e
			},
			openXYPage: function() {
				this.$go('/pages/article/setting?key=privacy')
				// 此处可以使用 uni api 打开协议页面
			},
			openAgreePage: function() {
				this.$go('/pages/article/setting?key=agree')
				// 此处可以使用 uni api 打开协议页面
			},
			inputting: function(e) {
				const name2Val = e.detail.value;
				console.log(name2Val);
			},
			changePwdType: function() {
				this.isPwd = !this.isPwd;
			},
			loginbymsg: function() {
				console.log('请自行完善代码');
			},
			tmpToken() {
				uni.navigateBack()
			},
			// 提交
			submit: async function(e) {
				if (!this.check) {
					uni.showToast({
						title: `请确认阅读相关隐私政策和协议`,
						icon: "none"
					});
					return
				}
				// 表单数据
				const formData = e.detail.value;
				console.log(formData);
				// 利用 graceUI 的表单验证工具进行验证
				//定义表单规则
				const rule = [

				];

				if (this.type === 'phone') {
					rule.push({
						name: "phone",
						checkType: "phone",
						checkRule: "",
						errorMsg: "请正确输入11位手机号"
					})
				} else {
					rule.push({
						name: "email",
						checkType: "email",
						checkRule: "",
						errorMsg: "邮箱格式错误"
					})
				}

				rule.push({
					name: "password",
					checkType: "string",
					checkRule: "6,100",
					errorMsg: "登录密码至少6个字符"
				})

				const checkRes = graceChecker.check(formData, rule);
				if (checkRes) {
					// 检查按钮状态 按钮状态不为 1 阻止重复提交
					const btnStatus = this.$refs.guibtn.status;
					if (btnStatus != 1) {
						return;
					}
					this.$refs.guibtn.loading();
					
					try{
						await this.signin(formData)
						this.$refs.guibtn.success();
						setTimeout(() => {
							uni.navigateBack()
						}, 500)
					}catch(e){
						console.log(e)
						this.$refs.guibtn.fail();
						uni.showToast({
							title: e.data.message,
							icon: 'none'
						})
						setTimeout(() => {
							this.$refs.guibtn.reset();
						}, 2000)
					}
					
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

	.btn-block {
		:deep(.gui-sbutton, uni-button) {
			width: 100% !important;
		}

		:deep(uni-button) {
			width: 100% !important;
		}
	}
	
	.footer-section {
		:deep(.gui-radio-lable.gui-flex1) {
			display: none;
		}
	}
</style>