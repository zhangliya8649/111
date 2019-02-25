<template>
    <div class='people'>
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
<style>
  @import "../../../../../static/css/page.css"
</style>
