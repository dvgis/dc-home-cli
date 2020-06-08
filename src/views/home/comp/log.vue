<template>
  <div class="log">
    <div class="module-title">
      平台动态
    </div>
    <div class="log-wrapper">
      <el-timeline style="min-height:320px">
        <el-timeline-item
          v-for="item in logList"
          :key="item.time"
          :timestamp="item.time"
          placement="top"
          color="#409eff"
        >
          <h4>{{ item.title }}</h4>
          <ul class="list">
            <li v-for="(desc, index) in item.content" :key="'log-' + index">
              <span></span>
              {{ desc }}
            </li>
          </ul>
        </el-timeline-item>
      </el-timeline>
      <el-pagination
        small
        layout="prev, next"
        :current-page.sync="currentPage"
        @current-change="handleCurrentChange"
        :page-size="pageSize"
        :total="logData.length"
        prev-text="上一页"
        next-text="下一页"
        class="page"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getData } from '@/api/data-api'
export default {
  name: 'Log',
  data() {
    return {
      logList: [],
      logData: [],
      pageSize: 2,
      currentPage: 1
    }
  },
  methods: {
    getLogData() {
      getData('log').then(res => {
        let logData = res.data || []
        this.logData = logData.reverse()
        this.logList = this.logData.slice(0, this.pageSize)
      })
    },
    handleCurrentChange(val) {
      let startIndex = (val - 1) * this.pageSize
      let endIndex = val * this.pageSize
      this.logList = this.logData.slice(startIndex, endIndex)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.getLogData()
    })
  }
}
</script>

<style lang="scss">
.log {
  .el-pager li,
  button {
    background: transparent !important;
    &.active,
    &:hover {
      color: #409eff;
    }
  }
}

@media (max-width: 768px) {
  .log {
    .log-wrapper {
      margin-left: 15% !important;
      margin-right: 15% !important;
    }
  }
}
</style>

<style lang="scss" scoped>
.log {
  position: relative;
  margin-top: 60px;
  .module-title {
    text-align: center;
    font-family: 'PingFangSC-Thin', 'Microsoft YaHei';
    font-size: 36px;
    margin-top: 80px;
    height: 36px;
    color: #141419;
    line-height: 36px;
  }
  .log-wrapper {
    margin-left: 20%;
    margin-top: 30px;
    ul.list {
      list-style: none;
      li {
        margin-top: 10px;
        font-size: 0.857rem;
        & > span {
          width: 6px;
          height: 6px;
          display: inline-block;
          background: #409eff;
          position: relative;
          top: -2px;
          margin-right: 10px;
        }
      }
    }
  }
  .page {
    margin-left: -15%;
    text-align: center;
  }
}
</style>
