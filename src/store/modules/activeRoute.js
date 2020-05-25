export default {
  namespaced: true,
  state: {
    isShowNavbar: false,
    activeRoute: [], // 激活的路由
    activeMaxLen: 15
  },
  mutations: {
    PUSHROUTE(state, route) {
      if (route && !state.activeRoute.some(n => n.name === route.name))
      state.activeRoute.push(route)
    },
    DELETEROUTE(state, route) {
      if (route) {
        state.activeRoute = state.activeRoute.filter(n => n.name !== route.name)
      }
    }
  },
  actions: {
    pushRoute({ commit }, route) {
      commit('PUSHROUTE', route)
    },
    deleteRoute({ commit}, route) {
      commit('DELETEROUTE', route)
    }
  }
}