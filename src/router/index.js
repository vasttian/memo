import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';

Vue.use(Router)

// 页面路由
const routes = [
  {
    path: '/',
    name: 'index',
    component: Home,
  },
  {
  	path: '/home',
  	name: 'home',
  	component: Home,
  }
];

const router = new Router({
  routes,
  base: '',
});

export default router;
