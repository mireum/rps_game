import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import { createPinia } from 'pinia'
// import router from './router'
// import socket from 'vue3-websocket'

const app = createApp(App)

// createApp(App).mount('#app')
app.use(createPinia())
// app.use(router)
app.config.globalProperties.axios = axios;
// app.use(socket, 'http://localhost:8000')
app.mount('#app')