<template>
    <div>
      <div v-for='(item, index) in dataObj.list' :key='index'>
         <search-people v-bind:list='item'></search-people>
      </div>
      <el-pagination background layout='prev, pager, next' :total='dataObj.total' @current-change='changeCurrentPage' v-if='dataObj.total ? true : false'></el-pagination>
    </div>
</template>
<script>
  import searchPeople from '../../search/searchPeople.vue'

  export default {
    name: 'people',

    data() {
      return {
        dataObj: {}
      }
    },

    props: [],

    components: {
      searchPeople
    },

    mounted: function() {
      let param = {
        tags: 1,
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
          console.log(res);
        });
      },

      //分页
      changeCurrentPage(val) {
        let param = {
          tags: 1,
          pageNum: val
        };
        this.getList(param);
      }
    }
  }
</script>

<style lang='less' scoped>

</style>
<style>
  @import "../../../../static/css/page.css"
</style>
