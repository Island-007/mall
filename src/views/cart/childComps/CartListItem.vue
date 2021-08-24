<template>
  <div class="cart-list-item">
    <div class="item-head">
      <i class="iconfont icon-shopfill"></i>
      <span class="item-shop">{{ listItem.shopName }}</span>
      <i class="iconfont icon-right"></i>
    </div>
    <div class="item-body">
      <div class="body-left">
        <selected-button
          :isSelected="listItem.isSelected"
          @click.native="changeSelected"
        ></selected-button>
        <div class="item-img">
          <img :src="listItem.image" alt="" />
        </div>
      </div>
      <div class="body-right">
        <h3 class="item-title">{{ listItem.title }}</h3>
        <p class="item-desc">{{ listItem.desc }}</p>
        <div class="item-info">
          <span class="item-price">￥{{ listItem.nowPrice }}</span>
          <span class="item-amount">×{{ listItem.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectedButton from "./SelectedButton.vue";
export default {
  name: "CartListItem",
  components: {
    SelectedButton,
  },
  props: {
    listItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeSelected() {
      this.listItem.isSelected = !this.listItem.isSelected;
    },
  },
};
</script>
<style scoped>
.cart-list-item {
  margin: 8px auto;
  width: 95vw;
  background-color: #fff;
  border-radius: 5px;
  padding-bottom: 1rem;
}
.item-head {
  display: flex;
  align-items: center;
  padding: 1rem;
  padding-left: 1.5rem;
}
.icon-shopfill {
  font-size: 20px;
}
.item-shop {
  padding: 0 0.5rem 0 0.5rem;
  font-size: 16px;
  font-weight: 700;
}
.item-body {
  display: flex;
}
.body-left {
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
}
.body-right {
  padding-right: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.item-img {
  width: 100px;
  height: 100px;
  text-align: center;
}
.item-img img {
  height: 100%;
}
.body-right {
  display: flex;
}
.item-title,
.item-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.item-title {
  font-size: 14px;
  flex: 25%;
}
.item-desc {
  margin-top: 0.5rem;
  font-size: 12px;
  flex: 50%;
}
.item-info {
  flex: 25%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.item-price {
  font-size: 18px;
  color: var(--color-high-text);
}
.item-amount {
  display: inline-block;
  width: 2rem;
  height: 1.5rem;
  line-height: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}
</style>