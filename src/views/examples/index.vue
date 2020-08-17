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
            <p>1. 示例仅做参考，展现的数据只是测试数据。</p>
            <p>2. 示例是使用<em> DC-SDK </em>开发的。</p>
            <p>
              3. 含有<em> [插件] </em>的示例开发时需引入 <em> DC-Plugins </em>。
            </p>
            <p>
              4. <em> 其他要素 </em>的示例开发时需引入<em> DC-Overlay </em>。
            </p>
            <p>
              5. Echarts 示例开发时需引入<em> echarts </em>和<em> DC-Chart </em
              >。
            </p>
            <p>6. Mapv 示例开发时需引入<em> DC-Mapv </em>。</p>
            <p>
              7. 部分模型数据是引用于
              <a href="http://www.earthsdk.com/" target="_blank">
                西部世界
              </a>
              和
              <a href="http://www.marsgis.cn/" target="_blank">
                火星科技
              </a>
              。
            </p>
            <p>
              8. 如需添加额外示例或示例存在问题，请联系
              <a href="https://github.com/cavencj" target="_blank">
                Caven Chen
              </a>
              。
            </p>
            <p>
              <span>DC-SDK:</span>
              <img
                src="https://img.shields.io/github/package-json/v/dvgis/dc-sdk?color=orange&logo=github"
                alt="github"
                @click="gotoGithub('dc')"
              />
              Cesium:
              <img
                src="https://img.shields.io/github/package-json/v/CesiumGS/Cesium?color=orange&logo=github"
                alt="github"
                @click="gotoGithub('cesium')"
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
      this.$http.get('config/examples.json').then(res => {
        this.examplesData = res.data || []
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
    gotoGithub(type) {
      let url = 'https://github.com/dvgis/dc-sdk/releases'
      if (type === 'cesium') {
        url = 'https://github.com/CesiumGS/Cesium/releases'
      }
      window.open(url)
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
