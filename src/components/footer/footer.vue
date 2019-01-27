<template>
  <div class='footer'>
    <div class='w1180 clear'>
      <div class='company-detail'>
        <div class='contact'>
          <span>Tel：010-84922996</span>
          <span>Mail：service@shixinyun.com</span>
          <span>QQ：2161045552</span>
        </div>
        <div class='copyright'>
          <span>版权所有 © 2014-2016</span>
          <span>北京时信互联网络科技有限公司</span>
          <span>京公网安备 11010502033657号</span>
          <span>京ICP备16000263号-1</span>
        </div>
      </div>
      <div class='code'>
        <img src='../../assets/ewm.jpg' />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer'
  }
</script>

<style lang='less' scoped>
  .footer {
    width: 1920px;
    height: 172px;
    box-sizing: border-box;
    padding-top: 43px;
    background: rgb(51, 51, 51);
    color: #fff;
    font-size: 14px;
    .company-detail {
        height: 100%;
        float: left;
        div {
          height: 20px;
          line-height: 20px;
          span {
            margin-right: 18px;
            opacity: 0.8;
          }
          span:last-child {
            margin-right: 0;
          }
        }
        .contact {
          padding-top: 19px;
          margin-bottom: 12px;
        }
        .copyright {

        }
    }
    .code {
      float: right;
      width: 85px;
      height: 85px;
    }
  }

</style>
