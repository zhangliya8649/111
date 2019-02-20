<template>
    <div>
        <div class='basic-detail'>
          <div class='search-people clear w1180'>
            <div class='img'>
              <img src='' />
            </div>
            <div class='desc'>
              <div class='tit'>
                  赵丽颖
                  <span class='operator'>未认证</span>
              </div>
              <div class='con'>
                <div class='list'>
                  职业: 演员/配音 {{list.occupation}}
                </div>
                <div class='list'>
                  所属机构: {{list.agency}}
                </div>
              </div>
            </div>
            <div class='jc'>
              <div class='jc-head clear'>
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
              <div class='jc-foot clear'>
                <div class='jc-list credit'>
                  <div class='num'>0<span>年</span></div>
                  <div class='icon-txt'>执业年限</div>
                </div>
                <div class='jc-list honor'>
                  <div class='num'>5<span>部</span></div>
                  <div class='icon-txt'>作品数量</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>0<span>条</span></div>
                  <div class='icon-txt'>行政处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>0<span>条</span></div>
                  <div class='icon-txt'>行事处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>0<span>条</span></div>
                  <div class='icon-txt'>行业处分</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>0<span>条</span></div>
                  <div class='icon-txt'>责任事故</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="Personal-content w1180">
            <div class="papel">
                <p class="title">基本信息</p>
                <div class="content" v-if='showBasicInfo'>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">乔杉</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">男</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">31</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">祖籍：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">中国</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">公司：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">北京眼缘影视有限公司</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职务：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">好好好</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">学历：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">本科</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职业：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">演员</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">政治面貌：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">党员</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">执业时间：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">2012.08.09</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职业证书：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">084322</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">证书时间：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">2019.09.09</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">代表作品：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">设计部</div></el-col>
                    </el-row>
                </div>
                <div class="content" v-else>
                    <el-form :inline="true" :model="basicInfo" class="demo-form-inline">
                        <el-form-item label="姓名：" label-width='90px'>
                            <el-input :disabled='true' v-model="basicInfo.user"></el-input>
                        </el-form-item>
                        <el-form-item label="性别：" label-width='90px'>
                            <el-input v-model="basicInfo.sex" placeholder="请输入您的性别"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄：" label-width='90px'>
                            <el-input v-model="basicInfo.age" placeholder="请输入您的年龄"></el-input>
                        </el-form-item>
                        <el-form-item label="祖籍：" label-width='90px'>
                            <el-input v-model="basicInfo.country" placeholder="请输入您的祖籍"></el-input>
                        </el-form-item>
                        <el-form-item label="公司：" label-width='90px'>
                            <el-input v-model="basicInfo.company" placeholder="请输入公司名称"></el-input>
                        </el-form-item>
                        <el-form-item label="职务：" label-width='90px'>
                            <el-input v-model="basicInfo.level" placeholder="请输入您的职务"></el-input>
                        </el-form-item>
                        <el-form-item label="学历：" label-width='90px'>
                            <el-input v-model="basicInfo.edu" placeholder="请输入您的学历"></el-input>
                        </el-form-item>
                        <el-form-item label="职业：" label-width='90px'>
                            <el-select v-model="basicInfo.job" placeholder="请选择您的职业" class="input">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="政治面貌：" label-width='90px'>
                            <el-input v-model="basicInfo.user" placeholder="请输入您的政治面貌"></el-input>
                        </el-form-item>
                        <el-form-item label="执业时间：" label-width='90px'>
                            <el-input v-model="basicInfo.worktime" placeholder="请选择您的执业时间"></el-input>
                        </el-form-item>
                        <el-form-item label="职业证书：" label-width='90px'>
                            <el-input v-model="basicInfo.certificate" placeholder="请输入您的证书编号"></el-input>
                        </el-form-item>
                        <el-form-item label="证书时间：" label-width='90px'>
                            <el-input v-model="basicInfo.certificatetime" placeholder="请选择您的证书时间"></el-input>
                        </el-form-item>
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="8">
                                <el-form-item label="代表作品：" label-width='90px'>
                            <el-input v-model="basicInfo.works" placeholder="请输入您的代表作品"></el-input>
                        </el-form-item>
                            </el-col>
                            <el-col :span="8" :offset="8" style="paddingLeft:19.5%">
                                <el-form-item>
                                    <el-button class="editInfo" @click="editSure">确认</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </div>
            <div class="papel">
                <p class="title">从业信息（执业经历）</p>
                <div class="content exp">
                    <TimeLine v-for="(data,index) in msg" :msg='data' :key='index'></TimeLine>
                </div>
            </div>
            <div class="papel">
                <p class="title">个人荣誉</p>
                <div class="content table">
                    <el-table
                        :data="tableData1"
                        style="width: 100%">
                        <el-table-column
                            prop="date"
                            label="日期"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址">
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
                            label="日期"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="地址">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="works-par">
                <div class='works-title clear'>
                  <p class="tit-desc">作品（与<span>XXX</span>相关的，共有<span>XXX</span>部作品）</p>
                  <p class="more-works" @click="moreWorks">全部作品》</p>
                </div>
                <div class="works-box">
                    <Works v-for="(data,index) in worksData" :data='data' :key='index'></Works>
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
      background-image: url('../../../assets/credit/bg1.png');
      background-repeat: no-repeat;
      background-position: top center;
      background-size: 1920px 394px;
      margin-top: -10px;
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
          margin-right: 100px;
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
            }
            .role-list:last-child {
              margin-right: 0;
            }
          }
        }
        .jc {
         float: left;
         width: 590px;
         .jc-list {
           float: left;
           margin-right: 120px;
           .num {
             text-align: center;
           }
         }
         .jc-list:last-child {
          margin-right: 0;
         }
         .jc-head {
          border-bottom: 1px solid #fff;
          padding-bottom: 30px;
          .jc-list {
            .num {
              height: 70px;
              line-height: 70px;
              font-size: 68px;
            }
            .icon-txt {
               height: 25px;
               line-height: 25px;
               background-repeat: no-repeat;
               background-position: left center;
               font-size: 16px;
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
         .jc-foot {
           padding-top: 30px;
           .jc-list {
             margin-right: 50px;
             .icon-txt {
              font-size: 12px;
              opacity: 0.8;
             }
             .num {
               height: 50px;
               line-height: 50px;
               font-size: 36px;
               span {
                font-size: 12px;
                opacity: 0.8;
               }
             }
           }
         }
        }
      }
    }
    .Personal-content{
            padding-bottom: 136px;
            margin-top: 30px;
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
            .works-par {
                margin-top: 52px;
                .works-title{
                    color: #F58523;
                    font-size: 16px;
                    .tit-desc {
                      float: left;
                      width: 300px;
                    }
                    .more-works{
                        float: right;
                        width: 80px;
                        text-align: right;
                        cursor: pointer;
                    }
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
