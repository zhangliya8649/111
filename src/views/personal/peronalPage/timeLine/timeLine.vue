<template>
    <div class="timeLine">
        <Card :info='msg.info' v-if="showCard"></Card>
        <div class="hide" v-else></div>
        <div class="timeLineBox">
            <img class="point" @click="point" src="../../../../assets/img/point.png">
            <div class="line">
            </div>
        </div>
        <p class="time">{{msg.time}}</p>
    </div>
</template>
<script>
import Card from './card/card'
export default {
    components:{Card},
    props:['msg'],
    data(){
        return{
            showCard:false,     //显示卡片信息
        }
    },
    methods:{
        point(){            //点击显示
            this.showCard = true;
        }
    }
}
</script>
<style lang="less" scoped>
    .timeLine{
        flex-grow: 1;
        height: 180px;
        .hide{
            width: 360px;
            height: 94px;
        }
        .timeLineBox{
            display: flex;
            align-items: center;
            flex-grow: 1;
            margin: 10px 0;
            .point{
                vertical-align: middle;
                cursor: pointer;
            }
            .line{
                background-color: rgba(0,0,0,0.04);
                border-radius: 6px;
                height: 4px;
                vertical-align: middle;
                width: 100%;
            }
        }
        .time{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: rgba(0,0,0,0.65);
            line-height: 22px;
            display: inline-block;
        }
    }
</style>