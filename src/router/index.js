import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
