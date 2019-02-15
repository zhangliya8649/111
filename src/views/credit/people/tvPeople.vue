<template>
  <div>
    <div class='works-type w1180' id='parId'>
      <div class='type-list' v-for='item in searchType' :data-type='item.type'>
         <span class='list-tit'>{{item.title}}：</span>
         <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)'>{{subItem.name}}</el-button>
      </div>
    </div>
    <div v-for='(item, index) in listData' :key='index'>
       <search-people v-bind:list='item'></search-people>
    </div>
    <div class='page'>
      <el-pagination background layout='prev, pager, next' :total='6'></el-pagination>
    </div>
  </div>
</template>

<script>
  import searchPeople from '../../search/searchPeople.vue'

  export default {
    name: 'tvPeople',

    data() {
      return {
        curIndex: 0,
        searchType: [
          {
            type: 'artCreation',
            title: '艺术创作',
            con: [
                   {name: '全部'},
                   {name: '艺术总监'},
                   {name: '导演'},
                   {name: '舞美设计'},
                   {name: '灯光设计'},
                   {name: '其他主创'}
                 ]
          },
          {
            type: 'stagehand',
            title: '舞台管理',
            con: [
                   {name: '全部'},
                   {name: '舞台监督'},
                   {name: '舞台管理'}
                 ]
          },
          {
            type: 'stageTechnique',
            title: '舞台技术',
            con: [
                   {name: '全部'},
                   {name: '现场布景'},
                   {name: '现场灯光'},
                   {name: '现场音响'},
                   {name: '舞台机械'},
                   {name: '舞台音效'},
                   {name: '道具'}
                 ]
          },
          {
            type: 'actorType',
            title: '演员',
            con: [
                   {name: '全部'},
                   {name: '舞台剧'},
                   {name: '歌手'},
                   {name: '曲艺'}
                 ]
          },
          {
            type: 'other',
            title: '其他',
            con: [
                   {name: '全部'},
                   {name: '出品人'},
                   {name: '制作人'},
                   {name: '演出经纪人'}
                 ]
          }
        ]
      }
    },

    props: ['listData'],

    components: {
      searchPeople
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
</style>
<style>
  @import "../../../../static/css/page.css"
</style>
