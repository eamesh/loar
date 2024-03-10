<template>
  <div class="p-4">
    <n-button type="primary" @click="handleSubmit">保存</n-button>
    <br />
    <br />
    <div class="w-[200px] mb-2">
      <n-select :options="markets" v-model:value="current" />
    </div>
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
    <h1 class="mt-4">标题</h1>

    <n-input v-model:value="mainTitleRef" placeholder="主标题" style="width: 400px" />

    <br />
    <n-card :bordered="false" class="mt-4 proCard">
      <QuillEditor
        ref="quillEditor"
        :options="options"
        v-model:content="content"
        style="height: 350px"
        class="quillEditor"
      />
    </n-card>
  </div>
</template>

<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  import { getMarkets } from '@/api/market/list';
  import { QuillEditor } from '@vueup/vue-quill';
  import '@vueup/vue-quill/dist/vue-quill.snow.css';
  import { useRoute, useRouter } from 'vue-router';
  import { getAricleById, updateArticle, createArticle } from '@/api/article';
  import { useUser } from '@/store/modules/user';
  const quillEditor = ref();
  import { useMessage } from 'naive-ui';
  import { computed } from 'vue';
  const message = useMessage();
  const route = useRoute();
  const router = useRouter();
  const mainTitleRef = ref('');
  const uploadUrl = ref(`${import.meta.env.VITE_GLOB_API_URL}/api/v1/user/upload`);
  const current = ref('');
  const userStore = useUser();
  const token = userStore.getToken;

  const content = ref('');
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
  const markets = ref([]);
  const loadMarkets = async () => {
    const result = await getMarkets();
    markets.value = result.map((item) => {
      return {
        label: item.code,
        value: item.code,
      };
    });
    current.value = markets.value[0].value;
  };

  async function handleSubmit() {
    try {
      const content = quillEditor.value.getHTML();

      try {
        if (route.params.id) {
          await updateArticle(route.params.id, {
            title: mainTitleRef.value,
            thumb: thumbRef.value,
            content,
            market: current.value,
          });
        } else {
          await createArticle({
            title: mainTitleRef.value,
            thumb: thumbRef.value,
            content,
            market: current.value,
          });
        }

        message.success('操作成功');
        router.push('/news/list');
      } catch (error) {
        message.success('操作失败');
        router;
      }
    } catch (error) {}
  }

  !route.params.id && loadMarkets();

  async function loadDetail() {
    try {
      await loadMarkets();

      const result = await getAricleById(route.params.id);
      if (result) {
        const { content } = result;
        mainTitleRef.value = result.title;
        thumbRef.value = result.thumb;
        quillEditor.value.setHTML(content);
        current.value = result.market;
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
