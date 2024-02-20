<template>
  <div class="p-4">
    <n-button type="primary" @click="handleSubmit">保存</n-button>
    <br />
    <br />

    <n-image width="100" :src="thumbComputed" v-if="!!thumbRef" />
    <n-upload
      :action="uploadUrl"
      :headers="{
        Authorization: `Bearer ${token}`,
      }"
      @finish="handleUpload"
    >
      <n-button>上传图片</n-button>
    </n-upload>
    <n-input v-model:value="mainTitleRef" placeholder="主标题" style="width: 400px" />

    <h1 class="mt-4">繁体中文</h1>
    <br />
    <n-input v-model:value="titleRef['zh-Hant']" placeholder="繁体中文标题" style="width: 400px" />
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
    <br />
    <n-input v-model:value="titleRef.en" placeholder="英文标题" style="width: 400px" />

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
  import { useRoute } from 'vue-router';
  import { getAricleById, updateArticle, createArticle } from '@/api/article';
  import { useUser } from '@/store/modules/user';
  const quillEditorHant = ref();
  const quillEditorEn = ref();
  import { useMessage } from 'naive-ui';
  import { computed } from 'vue';
  const message = useMessage();
  const route = useRoute();
  const titleRef = ref({
    en: '',
    'zh-Hant': '',
  });
  const mainTitleRef = ref('');
  const uploadUrl = ref(`${import.meta.env.VITE_GLOB_API_URL}/api/v1/user/upload`);

  const userStore = useUser();
  const token = userStore.getToken;

  const content = ref({
    'zh-Hant': '',
    en: '',
  });
  // const myContentHtml = ref(
  //   '<h4>Naive Ui Admin 是一个基于 vue3,vite2,TypeScript 的中后台解决方案</h4>'
  // );

  const thumbRef = ref('');

  const thumbComputed = computed(() => {
    return `${import.meta.env.VITE_GLOB_API_URL}/${thumbRef.value}`;
  });

  function handleUpload({ event }: any) {
    const data = JSON.parse(event.target.response);
    console.log(data);
    const file = data.file.path;

    thumbRef.value = `${file}`;
  }

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
      const content = {
        en: {
          title: titleRef.value.en,
          content: quillEditorEn.value.getHTML(),
        },
        'zh-Hant': {
          title: titleRef.value['zh-Hant'],
          content: quillEditorHant.value.getHTML(),
        },
      };

      try {
        if (route.params.id) {
          await updateArticle(route.params.id, {
            title: mainTitleRef.value,
            thumb: thumbRef.value,
            content,
          });
        } else {
          await createArticle({
            title: mainTitleRef.value,
            thumb: thumbRef.value,
            content,
          });
        }

        message.success('操作成功');
      } catch (error) {
        message.success('操作失败');
      }
    } catch (error) {}
    console.log(123);
    console.log(quillEditorEn.value.getHTML());
    console.log(quillEditorHant.value.getHTML());
  }

  async function loadDetail() {
    try {
      const result = await getAricleById(route.params.id);

      if (result) {
        const { content } = result;
        mainTitleRef.value = result.title;
        titleRef.value = {
          en: content.en.title,
          'zh-Hant': content['zh-Hant'].title,
        };
        thumbRef.value = result.thumb;
        quillEditorEn.value.setHTML(content.en.content);
        quillEditorHant.value.setHTML(content['zh-Hant'].content);
      }
    } catch (error) {
      console.log(error);
    }
  }

  if (route.params.id) {
    loadDetail();
  }

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
