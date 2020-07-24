import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'enter',
    component: () => import('@/views/enter'),
    meta: {
      pageTitle: "欢迎",
    },
   
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/home'),
    meta: {
      pageTitle: "主页",
    },
    children:[
  
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
