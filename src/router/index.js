import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import TimeEntries from '../components/TimeEntries.vue';
import LogTime from '../components/LogTime.vue';

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
  },
  {
    path: '/time-entries',
    name: 'time-entries',
    component: TimeEntries,
    children: [
      {
        path: 'log-time',
        name: 'log-time',
        component: LogTime,
      },
    ],
  },
];

const router = new Router({
  routes,
  base: '',
});

export default router;
