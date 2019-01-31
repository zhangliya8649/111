<template>
  <div>
    <div class='search-par'>
      <div class='search-people clear w1180'>
        <div class='img'>
          <router-link to=''><img src='' /></router-link>
        </div>
        <div class='desc'>
          <div class='tit'>
            《来电狂想》
          </div>
          <div class='con'>
            <div class='list'>
              导演：<span><router-link to='' class=''>于淼</router-link></span>
            </div>
            <div class='list'>
              编剧: <span><router-link to='' class=''>李潇</router-link>&nbsp;/&nbsp;<router-link to='' class=''>王思</router-link>&nbsp;/&nbsp;<router-link to='' class=''>王欢</router-link></span>
            </div>
            <div class='list'>
              导演：<span><router-link to='' class=''>佟大为</router-link>&nbsp;/&nbsp;<router-link to='' class=''>马丽</router-link>&nbsp;/&nbsp;<router-link to='' class=''>霍思燕</router-link>&nbsp;/&nbsp;
                          <router-link to='' class=''>田雨</router-link>&nbsp;/&nbsp;<router-link to='' class=''>王思</router-link>&nbsp;/&nbsp;<router-link to='' class=''>王欢</router-link>&nbsp;/&nbsp;
                          <router-link to='' class=''>更多</router-link>
              </span>
            </div>
            <div class='list'>
              制片国家/地区: 中国大陆
            </div>
            <div class='list'>
              上映日期: 2018-12-28(中国大陆)
            </div>
            <div class='list'>
              片长: 103分钟
            </div>
          </div>
        </div>
        <div class='honor'>
          <div class='num'>5</div>
          <div class='icon-txt'>荣誉</div>
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
          .tit {
            margin-bottom: 33px;
            font-size: 18px;
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
        .honor {
          float: right;
          .num {
            height: 98px;
            line-height: 98px;
            margin-top: 33px;
            font-size: 86px;
          }
          .icon-txt {
            height: 25px;
            line-height: 25px;
            padding-left: 33px;
            background-image: url('../../assets/search/honor.png');
            background-repeat: no-repeat;
            background-position: left center;
            font-size: 16px;
            color: #9B9B9B;
          }
        }
      }
  }

</style>
