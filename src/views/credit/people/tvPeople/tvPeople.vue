<template>
  <div>
    <div class='search-ipt-par'>
      <div class='search-ipt w1180 clear'>
        <div class='search-icon'></div>
        <input type='text' placeholder='请输入艺人名称，检索艺人信用信息' v-model='searchKey' @keyup.enter='searchResultByKey()' @keyup.delete='searchResultByKey()'>
        <div class='search-btn' @click='searchResultByKey()'>搜索</div>
      </div>
    </div>
    <div class='works-type w1180' id='parId'>
      <div class='type-list' v-for='item in searchType' :data-type='item.type'>
         <span class='list-tit'>{{item.title}}：</span>
         <el-button v-for="(subItem, index) in item.con" :key='index' :class="index == 0 ? 'active' : ''" @click='tabMenu(index, $event)' :data-type='subItem.name'>{{subItem.name}}</el-button>
      </div>
    </div>
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
    name: 'tvPeople',

    data() {
      return {
        param : {
          celebrityName: '',
          identityType: 3,
          artCreation: '',
          stagehand: '',
          stageTechnique: '',
          actorType: '',
          other: '',
          investment: '',
          producer: '',
          afterTreatment: '',
          publicity: '',
          publish: '',
          area: '',
          pageNum: 1
        },
        dataObj: {},
        curIndex: 0,
        searchKey: '',
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
          },
          {
            type: 'area',
            title: '地区',
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
                   {name: '延庆区'},
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
                   {name: '静海区'},
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

    components: {
      searchPeople
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
        let elType = el.getAttribute('data-type') == '全部' ? '' : el.getAttribute('data-type');
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
        this.param.celebrityName = this.searchKey;
        this.getList(this.param);
      },

      //查询演艺人列表
      getList(param) {
        this.Http.post(this.Action.SearchPeopleListByKey, param).then((data) => {
          this.dataObj = data;
        }).catch((err) => {
          console.log(err);
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
        width: 70px;
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
      button[data-type='延庆区'] {
        margin-right: 382px;
      }
      button[data-type='昌平区'] {
        margin-left: 152px;
      }
      button[data-type='天津'], button[data-type='河北'] {
        margin-left: 75px;
      }
      button[data-type='宝坻区'], button[data-type='衡水市'] {
        margin-left: 153px;
      }
      button[data-type='静海区'] {
        margin-right: 640px;
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

