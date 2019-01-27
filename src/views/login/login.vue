<template>
  <div>
    <div class='bg'>
        <div class='bg-par w1180 clear'>
          <img src='../../assets/login/yxc-bg1.jpg' title='影信查' />
          <img src='../../assets/login/yxc-bg2.jpg' title='影信查' />
          <img src='../../assets/login/yxc-bg3.jpg' title='影信查' />
          <img src='../../assets/login/yxc-bg4.jpg' title='影信查' />
          <img src='../../assets/login/yxc-bg5.jpg' title='影信查' />
          <img src='../../assets/login/yxc-bg6.jpg' title='影信查' />
        </div>
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
              <div class='code'>
                <input type='text' placeholder='请输入您看到的验证码'>
                <div class='img-code'></div>
                <div class='get-code'>看不清？换一张</div>
              </div>
              <div class='form-list login'>
                登录
              </div>
              <div class='register'>
                没有账号？
                <router-link to='/register' class='register-btn'>去注册！</router-link>
              </div>
              <div class='other-login clear'>
                <div class='spap-login'>
                  <div class='spap-icon'></div>
                  司派授权登录
                </div>
                <div class='phone-login'>
                  <div class='phone-icon'></div>
                  手机号快捷登录
                </div>
              </div>
           </div>
        </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'login',
    components: {

    },
    data() {

    },
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .bg {
    position: relative;
    width: 1920px;
    height: 1080px;
    background-image: url('../../assets/login/yxc-bg.jpg');
    background-repeat: no-repeat;
    overflow: hidden;
    .bg-par {
      img {
        display: block;
      }
    }

    .login-win {
      box-sizing: border-box;
      position: absolute;
      top: 174px;
      left: 50%;
      width: 520px;
      height: 520px;
      padding-left: 50px;
      padding-right: 50px;
      padding-top: 42px;
      margin-left: -260px;
      background: #fff;
      color: #fff;
      .title {
        margin-bottom: 43px;
        text-align: center;
        font-size: 24px;
        color: #F58523;
      }
      .form {
        > div {
          margin-bottom: 19px;
        }
        .form-list {
          width: 420px;
          height: 45px;
          line-height: 45px;
          border-radius: 2px;
          .icon {
            width: 50px;
            height: 45px;
            background-repeat: no-repeat;
            background-position: center;
            .user-icon {
              background-image: url('../../assets/login/user-icon.jpg');
            }
            .pwd-icon {
              background-image: url('../../assets/login/pwd-icon.jpg')
            }
          }
          input {
            width: 300px;
            height: 45px;
            font-size: 14px;
            color: #CCCCCC;
          }
        }
        .user {
          background: rgba(0,0,0,0.40);
        }
        .pwd {
          background: rgba(0,0,0,0.40);
          .pwd-eye-icon {
            width: 50px;
            height: 45px;
            background-repeat: no-repeat;
            background-position: center;
            background-image: url('../../assets/login/eye.png');
            &.open {
              background-image: url('../../assets/login/eye-open.png');
            }
          }
        }
        .login {
          background: #F58523;
          text-align: center;
          font-size: 14px;
          color: #FFFFFF;
        }
        .register {
          height: 20px;
          line-height: 20px;
          margin-bottom: 48px;
          font-size: 14px;
          color: #26242A;
          .register-btn {
            color: #4393F9;
          }
        }
        .other-login {
          > div {
            float: left;
            box-sizing: border-box;
            width: 186px;
            height: 42px;
            border-radius: 100px;
            line-height: 42px;
            font-size: 14px;
            > div {
              width: 50px;
              height: 45px;
              background-repeat: no-repeat;
              background-position: center;
            }
          }
          .spap-login {
            border: 1px solid #4393F9;
            margin-right: 40px;
            .spap-icon {
              background-image: url('../../assets/login/spap.png');
              color: #4393F9;
            }
          }
          .phone-login {
            border: 1px solid #F58523;
            .phone-icon {
              background-image: url('../../assets/login/phone.png');
              color: #F58523;
            }
          }
        }
      }
    }
  }
</style>
