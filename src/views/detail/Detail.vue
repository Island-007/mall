<template>
  <div class="detail">
    <detail-nav-bar @title-click="titleClick" ref="navbar"></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :data="[topImages, goods, commentInfo, shop, detailInfo, recommendInfo]"
      :probeType="3"
    >
      <detail-swiper :topImages="topImages" ref="base"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-comment-info
        :commentInfo="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-good-info
        :detailInfo="detailInfo"
        ref="detailinfo"
      ></detail-good-info>
      <detail-recommend-info
        :recommendInfo="recommendInfo"
        ref="recommend"
      ></detail-recommend-info>
    </scroll>
    <detail-bottom-bar @add-to-cart="addToCart"></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import Scroll from "components/common/scroll/Scroll.vue";
import BackTop from "components/content/backtop/BackTop.vue";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodInfo from "./childComps/DetailGoodInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import DetailRecommendInfo from "./childComps/DetailRecommendInfo.vue";

import { getDetail, getRecommend, Goods, Shop } from "network/detail.js";
import { backTopMixin } from "common/util.js";

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodInfo,
    DetailCommentInfo,
    DetailBottomBar,
    DetailRecommendInfo,
    BackTop,
  },
  mixins: [backTopMixin],
  data() {
    return {
      iid: "",
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      commentInfo: {},
      recommendInfo: [],
      themeTops: [],
      currentIndex: -1,
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    getDetail(this.iid).then((res) => {
      console.log(res);
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo);
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.commentInfo = data.rate;
    });
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  updated() {
    this.$nextTick(() => {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.detailinfo.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
      console.log(this.themeTops);
    });
  },
  methods: {
    titleClick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollToElement(this.$refs.base.$el);
          break;
        case 1:
          this.$refs.scroll.scrollToElement(this.$refs.comment.$el);
          break;
        case 2:
          this.$refs.scroll.scrollToElement(this.$refs.detailinfo.$el);
          break;
        case 3:
          this.$refs.scroll.scrollToElement(this.$refs.recommend.$el);
          break;
      }
    },
    contentScroll(position) {
      let positionY = -position.y;
      const length = this.themeTops.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.themeTops[i] &&
          positionY < this.themeTops[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      this.isShowBackTop = Math.abs(position.y) > 1000;
    },
    addToCart() {
      const obj = {};
      obj.iid = this.iid;
      obj.shopName = this.shop.shopName;
      obj.image = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.nowPrice = this.goods.nowPrice;
      obj.count = 0;
      this.$store.dispatch("addToCart", obj).then((res) => {
        this.$toast.showToast(res);
      });
    },
  },
};
</script>
<style scoped>
.detail {
  background-color: #eee;
  position: relative;
  height: 100vh;
  z-index: 1;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>