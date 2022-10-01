import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/marca',
    name: 'marca',
    component: () => import('../views/MarcaView.vue')
  },
  {
    path: '/marca-form/:id',
    name: 'marca-form',
    component: () => import('../views/MarcaFormView.vue')
  },  
  {
    path: '/carro',
    name: 'carro',
    component: () => import('../views/CarroView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
