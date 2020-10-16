/*
 * @Author: Caven
 * @Date: 2019-10-12 12:48:10
 * @Last Modified by: Caven
 * @Last Modified time: 2020-10-16 13:15:28
 */
import axios from 'axios'
import Vue from 'vue'
const instance = axios.create({
  timeout: 15000
})

class HttpLoader {
  load() {
    Vue.use({
      install(Vue, options) {
        Vue.prototype.$http = instance
      }
    })
    global.Http = instance
    Object.freeze(global.Http)
    initInterceptors(instance)
  }
}

function initInterceptors(instance) {
  instance.interceptors.request.use(
    config => {
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      return Promise.reject(error)
    }
  )
}

const httpLoader = new HttpLoader()
export default httpLoader
