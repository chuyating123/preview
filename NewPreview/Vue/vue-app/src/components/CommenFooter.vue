<template>
    <footer :style="{background:$store.state.color}">
     <router-link 
     v-for="(obj,index) in menu" :key="index" 
     :to="obj.path"
     @click.native="$store.commit('change',obj)"
     >{{obj.title}}</router-link>
    </footer>
</template>

<script>
    export default {
        data(){
            return{
                menu:[
                    {
                        title:'电影',
                        path:'/movie',
                        color:'red'
                    },
                    {
                        title:'音乐',
                        path:'/music',
                        color:'pink'
                    },
                    {
                        title:'图书',
                        path:'/book',
                        color:'yellow'
                    },
                    {
                        title:'图片',
                        path:'/photo',
                        color:'blue'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
footer{
    height: 1rem;
    line-height: 1rem;
    background: red;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    a{
      flex: 1;
      text-align: center;
      text-decoration: none;
      color: #000;
      font-size: 14px;
    }
    .router-link-active{
        color: #fff;
        cursor: pointer;
    }
}

</style>