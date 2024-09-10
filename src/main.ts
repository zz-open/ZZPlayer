import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import App from './App.vue'
import { router } from '@/router'

const app = createApp(App)
const head = createHead()
app.use(head)
app.use(router)
app.mount('#app')
