/*
 * @Author: Caven
 * @Date: 2018-12-11 13:44:43
 * @Last Modified by: Caven
 * @Last Modified time: 2020-10-16 13:16:04
 */
import Vue from 'vue'

const componentsWatcher = scaner => {
  scaner.keys().map(key => {
    let name = scaner(key).default.name
    if (name) {
      Vue.component(name, function(resolve) {
        require([key + ''], resolve)
      })
    }
  })
}
const vueScaner = require.context(
  '@/components',
  true,
  /^\.\/((?!\/)[\s\S])+\/index\.vue$/
)
componentsWatcher(vueScaner)

const svgWatcher = scaner => scaner.keys().map(scaner)
const svgScaner = require.context('@/assets/svg/icons', false, /\.svg$/)
svgWatcher(svgScaner)
