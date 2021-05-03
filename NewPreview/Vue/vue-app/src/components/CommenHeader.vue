<template>
  <header :style="{ background: $store.state.color }">
    {{ $store.state.title }}
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  background: red;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  font-size: 14px;
}
</style>