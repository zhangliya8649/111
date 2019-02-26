<template>
    <div class='people'>
      <div class='search-ipt-par'>
        <div class='search-ipt w1180 clear'>
          <div class='search-icon'></div>
          <input type='text' placeholder='请输入艺人名称，检索艺人信用信息' v-model='searchKey' @keyup.enter='searchResultByKey()' @keyup.delete='searchResultByKey()'>
          <div class='search-btn' @click='searchResultByKey()'>搜索</div>
        </div>
      </div>
      <div v-for='(item, index) in dataObj.list' :key='index'>
         <search-people v-bind:list='item'></search-people>
      </div>
      <el-pagination background layout='prev, pager, next' :total='dataObj.total' @current-change='changeCurrentPage' v-if='dataObj.total && dataObj.total > 10'></el-pagination>
      <div class='no-result' v-if='!dataObj.total'>
        暂无查询数据
      </div>
    </div>
</template>
<script>
  import searchPeople from '../../../search/searchPeople.vue'

  export default {
    name: 'people',

    data() {
      return {
        param: {
          searchName: '',
          tags: 1,
          pageNum: 1
        },
        dataObj: {},
        searchKey: ''
      }
    },

    props: [],

    components: {
      searchPeople
    },

    created: function() {
      this.getList(this.param);
    },

    mounted: function() {

    },

    methods: {
      //搜索热点人群列表
      getList(param) {
        this.Http.post(this.Action.SearchList, param).then((data) => {
          this.dataObj = data;
        }).catch((res) => {
          console.log(res);
        });
      },

      searchResultByKey() {
        this.param.searchName = this.searchKey;
        this.getList(this.param);
      },

      //分页
      changeCurrentPage(val) {
        this.param.pageNum = val;
        this.getList(this.param);
      }
    }
  }
</script>

<style lang='less' scoped>
  .no-result {
    height: 400px;
    padding-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #4a4a4a;
  }
</style>
