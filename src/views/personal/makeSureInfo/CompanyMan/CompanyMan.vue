<template>
    <div>
        <div class="companyMan">
            <div class="companyInfo">
                <el-table
                :data="tableData"
                style="width: 100%">
                    <el-table-column
                        prop="name"
                        label="公司名称"
                        width="250">
                    </el-table-column>
                    <el-table-column
                        prop="class"
                        label="公司信用评级"
                        width="180">
                    </el-table-column>
                    <el-table-column
                        prop="address"
                        label="公司地址"
                        width="550">
                    </el-table-column>
                    <el-table-column
                        prop="action"
                        label="操作"
                        align="center">
                        <template slot-scope="scope">
                            <el-button @click="handleClick(scope.row)" type="text" size="small">去认证</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="companyCertification">
                <p class="certification">企业认证</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            tableData:[{
            name: '北京眼缘影视传媒有限公司',
            class: 'A级',
            address: '上海市普陀区金沙江路 1518 弄'
          }]
        }
    },
    methods:{
        
    }
}
</script>
<style lang="less" scoped>
    .companyMan{
        margin-top: 40px;
        .companyInfo{
            margin-bottom: 60px;
        }
        .companyCertification{
            .certification{
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #4A4A4A;
                letter-spacing: 0;
                line-height: 20px;
            }
        }
    }
</style>