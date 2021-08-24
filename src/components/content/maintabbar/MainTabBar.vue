<template>
  <div class="main-tabbar">
    <tab-bar>
      <tab-bar-item path="/home" activeColor="#ff5777">
        <template v-slot:icon><i class="iconfont icon-iov-store"></i></template>
        <template v-slot:text> <div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#ff5777">
        <template v-slot:icon>
          <i class="iconfont icon-iov-nosearch"></i>
        </template>
        <template v-slot:text> <div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#ff5777">
        <template v-slot:icon>
          <i class="iconfont icon-iov-shoppingcart"></i>
        </template>
        <template v-slot:text> <div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="#ff5777">
        <template v-slot:icon><i class="iconfont icon-iov-user"></i></template>
        <template v-slot:text> <div>我的</div></template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
</style>