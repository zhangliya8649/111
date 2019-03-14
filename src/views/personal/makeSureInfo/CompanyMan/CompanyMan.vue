<template>
  <div>
    <div class="search-box">
      <div class='w1180 clear'>
        <div class="search">
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          <input
            type="text"
            class="input"
            placeholder="请输入您的公司名称后选择对应公司进行认证"
            v-model="searchName"
            @keyup.delete='search'
            @keyup.enter='search'
          >
          <el-button class="search-btn" @click="search">搜索</el-button>
        </div>
        <span class="findNot findNot-txt" @click="findNot">查询后未找到？</span>
      </div>
    </div>
    <!--查询到的数据-->
    <div class="companyMan w1180" v-if="find">
      <div class="companyInfo">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="name" label="公司名称" width="250"></el-table-column>
          <el-table-column prop="rating" label="公司信用评级" width="180"></el-table-column>
          <el-table-column prop="address" label="公司地址" width="550"></el-table-column>
          <el-table-column prop="action" label="操作" align="center">
            <template slot-scope="scope">
              <el-button
                v-if="scope.row.claimState === 1"
                @click="certification(scope.row)"
                type="text"
                size="small"
              ><a href='#auth'>去认证</a></el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          small
          layout="prev, pager, next"
          :total="total"
          :current-page='pageNum'
          @current-change='changeCurrentPage'
          v-if='total > 10'>
        </el-pagination>
      </div>
      <!--去认证上传-->
      <div class="companyCertification" id='auth'>
        <p class="certification">企业认证</p>
        <div class="certificationBox">
          <div class="certificationLeft">
            <p class="leftTitle">上传法人身份证照片</p>
            <div class="leftUpload">
              <Upload @show="showImg" @saveIDCard="saveIDCard" ref="upload"></Upload>
            </div>
          </div>
          <div class="certificationRight">
            <p class="rightTitle">上传企业通讯录</p>
            <div class="rightUpload">
              <el-upload
                class="upload-demo"
                :action="actionUrl"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                :on-success="handleAvatarSuccess"
                multiple
                :data="token"
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList"
              >
                <el-button size="small" icon="el-icon-upload2" class="upload">上传文件</el-button>
              </el-upload>
            </div>
          </div>
        </div>
        <!-- 认证按钮 -->
        <div class="companyCertification-btn">
          <el-button class="cencel-btn" @click="certification">取消</el-button>
          <el-button class="affirm-btn" @click="submitCertification">提交</el-button>
        </div>
      </div>
    </div>
    <div class="companyMan w1180" v-else>
      <!-- 没有查询到的上传 -->
      <div class="findNot">
        <el-form
          label-position="right"
          :rules="rule"
          ref="FindCompany"
          label-width="112px"
          :model="findCompany"
        >
          <div class="not-find-upload">
            <div class="certificationBox">
              <div class="certificationLeft">
                <p class="leftTitle">上传法人身份证照片</p>
                <div class="leftUpload">
                  <Upload @show="showImg" @saveIDCard="saveIDCard" ref="upload"></Upload>
                </div>
              </div>
              <div class="certificationRight">
                <p class="rightTitle">上传企业通讯录</p>
                <div class="rightUpload">
                  <el-upload
                    class="upload-demo"
                    :action="actionUrl"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    :on-success="handleAvatarSuccess"
                    multiple
                    :data="token"
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList"
                  >
                    <el-button size="small" icon="el-icon-upload2" class="upload">上传文件</el-button>
                  </el-upload>
                </div>
              </div>
            </div>
          </div>
          <el-form-item label="公司名称" prop="name">
            <el-input v-model="findCompany.name"></el-input>
          </el-form-item>
          <el-form-item label="天眼查链接" prop="url">
            <el-input v-model="findCompany.url" placeholder="请输入贵公司在天眼查的查询结果页链接"></el-input>
          </el-form-item>
          <!-- 新增认证 -->
          <el-form-item class="btn-box">
            <el-button class="btn submit" @click="submitForm('FindCompany')">提 交</el-button>
            <el-button class="btn cancel" @click="cancel">取 消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import Upload from "./upload/upload.vue";
import Until from "../../../../until/until.js";
export default {
  components: { Upload },
  props: ["active"],
  data() {
    var validateName = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("公司名称不能为空"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("链接不能为空"));
      } else {
        callback();
      }
    };
    return {
      pageNum: 1,
      searchName: '',
      total: 0,
      file: [],
      find: true, //是否查询到公司
      actionUrl: "", //上传地址
      token: "",
      tableData: [],
      findCompany: {
        //天眼查公司
        name: "",
        url: ""
      },
      fileList: [], //文件上传
      rule: {
        //验证规则
        name: [{ validator: validateName, trigger: "blur" }],
        url: [{ validator: validateUrl, trigger: "blur" }]
      },
     // companyCertific: false, //点击认证按钮显示
      //currentRow: "",
      fileJson: []
    };
  },
  mounted() {
    this.actionUrl = this.Action.BaseUrl + this.Action.upload;
    this.token = {
      token: Until.getUserToken()
    };
    this.search();
  },
  beforeDestroy() {
    this.clear();
  },
  watch: {
    active: 'watchType'
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    // 成功回调
    handleAvatarSuccess(res, file) {
      if (res.code === 200) {
        let fileObj = {};
        fileObj.filePath = res.data.url;
        fileObj.fileName = res.data.fileName;
        this.fileJson.push(fileObj);
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.file.length == 2) {
            this.eyeCompany();
          } else {
            this.$message.error("请上传必要文件和图片");
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 根据天眼链接认证
    eyeCompany() {
      let data = {
        url: this.findCompany.url,
        companyName: this.findCompany.name,
        identityType: this.active,
        imgPath: "[" + this.file + "]",
        filePath: JSON.stringify(this.fileJson),
        token: Until.getUserToken()
      };
      this.Http.post(this.Action.eyeCompany, data)
        .then(res => {
          this.$message({
            type: "success",
            message: "提交成功"
          });
          this.find = true;
          this.clear();

          //提交审核成功之后，更新下当前用户的缓存信息
          /*
          根据返回信息判断状态
          变成已审核
          跳转到个人中心
          sessionStorage.setItem('userInfo',JSON.stringify(res));
          sessionStorage.setItem('userSmallInfo', JSON.stringify(res.smallInfo));
          this.$router.push({
            path: '/personal'
          });
          */
        })
        .catch(err => {
          Until.ErrorCode(err.code);
        });
    },
    findNot() {
      //切换显示查找公司
      this.find = false;
    },
    findNotSwitch() {
      this.find = !this.find;
    },
    // 企业认证(不是新增)开关
    /*
    companyCertificSwitch() {
      this.companyCertific = false;
    },*/
    certification(row) {
      //认证按钮
      this.row = row;
    },
    // 提交认证
    submitCertification() {
      if(!this.row) {
        this.$message.error("请选择您要认领的公司");
        return;
      }
      if (this.file.length == 2) {
        let data = {
          companyId: this.row.id,
          companyName: this.row.name,
          identityType: this.active,
          imgPath: "[" + this.file + "]",
          filePath: JSON.stringify(this.fileJson),
          token: Until.getUserToken()
        };
        this.Http.post(this.Action.companyCertificate, data)
          .then(res => {
            this.$emit("search");
            this.$message({
              message: "提交成功",
              type: "success"
            });
            this.clear();
            this.$router.push({
              path: '/Personal'
            });
          })
          .catch(err => {
            Until.ErrorCode(err.code);
          });
      } else {
        this.$message.error("请上传必要文件或者图片");
      }
    },
    handleClick2() {
      //未找到公司占位
      return false;
    },
    cancel() {
      //取消查找
      this.find = true;
    },
    watchType(newType, oldType) {
      if(newType != oldType) {
        this.pageNum = 1;
        this.searchName = '';
        this.clear();
        let data = {
          type: this.active,
          name: this.searchName,
          pageNum: 1,
          claimState: 1
        };
        this.getList(data);
      }
    },
    //搜索内容
    search() {
      this.clear();
      //找到公司
      let data = {
        type: this.active,
        name: this.searchName,
        pageNum: 1,
        claimState: 1
      };
      if(this.searchName == '') { data.pageNum = this.pageNum; }
      this.getList(data);
    },
    getList(param) {
      this.Http.post(this.Action.searchCompany, param).then(res => {
        if(res.list.length > 0) {
          this.total = res.total;
          this.tableData = res.list;
          this.find = true;
        }
      }).catch((err) => {

      });
    },
    clear() {
      //清空信息
      this.tableData = [];
      this.file = [];
      this.fileJson = [];
      this.findCompany = {
        name: "",
        url: ""
      };
    },
    // 获取上传组件传来的url,type参数
    showImg({ type, src }) {
      type == 1 ? (this.idCard1 = src) : (this.idCard2 = src);
    },
    // 保存上传图片的url数组
    saveIDCard(files) {
      this.file = files;
    },
    //分页
    changeCurrentPage(val) {
      this.pageNum = val;
      let data = {
        type: this.active,
        name: this.searchName,
        pageNum: this.pageNum,
        claimState: 1
      };
      this.getList(data);
    }
  }
};
</script>
<style lang="less" scoped>
.search-box {
  width: 100%;
  height: 56px;
  display: inline-block;
  background-color: #faf8f7;
  padding-bottom: 30px;
  .search {
    width: 840px;
    height: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    float: left;
    .el-icon-search {
      height: 100%;
      width: 56px;
      margin-top: 10px;
      font-size: 21px;
      color: #000;
    }
    .input {
      outline: none;
      border: none;
      height: 56px;
      width: 100%;
    }
    .search-btn {
      height: 56px;
      width: 148px;
      background-color: #f58523;
      border-color: #f58523;
      color: #fff;
      border-radius: 0;
    }
  }
}
.findNot {
  font-family: PingFang-SC-Medium;
  font-size: 16px;
  color: #666666;
  letter-spacing: 0;
  margin-left: 20px;
  margin-top: 35px;
}
.findNot-txt {
  float: left;
  height: 22px;
  line-height: 22px;
  cursor: pointer;
  vertical-align: bottom;
}
.companyMan {
  margin-top: 40px;
  .companyInfo {
    margin-bottom: 60px;
    table {
      button {
        a {
          color: #409EFF;
        }
      }
    }
  }
  .companyCertification {
    .certification {
      font-family: PingFangSC-Medium;
      font-size: 16px;
      color: #4a4a4a;
      letter-spacing: 0;
      line-height: 20px;
      margin-bottom: 24px;
    }
    .certificationBox {
      width: 100%;
      padding: 20px 42px 0px 42px;
      background: #ffffff;
      border: 1px solid #dcdfe6;
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
      height: 280px;
      .certificationLeft {
        height: 232px;
        width: 502px;
        .leftTitle {
          font-family: PingFang-SC-Medium;
          font-size: 14px;
          color: #4a4a4a;
          letter-spacing: 0;
          line-height: 20px;
          margin-bottom: 22px;
        }
      }
      .certificationRight {
        height: 232px;
        width: 502px;
        .rightTitle {
          font-family: PingFang-SC-Medium;
          font-size: 14px;
          color: #4a4a4a;
          letter-spacing: 0;
          line-height: 20px;
          margin-bottom: 22px;
        }
        .rightUpload {
          .upload {
            margin-bottom: 50px;
          }
        }
      }
    }
    .companyCertification-btn {
      display: flex;
      justify-content: center;
      margin-top: 10px;
      button {
        height: 40px;
        width: 148px;
        background-color: #f58523;
        border-color: #f58523;
        color: #fff;
        border-radius: 0;
      }
    }
  }
  .findNot {
    width: 100%;
    padding: 36px 42px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    .not-find-upload {
      margin-bottom: 20px;
    }
    .certificationBox {
      padding: 20px 42px 0px 42px;
      width: 100px;
      display: flex;
      justify-content: space-between;
      .certificationLeft {
        height: 232px;
        width: 502px;
        .leftTitle {
          font-family: PingFang-SC-Medium;
          font-size: 14px;
          color: #4a4a4a;
          letter-spacing: 0;
          line-height: 20px;
          margin-bottom: 22px;
        }
      }
      .certificationRight {
        height: 232px;
        width: 502px;
        margin-left: 50px;
        .rightTitle {
          font-family: PingFang-SC-Medium;
          font-size: 14px;
          color: #4a4a4a;
          letter-spacing: 0;
          line-height: 20px;
          margin-bottom: 22px;
        }
        .rightUpload {
          .upload {
            margin-bottom: 50px;
          }
        }
      }
    }
    .el-form {
      width: 592px;
      .btn-box {
        display: flex;
        justify-content: flex-end;
        .btn {
          width: 110px;
          height: 40px;
          border-radius: 4px;
          font-family: PingFang-SC-Medium;
          font-size: 16px;
          letter-spacing: 0;
          line-height: 14px;
          cursor: pointer;
        }
        .submit {
          background: #f58523;
          border: 1px solid #f58523;
          color: #ffffff;
          margin-right: 40px;
        }
        .cancel {
          background: none;
          border: 1px solid #c0c4cc;
          font-family: PingFang-SC-Medium;
          color: #9b9b9b;
        }
      }
    }
  }
}
</style>
