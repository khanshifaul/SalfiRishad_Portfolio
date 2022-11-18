import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HelloworldView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Full-stack Web Developer :: Designer :: Cybersecurity Researcher",
        requiresAuth: false,
      }
    },
  ]
})

export default router
