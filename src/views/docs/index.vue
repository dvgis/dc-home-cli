<template>
  <div class="docs">
    <iframe id="vue-md" src="http://dc.cavencj.cn/docs/api"></iframe>
  </div>
</template>
<script>
export default {
  name: 'Docs',
  data() {
    return {}
  }
}
</script>
<style lang="scss">
.docs {
  #vue-md {
    margin-top: 66px;
    width: 100%;
    height: calc(100% - 66px);
    border: none;
    overflow: hidden;
  }
}
</style>
<style lang="scss" scoped>
.docs {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
}
</style>
