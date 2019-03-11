<template>
  <div v-html='content'>
  </div>

</template>

<script>
  export default {
    name: 'Red',
    props:['content'],
    components: {

    },
    methods: {

    }
  }
</script>

<style lang='less' scoped>
  p {
    font-size: 14px;
  }

</style>
