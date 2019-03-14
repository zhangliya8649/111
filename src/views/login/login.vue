<template>
  <div>
    <div class='bg'>
        <div class='bg-par w1180 clear'>
          <PasswordLogin v-if="loginNum == 0" @toggleLogin='toggleLogin'></PasswordLogin>
          <SpapLogin v-if="loginNum == 1" @toggleLogin='toggleLogin'></SpapLogin>
          <PhoneLogin v-if="loginNum == 2" @toggleLogin='toggleLogin'></PhoneLogin>
        </div>
    </div>
  </div>

</template>

<script>
import PasswordLogin from './passwordLogin/passwordLogin'
import PhoneLogin from './phoneLogin/phoneLogin'
import SpapLogin from './spapLogin/spapLogin'
  export default {
    name: 'login',
    components: {
      PasswordLogin,
      PhoneLogin,
      SpapLogin,
    },
    data(){
      return{
        loginNum: 0,        //登陆方式
      }
    },
    methods: {
      toggleLogin(num){
        this.loginNum = num;
      },
      checkNum(){
        if(this.$route.query.num){
          this.loginNum = this.$route.query.num
        }else{
          this.loginNum = 0
        }
      }
    },
    mounted(){
      this.checkNum()
    }
  }
</script>

<style lang='less';; llx scoped>
  .bg {
    position: relative;
    width: 100%;
    height: 1080px;
    margin: 0 auto;
    background-image: url('../../assets/login/bg.png');
    background-repeat: no-repeat;
    overflow: hidden;
    .bg-par {
      margin: 0 auto;
      height: 100%;
      img {
        display: block;
      }
    }
  }
</style>
