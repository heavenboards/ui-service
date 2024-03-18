import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import HomeView from '../views/Home.vue'
import BoardView from '../views/Board.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/board',
    name: 'Board',
    component: BoardView,
    meta: { requiresAuth: true }
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

//global guard
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isAuthenticated = localStorage.getItem('authToken');
    if (!isAuthenticated) {
      next({
        name: 'Login',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
