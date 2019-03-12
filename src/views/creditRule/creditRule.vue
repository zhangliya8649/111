<template>
  <div class='rule'>
      <div class='rule-tit'>
        <div class='w1180'>
          <p>影视行业信用信息服务平台信用管理规定（试行）</p>
          <span v-for="(tab, index) in tabs" :key='index' :class="curIndex == index ? 'active' : ''" @click='tabMenu(index)'>{{tab.title}}</span>
        </div>
      </div>
      <div class='rule-con'>
        <div class='w1180'>
          <RuleCon :content='content'></RuleCon>
        </div>
      </div>
  </div>
</template>

<script>
  import RuleCon from './ruleCon/ruleCon'
  export default {
    name: 'creditRule',
    components: {
      RuleCon
    },
    data() {
      return {
        curIndex: 0,
        content: '',
        tabs: [
        /*
          {name: '红名单', childCom: 'Red'},
          {name: '黑名单', childCom: 'Black'},
          {name: '灰名单', childCom: 'Gray'}*/
        ]
      }
    },
    methods: {
      tabMenu(index) {
        this.curIndex = index;
        this.content = this.tabs[index].content;
      },

      getContent() {
        this.Http.post(this.Action.SearchCreditRule).then((res) => {
            for(let i = 0; i < res.list.length; i++) {
              if(res.list[i].isShow == 2) {
                this.tabs.push(res.list[i]);
              }
            }
            this.content = this.tabs[0].content;
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
      min-height: 395px;
      padding-top: 25px;
      padding-bottom: 82px;
    }
  }
</style>
