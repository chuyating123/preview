<template>
  <div>
    <transition-group tag="ul" name="fade" class="swipe-box">
      <li v-for="(img,index) in imgs" :key="index" v-show="inow==index" class="swipe-list">
        <img :src="img" alt />
      </li>
    </transition-group>
    <ul class="btn-box">
      <li v-for="(img,index) in imgs" :key="index" :class="{btns:true,active:index==inow}"></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inow: 0
    };
  },
  props: ["imgs", "a"],
  created() {
    setInterval(() => {
      this.inow++;
      if (this.inow == this.imgs.length) {
        this.inow = 0;
      }
    }, 2000);
  }
};
</script>

<style lang="scss" scoped>
.swipe-box {
  height: 5rem;
  position: relative;
  .swipe-list {
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.btn-box {
  display: flex;
  justify-content: center;
  .btns {
    width: 0.2rem;
    height: 0.2rem;
    background: #ccc;
    border-radius: 50%;
    margin: 0.1rem;
  }
  .active {
    background:red;
  }
}
.fade-enter {
  transform: translate(-100%);
}
.fade-enter-active {
  transition: transform 1s linear;
}
.fade-enter-to {
  transform: translate(0);
}
.fade-leave {
  transform: translate(0);
}
.fade-leave-active {
  transition: transform 1s linear;
}
.fade-leave-to {
  transform: translate(100%);
}
</style>