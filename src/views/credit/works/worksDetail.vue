<template>
    <div class='detail w1180'>
      <div class='detail-tit'>
        <span class='subject'>{{list.subjectName}}</span>（2018）
      </div>
      <div class='basic-detail clear'>
        <div class='search-people clear'>
          <div class='img'>
            <img :src='list.subjectUrl'/>
          </div>
          <div class='desc'>
            <div class='tit'>
              豆瓣评分{{list.score}}
            </div>
            <div class='con'>
              <div class='list'>
                导演：<a href='javascript:;' @click='openDetail(item.id)' class='active' v-for='item in list.subjectDirectors'>{{item.celebrityName}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                编剧: <a href='javascript:;' @click='openDetail(item.id)' class='active' v-for='item in list.subjectAdaptors'>{{item.celebrityName}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                主演：<a href='javascript:;' @click='openDetail(item.id)' class='active' v-for='item in list.subjectProtagonists'>{{item.celebrityName}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                类型: <a href='javascript:;' v-for='item in list.genres'>{{item}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                制片国家/地区: <a href='javascript:;' v-for='item in list.producerCountry'>{{item}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                语言: <a href='javascript:;' v-for='item in list.subjectLanguage'>{{item}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                上映日期: <a href='javascript:;' v-for='item in list.releaseDate'>{{item}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                片长: <a href='javascript:;' v-for='item in list.subjectLength'>{{item}}<span class='line'>/</span></a>
              </div>
              <div class='list'>
                又名: <a href='javascript:;' v-for='item in list.aliasName'>{{item}}<span class='line'>/</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='intro-detail'>
        <div class='tit'>影片介绍</div>
        <div class='con'>
          {{list.subjectIntroduce}}
        </div>
      </div>
      <div class='people-detail'>
        <div class='tit'>来电狂响演职员</div>
        <div class='con clear'>
          <div class='list' v-for='item in list.subjectDirectors'>
            <a href='javascript:;' @click=openDetail(item.id)>
              <img v-if = 'item.celebrityHeadUrl != "None"' :src='item.celebrityHeadUrl'/>
              <img v-else src='../../../assets/credit/default-man.png'/>
            </a>
            <div class='name'>{{item.celebrityName}}</div>
            <div class='rule'>导演</div>
          </div>
          <div class='list' v-for='item in list.subjectAdaptors'>
            <a href='javascript:;' @click=openDetail(item.id)>
              <img v-if = 'item.celebrityHeadUrl != "None"' :src='item.celebrityHeadUrl'/>
              <img v-else src='../../../assets/credit/default-man.png'/>
            </a>
            <div class='name'>{{item.celebrityName}}</div>
            <div class='rule'>编剧</div>
          </div>
          <div class='list' v-for='item in list.subjectProtagonists'>
            <a href='javascript:;' @click=openDetail(item.id)>
              <img v-if = 'item.celebrityHeadUrl != "None"' :src='item.celebrityHeadUrl'/>
              <img v-else src='../../../assets/credit/default-man.png'/>
            </a>
            <div class='name'>{{item.celebrityName}}</div>
            <div class='rule'>主演</div>
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

    created: function() {
      this.getDataDetail(this.$route.query.id);
    },

    mounted: function() {

    },

    methods: {
        getDataDetail(id) {
          let param = {
            subjectId: id
          };
          this.Http.post(this.Action.SearchWorkById, param).then((data) => {
            this.list = data.subjectBaseInfo;
          }).catch((err) => {
            console.log(err);
          })
        },

        openDetail(id) {
          //跳转到人物详情
          this.$router.push({
            path: '/credit/people',
            query: {id: id}
          })
        }
    }
  }
</script>

<style lang='less' scoped>
  .detail {
    padding-top: 63px;
    padding-bottom: 112px;
    font-size: 14px;
    color: #4A4A4A;
    .detail-tit {
      margin-bottom: 36px;
      font-size: 36px;
      .subject {
        font-weight: bold;
        color: #000;
      }
    }
    .basic-detail {
      height: 360px;
      margin-bottom: 63px;
      .search-people {
          box-sizing: border-box;
          width: 100%;
          height: 246px;
          margin-bottom: 64px;
          > div {
            float: left;
          }
          img {
            margin-right: 22px;
            width: 240px;
            height: 355px;
            img {
              width: 100%;
            }
          }
          .desc {
            .tit {
              margin-bottom: 20px;
            }
            .list {
              height: 22px;
              line-height: 22px;
              color: #000;
              a {
                color: #000;
                .line {
                  padding-left: 3px;
                  padding-right: 3px;
                }
                &.active {
                  color: #4393F9;
                  .line {
                    color: #000;
                  }
                }
              }
              a:last-child {
                .line {
                  display: none;
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
        margin-bottom: 20px;
      }
      .con {
        text-indent: 28px;
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
          img {
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
