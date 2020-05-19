<template>
  <div class="home">
    <div class="banner">
      <p>-- 基于 Cesium 进行二次开发的 3D Gis 平台</p>
    </div>
    <div class="info">
      <el-row justify="space-around">
        <el-col :sm="24" :lg="7">
          <div class="info-item">
            <div class="icon-border">
              <svg-icon icon-class="opensource" class="icon"></svg-icon>
            </div>
            <h3>开源免费</h3>
            <p>遵循 Apache-2.0 开源协议，免费商用</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="5">
          <div class="info-item">
            <div class="icon-border">
              <svg-icon icon-class="easyuse" class="icon"></svg-icon>
            </div>
            <h3>简单易用</h3>
            <p>用极简的代码就可实现3D功能开发</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="5">
          <div class="info-item">
            <div class="icon-border">
              <svg-icon icon-class="functional" class="icon"></svg-icon>
            </div>
            <h3>功能丰富</h3>
            <p>提供满足各类的业务功能接口和组件</p>
          </div>
        </el-col>
        <el-col :sm="24" :lg="7">
          <div class="info-item">
            <div class="icon-border">
              <svg-icon icon-class="tools" class="icon"></svg-icon>
            </div>
            <h3>工具众多</h3>
            <p>提供方便数据制作以及采集的各类工具</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <ly-foot></ly-foot>
  </div>
</template>
<script>
import LyFoot from '@/layout/LyFoot'
export default {
  name: 'Home',
  components: {
    LyFoot
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.home {
  .banner {
    width: 100%;
    height: 600px;
    background: url('../../assets/images/bg.jpg');
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    p {
      margin-top: 80px;
      padding-left: 100px;
      color: #fff;
      font-size: 25px;
      overflow: hidden;
    }
  }

  .info {
    padding: 20px 0;
    min-height: 220px;
    .info-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 30px;
      .icon-border {
        width: 60px;
        height: 60px;
        border: 1px solid #cecece;
        border-radius: 50%;
        display: flex;
        align-items: center;
        .icon {
          width: 120px;
          height: 32px;
        }
      }
      h3 {
        margin: 6px 0;
      }
    }
  }
}
</style>
