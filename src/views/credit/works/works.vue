<template>
    <div>
      <div v-for='(item, index) in listData' :key='index'>
         <search-works v-bind:list='item'></search-works>
      </div>
      <div class='page'>

      </div>
    </div>
</template>
<script>
  import searchWorks from '../../search/searchWorks.vue'

  export default {
    name: 'works',

    data() {
      return {

      }
    },

    props: ['listData'],

    components: {
      searchWorks
    },

    mounted: function() {

    },

    methods: {

    }
  }
</script>

<style lang='less' scoped>

</style>
