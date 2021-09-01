import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Listing',
    component: () => import('../views/Listing.vue')
  },
  {
    path: '/pokemon/pokemonId',
    name: 'Detail',
    component: () => import('../views/Detail.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
