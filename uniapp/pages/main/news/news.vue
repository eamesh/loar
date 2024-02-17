<template>
	<gui-page isSwitchPage :refresh="true" @reload="reload" :apiLoadingStatus="apiLoadingStatus"
		ref="guipage" @scroll="bodyScroll">
		<template v-slot:gBody>
			<view class="p-4 flex flex-col gap-y-4">
				<view class="rounded-md bg-white flex flex-row flex-nowrap justify-between p-3 gap-x-4"
					@click="$go(`/pages/article/article?id=${item.id}`, 'navigateTo')" v-for="(item,index) in lists" :key="item.id">
					<view class="basis-1/2">
						<view class="flex flex-col justify-between items-start overflow-hidden h-full">
							<view class="line-clamp-5 text-[26rpx]">{{ item.content[language.key].title }}</view>
							<view class="text-[#999] text-[20rpx] font-mono">{{ dayjs(item.createdAt).format("YYYY-MM-DD HH:mm:ss") }}</view>
						</view>
					</view>
					<view class="basis-1/2">
						<gui-image src="/static/img/article_01.jpg" border-radius="20rpx" :width="340" :height="242"
							mode="cover"></gui-image>
					</view>
				</view>

				<!-- <view class="rounded-md bg-white flex flex-row flex-nowrap justify-between p-3 gap-x-4"
					@click="$go('/pages/article/article', 'navigateTo')">
					<view class="basis-1/2">
						<view class="flex flex-col justify-between items-start overflow-hidden h-full">
							<view class="line-clamp-5 text-[26rpx]">財政赤字窟窿太大！ 美國未來三月長債發行規模再創歷史紀錄</view>
							<view class="text-[#999] text-[20rpx] font-mono">2024-02-02 07:49:59</view>
						</view>
					</view>
					<view class="basis-1/2">
						<gui-image src="/static/img/article_02.jpg" border-radius="20rpx" :width="340" :height="242"
							mode="cover"></gui-image>
					</view>
				</view> -->
			</view>
		</template>
	</gui-page>
</template>

<script>
	import {
		getArticleList
	} from '@/api/article.js'
	var data = [1, 2, 3, 4, 5, 6, 7, 8];
	import graceJS from '@/Grace6/js/grace.js';
	import { mapState } from 'pinia'
import { useAppStore } from '../../../store/app';
import dayjs from 'dayjs'
	// 模拟页码
	export default {
		data() {
			return {
				demoData: [],
				pageLoading: true,
				// 用于记录是否有 api 请求正在执行
				apiLoadingStatus: false,
				page: 1,
				lists: [],
				dayjs
			}
		},
		computed: {
			...mapState(useAppStore, {
				language: 'language'
			})
		},
		onShow: function() {
			// 页码加载时第一次加载数据
			this.page = 1;
			this.getdata();
		},
		methods: {
			// 数据加载函数
			// isReload 函数用于识别是不是下拉刷新执行的
			getdata: async function(isReload) {
				this.apiLoadingStatus = true;
				console.log('加载函数运行，页码 : ' + this.page);
				
				try{
					const result = await getArticleList({
						page: this.page
					});
					if (this.page >= 2) {
						this.lists = this.lists.concat(result.list.map(item => {
							return {
								...item,
								content: JSON.parse(item.content)
							}
						}));
					} else {
						this.lists = [];
						this.lists = result.list.map(item => {
							return {
								...item,
								content: JSON.parse(item.content)
							}
						});
						this.pageLoading = false;
						
						// 刷新
						if (isReload) {
							this.$refs.guipage.endReload();
						}
					}
					
					this.page = this.page+1
					this.apiLoadingStatus = false;
					if (isReload) {
						this.$refs.guipage.toast('数据已刷新');
					}
					console.log(this.lists)
				}catch(e){
					//TODO handle the exception
				}
				
			},
			reload: function() {
				this.page = 1;
				this.getdata(true);
			},
			// 滚动区域滚动事件
			bodyScroll: function(e) {
				//console.log(e);
				console.log(e.detail.scrollTop);
			}
		}
	}
</script>

<style>

</style>