<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="140"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="市场" path="market">
              <n-select
                v-model:value="formValue.market"
                :options="markets"
                placeholder="选择市场"
              />
            </n-form-item>
            <n-form-item label="股票名称" path="name">
              <n-input placeholder="股票名称" v-model:value="formValue.name" />
            </n-form-item>
            <n-form-item label="股票代码" path="code">
              <n-input v-model:value="formValue.code" />
            </n-form-item>
            <n-form-item label="招股价" path="issuePrice">
              <n-input-number placeholder="招股价" v-model:value="formValue.issuePrice" />
            </n-form-item>
            <n-form-item label="开始认购时间" path="startAt">
              <n-date-picker type="date" v-model:value="formValue.startAt" />
            </n-form-item>
            <n-form-item label="截止认购时间" path="endAt">
              <n-date-picker type="date" v-model:value="formValue.endAt" />
            </n-form-item>
            <n-form-item label="上市日" path="upAt">
              <n-date-picker type="date" v-model:value="formValue.upAt" />
            </n-form-item>
            <n-form-item label="发行量" path="circulation">
              <n-input-number placeholder="输入发行量" v-model:value="formValue.circulation" />
            </n-form-item>
            <!-- <n-form-item label="剩余发行量" path="remainCirculation">
              <n-input-number
                placeholder="输入剩余发行量"
                v-model:value="formValue.remainCirculation"
              />
            </n-form-item> -->
            <n-form-item label="发行价（已上市）" path="ipoPrice">
              <n-input-number placeholder="" v-model:value="formValue.ipoPrice" />
            </n-form-item>
            <n-form-item label="公布结果日" path="resultAt">
              <n-date-picker type="date" v-model:value="formValue.resultAt" />
            </n-form-item>
            <n-form-item label="认购数量价格" path="subAmount">
              <n-dynamic-input
                v-model:value="formValue.subAmount"
                item-style="margin-bottom: 0;"
                :on-create="onCreate"
                #="{ index }"
              >
                <div style="display: flex">
                  <!--
          通常，path 的变化会导致 form-item 验证内容或规则的改变，所以 naive-ui 会清理掉
          表项已有的验证信息。但是这个例子是个特殊情况，我们明确的知道，path 的改变不会导致
          form-item 验证内容和规则的变化，所以就 ignore-path-change
        -->
                  <n-form-item
                    ignore-path-change
                    :show-label="false"
                    :path="`subAmount[${index}].amount`"
                    :rule="rules.subAmount"
                  >
                    <n-input
                      v-model:value="formValue.subAmount[index].amount"
                      placeholder="数量"
                      @keydown.enter.prevent
                    />
                    <!--
            由于在 input 元素里按回车会导致 form 里面的 button 被点击，所以阻止了默认行为
          -->
                  </n-form-item>
                  <div style="height: 34px; line-height: 34px; margin: 0 8px"> = </div>
                  <n-form-item
                    ignore-path-change
                    :show-label="false"
                    :path="`subAmount[${index}].price`"
                    :rule="rules.subAmount"
                  >
                    <n-input
                      v-model:value="formValue.subAmount[index].price"
                      placeholder="价格"
                      @keydown.enter.prevent
                    />
                  </n-form-item>
                </div>
              </n-dynamic-input>
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">提交预约</n-button>
                <n-button @click="resetForm">重置</n-button>
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, unref, reactive } from 'vue';
  import { useMessage } from 'naive-ui';
  import { getMarkets } from '@/api/market/list';
  import { createSubscribe, getSubscribeDetail, updateSubscribeDetail } from '@/api/subscribe';
  import { useRoute, useRouter } from 'vue-router';
  import dayjs from 'dayjs';

  const route = useRoute();
  const router = useRouter();
  const markets = ref([]);
  const rules = {
    name: {
      required: true,
      message: '请输入股票名称',
      trigger: ['blur', 'change'],
    },
    market: {
      required: true,
      message: '请输入市场',
      trigger: 'blur',
    },
    code: {
      required: true,
      message: '请输入股票代码',
      trigger: ['input'],
    },
    issuePrice: {
      required: true,
      type: 'number',
      message: '请输入招股价',
      trigger: ['blur'],
    },
    ipoPrice: {
      required: true,
      type: 'number',
      message: '请输入发行价',
      trigger: ['blur', 'change'],
    },
    startAt: {
      required: true,
      type: 'date',
      message: '请选择开始认购时间',
      trigger: ['blur', 'change'],
    },
    endAt: {
      required: true,
      type: 'date',
      message: '请选择截止认购时间',
      trigger: ['blur', 'change'],
    },
    upAt: {
      required: true,
      type: 'date',
      message: '请选择上市日期',
      trigger: ['blur', 'change'],
    },
    resultAt: {
      required: true,
      type: 'date',
      message: '请选择公布结果日',
      trigger: ['blur', 'change'],
    },
    circulation: {
      required: true,
      type: 'number',
      message: '请输入发行量',
      trigger: 'change',
    },
    // remainCirculation: {
    //   required: true,
    //   type: 'number',
    //   message: '请输入剩余发行量',
    //   trigger: 'change',
    // },
    subAmount: {
      trigger: 'input',
      validator(_, value: string) {
        console.log(_, value, 'asd');
        if (!value.length) return new Error('请输入值');
        return true;
      },
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();
  function onCreate() {
    return {
      name: '',
      value: '',
    };
  }
  const defaultValueRef = () => ({
    name: '',
    market: '',
    code: '',
    startAt: null,
    endAt: null,
    upAt: null,
    circulation: '',
    // remainCirculation: '',
    ipoPrice: '',
    issuePrice: '',
    resultAt: null,
    subAmount: [{ amount: '', price: '' }],
  });

  let formValue = reactive(defaultValueRef());

  const loadMarkets = async () => {
    const result = await getMarkets();
    markets.value = result.map((item) => {
      return {
        label: item.code,
        value: item.code,
      };
    });
  };

  loadMarkets();

  async function loadDetail() {
    try {
      const result = await getSubscribeDetail(route.params.id);
      formValue = Object.assign(unref(formValue), {
        name: result.name,
        market: result.market.code,
        code: result.code,
        startAt: dayjs(result.startAt).unix() * 1000,
        endAt: dayjs(result.endAt).unix() * 1000,
        upAt: dayjs(result.upAt).unix() * 1000,
        circulation: result.circulation,
        // remainCirculation: result.remainCirculation,
        ipoPrice: +result.ipoPrice,
        issuePrice: +result.issuePrice,
        resultAt: dayjs(result.resultAt).unix() * 1000,
        subAmount: result.subAmount,
      });
    } catch (error) {}
  }

  if (route.params.id) {
    loadDetail();
  }

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          if (route.params.id) {
            await updateSubscribeDetail(route.params.id, formValue);
          } else {
            await createSubscribe(formValue);
          }
          message.success('操作成功');
          router.push('/subscribe/list');
        } catch (error) {}
      } else {
        message.error('验证失败，请填写完整信息');
      }
    });
  }

  function resetForm() {
    formRef.value.restoreValidation();
    formValue = Object.assign(unref(formValue), defaultValueRef());
  }
</script>
