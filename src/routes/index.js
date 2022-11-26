import {createRouter, createWebHistory} from 'vue-router';
import CCMenu from './../components/CCMenu';
import Class from './../components/Class';
import Calculator from './../components/Calculator'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: CCMenu },
    { path: '/class', component: Class},
    { path: '/calculator', component: Calculator}
  ]
})

export default router;