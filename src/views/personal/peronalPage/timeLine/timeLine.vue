<template>
    <div class="timeLine">
        <div class="showTop" v-if="index % 2 == 0">
            <CardT :info='msg.info'></CardT>
            <p class="time" style="marginTop:10px">{{msg.time}}</p>
        </div>
        <div class="hideTop" v-else>
            <div class="hide"></div>
            <p class="time" style="marginTop:10px;height:22px"></p>
        </div>  
        <div class="timeLineBox">
            <img class="point" src="../../../../assets/img/point.png">
            <div class="line">
            </div>
        </div>
        <div class="showBottom" v-if="index % 2 != 0">
             <p class="time" style="marginBottom:10px">{{msg.time}}</p>
            <CardB :info='msg.info' v-if="index % 2 != 0"></CardB>
        </div>
        <div class="hideBottom" v-else>
            <p class="time" style="marginBottom:10px;height:22px"></p>
            <div class="hide"></div>
        </div>
    </div>
</template>
<script>
import CardT from './card/cardT'
import CardB from './card/cardB'
export default {
    components:{CardT,CardB},
    props:['msg','index'],
    data(){
        return{
        }
    },
    methods:{
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