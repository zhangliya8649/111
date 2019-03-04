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
            <ul class='menu'>
              <li :class="curIndex == index ? 'active' : ''" v-for="(menu, index) in menus"><a :href="'#' + menu.id">{{menu.name}}</a></li>
            </ul>
            <div class="papel" id='basicDetail'>
                <p class="title">基本信息</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.celebrityName}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.sex == 1 ? '男' : list.sex == 2 ? '女' : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.age ? list.age : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">祖籍：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.nationality ? list.nationality : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">公司：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.agency ? list.agency : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职务：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.position ? list.position : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">学历：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.education ? list.education : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.occupation ? list.occupation : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">政治面貌：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.politics ? list.politics : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">执业年限：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.workingYear ? list.workingYear : 0}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">职业证书：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.certificate ? list.certificate : '未知'}}</div></el-col>
                        <el-col :span="2"><div class="grid-content bg-purple">证书时间：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.certificateTime ? list.certificateTime : '未知'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="2"><div class="grid-content bg-purple">代表作品：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.portfolio ? list.portfolio : ''}}</div></el-col>
                    </el-row>
                </div>
            </div>
            <!--登录后可查-->
            <div class='login-show'>
              <div class='login-shadow-par'>
                <div class='login-shadow'>
                  <div class='s-tip'>登录后，可查看该艺人的详细信息</div>
                  <div class='s-btn'>登录</div>
                </div>
              </div>
              <div class="papel" id='jobDetail'>
                  <p class="title">从业信息（执业经历）</p>
                  <div class="content exp">
                      <div class='no-detail' v-if='msg.length < 1'>暂无数据</div>
                      <TimeLine v-for="(data,index) in msg" :msg='data' :key='index' :index='index'></TimeLine>
                  </div>
              </div>
              <div class="papel" id='honorDetail'>
                  <p class="title">个人荣誉</p>
                  <div class="content table">
                      <el-table
                          :data="tableData1"
                          style="width: 100%">
                          <el-table-column
                              prop="honorTime"
                              label="时间"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="summary"
                              label="摘要"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="honorDesc"
                              label="描述">
                          </el-table-column>
                      </el-table>
                  </div>
              </div>
              <!-- 面板 -->
              <div class="papel" id='benefitDetail'>
                  <p class="title">社会公益</p>
                  <div class="content table">
                      <el-table
                          :data="tableData2"
                          style="width: 100%">
                          <el-table-column
                              prop="benefitTime"
                              label="时间"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="summary"
                              label="摘要"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="benefitDesc"
                              label="描述">
                          </el-table-column>
                      </el-table>
                  </div>
              </div>
              <div class="papel" id='worksDetail'>
                  <p class="title">失信信息</p>
                  <div class="content table">
                      <el-table
                          :data="tableData3"
                          style="width: 100%">
                          <el-table-column
                              prop="creditTime"
                              label="时间"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="summary"
                              label="摘要"
                              width="180">
                          </el-table-column>
                          <el-table-column
                              prop="creditDesc"
                              label="描述">
                          </el-table-column>
                      </el-table>
                  </div>
              </div>
              <div class="works-par">
                  <div class='works-title clear'>
                    <p class="tit-desc">作品（与<span>{{list.celebrityName}}</span>相关的，共有<span>{{worksData.total}}</span>部作品）</p>
                    <p v-if='worksData.total > 6' class="more-works" @click="moreWorks(list.id, list.celebrityName)">全部作品》</p>
                  </div>
                  <div class="works-box">
                      <div class='list' v-for='item in workList'>
                        <a href='javascript:;' @click='openWorkDetail(item.id)'>
                          <img v-if = 'item.subjectUrl != "None"' :src='item.subjectUrl'/>
                          <img v-else src='../../../assets/credit/default-man.png'/>
                        </a>
                        <div class='name'>名称：{{item.subjectName}}</div>
                        <div class='time'>时间：{{item.releaseDate ? item.releaseDate[0] : '无'}}</div>
                        <div class='desc'>描述：{{item.subjectIntroduce}}</div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import Works from '../../personal/peronalPage/works/works.vue'
import TimeLine from '../../personal/peronalPage/timeLine/timeLine'

let works = require('../../../assets/img/video.png')

const menuTabs = {
  'basicDetail': 0,
  'jobDetail': 1,
  'honorDetail': 2,
  'benefitDetail': 3,
  'creditDetail': 4,
  'worksDetail' : 5
}

export default {
    components:{Works, TimeLine},

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
            list: {},
            msg:[],
            //表格数据
            tableData1: [],
            tableData2: [],
            tableData3: [],
            //作品展示
            worksData: {},
            workList: []
        }
    },

    mounted: function() {
      let param = {
        celebrityId: this.id,
       // token: this.token
        pageNum: 1
      };
     // 从业信息this.getWorkDetail(param);
      //个人荣誉this.getHonorDetail(param);
      //社会公益this.getBenefitDetail(param);
      //失信信息this.getCreditDetail(param);
      this.getWorksById(param);
      this.changeMenu();
    },

    created: function() {
       this.id = this.$route.query.id;
       this.token = this.$store.state.token;
       let param = {
         celebrityId: this.id,
         identityType: this.$route.query.type
       };
       this.getBasicDetail(param);
       //监听锚点
       window.onhashchange = ()=> {
        this.changeMenu();
       }
    },

    methods:{
        //菜单锚点
        changeMenu() {
          let index = menuTabs[location.hash.replace('#', '') || 'basicDetail'];
          this.curIndex = index;
        },

        //获取人的基本信息
        getBasicDetail(param) {
          this.Http.post(this.Action.SearchPersonById, param).then((data) => {
            this.list = data.celebrity;
          }).catch((err) => {
            console.log(err);
          })
        },

        //获取从业信息
        getWorkDetail(param) {
          this.Http.post(this.Action.SearchPersonWorkById, param).then((data) => {
            this.msg = data.list;
          }).catch((err) => {
            console.log(err);
          })
        },

        //个人荣誉
        getHonorDetail(param) {
          this.Http.post(this.Action.SearchPersonHonorById, param).then((data) => {
            this.tableData1 = data.list;
          }).catch((err) => {
            console.log(err);
          })
        },

        //社会公益
        getBenefitDetail(param) {
          this.Http.post(this.Action.SearchPersonBenefitById, param).then((data) => {
            this.tableData2 = data.list;
          }).catch((err) => {
            console.log(err);
          })
        },

        //失信信息
        getCreditDetail(param) {
          this.Http.post(this.Action.SearchPersonCreditById, param).then((data) => {
            this.tableData3 = data.list;
          }).catch((err) => {
            console.log(err);
          })
        },

        //查询作品
        getWorksById(param) {
          this.Http.post(this.Action.SearchWorkNumById, param).then((data) => {
            this.worksData = data;
            this.workList = data.list.length > 6 ? data.list.slice(0, 6) : data.list;
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
          margin-top: 30px;
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
              .no-detail {
                width: 100%;
                padding-top: 100px;
                text-align: center;
                color: #909399;
                font-size: 14px;
              }
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
          .works-par {
              margin-top: 52px;
              .works-title{
                  color: #F58523;
                  font-size: 16px;
                  .tit-desc {
                    float: left;
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
                  padding-top: 26px;
                  .list {
                    float: left;
                    width: 180px;
                    margin-right: 20px;
                    font-size: 16px;
                    img {
                      width: 180px;
                      margin-bottom: 16px;
                    }
                    div {
                      width: 100%;
                      height: 22px;
                      line-height: 22px;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                      font-size: 14px;
                      color: #4A4A4A;
                    }
                  }
                  .list:last-child {
                    margin-right: 0;
                  }
              }
          }
          //登录可查遮罩
          .login-show {
            position: relative;
            //遮罩
            .login-shadow-par {
              display: none;
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
  .el-table::before {
    display: none;
  }
  .el-table thead tr, .el-table thead th {
    background: #FAFAFA;
  }
</style>
