<template>
    <div class="works">
        <img class="img" :src="this.data.src">
        <p class="name">名称：{{this.data.name}}</p>
        <p class="time">时间：{{this.data.time}}</p>
        <p class="des">描述：{{this.data.des}}</p>
    </div>
</template>
<script>
export default {
    props:['data'],
    data(){
        return{
        }
    },
    methods:{
        mounted() {
            console.log(this.props)
        },
    }
}
</script>
<style lang="less" scoped>
    .works{
        color: #4A4A4A;
        font-size: 14px;
        .img{
            height: 253px;
            width: 180px;
            margin: 26px 0 18px 0;
        }
        p{
            margin-bottom: 6px;
        }
    }
</style>