<template>
  <div class="sider-bar">
    <el-menu
      :default-active="defaultActive"
      unique-opened
      active-text-color="#409eff"
      @select="slectMenuHandler"
      @open="slectMenuHandler"
    >
      <template v-for="menu in menuData">
        <el-menu-item
          v-if="!menu.children || menu.children.length === 0 || !showChildren"
          :index="menu.name"
          :key="menu.name"
        >
          <svg-icon :icon-class="menu.name" class-name="icon-svg"></svg-icon>
          {{ menu.label }}
        </el-menu-item>
        <el-submenu
          :index="menu.name"
          :key="menu.name"
          v-if="menu.children && menu.children.length && showChildren"
        >
          <template slot="title">
            <span>
              <svg-icon
                :icon-class="menu.name"
                class-name="icon-svg"
              ></svg-icon>
              {{ menu.label }}
            </span>
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :index="child.name"
            :key="child.name"
            >{{ child.label }}</el-menu-item
          >
        </el-submenu>
      </template>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'SiderBar',
  props: {
    defaultActive: {
      type: String,
      default: ''
    },
    showChildren: {
      type: Boolean,
      default: true
    },
    menuData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    slectMenuHandler(index) {
      this.$emit('on-menu-select', index)
    }
  }
}
</script>
<style lang="scss">
.sider-bar {
  width: 100%;
  height: 100%;
  .el-menu {
    border-right: 0px;
    background: transparent;
  }
  .el-menu-item,
  .el-submenu__title,
  .el-submenu__title i {
    color: #000;
    background: transparent;
  }
}
</style>

<style lang="scss" scoped>
.sider-bar {
  .icon-svg {
    color: #000;
    width: 20px;
    height: 20px;
    position: relative;
    transform: translateY(10%);
    margin-right: 5px;
  }
}
</style>
