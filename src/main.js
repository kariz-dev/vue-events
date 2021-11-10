import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Bulma
import 'bulma/css/bulma.css';

createApp(App).use(router).mount('#app')
