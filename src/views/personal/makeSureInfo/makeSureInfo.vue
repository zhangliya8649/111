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
      </div>
    </div>
    <div class="makeSure-content">
      <Actor v-if="this.active == 0 ||this.active == 1" ref="actor" :type='this.active + 2'></Actor>
      <CompanyMan :active="active + 2" v-if="this.active == 2 ||this.active == 3" ref="companyMan"></CompanyMan>
      <Outer :active="active + 2" v-if="this.active == 4"></Outer>
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
    };
  },
  methods: {
    tabMenu(index) {
      this.active = index;
    },

  }
};
</script>
<style lang="less" scoped>
.makeSureInfo {
  flex-grow: 1;
  .makeSureInfoHeader {
    position: relative;
    background-color: #faf8f7;
    padding: 0 0 20px 0;
    box-sizing: border-box;
    .w1180 {
      padding-top: 54px;
      .btnGroup {
        height: 40px;
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
    }
  }
  .makeSure-content {
    // min-height: 100vh;
    margin-bottom: 20px;
  }
}
</style>
