<template>
  <div>
      <div class="detail-top">
      <img :src="detail.images.small" alt="">
      <div class="detail-desc">
          <h2>{{detail.title}}</h2>
          <span>{{detail.countries[0]}}</span>
          <br>
          <span>{{detail.durations[0]}}</span>
      </div>
      </div>
      <div class="detail-bottom">
          {{detail.summary}}
      </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        detail:[]
    };
  },
  created() {
    axios
      .get(
       `https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/subject/${this.$route.query.id}?apikey=0b2bdeda43b5688921839c8ecb20399b`)
      .then(res => {
        this.detail=res.data
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style lang="scss" scoped>
.detail-top{
    width: 100%;
    height: 3rem;
    display: flex;
}
.detail-top img{
    width: 3rem;
    height: 3rem;
}
.detail-desc{
    flex: 1;
    margin-left: 0.2rem;
}
</style>