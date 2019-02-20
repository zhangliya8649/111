<template>
  <div>
    <div class='search-top-par'>
      <div class='search-top w1180'>
        <div class='search-type clear center'>
          <el-button v-for="(tab, index) in tabs" :key='index' :class="curIndex == index ? 'active' : ''" :data-type='curIndex' @click='tabMenu(index, $event)'>{{tab.name}}</el-button>
        </div>
        <div class='search-ipt clear'>
          <div class='search-icon'></div>
          <input type='text' :placeholder='curTip'>
          <div class='search-btn'>搜索</div>
        </div>
      </div>
    </div>
    <child class='search-result' :is='curCom'>
    </child>
  </div>

</template>

<script>
  import hotPeople from './people/people.vue'
  import works from './works/works.vue'
  import movieCompany from './company/movieCompany.vue'
  import moviePeople from './people/moviePeople.vue'
  import tvPeople from './people/tvPeople.vue'
  export default {
    name: 'credit',

    components: {
      hotPeople,
      works,
      movieCompany,
      moviePeople,
      tvPeople
    },

    data() {
      return {
        curIndex: 0,
        curCom: 'hotPeople',
        curTip: '请输入艺人名称，检索艺人信用信息',
        dataObj: {},
        page: 1,
        tabs: [
          {name: '热点人群', comName: 'hotPeople', tip: '请输入艺人名称，检索艺人信用信息'},
          {name: '作品', comName: 'works', tip: '请输入作品名称'},
          {name: '影视企业', comName: 'movieCompany', tip: '请输入企业名称查看信用信息'},
          {name: '影视人', comName: 'moviePeople', tip: '请输入艺人名称，检索艺人信用信息'},
          {name: '演艺企业', comName: 'movieCompany', tip: '请输入企业名称查看信用信息'},
          {name: '演艺人', comName: 'tvPeople', tip: '请输入艺人名称，检索艺人信用信息'}
        ]
      }
    },

    mounted: function() {

    },

    methods: {
      tabMenu(index, event) {
        this.curIndex = index;
        this.curCom = this.tabs[index].comName;
        this.curTip = this.tabs[index].tip;
      },


    },


  }
</script>

<style lang='less' scoped>
  .search-top-par {
    background: #FAF8F7;
    .search-top {
      padding-top: 53px;
      padding-bottom: 28px;
      .search-type {
        margin-bottom: 20px;
        font-size: 16px;
        color: #666666;
        .el-button {
          border: none;
          background: transparent;
          border-radius: 0;
          &.active {
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
          text-align: center;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
  .search-result {
    padding-top: 18px;
    padding-bottom: 30px;
    background: #fff;
  }
</style>
