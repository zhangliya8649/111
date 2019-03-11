import Vue from 'vue'
import router from './router'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Action from './request/Action'
import Http from './request/http'
import Vuex from 'vuex'
import store from './vuex/store'
import './assets/css/reset.css'


Vue.use(Vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.prototype.Http = Http
Vue.prototype.Action = Action

new Vue({
    store:store,//使用store
    el: '#app',
    router,
    components:{App},
    template:'<App/>'
})