<template>
  <div>
    <div class='works-type w1180' id='parId'>
      <div class='type-list' v-for='item in searchType' :data-type='item.type'>
         <span class='list-tit'>{{item.title}}</span>
         <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)'>{{subItem.name}}</el-button>
      </div>
    </div>
    <div v-for='(item, index) in dataObj.list' :key='index'>
       <search-company v-bind:list='item'></search-company>
    </div>
    <el-pagination background layout='prev, pager, next' :total='dataObj.total' @current-change='changeCurrentPage' v-if='dataObj.total ? true : false'></el-pagination>
  </div>
</template>

<script>
  import searchCompany from '../../search/searchCompany.vue'

  export default {
    name: 'movieCompany',

    components: {
      searchCompany
    },

    mounted: function() {
      let param = {
        tags: 3,
        pageNum: 1
      };
      this.getList(param);
    },

    data() {
      return {
        dataObj: {},
        curIndex: 0,
        searchType: [
          {
            type: 'bj',
            title: '地区：',
            con: [
                   {name: '北京'},
                   {name: '东城区'},
                   {name: '西城区'},
                   {name: '朝阳区'},
                   {name: '丰台区'},
                   {name: '石景山区'},
                   {name: '海淀区'},
                   {name: '门头沟区'},
                   {name: '房山区'},
                   {name: '通州区'},
                   {name: '顺义区'},
                   {name: '昌平区'},
                   {name: '大兴区'},
                   {name: '怀柔区'},
                   {name: '平谷区'},
                   {name: '密云区'},
                   {name: '延庆区'}
                 ]
          },
          {
            type: 'tj',
            title: '',
            con: [
                   {name: '天津'},
                   {name: '和平区'},
                   {name: '河东区'},
                   {name: '河西区'},
                   {name: '南开区'},
                   {name: '河北区'},
                   {name: '红桥区'},
                   {name: '东丽区'},
                   {name: '西青区'},
                   {name: '津南区'},
                   {name: '北辰区'},
                   {name: '武清区'},
                   {name: '宝坻区'},
                   {name: '滨海新区'},
                   {name: '宁河区'},
                   {name: '静海区'}
                 ]
          },
          {
            type: 'hb',
            title: '',
            con: [
                   {name: '河北'},
                   {name: '石家庄市'},
                   {name: '唐山市'},
                   {name: '秦皇岛市'},
                   {name: '邯郸市'},
                   {name: '邢台市'},
                   {name: '保定市'},
                   {name: '张家口市'},
                   {name: '承德市'},
                   {name: '沧州市'},
                   {name: '廊坊市'},
                   {name: '衡水市'}
                 ]
          }
        ]
      }
    },

    props: [],

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

      //根据不同条件搜索列表
      getList(param) {
        this.Http.post(this.Action.SearchList, param, (data) => {
          this.dataObj = data;
        }, (err) => {
          console.log(err);
        })
      },

      //分页
      changeCurrentPage(val) {

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
        width: 42px;
        font-weight: bold;
      }
      button {
        height: 22px;
        line-height: 22px;
        padding: 0 15px;
        margin-left: 0;
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
    .type-list[data-type='bj'] {
      button:nth-child(17) {
        margin-left: 104px;
      }
    }
    .type-list[data-type='tj'] {
      button:last-child {
        margin-left: 104px;
      }
    }
  }

</style>
<style>
  @import "../../../../static/css/page.css"
</style>
