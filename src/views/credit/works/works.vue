<template>
    <div class='works'>
      <div class='search-ipt-par'>
        <div class='search-ipt w1180 clear'>
          <div class='search-icon'></div>
          <input type='text' placeholder='请输入作品名称' v-model='searchKey' @keyup.enter='searchResultByKey()' @keyup.delete='searchResultByKey()'>
          <div class='search-btn' @click='searchResultByKey()'>搜索</div>
        </div>
      </div>
      <div class='works-type w1180' id='parId'>
        <div class='type-list' v-for='item in searchType' :data-type='item.type'>
           <span class='list-tit'>{{item.title}}：</span>
           <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)' :data-type='subItem.type'>{{subItem.name}}</el-button>
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
        searchKey: '',
        page: 1,
        searchType: [
          {
            type: 'subtype',
            title: '影视剧',
            con: [
                   {name: '全部', type: ''},
                   {name: '电影', type: 'movie'},
                   {name: '电视剧', type: 'tv'},
                   {name: '动画片', type: 'movie'},
                   {name: '纪录片', type: 'movie'}
                 ]
          },
          {
            type: 'varietyShow',
            title: '综艺',
            con: [
                   {name: '全部', type: ''}
                 ]
          },
          {
            type: 'showType',
            title: '演出',
            con: [
                   {name: '全部', type: ''},
                   {name: '舞台剧', type: ''},
                   {name: '歌曲', type: ''},
                   {name: '曲艺', type: ''}
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
        let parType = parNode.getAttribute('data-type');
        let elType = el.getAttribute('data-type');
        this.param[parType] = elType;
        for(let i = 0; i < btnListNode.length; i++) {
          if(btnListNode[i].classList.contains('active')) {
            btnListNode[i].classList.remove('active');
          }
        }
        el.classList.add('active');
        this.getList(this.param);
      },

      //搜索
      searchResultByKey() {
        this.param.subjectName = this.searchKey;
        this.getList(this.param);
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

