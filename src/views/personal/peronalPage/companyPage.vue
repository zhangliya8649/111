<template>
    <div>
        <div class="Company-content w1180">
            <div class="papel">
                <p class="title company">基本信息</p>
                <div class="content">
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">公司名称：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.celebrityName}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">电话：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.sex}}</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">网址：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.age}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">邮箱：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.nationality}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">地址：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.agency}}</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">营业期限：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.position}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">工商注册号：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.education}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">组织机构代码：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.occupation}}</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">统一社会信用代码：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.politics}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">纳税人识别号：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.workingYear}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">人员规模：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.certificate}}</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">简介：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.certificateTime}}</div></el-col>
                    </el-row>
                </div>
            </div>
            <!-- 面板 -->
            <div class="papel">
                <div class="btn">
                    <el-button class="papelBtn" @click="addInfo(2)">添加案例</el-button>
                </div>
                <p class="title">社会公益</p>
                <div class="content table">
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="benefitTime"
                            label="时间"
                            width="250">
                        </el-table-column>
                        <el-table-column
                            prop="summary"
                            label="摘要"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="benefitDesc"
                            label="描述">
                        </el-table-column>
                    </el-table>
                </div>  
            </div>
            <!-- 弹窗 -->
            <Dialog :showDialog='2' @getBenefit='getCompanyBenefit' ref='dialog'></Dialog>
        </div>
    </div>
</template>
<script>
let works = require('../../../assets/img/video.png')
import Dialog from './dialog/dialog'
import Until from '../../../until/until.js'
export default {
    components:{Dialog},
    data(){
        return{
            basicInfo: {
                celebrityName: '',
                sex:'',
                age: '',
                nationality:'',
                agency:'',
                position:'',
                education:'',
                occupation:"",
                politics:'',
                workingYear:'',
                certificate:'',
                certificateTime:'',
                magnumOpus:''
            },
            //表格数据
            tableData: [],
        }
    },
    methods:{
        //初始化页面
        init(){
            this.getCompanyInfo()
            this.getCompanyBenefit()
        },
         //弹窗
        addInfo(num){
            this.$refs.dialog.openDialog(num)
        },
        //获取用户信息
        getCompanyInfo(){
            let data = {
                celebrityId:Until.getUser().user.id,
                identityType:Until.getUser().user.userType
            }
            this.Http.post(this.Action.userInfo,data).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        //获取用户社会公益
        getCompanyBenefit(){
            let data = {
                celebrityId:Until.getUser().user.id,
                token:Until.getUser().token
            }
            this.Http.post(this.Action.benefit,data).then((res) => {
                this.tableData2 = res.list
            }).catch((err) => {
                console.log(err)
            })
        },
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="less" scoped>
    .Company-content{
            margin-top: 30px;
            .papel{
                width: 100%;
                border: 1px solid #DCDFE6;
                padding-bottom: 25px;
                margin-bottom: 20px;
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
                .company{
                    margin-top: 40px;
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
                .table{
                    margin-left: 22px;
                }
            }  
        }
</style>