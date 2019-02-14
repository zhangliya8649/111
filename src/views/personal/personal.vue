<template>
    <div class="Personal">
        <div class="PersonalHeader">
            <div class="w1180">
                <div class="btnGroup">
                    <el-button v-for="(tab,index) in tabs" :key='index' :class="active == index ? 'activeBtn' : 'unactive'" @click="tabMenu(index)">{{tab.name}}</el-button>
                </div>
            </div>
        </div>
        <PersonalPage v-if="this.active == 0"></PersonalPage>
        <MyCollection v-if="this.active == 1"></MyCollection>
        <MessageCenter v-if="this.active == 2"></MessageCenter>
    </div>
</template>
<script>
import PersonalPage from './peronalPage/PersonalPage'
import MyCollection from './myCollection/myCollection'
import MessageCenter from './messageCenter/messageCenter'
export default {
    components:{PersonalPage,MyCollection,MessageCenter},
    data(){
        return{
            //当前选中按钮
            active: 0,
            //切换按钮
            tabs:[
                {name:'个人中心'},
                // {name:'我的收藏'},
                // {name:'消息中心'}
            ],
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