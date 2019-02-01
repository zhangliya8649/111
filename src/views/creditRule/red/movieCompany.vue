<template>
  <div>
    <div class='company'>
      <div class='search-people clear w1180'>
        <div class='img'>
          <router-link to=''><img src='' /></router-link>
        </div>
        <div class='desc'>
          <div class='tit'>
              北京眼缘儿大街小巷科技有限公司
              <router-link to='' class='operator'>未认证</router-link>
          </div>
          <div class='con'>
            <div class='list'>
              企业证书: qw12435454
            </div>
            <div class='list'>
              通讯地址: 北京朝阳区望京SOHO
            </div>
          </div>
        </div>
        <div class='jc-list credit'>
          <div class='num'>B</div>
          <div class='icon-txt'>信用等级</div>
        </div>
        <div class='jc-list honor'>
          <div class='num'>5</div>
          <div class='icon-txt'>荣誉</div>
        </div>
        <div class='jc-list no-honor'>
          <div class='num'>0</div>
          <div class='icon-txt'>失信信息</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'searchPeople',
    components: {

    },
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .search-par {
    padding-top: 20px;
    padding-bottom: 20px;
    .search-people {
        box-sizing: border-box;
        height: 246px;
        border: 1px solid #DCDFE6;
        padding-top: 23px;
        padding-bottom: 23px;
        padding-left: 20px;
        padding-right: 33px;
        margin-bottom: 10px;
        > div {
          float: left;
          color: #4A4A4A;
        }
        .img {
          margin-right: 22px;
          width: 135px;
          height: 199px;
        }
        .desc {
          width: 264px;
          margin-right: 153px;
          .tit {
            margin-bottom: 20px;
            font-size: 24px;
            .operator {
              padding-left: 15px;
              height: 15px;
              line-height: 15px;
              background-image: url('../../assets/search/wrl.png');
              background-repeat: no-repeat;
              background-position: left top;
              font-size: 14px;
              color: #F58523;
              &.received {
                background-image: url('../../assets/search/rl.png');
              }
            }
          }
          .list {
            height: 22px;
            line-height: 22px;
            font-size: 14px;
            span {
              a {
                color: #4393F9;
              }
            }
          }
        }
        .jc-list {
          float: left;
          margin-right: 120px;
          .num {
            height: 98px;
            line-height: 98px;
            margin-top: 33px;
            text-align: center;
            font-size: 86px;
          }
          .icon-txt {
            height: 25px;
            line-height: 25px;
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 16px;
            color: #9B9B9B;
          }
            &.credit {
             .num {

             }
             .icon-txt {
               padding-left: 30px;
               background-image: url('../../assets/search/credit.png');
             }
            }
            &.honor {
             .num {

             }
             .icon-txt {
               padding-left: 33px;
               background-image: url('../../assets/search/honor.png');
             }
           }
           &.no-honor {
            margin-right: 0;
            .num {

            }
            .icon-txt {
              padding-left: 28px;
              background-image: url('../../assets/search/no-honor.png');
            }
          }
        }
      }
  }

</style>
