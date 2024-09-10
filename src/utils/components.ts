import { defineAsyncComponent } from 'vue'

export const AsyncAplayerJs = defineAsyncComponent(() =>
  import('@/components/aplayer-js'),
)

export const HomePage = () => import('@/views/home-page/index.vue')
export const LocalPage = () => import('@/views/local-page/index.vue')
export const ServerPage = () => import('@/views/server-page/index.vue')
