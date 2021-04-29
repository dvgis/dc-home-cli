<template>
  <div class="home">
    <div class="banner">
      <p class="animate__animated animate__bounceInLeft">
        基于 Cesium 构建的 <strong>三维 WebGis</strong> 开发平台<br />
        <img
          src="https://img.shields.io/github/stars/dvgis/dc-sdk?color=red&logo=github"
          class="icon icon-github"
          @click="gotoPage('github')"
          alt="github"
        />
        <img
          src="https://img.shields.io/npm/v/@dvgis/dc-sdk?color=blue&logo=npm"
          class="icon icon-npm"
          @click="gotoPage('npm')"
          alt="npm"
        />
        <img
          src="https://img.shields.io/npm/dt/@dvgis/dc-sdk?logo=npm"
          class="icon icon-npm"
          @click="gotoPage('npm')"
          alt="npm"
        />
      </p>
      <img
        class="banner__img"
        src="../../assets/images/banner.png"
        alt="banner"
      />
    </div>
    <info></info>
    <log></log>
    <ly-foot></ly-foot>
  </div>
</template>
<script>
export default {
  name: 'Home',
  components: {
    info: () => import('./comp/info'),
    log: () => import('./comp/log'),
    LyFoot: () => import('@/layout/LyFoot')
  },
  data() {
    return {}
  },
  methods: {
    gotoPage(type) {
      if (type === 'github') {
        window.open('https://github.com/dvgis/dc-sdk')
      } else if (type === 'npm') {
        window.open('https://www.npmjs.com/package/@dvgis/dc-sdk')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  .home {
    .banner {
      height: 200px !important;
      p {
        font-size: 16px !important;
        .icon {
          transform: scale(0.5) !important;
        }
        .icon-npm {
          margin-left: -40px !important;
        }
      }
      .banner__img {
        width: 120px !important;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.home {
  user-select: none;
  position: relative;
  background: #f7f8fa;
  .banner {
    width: 100%;
    height: 600px;
    background: rgb(0, 23, 72);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-around;
    p {
      text-align: center;
      color: rgb(255, 255, 255);
      font-size: 30px;
      overflow: hidden;
      .icon {
        height: 20px;
        cursor: pointer;
        margin-top: 20px;
      }
      .icon-npm {
        margin-left: 30px;
      }
    }
    .banner__img {
      width: 550px;
      cursor: pointer;
      &:hover {
        animation: img_rotate 12s linear infinite;
      }
    }
  }
}
</style>
