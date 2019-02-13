/**
 * Created by zhangliya on 2019/1/30.
 */
import axios from 'axios'
import QS from 'qs'
import Action from './Action'

const TIME_OUT_MS = 60 * 1000 // 默认请求超时时间

export default {

  /*
    * post请求
    * */
  post (url, data, response, exception) {
    this.request(url, QS.stringify(data), 'post', response, exception)
  },

  /*
    * get请求
    * */
  get (url, data, response, exception) {
    this.request(url, data, 'get', response, exception)
  },

  /*
     * @param url  请求地址
     * @param data 参数
     * @param type  请求方式
     * @param response 请求成功回调
     * @param exception 异常的回调函数
     */
  request (url, data, type, response, exception) {
    axios({
      method: type,
      url: Action.BaseUrl + url,
      data: data,
      timeout: TIME_OUT_MS,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(
      (dataObj) => {
        if (dataObj.data.code == 200) {
          response(dataObj.data.data)
        } else {
          // 错误处理，待写
          response(dataObj.data)
        }
      }
    ).catch(
      (err) => {
        if (exception) {
          exception(err)
        } else {
          console.log(err)
        }
      }
    )
  }
}
