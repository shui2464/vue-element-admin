const getters = {
  permissionRoutes: state => {
    return state.permission.routes
  },
  mapActiveRoute: state => {
    return state.activeRoute.activeRoute
  }
}

export default getters