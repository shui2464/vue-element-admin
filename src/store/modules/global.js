export default {
  namespaced: true,
  state: {
    isCollapse: false // 控制左侧菜单栏展开收起
  },
  mutations: {
    TOGGLECOLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    toggleCollapse({ commit }) {
      commit('TOGGLECOLLAPSE')
    }
  }
}