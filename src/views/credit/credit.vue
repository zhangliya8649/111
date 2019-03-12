<template>
  <div>
    <div class='search-top-par'>
      <div class='search-top w1180'>
        <div class='search-type clear center'>
          <a :class="curIndex == index ? 'active' : ''" v-for="(tab, index) in tabs" @click='tabMenu(index)'>{{tab.name}}</a>
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
        page: 1,
        tabs: [
          {name: '热点人群', comName: 'hotPeople'},
          {name: '作品', comName: 'works'},
          {name: '影视企业', comName: 'movieCompany'},
          {name: '影视人', comName: 'moviePeople'},
          {name: '演艺企业', comName: 'tvCompany'},
          {name: '演艺人', comName: 'tvPeople'}
        ],
        dataObj: {}
      }
    },

    watch: {
    },

    created: function() {

    },

    mounted: function() {
      let curRoute = this.$route.name;
      this.curIndex = searchTabs[curRoute];
      this.curCom = this.tabs[this.curIndex].comName;
    },

    methods: {
      tabMenu(index) {
        this.curIndex = index;
        this.curCom = this.tabs[index].comName;
        this.$router.push({
          name: this.curCom
        })
      },
    }


  }
</script>

<style lang='less' scoped>
  .child-router {
    min-height: 568px;
    padding-bottom: 30px;
    background: #fff;
  }
  .search-top-par {
    background: #FAF8F7;
    .search-top {
      padding-top: 53px;
      padding-bottom: 20px;
      .search-type {
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
<style>
  @import '../page.css'
</style>
