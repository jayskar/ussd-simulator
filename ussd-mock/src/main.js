import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import '@/assets/styles.css';

// Create and mount the Vue app
const app = createApp(App);

// Use the router
app.use(router);

// Mount the app to the DOM
app.mount('#app');

