<template>
    <div>
        <div class="search-box">
          <div class='w1180'>
             <div class="search">
               <i slot="prefix" class="el-input__icon el-icon-search"></i>
               <input
                 type="text"
                 class="input"
                 placeholder="请输入艺人的姓名"
                 v-model="searchName"
                 @keyup.enter='search'
                 @keyup.delete='search'
               >
               <el-button class="search-btn" @click="search">搜索</el-button>
             </div>
          </div>
        </div>
        <div class="actor w1180">
            <div class="userInfo-box" v-for="(userInfo,index) in searchMsg" :key='index'>
                <div class="userInfo">
                    <div class="userInfo-left">
                        <div class="img-box">
                            <img :src='userInfo.celebrityHeadUrl' >
                        </div>
                        <div class="selfInfo">
                            <div class="selfInfo-top">
                                <div>
                                    <span class="userName">{{userInfo.celebrityName}}</span>
                                    <button v-if="userInfo.claimState == 1" class="goSure" @click="goSure(index)">去认领</button>
                                </div>
                            </div>
                            <div class="selfInfo-center">
                                <p class="center center-job">职业：{{userInfo.occupation}}</p>
                                <p class="center">职业证书：{{userInfo.certificate}}</p>
                                <p class="center">所属机构：{{userInfo.agency}}</p>
                            </div>
                            <div class="selfInfo-bottom">
                                <p :class="['job',userInfo.identityType == '1' ? 'active' : '']">影视人</p>
                                <p :class="['job',userInfo.identityType == '2' ? 'active' : '']">制片人</p>
                                <p :class="['job',userInfo.identityType == '3' ? 'active' : '']">导演</p>
                            </div>
                        </div>
                    </div>
                    <div class="userInfo-right">
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.rating}}</p>
                            </div>
                            <div class="title">
                                <img :src="classIcon">
                                <span class="info">信用等级</span>
                            </div>
                        </div>
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.commendCount}}</p>
                            </div>
                            <div class="title">
                                <img :src="goalIcon">
                                <span class="info reword">表彰</span>
                            </div>
                        </div>
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.loseCreditCount}}</p>
                            </div>
                            <div class="title">
                                <img :src="notIcon">
                                <span class="info">失信信息</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <el-pagination background layout='prev, pager, next' :total='total' :current-page='pageNum' @current-change='changeCurrentPage' v-if='total > 10'></el-pagination>
        </div>
        <Dialog ref='dialog' :userMsg='searchMsg' :userType='type' :index='index' @editClaim='editClaim'></Dialog>
    </div>
</template>
<script>
let userImg = require('../../../../assets/img/userInfo.png')
let notSureIcon = require('../../../../assets/img/notSure.png')
let SuredIcon = require('../../../../assets/img/sured.png')
let classIcon = require('../../../../assets/img/class.png')
let goalIcon = require('../../../../assets/img/goal.png')
let notIcon = require('../../../../assets/img/not.png')
import Dialog from '../dialog/dialog'
import Until from '../../../../until/until.js'
export default {
    components:{Dialog},
    data(){
        return{
            index:0,        //当前点击的用户
            searchMsg:[],
            notSureIcon: notSureIcon,   //未认领图标
            SuredIcon: SuredIcon,   //未认领图标
            classIcon: classIcon,   //信用等级图标
            goalIcon: goalIcon,   //表彰图标
            notIcon: notIcon,   //失信信息图标
            pageNum: 1,
            searchName: '',
            total: 0
        }
    },
    watch: {
      type: 'watchType'
    },
    props: ['type'],

    beforeDestroy() {
        this.clear();
    },

    mounted() {
      this.search();
    },

    methods:{
        goSure(index){       //认领
            this.$refs.dialog.showDialog();
            this.index = index;
        },
        getList(param) {
           this.Http.post(this.Action.searchActor, param).then((res) => {
                this.total = res.total;
                this.searchMsg = res.list;
           }).catch((err) => {
                Until.ErrorCode(err.code);
           })
        },
        watchType(newType, oldType) {
          if(newType != oldType) {
            this.pageNum = 1;
            this.searchName = '';
            this.searchMsg = [];
            let data = {
                celebrityName: this.searchName,
                identityType: this.type,
                pageNum: 1,
                claimState: 1
            }
            this.getList(data);
          }
        },
        search(){       //找到人
            let data = {
                celebrityName: this.searchName,
                identityType: this.type,
                pageNum: 1,
                claimState: 1
            }
            if(this.searchName == '') { data.pageNum = this.pageNum; }
            this.getList(data);
        },
        clear(){            //清空信息
            this.searchMsg = [];
        },
        editClaim(index){        //修改认领信息
            this.searchMsg[index].claimState = 2
        },
        //分页
        changeCurrentPage(val) {
          this.pageNum = val;
          let data = {
              celebrityName: this.searchName,
              identityType: this.type,
              pageNum: this.pageNum,
              claimState: 1
          }
          this.getList(data);
        }
    }
}
</script>
<style lang="less" scoed>
    .search-box {
      width: 100%;
      height: 56px;
      display: inline-block;
      background-color: #faf8f7;
      padding-bottom: 30px;
      .search {
        width: 840px;
        height: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        .el-icon-search {
          height: 100%;
          width: 56px;
          margin-top: 10px;
          font-size: 21px;
          color: #000;
        }
        .input {
          outline: none;
          border: none;
          height: 56px;;
          width: 100%;
        }
        .search-btn {
          height: 56px;
          width: 148px;
          background-color: #f58523;
          border-color: #f58523;
          color: #fff;
          border-radius: 0;
        }
      }
    }
    .actor{
            padding-top: 50px;
            margin-bottom: 20px;
            .title{
                font-family: PingFang-SC-Medium;
                font-size: 16px;
                color: #303133;
                letter-spacing: 0;
                margin-bottom: 30px;
            }
            .userInfo-box{
                width: 100%;
                height: 246px;
                padding: 24px 20px;
                box-sizing: border-box;
                background: #FFFFFF;
                border: 1px solid #DCDFE6;
                margin-bottom: 20px;
                .userInfo{
                    display: flex;
                    justify-content: space-between;
                    .userInfo-left{
                        height: 100%;
                        width: 376px;
                        display: flex;
                        justify-content: space-around;
                        .img-box{
                            margin-right: 22px;
                            img{
                                width: 135px;
                                height: 200px;
                            }
                        }
                        .selfInfo{
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                            padding: 5px 0;
                            .selfInfo-top{
                                height: 50px;
                                .userName{
                                    font-family: PingFangSC-Semibold;
                                    font-size: 24px;
                                    color: #4A4A4A;
                                    letter-spacing: 0;
                                    font-weight: bold;
                                }
                                .suring{
                                    vertical-align: top;
                                    font-family: PingFang-SC-Medium;
                                    font-size: 14px;
                                    color: #5C8CE1;
                                    letter-spacing: 0;
                                }
                                .sured{
                                    vertical-align: top;
                                    font-family: PingFang-SC-Medium;
                                    font-size: 14px;
                                    color: #F58523;
                                    letter-spacing: 0;
                                }
                                .goSure{
                                    background-color: #F58523;
                                    border: 1px solid #F58523;
                                    color: #fff;
                                    vertical-align: top;
                                    border-radius: 4px;
                                    line-height: 20px;
                                    outline: none;
                                    cursor: pointer;
                                }
                                .notSure{
                                    display: inline-block;
                                    vertical-align: top;
                                }
                                .notSureIcon{
                                    margin: 0px 2px 0 10px;
                                    height: 12px;
                                    width: 12px;
                                }
                            }
                            .selfInfo-center{
                                height: 100px;
                                .center{
                                    font-family: PingFang-SC-Medium;
                                    font-size: 14px;
                                    color: #4A4A4A;
                                    letter-spacing: 0;
                                    line-height: 22px;
                                }
                            }
                            .selfInfo-bottom{
                                .job{
                                    display: inline-block;
                                    font-family: PingFang-SC-Medium;
                                    width: 68px;
                                    height: 28px;
                                    text-align: center;
                                    line-height: 28px;
                                    font-size: 14px;
                                    color: #4A4A4A;
                                    letter-spacing: 0;
                                }
                                .active{
                                    border: 1px solid #F58523;
                                    border-radius: 4px;
                                    width: 68px;
                                    height: 28px;
                                    text-align: center;
                                    line-height: 28px;
                                    font-family: PingFang-SC-Medium;
                                    font-size: 14px;
                                    color: #F58523;
                                    letter-spacing: 0;
                                }
                            }
                        }
                    }
                    .userInfo-right{
                        width: 580px;
                        box-sizing: content-box;
                        display: flex;
                        justify-content: space-around;
                        align-items: center;
                        .selfOther{
                            width: 114px;
                            .other{
                                 p{
                                    font-family: PingFang-SC-Medium;
                                    font-size: 86px;
                                    color: #4A4A4A;
                                    letter-spacing: 0;
                                    line-height: 68px;
                                    text-align: center;
                                    margin-bottom: 14px;
                                }
                            }
                            .title{
                                margin: 0 auto;
                                width: 94px;
                                display: flex;
                                justify-content: space-between;
                                img{
                                    vertical-align: middle;
                                }
                                font-family: PingFang-SC-Medium;
                                color: #9B9B9B;
                                line-height: 20px;
                                font-size: 16px;
                                .reword{
                                    letter-spacing: 12px;
                                }
                            }
                        }
                    }
                }
            }
        }
</style>
<style>
  @import '../../../page.css'
</style>
