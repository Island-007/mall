<template>
  <div class="bottom-bar">
    <div class="bottom-service">
      <i class="iconfont icon-shoplight"></i>
      <span>店铺</span>
    </div>
    <div class="bottom-shop">
      <i class="iconfont icon-service_light"></i>
      <span>客服</span>
    </div>
    <div class="bottom-store">
      <i class="iconfont icon-favor_light"></i>
      <span>收藏</span>
    </div>
    <div class="bottom-operation">
      <div class="add-cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("add-to-cart");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 49px;
  display: flex;
  align-items: center;
  background-color: #fff;
  z-index: 1;
  text-align: center;
}
.bottom-service,
.bottom-shop,
.bottom-store {
  flex: 14%;
  display: flex;
  flex-direction: column;
  font-size: 14px;
}
.icon-shoplight,
.icon-service_light,
.icon-favor_light {
  font-size: 20px;
}
.bottom-operation {
  flex: 58%;
  display: flex;
  justify-content: center;
}
.add-cart,
.buy {
  height: 2.2rem;
  line-height: 2.2rem;
  color: #fff;
  font-size: 14px;
}
.add-cart {
  width: 50%;
  border-radius: 1.1rem 0 0 1.1rem;
  background-color: var(--color-tint);
}
.buy {
  width: 45%;
  border-radius: 0 1.1rem 1.1rem 0;
  background-color: var(--color-high-text);
}
</style>