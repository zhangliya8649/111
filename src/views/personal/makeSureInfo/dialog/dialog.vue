<template>
    <div class="makeSure">
    <el-dialog
    class="upload"
    title="认领艺人"
    :visible.sync="DialogVisible"
    width="764px"
    center
    :before-close="beforeClose">
        <div class="dialog-content">
            <Upload @show="showImg" @saveIDCard='saveIDCard' ref='upload'></Upload>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button class="btn" @click="DialogVisible = false">取 消</el-button>
            <el-button :disabled="this.idCard1 == '' || this.idCard2 ==''" class="btn submit" @click="uploadSure">确 定</el-button>
        </span>
    </el-dialog>
    <el-dialog
    class="upLoadover"
    :visible.sync="uploadOver"
    width="520px"
    center>
        <div class="dialog-content">
            <img :src="gou">
            <p class="overTitle">提 交 成 功</p>
            <p class="otherInfo">三 个 工 作 日 之 内 将 确 认 认 领 的 信 息</p>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button class="uploadSure" @click="konw">知 道 了</el-button>
        </span>
    </el-dialog>
    </div>
</template>
<script>
import Upload from './upload/upload'
import Until from '../../../../until/until.js'
let gou = require('../../../../assets/img/gou.png')
export default {
    props:['userMsg','userType','index'],
    components:{Upload},
    data(){
        return{
            DialogVisible: false,    //上传弹窗
            idCard1: '',    //身份证正面
            idCard2: '',    //身份证反面
            gou: gou,       //上传完成图标
            uploadOver: false,   //上传完成弹窗
            file:[],            //身份证
        }
    },
    methods:{
        showDialog(){       //显示弹窗
            this.DialogVisible = true
        },
        uploadSure(){       //确认上传
            let data = {
                celebrityId:this.userMsg[this.index].id,
                celebrityName:this.userMsg[this.index].celebrityName,
                filePath: '[' + this.file + ']',
                userType:this.userType,
                token:Until.getUserToken(),
            }
            this.Http.post(this.Action.claimUser,data).then((res) => {
                if(res){
                    Until.ErrorCode(res.data.code)
                }else{
                    this.DialogVisible = false;
                    this.uploadOver = true;
                    this.$emit('editClaim',this.index)
                }
            })
        },
        konw(){         //知道了
            this.uploadOver = false;
        },
        showImg(obj){
            obj.type == 1 ? this.idCard1 = obj.src : this.idCard2 = obj.src;
        },
        saveIDCard(files){
            this.file = files
        },
        beforeClose(){
            this.$refs.upload.clear()
            this.DialogVisible = false;
        }
    }
}
</script>
<style lang="less" scoped>
    .makeSure{
        .upLoadover{
            .dialog-content{
                text-align: center;
                img{
                    margin: 80px 0 45px 0;
                }
                .overTitle{
                    font-family: PingFang-SC-Medium;
                    font-size: 36px;
                    color: #333333;
                    letter-spacing: 2.5px;
                    text-align: center;
                    line-height: 36px;
                    margin-bottom: 30px;
                }
                .otherInfo{
                    font-family: PingFang-SC-Medium;
                    font-size: 14px;
                    color: #666666;
                    letter-spacing: 0.97px;
                    text-align: center;
                    line-height: 24px;
                    margin-bottom: 104px;
                }
            }
        }
        .dialog-footer{
            .btn{
                height: 40px;
                width: 180px;
            }
            .submit{
                background-color: #F58523;
                color: #fff;
                border: 1px solid #F58523;
                outline: none;
            }
            .uploadSure{
                width: 380px;
                height: 40px;
                background-color: #F58523;
                color: #fff;
                border: 1px solid #F58523;
                outline: none;
            }
        }
    }
</style>