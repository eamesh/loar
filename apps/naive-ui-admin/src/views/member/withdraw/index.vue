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

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新建">
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="名称" path="name">
          <n-input placeholder="请输入名称" v-model:value="formParams.name" />
        </n-form-item>
        <n-form-item label="地址" path="address">
          <n-input type="textarea" placeholder="请输入地址" v-model:value="formParams.address" />
        </n-form-item>
        <n-form-item label="日期" path="date">
          <n-date-picker type="datetime" placeholder="请选择日期" v-model:value="formParams.date" />
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
  import { h, reactive, ref } from 'vue';
  import { BasicTable, TableAction } from '@/components/Table';
  import { BasicForm, FormSchema, useForm } from '@/components/Form/index';
  // import { getTableList } from '@/api/table/list';
  import { getWithdrawListAdmin, updateWithdrawStatus } from '@/api/member';
  import { columns } from './columns';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';

  const rules: FormRules = {};

  const schemas: FormSchema[] = [
    // {
    //   field: 'type',
    //   component: 'NSelect',
    //   label: '类型',
    //   componentProps: {
    //     placeholder: '请选择类型',
    //     options: [
    //       {
    //         label: '入金',
    //         value: 1,
    //       },
    //       {
    //         label: '出金',
    //         value: 2,
    //       },
    //     ],
    //     onUpdateValue: (e: any) => {
    //       console.log(e);
    //     },
    //   },
    // },
    {
      field: 'id',
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
      component: 'NInput',
      label: '邮箱',
      componentProps: {
        placeholder: '',
        showButton: false,
        onInput: (e: any) => {
          console.log(e);
        },
      },
    },
    // {
    //   field: 'status',
    //   component: 'NSelect',
    //   label: '状态',
    //   componentProps: {
    //     placeholder: '请选择类型',
    //     options: [
    //       {
    //         label: '带转账',
    //         value: 1,
    //       },
    //       {
    //         label: '已成功',
    //         value: 2,
    //       },
    //       {
    //         label: '已取消',
    //         value: 3,
    //       },
    //       {
    //         label: '已上传回单',
    //         value: 4,
    //       },
    //       {
    //         label: '入金待审核',
    //         value: 5,
    //       },
    //     ],
    //     onUpdateValue: (e: any) => {
    //       console.log(e);
    //     },
    //   },
    // },
    // {
    //   field: 'type',
    //   component: 'NSelect',
    //   label: '分类状态',
    //   componentProps: {
    //     placeholder: '请选择用户审核状态',
    //     options: [
    //       {
    //         label: '客户入金',
    //         value: 1,
    //       },
    //       {
    //         label: '手动入金',
    //         value: 2,
    //       },
    //       {
    //         label: '虚拟加金',
    //         value: 3,
    //       },
    //       {
    //         label: '其它',
    //         value: 4,
    //       },
    //       {
    //         label: '客户出金',
    //         value: 5,
    //       },
    //       {
    //         label: '客户入金',
    //         value: 5,
    //       },
    //     ],
    //     onUpdateValue: (e: any) => {
    //       console.log(e);
    //     },
    //   },
    // },
  ];

  const router = useRouter();
  const formRef: any = ref(null);
  const actionRef = ref();

  const showModal = ref(false);
  const formBtnLoading = ref(false);
  const formParams = reactive({
    name: '',
    address: '',
    date: null,
  });

  const actionColumn = reactive({
    width: 300,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '已放款',
            onClick: handleStatus.bind(null, {
              record,
              status: 1,
            }),
            type: 'success',
            ifShow: () => {
              return record.status === 0;
            },
          },
          {
            label: '拒绝',
            type: 'error',
            onClick: handleStatus.bind(null, {
              record,
              status: -1,
            }),
            ifShow: () => {
              return record.status === 0;
            },
          },
          {
            label: '已处理',
            type: 'primary',
            ifShow: () => {
              return record.status === 1 || record.status === -1;
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
    return await getWithdrawListAdmin({ ...getFieldsValue(), ...res });
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
    formRef.value.validate((errors) => {
      if (!errors) {
        window['$message'].success('新建成功');
        setTimeout(() => {
          showModal.value = false;
          reloadTable();
        });
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
  }

  function handleEdit(record: Recordable) {
    console.log('点击了编辑', record);
    router.push({ name: 'basic-info', params: { id: record.id } });
  }

  async function handleStatus({ record, status }: { record: Recordable; status: number }) {
    try {
      await updateWithdrawStatus(record.id, {
        status,
      });

      reloadTable();
      window['$message'].success('操作成功');
    } catch (error) {
      window['$message'].fail('操作失败');
    }
  }

  function handleSubmit(values: Recordable) {
    console.log(values);
    reloadTable();
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }

  function handleCustom(record: Recordable) {}
</script>

<style lang="less" scoped></style>
