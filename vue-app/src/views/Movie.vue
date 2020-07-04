<template>
  <div>
      <ul class="list-box">
          <li v-for="obj in movielist" :key="obj.id" class="list">
          <img :src="obj.images.medium" alt=""/>   
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      movielist: []
    };
  },
  created() {
    axios
      .get(
        'https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
      )
      .then(res => {
        this.movielist=res.data.subjects
        console.log(res)
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
</style>