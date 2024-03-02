<template>
  <div>
    <div class="n-layout-page-header">
      <n-card :bordered="false" title="更新包" />
    </div>
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
            <n-form-item label="版本号" path="version">
              <n-input v-model:value="formValue.version" placeholder="输入版本号" />
            </n-form-item>
            <n-form-item label="Andriod" path="andriod">
              <n-upload
                :max="1"
                :action="uploadUrl"
                :multiple="false"
                :headers="{
                  Authorization: `Bearer ${token}`,
                }"
                v-model:file-list="fileList"
                @finish="handleUpload"
                @remove="handleRemove"
              >
                <n-button>上传 wgt</n-button>
              </n-upload>
            </n-form-item>

            <n-form-item label="IOS" path="ios">
              <n-upload
                :max="1"
                :action="uploadUrl"
                :multiple="false"
                :headers="{
                  Authorization: `Bearer ${token}`,
                }"
                v-model:file-list="fileListIos"
                @finish="handleUploadIos"
                @remove="handleRemoveIos"
              >
                <n-button>上传 wgt</n-button>
              </n-upload>
            </n-form-item>
            <div style="margin-left: 80px">
              <n-space>
                <n-button type="primary" @click="formSubmit">保存</n-button>
                <!-- <n-button @click="resetForm">重置</n-button> -->
              </n-space>
            </div>
          </n-form>
        </n-grid-item>
      </n-grid>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { useMessage } from 'naive-ui';
  import { useUser } from '@/store/modules/user';
  import { getSystemSettings, saveSetting } from '@/api/setting';

  const uploadUrl = ref(`${import.meta.env.VITE_GLOB_API_URL}/api/v1/user/upload`);
  const userStore = useUser();
  const token = userStore.getToken;
  const fileList = ref<any[]>([]);
  const fileListIos = ref<any[]>([]);

  const rules = {
    version: {
      required: true,
      message: '请输入版本号',
      trigger: ['blur', 'input'],
    },
    andriod: {
      required: true,
      message: '请上传 wgt',
      trigger: ['blur', 'input'],
    },
    ios: {
      required: true,
      message: '请上传 wgt',
      trigger: ['blur', 'input'],
    },
  };

  const formRef: any = ref(null);
  const message = useMessage();

  const defaultValueRef = () => ({
    version: '',
    andriod: '',
    ios: '',
  });

  let formValue = reactive(defaultValueRef());
  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          const data = [
            {
              key: 'version',
              value: {
                value: formValue.version,
              },
            },
            {
              key: 'andriod',
              value: {
                value: formValue.andriod,
              },
            },
            {
              key: 'ios',
              value: {
                value: formValue.ios,
              },
            },
          ];

          await saveSetting({
            data,
          });
          message.success('操作成功');
        } catch (error) {
          message.error('操作失败');
        }
      } else {
        message.error('验证失败，请填写完整信息');
      }
    });
  }

  async function loadSettings() {
    try {
      const result = await getSystemSettings();

      const obj: any = {};

      result.forEach((item) => {
        obj[item.key] = item.value;
      });

      formValue.version = obj?.version.value || 0;
      formValue.andriod = obj?.andriod.value || '';
      formValue.ios = obj?.ios.value || '';

      const name = formValue.andriod.substring(formValue.andriod.lastIndexOf('/') + 1);
      fileList.value = [
        {
          id: '1',
          name,
          status: 'finished',
        },
      ];

      const iosName = formValue.ios.substring(formValue.ios.lastIndexOf('/') + 1);
      fileListIos.value = [
        {
          id: '1',
          name: iosName,
          status: 'finished',
        },
      ];

      // formValue.usd = obj?.usd.value || 0;
      // formValue.min_withdraw = obj?.min_withdraw.value || 0;
      // formValue.max_withdraw = obj?.max_withdraw.value || 0;
      // formValue.fee_rate = obj?.fee_rate.value || 0;
    } catch (error) {}
  }

  loadSettings();

  function handleUpload({ event }: any) {
    const data = JSON.parse(event.target.response);
    console.log(data);
    const file = data.file.path;

    console.log(file);
    formValue.andriod = file;
  }

  function handleRemove() {
    formValue.andriod = '';
    fileList.value = [];
  }

  function handleUploadIos({ event }: any) {
    const data = JSON.parse(event.target.response);
    console.log(data);
    const file = data.file.path;

    console.log(file);
    formValue.ios = file;
  }

  function handleRemoveIos() {
    formValue.ios = '';
    fileListIos.value = [];
  }

  // function resetForm() {
  //   formRef.value.restoreValidation();
  //   formValue = Object.assign(unref(formValue), defaultValueRef());
  // }
</script>
