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
      :scroll-x="1400"
    >
      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="设置中签">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="中签数量" path="amount">
          <n-input-number placeholder="请输入数量" v-model:value="formParams.amount" />
        </n-form-item>
        <n-form-item label="中签价格" path="money">
          <n-input-number placeholder="请输入价格" v-model:value="formParams.money" />
        </n-form-item>
      </n-form>

      <template #action>
        <n-space>
          <n-button @click="handleClose">取消</n-button>
          <n-button type="info" :loading="formBtnLoading" @click="confirmForm">确定</n-button>
        </n-space>
      </template>
    </n-modal>
  </n-card>
</template>

<script lang="ts" setup>
  import { h, reactive, ref } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  // import { getTableList } from '@/api/table/list';
  import { getStockSubscribeOrder } from '@/api/stock';
  import { updateMemberSubscribeType } from '@/api/subscribe';

  import { columns } from './columns';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  import { unref } from 'vue';

  const rules: FormRules = {
    amount: {
      required: true,
      trigger: ['blur', 'input'],
      type: 'number',
      message: '请输入数量',
    },
    money: {
      required: true,
      trigger: ['blur', 'input'],
      type: 'number',
      message: '请输入价格',
    },
  };

  const schemas: FormSchema[] = [
    {
      field: 'memberId',
      labelMessage: '',
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
      field: 'email',
      labelMessage: '',
      component: 'NInput',
      label: '用户邮箱',
      componentProps: {
        placeholder: '',
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'name',
      labelMessage: '',
      component: 'NInput',
      label: '股票名称',
      componentProps: {
        placeholder: '',
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'code',
      labelMessage: '',
      component: 'NInput',
      label: '股票代码',
      componentProps: {
        placeholder: '',
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },

    {
      field: 'status',
      component: 'NSelect',
      label: '状态',
      componentProps: {
        placeholder: '请选择状态',
        options: [
          {
            label: '已下单',
            value: 0,
          },
          {
            label: '已中签',
            value: 1,
          },
          {
            label: '未中签',
            value: 2,
          },
          {
            label: '已取消',
            value: 3,
          },
        ],
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
  let formParams = reactive({
    money: 0,
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
            label: '中签',
            onClick: handleEdit.bind(null, {
              record,
              type: 1,
            }),
            type: 'success',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return record.type === 0;
            },
          },
          {
            label: '部分中签',
            onClick: handleSubscribeSom.bind(null, record),
            type: 'success',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return record.type === 0;
            },
          },
          {
            label: '未中签',
            onClick: handleEdit.bind(null, {
              record,
              type: 2,
            }),
            type: 'default',
            ifShow: () => {
              return record.type === 0;
            },
          },
          {
            label: '取消',
            onClick: handleEdit.bind(null, {
              record,
              type: 3,
            }),
            type: 'warning',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return record.type === 0;
            },
          },
          {
            label: '已处理',
            type: 'primary',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return record.type !== 0;
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

  const loadDataTable = async (res) => {
    return await getStockSubscribeOrder({ ...getFieldsValue(), ...res });
    // return await getTableList({ ...getFieldsValue(), ...res });
  };

  function onCheckedRow(rowKeys) {
    console.log(rowKeys);
  }

  function reloadTable() {
    actionRef.value.reload();
  }

  const currentId = ref();

  function confirmForm(e) {
    e.preventDefault();
    formBtnLoading.value = true;
    formRef.value.validate(async (errors) => {
      if (!errors) {
        if (formParams.amount <= 0 || formParams.money <= 0) {
          window['$message'].error('请填写完整信息');
          return;
        }

        try {
          await updateMemberSubscribeType(currentId.value, {
            type: 4,
            ...formParams,
          });
          reloadTable();
        } catch (error) {}
        window['$message'].success('新建成功');
      } else {
      }
      formBtnLoading.value = false;
    });
  }

  async function handleEdit({ record, type }) {
    try {
      await updateMemberSubscribeType(record.id, {
        type,
      });
      reloadTable();
    } catch (error) {}
  }

  function handleSubmit(values: Recordable) {
    console.log(values);
    reloadTable();
  }

  function handleSubscribeSom(record) {
    showModal.value = true;
    currentId.value = record.id;
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }

  function handleClose() {
    showModal.value = false;
    formRef.value.restoreValidation();
    formParams = Object.assign(unref(formParams), () => ({
      money: 0,
      amount: 0,
    }));
  }
</script>

<style lang="less" scoped></style>
