<template>
    <header :style="{background:$store.state.color}">
    {{$store.state.name}}
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
header{
    height: 1rem;
    width: 100%;
    text-align: center;
    line-height: 1rem;
    font-size: 16px;
    color: #000000;
    position: fixed;
    top: 0;
}
</style>