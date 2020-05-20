import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    routerList: [
      { idx: "1-1", title: "1-1" },
      { idx: "1-2", title: "1-2" },
      { idx: "1-3", title: "1-3" },
      { idx: "1-4", title: "1-4" },
      { idx: "1-5", title: "1-5" },
      { idx: "1-6", title: "1-6" }
    ]
  },
  getters: {
    getRouterList: state => {
      return state.routerList
    }
  }
})

export default store;