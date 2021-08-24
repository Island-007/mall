<template>
  <div id="cart">
    <nav-bar class="cart-navbar">
      <template #center>购物车({{ cartGoodsLength }})</template>
    </nav-bar>
    <scroll class="content">
      <cart-list :cartList="cartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar.vue";
import Scroll from "components/common/scroll/Scroll.vue";
import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue";

import { mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar,
  },
  computed: {
    ...mapGetters(["cartGoodsLength", "cartList"]),
  },
};
</script>
<style scoped>
#cart {
  height: 100vh;
  background-color: #eee;
}
.cart-navbar {
  background-color: var(--color-tint);
  color: #fff;
}
.content {
  height: calc(100% - 44px - 49px);
  overflow: hidden;
}
</style>