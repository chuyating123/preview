<template>
  <div id="app">
    <commen-header></commen-header>
    <commen-footer></commen-footer>
  </div>
</template>
<script>
import CommenHeader from './components/CommenHeader'
import CommenFooter from './components/CommenFooter'
export default {
  components:{
    CommenHeader,
    CommenFooter
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
