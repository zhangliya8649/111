<template>
    <div class='credit'>
        <el-table
            :data="creditDetail"
            height='216'
            style="width: 100%;">
            <el-table-column
                prop="creditTime"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="summary"
                label="摘要"
                width="180">
            </el-table-column>
            <el-table-column
                prop="creditDesc"
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
            creditDetail: [
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
            companyId: this.id,
            token: this.token
          }
          this.getCreditDetail(param);
        }

    },

    mounted: function() {

    },

    methods:{
        //失信信息
        getCreditDetail(param) {
          this.Http.post(this.Action.SearchCompanyCreditById, param).then((data) => {
            this.tableData2 = data.list;
          }).catch((err) => {
            console.log(err);
          })
        },
    }
}
</script>
<style lang="less" scoped>

</style>
