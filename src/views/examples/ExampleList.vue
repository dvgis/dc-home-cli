<template>
  <div class="example-list">
    <template v-for="item in examplesData">
      <div :key="item.name">
        <p class="example-label" :id="'nav-' + item.name">
          <svg-icon :icon-class="item.name" class-name="icon-svg"></svg-icon>
          {{ item.label }}
        </p>
        <el-divider></el-divider>
        <div
          class="card-list"
          v-if="!item.children && item.examples.length > 0"
        >
          <el-card
            v-for="example in item.examples"
            :key="example.name"
            class="card"
            shadow="hover"
            :body-style="{ padding: '0px' }"
          >
            <img
              :src="getImgPath(item.name, example)"
              @click="gotoEditor(item.name, example)"
            />
            <p>
              {{ example.label
              }}<font color="orange" v-if="example.isPlugin">
                [插件]
              </font>
            </p>
          </el-card>
        </div>
        <div v-if="item.children && item.children.length > 0">
          <template v-for="child in item.children">
            <div :key="child.name">
              <p class="child-name" :id="'nav-' + child.name">
                {{ child.label }}
              </p>
              <div
                class="card-list"
                v-if="child.examples && child.examples.length > 0"
              >
                <el-card
                  v-for="example in child.examples"
                  :key="example.name"
                  class="card"
                  shadow="hover"
                  :body-style="{ padding: '0px' }"
                  @click="gotoEditor(example)"
                >
                  <img
                    :src="getImgPath(item.name, example)"
                    @click="gotoEditor(item.name, example)"
                    alt="example"
                  />
                  <p>
                    {{ example.label
                    }}<font color="orange" v-if="example.isPlugin">
                      [插件]
                    </font>
                  </p>
                </el-card>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ExampleList',
  props: {
    examplesData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    getImgPath(folder, info) {
      return `examples/images/${folder}/${info.name}.${info.suffix || 'png'}`
    },
    gotoEditor(name, example) {
      window.open(`./#/editor?type=${name}&example=${example.name}`)
    }
  }
}
</script>

<style lang="scss">
.example-list {
  .el-divider {
    background-color: #1c6ab3 !important;
  }
}
@media (max-width: 768px) {
  .example-list {
    .card-list {
      display: flex !important;
      flex-wrap: wrap;
      justify-content: space-around;
      .card {
        margin: 15px 0px;
      }
    }
  }
}
</style>

<style lang="scss" scoped>
.example-list {
  .example-label {
    color: rgba(0, 0, 0, 0.6);
    font-size: 16px;
    font-weight: bold;
    margin-top: 20px;
    .icon-svg {
      width: 20px;
      height: 20px;
    }
  }

  .child-name {
    margin-top: 20px;
    padding-left: 25px;
    font-size: 16px;
    margin-bottom: 10px;
    color: rgb(64, 158, 255);
  }

  .card-list {
    display: grid;
    box-shadow: 2px 2px 2px #c1c1c1;
    border-radius: 10px;
    background: #fff;
    grid-template-columns: repeat(5, 20%);
    padding-left: 25px;
    .card {
      width: 200px;
      height: 230px;
      margin-right: 22px;
      margin-top: 15px;
      margin-bottom: 15px;
      cursor: pointer;
      img {
        width: 200px;
        height: 200px;
        border-width: 0px;
      }
      p {
        text-align: center;
      }
    }
  }
}
</style>
