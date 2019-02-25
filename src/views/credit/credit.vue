<template>
  <div>
    <div class='search-top-par'>
      <div class='search-top w1180'>
        <div class='search-type clear center'>
          <a :class="curIndex == index ? 'active' : ''" v-for="(tab, index) in tabs" @click='tabMenu(index)'>{{tab.name}}</a>
        </div>
        <div class='search-ipt clear'>
          <div class='search-icon'></div>
          <input type='text' :placeholder='curTip'>
          <div class='search-btn'>搜索</div>
        </div>
      </div>
    </div>
    <div class='child-router'>
      <router-view/>
    </div>
  </div>

</template>

<script>
  const searchTabs = {
    'hotPeople': 0,
    'works': 1,
    'movieCompany': 2,
    'moviePeople': 3,
    'tvCompany': 4,
    'tvPeople': 5,
  };

  export default {
    name: 'credit',

    data() {
      return {
        curIndex: 0,
        curCom: 'hotPeople',
        curTip: '请输入艺人名称，检索艺人信用信息',
        page: 1,
        noResult: false,
        tabs: [
          {name: '热点人群', comName: 'hotPeople', tip: '请输入艺人名称，检索艺人信用信息'},
          {name: '作品', comName: 'works', tip: '请输入作品名称'},
          {name: '影视企业', comName: 'movieCompany', tip: '请输入企业名称查看信用信息'},
          {name: '影视人', comName: 'moviePeople', tip: '请输入艺人名称，检索艺人信用信息'},
          {name: '演艺企业', comName: 'tvCompany', tip: '请输入企业名称查看信用信息'},
          {name: '演艺人', comName: 'tvPeople', tip: '请输入艺人名称，检索艺人信用信息'}
        ],
        dataObj: {}
      }
    },

    watch: {
       curIndex: (val) => {

       }
    },

    created: function() {

    },

    mounted: function() {
      let curRoute = this.$route.name;
      this.curIndex = searchTabs[curRoute];
      this.curTip = this.tabs[this.curIndex].tip;
      this.curCom = this.tabs[this.curIndex].comName;
    },

    methods: {
      tabMenu(index) {
        this.curIndex = index;
        this.curCom = this.tabs[index].comName;
        this.curTip = this.tabs[index].tip;
        this.$router.push({
          name: this.curCom
        })
      }
    },


  }
</script>

<style lang='less' scoped>
  .child-router {
    padding-top: 18px;
    padding-bottom: 30px;
    background: #fff;
  }
  .search-top-par {
    background: #FAF8F7;
    .search-top {
      padding-top: 53px;
      padding-bottom: 28px;
      .search-type {
        margin-bottom: 20px;
        font-size: 16px;
        color: #666666;

        a {
          box-sizing: border-box;
          display: inline-block;
          padding: 12px 20px;
          white-space: nowrap;
          text-align: center;
          color: #606266;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          &.active {
            background: #F58523;
            color: #fff;
          }
          &:active {
             background: #F58523;
             color: #fff;
          }
        }
      }
      .search-ipt {
        width: 1180px;
        height: 54px;
        background: #FFFFFF;
        border: 1px solid #DCDFE6;
        border-right: none;
        font-size: 16px;
        div, input {
          float: left;
        }
        .search-icon {
          width: 51px;
          height: 54px;
          background-image: url('../../assets/credit-search.jpg');
          background-repeat: no-repeat;
          background-position: center;
        }
        input {
          width: 900px;
          height: 52px;
          margin-top: 2px;
          outline: none;
        }
        .search-btn {
          float: right;
          width: 148px;
          height: 56px;
          line-height: 56px;
          background: #F58523;
          margin-top: -1px;
          text-align: center;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
</style>
