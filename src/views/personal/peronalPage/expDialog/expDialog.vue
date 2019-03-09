<template>
    <div class="dialog">
        <el-dialog @closed='clear()' :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px' :before-close='beforeClose'>
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
                        <el-button class="add" @click="addExpSubmitForm('ruleForm')">添加</el-button>
                    </el-form-item>
                </el-form>
                <div class="table">
                    <!--
                    <el-table
                    :data="tableData"
                    height='216'
                    style="width: 100%;">
                        <el-table-column
                            prop="workTime"
                            label="时间点"
                            width="250">
                            <template slot-scope='scope'>
                              <span v-if='scope.row.isSet'>
                                <el-input size='mini' v-model='scope.row.workTime'></el-input>
                              </span>
                              <span v-else>{{scope.row.workTime}}</span>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="content"
                            label="描述"
                            width="300">
                            <template slot-scope='scope'>
                              <span v-if='scope.row.isSet'>
                                <el-input size='mini' v-model='scope.row.content'></el-input>
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
                                  {{scope.row.isSet ? '保存' : '编辑'}}
                                </el-button>
                                <el-button v-if='!scope.row.isSet' @click="del(scope.$index,master_user.tableData)" type="text">删除</el-button>
                                <el-button v-else @click="edit(scope.row, scope.$index, false)" type="text">取消</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    -->
                    <el-table :data="master_user.tableData" height='216' style="width: 100%">
                      <el-table-column v-for="(v,i) in master_user.columns" :key='i' :prop="v.field" :label="v.title" :width="v.width">
                          <template slot-scope="scope">
                              <span v-if="scope.row.isSet">
                                  <el-input size="mini" placeholder="请输入内容" v-model="master_user.sel[v.field]">
                                  </el-input>
                              </span>
                              <span v-else>{{scope.row[v.field]}}</span>
                          </template>
                      </el-table-column>
                      <el-table-column label="操作" width="100">
                          <template slot-scope="scope">
                              <el-button @click="edit(scope.row, scope.$index, true)" type="text">
                                {{scope.row.isSet ? '保存' : '编辑'}}
                              </el-button>
                              <el-button v-if='!scope.row.isSet' @click="del(scope.$index,master_user.tableData)" type="text">删除</el-button>
                              <el-button v-else @click="edit(scope.row, scope.$index, false)" type="text">取消</el-button>
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
            master_user: {
                sel: null,//选中行
                columns: [
                    { field: "workTime", title: "时间点", width: 250 },
                    { field: "content", title: "描述", width: 420 }
                ],
                tableData:[]
            },
            msg:[]
        }
    },
    methods:{
        //读取表格数据
        readTableData() {
          this.master_user.tableData.map((item) => {
            item.isSet = false;
            return item;
          })
        },

        //修改
        edit(row, index, cg) {
            console.log(this.master_user);
            //点击修改 判断是否已经保存所有操作
            for (let i of this.master_user.tableData) {
                if (i.isSet && i.celebrityId != row.celebrityId) {
                    this.$message.warning("请先保存当前编辑项");
                    return false;
                }
            }
            //是否是取消操作
            if (!cg) {
                if (!this.master_user.sel.celebrityId) this.master_user.tableData.splice(index, 1);
                return row.isSet = !row.isSet;
            }
            if (row.isSet) {
                let data = JSON.parse(JSON.stringify(this.sel));
                for (let k in data) row[k] = data[k];
                this.readTableData();
                row.isSet = false;
            } else {
                this.sel = JSON.parse(JSON.stringify(row));
                row.isSet = true;
            }
        },

        makeSure(){         //提交
            this.$refs['form'].validate((valid) => {
              if(valid) {
                let data = {
                    workLifeJson: JSON.stringify(this.master_user.tableData),
                    token:Until.getUserToken()
                }
                this.Http.post(this.Action.addWork, data).then((res) => {
                    this.$message({
                        type:'success',
                        message:'提交成功'
                    })
                    this.beforeClose();
                }).catch((err) => {
                    this.beforeClose();
                })
              }
            })
        },

        openExp(){          //打开弹窗
            this.dialogFormVisible = true
        },

        add(){              //添加
            this.$refs['form'].validate((valid) => {
              if(valid) {
                let addMsg = {
                    celebrityId:Until.getUserSmallInfo().id,
                    workTime:Until.timestampToTime(this.form.time),
                    content:this.form.info,
                }
               // this.form.time = '';
                this.form.info = '';
                this.master_user.tableData.push(addMsg);
                this.msg.push(addMsg);
              }
            })
        },

        del(index, rows){              //删除
            rows.splice(index,1)
            this.msg.splice(index,1)
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
            this.master_user.tableData = [];
            this.msg =[];
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
