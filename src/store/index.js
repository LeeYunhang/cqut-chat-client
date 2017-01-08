import Vuex from 'vuex'
import Vue from 'vue'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)
let state = {
  isLoggedin: false
}

const getters = {

}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})