
// constantRoutes 不被约束的路由

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login')
  }
]

// 如果是一层路由，需要在源信息里添加 isSingle: true 做标识。
// permissions 约束路由
export const permissionsRoutes = [
  {
    path: '/_dashboard',
    name: '_dashboard',
    redirect: '/dashboard',
    component: () => import('@/pages/main'),
    meta: {
      isSingle: true
    },
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/pages/dashboard'),
        meta: {
          title: '首页',
          icon: 'el-icon-date'
        }
      }
    ]
  },
  {
    path: '/component',
    name: 'component',
    redirect: '/page1',
    component: () => import('@/pages/main'),
    meta: {
      title: '组件',
      icon: 'el-icon-menu'
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
  },
  {
    path: '/_document',
    name: '_document',
    meta: {
      isSingle: true
    },
    component: () => import('@/pages/main'),
    children: [
      {
        path: '/document',
        name: 'document',
        meta: {
          title: '文档',
          icon: 'el-icon-document'
        },
        component: () => import('@/pages/document')
      }
    ]
  },
  {
    path: '/permission',
    name: 'permission',
    redirect: '/page4',
    meta: {
      title: '权限',
      icon: 'el-icon-lock'
    },
    component: () => import('@/pages/main'),
    children: [
      {
        path: '/page4',
        name: 'page4',
        component: () => import('@/pages/page1'),
        meta: {
          title: '页面权限'
        }
      },
      {
        path: '/page5',
        name: 'page5',
        component: () => import('@/pages/page2'),
        meta: {
          title: '指令权限'
        }
      },
      {
        path: '/page6',
        name: 'page6',
        component: () => import('@/pages/page3'),
        meta: {
          title: '角色权限'
        }
      },
    ]
  }
]

export const moveInMain = permissionsRoutes => {
  return {
    path: '/',
    name: '_main',
    redirect: '/_dashboard',
    meta: {
      title: '首页',
      icon: 'el-icon-d-caret'
    },
    component: () => import('@/pages/main'),
    children: permissionsRoutes
  }
}


const routes = [
  ...constantRoutes,
  ...permissionsRoutes
]

export default routes;