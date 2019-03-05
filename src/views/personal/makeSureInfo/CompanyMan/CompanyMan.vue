<template>
    <div>
        <div class="companyMan" v-if="find">
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
                        prop="rating"
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
                            <el-button @click="certification(scope.row)" type="text" size="small">去认证</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="companyCertification" v-if="companyCertific">
                <p class="certification">企业认证</p>
                <div class="certificationBox">
                    <div class="certificationLeft">
                        <p class="leftTitle">上传法人身份证照片</p>
                        <div class="leftUpload">
                            <Upload></Upload>
                        </div>
                    </div>
                    <div class="certificationRight">
                        <p class="rightTitle">上传企业通讯录</p>
                        <div class="rightUpload">
                            <el-upload
                                class="upload-demo"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="3"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                <el-button size="small" icon="el-icon-upload2" class="upload">上传文件</el-button>
                            </el-upload>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="companyMan" v-else>
            <div class="companyInfo">
                <el-table
                :data="tableData1"
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
                            <el-button @click="handleClick2(scope.row)" type="text" size="small">去认证</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="findNot">
                <el-form label-position="right" :rules="rule" ref="FindCompany" label-width="112px" :model="findCompany">
                    <el-form-item label="公司名称">
                        <el-input v-model="findCompany.name"></el-input>
                    </el-form-item>
                    <el-form-item label="天眼查链接">
                        <el-input v-model="findCompany.url" placeholder="请输入贵公司在天眼查的查询结果页链接"></el-input>
                    </el-form-item>
                    <el-form-item class="btn-box">
                        <button class="btn submit" @click="submitForm('FindCompany')">提 交</button>
                        <button class="btn cancel" @click="cancel">取 消</button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import Upload from './upload/upload'
export default {
    components:{Upload},
    data(){
        var validateName = (rule, value, callback) => {
            if (value == '') {
                return callback(new Error('公司名称不能为空'));
            }else{
                callback();
            }
            
        }
        var validateUrl = (rule, value, callback) => {
            if (!value) {
                return callback(new Error('公司名称不能为空'));
                }
            else{
                callback();
            }
        }
        return{
            find:true, //是否查询到公司
            tableData:[],
            tableData1:[{     //未查询到占位
                name: 'xxx',
                class: '0级',
                address: 'xxxxxxxxx'
            }],
            findCompany:{     //天眼查公司
                    name:'',
                    url:''
            },
            fileList:[{
                name: 'food.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                name: 'food2.jpeg',
                url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }],      //文件上传
            rule:{              //验证规则
                name:[
                    { validator: validateName, trigger: 'blur' }
                ],
                url:[
                    { validator: validateUrl, trigger: 'blur' }
                ]
            },
            companyCertific:false,      //点击认证按钮显示
        }
    },
    methods:{
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        handlePreview(file) {
            console.log(file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                alert('submit!');
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        findNot(){      //切换显示查找公司
            this.find = false
        },
        certification(){        //认证按钮
            this.companyCertific = true;
        },
        handleClick2(){     //未找到公司占位
            return false
        },
        cancel(){           //取消查找
            this.find = true
        },
        // type: 类型 searchName: 搜索内容
        search(type, searchName){           //找到公司
            console.log(type, searchName)
            let data = {
                type,
                name: searchName,
                pageNum: 1
            }
            this.Http.post(this.Action.searchCompany, data).then(res => {
                this.tableData = res.list
            })
        },
        clear(){            //清空信息
            this.tableData = []
        }
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
                margin-bottom: 24px;
            }
            .certificationBox{
                width: 100%;
                padding: 20px 42px 0px 42px;
                background: #FFFFFF;
                border: 1px solid #DCDFE6;
                display: flex;
                justify-content: space-between;
                box-sizing: border-box;
                height: 280px;
                .certificationLeft{
                    height: 232px;
                    width: 502px;
                    .leftTitle{
                        font-family: PingFang-SC-Medium;
                        font-size: 14px;
                        color: #4A4A4A;
                        letter-spacing: 0;
                        line-height: 20px;
                        margin-bottom: 22px;
                    }
                }
                .certificationRight{
                    height: 232px;
                    width: 502px;
                    .rightTitle{
                        font-family: PingFang-SC-Medium;
                        font-size: 14px;
                        color: #4A4A4A;
                        letter-spacing: 0;
                        line-height: 20px;
                        margin-bottom: 22px;
                    }
                    .rightUpload{
                        .upload{
                            margin-bottom: 50px;
                        }
                    }
                }
            }
        }
        .findNot{
            width: 100%;
            padding: 36px 42px;
            box-sizing: border-box;
            background: #FFFFFF;
            border: 1px solid #DCDFE6;
            .el-form{
                width: 592px;
                .btn-box{
                    display: flex;
                    justify-content: flex-end;
                    .btn{
                        width: 110px;
                        height: 40px;
                        border-radius: 4px;
                        font-family: PingFang-SC-Medium;
                        font-size: 16px;
                        letter-spacing: 0;
                        line-height: 14px;
                        cursor: pointer;
                    }
                    .submit{
                        background: #F58523;
                        border: 1px solid #F58523;
                        color: #FFFFFF;
                        margin-right: 40px;
                    }
                    .cancel{
                        background: none;
                        border: 1px solid #C0C4CC;
                        font-family: PingFang-SC-Medium;
                        color: #9B9B9B;
                    }
                }
            }
        }
    }
</style>