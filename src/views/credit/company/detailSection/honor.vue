<template>
    <div class='job'>
        <el-table
            :data="honorDetail"
            style="width: 100%; height: 216px;">
            <el-table-column
                prop="honorTime"
                label="时间"
                width="180">
            </el-table-column>
            <el-table-column
                prop="summary"
                label="摘要"
                width="180">
            </el-table-column>
            <el-table-column
                prop="honorDesc"
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
            honorDetail: [
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
          this.getHonorDetail(param);
        }

    },

    mounted: function() {

    },

    methods:{
       //公司荣誉
       getHonorDetail(param) {
         this.Http.post(this.Action.SearchCompanyHonorById, param).then((data) => {
           this.tableData1 = data.list;
         }).catch((err) => {
           console.log(err);
         })
       },
    }
}
</script>
<style lang="less" scoped>

</style>
