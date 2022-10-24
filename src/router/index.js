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
    meta:{requireAuth:true},
    children:[
        /* 
          -- COMPANY --
        */
          {
            path: '/company',
            name: 'CompanyView',
            component: () => import('../views/Admin/Company/CompanyView.vue'),
          },
          {
            path: '/company/:id',
            name: 'CompanyInfoView',
            component: () => import('../views/Admin/Company/CompanyShowView.vue'),
          },

          /* 
          -- BASE --
        */
          {
            path: '/base',
            name: 'BaseView',
            component: () => import('../views/Admin/Base/BaseView.vue'),
          },
          {
            path: '/base/:id',
            name: 'BaseInfoView',
            component: () => import('../views/Admin/Base/BaseShowView.vue'),
          },

          /* CATEGORY */
          {
            path: '/category',
            name: 'CategoryView',
            component: () => import('../views/Admin/Category/CategoryView.vue'),
          },
          {
            path: '/category/:id',
            name: 'CategoryInfoView',
            component: () => import('../views/Admin/Category/CategoryShowView.vue'),
          },
    ]
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
