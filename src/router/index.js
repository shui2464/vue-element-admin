import Vue from 'vue'
import Router from 'vue-router'
import Main from '../pages/main'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})

export default router