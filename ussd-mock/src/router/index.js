import { createRouter, createWebHistory } from 'vue-router';
import HomeScreen from '@/components/HomeScreen.vue';
import UssdScreen from '@/components/UssdScreen.vue';

const routes = [
  {
    path: '/',
    name: 'HomeScreen',
    component: HomeScreen
  },
  {
    path: '/ussd',
    name: 'UssdScreen',
    component: UssdScreen
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
