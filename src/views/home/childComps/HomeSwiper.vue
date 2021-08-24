<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for="(item, id) in banners" :key="id">
        <a :href="item.link">
          <img :src="item.image" @load="imgLoad" />
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  data() {
    return {
      isLoad: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swiper-img-load");
        this.isLoad = true;
      }
    },
  },
};
</script>
<style scoped>
</style>