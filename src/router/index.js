import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/products/:id',
    name: 'product',
    component: () => import('../views/singleProduct.vue'),
    props: true
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/Users.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
]

export const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
