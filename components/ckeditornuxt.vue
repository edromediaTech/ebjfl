<template>
  <ckeditor  
    :editor="editor"
    :value="value"
    :config="config"
    :tagname="tagname"
    :disabled="disabled"
    @input="event => $emit('input', event)"
  />
</template>
<script>

let ClassicEditor
let CKEditor

if (process.client) {
  ClassicEditor = require('@ckeditor/ckeditor5-build-classic')
  CKEditor = require('@ckeditor/ckeditor5-vue2')
} else {
  CKEditor = { component : {template:'<div></div>'}}
}


export default {
  components: {
    ckeditor: CKEditor.component
  },
  
  props: {
    value: {
      type: String,
      required: false,
      default:''
    },
    tagname: {
      type: String,
      required: false,
      default: 'div'
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    uploadUrl: {
      type: String,
      required: false,
      default:''
    },
    config: {
      type: Object,
      required: false,
      default: () =>{
      }
    }
  },
  data() {
    return {
      editor: ClassicEditor,
    }
  },
};
</script>