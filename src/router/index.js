import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/allproducts.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../views/singleproduct.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/admin.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/users.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
