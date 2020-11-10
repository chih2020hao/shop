import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addCart (state, data) {
      state.items.push(data)
    },
    delCart (state, index) {
      state.items.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    items (state) {
      return state.items
    }
  }
})
