<template>
    <div class="card">
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
        box-shadow: 0 2px 12px 0 rgba(0,0,0,0.06);
        border-radius: 4px 4px 4px 0;
        padding: 30px;
        box-sizing: border-box;
        color: #fff;
        .massage{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 24px;
        }
    }
</style>