/**
 * 图片上传专用,头部设置有修改,不需要qs转
 */
import axios from 'axios'
import Action from './Action'
import {Message} from 'element-ui'

const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间

export default {
  /*
   * post请求
   * */
    post(url, data){
      return this.request(url, data, 'post')
    },

  /*
    * get请求
    * */
  get (url, data) {
    return this.request(url, data, 'get')
  },

  /*
     * @param url  请求地址
     * @param data 参数
     * @param type  请求方式
     * @param response 请求成功回调
     * @param exception 异常的回调函数
     */
  request (url, data, type) {
    let promise = new Promise((resolve,reject) => {
        axios({
        method: type,
        url: Action.BaseUrl + url,
        data: data,
        timeout: TIME_OUT_MS,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
        }).then(
          (res) => {
              if (res.data.code == 200) {
                  resolve(res.data.data)
              } else {
                  resolve(res)
              }
          }
        ).catch(
          (err) => {
            Message({
              type:'error',
              message:'请求错误'
            })
          }
        )
    })
    return promise
  }
}
