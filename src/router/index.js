import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: () => import('../views/Auth/RegisterView.vue'),
    meta:{requireAuth:true}
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('../views/Auth/LoginView.vue')
  },
  {
    path: '/index',
    name: 'IndexView',
    component: () => import('../views/Admin/IndexView.vue'),
    meta:{requireAuth:true}
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
