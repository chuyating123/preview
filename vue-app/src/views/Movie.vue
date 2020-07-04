<template>
  <div>
    <ul class="list-box">
      <li v-for="obj in movielist" :key="obj.id" class="list" @click="gotodetail(obj.id)">
        <img :src="obj.images.medium" alt />
        <div class="desc">
          <h2>{{obj.title}}</h2>演员：
          <span v-for="cast in obj.casts" :key="cast.id">{{cast.name}}</span>
          <br>
          <span>年份：2019</span>
          <br>
          剧情：
          <span v-for="(genre,index) in obj.genres" :key="index">{{genre}}</span>
        </div>
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
        "https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/top250?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10"
      )
      .then(res => {
        this.movielist = res.data.subjects;
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods:{
      gotodetail(id){
        this.$router.push({path:'/MovieDetail',query:{id}})
      }
  }
};
</script>

<style lang="scss" scoped>
.list {
  color: #000000;
  display: flex;
  margin-bottom: 0.2rem;
}
.list img {
  width: 1.8rem;
  height: 2.46rem;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
}
.desc{
    flex: 1;
    margin-left: 0.2rem;
}
.desc span{
    margin-left: 0.1rem;
}
</style>