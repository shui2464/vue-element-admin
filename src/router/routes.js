
// constantRoutes 不被约束的路由

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]


// permissions 约束路由
export const permissionsRoutes = [
  {
    path: '/',
    name: '_main',
    redirect: '/page1',
    component: () => import('@/pages/main'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/page1',
        name: 'page1',
        component: () => import('@/pages/page1'),
        meta: {
          title: '页面一'
        }
      },
      {
        path: '/page2',
        name: 'page2',
        component: () => import('@/pages/page2'),
        meta: {
          title: '页面二'
        }
      },
      {
        path: '/page3',
        name: 'page3',
        component: () => import('@/pages/page3'),
        meta: {
          title: '页面三'
        }
      },
    ]
  }
]

const routes = [
  ...constantRoutes,
  ...permissionsRoutes
]

export default routes;