<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, id) in goods"
      :key="id"
      :goodsItem="item"
    ></goods-list-item>
  </div>
</template>
<script>
import GoodsListItem from "./GoodsListItem.vue";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
<style scoped>
.goods-list {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
}
</style>