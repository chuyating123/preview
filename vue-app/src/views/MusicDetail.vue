<template>
    <div>
    音乐详情页
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
            musicdata:[]
            }
        },
        created(){
          axios.get('data/musicdata.json')
          .then(res=>{
              this.musicdata=res.data.musicData
          }).catch(err=>{
              console.log(err)
          })
        }
    }
</script>

<style lang="scss" scoped>

</style>