<template>
    <div>
        <div class='basic-detail'>
          <div class='search-people clear w1180'>
            <div class='img'>
              <img :src='list.businessLicense' />
            </div>
            <div class='desc'>
              <div class='tit'>
                  {{list.name}}
                  <router-link :to='this.$store.state.isLogin ? "/MakeSure" : "/register"' class='operator' v-if='list.claimState == 1'>未认领</router-link>
                  <span class='operator' v-else-if='list.claimState == 2'>审核中</span>
                  <span class='operator' v-else-if='list.claimState == 3'>已认领</span>
              </div>
              <div class='con'>
                <div class='list'>
                  公司状态: {{list.companyState == 1 ? '开业' : list.companyState == 2 ? '停业' : '无'}}
                </div>
                <div class='list'>
                  通讯地址: {{list.address}}
                </div>
              </div>
            </div>
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
        </div>
        <div class="Personal-content w1180">
            <ul class='menu'>
              <li :class="curIndex == index ? 'active' : ''" v-for="(menu, index) in menus"><a :href="'#' + menu.id">{{menu.name}}</a></li>
            </ul>
            <div class="papel" id='basicDetail'>
                <p class="title">基本信息(影视企业)</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">电话：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{list.phone ? list.phone : '未知'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">邮箱：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.email ? list.email : '无'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">网址：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{list.URL}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">地址：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{list.address ? list.address : '无'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">工商注册号：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.commercialNumber ? list.commercialNumber : '无'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">组织机构代码：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{list.organizingCode ? list.organizingCode : '无'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">统一社会信用代码：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{list.creditCode ? list.creditCode : '无'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">纳税人识别号：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.taxpayerID ? list.taxpayerID : '无'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">营业期限：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{list.busnissTerm ? list.busnissTerm : '无'}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">人员规模：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{list.staffSize}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">简介：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{list.companyDesc}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">企业类型：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{list.companyType}}</div></el-col>
                    </el-row>
                </div>
            </div>
            <!--登录后可查-->
            <div class='login-show'>
              <div class='login-shadow-par' v-if='!this.$store.state.isLogin'>
                <div class='login-shadow'>
                  <div class='s-tip'>登录后，可查看该公司的详细信息</div>
                  <div class='s-btn'>登录</div>
                </div>
              </div>
              <div class="papel" id='honorDetail'>
                  <p class="title">企业荣誉</p>
                  <div class="content table">
                      <honor/>
                  </div>
              </div>
              <div class="papel" id='creditDetail'>
                  <p class="title">失信信息</p>
                  <div class="content table">
                      <credit/>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import honor from './detailSection/honor.vue'
import credit from './detailSection/credit.vue'

import TimeLine from '../../personal/peronalPage/timeLine/timeLine'


const menuTabs = {
  'basicDetail': 0,
  'honorDetail': 1,
  'creditDetail': 2
}

export default {
    components:{honor, credit, TimeLine},

    data(){
        return{
            menus: [
              {id: 'basicDetail', name: '基本信息'},
              {id: 'honorDetail', name: '社会荣誉'},
              {id: 'creditDetail', name: '失信信息'}
            ],
            curIndex: 0,
            list: {},
        }
    },

    created: function() {
       let param = {
        companyId: this.$route.query.id,
        type: this.$route.query.type,
        token: this.$store.state.token
       }
       this.getBasicDetail(param);

       //监听锚点
       window.onhashchange = ()=> {
        this.changeMenu();
       }
    },

    mounted: function() {
      this.changeMenu();
    },

    methods:{
        //菜单锚点
        changeMenu() {
          let index = menuTabs[location.hash.replace('#', '') || 'basicDetail'];
          this.curIndex = index;
        },

        //获取公司基本信息
        getBasicDetail(param) {
          this.Http.post(this.Action.SearchCompanyById, param).then((data) => {
            this.list = data.company;
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
      background-image: url('../../../assets/credit/bg.png');
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
            position: relative;
            margin-top: 30px;
            padding-bottom: 130px;
            .menu {
              position: absolute;
              left: -167px;
              top: 30px;
              width: 120px;
              height: 150px;
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
                width: 100%;
                border: 1px solid #DCDFE6;
                padding-bottom: 25px;
                margin-bottom: 20px;
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
                        font-family: 'PingFangSC-Regular';
                    }
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
  .el-table::before {
    display: none;
  }
  .el-table thead tr, .el-table thead th {
    background: #FAFAFA;
  }
</style>
