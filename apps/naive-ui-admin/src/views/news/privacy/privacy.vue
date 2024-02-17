<template>
  <div class="p-4">
    <n-button type="primary" @click="handleSubmit">保存</n-button>
    <h1 class="mt-4">繁体中文</h1>
    <n-card :bordered="false" class="mt-4 proCard">
      <QuillEditor
        ref="quillEditorHant"
        :options="options"
        v-model:content="content['zh-Hant']"
        style="height: 350px"
        class="quillEditor"
      />
    </n-card>

    <h1 class="mt-4">英文</h1>
    <n-card :bordered="false" class="mt-4 proCard">
      <QuillEditor
        ref="quillEditorEn"
        :options="options"
        v-model:content="content.en"
        style="height: 350px"
        class="quillEditor"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  import { getSetting, upsertSetting } from '@/api/setting';
  const quillEditorHant = ref();
  const quillEditorEn = ref();
  import { useMessage } from 'naive-ui';
  const message = useMessage();

  const content = ref({
    'zh-Hant': '',
    en: '',
  });
  // const myContentHtml = ref(
  //   '<h4>Naive Ui Admin 是一个基于 vue3,vite2,TypeScript 的中后台解决方案</h4>'
  // );

  const options = reactive({
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'], // toggled buttons
        ['blockquote', 'code-block'],

        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
        [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
        [{ direction: 'rtl' }], // text direction

        [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
        [{ header: [1, 2, 3, 4, 5, 6, false] }],

        [{ color: [] }, { background: [] }], // dropdown with defaults from theme
        [{ font: [] }],
        [{ align: [] }],
        ['clean'],
        ['image'],
      ],
    },
    theme: 'snow',
    placeholder: '输入您喜欢的内容吧！',
  });

  async function handleSubmit() {
    try {
      const data = {
        en: quillEditorEn.value.getHTML(),
        'zh-Hant': quillEditorHant.value.getHTML(),
      };

      await upsertSetting({
        key: 'privacy',
        value: data,
      });

      try {
        await upsertSetting({
          key: 'privacy',
          value: data,
        });

        message.success('操作成功');
      } catch (error) {
        message.success('操作失败');
      }
    } catch (error) {}
    console.log(123);
    console.log(quillEditorEn.value.getHTML());
    console.log(quillEditorHant.value.getHTML());
  }

  async function loadPrivacy() {
    try {
      const result = await getSetting('privacy');

      if (result) {
        const { value } = result;
        quillEditorEn.value.setHTML(value.en);
        quillEditorHant.value.setHTML(value['zh-Hant']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  loadPrivacy();

  // function readyQuill() {
  //   console.log('Quill准备好了');
  // }

  // function getHtml() {
  //   myContentHtml.value = getHtmlVal();
  // }

  // function addText() {
  //   const html = getHtmlVal() + '新增加的内容';
  //   quillEditor.value.setHTML(html);
  // }

  // function addImg() {
  //   const html =
  //     getHtmlVal() +
  //     '<img style="width:100px" src="https://www.baidu.com/img/flexible/logo/pc/result.png"/>';
  //   quillEditor.value.setHTML(html);
  // }

  // function getHtmlVal() {
  //   return quillEditor.value.getHTML();
  // }
</script>

<style lang="less">
  .ql-toolbar.ql-snow {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #eee;
    margin-top: -10px;
  }

  .ql-container.ql-snow {
    border: none;
  }
</style>
