/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:42
 * @Last Modified by: Caven
 * @Last Modified time: 2020-10-16 13:16:30
 */
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  modules: {}
})
