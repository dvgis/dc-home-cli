/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:42
 * @Last Modified by: Caven
 * @Last Modified time: 2019-12-27 11:10:24
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {}
})
