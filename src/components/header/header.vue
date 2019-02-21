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
            <a @click="logOut">退出</a>
          </li>
          <li class='loginRegister' v-else>
            <router-link :to="{path:'/login',query: {num: 0}}">登录</router-link>
            <span>|</span>
            <router-link to='/register'>注册</router-link>
          </li>
        </ul>
      </div>
    </div>
    <el-dialog 
    id="dialog"
    title="提示"
    :visible.sync="dialogVisible"
    width="20%" >
    <span>是否退出登录</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button @click="logOutSure" class="btn">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import Until from '../../until/until.js'
  export default {
    data(){
      return{
        userName:this.$store.getters.getUserName ? this.$store.getters.getUserName.user.nickName : '',   //用户信息
        isLogin:this.$store.getters.isLogin,      //是否登陆
        dialogVisible:false,//显示提示
      }
    },
    methods: {
      getUser(){      //获取用户信息
        this.isLogin =  this.$store.getters.isLogin
      },
      logOut(){
        this.dialogVisible = true
      },
      logOutSure(){
        this.dialogVisible = false
        this.$store.commit('signOut')
        this.$router.push({path:'/'})
        this.getUser()
      }
    },
    mounted(){
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
    #dialog{
      .el-dialog{
        .el-dialog__body{
          padding: 0 30px!important;
          text-align: center;
        }
        .btn{
          background-color: #F58523;
          color: #fff;
          border-color: #F58523;
        }
      }
    }
  }

</style>
