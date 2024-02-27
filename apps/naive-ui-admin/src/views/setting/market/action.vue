<template>
  <div>
    <!-- <div class="n-layout-page-header">
      <n-card :bordered="false" title="基础表单"> 基础表单，用于向用户收集表单信息 </n-card>
    </div> -->
    <n-card :bordered="false" class="mt-4 proCard">
      <div class="BasicForm">
        <BasicForm
          submitButtonText="保存"
          layout="horizontal"
          :gridProps="{ cols: 1 }"
          :schemas="schemas"
          @submit="handleSubmit"
          @reset="handleReset"
          ref="formRef"
          @register="register"
        >
          <template #statusSlot="{ model, field }">
            <n-input v-model:value="model[field]" />
          </template>
        </BasicForm>
      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { BasicForm, FormActionType, FormSchema } from '@/components/Form/index';
  import { useMessage } from 'naive-ui';
  import { createMarket, getMarketDetail, updateMarketDetail } from '@/api/market';
  import { useRoute, useRouter } from 'vue-router';
  import { ref } from 'vue';
  const route = useRoute();
  const router = useRouter();
  const formRef = ref<FormActionType>();
  let instance: any = {};

  const schemas: FormSchema[] = [
    {
      field: 'code',
      component: 'NInput',
      label: '市场标识',
      componentProps: {
        placeholder: '请输入市场标识',
      },
      rules: [{ required: true, message: '请输入市场标识', trigger: ['blur'] }],
    },
    {
      field: 'currency',
      component: 'NInput',
      label: '市场货币',
      componentProps: {
        placeholder: '请输入货币',
      },
      rules: [{ required: true, message: '请输入货币', trigger: ['blur'] }],
    },
    {
      field: 'maxWithdrawal',
      component: 'NInput',
      label: '最大出金',
      componentProps: {
        placeholder: '请输入最大出金',
      },
      rules: [{ required: true, message: '请输入最大出金', trigger: ['blur'] }],
    },
    {
      field: 'minWithdrawal',
      component: 'NInput',
      label: '最小出金',
      componentProps: {
        placeholder: '请输入最小出金',
      },
      rules: [{ required: true, message: '请输入最小出金', trigger: ['blur'] }],
    },
    {
      field: 'feeRate',
      component: 'NInput',
      label: '手续费率',
      componentProps: {
        placeholder: '请输入手续费率',
      },
      rules: [{ required: true, message: '请输入手续费率', trigger: ['blur'] }],
    },
    // {
    //   field: 'headSymbols',
    //   component: 'NInput',
    //   label: '市场头部证券列表名称',
    //   componentProps: {
    //     placeholder: '请输入市场头部证券列表名称',
    //   },
    //   rules: [{ required: true, message: '请输入市场头部证券列表名称', trigger: ['blur'] }],
    // },
    {
      field: 'online',
      component: 'NSwitch',
      label: '是否上线',
      componentProps: {
        defaultValue: 1,
        checkedValue: 1,
        uncheckedValue: 0,
      },
    },
    {
      field: 'sort',
      component: 'NInputNumber',
      label: '排序',
      componentProps: {
        placeholder: '请输入排序',
      },
      // rules: [{ required: true, message: '请输入排序', trigger: ['blur'] }],
    },
  ];

  const message = useMessage();

  if (route.params.id) {
    getDetail();
  }

  function register(opts: FormActionType) {
    console.log(opts);
    instance = opts;
  }

  async function getDetail() {
    try {
      const result = await getMarketDetail(route.params.id);
      instance.setFieldsValue(result);
    } catch (error) {}
  }

  async function handleSubmit(values: Recordable) {
    if (!values) {
      return message.error('请填写完整信息');
    }

    try {
      if (!route.params.id) {
        await createMarket(values);

        return;
      }

      delete values.id;
      await updateMarketDetail(route.params.id, values);

      console.log(values);
      message.success('操作成功');
      router.push('/setting/market');
    } catch (error) {}
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped>
  .BasicForm {
    width: 550px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
  }
</style>
