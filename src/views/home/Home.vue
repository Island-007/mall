<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>青春购</template>
    </nav-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      @tab-click="tabClick"
      ref="tabControlShow"
      v-show="isShowTabControl"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pulling-up="loadMore"
      :probeType="3"
    >
      <home-swiper
        :banners="banners"
        @swiper-img-load="swiperImgLoad"
      ></home-swiper>
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tab-click="tabClick"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabcontrol/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backtop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeMultidata, getHomeGoods } from "network/home.js";
import { debounce } from "common/util.js";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      tabControlOffsetTop: 0,
      isShowTabControl: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("imgLoad", () => {
      refresh();
    });
    console.log(this.$refs.tabControl.$el.offsetTop);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        console.log(res.data.list);
        this.goods[type].page += 1;
        this.goods[type].list.push(...res.data.list);
      });
    },
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControlShow.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      this.isShowBackTop = Math.abs(position.y) > 1000;
      this.isShowTabControl = Math.abs(position.y) > this.tabControlOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
    },
    swiperImgLoad() {
      this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
      console.log(this.tabControlOffsetTop);
    },
  },
};
</script>
<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: var(--color-tint);
  color: #fff;
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