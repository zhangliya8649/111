<template>
  <div class='header'>
    <div class='w1180 clear'>
      <div class='logo'>
        <router-link to='/'>影信查</router-link>
      </div>
      <div class='menu'>
        <ul class='clear'>
          <li class='home'>
            <router-link to='/'>首页</router-link>
          </li>
          <li class='credit'>
            <router-link to='/credit'>信用中心</router-link>
          </li>
          <li class="user" v-if="isLogin">
            <router-link to="/personal">{{userName}}</router-link>
            <span>|</span>
            <a>退出</a>
          </li>
          <li class='loginRegister' v-else>
            <router-link to='/login'>登录</router-link>
            <span>|</span>
            <router-link to='/register'>注册</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'header',
    data(){
      return{
        userName:'admin',   //用户名称
        isLogin:false,      //是否登陆
      }
    },
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .header {
    width: 100%;
    height: 56px;
    line-height: 56px;
    background: rgb(51, 51, 51);
    color: #fff;
    font-size: 14px;
    a {
      color: #fff;
      opacity: 0.8;
      &:active, &:hover, &.router-link-active {
        font-size: 16px;
        opacity: 1;
      }
    }
    .logo {
        height: 56px;;
        float: left;
        padding-left: 48px;
        background-image: url('../../assets/logo.png');
        background-repeat: no-repeat;
        background-position: left center;
        cursor: pointer;
        a {
          &.router-link-active {
            font-size: 14px;
            opacity: 0.8;
          }
        }
    }
    .menu {
      float: right;
      ul {
        li {
          float: left;
          height: 56px;
          a {
            padding-left: 15px;
            padding-right: 15px;
            &:active, &:hover, &.router-link-active {
              padding-left: 11px;
              padding-right: 11px;
            }
          }
        }
        .home {

        }
        .credit {

        }
        .loginRegister {
           a {
            padding-left: 0;
            padding-right: 0;
           }
           a:first-child {
            padding-left: 15px;
            &:active, &:hover, &.router-link-active {
              padding-right: 0;
              padding-left: 11px;
            }
           }
           a:last-child {
            padding-right: 15px;
            &:active, &:hover, &.router-link-active {
              padding-left: 0;
              padding-right: 11px;
            }
           }
           span {
            font-size: 12px;
           }
        }
        .user{
          a {
            padding-left: 0;
            padding-right: 0;
           }
           a:first-child {
            padding-left: 15px;
            &:active, &:hover, &.router-link-active {
              padding-right: 0;
              padding-left: 11px;
            }
           }
           a:last-child {
            padding-right: 15px;
            &:active, &:hover, &.router-link-active {
              padding-left: 0;
              padding-right: 11px;
            }
           }
           span {
            font-size: 12px;
           }
        }
      }
    }
  }

</style>
