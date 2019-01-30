// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import Action from './request/Action.js'
import Http from './request/http.js'


Vue.config.productionTip = false

Vue.prototype.Http = Http
Vue.prototype.Action = Action


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
