import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import VueSmoothScroll from 'vue3-smooth-scroll'

import './scss/main.scss'

const app = createApp(App)

app.use(router)
app.use(VueSmoothScroll)
app.mount('#app')
