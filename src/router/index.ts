import { createRouter, createWebHashHistory } from 'vue-router'
import { HomePage, LocalPage, ServerPage } from '@/utils'

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: HomePage }, // 404直接返回首页
  { path: '/', name: 'home', component: HomePage },
  { path: '/local', name: 'local', component: LocalPage },
  { path: '/server', name: 'server', component: ServerPage },
]

export const router = createRouter({
  history: createWebHashHistory (),
  routes,
  scrollBehavior(_, __, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0 }
    }
  },
})
