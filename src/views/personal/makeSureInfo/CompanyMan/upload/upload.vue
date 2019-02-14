<template>
    <div class="uploadPlugin">
        <input @change='choseImg' ref="fileUpload" id="fileUpload" type="file" style="display:none" accept="image/gif,image/jpeg,image/jpg,image/png,image/svg">
         <div class="Plugin">
             <div class="upload left-content">
                <img class="plus" v-if="idCard1 == ''" :src="plus" @click="upload(1)">
                <p v-if="idCard1 == ''">点击“+”上传</p>
                <p v-if="idCard1 == ''">身份证件的正面图片</p>
                <img class="idCard" v-if="idCard1 !== ''" :src="idCard1">
            </div>
            <div class="upload right-content">
                <img class="plus" v-if="idCard2 == ''" :src="plus" @click="upload(2)">
                <p v-if="idCard2 == ''">点击“+”上传</p>
                <p v-if="idCard2 == ''">身份证件的反面图片</p>
                <img class="idCard" v-if="idCard2 !== ''" :src="idCard2">
            </div>
         </div>
    </div>
</template>
<script>
let plus = require('../../../../../assets/img/mask.png')
export default {
    data(){
     return{
        plus: plus,     //上传图标
        idCard1: '',    //身份证正面
        idCard2: '',    //身份证反面
        type: 1,        //判断上传身份证正反面 
     }   
    },
    methods:{
        upload(num){        //点击上传
            document.getElementById('fileUpload').click()
            this.type = num;
        },
        choseImg(e){    //图片选择
            let windowURL = window.URL || window.webkitURL
            let src = windowURL.createObjectURL( e.target.files[0])
            this.type == 1 ? this.idCard1 = src : this.idCard2 = src;
            if(this.type == 1){
                this.$emit('show',{type:1,src:this.idCard1})
            }else{
                this.$emit('show',{type:2,src:this.idCard2})
            }
        },
    }
}
</script>
<style lang="less" scoped>
    .uploadPlugin{
        .Plugin{
            display: flex;
            justify-content: space-around;
            .upload{
                width: 234px;
                height: 185px;
                background: rgba(0,0,0,0.02);
                border: 1px dashed rgba(0,0,0,0.15);
                border-radius: 4px;
                text-align: center;
                .plus{
                    margin: 50px 0 20px 0;
                    cursor: pointer;
                }
                .idCard{
                    height: 100%;
                }
                p{
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: rgba(0,0,0,0.65);
                    text-align: center;
                    line-height: 22px;
                }
            }
        }
    }
</style>