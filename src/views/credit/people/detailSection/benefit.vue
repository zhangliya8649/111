<template>
    <div class='benefit'>
        <el-table
            :data="benefitDetail"
            height='216'
            style="width: 100%;">
            <el-table-column
                prop="benefitTime"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="summary"
                label="摘要"
                width="180">
            </el-table-column>
            <el-table-column
                prop="benefitDesc"
                label="描述">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>


export default {
    components:{},

    data(){
        return{
            benefitDetail: [
            ],
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
          this.getDetail('benefitDetail', param);
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

</style>
