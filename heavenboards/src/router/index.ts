import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import HomeView from '../views/Home.vue'
import BoardView from '../views/Board.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/board',
      name: 'board',
      component: BoardView
    }
  ]
})

export default router
