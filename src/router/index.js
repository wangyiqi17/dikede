import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '帝可得', icon: 'dashboard' }
    }]
  },

  {
    path: '/gdgl',
    component: Layout,
    redirect: '/gdgl/yygd',
    name: 'gsgl',
    meta: { title: '工单管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'yygd',
        name: 'Table',
        component: () => import('@/views/gdgl/components/yygd'),
        meta: { title: '运营工单', icon: 'table' }
      },
      {
        path: 'ywgd',
        name: 'ywgd',
        component: () => import('@/views/gdgl/components/ywgd'),
        meta: { title: '运维工单', icon: 'tree' }
      }
    ]
  },

   {
    path: '/dwgl',
    component: Layout,
    redirect: '/dwgl/qygl',
    name: 'dwgl',
    meta: { title: '点位管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'qygl',
        name: 'qygl',
        component: () => import('@/views/dwgl/components/qygl'),
        meta: { title: '区域管理', icon: 'table' }
      },
      {
        path: 'dwgl2',
        name: 'dwgl2',
        component: () => import('@/views/dwgl/components/dwgl2'),
        meta: { title: '点位管理', icon: 'tree' }
      },
      {
        path: 'hzsgl',
        name: 'hzsgl',
        component: () => import('@/views/dwgl/components/hzsgl'),
        meta: { title: '合作商管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/sbgl',
    component: Layout,
    redirect: '/sbgl/sbgl2',
    name: 'sbgl',
    meta: { title: '设备管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'sbgl2',
        name: 'sbgl2',
        component: () => import('@/views/sbgl/components/sbgl2'),
        meta: { title: '设备管理', icon: 'table' }
      },
      {
        path: 'sbzt',
        name: 'sbzt',
        component: () => import('@/views/sbgl/components/sbzt'),
        meta: { title: '设备状态', icon: 'tree' }
      },
      {
        path: 'sblxgl',
        name: 'sblxgl',
        component: () => import('@/views/sbgl/components/sblxgl'),
        meta: { title: '设备类型管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/rygl',
    component: Layout,
    redirect: '/rygl/rygl2',
    name: 'rygl',
    meta: { title: '人员管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'rygl2',
        name: 'rygl',
        component: () => import('@/views/rygl/components/rygl2'),
        meta: { title: '人员管理', icon: 'table' }
      },
      {
        path: 'rxtj',
        name: 'rxtj',
        component: () => import('@/views/rygl/components/rxtj'),
        meta: { title: '人效统计', icon: 'tree' }
      },
      {
        path: 'gzllb',
        name: 'gzllb',
        component: () => import('@/views/rygl/components/gzllb'),
        meta: { title: '工作量列表', icon: 'tree' }
      }
    ]
  },

{
    path: '/spgl',
    component: Layout,
    redirect: '/spgl/splx',
    name: 'spgl',
    meta: { title: '商品管理', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'splx',
        name: 'splx',
        component: () => import('@/views/spgl/components/splx'),
        meta: { title: '商品类型', icon: 'table' }
      },
      {
        path: 'spgl2',
        name: 'spgl2',
        component: () => import('@/views/spgl/components/spgl2'),
        meta: { title: '商品管理', icon: 'tree' }
      },
    ]
  },

  {
    path: '/clgl',
    component: Layout,
    children: [
      {
        path: 'clgl',
        name: 'clgl',
        component: () => import('@/views/clgl'),
        meta: { title: '策略管理', icon: 'tree' }
      }
    ]
  },

  {
    path: '/ddgl',
    component: Layout,
    children: [
      {
        path: 'ddgl',
        name: 'ddgl',
        component: () => import('@/views/ddgl'),
        meta: { title: '订单管理', icon: 'form' }
      }
    ]
  },

  {
    path: '/dztj',
    component: Layout,
    children: [
      {
        path: 'dztj',
        name: 'dztj',
        component: () => import('@/views/dztj'),
        meta: { title: '对账统计', icon: 'eye' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
