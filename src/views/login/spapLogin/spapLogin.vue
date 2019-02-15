<template>
    <div class='user-login login-win'>
           <div class='title'>司派快捷登录</div>
           <div class='qrCodeBox'>
              <div class="qrCode">
                  <img src="../../../assets/img/qrCode.png">
              </div>
            <p class="des">请使用司派APP扫码授权登录，谢谢！</p>
           </div>
           <div class='form-list other-login clear'>
                <div class='spap-login' @click="passwordLogin">
                  <div class='spap-icon'></div>
                  账号密码登录
                </div>
                <div class='password-login' @click="phoneLogin">
                  <div class='password-icon'></div>
                  手机号快捷登录
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
        phoneLogin(){            //司派登陆
            this.$emit('toggleLogin',2)
        },
        passwordLogin(){               //手机号快捷登陆
            this.$emit('toggleLogin',0)
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
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #F58523;
        letter-spacing: 6px;
        text-align: center;
        line-height: 32px;
      }
      .qrCodeBox{
          margin-top: 44px;
          .qrCode{
            height: 213px;
            width: 213px;
            margin: 0 auto;
          }
          .des{
            margin-top: 20px;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: #4A4A4A;
            letter-spacing: 1px;
            text-align: center;
          }
      }
      .other-login {
          margin-top: 48px;
          background: transparent;
          display: flex;
          justify-content: space-around;
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
            border: 1px solid #F58523;
            font-family: PingFang-SC-Medium;
            font-size: 14px;
            color: #F58523;
            letter-spacing: 2px;
            .spap-icon {
              background-image: url('../../../assets/login/pwd.png');
            }
          }
          .password-login {
            border: 1px solid #F58523;
            color: #F58523;
            .password-icon {
              background-image: url('../../../assets/login/phone.png');
            }
          }
        }
    }
</style>