import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    return false
  }
  next()
})


export default router