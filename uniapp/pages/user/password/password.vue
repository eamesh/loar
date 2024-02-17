<template>
	<view class="flex flex-col w-screen h-screen bg-white">
		<form @submit="">
			<view class="flex-1 overflow-auto w-full px-4 box-border">
				<view class="flex flex-col gap-y-3 mt-8">
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isOld" v-model="formData.oldPassword"
								name="oldPassword" :placeholder="$t('old_password')" />
							<input type="text" class="gui-form-input" v-if="!isOld" :disabled="true" v-model="formData.oldPassword"
								name="oldPassword" :placeholder="$t('old_password')" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isOld ? 'gui-primary-color' : 'gui-color-gray']" @click="changeOldPwdType">&#xe609;</text>
					</view>
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.password" name="password"
								:placeholder="$t('new_password')" />
							<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.password"
								name="password" :placeholder="$t('new_password')" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
					</view>
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isConfirm" v-model="formData.confirm" name="confirm"
								:placeholder="$t('new_confirm_password')" />
							<input type="text" class="gui-form-input" v-if="!isConfirm" :disabled="true" v-model="formData.confirm"
								name="confirm" :placeholder="$t('new_confirm_password')" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isConfirm ? 'gui-primary-color' : 'gui-color-gray']" @click="changeConfirmType">&#xe609;</text>
					</view>
				</view>
			</view>
			<view class="bg-white footer px-4">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl py-1" @click="submit">
					<text class="gui-color-white gui-button-text">{{ $t('confirm') }}</text>
				</button>
			</view>
		</form>
	</view>
</template>

<script>
	import graceChecker from "@/Grace6/js/checker.js";
	import { requestChangepassword } from '@/api/auth.js';
	
	export default {
		data() {
			return {
				formData: {
					oldPassword: '',
					password: '',
					confirm: '',
				},
				isPwd: true,
				isOld: true,
				isConfirm: true
			}
		},
		methods: {
			changePwdType() {
				this.isPwd = !this.isPwd
			},
			changeConfirmType() {
				this.isConfirm = !this.isConfirm
			},
			changeOldPwdType() {
				this.isOld = !this.isOld
			},
			async submit() {
				const rule = [{
						name: "oldPassword",
						checkType: "string",
						checkRule: "6,20",
						errorMsg: "原始密码至少6个字符"
					},
					{
						name: "password",
						checkType: "string",
						checkRule: "6,20",
						errorMsg: "密码至少6个字符"
					},
					{
						name: "confirm",
						checkType: "samewith",
						checkRule: "password",
						errorMsg: "两次密码输入不一致"
					},
				];
				console.log(this.formData)

				const checkRes = graceChecker.check(this.formData, rule);

				if (checkRes) {
					
					try{
						await requestChangepassword(this.formData)
						uni.showToast({
							title: "修改成功!",
							icon: "none"
						});
					}catch(e){
						uni.showToast({
							title: "修改失败!",
							icon: "none"
						});
					}
				} else {
					uni.showToast({
						title: graceChecker.error,
						icon: "none"
					});
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
</style>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}

	.footer {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
		box-shadow: 0 -0.3125rem 0.4375rem rgba(128, 128, 128, .1);
		height: calc(160rpx + env(safe-area-inset-bottom));
		padding-bottom: env(safe-area-inset-bottom);
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100vw;
	}
</style>