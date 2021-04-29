<template>
  <footer class="ly-foot">
    <el-divider></el-divider>
    <div class="copyright">
      版权所有 &copy; {{ new Date().getFullYear() }} 数字视觉(Digital Visual)
      <a href="http://beian.miit.gov.cn" target="_blank">苏ICP备17074644号-3</a>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'LyFoot',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.ly-foot {
  position: relative;
  width: 100%;
  height: 50px;
  user-select: none;
  color: #999999;
  padding-bottom: 5px;
  a {
    cursor: pointer;
    color: #999999;
    text-decoration: none;
    &:hover {
      color: #f5533d !important;
    }
  }

  .copyright {
    text-align: center;
    font-size: 0.5rem;
    color: #666666;
    a {
      color: #666666;
    }
  }
}
</style>
