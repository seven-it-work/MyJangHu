<template>
  <a-form-item label="标题">
    <a-input v-model:value="nodeData.title"/>
  </a-form-item>
  <a-form-item label="描述">
    <QuillEditor ref="QuillEditor" v-model:content="nodeData.context" contentType="html" :options="options" style="height: 300px"></QuillEditor>
  </a-form-item>
</template>

<script>
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "ChatForm",
  components:{QuillEditor},
  inject: ['$api'],
  props: {
    nodeData: {},
  },
  watch:{
    "nodeData.context":{
      handler(val){
        // QuillEditor双向绑定有bug，无法清空 采用监听清空
        if (!val){
          this.$refs.QuillEditor.setContents(val)
        }
      }
    }
  },
  data() {
    return {
      options: {
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean'],
            ['link', 'image', 'video']
          ]
        },
        placeholder: '请输入描述',
        readOnly: false,
        theme: 'snow'
      }
    }
  },
  mounted() {

  },
  methods: {
  },
}
</script>

<style scoped>

</style>
