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
    <el-pagination background layout='prev, pager, next' :total='dataObj.total' :current-page='param.pageNum' @current-change='changeCurrentPage' v-if='dataObj.total && dataObj.total > 10'></el-pagination>
    <div class='no-result' v-if='!dataObj.total'>
      暂无查询数据
    </div>
  </div>
</template>

<script>
  import searchPeople from '../../../search/searchPeople.vue'

  export default {
    name: 'moviePeople',

    data() {
      return {
        param: {
          celebrityName: '',
          identityType: 2,
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
          },
          {
            type: 'area',
            title: '地区',
            con: [
                   {name: '全部'},
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
        let param = {};
        this.param.celebrityName = this.searchKey;
        if(this.searchKey == '') {
          param = this.param;
        }else {
          param = Object.assign(param, this.param);
          param.pageNum = 1;
        }
        this.getList(param);
      },

      //查询影视人列表
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
        width: 42px;
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
    .type-list[data-type='area'] {
      button[data-type='全部'] {
        margin-right: 1000px;
      }
      button[data-type='延庆区'] {
        margin-right: 565px;
      }
      button[data-type='大兴区'] {
        margin-left: 124px;
      }
      button[data-type='北京'], button[data-type='天津'], button[data-type='河北'] {
        margin-left: 46px;
      }
      button[data-type='宝坻区'], button[data-type='衡水市'] {
        margin-left: 124px;
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

