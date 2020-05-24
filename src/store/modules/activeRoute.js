export default {
  namespaced: true,
  state: {
    activeRoute: [], // 激活的路由
    mapActiveRoute: {}  // map 激活的路由
  },
  mutations: {
    PUSHROUTE(state, route) {
      if (route && !state.mapActiveRoute[route.name])
      state.activeRoute.push(route)
      state.mapActiveRoute[route.name] = route
    }
  },
  actions: {
    pushRoute({ commit }, route ) {
      commit('PUSHROUTE', route)
    }
  }
}