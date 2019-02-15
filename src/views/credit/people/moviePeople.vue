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
    name: 'people',

    data() {
      return {
        curIndex: 0,
        searchType: [
          {
            type: 'investment',
            title: '投资',
            con: [
                   {name: '全部'},
                   {name: '出品人'}
                 ]
          },
          {
            type: 'producer',
            title: '制作',
            con: [
                   {name: '全部'},
                   {name: '制片人'},
                   {name: '编剧'},
                   {name: '导演'},
                   {name: '演员'},
                   {name: '摄影'},
                   {name: '灯光'},
                   {name: '造型'},
                   {name: '录音'},
                   {name: '特技'},
                 ]
          },

          {
            type: 'afterTreatment',
            title: '后期',
            con: [
                   {name: '全部'},
                   {name: '视频后期'},
                   {name: '音频后期'},
                   {name: '特效后期'}
                 ]
          },
          {
            type: 'publicity',
            title: '宣传',
            con: [
                   {name: '全部'},
                   {name: '宣传总监'},
                   {name: '宣传'},
                   {name: '媒体人'}
                 ]
          },
          {
            type: 'publish',
            title: '发行',
            con: [
                   {name: '全部'},
                   {name: '发行人'}
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
