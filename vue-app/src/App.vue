<template>
  <div id="app">
     <comment-header></comment-header>
     <comment-Footer></comment-Footer>
    <router-view/>
  </div>
</template>
<script>
import CommentHeader from './components/CommentHeader'
import CommentFooter from './components/CommentFooter'
export default {
  components:{
    CommentHeader,
    CommentFooter
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
