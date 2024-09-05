import { createApp } from 'vue'
import './style.css'
import { createHead } from '@unhead/vue'
import App from './App.vue'

const app = createApp(App)
const head = createHead()
app.use(head)
app.mount('#app')
