/**
 * Created by zhangliya on 2019/1/30.
 */
export default {
  BaseUrl: 'http://125.208.1.66:11122',

  // 搜索
  SearchList: '/c10/search/list',
  GetHomeData: '/c10/statistics/data/show',   //获取首页统计数据


  // 人
  SearchPeopleListByKey: '/c10/celebrity/list',
  SearchPersonById: '/c10/celebrity/get/by_id',   //根据id查询基本信息
  SearchPersonWorkById: '/c10/celebrity/get/by_working',  //查询从业信息
  SearchPersonHonorById: '/c10/celebrity/get/honor',       //查询个人荣誉
  SearchPersonBenefitById: '/c10/celebrity/get/benefit',  //查询社会公益
  SearchPersonCreditById: '/c10/celebrity/get/credit',  //查询失信信息

  // 作品
  SearchWorksListByKey: '/c10/subject/list',    //根据条件查作品列表
  SearchWorkById: '/c10/subject/get/by_id',     //根据作品id查询详情
  SearchWorkNumById: '/c10/subject/get/by_cid',     //根据人物id作品数量


  //公司
  SearchCompanyListByKey: '/c10/company/list',       //查询公司列表
  SearchCompanyById: '/c10/company/get/by_id',       //查询公司列表
  SearchCompanyHonorById: '/c10/company/get/honor',   //查询公司荣誉
  SearchCompanyCreditById: '/c10/company/get/credit', //查询公司失信信息

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
  companyInfo: '/c10/company/get/by_id',   //查企业负责人信息
  companyBenefit: '/c10/company/get/benefit',   //查企业负责人信息
  //2.获取用户个人公益
  benefit:'/c10/celebrity/get/benefit',
  //3.用户从业信息
  jobInfo:'/c10/celebrity/get/by_working',
  //4.用户个人荣誉
  userHonor:'/c10/celebrity/get/honor',
  //5.添加个人公益
  addBenefit:'/c10/celebrity/add/benefit',
  addCompanyBenefit:'/c10/company/add/benefit',
  //6.添加个人荣誉
  addHonor:'/c10/celebrity/add/honor',
  // 添加从业信息
  addWork: '/c10/celebrity/add/working',
  // 根据id获取作品
  getProduction: '/c10/subject/get/by_cid',
  // 获取用户身份
  getUserid: '/c10/user/get/by_uid',
  // 修改密码
  modifyPwd: '/c10/user/modify/pwd',
  // 补全个人信息
  updatePersonInfo: '/c10/celebrity/update',
  // 根据名字获取电影名
  getSubject: '/c10/subject/list',
  // 人物关联添加作品
  personAddSub:'/c10/celebrity/relative/subject',
  //认证信息
  // 1.搜索名称
  searchActor:'/c10/celebrity/list',
  //2.认领用户信息
  claimUser:'/c10/celebrity/claim',

  // 搜索公司
  searchCompany: '/c10/company/list',

  // 上传文件
  upload: '/c10/upload',
  // 提交公司证认证
  companyCertificate: '/c10/company/certificate',
  // 非业内人士资料修改
  outer: '/c10/user/modify/user/info',
  // 天眼查提交
  eyeCompany: '/c10/company/certificate/by_url',
}


