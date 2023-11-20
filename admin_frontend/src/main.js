// sass
import './assets/main.scss'

// bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

// vue
import { createApp } from 'vue'
import App from './App.vue'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// vue-router
import router from './router.js'

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
