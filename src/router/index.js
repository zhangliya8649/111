import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
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
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/MakeSure',
      name: 'MakeSure',
      component: MakeSure
    },{
      path: '/Register',
      name: 'Register',
      component: Register
    }
  ],
  mode: 'history'
})
