// import css file
import './assets/main.css'

// import bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'

// import vue
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);
app.mount('#app');
