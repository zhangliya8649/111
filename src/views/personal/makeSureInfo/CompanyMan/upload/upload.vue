<template>
  <div class="uploadPlugin">
    <input
      @change="choseImg"
      ref="fileUpload"
      id="fileUpload"
      type="file"
      style="display:none"
      accept="image/gif, image/jpeg, image/jpg, image/png, image/svg"
    >
    <div class="Plugin">
      <div class="upload left-content">
        <img class="plus" v-if="idCard1 == ''" :src="plus" @click="upload(1)">
        <p v-if="idCard1 == ''">点击“+”上传</p>
        <p v-if="idCard1 == ''">身份证件的正面图片</p>
        <img width="230px" height="180px" class="idCard" v-if="idCard1 !== ''" :src="idCard1">
      </div>
      <div class="upload right-content">
        <img class="plus" v-if="idCard2 == ''" :src="plus" @click="upload(2)">
        <p v-if="idCard2 == ''">点击“+”上传</p>
        <p v-if="idCard2 == ''">身份证件的反面图片</p>
        <img width="230px" height="180px" class="idCard" v-if="idCard2 !== ''" :src="idCard2">
      </div>
    </div>
  </div>
</template>
<script>
let plus = require("../../../../../assets/img/mask.png");
import Until from "../../../../../until/until.js";
import api from "../../../../../request/api.js";
export default {
  data() {
    return {
      plus: plus, //上传图标
      idCard1: "", //身份证正面
      idCard2: "", //身份证反面
      type: 1, //判断上传身份证正反面
      files: [] //身份证文件集合,
    };
  },
  methods: {
    upload(num) {
      //点击上传
      document.getElementById("fileUpload").click();
      this.type = num;
    },
    async choseImg(e) {
      //图片选择
      if (e.target.files[0]) {
        if (e.target.files[0]) {
          // 等待图片上传
          let current = await this.uploadImg(e.target.files[0]);
          //将上传成功后的回调url赋值给当前选中
          this.$emit("show", { type: this.type, src: current });
          // 设置上传之后的图片回显
          if (this.type === 1) {
            this.idCard1 = current;
          }
          if (this.type === 2) {
            this.idCard2 = current;
          }
          this.files.push(current);
          // 提交
          if (this.files.length == 2) {
            this.$emit("saveIDCard", this.files);
          }
        }
      }
    },
    // 上传图片
    uploadImg(imgObj) {
        let url = new Promise((resolve, reject) => {
            var data = new FormData()
            data.append('file', imgObj)
            data.append('token', Until.getUserToken())
            api.post(this.Action.upload, data).then(res => {
                console.log(res.url)
                if(res.url) {
                    resolve(res.url)
                }
                reject('')
            })
        })
        return url 
    },
  }
};
</script>
<style lang="less" scoped>
.uploadPlugin {
  .Plugin {
    display: flex;
    justify-content: space-around;
    .upload {
      width: 234px;
      height: 185px;
      background: rgba(0, 0, 0, 0.02);
      border: 1px dashed rgba(0, 0, 0, 0.15);
      border-radius: 4px;
      text-align: center;
      .plus {
        margin: 50px 0 20px 0;
        cursor: pointer;
      }
      .idCard {
        height: 100%;
      }
      p {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: rgba(0, 0, 0, 0.65);
        text-align: center;
        line-height: 22px;
      }
    }
  }
}
</style>