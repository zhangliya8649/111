<template>
    <div>
        <div class="normal-content w1180">
            <div class="papel">
                <p class="title company">基本信息</p>
                <div class="content" v-if='showBasicInfo'>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">姓名：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.nickName}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">性别：</div></el-col>
                        <el-col :span="6"><div class="grid-content bg-purple">{{basicInfo.sex == 1 ? '男' : '女'}}</div></el-col>
                        <el-col :span="3"><div class="grid-content bg-purple">年龄：</div></el-col>
                        <el-col :span="5"><div class="grid-content bg-purple">{{basicInfo.age}}</div></el-col>
                    </el-row>
                    <el-row :gutter="20" class="row">
                        <el-col :span="3"><div class="grid-content bg-purple">电话：</div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple">{{basicInfo.phone}}</div></el-col>
                    </el-row>
                </div>
                <div class="content" v-else>
                    <el-form :inline="true" :model="basicInfo" class="demo-form-inline">
                        <el-form-item label="姓名：" label-width='90px'>
                            <el-input :disabled='true' v-model="basicInfo.nickName" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="性别：" label-width='90px'>
                            <el-select v-model="basicInfo.sex" placeholder="请输入您的性别" style="width:202px;">
                                <el-option
                                    v-for="item in sexSelect"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="年龄：" label-width='90px'>
                            <el-input v-model="basicInfo.age" placeholder="请输入您的年龄" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item label="电话：" label-width='90px'>
                            <el-input v-model="basicInfo.phone" placeholder="请输入您的电话" style="width:202px;"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button class="editInfo" @click="cancelPersonInfo">取消</el-button>
                            <el-button class="editInfo" @click="editSureInfo">确认</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
            <resetPwd/>
            <!-- 弹窗 -->
            <Dialog :showDialog='2' @getBenefit='getCompanyBenefit' ref='dialog'></Dialog>
        </div>
    </div>
</template>
<script>
import Dialog from './dialog/dialog'
import resetPwd from './resetPwd/resetPwd'
import Until from '../../../until/until.js'
export default {
    components:{Dialog, resetPwd},
    props: ['userState'],
    data(){
        return{
            showBasicInfo: true,
            basicInfo: {
            },
            //表格数据
            tableData: [],
        }
    },
    methods:{
       //补全信息
       editBasic(){
           this.showBasicInfo = false;
       },
       // 取消个人修改按钮
       cancelPersonInfo() {
           this.basicInfo = this.cacheBasicInfo;
           this.showBasicInfo = false;
       },
       editSureInfo(){     //确认修改个人信息
           this.basicInfo.sex == '男' ? this.basicInfo.sex = 1 : this.basicInfo.sex = 2
           let data = {
               nickName: this.basicInfo.nickName,
               sex: this.basicInfo.sex,
               age: this.basicInfo.age,
               userType: 5,
               token: Until.getUser().token
           }
           this.Http.post(this.Action.outer, data).then(res => {
               this.getUserInfo();
               this.$message({
                   message: '修改成功',
                   type: 'success'
               })
               this.personInfoswitch()
           })
       },
       //获取用户信息
       getUserInfo(){
           let data = {
               id: Until.getUserSmallInfo().id,
               token: Until.getUser().token
           }
           this.Http.post(this.Action.normalInfo, data).then((res) => {
               // 处理sex性别
               res.baseInfo.sex == 1 ? res.baseInfo.sex = '男' : res.baseInfo.sex = '女'
               this.basicInfo = res.baseInfo;
               // 缓存数据,克隆
               this.cacheBasicInfo = Until.cloneObj(res.baseInfo)
           }).catch((err) => {
               console.log(err)
           })
       },
    },
    created() {

    },

    mounted(){

    }
}
</script>
<style lang="less" scoped>
    .normal-content{
            margin-top: 30px;
            .papel{
                width: 100%;
                border: 1px solid #DCDFE6;
                padding-bottom: 25px;
                padding-top: 32px;
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
            }
        }
</style>
