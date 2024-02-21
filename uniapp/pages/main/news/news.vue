<template>
	<gui-page 
	:isLoading="pageLoading" 
	:apiLoadingStatus="apiLoadingStatus" 
	:loadmore="true" 
	@loadmorefun="getdata" 
	:refresh="true" 
	@reload="reload"
	:loadMoreText="loadTexts"
	ref="guipage">
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-4">
				<view class="rounded-md bg-white flex flex-row flex-nowrap justify-between p-3 gap-x-4"
					@click="$go(`/pages/article/article?id=${item.id}`, 'navigateTo')" v-for="(item,index) in lists" :key="item.id">
					<view class="basis-1/2">
						<view class="flex flex-col justify-between items-start overflow-hidden h-full">
							<view class="line-clamp-5 text-[26rpx]">{{ item.title }}</view>
							<view class="text-[#999] text-[20rpx] font-mono">{{ dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss") }}</view>
						</view>
					</view>
					<view class="basis-1/2">
						<gui-image :src="item.crawlerThumb" border-radius="20rpx" :width="340" :height="242"
							mode="cover"></gui-image>
					</view>
				</view>
			</view>
		</template>
	</gui-page>
</template>
<script>
	import {
		getArticleList
	} from '@/api/article.js'
import graceJS from '@/Grace6/js/grace.js';
	import { mapState } from 'pinia'
import { useAppStore } from '../../../store/app';
import dayjs from 'dayjs'
// 模拟页码
var page = 1;
export default {
	data() {
		return {
			lists         : [],
			pageLoading      : true,
			// 用于记录是否有 api 请求正在执行
			apiLoadingStatus : false,
			dayjs
		}
	},
	onLoad: function() {
		
	},
	onShow() {
		// 页码加载时第一次加载数据
		page = 1;
		this.lists = [];
		this.getdata();
	},
	computed: {
		...mapState(useAppStore, {
			language: 'language',
		}),
		loadTexts() {
			return ['',this.$t('loading'), this.$t('loading_success'), this.$t('empty')]
		},
	},
	methods: {
		reload : function(){
			page = 1;
			this.getdata(true);
		},
		getdata : async function(isReload){
			this.apiLoadingStatus = true;
			console.log('加载函数运行，页码 : ' + page);
			const result = await getArticleList({
				page: page,
				lang: this.language.key,
			});
			if(page >= 2){
				this.lists = this.lists.concat(result.list);
				// 加载完成后停止加载动画
				this.$refs.guipage.stopLoadmore();
				// 假定第3页加载了全部数据，通知组件不再加载更多
				// 实际开发由接口返回值来决定
				if(page >= result.pageCount){
					this.$refs.guipage.nomore();
				}
			}
			// 第一页数据
			else{
				this.lists    = result.list;
				this.pageLoading = false;
				// 加载完成后停止加载动画
				this.$refs.guipage.stopLoadmore();
				if(isReload){this.$refs.guipage.endReload();}
			}
			page++;
			this.apiLoadingStatus = false;
			if(isReload){
				this.$refs.guipage.toast(this.$t('refresh.completed'));
			}
		}
	}
}
</script>
<style scoped>
.demo{margin:30rpx; margin-bottom:0rpx; line-height:200rpx;}
</style>