<template>
  <div>
    <div v-for='(item, index) in listData' :key='index'>
       <search-people v-bind:list='item'></search-people>
    </div>
    <div class='page'>

    </div>
  </div>
</template>

<script>
  import searchPeople from '../../search/searchPeople.vue'

  export default {
    name: 'people',

    data() {
      return {

      }
    },

    props: ['listData'],

    components: {
      searchPeople
    },

    mounted: function() {

    },

    methods: {

    }
  }
</script>

<style lang='less' scoped>

</style>
