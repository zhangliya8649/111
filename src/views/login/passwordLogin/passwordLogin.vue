<template>
    <div class='user-login login-win'>
           <div class='title'>登录</div>
           <div class='form'>
              <div class='form-list user'>
                <div class='icon user-icon'></div>
                <input type='text' placeholder='请输入手机号'>
              </div>
              <div class='form-list pwd'>
                <div class='icon pwd-icon'></div>
                <input type='password' placeholder='密码'>
                <div class='pwd-eye-icon'></div>
              </div>
              <div class='form-list code'>
                <input type='text' placeholder='请输入您看到的验证码'>
                <div class='img-code'>3424</div>
                <div class='get-code'>看不清？换一张</div>
              </div>
              <div class='form-list login' @click="login">
                登录
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
export default {
    data(){
        return{

        }
    },
    methods:{
        login(){
            this.$router.push({path:'Personal'})
        },
        spapLogin(){            //司派登陆
            this.$emit('toggleLogin',1)
        },
        phoneLogin(){               //手机号快捷登陆
            this.$emit('toggleLogin',2)
        },
        regist(){                   //注册
            this.$emit('toggleLogin',3)
        }
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
          margin-bottom: 19px;
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
            color: #CCCCCC;
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
            margin-right: 10px;
            background-color: #F8F9FC;
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
    }
</style>