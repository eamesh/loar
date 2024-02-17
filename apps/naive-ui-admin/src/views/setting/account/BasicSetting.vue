<template>
  <n-grid cols="2 s:2 m:2 l:3 xl:3 2xl:3" responsive="screen">
    <n-grid-item>
      <n-form :label-width="80" :model="formValue" :rules="rules" ref="formRef">
        <n-form-item label="密码" path="password">
          <n-input v-model:value="formValue.password" placeholder="请输入密码" />
        </n-form-item>

        <div>
          <n-space>
            <n-button type="primary" @click="formSubmit">更新基本信息</n-button>
          </n-space>
        </div>
      </n-form>
    </n-grid-item>
  </n-grid>
</template>

<script lang="ts" setup>
  import { reactive, ref } from 'vue';
  import { useMessage } from 'naive-ui';
  import { changePassword } from '@/api/user';

  const rules = {
    password: {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  };
  const formRef: any = ref(null);
  const message = useMessage();

  const formValue = reactive({
    password: '',
  });

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          await changePassword(formValue);
          message.success('验证成功');
        } catch (error) {}
      } else {
        message.error('验证失败，请填写完整信息');
      }
    });
  }
</script>
