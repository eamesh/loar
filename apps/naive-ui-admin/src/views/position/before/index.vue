<template>
  <n-card :bordered="false" class="proCard">
    <BasicForm @register="register" @submit="handleSubmit" @reset="handleReset">
      <template #statusSlot="{ model, field }">
        <n-input v-model:value="model[field]" />
      </template>
    </BasicForm>

    <BasicTable
      :columns="columns"
      :request="loadDataTable"
      :row-key="(row:any) => row.id"
      ref="actionRef"
      :actionColumn="actionColumn"
      @update:checked-row-keys="onCheckedRow"
      :scroll-x="2000"
    >
      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="限价">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="限价" path="price">
          <n-input disabled="" v-model:value="currentRecord.price" />
        </n-form-item>
        <n-form-item label="数量" path="">
          <n-input disabled="" v-model:value="currentRecord.amount" />
        </n-form-item>
        <n-form-item label="成交数量" path="amount">
          <n-input-number
            placeholder="请输入成交数量"
            v-model:value="formParams.amount"
            :max="currentRecord.amount"
          />
        </n-form-item>
      </n-form>

      <template #action>
        <n-space>
          <n-button @click="() => (showModal = false)">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { reactive, ref, h } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  import { getPostions, updateMemberPostionType } from '@/api/stock';
  import { getMarkets } from '@/api/market/list';
  import { columns } from './columns';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  const markets = ref([]);
  const currentRecord = ref<any>({});
  const rules: FormRules = {
    amount: {
      required: true,
      type: 'number',
      trigger: ['blur', 'input'],
      message: '',
    },
  };

  const schemas: FormSchema[] = [
    {
      field: 'memberId',
      component: 'NInput',
      label: '用户ID',
      componentProps: {
        placeholder: '',
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'code',
      component: 'NInput',
      label: '股票代码',
      componentProps: {
        placeholder: '',
      },
    },
    {
      field: 'mode',
      component: 'NSelect',
      label: '交易模式',
      componentProps: {
        placeholder: '请选择交易模式',
        options: [
          {
            label: '买多',
            value: 0,
          },
          {
            label: '买空',
            value: 1,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'status',
      component: 'NSelect',
      label: '持仓状态',
      componentProps: {
        placeholder: '请选择持仓状态',
        options: [
          {
            label: '持仓中',
            value: 0,
          },
          {
            label: '已平仓',
            value: 1,
          },
        ],
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'market',
      component: 'NSelect',
      label: '持仓市场',
      componentProps: {
        placeholder: '请选择市场',
        options: markets,
        onUpdateValue: (e: any) => {
          console.log(e);
        },
      },
    },
  ];

  const router = useRouter();
  const formRef: any = ref(null);
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const formParams = reactive({
    amount: 0,
  });

  const actionColumn = reactive({
    width: 320,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '确定',
            onClick: handleTypePosition.bind(null, record),
            type: 'primary',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
          },
          {
            label: '取消',
            type: 'error',
            onClick: handleCancelPostion.bind(null, record),
            ifShow: () => {
              return true;
            },
          },
        ],
      });
    },
  });

  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });

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

  const loadDataTable = async (res) => {
    return await getPostions({ ...getFieldsValue(), ...res, status: 2, isBefore: true });
    // return await getTableList({ ...getFieldsValue(), ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function reloadTable() {
    actionRef.value.reload();
  }

  function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          await updateMemberPostionType(currentRecord.value.id, {
            amount: formParams.amount,
          });
          reloadTable();
          window['$message'].success('操作成功');
          showModal.value = false;
        } catch (error) {
          window['$message'].error('操作失败');
        }
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
  }

  function handleTypePosition(record: Recordable) {
    console.log('点击了编辑', record);
    currentRecord.value = record;
    formParams.amount = record.amount;
    showModal.value = true;
  }

  async function handleCancelPostion(record: Recordable) {
    console.log('点击了删除', record);
    try {
      await updateMemberPostionType(record.id, {
        status: 3,
      });
      reloadTable();
      window['$message'].success('操作成功');
    } catch (error) {
      window['$message'].error('操作失败');
    }
  }

  function handleSubmit(values: Recordable) {
    console.log(values);
    reloadTable();
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }
</script>

<style lang="less" scoped></style>
