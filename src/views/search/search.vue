<template>
    <div class='search'>
      <div class='list-par' v-if='dataObj.total && dataObj.total > 0'>
        <div v-for='(item, index) in dataObj.list' :key='index'>
           <search-child :list='item' :is='pageData.curCom'></search-child>
        </div>
      </div>
      <div class='no-result' v-else>
        暂无查询数据
      </div>
      <el-pagination background layout='prev, pager, next' :total='dataObj.total' @current-change='changeCurrentPage' v-if='dataObj.total > 10'></el-pagination>
    </div>
</template>
<script>
  import searchWorks from './searchWorks.vue'
  import searchPeople from './searchPeople.vue'
  import searchCompany from './searchCompany.vue'

  export default {
    name: 'Search',

    data() {
      return {
        pageData: {
          searchKey: '',
          curIndex: 1,
          curCom: 'searchPeople'
        },
        dataObj: {}
      }
    },

    props: [],

    components: {
      searchWorks,
      searchPeople,
      searchCompany
    },

    created: function() {
      this.pageData = JSON.parse(this.$route.query.pageData);
    },

    mounted: function() {
      console.log(this.dataObj);
      console.log(this.dataObj.total);
      let param = {
        searchName: this.pageData.searchKey,
        tags: this.pageData.curIndex,
        pageNum: 1
      };
      this.getList(param);

    },

    methods: {
      //根据不同条件搜索列表
      getList(param) {
        this.Http.post(this.Action.SearchList, param).then((data) => {
          this.dataObj = data;
        }).catch((res) => {

        });
      },

      //分页
      changeCurrentPage(val) {
        let param = {
          searchName: this.pageData.searchKey,
          tags: this.pageData.curIndex,
          pageNum: val
        };
        this.getList(param);
      }
    }
  }
</script>

<style lang='less' scoped>
  .search {
    padding-top: 60px;
    padding-bottom: 30px;
    .no-result {
      height: 600px;
      text-align: center;
      font-size: 14px;
      color: #4a4a4a;
    }
  }
</style>
<style>
  @import "../page.css"
</style>
