<template>
    <div>
        <div class="actor">
            <p class="title">认领您的信息</p>
            <div class="userInfo-box" v-if='this.userInfo.name'>
                <div class="userInfo">
                    <div class="userInfo-left">
                        <div class="img-box">
                            <img :src='userInfo.userImg' >
                        </div>
                        <div class="selfInfo">
                            <div class="selfInfo-top">
                                <div>
                                    <span class="userName">{{userInfo.name}}</span>
                                    <button v-if="userInfo.isSure == 0" class="goSure" @click="goSure">去认领</button>
                                    <span class="notSure" v-if="userInfo.isSure == 1">
                                        <img :src="notSureIcon" class="notSureIcon"><span class="suring">审核中...</span>
                                    </span>
                                    <span class="notSure" v-if="userInfo.isSure == 2">
                                        <img :src="SuredIcon" class="notSureIcon"><span class="sured">已审核</span>
                                    </span>
                                </div>
                            </div>
                            <div class="selfInfo-center">
                                <p class="center center-job">职业：{{userInfo.job}}</p>
                                <p class="center">职业证书：{{userInfo.jobCertificate}}</p>
                                <p class="center">所属机构：{{userInfo.company}}</p>
                            </div>
                            <div class="selfInfo-bottom">
                                <p :class="['job',userInfo.identity == '影视人' ? 'active' : '']">影视人</p>
                                <p :class="['job',userInfo.identity == '制片人' ? 'active' : '']">制片人</p>
                                <p :class="['job',userInfo.identity == '导演' ? 'active' : '']">导演</p>
                            </div>
                        </div>
                    </div>
                    <div class="userInfo-right">
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.class}}</p>
                            </div>
                            <div class="title">
                                <img :src="classIcon">
                                <span>信用等级</span>
                            </div>
                        </div>
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.goal}}</p>
                            </div>
                            <div class="title">
                                <img :src="goalIcon">
                                <span>表彰</span>
                            </div>
                        </div>
                        <div class="selfOther">
                            <div class="other class">
                                <p>{{userInfo.not}}</p>
                            </div>
                            <div class="title">
                                <img :src="notIcon">
                                <span>失信信息</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Dialog ref='dialog'></Dialog>
    </div>
</template>
<script>
let userImg = require('../../../../assets/img/userInfo.png')
let notSureIcon = require('../../../../assets/img/notSure.png')
let SuredIcon = require('../../../../assets/img/Sured.png')
let classIcon = require('../../../../assets/img/class.png')
let goalIcon = require('../../../../assets/img/goal.png')
let notIcon = require('../../../../assets/img/not.png')
import Dialog from '../dialog/dialog' 
export default {
    components:{Dialog},
    data(){
        return{
            input:'',   //双向绑定搜索
            userInfo:{
               
            },
            isSure:0,   //是否认领
            userImg: userImg,   //用户的照片    
            notSureIcon: notSureIcon,   //未认领图标
            SuredIcon: SuredIcon,   //未认领图标
            classIcon: classIcon,   //信用等级图标
            goalIcon: goalIcon,   //表彰图标
            notIcon: notIcon,   //失信信息图标
        }
    },
    methods:{
        goSure(){       //认领
            this.$refs.dialog.showDialog()
        },
        search(num){       //找到人
            if(num == 0 || num == 1){
                this.userInfo = {
                    name:'乔杉',
                    isSure:0,
                    userImg:userImg,
                    job:'演员/配音',
                    jobCertificate:'08768',
                    company:'北京演员影视传媒有限公司',
                    identity:'影视人',
                    class:'A',
                    goal:'5',
                    not: '0'
                }
            }
        }
    }
}
</script>
<style lang="less" scoed>
    .actor{
            padding-top: 50px;
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
                                    font-size: 68px;
                                    color: #4A4A4A;
                                    letter-spacing: 0;
                                    line-height: 68px;
                                    text-align: center;
                                    margin-bottom: 14px;
                                }
                            }
                            .title{
                                img{
                                    vertical-align: middle;
                                    margin-right: 18px;
                                }
                                font-family: PingFang-SC-Medium;
                                font-size: 16px;
                                color: #9B9B9B;
                                letter-spacing: 0;
                                line-height: 20px;
                            }
                        }
                    }
                }
            }
        }
</style>