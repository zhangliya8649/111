<template>
  <div class='rule-par'>
    <div class='rule w1180'>
      <div class='rule-tit clear center'>
        <el-button v-for="(tab, index) in tabs" :key='index' :class="curIndex == index ? 'active' : ''" data-type='index' @click='tabMenu(index)'>{{tab.name}}</el-button>
      </div>
      <div class='rule-con'>

      </div>
    </div>
  </div>
</template>

<script>
  import SearchPeople from '../search/searchPeople.vue'
  export default {
    name: 'credit',
    components: {

    },
    data() {
      return {
        curIndex: 0,
        tabs: [
          {name: '红名单'},
          {name: '灰名单'},
          {name: '黑名单'}
        ]
      }
    },
    methods: {
      tabMenu(index) {
        this.curIndex = index;
      }
    }
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
        li {
          float: left;
          height: 40px;
          line-height: 40px;
          padding-left: 15px;
          padding-right: 15px;
          cursor: pointer;
          &.active {
             background: #F58523;
             color: #fff;
          }
        }
      }
      .search-ipt {
        width: 1180px;
        height: 56px;
        background: #FFFFFF;
        border: 1px solid #DCDFE6;
        border-right: none;
        font-size: 16px;
        div, input {
          float: left;
        }
        .search-icon {
          width: 51px;
          height: 100%;
          background-image: url('../../assets/credit-search.jpg');
          background-repeat: no-repeat;
          background-position: center;
        }
        input {
          width: 900px;
          height: 100%;
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
</style>
