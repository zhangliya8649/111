<template>
    <div class="makeSureInfo">
        <div class="makeSureInfoHeader">
            <div class="w1180">
                <div class="btnGroup">
                    <span>请选择您的身份：</span>
                    <el-button v-for="(tab,index) in tabs" :key='index' :class="active == index ? 'activeBtn' : 'unactive'" @click="tabMenu(index)">{{tab.name}}</el-button>
                </div>
                <div class="search-box">
                    <div class="search">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                            <input type="text" class="input" placeholder="请输入影视人名称">
                            <el-button class="search-btn">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="makeSure-content w1180">
            <Actor v-if="this.active == 0 ||this.active == 1"></Actor>
            <CompanyMan v-if="this.active == 2 ||this.active == 3"></CompanyMan>
            <Outer v-if="this.active == 4"></Outer>
        </div>
    </div>
</template>
<script>
import Actor from './actor/actor'
import CompanyMan from './CompanyMan/CompanyMan'
import Outer from './outer/outer'
export default {
    components:{Actor,CompanyMan,Outer},
    data(){
        return{
            active:0,//初始化选中按钮
            tabs:[          //切换菜单
                {name:'影视人'},    
                {name:'演艺人'},
                {name:'影视公司负责人'},
                 {name:'演艺公司负责人'},
                {name:'非业内人士'}
            ]
        }
    },
    methods:{
        tabMenu(index){
            this.active = index;
        }
    }
}
</script>
<style lang="less" scoped>
    .makeSureInfo{
        height: 1200px;
        .makeSureInfoHeader{
                background-color: #FAF8F7;
                height: 200px;  
            .w1180{
                padding-top: 54px;
                .btnGroup{
                    height: 40px;
                    margin-bottom: 20px;
                    span{
                        font-family: PingFang-SC-Medium;
                        font-size: 16px;
                        color: #9B9B9B;
                        letter-spacing: 0;
                    }
                    .activeBtn{
                        background-color: #F58523;
                        border: #F58523;
                        color: #fff;
                    }
                    .unactive{
                        border: none;
                        background-color: #FAF8F7;
                    }
                    .unactive:hover{
                        color: #4A4A4A;
                    }
                }
                .search-box{
                    width: 840px;
                    height: 56px;
                    .search{
                        height: 100%;
                        width: 100%;
                        background-color: #fff;
                        display: flex;
                        justify-content: space-between;
                        .el-icon-search{
                            height: 100%;
                            width: 56px;
                            font-size: 21px;
                            color: #000;
                        }
                        .input{
                            outline: none;
                            border: none;
                            height: 100%;
                            width: 100%;
                        }
                        .search-btn{
                            height: 56px;
                            width: 148px;
                            background-color: #F58523;
                            border-color: #F58523;
                            color: #fff;
                            border-radius: 0;
                        }
                    }
                }
            }
        }
    }
</style>