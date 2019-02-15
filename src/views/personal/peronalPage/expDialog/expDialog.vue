<template>
    <div class="dialog">
        <el-dialog :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px'>
            <div class="contentBox">
                <el-form :model="form" label-position='right'>
                    <el-form-item label="时间点:" label-width='60px'>
                        <el-date-picker
                            v-model="time"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="timestamp"
                            class="input">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="描述:" label-width='60px'>
                        <el-input
                            type="textarea"
                            :rows="5"
                            :placeholder="addexp.des"
                            v-model="des"
                            class="text">
                        </el-input>
                    </el-form-item>
                    <el-form-item class="btnBox">
                        <el-button class="add" @click="add">添加</el-button>
                    </el-form-item>
                </el-form>
                <div class="table">
                    <el-table
                    :data="tableData"
                    style="width: 100%">
                        <el-table-column
                            prop="time"
                            label="时间点"
                            width="250">
                        </el-table-column>
                        <el-table-column
                            prop="des"
                            label="描述"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="action"
                            label="操作"
                            align="center">
                            <template slot-scope="scope">
                                <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                                <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="timeLineBox">
                    <TimeLine v-for="(data,index) in msg" :msg='data' :index='index' :key='index'></TimeLine>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialogBtn" @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="dialogBtn submit" type="primary" @click="makeSure">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import TimeLine from '../timeLine/timeLine'
export default {
    components:{TimeLine},
    props:['showDialog'],
    data(){
        return{
            dialogFormVisible:false,
            form:{},        //表单绑定
            title: '添加个人荣誉',//弹窗标题
            time:'',               //时间点
            abstract:'',            //摘要
            des:'',                 //描述
            addexp:{title:'添加个人荣誉',abstract:'添加荣誉摘要',des:'添加荣誉描述'},   //默认文本描述
            tableData:[{            //表格数据
                time: '2018-02-13',
                des: '大苏打萨达',
            }],
            msg:[                                       //时间轴数据
                {time:'2018-02-13',info:'个人信息个人信息个人信息个人信息个人信息1'},
                {time:'2018-02-14',info:'个人信息个人信息个人信息个人信息2'},
                {time:'2018-02-15',info:'个人信息个人信息个人信息个人信息个人信息3'},
                {time:'2018-02-16',info:'个人信息个人信息个人信息个人信息4'},
                {time:'2018-02-16',info:'个人信息个人信息个人信息个人信息个人信息5'},
                {time:'2018-02-16',info:'个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息6'},
            ]
        }
    },
    methods:{
        makeSure(){         //提交
            console.log(111)
        },
        openExp(){          //打开弹窗
            this.dialogFormVisible = true
        },
        add(){              //添加

        },
        edit(){             //编辑

        },
        del(){              //删除

        },
    }
}
</script>
<style lang="less" scoped>
    .dialog{
        .contentBox{
            padding: 0 75px;
            box-sizing: border-box;
            .el-form{
                box-sizing: border-box;
                .btnBox{
                    display: flex;
                    justify-content: flex-end;
                    .add{
                        background-color: #F58523;
                        border: 1px solid #F58523;
                        height: 40px;
                        width: 80px;
                        color: #fff;
                        border-radius: 0;
                    }
                }
            }
            .timeLineBox{
                margin-top: 56px;
                display: flex;
                justify-content: space-between;
                overflow-x: scroll;
                height: 320px;
            }
            .input{
                    width: 240px!important;
            }
        }
        .dialog-footer{
            .dialogBtn{
                width: 180px;
                height: 40px;
            }
            .submit{
                background-color: #F58523;
                border: #F58523;
                margin-left: 20px;
            }
        }
    }
</style>