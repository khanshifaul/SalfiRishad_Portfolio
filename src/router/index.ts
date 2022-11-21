import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HelloWorldView/HomeView.vue'
import AboutView from '@/views/HelloWorldView/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
