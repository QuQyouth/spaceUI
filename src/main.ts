import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '//at.alicdn.com/t/c/font_3942763_ul2evz6zjkr.js'

import './assets/main.css'
import './lib/space.scss'

const app = createApp(App)

app.use(router)

app.mount('#app')
