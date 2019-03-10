<template>
    <div class="dialog">
        <el-dialog :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px' @closed='beforeClose'>
            <el-form :model="form" ref='form' :rules='rules' label-position='right'>
                <el-form-item label="时间点:" label-width='60px' prop='time'>
                    <el-date-picker
                        v-model="form.time"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format='yyyy.MM.dd'
                        class="input">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="摘要:" label-width='60px' prop='abstract'>
                     <el-input v-model="form.abstract" :placeholder="addexp.abstract" class="input"></el-input>
                </el-form-item>
                <el-form-item label="描述:" label-width='60px' prop='des'>
                     <el-input
                        type="textarea"
                        :rows="5"
                        :placeholder="addexp.des"
                        v-model="form.des"
                        class="text">
                    </el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialogBtn" @click="beforeClose">取 消</el-button>
                <el-button class="dialogBtn submit" type="primary" @click="submitForm('form')">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import Until from '../../../../until/until.js'
export default {
    data(){
        var validateTime = (rule, value, callback) => {
          if(value == '') {
            callback(new Error('请输入密码'));
          }else {
            callback();
          }
        }
        var validateAbstract = (rule, value, callback) => {
          if(value == '') {
            callback(new Error('请输入摘要'));
          }/*else if(value.length >= 3 && value.length <= 5) {
            callback(new Error('长度在3到5个字符'));
          }*/else {
            callback();
          }
        }
        var validateDes = (rule, value, callback) => {
          if(value == '') {
            callback(new Error('请输入描述'));
          }else {
            callback();
          }
        }
        return{
            dialogFormVisible:false,
            num:'',             //类型判断
            form:{
              time:'',               //时间点
              abstract:'',            //摘要
              des:'',                 //描述
            },       //表单绑定
            rules: {
              time: [{validator: validateTime, trigger: 'change'}],
              abstract: [{validator: validateAbstract, trigger: 'blur'}],
              des: [{validator: validateDes, trigger: 'blur'}]
            },
            title: '添加个人荣誉',//弹窗标题
            addexp:{title:'添加个人荣誉',abstract:'添加荣誉摘要',des:'添加荣誉描述'}//默认文本描述
        }
    },

    created() {
      if(Until.getUser().user.userType == 2 || Until.getUser().user.userType == 3) {
        this.type = 1;
      }else if(Until.getUser().user.userType == 4 || Until.getUser().user.userType == 5) {
        this.type = 2;
      }
    },

    mounted() {

    },

    methods:{
        submitForm(name) {
            this.$refs[name].validate((valid) =>{
                if(valid) {
                    this.makeSure()
                } else {
                    return false
                }
            })
        },
        makeSure(){
            this.$refs['form'].validate((valid) => {
                if(valid) {
                  if(this.num == '1'){
                    let data = {
                        celebrityId:Until.getUserSmallInfo().id,
                        honorTime:this.form.time,
                        summary:this.form.abstract,
                        honorDesc:this.form.des,
                        type:this.type,
                        token:Until.getUser().token
                    }
                    this.Http.post(this.Action.addHonor,data).then((res) => {
                        this.$message({
                            type:'success',
                            message:'添加成功'
                        })
                        this.$emit('getHonor');
                    }).catch((err) => {

                    })
                  }else{
                    let data = {
                        benefitTime:this.form.time,
                        summary:this.form.abstract,
                        benefitDesc:this.form.des,
                        type:this.type,
                        token:Until.getUser().token
                    }
                    let action;
                    if(this.type == 2) {
                      data.companyId = Until.getUserSmallInfo().id;
                      action = this.Action.addCompanyBenefit;
                    }else if(this.type == 1) {
                      data.celebrityId = Until.getUserSmallInfo().id;
                      action = this.Action.addBenefit;
                    }
                    this.Http.post(action, data).then((res) => {
                        this.$message({
                            type:'success',
                            message:'添加成功'
                        })
                        this.$emit('getBenefit');
                    }).catch((err) => {

                    })
                  }
                  this.beforeClose();
                }
            })
        },

        openDialog(num){
            this.num = num;
           if(num == '1'){//判断按钮类型
                this.addexp = {title:'添加个人荣誉',abstract:'添加荣誉摘要',des:'添加荣誉描述'}
            }else{
                this.addexp = {title:'添加社会公益案例',abstract:'添加公益摘要',des:'添加公益描述'}
            }
            this.dialogFormVisible = true
        },

        //关闭弹窗前
        beforeClose(){
            this.dialogFormVisible = false
            this.$refs['form'].resetFields();
        }
    }
}
</script>
<style lang="less" scoped>
    .dialog{
        .input{
                width: 240px!important;
        }
        .text{
            width: 736px;
        }
        .dialog-footer{
            .dialogBtn{
                width: 180px;
                height: 40px;
            }
            .submit{
                background-color: #F58523;
                border: #F58523;
                margin-left: 20px;
            }
        }
    }
</style>
