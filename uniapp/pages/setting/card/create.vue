<template>
	<gui-page :customFooter="true">
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-3">
				<view>銀行帳戶</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<input class="gui-form-input w-full" v-model="formData.name" name="name" placeholder="銀行帳戶" />
					</view>
				</view>
				
				<view>帳號資訊</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="text-red-600">*</view>
						<input class="gui-form-input w-full" v-model="formData.bank" name="bank" placeholder="銀行分行" />
					</view>
				</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="text-red-600">*</view>
						<input class="gui-form-input w-full" v-model="formData.accountName" name="accountName" placeholder="帳號名稱" />
					</view>
				</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="text-red-600">*</view>
						<input class="gui-form-input w-full" v-model="formData.account" name="account" placeholder="銀行帳戶" />
					</view>
				</view>
				<view class="mt-1 bg-gray-200 rounded-md px-3">
					<view class="flex flex-row justify-between items-center">
						<view class="text-red-600">*</view>
						<input class="gui-form-input w-full" v-model="formData.code" name="code" placeholder="銀行代碼" />
					</view>
				</view>
			</view>
		</template>
		<template v-slot:gFooter>
			<view class="h-[140rpx] footer flex justify-center items-center px-4">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl" @tap="submit">
					<text class="gui-color-white gui-button-text">{{ $t('add') }}</text>
				</button>
			</view>
		</template>
	</gui-page>
</template>

<script>
	import { createCard } from '@/api/card.js'
	import graceChecker from "@/Grace6/js/checker.js";
	export default {
		data() {
			return {
				formData: {
					name: '',
					account: '',
					bank: '',
					accountName: '',
					code: ''
				}
			}
		},
		methods: {
			async submit() {
				const rules = [
					{name:"account", checkType: "string", checkRule: "1,100", errorMsg: "銀行帳戶" },
					{name:"bank", checkType: "string", checkRule: "1,100", errorMsg: "銀行分行" },
					{name:"accountName", checkType: "string", checkRule: "1,100", errorMsg: "帳號名稱" },
					{name:"code", checkType: "string", checkRule: "1,100", errorMsg: "銀行代碼" },
				]
				
				const checkRes = graceChecker.check(this.formData, rules)
				console.log(checkRes)
				console.log(this.formData)
				if (checkRes) {
					console.log(this.formData)
					uni.showLoading({
						title: 'Loading',
						mask: true
					})
					try{
						await createCard({
							type: 'CARD',
							name: this.formData.name,
							detail: this.formData
						})
						uni.hideLoading()
						uni.showToast({
							title: 'Success',
							icon: 'none'
						})
						uni.navigateBack()
					}catch(e){
						//TODO handle the exception
						uni.hideLoading()
						uni.showToast({
							title: 'Failed',
							icon: 'none'
						})
					}
					
				} else {
					uni.showToast({ title: graceChecker.error, icon: "none" });
				}
			}
		},
		
	}
</script>

<style lang="scss" scoped>
.footer {
	box-shadow: 0 -.3125rem .4375rem rgba(128,128,128,.1);
}
</style>
