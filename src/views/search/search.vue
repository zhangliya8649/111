<template>
    <div class='search'>
      <div v-if='isMoreWorks' class='search-result-text'>
        <p class='w1180'>{{this.$route.query.name}} 的全部作品（{{dataObj.total}}）</p>
      </div>
      <div v-else class='search-result-text'>
        <p class='w1180'>共搜索到{{dataObj.total}}结果</p>
      </div>
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
        dataObj: {},
        isMoreWorks: false,
      }
    },

    props: [],

    components: {
      searchWorks,
      searchPeople,
      searchCompany
    },

    created: function() {
      let param = {pageNum : 1};
      if(this.$route.query.id) { //全部作品
        this.isMoreWorks = true;
        this.pageData.curCom = 'searchWorks';
        param.celebrityId = this.$route.query.id;
        this.getWorksById(param);
      }else { //首页搜索列表
        this.pageData = JSON.parse(this.$route.query.pageData);
        param.searchName = this.pageData.searchKey;
        param.tags = this.pageData.curIndex,
        this.getList(param);
      }
    },

    mounted: function() {

    },

    methods: {
      //根据不同条件搜索列表
      getList(param) {
        this.Http.post(this.Action.SearchList, param).then((data) => {
          this.dataObj = data;
        }).catch((res) => {

        });
      },

      //查询更多作品
      getWorksById(param) {
        this.Http.post(this.Action.SearchWorkNumById, param).then((data) => {
          this.dataObj = data;
        }).catch((err) => {
          console.log(err);
        })
      },

      //分页
      changeCurrentPage(val) {
        let param = {pageNum : val};
        if(this.$route.query.id) { //全部作品
          param.celebrityId = this.$route.query.id;
          this.getWorksById(param);
        }else { //首页搜索列表
          param.searchName = this.pageData.searchKey;
          param.tags = this.pageData.curIndex,
          this.getList(param);
        }
      }
    }
  }
</script>

<style lang='less' scoped>
  .search {
    //padding-top: 60px;
    padding-bottom: 30px;
    .list-par {
      padding-top: 20px;
    }
    .search-result-text {
      padding-top: 50px;
      padding-bottom: 20px;
      background: #FAF8F7;
      font-size: 28px;
      color: #4A4A4A;
      p {
        height: 40px;
        line-height: 40px;
      }
    }
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
