import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    name: 'Login',
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      { name: 'home', path: '', component: () => import('@/views/home') },
      { name: 'qa', path: '/qa', component: () => import('@/views/qa') },
      { name: 'video', path: '/video', component: () => import('@/views/video') },
      { name: 'my', path: '/my', component: () => import('@/views/my') }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router
