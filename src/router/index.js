import Vue from "vue";
import Router from "vue-router";

import NotFoundComponent from "@/views/error/notfoundcomponent";

/* Layout */
import Layout from "@/views/layout/Layout";

Vue.use(Router);

/* Layout */
// import Layout from '@/views/layout/Layout'

/* Router Modules */
/*
import componentsRouter from './modules/components'
import chartsRouter from './modules/charts'
import tableRouter from './modules/table'
import nestedRouter from './modules/nested'
*/

/** note: Submenu only appear when children.length>=1
 **/

/**
 * hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
 *                                if not set alwaysShow, only more than one route under the children
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']     will control the page roles (you can set multiple roles)
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
    noCache: true                if true ,the page will no be cached(default is false)
  }
 **/
/*
export const constantRouterMap = [
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', noCache: true }
      }
    ]
  },
]

export default new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
*/

export const constantRouterMap = [
  {
    path: "/",
    component: Layout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/testview/testview"),
        name: "Dashboard",
        meta: { title: "dashboard", icon: "gift", noCache: true }
      }
    ]
  },
  {
    path: "/testQueryView",
    component: Layout,
    redirect: "/testQueryView/index",
    meta: {
      title: "testQueryView", //设置该路由在侧边栏和面包屑中展示的名字
      icon: "excel", //设置该路由的图标
      noCache: true //如果设置为true ,则不会被 <keep-alive> 缓存(默认 false)
    },
    children: [
      {
        path: "index",
        component: () => import("@/views/testview/testQueryView"),
        name: "testQueryView",
        meta: { title: "testQueryView", icon: "excel", noCache: true }
      }
    ]
  },
  /*\\
  外链的示例
   */
  {
    "path": "baidu-link",
    "component": Layout,
    "children": [
      {
        "path": "https://www.baidu.com",
        "meta": { "title": "externalLink", "icon": "link" }
      }
    ]
  },
  /*所有按钮一览*/
  {
    path: "/testicon",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/svg-icons"),
        name: "Icons",
        meta: { title: "icons", icon: "icon" }
      }
    ]
  },
  {
    path: "/testajax",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/testview/testajax"),
        name: "testajax",
        meta: { title: "testajax", icon: "international" }
      }
    ]
  },
  {
    path: "/testnewview",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/testview/testnewview"),
        name: "testnewview",
        meta: { title: "testnewview", icon: "international" }
      }
    ]
  }
  ,
  {
    path: "/testview4",
    component: Layout,
    children: [
      {
        path: "index",
        component: () => import("@/views/testview/testview4"),
        name: "testview4",
        meta: { title: "testview4", icon: "international" }
      }
    ]
  }

];

export const asyncRouterMap = [
  {
    path: "/guide",
    component: Layout,
    redirect: "/guide/index",
    meta: { title: "testRouterNest", icon: "guide", noCache: true },
    // alwaysShow: true, //一直显示根路由
    children: [
      {
        path: "index",
        component: () => import("@/views/testview/testview3"),
        name: "testview3",
        meta: { title: "testview1", icon: "guide", noCache: true ,roles: ['admin','editor'] }
      },
      {
        path: "view2",
        component: () => import("@/views/testview/testview2"),
        name: "testview2",
        meta: { title: "testview2", icon: "gift", noCache: true }
      }
    ]
  },
  {
    // hidden:true,//正式环境下解开此注解
    path: "/error",
    component: Layout,
    redirect: "noredirect",
    name: "ErrorPages",
    meta: {
      title: "errorPages",
      icon: "404"
    },
    children: [
      {
        path: "500",
        component: () => import("@/views/error/serverError"),
        name: "Page500",
        meta: { title: "page500", noCache: true }
      },
      {
        path: "404",
        component: () => import("@/views/error/notfoundcomponent"),
        name: "Page404",
        meta: { title: "page404", noCache: true }
      }
    ]
  },
  { path: "*", redirect: "/error/404" }
];

let basePath = process.env.basePath;
console.info("设置基准路径为：" + basePath);

export default new Router({
  mode: "history",
  base: basePath,
  routes: constantRouterMap
});
