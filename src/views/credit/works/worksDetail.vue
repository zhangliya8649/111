<template>
    <div class='detail w1180'>
      <div class='basic-detail clear'>
        <div class='search-people clear'>
          <div class='img'>
            <router-link to=''><img :src='list.subjectUrl' /></router-link>
          </div>
          <div class='desc'>
            <div class='tit'>
              豆瓣评分{{list.subjectBaseInfo.score}}
            </div>
            <div class='con'>
              <div class='list'>
                导演：<span v-for='item in list.subjectDirectors'><router-link to='/works' class=''>{{item.celebrityName}}</router-link></span>
              </div>
              <div class='list'>
                编剧: <span v-for='item in list.subjectAdaptors'><router-link to='/works' class=''>{{item.celebrityName}}</router-link>&nbsp;/&nbsp;</span>
              </div>
              <div class='list'>
                主演：<span v-for='item in list.subjectProtagonists'><router-link to='/works' class=''>{{item.celebrityName}}</router-link>&nbsp;/&nbsp;</span>
              </div>
              <div class='list'>
                类型: <span v-for='item in list.subjectBaseInfo.genres'>{{item}}&nbsp;/&nbsp;</span>
              </div>
              <div class='list'>
                制片国家/地区: {{list.subjectBaseInfo.producerCountry}}
              </div>
              <div class='list'>
                语言: <span v-for='item in list.subjectBaseInfo.subjectLanguage'>{{item}}&nbsp;/&nbsp;</span>
              </div>
              <div class='list'>
                上映日期: {{list.subjectBaseInfo.releaseDate}}
              </div>
              <div class='list'>
                片长: {{list.subjectBaseInfo.subjectLength}}
              </div>
              <div class='list'>
                又名: {{list.subjectBaseInfo.aliasName}}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='intro-detail'>
        <div class='tit'>影片介绍</div>
        <div class='con'>
          {{list.subjectBaseInfo.subjectIntroduce}}
        </div>
      </div>
      <div class='people-detail'>
        <div class='tit'>来电狂响演职员</div>
        <div class='con'>
          <div class='list'>
            <div class='img'>

            </div>
            <div class='name'>李雪</div>
            <div class='rule'>导演</div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>

  export default {
    name: 'worksDetail',

    data() {
      return {
        list: {}
      }
    },

    props: [],

    components: {

    },

    mounted: function() {
      console.log(111111111111111111111);
      this.Http.post(this.Action.SearchWorksById, {subjectId: 123123}, (data) => {
        console.log(data);
        this.list = data;
      }, (err) => {
        console.log(err);
      })
    },

    methods: {

    }
  }
</script>

<style lang='less' scoped>
  .detail {
    padding-top: 63px;
    padding-bottom: 112px;
    font-size: 14px;
    color: #4A4A4A;
    .basic-detail {
      .search-people {
          box-sizing: border-box;
          width: 100%;
          height: 246px;
          margin-bottom: 64px;
          > div {
            float: left;
          }
          .img {
            margin-right: 22px;
            width: 240px;
            height: 355px;
          }
          .desc {
            .tit {
              margin-bottom: 20px;
            }
            .list {
              height: 22px;
              line-height: 22px;
              color: #000;
              span {
                a {
                  color: #4393F9;
                }
              }
            }
          }
      }
    }
    .intro-detail, .people-detail {
      .tit {
        color: #F58523;
      }
    }
    .intro-detail {
      margin-bottom: 64px;
      .tit {
        margin-bottom: 30px;
      }
      .con {

      }
    }
    .people-detail {
      .tit {
        margin-bottom: 26px;
      }
      .con {
        .list {
          float: left;
          width: 180px;
          margin-right: 20px;
          font-size: 16px;
          .img {
            width: 180px;
            height: 254px;
            background: blue;
            margin-bottom: 16px;
          }
          .name, .rule {
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-size: 14px;
          }
          .name{
            color: #000;
          }
          .rule {
            color: #9b9b9b;
          }
        }
        .list:last-child {
          margin-right: 0;
        }
      }
    }
  }

</style>
