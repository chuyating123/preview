<template>
  <div>
      <ul>
          <li v-for="obj in MovieList" :key="obj.id">
              <img src="" alt="">
          </li>
      </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      MovieList: [],
    };
  },
  created() {
    axios
      .get(
        'https://bird.ioliu.cn/v1?url=https://douban.uieee.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10'
      )
      .then((res) => {
        this.movieList=res.data
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
</style>