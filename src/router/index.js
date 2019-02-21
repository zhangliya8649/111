import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import Credit from '../views/credit/credit.vue'
import worksDetail from '../views/credit/works/worksDetail.vue'
import peopleDetail from '../views/credit/people/peopleDetail.vue'
import companyDetail from '../views/credit/company/companyDetail.vue'
import Personal from '../views/personal/personal.vue'
import MakeSure from '../views/personal/makeSureInfo/makeSureInfo.vue'
import Search from '../views/search/search.vue'
import Register from '../views/register/regist.vue'

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
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/credit/works',
      name: 'worksDetail',
      component: worksDetail
    },
    {
      path: '/credit/people',
      name: 'peopleDetail',
      component: peopleDetail
    },
    {
      path: '/credit/company',
      name: 'companyDetail',
      component: companyDetail
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
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  mode: 'history'
})
