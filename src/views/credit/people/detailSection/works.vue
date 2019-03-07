<template>
    <div class='works'>
        <div class="works-par" id='worksDetail'>
            <div class='works-title clear'>
              <p class="tit-desc">作品（与<span>{{cName}}</span>相关的，共有<span>{{workTotal}}</span>部作品）</p>
              <p v-if='workTotal > 6' class="more-works" @click="moreWorks(id, cName)">全部作品》</p>
            </div>
            <div class="works-box">
                <div class='list' v-for='item in worksDetail'>
                  <a href='javascript:;' @click='openWorkDetail(item.id)'>
                    <img v-if = 'item.subjectUrl != "None"' :src='item.subjectUrl'/>
                    <img v-else src='../../../../assets/credit/default-man.png'/>
                  </a>
                  <div class='name'>名称：{{item.subjectName}}</div>
                  <div class='time'>时间：{{item.releaseDate ? item.releaseDate[0] : '无'}}</div>
                  <div class='desc'>描述：{{item.subjectIntroduce}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


export default {
    components:{},

    data(){
        return{
            worksDetail: [],
            workTotal: 0
        }
    },

    props: ['cName'],

    created: function() {
        //赋值
        this.id = this.$route.query.id;

        //查询人物基本信息
        if(this.$store.state.isLogin) {
            let param = {
              celebrityId: this.id,
              pageNum: 1
            };
            this.getDetail('worksDetail', param);
        }

    },

    mounted: function() {

    },

    methods:{
        //获取人物详情基本信息
        getDetail(type, param) {
          let typeObj = {
            'basicDetail': 'SearchPersonById',
            'jobDetail': 'SearchPersonWorkById',
            'honorDetail': 'SearchPersonHonorById',
            'benefitDetail': 'SearchPersonBenefitById',
            'creditDetail': 'SearchPersonCreditById',
            'worksDetail' : 'SearchWorkNumById'
          }
          this.Http.post(this.Action[typeObj[type]], param).then((data) => {
            this[type] = type == 'basicDetail' ? data.celebrity : data.list;
            if(type == 'worksDetail') {
              this.workTotal = data.total;
              this[type] = this[type].length > 6 ? this[type].slice(0, 6) : this[type];
            }
          }).catch((err) => {
            console.log(err);
          })
        },

        //更多作品
        moreWorks(id, name) {
          this.$router.push({
            path: '/search',
            query: {id, name}
          })
        },

        //查询作品详情
        openWorkDetail(id) {
          this.$router.push({
            path: '/credit/works/worksDetail',
            query: {id}
          })
        },
    }
}
</script>
<style lang="less" scoped>
  .works-par {
      margin-top: 52px;
      .works-title{
          color: #F58523;
          font-size: 16px;
          .tit-desc {
            float: left;
          }
          .more-works{
              float: right;
              width: 80px;
              text-align: right;
              cursor: pointer;
          }
      }
      .works-box{
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          padding-top: 26px;
          .list {
            float: left;
            width: 180px;
            margin-right: 20px;
            font-size: 16px;
            a {
              display: block;
              height: 270px;
              margin-bottom: 16px;
            }
            img {
              width: 180px;
            }
            div {
              width: 100%;
              height: 22px;
              line-height: 22px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              font-size: 14px;
              color: #4A4A4A;
            }
          }
          .list:last-child {
            margin-right: 0;
          }
      }
  }
</style>
