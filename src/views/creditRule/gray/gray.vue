<template>
  <div v-html='content'>

  </div>

</template>

<script>
  export default {
    name: 'Gray',
    props:['content'],
    mounted: function() {
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
