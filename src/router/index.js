import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/auth/Login'
import Dashboard from '@/components/Dashboard'
import User from '@/components/User'
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta: {requiresAuth: true}
    },
    {
      path: '/user',
      name: 'user.get',
      component: User,
    },
  ]
})
