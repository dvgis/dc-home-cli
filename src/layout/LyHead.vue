<template>
  <div class="ly-head" :class="headClass">
    <div class="title">
      <img src="../assets/images/logo.png" width="48px" height="48px" />
      <font style="color:#fff;margin-left:10px">Digital Visual</font>
    </div>
    <div class="menu">
      <el-menu
        :default-active="activeMenu"
        class="menu-list hidden-sm-and-down"
        mode="horizontal"
        @select="menuSelectHandler"
      >
        <el-menu-item index="home">首页</el-menu-item>
        <el-menu-item index="examples">示例</el-menu-item>
        <el-menu-item index="comps">组件</el-menu-item>
        <el-menu-item index="tools">工具</el-menu-item>
        <el-menu-item index="docs">文档</el-menu-item>
        <el-menu-item index="cesium">Cesium</el-menu-item>
      </el-menu>
      <img
        src="../assets/images/github.png"
        class="icon-github"
        @click="gotoGitHub"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {}
  },
  computed: {
    headClass() {
      let clazz = ''
      if (this.$route.path === '/editor') {
        clazz = 'hide-head'
      } else if (this.$route.path !== '/home') {
        clazz = 'bg-head'
      }
      return clazz
    },
    activeMenu() {
      return this.$route.path.replace('/', '')
    }
  },
  methods: {
    menuSelectHandler(index) {
      if (index === 'cesium') {
        window.open('https://cesium.com/cesiumjs/')
      } else {
        this.$router.push(index).catch(err => {
          err
        })
      }
    },
    gotoGitHub() {
      window.open('https://github.com/Digital-Visual')
    }
  }
}
</script>

<style lang="scss">
.ly-head {
  .menu {
    .el-menu.el-menu--horizontal {
      border-bottom: solid 0px #e6e6e6;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-weight: bold;
        background: transparent;
        border-bottom: 0 solid #409eff;
        font-size: 16px;
        &.is-active {
          color: #409eff;
          border-bottom: 2px solid #409eff;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.ly-head {
  position: absolute;
  height: 60px;
  width: calc(100% - 40px);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 0 20px;
  .title {
    color: #fff;
    font-size: 25px;
    font-style: oblique;
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    align-items: center;
    .icon-github {
      cursor: pointer;
      width: 32px;
      height: 32px;
      margin-left: 30px;
    }
    .menu-list {
      background: rgba(0, 0, 0, 0);
      color: #fff;
    }
  }

  &.bg-head {
    background: #0865ba;
  }

  &.hide-head {
    display: none;
  }
}
</style>
