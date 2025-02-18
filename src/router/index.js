import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/HomeComponent.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import(/* webpackChunkName: "about" */ '../components/ServicesComponent.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../components/HomeComponent.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "about" */ '../components/ContactComponent.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import(/* webpackChunkName: "about" */ '../components/GalleryComponent.vue')
  },
  {
    path: '/prices',
    name: 'Prices',
    component: () => import(/* webpackChunkName: "about" */ '../components/PricesComponent.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
