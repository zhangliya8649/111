import {Message} from 'element-ui'
class Util {
    constructor(){
  
    }
    //获取token
    getUser(){
      let user = JSON.parse(sessionStorage.getItem('userInfo')) ? JSON.parse(sessionStorage.getItem('userInfo')) : null
      return user
    }
    getUserId(){
      let user = JSON.parse(sessionStorage.getItem('userInfo')) ? JSON.parse(sessionStorage.getItem('userInfo')).user.id : null
      return user
    }
    getUserToken(){
      let user = JSON.parse(sessionStorage.getItem('userInfo')) ? JSON.parse(sessionStorage.getItem('userInfo')).token : null
      return user
    }
    //克隆
    cloneObj(obj){
      var str, newobj = obj.constructor === Array ? [] : {};
      if(typeof obj !== 'object'){
        return;
      } else if(window.JSON){
        str = JSON.stringify(obj), //序列化对象
        newobj = JSON.parse(str); //还原
      } else {//如果不支持以上方法
        for(var i in obj){
          newobj[i] = typeof obj[i] === 'object' ? this.cloneObj(obj[i]) : obj[i];
        }
      }
      return newobj;
    }   
    //时间戳转换时间
    timestampToTime(timeStamp){
      let date = new Date(timeStamp)
      let Y = date.getFullYear() + '-'
      let M = (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1) + '-'
      let D = date.getDate() < 10 ? '0'+ date.getDate() + ' ' : date.getDate() + ' '
      // let h = date.getHours() < 10 ? '0' + date.getHours() + ':' : date.getHours() + ':'
      // let m = date.getMinutes() < 10 ? '0' + date.getMinutes() + ':' : date.getMinutes() + ':'
      // let s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return Y + M + D 
    }


    //表单验证
    checkPhone(phone){
      let reg = /^1[34578]\d{9}$/;
      if(reg.test(phone)){
        return 'success'
      }else{
        return '请输入正确的手机号'
      }
    }

    //再次输入密码检查
    checkPassAgin(pass,passAgin){
      if(pass === passAgin){
        return  'success'
      }else{
        return '两次密码输入不一致'
      }
    }


    //检查密码类型
    checkPass(password){
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
      if(reg.test(password)){
        return 'success'
      }else{
        return '密码只支持8~16位数字字母组合'
      }
    }



    //错误码
    ErrorCode(code){
      switch (code){
        case 500 : Message({
          type:'error',
          message:'服务器出错'
        });break;
        case 10001 : Message({
          type:'error',
          message:'图片验证码错误'
        });break;
        case 10011 : Message({
          type:'error',
          message:'手机号无效'
        });break;
        case 10012 : Message({
          type:'error',
          message:'手机验证码错误'
        });break;
        case 10013 : Message({
          type:'error',
          message:'该手机号已注册'
        });break;
        case 10014 : Message({
          type:'error',
          message:'账号未注册'
        });break;
        case 10015 : Message({
          type:'error',
          message:'密码错误'
        });break;
        case 10016 : Message({
          type:'error',
          message:'注册失败'
        });break;
        case 10017 : Message({
          type:'error',
          message:'token失效，请重新登陆'
        });break;
        case 10020 : Message({
          type:'error',
          message:'账号错误'
        });break;
        case 10021 : Message({
          type:'error',
          message:'账号不存在'
        });break;
      }
    }
    
  }
  export default new Util()
  