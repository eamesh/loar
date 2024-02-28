<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="参数配置" />
    </div>
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
            <n-form-item label="HKD转USD汇率" path="hkd">
              <n-input-number v-model:value="formValue.hkd" placeholder="" />
            </n-form-item>
            <n-form-item label="USD充值地址" path="usd">
              <n-input placeholder="" v-model:value="formValue.usd" />
            </n-form-item>
            <n-form-item label="每笔费率" path="fee_rate">
              <n-input-number placeholder="" v-model:value="formValue.fee_rate" />
            </n-form-item>
            <!-- <n-form-item label="最大出金" path="max_withdraw">
              <n-input-number placeholder="" v-model:value="formValue.max_withdraw" />
            </n-form-item> -->
            <!-- <n-form-item label="最小出金" path="min_withdraw">
              <n-input-number placeholder="" v-model:value="formValue.min_withdraw" />
            </n-form-item> -->

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
  import { saveSetting, getSystemSettings } from '@/api/setting';

  const rules = {
    hkd: {
      required: true,
      message: '请输入汇率',
      type: 'number',
      trigger: ['blur', 'change'],
    },
    usd: {
      required: true,
      message: '请输入充值地址',
      trigger: 'blur',
    },
    fee_rate: {
      required: true,
      message: '请输入每笔费率',
      type: 'number',

      trigger: 'blur',
    },
    max_withdraw: {
      required: true,
      message: '请输入最大出金',
      type: 'number',

      trigger: 'blur',
    },
    min_withdraw: {
      required: true,
      message: '请输入最小出金',
      type: 'number',

      trigger: 'blur',
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();

  const defaultValueRef = () => ({
    hkd: 0,
    usd: '',
    min_withdraw: 0,
    max_withdraw: 0,
    fee_rate: 0,
  });

  let formValue = reactive(defaultValueRef());

  async function loadSettings() {
    try {
      const result = await getSystemSettings();

      const obj: any = {};

      result.forEach((item) => {
        obj[item.key] = item.value;
      });

      formValue.hkd = obj?.exchange_rate.HKEX || 0;
      formValue.usd = obj?.usd.value || 0;
      formValue.min_withdraw = obj?.min_withdraw.value || 0;
      formValue.max_withdraw = obj?.max_withdraw.value || 0;
      formValue.fee_rate = obj?.fee_rate.value || 0;
    } catch (error) {}
  }

  loadSettings();

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          const data = [
            {
              key: 'exchange_rate',
              value: {
                HKEX: formValue.hkd,
              },
            },
            {
              key: 'usd',
              value: {
                value: formValue.usd,
              },
            },
            {
              key: 'min_withdraw',
              value: {
                value: formValue.min_withdraw,
              },
            },
            {
              key: 'max_withdraw',
              value: {
                value: formValue.max_withdraw,
              },
            },
            {
              key: 'fee_rate',
              value: {
                value: formValue.fee_rate,
              },
            },
          ];

          await saveSetting({
            data,
          });

          message.success('保存成功');
        } catch (error) {
          message.error('保存失败');
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
