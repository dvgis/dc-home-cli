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
  min-height: 500px;
  background: #fff;
}
</style>
