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
      @update:checked-row-keys="onCheckedRow"
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
  import { getArticles } from '@/api/article';
  import { columns } from './columns';
  // import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  import { getMarkets } from '@/api/market/list';

  const markets = ref([]);

  const rules: FormRules = {
    // name: {
    //   required: true,
    //   trigger: ['blur', 'input'],
    //   message: '请输入名称',
    // },
    // address: {
    //   required: true,
    //   trigger: ['blur', 'input'],
    //   message: '请输入地址',
    // },
    // date: {
    //   type: 'number',
    //   required: true,
    //   trigger: ['blur', 'change'],
    //   message: '请选择日期',
    // },
  };

  const schemas: FormSchema[] = [
    {
      field: 'market',
      component: 'NSelect',
      label: '市场',
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
    name: '',
    address: '',
    date: null,
  });

  // const actionColumn = reactive({
  //   width: 100,
  //   title: '操作',
  //   key: 'action',
  //   fixed: 'right',
  //   render(record) {
  //     return h(TableAction as any, {
  //       style: 'button',
  //       actions: [
  //         // {
  //         //   label: '删除',
  //         //   onClick: handleDelete.bind(null, record),
  //         //   // 根据业务控制是否显示 isShow 和 auth 是并且关系
  //         //   ifShow: () => {
  //         //     return true;
  //         //   },
  //         // },
  //         {
  //           label: '编辑',
  //           onClick: handleEdit.bind(null, record),
  //           ifShow: () => {
  //             return true;
  //           },
  //         },
  //       ],
  //     });
  //   },
  // });

  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 80,
    schemas,
  });

  function addTable() {
    router.push('/news/create');
  }

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
    return await getArticles({ ...getFieldsValue(), ...res });
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
    // console.log('点击了编辑', record);
    router.push(`/news/${record.id}`);
  }

  function handleDelete(record: Recordable) {
    // console.log('点击了删除', record);
    window['$message'].info('点击了删除');
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
