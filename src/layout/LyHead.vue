<template>
  <div class="ly-head" :class="headClass">
    <div class="head-bg"></div>
    <div class="title">
      <svg-icon
        icon-class="menu"
        class-name="svg-icon hidden-md-and-up"
        @on-click="drawer = true"
      ></svg-icon>
      <svg-icon
        icon-class="logo"
        style="width:30px;height:30px;margin-right:-5px;"
        @on-click="gotoHome"
      ></svg-icon>
      <font style="color:#fff;margin-left:10px">D C</font>
      <sub class="hidden-md-and-down" style="margin-left:10px;font-size:12px;"
        >( Digital Visual for Cesium )</sub
      >
    </div>
    <div class="menu-h">
      <el-menu
        :default-active="activeMenu"
        class="menu-list hidden-sm-and-down"
        mode="horizontal"
        @select="menuSelectHandler"
      >
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="examples">开发示例</el-menu-item>
        <el-menu-item index="docs">开发文档</el-menu-item>
      </el-menu>
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
          D C
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
            >开发示例
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
      } else if (index === 'docs') {
        window.open('https://resource.dvgis.cn/dc-docs/v2.x/zh/')
      } else {
        this.$router.push(index).catch(err => {
          err
        })
      }
      this.drawer = false
    },
    gotoHome() {
      window.open('https://dvgis.cn')
    }
  }
}
</script>

<style lang="scss">
.ly-head {
  .menu-h {
    margin-right: 30px;
    .el-menu--horizontal.el-menu {
      border-bottom: solid 0px #e6e6e6;
      background: transparent;
      .el-submenu__title {
        color: #fff;
        height: 40px;
        line-height: 40px;
        font-weight: bold;
        font-size: 16px;
        &:hover {
          background: transparent;
        }

        i {
          color: #fff;
        }
      }
      .el-menu-item {
        height: 40px;
        line-height: 40px;
        color: #fff !important;
        background-color: transparent !important;
        font-weight: bold;
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

.menu-box {
  margin-top: 6px;
  .el-menu {
    background: #1a1a1a !important;
    border-radius: 4px;
    padding-left: 10px;
    min-height: 50px;
  }
  .el-menu-item {
    background-color: transparent !important;
    font-size: 16px;
    color: #fff !important;
    &:hover {
      color: #fff !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.ly-head {
  position: absolute;
  height: 60px;
  width: calc(100%);
  z-index: 1;
  display: flex;
  justify-content: space-between;
  .title {
    margin-left: 20px;
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
    .menu-list {
      background: transparent;
      color: #fff;
    }

    .icon-github {
      cursor: pointer;
      width: 96px;
      height: 20px;
      margin: 0 50px;
    }
  }

  .head-bg {
    display: none;
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: -1;
  }

  &.bg-head {
    background: rgb(0, 23, 72);
  }

  &.hide-head {
    display: none;
  }

  &:hover {
    .head-bg {
      display: block;
    }
  }
}
</style>
