<template>
  <div class="ly-head" :class="headClass">
    <div class="title">
      <svg-icon
        icon-class="menu"
        class-name="svg-icon hidden-md-and-up"
        @on-click="drawer = true"
      ></svg-icon>
      <svg-icon
        icon-class="logo"
        style="width:48px;height:48px;margin-right:-5px;"
      ></svg-icon>
      <font style="color:#fff;margin-left:10px">Digital Visual</font>
    </div>
    <div class="menu-h">
      <el-menu
        :default-active="activeMenu"
        class="menu-list hidden-sm-and-down"
        mode="horizontal"
        @select="menuSelectHandler"
      >
        <el-menu-item index="index">首页</el-menu-item>
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
      <el-drawer
        class="menu-drawer hidden-md-and-up"
        append-to-body
        :with-header="false"
        direction="ltr"
        :visible.sync="drawer"
        size="50%"
      >
        <p class="logo">
          <svg-icon icon-class="logo" class="svg-icon"></svg-icon>
        </p>
        <p class="title">
          Digital Visual
        </p>
        <el-menu
          :default-active="activeMenu"
          class="menu-list"
          @select="menuSelectHandler"
        >
          <el-menu-item index="index">
            <svg-icon icon-class="home" calss-name="menu-icon"></svg-icon>首页
          </el-menu-item>
          <el-menu-item index="examples">
            <svg-icon icon-class="examples" calss-name="menu-icon"></svg-icon
            >示例
          </el-menu-item>
          <el-menu-item index="comps">
            <svg-icon icon-class="comps" calss-name="menu-icon"></svg-icon>组件
          </el-menu-item>
          <el-menu-item index="tools">
            <svg-icon icon-class="tools" calss-name="menu-icon"></svg-icon>工具
          </el-menu-item>
          <el-menu-item index="cesium">
            <svg-icon icon-class="link" calss-name="menu-icon"></svg-icon>Cesium
          </el-menu-item>
        </el-menu>
      </el-drawer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LyHead',
  data() {
    return {
      drawer: false
    }
  },
  computed: {
    headClass() {
      let clazz = ''
      if (this.$route.path === '/editor') {
        clazz = 'hide-head'
      } else if (this.$route.path !== '/index') {
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
      this.drawer = false
    },
    gotoGitHub() {
      window.open('https://github.com/Digital-Visual')
    }
  }
}
</script>

<style lang="scss">
.ly-head {
  .menu-h {
    .el-menu.el-menu--horizontal {
      border-bottom: solid 0px #e6e6e6;
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-weight: bold;
        background: transparent;
        font-size: 16px;
        &.is-active {
          color: #409eff;
          border-bottom: 2px solid #409eff;
        }
      }
    }
  }
}

.menu-drawer {
  .logo {
    text-align: center;
    margin-top: 15px;
    .svg-icon {
      width: 70px;
      height: 70px;
      color: #0865ba;
    }
  }
  .title {
    margin: 10px 0;
    text-align: center;
    font-size: 20px;
    font-style: oblique;
    background: linear-gradient(to right, rgb(241, 8, 40), #0865ba);
    background-clip: text;
    color: transparent;
  }
  .menu-list {
    padding-left: 10px;
    .svg-icon {
      width: 20px;
      height: 20px;
      margin-right: 20px;
    }
    .el-menu-item {
      background: transparent;
      border-bottom: 0 solid #409eff;
      font-size: 17px;
      color: rgba(0, 0, 0, 0.6);
      &.is-active {
        color: #409eff;
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
    .svg-icon {
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .menu-h {
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
