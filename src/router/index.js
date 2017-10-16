import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Home from '@/components/Home';
import Report from '@/components/Report';
import ReportDetail from '@/components/ReportDetail';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/report',
      name: 'Report',
      component: Report,
    },
    {
      path: '/report_detail',
      name: 'ReportDetail',
      component: ReportDetail,
    },
  ],
});
