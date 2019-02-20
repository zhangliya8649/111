<template>
  <div>
    <div class='search-par' :data-id='list.id'>
      <div class='search-people clear w1180'>
        <div class='img'>
          <a href='javascript:;' @click='openWorkDetail(list.id)'><img :src='list.subjectUrl'/></a>
        </div>
        <div class='desc'>
          <div class='tit'>
            《{{list.subjectName}}》
          </div>
          <div class='con'>
            <div class='list'>
              导演：<a href='javascript:;' @click='openPeopleDetail(item.id)' v-for='item in list.subjectDirectors' class='active'>{{item.celebrityName}}<span class='line'>/</span></a>
            </div>
            <div class='list'>
              编剧: <a href='javascript:;' @click='openPeopleDetail(item.id)' v-for='item in list.subjectAdaptors' class='active'>{{item.celebrityName}}<span class='line'>/</span></a>
            </div>
            <div class='list'>
              主演：<a href='javascript:;' @click='openPeopleDetail(item.id)' v-for='item in list.subjectProtagonists' class='active'>{{item.celebrityName}}<span class='line'>/</span></a>
            </div>
            <div class='list'>
              制片国家/地区: <a href='javascript:;' v-for='item in list.producerCountry' class=''>{{item}}<span class='line'>/</span></a>
            </div>
            <div class='list'>
              上映日期: <a href='javascript:;' v-for='item in list.releaseDate' class=''>{{item}}<span class='line'>/</span></a>
            </div>
            <div class='list'>
              片长: <a href='javascript:;' v-for='item in list.subjectLength' class=''>{{item}}<span class='line'>/</span></a>
            </div>
          </div>
        </div>
        <div class='honor'>
          <div class='num'>{{list.commendCount ? list.commendCount : 0}}</div>
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
      openWorkDetail(id) {
        this.$router.push({
          path: '/credit/works',
          query: {id: id}
        });
      },

      openPeopleDetail(id) {
        this.$router.push({
          path: '/credit/people',
          query: {id: id}
        });
      }
    },

    mounted: function() {

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
          img {
            width: 100%;
          }
        }
        .desc {
          .tit {
            margin-bottom: 33px;
            font-size: 18px;
            font-weight: bold;
          }
          .list {
            height: 22px;
            line-height: 22px;
            font-size: 14px;
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
