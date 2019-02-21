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
    
  }
  export default new Util()
  