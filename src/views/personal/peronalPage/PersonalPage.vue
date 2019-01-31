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
                        <el-form-item label="代表作品：" label-width='90px'>
                            <el-input v-model="basicInfo.works" placeholder="请输入您的代表作品"></el-input>
                        </el-form-item>
                        <el-form-item align='right'>
                            <el-button @click="editSure">确认</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <div class="papel">
                <div class="btn">
                    <el-button class="papelBtn">添加经历</el-button>
                </div>
                <p class="title">从业信息（执业经历）</p>
                <div class="content">
                    
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
                <div class="btn">
                    <el-button class="papelBtn" @click="addInfo(2)">添加案例</el-button>
                </div>
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
            <div class="works">
                <p class="works-title">作品（与XXX相关的，共有XXX部）</p>
                <p class="works-title more-works" @click="moreWorks">更多作品<i class="el-icon-d-arrow-right"></i></p>
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
                            <el-button class="editPwd">确认修改</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <!-- 弹窗 -->
            <Dialog :showDialog='2' ref='dialog'></Dialog>
        </div>
    </div>
</template>
<script>
import Works from './works/works'
import Dialog from './dialog/dialog'
export default {
    components:{Works,Dialog},
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
                user: '',
                region: ''
            },
            //表格数据
            tableData1: [{
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
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''},
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''},
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''},
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''},
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''},
                {src:'../../../../../static/video.png',name:'来电狂想',time:'2018.12.30',des:''}
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
        }
    },
    methods:{
        //补全信息
        editBasic(){
            this.showBasicInfo = false
        },
         //弹窗
        addInfo(num){
            this.$refs.dialog.openDialog(num)
        },
        editSure(){
            this.showBasicInfo = true
        },
        moreWorks(){
            this.$router.push({path:'MakeSure'})
        }
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
                    width: 100%;
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
                        font-family: PingFangSC-Regular;
                    }
                }
                .table{
                    margin-left: 22px;
                }
            }
            .works{
                .works-title{
                    color: #F58523;
                    font-size: 16px;
                    font-family: PingFang-SC-Medium;

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
                    font-family: PingFang-SC-Medium;
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