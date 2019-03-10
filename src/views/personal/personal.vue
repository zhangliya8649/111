<template>
    <div class="Personal">
        <div class="PersonalHeader">
            <div class="w1180">
                <div class="btnGroup">
                    <el-button v-for="(tab,index) in tabs" :key='index' :class="active == index ? 'activeBtn' : 'unactive'" @click="tabMenu(index)">{{tab.name}}</el-button>
                </div>
            </div>
        </div>
        <childPage :is='curPage' :userState='claimState'></childPage>
        <MyCollection v-if="this.active == 1"></MyCollection>
        <MessageCenter v-if="this.active == 2"></MessageCenter>
    </div>
</template>
<script>
import PersonalPage from './peronalPage/PersonalPage'
import CompanyPage from './peronalPage/companyPage'
import normalPerson from './peronalPage/normalPerson'
import MyCollection from './myCollection/myCollection'
import MessageCenter from './messageCenter/messageCenter'

import Until from "../../until/until";

const childPages = {
  'PersonalPage': [2, 3],
  'CompanyPage': [4, 5],
  'normalPerson': [6]
}

export default {
    components:{PersonalPage,MyCollection,MessageCenter,CompanyPage,normalPerson},

    data(){
        return{
            //当前选中按钮
            active: 0,
            curPage: '',
            //切换按钮
            tabs:[
                {name:'个人中心'},
                // {name:'我的收藏'},
                // {name:'消息中心'}
            ],
        }
    },

    created() {
       this.claimState = Until.getUser().user.claimState;
       this.type = Until.getUser().user.userType;
       if(this.claimState == 1) {
          this.$router.push({path: '/MakeSure'});
       }else {
          let pageType;
          for(let key in childPages) {
           pageType = childPages[key];
           for(let i = 0; i < pageType.length; i++) {
             if(this.type == pageType[i]) {
               this.curPage = key;
             }
           }
          }
       }
    },

    methods : {
        //切换按钮
        tabMenu(index){
            this.active = index;
        },
    }
}
</script>
<style lang="less" scoped>
    .Personal{
        .PersonalHeader{
                background-color: #FAF8F7;
                height: 142px;
                line-height: 142px;
            .w1180{
                .btnGroup{
                    .activeBtn{
                        background-color: #F58523;
                        border: #F58523;
                        color: #fff;
                        height: 40px;
                        widows: 100px;
                        border-radius: 0;
                    }
                    .unactive{
                        border: none;
                        background-color: #FAF8F7;
                    }
                    .unactive:hover{
                        color: #4A4A4A;
                    }
                }
            }
        }
    }
</style>
