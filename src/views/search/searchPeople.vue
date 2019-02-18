<template>
  <div>
    <div class='search-par' :data-id='list.id'>
      <div class='search-people clear w1180'>
        <div class='img'>
          <router-link to=''><img :src='list.celebrityHeadUrl' /></router-link>
        </div>
        <div class='desc'>
          <div class='tit'>
              {{list.celebrityName}}
              <router-link to='' class='operator' v-if='list.claimState == 1'>未认领</router-link>
              <router-link to='' class='operator' v-else-if='list.claimState == 2'>审核中</router-link>
              <span class='operator' v-if='list.claimState == 3'>已认领</span>
          </div>
          <div class='con'>
            <div class='list'>
              职业: {{list.occupation}}
            </div>
            <div class='list'>
              职业证书: {{list.certificate}}
            </div>
            <div class='list'>
              所属机构: {{list.agency}}
            </div>
            <div class='role clear'>
              <div class='role-list'>影视人</div>
              <div class='role-list'>制片人</div>
            </div>
          </div>
        </div>
        <div class='jc-list credit'>
          <div class='num'>{{list.rating}}</div>
          <div class='icon-txt'>信用等级</div>
        </div>
        <div class='jc-list honor'>
          <div class='num'>{{list.commendCount}}</div>
          <div class='icon-txt'>荣誉</div>
        </div>
        <div class='jc-list no-honor'>
          <div class='num'>{{list.loseCreditCount}}</div>
          <div class='icon-txt'>失信信息</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'searchPeople',

    props: ['list'],

    mounted: function() {
      console.log(this.list[0]);
    },

    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .search-par {
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
          .role {
            margin-top: 60px;
            .role-list {
              float: left;
              box-sizing: border-box;
              width: 68px;
              height: 28px;
              border: 1px solid #F58523;
              border-radius: 4px;
              line-height: 28px;
              margin-right: 10px;
              text-align: center;
              font-size: 14px;
              color: #F58523;
            }
            .role-list:last-child {
              margin-right: 0;
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
