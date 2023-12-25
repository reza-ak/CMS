// sass
import './assets/css/main.scss'
import './assets/css/main_responsive.scss'

// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import bootstrap from './plugins/bootstrap' // blugin

// vue
import { createApp } from 'vue'
import App from './App.vue'

// pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

// vue-router
import router from './router.js'

// vue3-persian-datetime-picker
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker'

const app = createApp(App);
app.use(bootstrap)
app.use(router);
app.use(pinia);
app.use('DatePicker', Vue3PersianDatetimePicker)
app.mount('#app');

