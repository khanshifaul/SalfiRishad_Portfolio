import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HelloWorldView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Photographer",
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'about',
      component: HomeView,
      meta: {
        title: "About",
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'gallery',
      component: HomeView,
      meta: {
        title: "Gallery",
        requiresAuth: false,
      }
    },
    {
      path: '/',
      name: 'contact',
      component: HomeView,
      meta: {
        title: "Contact",
        requiresAuth: false,
      }
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 64,
        behavior: 'smooth',
      }
    }
    else {
      return { top: 0 }
    }
  },
})

router.beforeEach((to, from, next) => {
  document.title = `Salfi Bari Khan :: ${to.meta.title}`;
  next();
});

export default router
