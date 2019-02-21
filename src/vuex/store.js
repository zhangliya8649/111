import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //状态
    state: {
        userInfo: sessionStorage.getItem('userInfo') ? JSON.parse(sessionStorage.getItem('userInfo')) : '',
        isLogin: sessionStorage.getItem('userInfo') ? true : false,
    },
    //get
    getters: {
        //状态登录
        isLogin(state){
            return state.isLogin
        },
        getUserName(state){
            return state.userInfo
        },
        //token
        getToken(state){
            return state.userInfo.token 
        },
    },
    //更新状态
    mutations: {
        // login
        login(state) {
            state.userInfo = JSON.parse(sessionStorage.getItem('userInfo')) ? JSON.parse(sessionStorage.getItem('userInfo')) : null
            state.isLogin = true
        },
        //sign out
        signOut(state) {
            sessionStorage.removeItem('userInfo')
            state.userInfo = ''
            state.isLogin = false
        },
        //modify个人信息
        setUserInfo(state){
            state.userInfo = JSON.parse(sessionStorage.getItem('userInfo'))
            state.isLogin = true
        },
    },
    //触发mutations中的方法
    actions: {
        modifyUserInfo({commit}, data){
            commit('setUserInfo', data)
        }
    
    }
})

