import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '../node_modules/@vueuse/motion'
import toast from 'vue-sonner' // Import vue-sonner



import './styles/tailwind.css'
import './styles/_fonts.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)
app.use(toast)

app.mount('#app')