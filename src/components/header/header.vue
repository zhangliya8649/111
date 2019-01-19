<template>
  <div class='header'>
    <div class='w1180'>
      <div clsss="logo">
        <img src='../assets/logo.png' title='影信查logo'>
        <router-link to=''>影信查</router-link>
      </div>
      <div class='menu'>
        <ul class='clear'>
          <li class='home'>
            <router-link to=''>首页</router-link>
          </li>
          <li class='credit'>
            <router-link to=''>信用中心</router-link>
          </li>
          <li class='loginRegister'>
            <router-link to=''>登录</router-link>
            <router-link to=''>注册</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
      data () {
        return {

        }
      }
  }
</script>

<style lang='less' scoped>
  .header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background: rgba(131, 131, 131, 0.5);
    color: #fff;
    font-size: 14px;
    .logo {
        img {
           width: 36px;
        }
    }
    .menu {
      ul {
        li {
          float: left;
          padding-left: 15px;
          padding-right: 15px;
        }
        .home {

        }
        .credit {

        }
        .loginRegister {

        }
      }
    }
  }

</style>
