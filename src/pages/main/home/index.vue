<script setup lang="ts">
const statusBarHeight = ref<number>(0)
const system = uni.getSystemInfoSync()
console.log(system.statusBarHeight)
statusBarHeight.value = system.statusBarHeight as number
const search = ref()
</script>

<template>
  <view flex flex-col>
    <view :style="{ paddingTop: 'var(--status-bar-height)' }" />
    <view>
      asd
      <uni-search-bar
        v-model="search"
      />
    </view>
    <AppLogos />
    <InputEntry />
    <uni-badge
      text="asd"
      type="default"
      size="normal"
    />
    <uni-dateformat
      :threshold="[0, 0]"
      format="yyyy/MM/dd hh:mm:ss"
    />
    <uni-countdown :day="1" :hour="1" :minute="12" :second="40" />
    123
    {{ $t('app.name') }}
  </view>
</template>

<style></style>

<route type="home" lang="json">
{
  "style": {
    "navigationBarTitleText": "首页"
  }
}
</route>
