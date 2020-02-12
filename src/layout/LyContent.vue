<template>
  <div class="ly-content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'LyContent',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ly-content {
  position: relative;
  width: 100%;
  background: #fff;
  height: calc(100%);
  overflow: hidden;
}
</style>
