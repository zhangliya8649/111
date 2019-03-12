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
import Until from '../../../../until/until.js'

export default {
    components:{},

    data(){
        return{
            benefitDetail: [],
        }
    },

    props: [],

    created: function() {
        //赋值
        this.id = this.$route.query.id;
        this.token = Until.getUser().token;

        //查询人物基本信息
        if(this.$store.state.isLogin) {
          let param = {
            celebrityId: this.id,
            token: this.token
          };
          this.getDetail(param);
        }

    },

    mounted: function() {

    },

    methods:{
        //获取人物详情基本信息
        getDetail(param) {
          this.Http.post(this.Action.SearchPersonBenefitById, param).then((data) => {
            for(let i = 0; i < data.list.length; i++) {
              if(data.list[i].isShow == 2) {
                this.benefitDetail.push(data.list[i]);
              }
            }
          }).catch((err) => {
            console.log(err);
          })
        }
    }
}
</script>
<style lang="less" scoped>

</style>
