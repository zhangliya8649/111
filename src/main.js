// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
<<<<<<< HEAD
import ElementUI from'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
=======
import Action from './request/Action.js'
import Http from './request/http.js'

>>>>>>> 9d67773257f844f9e22cae14fe7631e88753530d

Vue.use(ElementUI)
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
