<template>
	<view class="p-4">
		<view class="font-semibold text-[34rpx]">{{ $t("signup") }}</view>
		<view class="mt-6">
			<form @submit="submit">
				<view class="flex flex-row gap-x-3">
			<!-- 		<text :class="['text-md', type === 'phone' ? 'font-semibold' : 'text-[#999]']"
						@click="changeType('phone')">{{ $t("phone") }}</text> -->
					<text :class="['text-md', type === 'email' ? 'font-semibold' : 'text-[#999]']"
						@click="changeType('email')">{{ $t("email") }}</text>
				</view>
				<view v-if="type === 'phone'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3 gap-x-3">
					<view class="phone-prefix">
						<view class="gui-flex gui-row gui-nowrap gui-space-between gap-x-1">
							<text class="gui-text gui-color-gray">{{phonePrefixList[phonePrefixIndex]}}</text>
							<text class="gui-text gui-icons gui-color-gray">&#xe603;</text>
						</view>
					</view>
					<input type="number" class="gui-form-input" name="phone" :placeholder="$t('your_phone')" value="" />
				</view>
				<view v-if="type === 'email'" class="mt-5 gui-bg-gray rounded-3xl flex flex-row items-center px-3">
					<input type="email" class="gui-form-input" name="email" :placeholder="$t('your_email')" value="" />
				</view>

<!-- 				<view class="gui-margin-top">
					<text class="text-md text-black">{{ $t('verification_code') }}</text>
				</view>
				<view class="gui-bg-gray rounded-3xl flex flex-row items-center px-3 mt-5">
					<view class="flex flex-row justify-between items-center w-full">
						<view>
							<input type="password" class="gui-form-input" name="verification_code" :placeholder="$t('verification_code')" />
						</view>
						<text class="gui-text-center gui-primary-color">{{ $t('send_code') }}</text>
					</view>

				</view> -->

				<view class="gui-margin-top pt-3">
					<text class="text-md text-black">{{ $t('password') }}</text>
				</view>
				<view class="gui-bg-gray rounded-3xl flex flex-row items-center px-3 mt-5">
					<view class="flex flex-row justify-between items-center w-full">
						<view>
							<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.password" name="password"
								@input="inputting" :placeholder="$t('your_password')" />
							<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.password"
								name="password" @input="inputting" :placeholder="$t('your_password')" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
					</view>

				</view>

				<view class="gui-bg-gray rounded-3xl flex flex-row items-center px-3 mt-5">
					<view class="flex flex-row justify-between items-center w-full">
						<view>
							<input type="password" class="gui-form-input" v-if="isConfirmPwd" v-model="formData.confirm_password"
								name="confirm_password" @input="inputting" :placeholder="$t('repeat_password')" />
							<input type="text" class="gui-form-input" v-if="!isConfirmPwd" :disabled="true"
								v-model="formData.confirm_password" name="confirm_password" @input="inputting"
								:placeholder="$t('your_password')" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isConfirmPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changeConfirmPwdType">&#xe609;</text>
					</view>
				</view>
				<!-- 
				<view class="gui-margin-top pt-3">
					<text class="text-md text-black">{{ $t('invitation_code') }}</text>
				</view>
				<view class="gui-bg-gray rounded-3xl flex flex-row items-center px-3 mt-5">
					<view class="flex flex-row justify-between items-center">
						<input class="gui-form-input" name="invitation_code" :placeholder="$t('invitation_code')" />
					</view>

				</view> -->

				<view hover-class="gui-flex gui-tap" class="flex mt-6">
					<gui-submit-button ref="guibtn"
						style="width: 100%; border-radius: 60rpx; padding-top: 6rpx; padding-bottom: 6rpx;"
						class="flex justify-center items-center" baseClass="btn-block">
						<template v-slot:default>
							<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">{{ $t('signup') }}</text>
						</template>
						<template v-slot:realBtn>
							<button style="width:230rpx; height:80rpx;" type="default" form-type="submit">{{ $t('signup') }}</button>
						</template>
						<template v-slot:success>
							<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">&#xe7f8;
								{{ $t('success') }}</text>
						</template>
						<template v-slot:error>
							<text style="line-height:80rpx;" class="gui-block gui-sbutton-text gui-icons">&#xe646;
								{{ $t('failed') }}</text>
						</template>
					</gui-submit-button>
				</view>

				<view class="flex justify-center items-center">
					<view class="gui-bg-white flex flex-row justify-center items-center gui-dark-bg-level-3 gui-padding gui-margin-top footer-section gap-x-2">
						<gui-radio :checked="check" @change="radioChange" :defaultClass="['m-auto']">
							
						</gui-radio>
						<div class="flex text-[18rpx] " :class="[language.key === 'en' ? 'text-[16rpx]': '']">
							<text class="gui-primary-text pr-1">{{ $t("read_agree") }}</text>
							<text class="gui-color-blue" @tap.stop.prevent="openAgreePage">{{ $t("user_agree") }}</text>
							<text class="gui-primary-text px-1">{{ $t("and") }}</text>
							<text class="gui-color-blue" @tap.stop.prevent="openXYPage">{{ $t("privacy") }}</text>
						</div>
					</view>
				</view>
			</form>
		</view>
	</view>
</template>


<script>
	import graceChecker from "@/Grace6/js/checker.js";
	import {
		mapState
	} from 'pinia'
	import {
		useAppStore
	} from "../../../store/app";
	import { requestSignup } from '@/api/auth.js'
	
	export default {
		data() {
			return {
				isPwd: true,
				isConfirmPwd: true,
				phonePrefixIndex: 0,
				phonePrefixList: ['0086', '001'],
				type: 'email',
				formData: {
					phone: '',
					email: '',
					password: '',
					confirm_password: ''
				},
				check: true
			}
		},
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			})
		},
		methods: {
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
			changeConfirmPwdType() {
				this.isConfirmPwd = !this.isConfirmPwd
			},
			loginbymsg: function() {
				console.log('请自行完善代码');
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
				rule.push({
					name: "confirm_password",
					checkType: "samewith",
					checkRule: "password",
					errorMsg: "两次密码输入不一致"
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
						await requestSignup(formData)
						this.$refs.guibtn.success();
						uni.showToast({
							title: 'Success',
							icon: "none"
						})
						this.$go('/pages/auth/signin/signin', 'navigateTo')
					}catch(e){
						this.$refs.guibtn.fail();
						//TODO handle the exception
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