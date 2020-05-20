import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main'
import Login from '@/pages/login'
import Page1 from '@/pages/page1'
import Page2 from '@/pages/page2'
import Page3 from '@/pages/page3'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '_main',
      redirect: '/page1',
      component: Main,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: '/page1',
          name: 'page1',
          component: Page1,
          meta: {
            title: '页面一'
          }
        },
        {
          path: '/page2',
          name: 'page2',
          component: Page2,
          meta: {
            title: '页面二'
          }
        },
        {
          path: '/page3',
          name: 'page3',
          component: Page3,
          meta: {
            title: '页面三'
          }
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router