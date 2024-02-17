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
      :scroll-x="2400"
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

    <n-modal v-model:show="showModal" :show-icon="false" preset="dialog" title="新增用户">
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

    <n-modal v-model:show="showModalRecharge" :show-icon="false" preset="dialog" title="充值">
      <n-form
        :model="formParamsRecharge"
        :rules="rulesRecharge"
        ref="formRechargeRef"
        label-placement="left"
        :label-width="80"
        class="py-4"
      >
        <n-form-item label="证券市场" path="market">
          <n-select :options="markets" v-model:value="formParamsRecharge.market" name="market" />
        </n-form-item>
        <n-form-item label="类型" path="type">
          <n-radio
            :checked="formParamsRecharge.type === '0'"
            value="0"
            name="type"
            @change="handleChangeType"
          >
            充钱
          </n-radio>
          <n-radio
            :checked="formParamsRecharge.type === '1'"
            value="1"
            name="type"
            @change="handleChangeType"
          >
            扣钱
          </n-radio>
        </n-form-item>
        <n-form-item label="调整金额" path="money">
          <n-input-number placeholder="" v-model:value="formParamsRecharge.money" />
        </n-form-item>
      </n-form>

      <template #action>
        <n-space>
          <n-button @click="handleCloseRecharge">取消</n-button>
          <n-button type="info" :loading="formRechargeBtnLoading" @click="confirmFormRecharge"
            >确定</n-button
          >
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
  import { getMembers, changeMemberRecharge } from '@/api/member';
  import { getMarkets } from '@/api/market/list';
  import { PlusOutlined } from '@vicons/antd';
  import { useRouter } from 'vue-router';
  import { type FormRules } from 'naive-ui';
  import { BasicColumn } from '@/components/Table';
  import { NTag } from 'naive-ui';

  const markets = ref([]);
  const columns: BasicColumn<any>[] = ref([]);

  const loadMarkets = async () => {
    columns.value = [
      {
        title: '用户ID',
        key: 'id',
        width: 80,
      },
      {
        title: '邮箱',
        key: 'email',
      },
      {
        title: '用户状态',
        key: 'status',
        render(row) {
          const types: any = [
            {
              title: '禁用',
              type: 'error',
            },
            {
              title: '启用',
              type: 'success',
            },
          ];
          return h(
            NTag,
            {
              type: types[row.status].type,
            },
            types[row.status].title
          );
        },
      },
      {
        title: '审核状态',
        key: 'type',
        render(row) {
          const types: any = [
            {
              title: '待审核',
              type: '',
            },
            {
              title: '审核通过',
              type: 'success',
            },
            {
              title: '审核拒绝',
              type: 'error',
            },
          ];
          return h(
            NTag,
            {
              type: types[row.type].type,
            },
            types[row.type].title
          );
        },
      },
    ];
    const result = await getMarkets();
    markets.value = result.map((item) => {
      columns.value.push({
        title: `可用余额${item.code}`,
        key: `accountBalance.${item.code}.balance`,
      });
      columns.value.push({
        title: `冻结余额${item.code}`,
        key: `accountBalance.${item.code}.unBalance`,
      });
      return {
        label: item.code,
        value: item.code,
      };
    });

    // columns.value = Object.assign(columns.value, [
    //   {
    //     title: '用户状态',
    //     key: 'status',
    //   },
    //   {
    //     title: '审核状态',
    //     key: 'type',
    //   },
    // ]);
  };

  loadMarkets();

  const rules: FormRules = {};
  const rulesRecharge: FormRules = {
    market: {
      required: true,
      trigger: ['change'],
      message: '请选择',
    },

    money: {
      type: 'number',
      required: true,
      trigger: ['blur', 'change'],
      message: '请输入',
    },
  };

  const schemas: FormSchema[] = [
    {
      field: 'id',
      component: 'NInput',
      label: '用户ID',
    },
    {
      field: 'email',
      component: 'NInput',
      label: '邮箱',
    },
    {
      field: 'status',
      component: 'NSelect',
      label: '用户状态',
      componentProps: {
        placeholder: '请选择类型',
        options: [
          {
            label: '启用',
            value: 0,
          },
          {
            label: '禁用',
            value: 1,
          },
        ],
      },
    },
    {
      field: 'type',
      component: 'NSelect',
      label: '审核状态',
      componentProps: {
        placeholder: '请选择类型',
        options: [
          {
            label: '待审核',
            value: 0,
          },
          {
            label: '审核通过',
            value: 1,
          },
          {
            label: '审核拒绝',
            value: 2,
          },
          {
            label: '未申请开户',
            value: 4,
          },
        ],
      },
    },
  ];

  const router = useRouter();
  const formRef: any = ref(null);
  const formRechargeRef: any = ref(null);
  const actionRef = ref();

  const showModal = ref(false);
  const showModalRecharge = ref(false);
  const formBtnLoading = ref(false);
  const formRechargeBtnLoading = ref(false);
  const formParams = reactive({
    name: '',
    address: '',
    date: null,
  });

  let formParamsRecharge = reactive({
    market: '',
    type: '0',
    money: 0,
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
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
          },
          {
            label: '手动充值',
            onClick: handleRecharge.bind(null, record),
            type: 'primary',
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
            ifShow: () => {
              return true;
            },
          },
          {
            label: '删除',
            type: 'error',
            onClick: handleDelete.bind(null, record),
            // 根据业务控制是否显示 isShow 和 auth 是并且关系
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

  function addTable() {
    router.push('/member/create');
  }

  const loadDataTable = async (res) => {
    const result = await getMembers({ ...getFieldsValue(), ...res });
    console.log(result);
    return result;
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

  const recordId = ref(null);

  function confirmFormRecharge(e) {
    e.preventDefault();
    formRechargeBtnLoading.value = true;
    formRechargeRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          await changeMemberRecharge(recordId.value, formParamsRecharge);
          window['$message'].success('操作成功');
          reloadTable();
          showModalRecharge.value = false;
        } catch (error) {
          console.log(error);
          window['$message'].error('操作失败');
        }
      } else {
        window['$message'].error('请填写完整信息');
      }
      formRechargeBtnLoading.value = false;
    });
  }

  function handleEdit(record: Recordable) {
    router.push({ name: 'update-member', params: { id: record.id } });
  }

  function handleDelete(record: Recordable) {
    console.log('点击了删除', record);
    window['$message'].info('点击了删除');
  }

  function handleSubmit(values: Recordable) {
    console.log(values);
    reloadTable();
  }

  function handleRecharge(value: Recordable) {
    showModalRecharge.value = true;
    recordId.value = value.id;
  }

  function handleCloseRecharge() {
    showModalRecharge.value = false;
    formParamsRecharge = reactive({
      market: '',
      type: '0',
      money: 0,
    });
  }

  function handleReset(values: Recordable) {
    console.log(values);
  }

  function handleChangeType(e) {
    console.log(e.target.value);
    formParamsRecharge.type = (e.target as HTMLInputElement).value;
  }
</script>

<style lang="less" scoped></style>
