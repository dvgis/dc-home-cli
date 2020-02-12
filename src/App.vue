<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  }
}
</script>
<style lang="scss">
@import './themes/index.scss';
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
