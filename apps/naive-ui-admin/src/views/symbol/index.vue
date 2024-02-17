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
      :scroll-x="1090"
    >
      <template #tableTitle>
        <n-button type="primary" @click="addTable">
          <template #icon>
            <n-icon>
              <PlusOutlined />
            </n-icon>
          </template>
          新建
        </n-button>
      </template>

      <template #toolbar>
        <n-button type="primary" @click="reloadTable">刷新数据</n-button>
      </template>
    </BasicTable>

    <n-modal
      v-model:show="showModal"
      :show-icon="false"
      preset="dialog"
      title="新增证券"
      class="w-[600px]"
    >
      <n-form
        :model="formParams"
        :rules="rules"
        ref="formRef"
        label-placement="left"
        :label-width="120"
        class="py-4"
      >
        <n-form-item label="证券CODE" path="code">
          <n-input placeholder="请输入证券CODE" v-model:value="formParams.code" />
        </n-form-item>
        <n-form-item label="证券名称" path="name">
          <n-input placeholder="请输入证券名称" v-model:value="formParams.name" />
        </n-form-item>
        <n-form-item label="证券市场" path="market">
          <n-select
            placeholder="请选择证券市场"
            v-model:value="formParams.market"
            :options="markets"
          />
        </n-form-item>
        <n-form-item label="同步证券市场" path="syncMarket">
          <n-input placeholder="请输第三方同步证券市场" v-model:value="formParams.syncMarket" />
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
  import { getSymbolList } from '@/api/symbol/list';
  import { getMarkets } from '@/api/market/list';
  import { createStockSymbol } from '@/api/stock';

  import { columns } from './columns';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';

  const rules: FormRules = {
    code: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入证券CODE',
    },
    name: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入证券名称',
    },
    market: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请选择证券市场',
    },
    syncMarket: {
      required: true,
      trigger: ['blur', 'input'],
      message: '请输入第三方同步对应市场标识',
    },
  };
  const markets = ref([]);

  const schemas: FormSchema[] = [
    {
      field: 'code',
      component: 'NInput',
      label: '股票代码',
      componentProps: {
        placeholder: '',
        onInput: (e: any) => {
          console.log(e);
        },
      },
      // rules: [{ required: true, message: '', trigger: ['blur'] }],
    },
    {
      field: 'market',
      component: 'NSelect',
      label: '证券市场',
      componentProps: {
        placeholder: '请选择类型',
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
  let formParams = reactive({
    code: '',
    name: '',
    market: '',
    syncMarket: '',
    id: '',
  });

  const actionColumn = reactive({
    width: 220,
    title: '操作',
    key: 'action',
    fixed: 'right',
    render(record) {
      return h(TableAction as any, {
        style: 'button',
        actions: [
          {
            label: '编辑',
            onClick: handleEdit.bind(null, record),
            ifShow: true,
            type: 'primary',
          },
        ],
        dropDownActions: [],
        select: () => {},
      });
    },
  });

  const [register, { getFieldsValue }] = useForm({
    gridProps: { cols: '1 s:1 m:2 l:3 xl:4 2xl:4' },
    labelWidth: 90,
    schemas,
  });

  function addTable() {
    showModal.value = true;
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
    const result = await getSymbolList({ ...getFieldsValue(), ...res });
    console.log(result);
    return result;
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
          await createStockSymbol(formParams);
          reloadTable();
          const title = formParams?.id ? '编辑' : '新建';
          window['$message'].success(`${title}成功`);
          formParams = reactive({
            code: '',
            name: '',
            market: '',
            syncMarket: '',
            id: '',
          });

          showModal.value = false;
        } catch (error) {
          window['$message'].error('新建失败');
        }
        // setTimeout(() => {
        //   showModal.value = false;
        //   reloadTable();
        // });
      } else {
        window['$message'].error('请填写完整信息');
      }
      formBtnLoading.value = false;
    });
  }

  function handleEdit(record: Recordable) {
    showModal.value = true;
    formParams = Object.assign(formParams, {
      code: record.code,
      name: record.name,
      market: record.market,
      syncMarket: record.syncMarket,
      id: record.id,
    });
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
