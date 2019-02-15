<template>
    <div>
        <div class='basic-detail'>
          <div class='search-people clear w1180'>
            <div class='img'>
              <img src='' />
            </div>
            <div class='desc'>
              <div class='tit'>
                  北京时信互联网络公司
                  <router-link to='' class='operator'>未认证</router-link>
              </div>
              <div class='con'>
                <div class='list'>
                  公司状态: 良好 {{list.occupation}}
                </div>
                <div class='list'>
                  通讯地址: {{list.certificate}}
                </div>
              </div>
            </div>
            <div class='jc-list credit'>
              <div class='num'>0{{list.rating}}</div>
              <div class='icon-txt'>信用等级</div>
            </div>
            <div class='jc-list honor'>
              <div class='num'>5{{list.commendCount}}</div>
              <div class='icon-txt'>荣誉</div>
            </div>
            <div class='jc-list no-honor'>
              <div class='num'>0{{list.loseCreditCount}}</div>
              <div class='icon-txt'>失信信息</div>
            </div>
          </div>
        </div>
        <div class="Personal-content w1180">
            <div class="papel">
                <p class="title">基本信息(影视企业)</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">电话：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">010-34234234234</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">邮箱：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">zhangliya@spap.com</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">网址：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">www.spap.com</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">地址：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">北京市朝阳区北苑路</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">工商注册号：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">34242342342342342</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">组织机构代码：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">3424234234989584</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">统一社会信用代码：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">sdsfsdf342342432686</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">纳税人识别号：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">56457567567</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">营业期限：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">2050-10-1</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">人员规模：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">500+</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">简介：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">084322</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">企业类型：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">民企</div></el-col>
                    </el-row>
                </div>
            </div>
            <div class="papel">
                <p class="title">企业荣誉</p>
                <div class="content table">
                    <el-table
                        :data="tableData1"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="时间"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="摘要"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="概述">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <!-- 面板 -->
            <div class="papel">
                <p class="title">社会公益</p>
                <div class="content table">
                    <el-table
                        :data="tableData2"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="时间"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="摘要"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="概述">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Works from '../../personal/peronalPage/works/works.vue'
import TimeLine from '../../personal/peronalPage/timeLine/timeLine'

let works = require('../../../assets/img/video.png')
export default {
    components:{Works, TimeLine},
    data(){
        //写验证规则
        var validateOldPass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.oldPass !== '') {
                this.$refs.ruleForm.validateField('newPass');
            }
            callback();
            }
        };
        var validateNewPass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入新密码'));
            } else {
            if (this.ruleForm.newPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
            }
        };
        var validateCheckPass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.newPass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return{
            list: {},
            showBasicInfo:true,//点击补全信息
            basicInfo: {
                user: '',
                region: ''
            },
            //表格数据
            tableData1: [{
                date: '2016-05-02',
                name: '王小虎1',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            tableData2: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
            //作品展示
            worksData:[
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''}
                ],
                //密码表单
             ruleForm: {
                oldPass: '',
                newPass: '',
                checkPass: ''
            },
            //密码表单验证规则
            rules: {
                oldPass: [
                    { validator: validateOldPass, trigger: 'blur' }
                ],
                newPass: [
                    { validator: validateNewPass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validateCheckPass, trigger: 'blur' }
                ]
            },
            msg:[
                {time:'2018-02-13',info:'2313421312'},
                {time:'2018-02-14',info:'2313421312'},
                {time:'2018-02-15',info:'2313421312'},
                {time:'2018-02-16',info:'2313421312'},
            ]
        }
    },
    methods:{
        //补全信息
        editBasic(){
            this.showBasicInfo = false
        },
         //弹窗
        addInfo(num){

        },
        editSure(){     //确认修改
            this.showBasicInfo = true
        },
        moreWorks(){      //更多作品
            this.$router.push({path:'MakeSure'})
        },
        addExp(){

        }
    }
}
</script>
<style lang="less" scoped>
    .basic-detail {
      width: 100%;
      height: 394px;
      background-image: url('../../../assets/credit/bg.png');
      background-repeat: no-repeat;
      background-position: top center;
      background-size: 1920px 394px;
      .search-people {
          height: 254px;
          padding-top: 77px;
          padding-bottom: 0px;
          padding-left: 0px;
          padding-right: 0px;
          margin-bottom: 10px;
        > div {
          float: left;
          color: #fff;
        }
        .img {
          margin-right: 22px;
          width: 180px;
          height: 254px;
          background: #fff;
        }
        .desc {
          width: 264px;
          margin-right: 153px;
          .tit {
            margin-bottom: 20px;
            font-size: 24px;
            .operator {
              padding-left: 15px;
              height: 15px;
              line-height: 15px;
              background-image: url('../../../assets/search/wrl.png');
              background-repeat: no-repeat;
              background-position: left top;
              font-size: 14px;
              color: #F58523;
              &.received {
                background-image: url('../../../assets/search/rl.png');
              }
            }
          }
          .list {
            height: 22px;
            line-height: 22px;
            font-size: 14px;
            span {
              a {
                color: #4393F9;
              }
            }
          }
          .role {
            margin-top: 60px;
            .role-list {
              float: left;
              box-sizing: border-box;
              width: 68px;
              height: 28px;
              border: 1px solid #F58523;
              border-radius: 4px;
              line-height: 28px;
              margin-right: 10px;
              text-align: center;
              font-size: 14px;
              color: #F58523;
            }
            .role-list:last-child {
              margin-right: 0;
            }
          }
        }
        .jc-list {
          float: left;
          margin-right: 120px;
          .num {
            height: 98px;
            line-height: 98px;
            margin-top: 50px;
            text-align: center;
            font-size: 86px;
          }
          .icon-txt {
            height: 25px;
            line-height: 25px;
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 16px;
            color: #fff;
            opacity: 0.8;
          }
            &.credit {
             .num {

             }
             .icon-txt {
               padding-left: 30px;
               background-image: url('../../../assets/search/credit.png');
             }
            }
            &.honor {
             .num {

             }
             .icon-txt {
               padding-left: 33px;
               background-image: url('../../../assets/search/honor.png');
             }
           }
           &.no-honor {
            margin-right: 0;
            .num {

            }
            .icon-txt {
              padding-left: 28px;
              background-image: url('../../../assets/search/no-honor.png');
            }
          }
        }
      }
    }
    .Personal-content{
            margin-top: 30px;
            padding-bottom: 30px;
            .papel{
                width: 100%;
                border: 1px solid #DCDFE6;
                padding-bottom: 25px;
                margin-bottom: 20px;
                padding-top: 32px;
                .btn{
                    display: flex;
                    justify-content: flex-end;
                    .papelBtn{
                        height: 40px;
                        width: 128px;
                        background-color: #F58523;
                        border-color: #F58523;
                        color: #fff;
                        border-radius: 0;
                    }
                }
                .title{
                    height: 16px;
                    margin-left: 38px;
                    border-left: 2px solid #F58523;
                    font-size: 16px;
                    color: #303133;
                    font-family: 'PingFang-SC-Medium';
                    padding-left: 6px;
                }
                .content{
                    margin-top: 25px;
                    margin-left: 38px;
                    .el-form--inline .el-form-item{
                        margin-right: 84px;
                        .input{
                            width: 202px!important;
                        }
                    }
                    .row{
                        margin-top: 25px;
                        color: #333;
                        font-size: 14px;
                        font-family: 'PingFangSC-Regular';
                    }
                    .editInfo{
                        background-color: #F58523;
                        border: 1px solid #F58523;
                        color: #fff;
                        border-radius: 0;
                    }
                }
                .exp{
                    display: flex;
                    justify-content: space-between;
                    margin-right:45px;
                    overflow-x: scroll;
                    // margin: 144px 45px 184px 38px;
                }
                .table{
                    margin-left: 22px;
                }
            }
            .works{
                .works-title{
                    color: #F58523;
                    font-size: 16px;
                    font-family: 'PingFang-SC-Medium';

                }
                .more-works{
                    text-align: right;
                    cursor: pointer;
                }
                .works-box{
                    display: flex;
                    flex-wrap: nowrap;
                    justify-content: space-between;
                }
            }
            .pwdSetting{
                border: 1px solid #DCDFE6;
                margin-top: 74px;
                padding: 30px 50px 43px 38px;
                height: 293px;
                margin-bottom: 80px;
                .title{
                    font-family: 'PingFang-SC-Medium';
                    font-size: 18px;
                    color: #000000;
                    letter-spacing: 0;
                    line-height: 18px;
                    border-left: 2px solid #F58523;
                    padding-left: 6px;
                    margin-bottom: 33px;
                }
                .form{
                    .input{
                        width: 240px!important;
                    }
                    .editPwd{
                        background-color: #F58523;
                        border: #F58523;
                        color: #fff;
                        width: 128px;
                        height: 40px;
                    }
                }
            }
        }
</style>
