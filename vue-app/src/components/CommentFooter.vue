<template>
    <div :style="{background:$store.state.color}" class="footer">
        <router-link v-for="(obj,index) in menu" :key="index" :to="obj.path" @click.native="$store.commit('change',obj)">
        {{obj.name}}
        </router-link>
    </div>
</template>

<script>
    export default {
       data(){
           return {
           menu:[
               {
                   path:'/Movie',
                   name:'电影',
                   color:'green'
               },
                {
                   path:'/Music',
                   name:'音乐',
                   color:'pink'
               },
                {
                   path:'/Book',
                   name:'图书',
                   color:'yellow'
               },
                {
                   path:'/Photo',
                   name:'图片',
                   color:'purple'
               }
           ]
           }
       },
       created(){
          this.menu.forEach((obj,index)=>{
              if(this.$route.path.includes(obj.path)){
                  this.$store.commit('change',obj)
              }
          })
       }
    }
</script>

<style lang="scss" scoped>
.footer{
    height: 1rem;
    width: 100%;
    background: green;
    text-align: center;
    line-height: 1rem;
    position: fixed;
    bottom: 0;
    display: flex;
    a{
        width: 25%;
        height: 100%;
        font-size: 14px;
        color: #000000;
        text-decoration: none;
    }
    router-link-active{
        color: #ffffff;
        text-decoration: none;
    }
}
</style>