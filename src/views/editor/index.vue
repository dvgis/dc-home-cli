<template>
  <div class="editor">
    <div class="example" ref="example"></div>
  </div>
</template>
<script>
import * as axios from 'axios'

export default {
  name: 'Editor',
  data() {
    return {
      type: '',
      example: '',
      exampleHtml: '',
      tempHtml: '',
      htmlStr: '',
      jsStr: ''
    }
  },
  methods: {
    getTempPage() {
      return axios.get('examples/pages/temp.html')
    },
    getExamplePage() {
      return axios.get(`examples/pages/${this.type}/${this.example}.html`)
    },
    loadExample() {
      let iFrame = this.createIFrame()
      iFrame.contentWindow['DC'] = window.DC
      let iframeDocument = iFrame.contentWindow.document
      iframeDocument.open()
      let content = this.htmlStr + '<script>' + this.jsStr + '<' + '/script>'
      iframeDocument.write(this.tempHtml.replace('<htmlTemp />', content))
      iframeDocument.close()
    },
    createIFrame() {
      let examplePage = this.$refs['example']
      examplePage.innerHTML = ''
      let iframe = document.createElement('iframe')
      iframe.setAttribute('id', 'innerPage')
      iframe.setAttribute('name', 'innerPage')
      examplePage.append(iframe)
      return iframe
    }
  },
  mounted() {
    if (this.$route) {
      let query = this.$route.query
      this.type = query.type
      this.example = query.example
      axios.all([this.getTempPage(), this.getExamplePage()]).then(
        axios.spread((tempPage, examplePage) => {
          this.tempHtml = tempPage.data
          this.exampleHtml = examplePage.data
          if (this.exampleHtml && this.tempHtml) {
            let index = this.exampleHtml.indexOf('<script>')
            this.htmlStr = this.exampleHtml.substr(0, index)
            this.jsStr = this.exampleHtml
              .substr(index)
              .replace(/<\/?script>\n/g, '')
            // this.htmlEditor.setValue(this.htmlStr)
            // this.jsEditor.setValue(this.jsStr)
            this.loadExample()
          }
        })
      )
    }
  }
}
</script>

<style lang="scss">
#innerPage {
  width: 100%;
  height: 100%;
  border: none;
  overflow: hidden;
}
</style>

<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .example {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
}
</style>
