<template>
  <div>
    <div class='search-par' :data-id='list.id'>
      <div class='search-people clear w1180'>
        <div class='img'>
          <router-link to=''><img :src='list.subjectUrl' /></router-link>
        </div>
        <div class='desc'>
          <div class='tit'>
            {{list.subjectName}}
          </div>
          <div class='con'>
            <div class='list'>
              导演：<span v-for='item in list.subjectDirectors'><router-link to='/credit/works' class=''>{{item.celebrityName}}</router-link></span>
            </div>
            <div class='list'>
              编剧: <span v-for='item in list.subjectAdaptors'><router-link to='/credit/works' class=''>{{item.celebrityName}}</router-link>&nbsp;/&nbsp;</span>
            </div>
            <div class='list'>
              导演：<span v-for='item in list.subjectProtagonists'><router-link to='/credit/works' class=''>{{item.celebrityName}}</router-link>&nbsp;/&nbsp;</span>
            </div>
            <div class='list'>
              制片国家/地区: {{list.producerCountry}}
            </div>
            <div class='list'>
              上映日期: {{list.releaseDate}}
            </div>
            <div class='list'>
              片长: {{list.subjectLength}}
            </div>
          </div>
        </div>
        <div class='honor'>
          <div class='num'>{{list.commendCount}}</div>
          <div class='icon-txt'>荣誉</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'searchWorks',

    props: ['list'],

    components: {

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
