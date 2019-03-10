<template>
    <div>
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
                        <el-input type="password" class="input" v-model="ruleForm.checkPass"></el-input>
                    </el-form-item>
                    <el-form-item align='right'>
                        <el-button class="editPwd" @click="editSurePass">确认修改</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <el-dialog
          id="dialog"
          title="提示"
          :visible.sync="pwdDialog"
          width="20%" >
          <span>当前密码已经修改，请您重新登录</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="pwdDialog = false">取 消</el-button>
            <el-button @click="logOutSure" class="btn">确 定</el-button>
          </span>
        </el-dialog>
    </div>
</template>
<script>
import Until from '../../../../until/until.js'
import md5 from 'md5'
export default {
    components:{},
    props: [],
    data(){
        //写验证规则
        var validateOldPass = (rule, value, callback) => {
            if (value === '') {
              callback(new Error('请输入密码'));
            } else {
              callback();
            }
        };
        var validateNewPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入新密码'));
            }else if(!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value)) {
                callback(new Error('密码只支持8~16位数字字母组合'));
            }else {
                if (this.ruleForm.newPass !== '') {
                    this.$refs.ruleForm.validateField('checkPass');
                }
                callback();
            }
        };
        var validateCheckPass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value != this.ruleForm.newPass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        return{
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
            pwdDialog: false
        }
    },
    mounted(){

    },
    methods:{
        editSurePass(){         //确认修改密码
            this.$refs.ruleForm.validate((valid) => {
                if(valid) {
                    this.modifyPwd(this.ruleForm)
                } else {
                    return
                }
            })
        },
        // 修改密码
        modifyPwd(form_data) {
            let data = {
                oldPwd: md5(form_data.oldPass),
                newPwd: md5(form_data.newPass),
                token:Until.getUser().token
            }
            this.Http.post(this.Action.modifyPwd, data).then((res) => {
                this.$message({
                    message: '修改成功',
                    type: 'success'
                });
                this.pwdDialog = true;
            }).catch((err) => {
                Until.ErrorCode(err.code);
            })
        },

        //提示是否重新登录
        logOutSure(){
          this.pwdDialog = false;
          this.$store.commit('signOut');
          this.$router.push({path:'/login'});
        },
    },
}
</script>
<style lang="less" scoped>
    .pwdSetting{
        border: 1px solid #DCDFE6;
        padding: 30px 50px 43px 38px;
        height: 293px;
        margin-bottom: 60px;
        margin-top: 30px;
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
</style>
