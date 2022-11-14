import {createRouter, createWebHistory} from 'vue-router';
import CCMenu from './../components/CCMenu';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CCMenu }
  ]
})

export default router;