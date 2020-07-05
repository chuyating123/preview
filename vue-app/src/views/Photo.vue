<template>
    <div>
     <img v-for="(obj,index) in $store.state.photo" :key="index" :src="obj.src" @click="photoDetail(bj.id)" alt="">
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{

            }
        },
        created(){
        axios.get('data/photodata.json')
        .then(res=>{
            this.$store.commit('addphoto',res.data.photoData)
        }).catch(err=>{
            console.log(err)
        })
        },
        photoDetail(){
            this.$router.push()
        }
    }
</script>

<style lang="scss" scoped>
img{
    width: 50%;
    float: left;
}
</style>