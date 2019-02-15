<template>
    <div>
      <div class='works-type w1180' id='parId'>
        <div class='type-list' v-for='item in searchType' :data-type='item.type'>
           <span class='list-tit'>{{item.title}}：</span>
           <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)'>{{subItem.name}}</el-button>
        </div>
      </div>
      <div v-for='(item, index) in listData' :key='index'>
         <search-works v-bind:list='item'></search-works>
      </div>
      <div class='page'>
        <el-pagination background layout='prev, pager, next' :total='6'></el-pagination>
      </div>
    </div>
</template>
<script>
  import searchWorks from '../../search/searchWorks.vue'

  export default {
    name: 'works',

    data() {
      return {
        curIndex: 0,
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

    props: ['listData'],

    components: {
      searchWorks
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
  .page {
    margin-top: 26px;
    text-align: center;
  }

</style>
<style>
  @import "../../../../static/css/page.css"
</style>
