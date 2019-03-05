<template>
  <div class="makeSureInfo">
    <div class="makeSureInfoHeader">
      <div class="w1180">
        <div class="btnGroup">
          <span>请选择您的身份：</span>
          <el-button
            v-for="(tab,index) in tabs"
            :key="index"
            :class="active == index ? 'activeBtn' : 'unactive'"
            @click="tabMenu(index)"
          >{{tab.name}}</el-button>
        </div>
        <div class="search-box" v-if="this.active != 4">
          <div class="search">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
            <input
              type="text"
              class="input"
              :placeholder="this.active == 0 || this.active == 1 ? actorPlace : companyPlace"
              v-model="searchName"
            >
            <el-button class="search-btn" @click="search">搜索</el-button>
          </div>
        </div>
        <span v-if="this.active == 2 || this.active == 3" class="findNot" @click="findNot">查询后未找到？</span>
      </div>
    </div>
    <div class="makeSure-content w1180">
      <Actor v-if="this.active == 0 ||this.active == 1" ref="actor"></Actor>
      <CompanyMan v-if="this.active == 2 ||this.active == 3" ref="companyMan"></CompanyMan>
      <Outer v-if="this.active == 4"></Outer>
    </div>
  </div>
</template>
<script>
import Actor from "./actor/actor";
import CompanyMan from "./CompanyMan/CompanyMan";
import Outer from "./outer/outer";
export default {
  components: { Actor, CompanyMan, Outer },
  data() {
    return {
      searchName: "", //搜索名字
      active: 0, //初始化选中按钮
      tabs: [
        //切换菜单
        { name: "影视人" },
        { name: "演艺人" },
        { name: "影视公司负责人" },
        { name: "演艺公司负责人" },
        { name: "非业内人士" }
      ],
      actorPlace: "请输入影视人名称", //演艺人查询
      companyPlace: "请输入您的公司名称后选择对应公司进行认证" //公司查询
    };
  },
  methods: {
    tabMenu(index) {
      this.active = index;
      this.searchName = "";
      if (this.active == 0 || this.active == 1) {
        this.$refs.actor.clear();
      } else if (this.active == 2 || this.active == 3) {
        this.$refs.companyMan.clear();
      }
    },
    findNot() {
      //查询后未找到
      this.$refs.companyMan.findNot();
    },
    //搜索
    search() {
      //根据type传值
      if (this.active == 0 || this.active == 1) {
        this.$refs.actor.search(this.active + 2, this.searchName);
      } else if (this.active == 2 || this.active == 3) {
        this.$refs.companyMan.search(this.active + 2, this.searchName);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.makeSureInfo {
  flex-grow: 1;
  .makeSureInfoHeader {
    position: relative;
    background-color: #faf8f7;
    // height: 200px;
    padding: 0 0 40px 0;
    box-sizing: border-box;
    .w1180 {
      padding-top: 54px;
      .btnGroup {
        height: 40px;
        margin-bottom: 20px;
        span {
          font-family: PingFang-SC-Medium;
          font-size: 16px;
          color: #9b9b9b;
          letter-spacing: 0;
        }
        .activeBtn {
          background-color: #f58523;
          border: #f58523;
          color: #fff;
          border-radius: 0;
          height: 40px;
          padding: 0 30px;
        }
        .unactive {
          border: none;
          background-color: #faf8f7;
        }
        .unactive:hover {
          color: #4a4a4a;
        }
      }
      .search-box {
        width: 840px;
        height: 56px;
        display: inline-block;
        .search {
          height: 100%;
          width: 100%;
          background-color: #fff;
          display: flex;
          justify-content: space-between;
          .el-icon-search {
            height: 100%;
            width: 56px;
            font-size: 21px;
            color: #000;
          }
          .input {
            outline: none;
            border: none;
            height: 100%;
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
        vertical-align: bottom;
        margin-left: 20px;
        cursor: pointer;
      }
    }
  }
  .makeSure-content {
    // min-height: 100vh;
  }
}
</style>