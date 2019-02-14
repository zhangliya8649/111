import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import Credit from '../views/credit/credit.vue'
import Personal from '../views/personal/personal.vue'
import MakeSure from '../views/personal/makeSureInfo/makeSureInfo.vue'
import Register from '../views/search/searchPeople.vue'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/MakeSure',
      name: 'MakeSure',
      component: MakeSure
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
