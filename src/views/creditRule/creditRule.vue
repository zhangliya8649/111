<template>
  <div class='rule'>
      <div class='rule-tit'>
        <div class='w1180'>
          <p>影视行业信用信息服务平台信用管理规定（试行）</p>
          <span v-for="(tab, index) in tabs" :key='index' :class="curIndex == index ? 'active' : ''" @click='tabMenu(index)'>{{tab.name}}</span>
        </div>
      </div>
      <div class='rule-con'>
        <div class='w1180'>
          <child :is='curRule' :content='content'></child>
        </div>
      </div>
  </div>
</template>

<script>
  import Red from './red/red'
  import Gray from './gray/gray'
  import Black from './black/black'
  export default {
    name: 'creditRule',
    components: {
      Red,
      Gray,
      Black
    },
    data() {
      return {
        curIndex: 0,
        curRule: 'Red',
        content: '',
        tabs: [
          {name: '红名单', childCom: 'Red'},
          {name: '黑名单', childCom: 'Black'},
          {name: '灰名单', childCom: 'Gray'}
        ]
      }
    },
    methods: {
      tabMenu(index) {
        this.curIndex = index;
        this.curRule = this.tabs[index].childCom;
        this.getContent(index + 1);
      },

      getContent(index) {
        this.Http.post(this.Action.SearchCreditRule).then((res) => {
            let list = res.list;
            for(let i = 0; i < list.length; i++) {
              if(list[i].id == index) {
                this.content = list[i].content;
                break;
              }
            }
        }).catch((err) => {

        })
      }
    },

    created() {

    },
    mounted() {
      this.getContent();
    }
  }
</script>

<style lang='less' scoped>
  .rule {

    .rule-tit {
      padding-top: 50px;
      padding-bottom: 39px;
      background: #FAF8F7;
      span {
          box-sizing: border-box;
          display: inline-block;
          padding: 12px 20px;
          white-space: nowrap;
          text-align: center;
          color: #606266;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          &.active {
            background: #F58523;
            color: #fff;
          }
      }
      p {
        margin-bottom: 39px;
        height: 40px;
        line-height: 40px;
        font-size: 28px;
        color: #4A4A4A;
      }
    }
    .rule-con {
      height: 300px;
      padding-top: 25px;
      padding-bottom: 82px;
    }
  }
</style>
