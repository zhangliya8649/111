<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '@/components/header/header.vue'
  import Footer from '@/components/footer/footer.vue'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },
    data: {

    },
    methods: {

    }
  }
</script>

<style <style lang="less" scoped>
#app {
  font-family: '微软雅黑', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}
</style>
