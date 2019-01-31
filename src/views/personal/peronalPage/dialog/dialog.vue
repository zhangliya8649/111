<template>
    <div class="dialog">
        <el-dialog :title="addexp.title" :visible.sync="dialogFormVisible" center width='984px'>
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
                <el-form-item label="摘要:" label-width='60px'>
                     <el-input v-model="abstract" :placeholder="addexp.abstract" class="input"></el-input>
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
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button class="dialogBtn" @click="dialogFormVisible = false">取 消</el-button>
                <el-button class="dialogBtn submit" type="primary" @click="makeSure">提 交</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    props:['showDialog'],
    data(){
        return{
            dialogFormVisible:false,
            form:{},        //表单绑定
            title: '添加个人荣誉',//弹窗标题
            time:'',               //时间点
            abstract:'',            //摘要
            des:'',                 //描述
            addexp:{title:'添加个人荣誉',abstract:'添加荣誉摘要',des:'添加荣誉描述'}//默认文本描述
        }
    },
    methods:{
        makeSure(){
            console.log(111)
        },
        openDialog(num){
            if(num == '1'){//判断按钮类型
                this.addexp = {title:'添加个人荣誉',abstract:'添加荣誉摘要',des:'添加荣誉描述'}
            }else{
                this.addexp = {title:'添加社会公益案例',abstract:'添加公益摘要',des:'添加公益描述'}
            }
            this.dialogFormVisible = true
        }
    }
}
</script>
<style lang="less" scoped>
    .dialog{
        .input{
                width: 240px!important;
        }
        .text{
            width: 736px;
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