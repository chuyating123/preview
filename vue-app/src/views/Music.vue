<template>
  <div>
    <img v-for="obj in musiclist" :key="obj.id" class="img-list" :src="obj.bg" @click="musicDetail" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      musiclist: []
    };
  },
  created() {
    axios
      .get("data/musiclist.json")
      .then(res => {
        console.log(res);
        this.musiclist = res.data.albums;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
      musicDetail(){
          this.$router.push({path:'/MusicDetail'})
      }
  }
};
</script>

<style lang="scss" scoped>
.img-list {
  width: 50%;
  height: 33.3%;
  float: left;
}
</style>