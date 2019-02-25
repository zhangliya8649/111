<template>
    <div>
        <div class='basic-detail'>
          <div class='search-people clear w1180'>
            <div class='img'>
              <img :src='list.celebrityHeadUrl' />
            </div>
            <div class='desc'>
              <div class='tit'>
                  {{list.celebrityName}}
                  <router-link to='/register' class='operator' v-if='list.claimState == 1'>未认领</router-link>
                  <router-link to='/register' class='operator' v-else-if='list.claimState == 2'>审核中</router-link>
                  <span class='operator' v-else-if='list.claimState == 3'>已认领</span>
              </div>
              <div class='con'>
                <div class='list'>
                  职业: {{list.occupation}}
                </div>
                <div class='list'>
                  所属机构: {{list.agency}}
                </div>
              </div>
            </div>
            <div class='jc'>
              <div class='jc-head clear'>
                <div class='jc-list credit'>
                  <div class='num'>{{list.rating}}</div>
                  <div class='icon-txt'>信用等级</div>
                </div>
                <div class='jc-list honor'>
                  <div class='num'>{{list.commendCount ? list.commendCount : 0}}</div>
                  <div class='icon-txt'>荣誉</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{list.loseCreditCount ? list.loseCreditCount : 0}}</div>
                  <div class='icon-txt'>失信信息</div>
                </div>
              </div>
              <div class='jc-foot clear'>
                <div class='jc-list credit'>
                  <div class='num'>{{list.workingYear ? list.workingYear : 0}}<span>年</span></div>
                  <div class='icon-txt'>执业年限</div>
                </div>
                <div class='jc-list honor'>
                  <div class='num'>{{list.subjectCount ? list.subjectCount : 0}}<span>部</span></div>
                  <div class='icon-txt'>作品数量</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{list.xzPenalty ? list.xzPenalty : 0}}<span>条</span></div>
                  <div class='icon-txt'>行政处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{list.xsPenalty ? list.xsPenalty : 0}}<span>条</span></div>
                  <div class='icon-txt'>行事处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{list.industryDispose ? list.industryDispose : 0}}<span>条</span></div>
                  <div class='icon-txt'>行业处分</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{list.negligence ? list.negligence : 0}}<span>条</span></div>
                  <div class='icon-txt'>责任事故</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="Personal-content w1180">
            <div class="papel">
                <p class="title">基本信息</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.celebrityName}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.sex == 1 ? '男' : list.sex == 2 ? '女' : ''}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">1{{list.age}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">祖籍：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">中国{{list.nationality}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">公司：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">北京眼缘影视传媒有限公司{{list.agency}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职务：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">1{{list.position}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">学历：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">本科{{list.education}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">演员{{list.occupation}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">政治面貌：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">群众{{list.politics}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">执业年限：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.workingYear ? list.workingYear : 0}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业证书：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">2{{list.certificate}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">证书时间：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">2019.2.21{{list.certificateTime}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">代表作品：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">3{{list.portfolio}}</div></el-col>
                    </el-row>
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
                  <p class="more-works" @click="moreWorks()">全部作品》</p>
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

    created: function() {
       this.getDataDetail(this.$route.query.id, this.$route.query.type);
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

        },

        getDataDetail(id, type) {
          let param = {
            celebrityId: id,
            identityType: type
          };
          this.Http.post(this.Action.SearchPersonById, param).then((data) => {
            this.list = data.celebrity;
            console.log(this.list);
          }).catch((err) => {
            console.log(err);
          })
        },


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
          img {
            width: 100%;
          }
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
            opacity: 0.8;
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
           .jc-list:last-child {
            margin-right:0;
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
