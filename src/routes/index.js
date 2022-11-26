import {createRouter, createWebHistory} from 'vue-router';
import CCMenu from './../components/CCMenu';
import Class from './../components/Class';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CCMenu },
    { path: '/class', component: Class}
  ]
})

export default router;