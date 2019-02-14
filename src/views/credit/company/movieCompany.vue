<template>
  <div>
    <div v-for='(item, index) in listData' :key='index'>
       <search-company v-bind:list='item'></search-company>
    </div>
    <div class='page'>

    </div>
  </div>
</template>

<script>
  import searchCompany from '../../search/searchCompany.vue'

  export default {
    name: 'movieCompany',

    components: {
      searchCompany
    },

    props: ['listData'],

    methods: {

    }
  }
</script>

<style lang='less' scoped>


</style>
