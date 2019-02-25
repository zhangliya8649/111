<template>
    <div>
        <div class="Personal-content w1180">
            <div class="papel">
                <div class="btn">
                    <el-button class="papelBtn" @click="editBasic">补全信息</el-button>
                </div>
                <p class="title">基本信息</p>
                <div class="content" v-if='showBasicInfo'>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.celebrityName}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.sex}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{basicInfo.age}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">祖籍：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.nationality}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">公司：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.agency}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职务：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{basicInfo.position}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">学历：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.education}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职业：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.occupation}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">政治面貌：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{basicInfo.politics}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">执业时间：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.workingYear}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">职业证书：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.certificate}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">证书时间：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{basicInfo.certificateTime}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">代表作品：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.magnumOpus}}</div></el-col>
                    </el-row>
                </div>
                <div class="content" v-else>
                    <el-form :inline="true" :model="basicInfo" class="demo-form-inline">
                        <el-form-item label="姓名：" label-width='90px'>
                            <el-input :disabled='true' v-model="basicInfo.celebrityName" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="性别：" label-width='90px'>
                            <el-input v-model="basicInfo.sex" placeholder="请输入您的性别" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="年龄：" label-width='90px'>
                            <el-input v-model="basicInfo.age" placeholder="请输入您的年龄" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="祖籍：" label-width='90px'>
                            <el-input v-model="basicInfo.nationality" placeholder="请输入您的祖籍" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="公司：" label-width='90px'>
                            <el-input v-model="basicInfo.agency" placeholder="请输入公司名称" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="职务：" label-width='90px'>
                            <el-input v-model="basicInfo.position" placeholder="请输入您的职务" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="学历：" label-width='90px'>
                            <el-input v-model="basicInfo.education" placeholder="请输入您的学历" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="职业：" label-width='90px'>
                            <el-select v-model="basicInfo.occupation" placeholder="请选择您的职业" class="input">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="政治面貌：" label-width='90px'>
                            <el-input v-model="basicInfo.politics" placeholder="请输入您的政治面貌" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="执业时间：" label-width='90px'>
                            <el-date-picker
                                v-model="basicInfo.workingYear"
                                align="right"
                                type="date"
                                placeholder="请选择您的执业时间"
                                style="width:202px;">
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="职业证书：" label-width='90px'>
                            <el-input v-model="basicInfo.certificate" placeholder="请输入您的证书编号" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="证书时间：" label-width='90px'>
                            <el-date-picker
                                v-model="basicInfo.certificateTime"
                                align="right"
                                type="date"
                                placeholder="请选择您的证书时间"
                                style="width:202px;">
                            </el-date-picker>
                        </el-form-item>
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="8">
                                <el-form-item label="代表作品：" label-width='90px'>
                            <el-input v-model="basicInfo.magnumOpus" placeholder="请输入您的代表作品" style="width:202px;"></el-input>
                        </el-form-item>
                            </el-col>
                            <el-col :span="8" :offset="8" style="paddingLeft:19.5%">
                                <el-form-item>
                                    <el-button class="editInfo" @click="editSureInfo">确认</el-button>
                                </el-form-item>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </div>
            <div class="papel">
                <div class="btn">
                    <el-button class="papelBtn" @click="addExp">添加经历</el-button>
                </div>
                <p class="title">从业信息（执业经历）</p>
                <div class="content exp">
                    <TimeLine v-for="(data,index) in msg" :msg='data' :index='index' :key='index'></TimeLine>
                </div>
            </div>
            <div class="papel">
                <div class="btn">
                    <el-button class="papelBtn" @click="addInfo(1)">添加信息</el-button>
                </div>
                <p class="title">个人荣誉</p>
                <div class="content table">
                    <el-table
                        :data="tableData1"
                        style="width: 100%">
                        <el-table-column
                            prop="honorTime"
                            label="时间"
                            width="250">
                        </el-table-column>
                        <el-table-column
                            prop="summary"
                            label="摘要"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="honorDesc"
                            label="描述">
                        </el-table-column>
                    </el-table>
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
                        :data="tableData2"
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
            <div class="works">
                <p class="works-title">作品（与XXX相关的，共有XXX部作品）</p>
                <p class="works-title more-works" @click="moreWorks">添加作品</p>
                <div class="works-box">
                    <Works v-for="(data,index) in worksData" :data='data' :key='index'></Works>
                </div>
            </div>
            <!-- 密码修改 -->
            <div class="pwdSetting">
                <p class="title">密码设置</p>
                <div class="form">
                    <el-form label-position='left' :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                        <el-form-item label="原密码" prop="oldPass">
                            <el-input class="input" type="password" v-model="ruleForm.oldPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="新密码" prop="newPass">
                            <el-input class="input" type="password" v-model="ruleForm.newPass" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="确认密码" prop="checkPass">
                            <el-input class="input" v-model.number="ruleForm.checkPass"></el-input>
                        </el-form-item>
                        <el-form-item align='right'>
                            <el-button class="editPwd" @click="editSurePass">确认修改</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <!-- 弹窗 -->
            <Dialog :showDialog='2' @getBenefit='getUserBenefit' @getHonor='getUserHonor' ref='dialog'></Dialog>
            <ExpDialog ref='expDialog' :data='JobInfo'></ExpDialog>
            <ChoseWorks ref='choseWorks'></ChoseWorks>
        </div>
    </div>
</template>
<script>
let works = require('../../../assets/img/video.png')
import Works from './works/works'
import Dialog from './dialog/dialog'
import ExpDialog from './expDialog/expDialog'
import TimeLine from './timeLine/timeLine'
import ChoseWorks from './choseWorks/choseWorks'
import Until from '../../../until/until.js'
export default {
    components:{Works,Dialog,ExpDialog,TimeLine,ChoseWorks},
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
            showBasicInfo:true,//点击补全信息
            basicInfo: {
                celebrityName: '乔杉',
                sex:'男',
                age: '31',
                nationality:'中国',
                agency:'北京眼缘影视有限公司',
                position:'制片人',
                education:'本科',
                occupation:"演员",
                politics:'党员',
                workingYear:'2012.08.09',
                certificate:'084322',
                certificateTime:'2019.09.09',
                magnumOpus:'设计部'
            },
            //表格数据
            tableData1: [{
                honorTime:'2005-11-13',
                summary:'金河马奖',
                honorDesc:'荣获年度最佳演员'
            },{
                honorTime:'2008-12-11',
                summary:'金马奖',
                honorDesc:'荣获年度最佳配角'
            },{
                honorTime:'2005-11-13',
                summary:'百花奖',
                honorDesc:'提名年度最佳演员'
            },],
            tableData2:[{
                benefitTime:'2002-11-13',
                summary:'援助孤寡老人',
                benefitDesc:'捐献物资2车'
            },{
                benefitTime:'2008-05-15',
                summary:'灾区捐献',
                benefitDesc:'地震捐献5万元'
            },
            {
                benefitTime:'2010-06-18',
                summary:'爱心捐献',
                benefitDesc:'爱心捐献3万元'
            },{
                benefitTime:'2011-10-15',
                summary:'爱心捐献',
                benefitDesc:'爱心捐献8万元'
            }],
            //作品展示
            worksData:[
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
                {src:works,name:'来电狂想',time:'2018.12.30',des:''},
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
            msg:[                                       //时间轴数据
            ],
            //从业信息
            JobInfo:[{
                time:'2019-02-09',
                info:'2eqeqw'
            }],

        }
    },
    methods:{
        //初始化页面
        init(){
            this.getUserInfo()
            this.getUserBenefit()
            this.getUserJobInfo()
            this.getUserHonor()
        },
        //补全信息
        editBasic(){
            this.showBasicInfo = false
        },
         //弹窗
        addInfo(num){
            this.$refs.dialog.openDialog(num)
        },
        editSureInfo(){     //确认修改个人信息
            this.showBasicInfo = true
        },
        moreWorks(){      //更多作品
            this.$refs.choseWorks.openDialog()
        },
        addExp(){
            this.$refs.expDialog.openExp()
        },
        editSurePass(){         //确认修改密码
            this.$router.push({path:'/MakeSure'})
        },
        //获取用户信息
        getUserInfo(){
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
        getUserBenefit(){
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
        //获取用户从业信息
        getUserJobInfo(){
            let data = {
                celebrityId:Until.getUser().user.id,
                token:Until.getUser().token
            }
            this.Http.post(this.Action.jobInfo,data).then((res) => {
                this.jobInfo = res
            }).catch((err) => {
                console.log(err)
            })
        },
        //获取用户个人荣誉
        getUserHonor(){
            let data = {
                celebrityId:Until.getUser().user.id,
                token:Until.getUser().token
            }
            this.Http.post(this.Action.userHonor,data).then((res) => {
                this.tableData1 = res.list
            }).catch((err) => {
                console.log(err)
            })
        },
        // dateChange(row,column){             //时间过滤
        //     return Until.timestampToTime(row.honorTime)
        // },
        // dateChange1(row,column){             //时间过滤
        //     return Until.timestampToTime(row.benefitTime)
        // },
    },
    mounted(){
        this.init()
    }
}
</script>
<style lang="less" scoped>
    .Personal-content{
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
                    height: 320px;
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