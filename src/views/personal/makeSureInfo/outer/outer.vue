<template>
  <div class="outer">
    <div class="personalInfo Box">
      <p class="title">个人信息</p>
      <el-form
        label-position="left"
        :inline="true"
        :rules="personalRule"
        ref="PersonalInfo"
        :model="personalInfo"
        class="demo-form-inline"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="昵称" prop="name">
              <el-input v-model="personalInfo.name" style="width:240px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="性别" prop="sex">
              <el-select v-model="personalInfo.sex" placeholder="请选择" style="width:240px">
                <el-option label="男" value="男"></el-option>
                <el-option label="女" value="女"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="年龄" prop="age">
              <el-input v-model="personalInfo.age" style="width:240px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话" prop="telphone">
              <el-input v-model="personalInfo.telphone" style="width:240px"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8"></el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :offset="16">
            <el-form-item class="btnBox">
              <el-button class="editBtn" type="primary" @click="editPersonal('PersonalInfo')">确认修改</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="pass Box">
      <p class="title">密码设置</p>
      <el-form
        label-position="left"
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="110px"
        class="demo-ruleForm"
      >
        <el-row>
          <el-col :span="8">
            <el-form-item label="原密码" prop="oldPass">
              <el-input
                type="password"
                v-model="ruleForm.oldPass"
                autocomplete="off"
                style="width:240px"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="新密码" prop="newPass">
              <el-input type="password" v-model.number="ruleForm.newPass" style="width:240px"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="确认密码" prop="checkPass">
              <el-input
                type="password"
                v-model="ruleForm.checkPass"
                autocomplete="off"
                style="width:240px"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :offset="8">
            <el-form-item class="btnBox">
              <el-button class="editBtn" type="primary" @click="editPass('ruleForm')">确认修改</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>
<script>
import Until from "../../../../until/until";
export default {
  props: ["active"],
  data() {
    const checkName = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入昵称"));
      } else {
        callback();
      }
    };
    const checkSex = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请选择性别"));
      } else {
        callback();
      }
    };
    const checkAge = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入年龄"));
      } else {
        callback();
      }
    };
    const checkTel = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入电话"));
      } else {
        callback();
      }
    };
    //写验证规则
    var validateOldPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.oldPass !== "") {
          this.$refs.ruleForm.validateField("newPass");
        }
        callback();
      }
    };
    var validateNewPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.ruleForm.newPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validateCheckPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value != this.ruleForm.newPass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      personalInfo: {
        //信息双向绑定
        name: "",
        sex: "",
        age: "",
        telphone: ""
      },
      ruleForm: {
        //密码双向绑定
        oldPass: "",
        newPass: "",
        checkPass: ""
      },
      personalRule: {
        //个人信息验证
        name: [{ validator: checkName, trigger: "blur" }],
        sex: [{ validator: checkSex, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        telphone: [{ validator: checkTel, trigger: "blur" }]
      },
      //密码表单验证规则
      rules: {
        oldPass: [{ validator: validateOldPass, trigger: "blur" }],
        newPass: [{ validator: validateNewPass, trigger: "blur" }],
        checkPass: [{ validator: validateCheckPass, trigger: "blur" }]
      }
    };
  },
  methods: {
    editPersonal(formName) {
      //确认修改个人信息
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            nickName: this.personalInfo.name,
            sex: this.personalInfo.sex,
            age: this.personalInfo.age,
            telphone: this.personalInfo.telphone,
            userType: this.active,
            token: Until.getUser().token
          };
          if (data.sex == "男") {
            data.sex = "1";
          }
          if (data.sex == "女") {
            data.sex = "2";
          }
          this.modifyInfo(data);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    modifyInfo(data) {
      this.Http.post(this.Action.outer, data).then(res => {
        this.$message({
          message: "提交成功",
          type: "success"
        });
      });
    },
    editPass(formName) {
      // 确认修改密码
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(this.ruleForm);
        //   this.modifyPwd()
        } else {
          return false;
        }
      });
      // this.$router.push({path:'Personal'})
    },
    // 修改密码
    modifyPwd(form_data) {
      let data = {
        oldPwd: md5(form_data.oldPass),
        newPwd: md5(form_data.newPass),
        token: Until.getUser().token
      };
      this.Http.post(this.Action.modifyPwd, data).then(res => {
        this.$message({
          message: "修改成功",
          type: "success"
        });
      });
    }
  }
};
</script>
<style lang="less" scoped>
.outer {
  .title {
    font-family: PingFang-SC-Medium;
    font-size: 18px;
    color: #000000;
    letter-spacing: 0;
    line-height: 16px;
    margin-bottom: 25px;
    height: 18px;
    border-left: 2px solid #f58523;
    padding-left: 6px;
  }
  .el-form {
    .el-row {
      margin-bottom: 2px;
    }
    .btnBox {
      display: flex;
      justify-content: flex-end;
      .editBtn {
        background-color: #f58523;
        border: 1px solid #f58523;
        width: 128px;
        height: 40px;
        border-radius: 4px;
      }
    }
  }
  .Box {
    margin-top: 20px;
    width: 100%;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    padding: 32px 50px 0 42px;
    box-sizing: border-box;
  }
}
</style>