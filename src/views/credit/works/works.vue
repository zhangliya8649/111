<template>
    <div class='works'>
      <div class='works-type w1180' id='parId'>
        <div class='type-list' v-for='item in searchType' :data-type='item.type'>
           <span class='list-tit'>{{item.title}}：</span>
           <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)'>{{subItem.name}}</el-button>
        </div>
      </div>
      <div v-for='(item, index) in dataObj.list' :key='index'>
         <search-works v-bind:list='item'></search-works>
      </div>
      <el-pagination background layout='prev, pager, next' :total='dataObj.total' @current-change='changeCurrentPage' v-if='dataObj.total && dataObj.total > 10'></el-pagination>
      <div class='no-result' v-if='!dataObj.total'>
        暂无查询数据
      </div>
    </div>
</template>
<script>
  import searchWorks from '../../search/searchWorks.vue'

  export default {
    name: 'works',
    data() {
      return {
        param: {
          subjectName: '',
          subtype: '',
          varietyShow: '',
          showType: '',
          pageNum: 1
        },
        dataObj: {},
        curIndex: 0,
        page: 1,
        searchType: [
          {
            type: 'subtype',
            title: '影视剧',
            con: [
                   {name: '全部'},
                   {name: '电影'},
                   {name: '电视剧'},
                   {name: '动画片'},
                   {name: '纪录片'}
                 ]
          },
          {
            type: 'varietyShow',
            title: '综艺',
            con: [
                   {name: '全部'}
                 ]
          },
          {
            type: 'showType',
            title: '演出',
            con: [
                   {name: '全部'},
                   {name: '舞台剧'},
                   {name: '歌曲'},
                   {name: '曲艺'}
                 ]
          }
        ]
      }
    },

    props: [],

    components: {
      searchWorks
    },

    created: function() {
      this.getList(this.param);
    },

    mounted: function() {

    },

    methods: {
      tabMenu(index, event) {
        let el = event.currentTarget;
        if(el.classList.contains('active')) {
          return;
        }
        let parNode = el.parentNode;
        let btnListNode = parNode.children;
        for(let i = 0; i < btnListNode.length; i++) {
          if(btnListNode[i].classList.contains('active')) {
            btnListNode[i].classList.remove('active');
          }
        }
        el.classList.add('active');
      },

      //搜索作品列表
      getList(param) {
        this.Http.post(this.Action.SearchWorksListByKey, param).then((data) => {
          this.dataObj = data;
        }).catch((res) => {

        })
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
  .works-type {
    box-sizing: border-box;
    border: 1px solid #DCDFE6;
    padding-left: 20px;
    padding-top: 36px;
    padding-bottom: 36px;
    margin-bottom: 20px;
    font-size: 14px;
    .type-list {
      margin-bottom: 18px;
      .list-tit {
        display: inline-block;
        width: 56px;
        font-weight: bold;
      }
      button {
        height: 22px;
        line-height: 22px;
        padding: 0 15px;
        margin-right: 10px;
        background: transparent;
        border: none;
        outline: none;
        color: #4A4A4A;
        &.active {
          background: #F58523;
          border-radius: 2px;
          color: #fff;
        }
      }
    }
  }
  .no-result {
    height: 400px;
    padding-top: 30px;
    text-align: center;
    font-size: 14px;
    color: #4a4a4a;
  }
</style>
<style>
  @import "../../../../static/css/page.css"
</style>
