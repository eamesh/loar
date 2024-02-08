<template>
	<view class="flex flex-col w-screen h-screen bg-white">
		<form>
			<view class="flex-1 overflow-auto w-full px-4 box-border">
				<view class="flex flex-col gap-y-3 mt-8">
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.name3" name="name3"
								@input="inputting" placeholder="舊密碼" />
							<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.name3"
								name="name3" @input="inputting" placeholder="舊密碼" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
					</view>
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.name3" name="name3"
								@input="inputting" placeholder="新密碼" />
							<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.name3"
								name="name3" @input="inputting" placeholder="新密碼" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
					</view>
					<view class="gui-form-item gui-bg-gray rounded-md">
						<view class="gui-form-body">
							<input type="password" class="gui-form-input" v-if="isPwd" v-model="formData.name3" name="name3"
								@input="inputting" placeholder="新密碼(確認)" />
							<input type="text" class="gui-form-input" v-if="!isPwd" :disabled="true" v-model="formData.name3"
								name="name3" @input="inputting" placeholder="新密碼(確認)" />
						</view>
						<text class="gui-form-icon gui-icons gui-text-center"
							:class="[!isPwd ? 'gui-primary-color' : 'gui-color-gray']" @click="changePwdType">&#xe609;</text>
					</view>
				</view>
			</view>
			<view class="bg-white footer px-4">
				<button type="default" class="gui-bg-primary gui-noborder w-full rounded-3xl py-1">
					<text class="gui-color-white gui-button-text">確認</text>
				</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					name1: '',
					name2: '',
					name3: '',
					name4: '',
				},
				isPwd: true,
			}
		},
		methods: {

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