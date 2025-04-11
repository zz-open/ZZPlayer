import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import { router } from '@/router'

const app = createApp(App)
const unhead = createHead()
app.use(unhead)
app.use(router)
app.mount('#app')
