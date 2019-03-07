<template>
    <div class='job'>
        <div class='no-detail' v-if='jobDetail.length < 1'>暂无数据</div>
        <TimeLine v-for="(data,index) in jobDetail" :msg='data' :key='index' :index='index'></TimeLine>
    </div>
</template>
<script>
import TimeLine from '../../../personal/peronalPage/timeLine/timeLine'


export default {
    components:{TimeLine},

    data(){
        return{
            jobDetail: [],
        }
    },

    props: [],

    created: function() {
        //赋值
        this.id = this.$route.query.id;
        this.token = this.$store.state.token;

        //查询人物基本信息
        if(this.$store.state.isLogin) {
          let param = {
            celebrityId: this.id,
            token: this.token
          };
          this.getDetail('jobDetail', param);
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
    }
}
</script>
<style lang="less" scoped>
    .job {
      display: flex;
      height: 316px;
      justify-content: space-between;
      margin-right:45px;
      overflow-x: auto;
      .no-detail {
        width: 100%;
        padding-top: 100px;
        text-align: center;
        color: #909399;
        font-size: 14px;
      }
    }
</style>
