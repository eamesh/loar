<template>
  <div class="console">
    <div class="w-[200px] py-4">
      <n-select :options="markets" v-model:value="current" />
    </div>
    <!--数据卡片-->
    <n-grid cols="1 s:2 m:4 l:5 xl:5 2xl:5" responsive="screen" :x-gap="12" :y-gap="8">
      <n-grid-item v-for="key in Object.keys(grids)" :key="key">
        <NCard
          :title="grids[key].label"
          :segmented="{ content: true, footer: true }"
          size="small"
          :bordered="false"
        >
          <template #header-extra>
            <n-tag :type="grids[key].type">{{ grids[key].tag }}</n-tag>
          </template>
          <div class="flex justify-between px-1 py-1">
            <div class="text-sn"> {{ grids[key].value }} </div>
          </div>
        </NCard>
      </n-grid-item>
    </n-grid>

    <!--导航卡片-->
    <!-- <div class="mt-4">
      <n-grid cols="1 s:2 m:3 l:8 xl:8 2xl:8" responsive="screen" :x-gap="16" :y-gap="8">
        <n-grid-item v-for="(item, index) in iconList" :key="index">
          <NCard content-style="padding-top: 0;" size="small" :bordered="false">
            <template #footer>
              <n-skeleton v-if="loading" size="medium" />
              <div class="cursor-pointer" v-else>
                <p class="flex justify-center">
                  <span>
                    <n-icon :size="item.size" class="flex-1" :color="item.color">
                      <component :is="item.icon" v-on="item.eventObject || {}" />
                    </n-icon>
                  </span>
                </p>
                <p class="flex justify-center"
                  ><span>{{ item.title }}</span></p
                >
              </div>
            </template>
          </NCard>
        </n-grid-item>
      </n-grid>
    </div> -->
  </div>
</template>
<script lang="ts" setup>
  import { getInfo } from '@/api/dashboard/console';
  import { onMounted, reactive, ref, watch } from 'vue';
  import { getMarkets } from '@/api/market/list';
  const markets = ref<any[]>([]);
  const current = ref('');
  const grids = reactive({
    memberCount: {
      label: '总用户量',
      value: 0,
      type: 'success',
      tag: '总',
    },
    totalRecharge: {
      label: '总入金',
      value: 0,
      type: 'success',
      tag: '总',
    },
    totalWithdraw: {
      label: '总出金',
      value: 0,
      type: 'success',
      tag: '总',
    },
    todayRecharge: {
      label: '今天入金量',
      value: 0,
      type: 'warning',
      tag: '日',
    },
    todayRegisterCount: {
      label: '今日新增用户',
      value: 0,
      type: 'warning',
      tag: '日',
    },

    todayWithdraw: {
      label: '今日出金',
      value: 0,
      type: 'warning',
      tag: '日',
    },
    yesterdayMemberCount: {
      label: '昨日新增用户',
      value: 0,
      type: 'warning',
      tag: '日',
    },
    yesterdayRecharge: {
      label: '昨日入金',
      value: 0,
      type: 'warning',
      tag: '日',
    },
    yesterdayWithdraw: {
      label: '昨日出金',
      value: 0,
      type: 'warning',
      tag: '日',
    },
    weekRecharge: {
      label: '本周入金',
      value: 0,
      type: 'error',
      tag: '周',
    },
    weekRegisterCount: {
      label: '本周新增用户',
      value: 0,
      type: 'error',
      tag: '周',
    },
    weekWithdraw: {
      label: '本周出金',
      value: 0,
      type: 'error',
      tag: '周',
    },
    monthRecharge: {
      label: '本月入金',
      value: 0,
      type: 'info',
      tag: '月',
    },
    monthRegisterCount: {
      label: '本月新增用户量',
      value: 0,
      type: 'info',
      tag: '月',
    },
    monthWithdraw: {
      label: '本月出金量',
      value: 0,
      type: 'info',
      tag: '月',
    },
  });

  async function requestInfo() {
    const results = await getInfo({
      market: current.value,
    });
    console.log(results);

    Object.keys(results).length &&
      Object.keys(results).forEach((key) => {
        console.log(grids[key]);
        grids[key].value = results[key];
        console.log(results[key]);
      });
  }

  const loadMarkets = async () => {
    const result = await getMarkets();
    markets.value = result.map((item) => {
      return {
        label: item.code,
        value: item.code,
      };
    });

    current.value = markets.value[0].value;
    await requestInfo();
  };

  loadMarkets();

  watch(
    () => current.value,
    () => {
      requestInfo();
    }
  );

  onMounted(async () => {
    // const data = await getConsoleInfo();
    // visits.value = data.visits;
    // saleroom.value = data.saleroom;
    // orderLarge.value = data.orderLarge;
    // volume.value = data.volume;
    // loading.value = false;
  });
</script>

<style lang="less" scoped></style>
