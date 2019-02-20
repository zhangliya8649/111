import axios from 'axios'
import Action from './Action'
// import VueCookie from 'vue-cookie'
import qs from 'qs'


axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.defaults.timeout = 10000;   // 超时时间
axios.defaults.baseURL = Action.BaseUrl;


axios.interceptors.request.use((config) => {
    // let token = VueCookie.get('spap_token')
    // if(token){
    //     config.headers.adoptToken = token
    // } 

    if(config.method == 'post'){
        config.data = qs.stringify(config.data)
    }
    console.log(config)
    return config
},(err) => {
    console.log(err)
})


axios.interceptors.response.use((res) => {
    if(res.data.code == 200){
        return Promise.resolve(res.data)
    }else{
        switch (res.data.code){
            case 400 : return Promise.reject(res);break;
            case 404 : return Promise.reject(res);break;
            case 500 : return Promise.reject(res);break;
        }
    }
})