import { result } from 'lodash'; import { useFormValues } from
'@/components/Form/src/hooks/useFormValues'; import { useRoute } from 'vue-router';
<template>
  <div>
    <n-card :bordered="false" class="mt-4 proCard">
      <n-grid cols="1 s:1 m:3 l:3 xl:3 2xl:3" responsive="screen">
        <n-grid-item offset="0 s:0 m:1 l:1 xl:1 2xl:1">
          <n-form
            :label-width="80"
            :model="formValue"
            :rules="rules"
            label-placement="left"
            ref="formRef"
            class="py-8"
          >
            <n-form-item label="证券市场" path="market">
              <n-select
                placeholder="请选择市场"
                :options="markets"
                v-model:value="formValue.market"
              />
            </n-form-item>
            <n-form-item label="股票代码" path="symbol">
              <n-input placeholder="请输入股票代码" v-model:value="formValue.symbol" />
            </n-form-item>
            <n-form-item label="点差范围" path="spreadScope">
              <n-input placeholder="请输入点差范围" v-model:value="formValue.spreadScope" />
            </n-form-item>
            <n-form-item label="数量范围" path="amountScope">
              <n-input placeholder="请输入数量范围" v-model:value="formValue.amountScope" />
            </n-form-item>
            <n-form-item label="频率范围" path="frequencyScope">
              <n-input placeholder="请输入频率范围" v-model:value="formValue.frequencyScope" />
            </n-form-item>
            <n-form-item label="开始周期" path="startAt">
              <n-input placeholder="请输入开始周期" v-model:value="formValue.startAt" />
            </n-form-item>
            <n-form-item label="结束周期" path="endAt">
              <n-input placeholder="请输入结束周期" v-model:value="formValue.endAt" />
            </n-form-item>
            <n-form-item label="状态" path="status">
              <n-select
                placeholder="请选择状态"
                :options="[
                  {
                    label: '正常',
                    value: 1,
                  },
                  {
                    label: '停止',
                    value: 0,
                  },
                ]"
                v-model:value="formValue.status"
              />
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">保存</n-button>
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
  import { BasicUpload } from '@/components/Upload';
  import { useGlobSetting } from '@/hooks/setting';
  import { getMarkets } from '@/api/market/list';
  import { createResource, updateResource, getResourceById } from '@/api/resource';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();

  const markets = ref([]);

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

  const rules = {
    name: {
      required: true,
      message: '请输入预约姓名',
      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();

  const defaultValueRef = () => ({
    market: '',
    symbol: '',
    spreadScope: '',
    amountScope: '',
    frequencyScope: '',
    startAt: '',
    endAt: '',
    status: '',
  });

  let formValue = reactive(defaultValueRef());

  async function loadDetail() {
    try {
      const result = await getResourceById(route.params.id);
      formValue = Object.assign(unref(formValue), {
        market: result.market,
        symbol: result.symbol,
        spreadScope: result.spreadScope,
        amountScope: result.amountScope,
        frequencyScope: result.frequencyScope,
        startAt: result.startAt,
        endAt: result.endAt,
        status: result.status,
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (route.params.id) {
    loadDetail();
  }

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          if (route.params.id) {
            updateResource(route.params.id, formValue);
          } else {
            await createResource(formValue);
          }
          router.push('/source/list');
          message.success('操作成功');
        } catch (error) {
          console.log(error);
        }
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
