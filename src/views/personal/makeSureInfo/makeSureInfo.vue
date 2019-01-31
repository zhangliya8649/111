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
                        <el-input class="input" v-model="input" placeholder="请输入内容">
                            <i slot="prefix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                        <el-button class="search-btn">搜索</el-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            active:0,//初始化选中按钮
            tabs:[
                {name:'影视人'},
                {name:'演艺人'},
                {name:'影视公司负责人'},
                 {name:'演艺公负责人'},
                {name:'非业内人士'}
            ]
        }
    },
    methods:{
         tabMenu(index){
            this.active = index;
        },
    }
}
</script>
<style lang="less" scoped>
    .makeSureInfo{
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
                    width: 692px;
                    height: 56px;
                    .search{
                        .input{
                            .el-input__inner{
                                border: none!important;
                                border-radius: 0!important;
                                outline: none!important;
                                height: 56px;
                            }
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