<template>
  <div class="examples">
    <el-row class="row">
      <el-col :lg="3" class="hidden-md-and-down menu">
        <sider-bar
          :menu-data="examplesData"
          default-active="info"
          @on-menu-select="selectMenuHandler"
        ></sider-bar>
      </el-col>
      <el-col :lg="21" :sm="24" class="col">
        <div class="content" ref="content">
          <div class="tips">
            <span>说明：</span>
            <p>1. 示例仅做参考，示例中数据都为测试数据。</p>
            <p>2. 示例都是基于<em> DC-SDK </em> 开发的。</p>
            <p>
              3. Echarts 示例开发时需引入<em> Echarts </em>和<em> DC-Chart </em>
              模块。
            </p>
            <p>4. Mapv 示例开发时需引入<em> DC-Mapv </em>模块。</p>
            <p>
              5. 部分模型数据引用于
              <a href="http://www.cesiumlab.com/" target="_blank">
                Cesium 实验室
              </a>
              。
            </p>
            <p>
              6. 如果示例存在问题或需要改进，请联系
              <a href="https://github.com/cavencj" target="_blank">
                Caven Chen
              </a>
              。
            </p>
            <p>
              <img
                src="https://img.shields.io/npm/v/@dvgis/dc-sdk?color=blue&logo=npm"
                alt="github"
                @click="gotoPage('npm')"
              />
              <img
                src="https://img.shields.io/npm/dt/@dvgis/dc-sdk?style=flat&logo=npm"
                alt="github"
                @click="gotoPage('npm')"
              />
            </p>
          </div>
          <el-popover placement="top-start" trigger="click">
            <sider-bar
              :menu-data="examplesData"
              :show-children="false"
              class="nav-menu"
              @on-menu-select="selectMenuHandler"
            ></sider-bar>
            <img
              slot="reference"
              src="../../assets/svg/bg/nav.svg"
              class="nav-icon hidden-md-and-up"
              alt="nav"
            />
          </el-popover>
          <example-list :examples-data="examplesData"></example-list>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import ExampleList from './ExampleList'
export default {
  name: 'Examples',
  components: {
    ExampleList
  },
  data() {
    return {
      examplesData: []
    }
  },
  methods: {
    getExamplesData() {
      this.$http.get('examples/index.json').then(res => {
        this.examplesData = res.data.dev || []
      })
    },
    selectMenuHandler(value) {
      if (value) {
        let el = document.getElementById('nav-' + value)
        if (el) {
          this.$refs['content'].scrollTop = el.offsetTop - 15
        }
      }
    },
    gotoPage(type) {
      if (type === 'github') {
        window.open('https://github.com/dvgis/dc-sdk')
      } else if (type === 'npm') {
        window.open('https://www.npmjs.com/package/@dvgis/dc-sdk')
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getExamplesData()
    })
  }
}
</script>

<style lang="scss">
.nav-menu {
  .el-menu-item {
    color: rgba(0, 0, 0, 0.6);
    font-weight: bold;
    height: 40px;
    line-height: 40px;
    .icon-svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
}

@media (max-width: 768px) {
  .examples {
    .row {
      padding-left: 0px !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.examples {
  position: relative;
  overflow: hidden;
  background: #f7f8fa;
  padding-top: 59px;
  .row,
  .col {
    height: calc(100vh - 90px);
  }
  .row {
    padding-left: 10px;
  }
  .menu {
    height: 100%;
    padding-top: 20px;
    padding-left: 10px;
    margin-top: 20px;
    background: #fff;
    box-shadow: 2px 2px 2px #c1c1c1;
    border-radius: 10px;
  }
  .content {
    height: calc(100%);
    padding: 10px 20px 60px 20px;
    overflow: hidden;
    overflow-y: auto;
    .tips {
      font-size: 13px;
      color: rgba(0, 0, 0, 0.6);
      margin-bottom: 10px;
      margin-top: 10px;
      background: #fff;
      box-shadow: 2px 2px 2px #c1c1c1;
      border-radius: 10px;
      padding: 10px 15px;
      p {
        padding-top: 10px;
      }
      a {
        text-decoration: none;
        color: #0865ba;
      }
      img {
        vertical-align: middle;
        cursor: pointer;
        margin: 0 10px 0 8px;
      }
      em {
        color: orange;
      }
    }
  }

  .nav-icon {
    position: absolute;
    left: 10px;
    bottom: 10px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
}
</style>
