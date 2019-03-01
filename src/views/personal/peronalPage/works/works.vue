<template>
    <div class="works">
        <img class="img" :src="this.data.subjectUrl">
        <p class="name">名称：{{this.data.subjectName}}</p>
        <!-- <p class="time">时间：{{this.data.releaseDate[0]}}</p> -->
        <!-- <p class="des">描述：{{this.data.subjectIntroduce.substring(0, 20) + "..."}}</p> -->
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