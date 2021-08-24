<template>
  <div class="goods-list-item" @click="itemClick">
    <img v-lazy="getImg" alt="" @load="imgLoad" />
    <div class="good-info">
      <p class="good-title">{{ goodsItem.title }}</p>
      <span class="sign">￥</span
      ><span class="good-price">{{ goodsItem.price }}</span>
      <span class="good-sale">{{ getSale }}人付款</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    getImg() {
      return (
        this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      );
    },
    getSale() {
      return this.goodsItem.sale + "" || this.goodsItem.itemSale + "";
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit("imgLoad");
    },
    itemClick() {
      this.$router.push({
        path: "detail",
        query: {
          iid: this.goodsItem.iid,
        },
      });
    },
  },
};
</script>
<style scoped>
.goods-list-item {
  width: 48%;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}
.goods-list-item img {
  width: 100%;
}
.good-info {
  position: relative;
  padding: 0.5rem;
}
.good-info .good-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 0.3125rem;
  font-size: 14px;
}
.good-info .sign {
  font-size: 14px;
  color: var(--color-high-text);
}
.good-info .good-price {
  font-size: 18px;
  color: var(--color-high-text);
}
.good-info .good-sale {
  padding-left: 0.5rem;
  font-size: 12px;
  color: #999;
}
</style>