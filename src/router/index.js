import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/home.vue'
import Login from '../views/login/login.vue'
import Credit from '../views/credit/credit.vue'
import works from '../views/credit/works/works.vue'
import hotPeople from '../views/credit/people/hotPeople/people.vue'
import moviePeople from '../views/credit/people/moviePeople/moviePeople.vue'
import tvPeople from '../views/credit/people/tvPeople/tvPeople.vue'
import movieCompany from '../views/credit/company/movieCompany/movieCompany.vue'
import tvCompany from '../views/credit/company/tvCompany/tvCompany.vue'
import worksDetail from '../views/credit/works/worksDetail/worksDetail.vue'
import peopleDetail from '../views/credit/people/peopleDetail.vue'
import companyDetail from '../views/credit/company/companyDetail.vue'
import Personal from '../views/personal/personal.vue'
import MakeSure from '../views/personal/makeSureInfo/makeSureInfo.vue'
import Search from '../views/search/search.vue'
import Register from '../views/register/regist.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: ''
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
      component: Credit,
      redirect: {name: 'hotPeople'},
      children: [
        {
          path: 'works',
          name: 'works',
          component: works
        },
        {
          path: 'people/hotPeople',
          name: 'hotPeople',
          component: hotPeople
        },
        {
          path: 'people/moviePeople',
          name: 'moviePeople',
          component: moviePeople
        },
        {
          path: 'people/tvPeople',
          name: 'tvPeople',
          component: tvPeople
        },
        {
          path: 'company/movieCompany',
          name: 'movieCompany',
          component: movieCompany
        },
        {
          path: 'company/tvCompany',
          name: 'tvCompany',
          component: tvCompany
        }
      ]
    },
    {
      path: '/credit/works/worksDetail',
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
      component: Personal,
      meta: { 
        requireAuth: true
      },
    },
    {
      path: '/MakeSure',
      name: 'MakeSure',
      component: MakeSure,
      meta: { 
        requireAuth: true
      },
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
  mode: 'history'
})
// 判断是否需要权限
router.beforeEach((to, from, next) => {
  if(to.matched.some(res => res.meta.requireAuth)) {
    if(sessionStorage.getItem('userInfo')) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
}) 
export default router
