<template>
  <div class="container">
    <ly-head></ly-head>
    <ly-content></ly-content>
  </div>
</template>

<script>
import LyHead from '@/layout/LyHead'
import LyContent from '@/layout/LyContent'

export default {
  name: 'Home',
  components: {
    LyHead,
    LyContent
  },
  data() {
    return {}
  },
  mounted() {
    document.oncontextmenu = new Function('event.returnValue=false')
    document.onselectstart = new Function('event.returnValue=false')
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style>
