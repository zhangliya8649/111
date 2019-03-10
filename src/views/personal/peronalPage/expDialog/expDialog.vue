<template>
    <div class="dialog">
        <el-dialog :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px' @closed='beforeClose'>
            <div class="contentBox">
                <el-form :model="form" :rules='rules' ref='form' label-position='right'>
                    <el-form-item label="时间点:" label-width='60px' prop='time'>
                        <el-date-picker
                            v-model="form.time"
                            type="date"
                            placeholder="选择日期"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="timestamp"
                            class="input">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item label="描述:" label-width='60px' prop='info'>
                        <el-input
                            type="textarea"
                            :rows="5"
                            :placeholder="addexp.des"
                            v-model="form.info"
                            class="text">
                        </el-input>
                    </el-form-item>
                    <el-form-item class="btnBox">
                        <el-button class="add" @click="add()">添加</el-button>
                    </el-form-item>
                </el-form>
                <div class="table">
                    <!--点击编辑，编辑状态未出现
                    <el-table
                    :data="tableData"
                    height='216'
                    style="width: 100%;">
                        <el-table-column
                            prop="workTime"
                            label="时间点"
                            width="250">
                            <template slot-scope='scope'>
                              <span v-if='scope.row.isEdit'>
                                <el-date-picker
                                    v-model="scope.row.workTime"
                                    :default-value ='scope.row.workTime'
                                    type="date"
                                    placeholder="选择日期"
                                    format="yyyy-MM-dd"
                                    value-format="timestamp"
                                    class="input">
                                </el-date-picker>
                              </span>
                              <span v-else>{{scope.row.workTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="content"
                            label="描述"
                            width="300">
                            <template slot-scope='scope'>
                              <span v-if='scope.row.isEdit'>
                                <el-input v-model='scope.row.content'></el-input>
                              </span>
                              <span v-else>{{scope.row.content}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="action"
                            label="操作"
                            align="center">
                            <template slot-scope="scope">
                                <el-button @click="edit(scope.row, scope.$index, true)" type="text">
                                  {{scope.row.isEdit ? '保存' : '编辑'}}
                                </el-button>
                                <el-button v-if='!scope.row.isSet' @click="del(scope.$index, tableData)" type="text">删除</el-button>
                                <el-button v-else @click="edit(scope.row, scope.$index, false)" type="text">取消</el-button>
                            </template>
                        </el-table-column>
                    </el-table>-->
                    <el-table :data="tableData" class="tb-edit" height='216' style="width: 100%" highlight-current-row>
                        <el-table-column label="时间点" width="250" prop="workTime">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.workTime" placeholder="请选择日期" @change="handleEdit(scope.$index, scope.row)"></el-input>
                                <span>{{scope.row.workTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="描述" width="300" prop="content">
                            <template slot-scope="scope">
                                <el-input v-model="scope.row.content" placeholder="请输入描述" @change="handleEdit(scope.$index, scope.row)"></el-input>
                                <span>{{scope.row.content}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column label="操作" prop='action' align="center">
                            <template slot-scope="scope">
                                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                                <el-button size="small" type="danger" @click="del(scope.$index, tableData)">删除</el-button>
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

    created() {
      setTimeout(() => {
        this.tableData = this.jobInfo.concat([]);
        this.msg = this.jobInfo.concat([]);
       // this.initEditShow(this.tableData);
      }, 200)
    },

    mounted(){

    },
    data(){
        var validateTime = (rule, value, callback) => {
          if(value == '') {
            callback(new Error('请输入密码'));
          }else {
            callback();
          }
        }
        var validateInfo = (rule, value, callback) => {
          if(value == '') {
            callback(new Error('请输入描述'));
          }else {
            callback();
          }
        }
        return{
            dialogFormVisible:false,
            form:{
              time:'',
              info:''
            },        //表单绑定
            title: '添加从业信息',
            rules: {
              time: [{validator: validateTime, trigger: 'change'}],
              info: [{validator: validateInfo, trigger: 'blur'}]
            },
            addexp:{title:'添加从业信息',des:'从业信息描述'},   //默认文本描述
            msg:[],
            tableData: []
        }
    },
    methods:{
        handleCurrentChange(row, event, column) {

            console.log(row, event, column, event.currentTarget)
        },
        handleEdit(index, row) {
            //row.isEdit = true;
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        /*
        initEditShow(arr) {
          arr.forEach((item) => {
            item.isEdit = false;
          })
        },

        //修改
        edit(row, index, cg) {
           row.isEdit = true;
           console.log(row.isEdit);
           console.log(index);
        },*/

        makeSure(){         //提交
            let data = {
                celebrityId: Until.getUserSmallInfo().id,
                workLifeJson: JSON.stringify(this.tableData),
                token:Until.getUserToken()
            }
            this.Http.post(this.Action.addWork, data).then((res) => {
                this.$emit('jobInfo', res.list);
                console.log(this);
                console.log(this.jobInfo);
                this.$message({
                    type:'success',
                    message:'提交成功'
                });
                this.beforeClose();
            }).catch((err) => {
                this.beforeClose();
            })
        },

        openExp(){          //打开弹窗
            this.dialogFormVisible = true;
            this.tableData = this.jobInfo.concat([]);
            //this.initEditShow(this.tableData);
        },

        add(){              //添加
            this.$refs['form'].validate((valid) => {
              if(valid) {
                let addMsg = {
                    celebrityId:Until.getUserSmallInfo().id,
                    workTime:Until.timestampToTime(this.form.time),
                    content:this.form.info
                }
                this.form.time = '';
                this.form.info = '';
                this.tableData.push(addMsg);
                this.msg.push(addMsg);
              }
            })
        },

        del(index, rows){              //删除
            rows.splice(index,1);
            this.msg.splice(index,1);
        },

        //获取用户从业信息
        getUserJobInfo(){
            let data = {
                celebrityId:Until.getUserSmallInfo().id,
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
            this.$refs['form'].resetFields();
            this.tableData = [];
            this.msg =[];
        }
    },


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
<style>
  .tb-edit .el-input  {
        display: none
    }

    .tb-edit .current-row .el-input  {
        display: block
    }

    .tb-edit .current-row .el-input+span {
        display: none
    }
</style>
