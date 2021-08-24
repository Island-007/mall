<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/content/maintabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>

<style>
@import "assets/css/base.css";
@import "assets/icon/tabbarIcon/iconfont.css";
@import "assets/icon/baseIcon/iconfont.css";
@import "assets/icon/detailIcon/iconfont.css";
@import "assets/icon/profileIcon/iconfont.css";
@import "assets/icon/cartIcon/iconfont.css";
</style>
