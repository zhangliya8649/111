<template>
    <div class="dialog">
        <el-dialog :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px' :before-close='beforeClose'>
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
                            v-model="info"
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
                            prop="workTime"
                            label="时间点"
                            width="250">
                        </el-table-column>
                        <el-table-column
                            prop="content"
                            label="描述"
                            width="300">
                        </el-table-column>
                        <el-table-column
                            prop="action"
                            label="操作"
                            align="center">
                            <template slot-scope="scope">
                                <el-button @click="edit(scope.$index,tableData)" type="text" size="small">编辑</el-button>
                                <el-button @click="del(scope.$index,tableData)" type="text" size="small">删除</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="timeLineBox" v-if="msg.length > 0">
                    <TimeLine v-for="(data,index) in msg" :msg='data' :index='index' :key='index'></TimeLine>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialogBtn" @click="beforeClose">取 消</el-button>
                <el-button class="dialogBtn submit" type="primary" @click="makeSure">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
import TimeLine from '../timeLine/timeLine'
import Until from '../../../../until/until.js'
export default {
    components:{TimeLine},
    props:['jobInfo'],
    data(){
        return{
            dialogFormVisible:false,
            form:{},        //表单绑定
            title: '添加从业信息',//弹窗标题
            time:'',               //时间点
            info:'',                 //描述
            addexp:{title:'添加从业信息',des:'从业信息描述'},   //默认文本描述
            tableData:[],
            msg:[                                       //时间轴数据
            ]
        }
    },
    methods:{
        makeSure(){         //提交
            let data = {
                workLifeJson:this.tableData,
                token:Until.getUserToken()
            }
            this.Http.post(this.Action.jobInfo,data).then((res) => {
                this.$message({
                    type:'success',
                    message:'提交成功'
                })
                this.dialogFormVisible = false
            }).catch((err) => {

            })
            this.dialogFormVisible = false
        },
        openExp(){          //打开弹窗
            this.dialogFormVisible = true
        },
        add(){              //添加
            let addMsg = {
                celebrityId:Until.getUserId(),
                workTime:Until.timestampToTime(this.time),
                content:this.info,
            }
            this.time = ''
            this.info = ''
            this.tableData.push(addMsg)
            this.msg.push(addMsg)
        },
        edit(){             //编辑

        },
        del(index,rows){              //删除
            rows.splice(index,1)
            this.msg.splice(index,1)
        },
        //获取用户从业信息
        getUserJobInfo(){
            let data = {
                celebrityId:Until.getUserId(),
                token:Until.getUser().token
            }
            this.Http.post(this.Action.jobInfo,data).then((res) => {
                console.log(res)
                // this.tableData = res
            }).catch((err) => {
                console.log(err)
            })
        },
        //关闭弹窗前
        beforeClose(){
            this.dialogFormVisible = false
            this.tableData = []
            this.msg = []
        }
    },
    mounted(){
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