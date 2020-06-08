<template>
  <div class="info">
    <div class="module">
      <div class="module_desc">
        <h2>基于开源 + 代码可控</h2>
        <div class="desc">
          平台基于开源项目Cesium进行的二次开发，优化了一些Cesium的使用问题，
          同时集成了一些第三方常用的地图库或开源库,如：Echarts、Mapv、Heatmap、Turf等。
        </div>
      </div>
      <img src="../../../assets/images/1.png" class="module_img" />
    </div>
    <div class="module">
      <img src="../../../assets/images/2.png" class="module_img" />
      <div class="module_desc">
        <h2>文档简单 + 方便使用</h2>
        <div class="desc">
          平台使用一目了然，容易学习，无论是API还是文档，都具有很强的可读性、自学习性。
          平台支持多种方式导入使用，同时提供大量的示例演示，方便用户快速构建三维Gis应用。
        </div>
      </div>
    </div>
    <div class="module">
      <div class="module_desc">
        <h2>敏捷开发 + 扩展便捷</h2>
        <div class="desc">
          平台内部设计合理，采用标准的开发模式。
          平台提供最基本的开发类，方便用户进行后期的二次开发、实现自定义模块或组件。
        </div>
      </div>
      <img src="../../../assets/images/3.png" class="module_img" />
    </div>
    <div class="module">
      <img src="../../../assets/images/4.png" class="module_img" />
      <div class="module_desc">
        <h2>多平台支持 + 完整解决方案</h2>
        <div class="desc">
          平台支持多种终端的使用，用户无需安装任何插件，直接可在浏览器中对三维场景的浏览。
          平台同时支持本地化部署，以方便存在网络限制或安全的用户。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Info'
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .info {
    .module {
      display: block !important;
      align-items: center !important;
      justify-content: space-around !important;
      text-align: center;
      .module_desc {
        width: 100% !important;
        h2 {
          font-size: 1rem !important;
        }
        .desc {
          margin-top: 20px !important;
          min-height: 80px !important;
          font-size: 0.875rem !important;
          text-indent: 2em !important;
        }
      }
      .module_img {
        margin: 10px 0;
        width: 100px !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.info {
  padding: 20px 0;
  min-height: 400px;
  .module {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 20px 15%;
    padding: 40px 25px;
    border-bottom: 1px solid #cecece;
    .module_desc {
      font-family: 'PingFangSC-Thin', 'Microsoft YaHei';
      width: 45%;
      margin: 0 10px;
      h2 {
        text-align: center;
        color: #000;
        font-weight: 500;
        font-size: 1.5rem;
      }
      .desc {
        margin-top: 20px;
        min-height: 80px;
        font-size: 1.1rem;
        //text-indent: 2em;
      }
    }
    .module_img {
      width: 300px;
    }
    &:nth-of-type(4) {
      border-bottom: 0px solid #cecece;
    }
  }
}
</style>
