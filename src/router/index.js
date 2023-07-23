import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shop from '../views/shop.vue'
import contact from '../views/contact.vue'
import control from '../views/control-panel.vue'
import account from '../views/account.vue'
import favorite from '../views/favorite.vue'
import checkout from '../views/checkout.vue'
import cart from '../views/cart.vue'
import login from '../views/login.vue'
import register from '../views/register.vue'
import productnew from '../views/add-new-product.vue'
import productdetails from '../views/product-details.vue'
import updateproduct from '../views/update-product.vue'
import error from '../views/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: shop
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/control',
    name: 'control',
    component: control
  },
  {
    path: '/account',
    name: 'account',
    component: account
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: favorite
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: checkout
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/add-new-product',
    name: 'add-new-product',
    component: productnew
  },
  {
    path: '/product-details',
    name: 'product-details',
    component: productdetails
  },
  {
    path: '/update-product/',
    name: 'update-product',
    component: updateproduct,

  },
  {
    path: '/404',
    name: '404',
    component: error
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
