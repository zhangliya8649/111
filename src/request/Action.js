/**
 * Created by zhangliya on 2019/1/30.
 */
export default {
  BaseUrl: 'http://125.208.1.66:11122',

  // 搜索
  SearchList: '/c10/search/list',
  GetHomeData: '/c10/statistics/data/show',


  // 人
  SearchPeopleListByKey: '/c10/celebrity/list',
  SearchPersonById: '/c10/celebrity/get/by_id',   //根据艺人列表id查询详情

  // 作品
  SearchWorksListByKey: '/c10/subject/list',    //根据条件查作品列表
  SearchWorkById: '/c10/subject/get/by_id',
  //图片验证码
  imgCode:'/c10/account/img/code/get',


  // 登陆注册
  // 1.账号密码登陆
  passwordLogin:'/c10/account/login/by_pwd',
  // 2.获取手机验证码
  getPhoneCode:'/c10/account/send/code',
}


