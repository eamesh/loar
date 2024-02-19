<template>
  <div>
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
            <!-- <n-form-item label="用户名" path="name">
              <n-input v-model:value="formValue.name" placeholder="请输入用户名" />
            </n-form-item> -->
            <n-form-item label="用户邮箱" path="email">
              <n-input v-model:value="formValue.email" placeholder="请输入用户邮箱" />
            </n-form-item>
            <n-form-item label="用户密码" path="password">
              <n-input v-model:value="formValue.password" placeholder="请输入用户密码" />
            </n-form-item>

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
  import { createMember, updateMember, getMemberDetail } from '@/api/member';
  import { useRoute, useRouter } from 'vue-router';
  const route = useRoute();
  const router = useRouter();

  const rules = ref({
    name: {
      required: true,
      message: '请输入用户名',
      trigger: ['blur', 'change'],
      min: 6,
    },
    email: {
      required: true,
      type: 'email',
      message: '请输入邮箱',
      trigger: ['blur', 'change'],
    },
    password: {
      required: route.params.id ? false : true,
      message: '请输入密码',
      trigger: 'blur',
      min: 6,
    },
  });

  const formRef: any = ref(null);
  const message = useMessage();

  const defaultValueRef = () => ({
    email: '',
    name: '',
    password: '',
  });

  let formValue = reactive(defaultValueRef());

  async function loadDetail() {
    try {
      const result = await getMemberDetail(route.params.id);
      formValue.name = result.name;
      formValue.email = result.email;
    } catch (error) {
      console.log(error);
    }
  }

  if (route.params.id) {
    loadDetail();
  }

  function formSubmit() {
    formRef.value.validate(async (errors) => {
      if (!errors) {
        try {
          if (route.params.id) {
            await updateMember(route.params.id, formValue);
          } else {
            await createMember(formValue);
          }
          message.success('操作成功');
          router.push('/member/list');
        } catch (error) {
          // message.error('操作失败');
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
