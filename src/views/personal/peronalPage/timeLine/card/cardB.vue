<template>
    <div class="card">
        <div class="triangle">
            <em class="triangleLeft"></em>
            <span class="triangleRight"></span>
        </div>
        <p class="massage">{{info}}</p>
    </div>
</template>
<script>
export default {
    props:['info'],
    data(){
        return{

        }
    }
}
</script>
<style lang="less" scoped>
    .card{
        width: 360px;
        height: 94px;
        background: #F58523;
        border: 1px solid #E4E7ED;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
        border-radius: 0 5px 5px 5px;
        padding: 30px;
        box-sizing: border-box;
        color: #fff;
        position: relative;
        .triangle{
            height: 20px;
            width: 20px;
            position: absolute;
            top: -10px;
            left: 0;
            *{
                font-size: 0;
                line-height: 0;
                border-width: 5px;
                border-style: solid solid dashed dashed;
                position: absolute;
            }
            .triangleLeft{
                border-color: transparent transparent #F58523 #F58523;
            }
            .triangleRight{
                border-color: transparent transparent #F58523 #F58523;
            }
        }
        .massage{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 24px;
        }
    }
</style>