<template>
  <div class="bottom-bar">
    <div class="select-all">
      <selected-button
        :isSelected="isSelectedAll"
        @click.native="selectedAllGoods"
      ></selected-button>
      <span>全选</span>
    </div>
    <div class="price-sum">
      <span class="sum-text">合计:</span>
      <span class="sum-sign">￥</span>
      <span class="goods-totalprice">{{ goodsTotalPrice }}</span>
    </div>
    <div class="to-calculate" @click="toCalculate">结算</div>
  </div>
</template>
<script>
import SelectedButton from "./SelectedButton.vue";
import { mapGetters } from "vuex";
export default {
  name: "CartButtonBar",
  components: {
    SelectedButton,
  },
  computed: {
    ...mapGetters(["cartList", "cartGoodsLength"]),
    isSelectedAll() {
      if (this.cartList.length === 0) return false;
      return !this.cartList.some((item) => !item.isSelected);
    },
    goodsTotalPrice() {
      return this.cartList
        .filter((item) => item.isSelected)
        .reduce((pre, item) => {
          return pre + item.nowPrice * item.count;
        }, 0)
        .toFixed(2);
    },
  },
  methods: {
    selectedAllGoods() {
      if (this.isSelectedAll) {
        this.cartList.forEach((item) => {
          item.isSelected = false;
        });
      } else {
        this.cartList.forEach((item) => {
          item.isSelected = true;
        });
      }
    },
    toCalculate() {
      if (this.cartList.filter((item) => item.isSelected).length === 0)
        this.$toast.showToast("当前未选中商品！");
    },
  },
};
</script>
<style scoped>
.bottom-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  height: 50px;
  line-height: 44px;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}
.select-all {
  margin-left: 1rem;
  flex: 1;
  display: flex;
  align-items: center;
}
.select-all span {
  font-size: 14px;
  padding-left: 0.3rem;
  color: #a3a3a3;
}
.sum-text {
  font-size: 14px;
}
.sum-sign {
  font-size: 14px;
  color: var(--color-high-text);
}
.goods-totalprice {
  font-size: 18px;
  color: var(--color-high-text);
}
.to-calculate {
  width: 5rem;
  height: 2.2rem;
  margin: 0 1rem;
  line-height: 2.2rem;
  border-radius: 1.1rem;
  background-color: var(--color-high-text);
  color: #fff;
  text-align: center;
}
</style>