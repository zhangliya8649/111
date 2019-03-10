<template>
    <div class='user-login login-win'>
           <div class='title'>登录</div>
           <div class='form'>
              <div class='form-list user'>
                <div class='icon user-icon'></div>
                <input type='text' placeholder='请输入手机号' v-model="phone">
              </div>
              <div class='form-list pwd'>
                <div class='icon pwd-icon'></div>
                <input :type='type' placeholder='密码' v-model="password">
                <div :class='["pwd-eye-icon",open]' @click="openEye"></div>
              </div>
              <div class='form-list code'>
                <input type='text' placeholder='请输入您看到的验证码' v-model="imgCode">
                <div class='img-code'><img :src="codeImg"></div>
                <div class='get-code' @click="changeImg">看不清？换一张</div>
              </div>
              <div class='form-list login' @click="login">
                登 录
              </div>
              <div class='form-list register'>
                没有账号？
                <span class="regist" @click="regist">去注册！</span>
              </div>
              <div class='form-list other-login clear'>
                <div class='spap-login' @click="spapLogin">
                  <div class='spap-icon'></div>
                  司派授权登录
                </div>
                <div class='phone-login' @click="phoneLogin">
                  <div class='phone-icon'></div>
                  手机号快捷登录
                </div>
              </div>
           </div>
        </div>
</template>
<script>
import Until from '../../../until/until.js'
import { getUserIdentity } from '../getUser/getUser.js'
import md5 from 'md5'
export default {
    data(){
        return{
            isOpen:false,   //判断是否显示密码
            open: '',       //密码显示
            type:'password',  //密码框类型
            codeImg:'',       //验证码的图片
            phone:'',         //电话号码
            password:'',           //密码
            imgCode:'',          //图片验证码
            imgId:'',           //图片验证码ID
        }
    },
    methods:{
        //表单验证
        checkForm(){
          let phoneCheck = Until.checkPhone(this.phone)
          let passCheck = Until.checkPass(this.password)
          if(phoneCheck != 'success'){
            this.$message({
              type:'error',
              message:'手机号无效'
            })
            return false
          }else if(passCheck != 'success'){
            this.$message({
              type:'error',
              message:'密码只支持8~16位数字字母组合'
            })
            return false
          }else if(this.imgCode == ''){
            this.$message({
              type:'error',
              message:'请输入图片验证码'
            })
            return false
          }else{
            return true
          }
        },
        login(){
            if(this.checkForm()){
              let data = {
                phone:this.phone,
                pwd:md5(this.password),
                imgId:this.imgId,
                imgCode:this.imgCode
              }
              this.Http.post(this.Action.passwordLogin,data).then((res) => {
                  this.$message({
                    type:'success',
                    message:'登陆成功'
                  });
                  sessionStorage.setItem('userInfo',JSON.stringify(res));
                  this.$store.commit('setUserInfo');
                  //获取身份
                  getUserIdentity(this);
                  this.$router.push({
                    path: '/'
                  })
              }).catch((err) => {
                this.$message({
                  type:'error',
                  message: '错误：' + err.desc
                })
              })
            }
        },
        spapLogin(){            //司派登陆
            this.$emit('toggleLogin',1)
        },
        phoneLogin(){               //手机号快捷登陆
            this.$emit('toggleLogin',2)
        },
        regist(){                   //注册
            this.$router.push({path:'/register'})
        },
        openEye(){                   //显示密码
            this.isOpen = !this.isOpen
            this.isOpen ? this.open = 'open' : this.open = ''
            this.isOpen ? this.type = 'text' : this.type = 'password'
        },
         //获取图片验证码
        getImgCode(){
         this.Http.post(this.Action.imgCode).then((res) => {
            this.codeImg = res.imgPath
            this.imgId = res.imgId
          }).catch((err) => {
            this.$message({
              type:'error',
              message:err
            })
          });
        },
        //换一张
        changeImg(){
          this.getImgCode()
        }
    },
    mounted(){
      this.getImgCode()
    }
}
</script>
<style lang="less" scoped>
    .login-win {
      box-sizing: border-box;
      position: absolute;
      top: 174px;
      left: 50%;
      width: 520px;
      height: 520px;
      padding-top: 42px;
      margin-left: -260px;
      background: #fff;
      color: #fff;
      .title {
        margin-bottom: 43px;
        text-align: center;
        font-size: 24px;
        color: #F58523;
        letter-spacing: 6px;
      }
      .form {
        padding-left: 50px;
        padding-right: 50px;
        > div {
          margin-bottom: 18px;
        }
        .form-list {
          width: 420px;
          height: 45px;
          margin-right: auto;
          margin-left: auto;
          background-color: #F8F9FC;
          line-height: 45px;
          border-radius: 2px;
          .icon {
            float: left;
            width: 50px;
            height: 45px;
            background-repeat: no-repeat;
            background-position: center;
            &.user-icon {
              background-image: url('../../../assets/login/user-icon.jpg');
            }
            &.pwd-icon {
              background-image: url('../../../assets/login/pwd-icon.jpg')
            }
          }
          input {
            width: 300px;
            height: 45px;
            background-color: #F8F9FC;
            font-size: 14px;
            color: #606266;
            outline: none;
          }
        }
        .user {

        }
        .pwd {
          .pwd-eye-icon {
            float: right;
            width: 50px;
            height: 45px;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('../../../assets/login/eye.png');
            cursor: pointer;
            &.open {
              background-image: url('../../../assets/login/eye-open.png');
            }
          }
        }
        .login {
          background: #F58523;
          text-align: center;
          font-size: 14px;
          color: #FFFFFF;
          cursor: pointer;
        }
        .code {
          background: transparent;
          input, div {
            float: left;
            font-size: 14px;
          }
          input {
            padding-left: 20px;
            width: 180px;
            margin-right: 10px;
          }
          .img-code {
            width: 90px;
            height: 45px;
            margin-right: 10px;
            background-color: #fff;
            img{
              vertical-align: middle;
            }
          }
          .get-code {
            width: 100px;
            height: 45px;
            line-height: 45px;
            color: #26242A;
            cursor: pointer;
          }
        }
        .register {
          height: 20px;
          line-height: 20px;
          margin-bottom: 48px;
          background: transparent;
          font-size: 14px;
          color: #26242A;
          .regist{
            color: #4393F9;
            cursor: pointer;
          }
        }
        .other-login {
          background: transparent;
          > div {
            float: left;
            box-sizing: border-box;
            width: 186px;
            height: 42px;
            border-radius: 100px;
            line-height: 42px;
            font-size: 14px;
            cursor: pointer;
            > div {
              float: left;
              width: 50px;
              height: 42px;
              background-repeat: no-repeat;
              background-position: center;
            }
          }
          .spap-login {
            border: 1px solid #4393F9;
            margin-right: 40px;
            color: #4393F9;
            .spap-icon {
              background-image: url('../../../assets/login/spap.png');
            }
          }
          .phone-login {
            border: 1px solid #F58523;
            color: #F58523;
            .phone-icon {
              background-image: url('../../../assets/login/phone.png');
            }
          }
        }
      }
      .checkForm{
        font-family: '.AppleSystemUIFont';
        font-size: 14px;
        color: #FC605B;
        letter-spacing: 0;
        margin-bottom: 16px;
        .icon{
          display: inline-block;
          height: 23px;
          width: 23px;
          img{
            vertical-align: middle;
          }
        }
      }
    }
</style>
