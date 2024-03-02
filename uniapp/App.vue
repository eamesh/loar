<script>
	import { mapState, mapActions } from 'pinia'
import { useAppStore } from './store/app'
import { requestUpgrade } from '@/api/upgrade.js'
export default {
	computed: {
		...mapState(useAppStore, {
			language: 'language'
		}),
		
	},
	methods: {
		...mapActions(useAppStore, [
			'getMarkets'
		])
	},
	onLaunch: async function () {
		await this.getMarkets()
		console.log('App Launch', this.language)
		this.$i18n.locale = this.language.key
		uni.setLocale(this.language.key)
	},
	onShow: function () {
		console.log('App Show')
	},
	onHide: function () {
		console.log('App Hide')
	},
	
}
</script>

<style lang="scss">
@import 'tailwindcss/base';
@import 'tailwindcss/utilities';
</style>
<!-- #ifndef APP-NVUE -->
<style lang="scss">
/* 加载框架核心样式 */
@import "./Grace6/css/grace.scss";
/* 加载深色模式适配样式 */
// @import "./Grace6/css/graceDark.scss";
/* 加载自定义样式 */
@import "./custom/custom.scss";
page{background:#f9f9f9;}
</style>
<!-- #endif -->
<!-- #ifdef APP-NVUE -->
<style lang="scss">
/* 加载框架核心样式 */
@import "./Grace6/css/grace.scss";
/* 加载自定义样式 */
@import "./custom/custom.scss";
.gui-icons{font-family:graceuiiconfont; font-style:normal;}
</style>
<!-- #endif -->