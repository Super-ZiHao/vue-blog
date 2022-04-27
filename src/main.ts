import { createApp } from 'vue'
import App from './App.vue'
import router from './route'

// 原子类样式
import '@/scss/index.scss'
// animate.css

const app = createApp(App)
app.use(router)
app.mount('#app')
