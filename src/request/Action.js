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
  //3.注册
  regist:'/c10/account/register',
  //4.手机号登陆
  phoneLogin:'/c10/account/login/by_code',



  //个人中心
  // 1.根据用户id查看资料
  userInfo:'/c10/celebrity/get/by_id',
  //2.用户个人公益
  benefit:'/c10/celebrity/get/benefit',
  //3.用户从业信息
  jobInfo:'/c10/celebrity/get/by_working',
  //4.用户个人荣誉
  userHonor:'/c10/celebrity/get/honor',
  //5.添加个人公益
  addBenefit:'/c10/celebrity/add/benefit',
  //6.添加个人荣誉
  addHonor:'/c10/celebrity/add/honor',
  

  //认证信息
  // 1.搜索名称
  searchActor:'/c10/celebrity/list',
  //2.认领用户信息
  claimUser:'/c10/celebrity/claim',

}


