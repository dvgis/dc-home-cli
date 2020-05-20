<template>
  <div class="container">
    <ly-head></ly-head>
    <ly-content></ly-content>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    LyHead: () => import('@/layout/LyHead'),
    LyContent: () => import('@/layout/LyContent')
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
  min-height: 500px;
  display: block;
}
</style>
