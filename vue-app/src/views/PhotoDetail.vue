<template>
  <div>
    <router-link to="/Photo">
      <v-touch 
      class="img-box" 
      @swipeleft="next()" 
      @swiperight="back()"
      :style="{backgroundImage:`url(${$store.state.photo[idx].src})`}">
      </v-touch>
    </router-link>
  </div>
</template>

<script>
import Vue from "vue";
import VueTouch from "vue-touch";
Vue.use(VueTouch, { name: "v-touch" });
export default {
  data() {
    return {
      idx: this.$route.query.index
    };
  },
  mathods: {
    next() {
      this.idx++;
      if (this.idx >= this.$store.state.photo.length - 1) {
        this.idx = 0;
      }
    },
    back() {
      this.idx--;
      if (this.idx < 0) {
        this.idx = this.$store.state.photo.length - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.img-box {
  position: absolute;
  left: 0;
  top: 1rem;
  bottom: 1rem;
  right: 0;
  background: #000 center center no-repeat;
  background-size: contain;
}
</style>