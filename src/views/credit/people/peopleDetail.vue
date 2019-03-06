<template>
    <div id='people'>
        <div class='basic-detail'>
          <div class='search-people clear w1180'>
            <div class='img'>
              <img :src='basicDetail.celebrityHeadUrl' />
            </div>
            <div class='desc'>
              <div class='tit'>
                  {{basicDetail.celebrityName}}
                  <router-link :to='this.$store.state.isLogin ? "/MakeSure" : "/register"' class='operator' v-if='basicDetail.claimState == 1'>未认领</router-link>
                  <span class='operator' v-else-if = 'basicDetail.claimState == 2'>审核中</span>
                  <span class='operator' v-else>已认领</span>
              </div>
              <div class='con'>
                <div class='list'>
                  职业: {{basicDetail.occupation}}
                </div>
                <div class='list'>
                  所属机构: {{basicDetail.agency}}
                </div>
              </div>
            </div>
            <div class='jc'>
              <div class='jc-head clear'>
                <div class='jc-list credit'>
                  <div class='num'>{{basicDetail.rating}}</div>
                  <div class='icon-txt'>信用等级</div>
                </div>
                <div class='jc-list honor'>
                  <div class='num'>{{basicDetail.commendCount ? basicDetail.commendCount : 0}}</div>
                  <div class='icon-txt'>荣誉</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{basicDetail.loseCreditCount ? basicDetail.loseCreditCount : 0}}</div>
                  <div class='icon-txt'>失信信息</div>
                </div>
              </div>
              <div class='jc-foot clear'>
                <div class='jc-list credit'>
                  <div class='num'>{{basicDetail.workingYear ? basicDetail.workingYear : 0}}<span>年</span></div>
                  <div class='icon-txt'>执业年限</div>
                </div>
                <div class='jc-list honor'>
                  <div class='num'>{{basicDetail.subjectCount ? basicDetail.subjectCount : 0}}<span>部</span></div>
                  <div class='icon-txt'>作品数量</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{basicDetail.xzPenalty ? basicDetail.xzPenalty : 0}}<span>条</span></div>
                  <div class='icon-txt'>行政处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{basicDetail.xsPenalty ? basicDetail.xsPenalty : 0}}<span>条</span></div>
                  <div class='icon-txt'>行事处罚</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{basicDetail.industryDispose ? basicDetail.industryDispose : 0}}<span>条</span></div>
                  <div class='icon-txt'>行业处分</div>
                </div>
                <div class='jc-list no-honor'>
                  <div class='num'>{{basicDetail.negligence ? basicDetail.negligence : 0}}<span>条</span></div>
                  <div class='icon-txt'>责任事故</div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div class="Personal-content w1180">
            <ul class='menu'>
              <li :class="curIndex == index ? 'active' : ''" v-for="(menu, index) in menus"><a :href="'#' + menu.id">{{menu.name}}</a></li>
            </ul>
            <div class="papel" id='basicDetail'>
                <p class="title">基本信息</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.celebrityName}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.sex == 1 ? '男' : basicDetail.sex == 2 ? '女' : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.age ? basicDetail.age : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">祖籍：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.nationality ? basicDetail.nationality : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">公司：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.agency ? basicDetail.agency : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职务：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.position ? basicDetail.position : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">学历：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.education ? basicDetail.education : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.occupation ? basicDetail.occupation : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">政治面貌：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.politics ? basicDetail.politics : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">执业年限：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.workingYear ? basicDetail.workingYear : 0}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业证书：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.certificate ? basicDetail.certificate : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">证书时间：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.certificateTime ? certificateTime : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">代表作品：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicDetail.portfolio ? basicDetail.portfolio : ''}}</div></el-col>
                    </el-row>
                </div>
            </div>
            <!--登录后可查-->
            <div class='login-show'>
              <div class='login-shadow-par' v-if='!this.$store.state.isLogin'>
                <div class='login-shadow'>
                  <div class='s-tip'>登录后，可查看该艺人的详细信息</div>
                  <div class='s-btn'>登录</div>
                </div>
              </div>
              <div class="papel" id='jobDetail'>
                  <p class="title">从业信息（执业经历）</p>
                  <div class="content exp">
                      <job/>
                  </div>
              </div>
              <div class="papel" id='honorDetail'>
                  <p class="title">个人荣誉</p>
                  <div class="content table">
                      <honor/>
                  </div>
              </div>
              <!-- 面板 -->
              <div class="papel" id='benefitDetail'>
                  <p class="title">社会公益</p>
                  <div class="content table">
                      <benefit/>
                  </div>
              </div>
              <div class="papel" id='creditDetail'>
                  <p class="title">失信信息</p>
                  <div class="content table">
                      <credit/>
                  </div>
              </div>
              <works/>
            </div>
        </div>
    </div>
</template>
<script>
import job from './detailSection/job.vue'
import honor from './detailSection/honor.vue'
import benefit from './detailSection/benefit.vue'
import credit from './detailSection/credit.vue'
import works from './detailSection/works.vue'
import TimeLine from '../../personal/peronalPage/timeLine/timeLine'
import Until from '../../../until/until.js'


const menuTabs = {
  'basicDetail': 0,
  'jobDetail': 1,
  'honorDetail': 2,
  'benefitDetail': 3,
  'creditDetail': 4,
  'worksDetail' : 5
}

export default {
    components:{job, honor, benefit, credit, works, TimeLine},

    data(){
        return{
            menus: [
              {id: 'basicDetail', name: '基本信息'},
              {id: 'jobDetail', name: '从业信息'},
              {id: 'honorDetail', name: '个人荣誉'},
              {id: 'benefitDetail', name: '社会公益'},
              {id: 'creditDetail', name: '失信信息'},
              {id: 'worksDetail', name: '作品'},
            ],
            curIndex: 0,
            basicDetail: {},
            certificateTime: '',
            jobDetail: [],
            honorDetail: [],
            benefitDetail: [],
            creditDetail: [],
            worksDetail: [],
            workTotal : 0,
        }
    },

    created: function() {
        window.onhashchange = () => {
          this.changeMenu();
        }

        //赋值
        this.id = this.$route.query.id;
        this.token = this.$store.state.token;

        //查询人物基本信息
        let param = {
          celebrityId: this.id
        };
        this.getDetail('basicDetail', Object.assign({identityType: this.$route.query.type}, param));

    },

    mounted: function() {
      this.changeMenu();

      /*滚动导航
      //let beforeTop = 0;
      document.getElementById('people').addEventListener('scroll', function(e) {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let maxTop = document.documentElement.scrollHeight || document.body.scrollHeight;
        let webHeight = window.innerHeight;
        //let top = scrollTop - beforeTop;
        //beforeTop = scrollTop;
        //导航内容总宽度
        let h1 = document.getElementById('basicDetail').offsetHeight + 20;
        let h2 = document.getElementById('jobDetail').offsetHeight + 20;
        let h3 = document.getElementById('honorDetail').offsetHeight + 20;
        let h4 = document.getElementById('benefitDetail').offsetHeight + 20;
        let h5 = document.getElementById('creditDetail').offsetHeight + 20;
        let h6 = document.getElementById('worksDetail').offsetHeight;
        let sHeight = maxTop - webHeight;
        if(sHeight - h6 < scrollTop && scrollTop <= sHeight) {
            this.curIndex = 5;
         }else if(sHeight - h6 - h5 < scrollTop && scrollTop <= sHeight - h6) {
            this.curIndex = 4;
         }else if(sHeight - h6 - h5 - h4 < scrollTop && scrollTop <= sHeight - h6 - h5) {
            this.curIndex = 3;
         }else if(520 + h1 < scrollTop && scrollTop <= 520 + h1 + h2) {
               this.curIndex = 2;
         }else if(520 < scrollTop && scrollTop <= 520 + h1) {
            this.curIndex = 1;
         }else if(0 <= scrollTop && scrollTop <= 520) {
            this.curIndex = 0;
         }
      })*/
    },

    methods:{
        //菜单锚点
        changeMenu() {
          let index = menuTabs[location.hash.replace('#', '') || 'basicDetail'];
          this.curIndex = index;
        },

        //获取人物详情基本信息
        getDetail(type, param) {
          let typeObj = {
            'basicDetail': 'SearchPersonById',
            'jobDetail': 'SearchPersonWorkById',
            'honorDetail': 'SearchPersonHonorById',
            'benefitDetail': 'SearchPersonBenefitById',
            'creditDetail': 'SearchPersonCreditById',
            'worksDetail' : 'SearchWorkNumById'
          }
          this.Http.post(this.Action[typeObj[type]], param).then((data) => {
            if(type == 'basicDetail') {
              this[type] = data.celebrity;
              this.certificateTime = Until.timestampToTime(data.celebrity.certificateTime);
            }else {
              this[type] = data.list;
            }
            if(type == 'worksDetail') {
              this.workTotal = data.total;
              this[type] = this[type].length > 6 ? this[type].slice(0, 6) : this[type];
            }
          }).catch((err) => {
            console.log(err);
          })
        },

        //查询作品详情
        openWorkDetail(id) {
          this.$router.push({
            path: '/credit/works/worksDetail',
            query: {id}
          })
        },

        //更多作品
        moreWorks(id, name) {
          this.$router.push({
            path: '/search',
            query: {id, name}
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
          position: relative;
          padding-bottom: 136px;
          margin-top: 80px;
          .menu {
            position: absolute;
            left: -167px;
            top: 30px;
            width: 120px;
            height: 300px;
            padding-bottom: 10px;
            border-right: 1px solid #e8e8e8;
            font-size: 14px;
            li {
              box-sizing: border-box;
              width: 120px;
              height: 38px;
              margin-bottom: 16px;
              line-height: 38px;
              text-align: center;
              &.active {
                border-right: 2px solid #f58523;
                a {
                  color: #f58523;
                }
              }
            }
            li:last-child {
              margin-bottom: 0;
            }
          }
          .papel{
              box-sizing: border-box;
              width: 1180px;
              border: 1px solid #DCDFE6;
              margin-left: auto;
              margin-right: auto;
              margin-bottom: 20px;
              padding-bottom: 25px;
              padding-top: 32px;
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
                  .row{
                      margin-top: 25px;
                      color: #333;
                      font-size: 14px;
                  }
              }
              .exp{
                  display: flex;
                  height: 316px;
                  justify-content: space-between;
                  margin-right:45px;
                  overflow-x: auto;
              }
              .table{
                  margin-right: 22px;
                  margin-left: 22px;
              }
          }
          //登录可查遮罩
          .login-show {
            position: relative;
            //遮罩
            .login-shadow-par {
              position: absolute;
              width: 1180px;
              height: 100%;
              background: rgba(0, 0, 0, 0.5);
              text-align: center;
              z-index: 999;
              .login-shadow {
                position: absolute;
                width: 360px;
                height: 160px;
                left: 50%;
                top: 50%;
                margin-left: -180px;
                margin-top: -80px;
                .s-tip {
                  margin-bottom: 36px;
                  font-weight: bold;
                  font-size: 20px;
                }
                .s-btn {
                  width: 120px;
                  height: 40px;
                  margin-left: auto;
                  margin-right: auto;
                  line-height: 40px;
                  background: #f58523;
                  color: #fff;
                }
              }
            }
          }
        }
</style>
<style>
  .el-table {
    overflow-y: auto;
  }
  .el-table::before {
    display: none;
  }
  .el-table thead tr, .el-table thead th {
    background: #FAFAFA;
  }
</style>
